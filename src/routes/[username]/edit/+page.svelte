<script lang="ts">
	import { page } from '$app/stores';
	import { db, user, userData } from '$lib/firebase';
	import { writable } from 'svelte/store';
	import type { PageData } from './$types';
	import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

	export let data: PageData;

	let showForm = false;

	$: titleIsValid = $formData.title.length < 20 && $formData.title.length > 0;
	$: urlIsValid = $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
	$: formIsValid = titleIsValid && urlIsValid;

	let icons = ['Twitter', 'Facebook', 'Tinder', "Copains d'avant", 'Custom'];

	const formDefaults = {
		icon: 'custom',
		title: '',
		url: ''
	};

	const formData = writable(formDefaults);
	async function addLink(e: SubmitEvent) {
		const userRef = doc(db, 'users', $user!.uid);

		await updateDoc(userRef, {
			links: arrayUnion({
				...$formData,
				id: Date.now().toString()
			})
		});

		formData.set({
			icon: 'custom',
			title: '',
			url: ''
		});

		showForm = false;
	}

	function cancelLink() {
		formData.set(formDefaults);
		showForm = false;
	}
</script>

<main class="max-w-xl mx-auto">
	{#if $userData?.username == $page.params.username}
		<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center">Edit your profile</h1>

		{#if showForm}
			<form on:submit|preventDefault={addLink} class="bg-base-200 p-6 w-full mx-auto rounded-xl">
				<label for="icon" class="label">
					<span class="label-text">The icon of your link</span>
				</label>
				<select
					name="icon"
					id="icon"
					bind:value={$formData.icon}
					class="select select-bordered w-full max-w-xs"
				>
					{#each icons as icon}
						<option value={icon.toLocaleLowerCase()}>{icon}</option>
					{/each}
				</select>

				<label for="title" class="label">
					<span class="label-text">The title of your link</span>
				</label>
				<input
					name="title"
					id="title"
					placeholder="Title"
					bind:value={$formData.title}
					type="text"
					class="input input-sm"
					class:input-error={!titleIsValid && $formData.title.length > 0}
				/>

				<label for="url" class="label">
					<span class="label-text">The URL of your link</span>
				</label>
				<input
					name="url"
					id="url"
					placeholder="https://"
					bind:value={$formData.url}
					type="text"
					class="input input-sm"
					class:input-error={!urlIsValid && $formData.url.length > 0}
				/>

				<div class="my-4">
					{#if !titleIsValid && $formData.title.length > 0}
						<p class="text-error text-xs">Please provide a title</p>
					{/if}
					{#if !urlIsValid && $formData.url.length > 0}
						<p class="text-error text-xs">Please provide a valid URL</p>
					{/if}
					{#if titleIsValid && urlIsValid}
						<p class="text-success text-xs">Allright !</p>
					{/if}
				</div>

				<button disabled={!formIsValid} type="submit" class="w-full mt-6 btn btn-success block">
					Add Link
				</button>
				<button type="button" class="w-full mt-6 btn block btn-error" on:click={cancelLink}
					>Cancel</button
				>
			</form>
		{:else}
			<button
				on:click={() => (showForm = true)}
				class="btn btn-outline btn-info block mx-auto my-4"
			>
				Add a Link
			</button>
			<button
				on:click={() => (showForm = true)}
				class="btn btn-outline btn-error block mx-auto my-4"
			>
				Delete a link
			</button>
		{/if}
	{/if}
</main>
