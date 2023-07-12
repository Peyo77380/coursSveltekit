import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import {
	FBASE_PROJECT_ID,
	FBASE_CLIENT_EMAIL,
	FBASE_PRIVATE_KEY
} from '$env/static/private';
import pkg from 'firebase-admin';

try {
	pkg.initializeApp({
		credential: pkg.credential.cert({
			projectId: FBASE_PROJECT_ID,
			clientEmail: FBASE_CLIENT_EMAIL,
			privateKey: FBASE_PRIVATE_KEY
		})
	});
} catch (err: any) {
	if (!/already exists/u.test(err.message)) {
		console.error('Firebase Admin Error : ', err.stack);
	}
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
