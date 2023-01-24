<script lang="ts">
	import "leaflet/dist/leaflet.css";
	import L from "leaflet";
	import { getContext, onMount } from "svelte";

	export let lat: number = 0;
	export let lng: number = 0;

	const map: L.Map = getContext("leaflet-map");

	onMount(() => {
		let marker: L.Marker = L.marker(new L.LatLng(lat, lng)).addTo(map);
	});
</script>
