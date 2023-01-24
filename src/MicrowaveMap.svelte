<script lang="ts">
    import Map from "./lib/leaflet/Map.svelte";
    import locations from "../data/locations.json";
</script>

<Map initialLatLng={[40.800901, -77.86094]} initialZoomLevel={17} height=844px width=100% />
