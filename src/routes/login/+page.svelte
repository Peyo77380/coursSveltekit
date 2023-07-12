<script lang="ts">
	import { auth, user } from '$lib/firebase';
	import { signOut } from 'firebase/auth';
</script>

<h2>Login</h2>
<h2>Hello {$user?.displayName}</h2>
<p class="text-green-400">You are logged in</p>
<button class="btn" on:click={() => signOut(auth)}>Sign out</button>
