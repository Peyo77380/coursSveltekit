<script lang="ts">
	import { page } from '$app/stores';
	import AnimatedRoute from '$lib/components/AnimatedRoute.svelte';
	import AuthChecked from '$lib/components/AuthChecked.svelte';
	import { user, userData } from '$lib/firebase';

	$user;
	$userData;
</script>

<nav class="mx-auto py-8 steps steps-horizontal">
	<a href="/login/" class="step step-primary">Sign In</a>
	<a
		href="/login/username"
		class="step"
		class:step-primary={$page.route.id?.match(/username|photo|done/g)}>Username</a
	>
	<a href="/login/photo" class="step" class:step-primary={$page.route.id?.match(/photo|done/g)}
		>Picture</a
	>
	<a href="/login/done" class="step" class:step-primary={$page.route.id?.match(/done/g)}
		>You're done</a
	>
</nav>

<AnimatedRoute>
	<main class="card w-4/6 bg-neutral text-neutral-content mx-auto">
		<div class="card-body items-center text-center">
			<AuthChecked>
				<slot />
			</AuthChecked>
		</div>
	</main>
</AnimatedRoute>
