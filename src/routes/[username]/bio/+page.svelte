<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let data: PageData;
</script>

<h1>Edit Bio</h1>

<p>Current bio : {data.bio}</p>

<p>Status code : {$page.status}</p>
<p>{$page.form?.problem ?? ""}</p>

<form method="post" use:enhance>
	<label for="bio">Votre bio</label>
	<textarea name="bio" id="bio" cols="30" rows="10"></textarea>
	<button class="btn btn-success">Update Bio</button>
</form>