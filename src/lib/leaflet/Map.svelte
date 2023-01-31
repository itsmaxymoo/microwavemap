<script lang="ts">
	import "leaflet/dist/leaflet.css";
	import L from "leaflet";
	import { onMount, setContext } from "svelte";

	let mapDiv: HTMLElement = null;
	export let divId: string = "map";
	export let initialLatLng: [number, number] = [0, 0];
	export let initialZoomLevel: number = 10;

	export let height: string = "400px";
	export let width: string = "400px";

	let map: L.Map;
	let mapLoaded: boolean = false;

	// Create map
	map = L.map(L.DomUtil.create("div")).setView(
		new L.LatLng(...initialLatLng),
		initialZoomLevel
	);

	// Set tiles
	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);

	// Set svelte context
	setContext("leaflet-map", map);

	// Wait for DOM to load, then
	onMount(async () => {
		mapDiv.appendChild(map.getContainer());
		map.getContainer().style.width = "100%";
		map.getContainer().style.height = "100%";
		// Required: set height of map div
		mapDiv.style.height = height;
		mapDiv.style.width = width;

		map.invalidateSize();

		mapLoaded = true;
	});

	$: {
		height;
		if (mapLoaded) {
			mapDiv.style.height = height;
			map.invalidateSize();
		}
	}
</script>

<div id={divId} class="map" bind:this={mapDiv} />
<slot />
