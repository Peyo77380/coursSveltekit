<script lang="ts">
	import { goto } from '$app/navigation';
	import { db, userData, user } from '$lib/firebase';
	import { doc, getDoc, writeBatch } from 'firebase/firestore';

	let username = '';
	let loading = false;
	let isAvailable = false;

	let debounceTimer: NodeJS.Timeout;

	const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

	$: isValid = username?.length > 2 && username.length < 16 && re.test(username);
	$: isTouched = username.length > 0;

	async function checkAvailabilitiy() {
		isAvailable = false;
		console.log(debounceTimer);
		clearTimeout(debounceTimer);
		loading = true;

		debounceTimer = setTimeout(async () => {
			const ref = doc(db, 'usernames', username);
			const exists = await getDoc(ref).then((doc) => doc.exists());

			isAvailable = !exists;
			loading = false;
		}, 500);
	}

	async function confirmUsername() {
		const batch = writeBatch(db);
		batch.set(doc(db, 'usernames', username), { uid: $user?.uid });
		batch.set(doc(db, 'users', $user!.uid), {
			username,
			photoUrl: $user?.photoURL ?? null,
			published: true,
			bio: 'Look Ma, No hands !',
			links: [
				{
					title: 'Test Link',
					url: 'https://kung.foo',
					icon: 'custom'
				}
			]
		});

		await batch.commit();
	}

	function goToNextPage() {
		goto('/login/photo');
	}
</script>

{#if $userData?.username}
	<p>Your username is <span class="text-success">@{$userData?.username}</span></p>
	<button class="btn btn-success" on:click={goToNextPage}>Go to next step</button>
{:else}
	<h2>Choose a username that fits you</h2>

	<form class="px-8" on:submit|preventDefault={confirmUsername}>
		<label class="label" for="username">
			<span class="label-text">What is your name?</span>
		</label>
		<input
			type="text"
			id="username"
			name="username"
			placeholder="Username"
			class="input input-bordered w-full max-w-xs"
			class:input-error={!isAvailable && username !== ''}
			class:input-success={isAvailable && isValid && !loading}
			bind:value={username}
			on:input={checkAvailabilitiy}
		/>
		{#if loading}
			<p class="text-secondary">Checking availability of @{username}...</p>
		{/if}
		{#if isValid && !isAvailable && !loading && isTouched}
			<p class="text-warning text-sm">@{username} is not available</p>
		{/if}

		<button class="btn btn-success" disabled={!isAvailable}>Confirm username @{username}</button>
	</form>
{/if}
