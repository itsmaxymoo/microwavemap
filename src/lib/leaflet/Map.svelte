<script lang="ts">
	import "leaflet/dist/leaflet.css";
	import L from "leaflet";
	import { onMount } from "svelte";

	export let divId: string = "map";
	export let initialLatLng: [number, number] = [0, 0];
	export let initialZoomLevel: number = 10;

	// Wait for DOM to load, then
	onMount(async () => {
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

<div id={divId} class="map" />

<style>
	.map {
		height: 90vh;
		width: 100%;
	}
</style>
