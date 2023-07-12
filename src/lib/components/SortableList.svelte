<script lang="ts">
	import { flip } from 'svelte/animate';
	import { createEventDispatcher } from 'svelte';

	export let list: any[];
	let isOver: string | boolean = false;

	function getDraggedParent(node: any) {
		if (!node.dataset.index) {
			return getDraggedParent(node.parentNode);
		}
		return { ...node.dataset };
	}

	function onDragStart(e: DragEvent) {
		const dragged = getDraggedParent(e.target);
		e.dataTransfer?.setData('source', dragged?.index.toString());
	}

	async function onDragOver(e: DragEvent) {
		// @ts-ignore
		const id = e.target.dataset?.id;
		const dragged = getDraggedParent(e.target);
		isOver = dragged?.id ?? false;
	}

	async function onDragLeave(e: DragEvent) {
		const dragged = getDraggedParent(e.target);
		isOver === dragged?.id ?? false;
	}

	async function onDrop(e: DragEvent) {
		isOver = false;
		const dragged = getDraggedParent(e.target);
		reorder({
			from: e.dataTransfer?.getData('source'),
			to: dragged.index
		});
	}

	const dispatch = createEventDispatcher();
	const reorder = ({ from, to }: any) => {
		const newList = [...list];
		newList[from] = [newList[to], (newList[to] = newList[from])][0];
		dispatch('sort', newList);
	};
</script>

{#if list?.length}
	<ul class="list-none">
		{#each list as item, index (item.id)}
			<li
				data-index={index}
				data-id={item.id}
				draggable="true"
				on:dragstart={onDragStart}
				on:dragover|preventDefault={onDragOver}
				on:dragleave={onDragLeave}
				on:drop|preventDefault={onDrop}
				animate:flip={{ duration: 200 }}
				class:over={item.id === isOver}
				class="stack w-full max-w-md my-4 text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"
			>
				<slot {item} {index} />
			</li>
		{/each}
	</ul>
{:else}
	<p class="text-info text-sm">Nothing here</p>
{/if}

<style>
	.over {
		@apply border-gray-400 scale-105;
	}
</style>
