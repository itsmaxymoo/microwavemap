<script lang="ts">
	import "leaflet/dist/leaflet.css";
	import L from "leaflet";
	import { onMount } from "svelte";

	let mapDiv: HTMLElement = null;
	export let divId: string = "map";
	export let initialLatLng: [number, number] = [0, 0];
	export let initialZoomLevel: number = 10;

	export let height: string = "400px";
	export let width: string = "400px";

	// Wait for DOM to load, then
	onMount(async () => {
		// Required: set height of map div
		mapDiv.style.height = height;
		mapDiv.style.width = width;

		// Create map
		let map: L.Map = L.map("map").setView(
			new L.LatLng(...initialLatLng),
			initialZoomLevel
		);

		// Set tiles
		L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
			maxZoom: 19,
			attribution:
				'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		}).addTo(map);
	});
</script>

<div id={divId} class="map" bind:this={mapDiv} />
