// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { derived, writable, type Readable } from 'svelte/store';
import { doc } from 'firebase/firestore';

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: 'AIzaSyAnMJoR2V8Z3p-Twl4nFBH76thX0SiB8Hk',

	authDomain: 'fireshipsveltecourse.firebaseapp.com',

	projectId: 'fireshipsveltecourse',

	storageBucket: 'fireshipsveltecourse.appspot.com',

	messagingSenderId: '733504540968',

	appId: '1:733504540968:web:4b1fd0594bff4e9bb3401d',

	measurementId: 'G-WEKEZ94RSM'
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user)  => {
			set(user);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}

export const user = userStore();

/**
 * Handle a reusable store
 * @param path Document path or reference
 * @returns A store with realtime updates on document data
 */
export function docStore<T>(path: string) {
	let unsubscribe: () => void;

	const docRef = doc(db, path);

	const { subscribe } = writable<T | null>(null, (set) => {
		onSnapshot(docRef, (snapshot) => {
			set((snapshot.data() as T) ?? null);
		});
	});

	return {
		subscribe,
		ref: docRef,
		id: docRef.id
	};
}

interface UserData {
	username: string;
	bio: string;
	photoURL: string;
	links: any[];
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
	if (!$user) {
		return set(null);
	}
	return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
});
