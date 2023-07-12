<script lang="ts">
	import { auth, user } from '$lib/firebase';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		const credential = await signInWithPopup(auth, provider);

		const idToken = await credential.user.getIdToken();

		const res = await fetch('/api/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ idToken })
		});
	}
</script>

{#if $user}
	<slot />
{:else}
	<button class="btn" on:click={signInWithGoogle}>Sign in with Google</button>
{/if}
