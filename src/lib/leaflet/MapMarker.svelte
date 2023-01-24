<script lang="ts">
	import "leaflet/dist/leaflet.css";
	import L from "leaflet";
	import { getContext, onMount } from "svelte";

	let popupBodyContent: HTMLElement;

	export let lat: number = 0;
	export let lng: number = 0;

	const map: L.Map = getContext("leaflet-map");

	onMount(() => {
		let marker: L.Marker = L.marker(new L.LatLng(lat, lng));
		if (popupBodyContent.innerHTML) {
			marker.bindPopup(popupBodyContent.innerHTML);
		}
		marker.addTo(map);
	});
</script>

<div bind:this={popupBodyContent} hidden>
	<slot />
</div>
