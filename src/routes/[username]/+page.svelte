<script lang="ts">
	import SortableList from '$lib/components/SortableList.svelte';
	import UserLink from '$lib/components/UserLink.svelte';
	import { doc, setDoc } from 'firebase/firestore';
	import type { PageData } from './$types';
	import { db, user } from '$lib/firebase';

	export let data: PageData;

	function sortList(e: CustomEvent) {
		const newList = e.detail;
		const userRef = doc(db, 'users', $user!.uid);
		setDoc(userRef, { links: newList }, { merge: true });
		data.links = newList;
	}
</script>

<svelte:head>
	<title>@{data.username} Links</title>
	<meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">
	<h1 class="text-7xl text-purple-500">
		@{data.username}
	</h1>

	<img src={data.photoURL ?? '/user.png'} alt="photoURL" width="256" class="mx-auto" />

	<p class="text-xl my-8">{data.bio ?? 'no bio yet...'}</p>
	<SortableList list={data.links} let:item let:index on:sort={sortList}>
		<UserLink {...item} />
	</SortableList>
</main>
