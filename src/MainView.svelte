<script>
	import { appName } from "./lib/const";
	import MicrowaveMap from "./MicrowaveMap.svelte";

	let headerHeight = 0;
	let bodyHeight = 0;
	let height = 0;
	$: {
		height = bodyHeight - headerHeight;
	}
</script>

<svelte:window bind:innerHeight={bodyHeight} />

<header bind:clientHeight={headerHeight}>
	<section class="hero is-small is-link">
		<div class="hero-body">
			<nav class="level">
				<div class="level-left">
					<h1 class="title mb-1">{appName}</h1>
				</div>
			</nav>
		</div>
	</section>
</header>

<MicrowaveMap {height} />
