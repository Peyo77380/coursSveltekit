<script lang="ts">
	import { goto } from '$app/navigation';
	import { db, storage, user, userData } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

	let previewURL: string;
	let uploading = false;
	let uploaded = $user?.photoURL || false;

	async function upload(e: any) {
		uploading = true;
		uploaded = false;
		const file = e.target.files[0];
		previewURL = URL.createObjectURL(file);

		const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);

		const result = await uploadBytes(storageRef, file);

		const url = await getDownloadURL(result.ref);

		await updateDoc(doc(db, 'users', $user!.uid), { photoURL: url });

		uploading = false;
		uploaded = true;
	}

	const goToNextPage = () => goto('/login/done');
</script>

<h2>Upload your nicest smile !</h2>

<form class="px-8" on:submit|preventDefault={upload}>
	<div class="w-3/4 mx-auto">
		<img
			src={previewURL ?? $userData?.photoURL}
			alt="Profile Picture"
			width="256"
			height="256"
			class="mx-auto"
		/>
	</div>
	<label class="label" for="photoURL">
		<span class="label-text">Pick a file</span>
	</label>
	<input
		on:change={upload}
		type="file"
		id="photoURL"
		class="file-input w-full max-w-xs"
		accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
	/>

	{#if uploading}
		<div>
			<p>Uploading ...</p>
			<progress class="progress progress-info w-56 mt-6" />
		</div>
	{/if}

	{#if uploaded}
		<div class="py-8">
			<button class="btn btn-success w-64" on:click={goToNextPage}>Next !</button>
		</div>
	{/if}
</form>
