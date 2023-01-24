<script lang="ts">
    import Map from "./lib/leaflet/Map.svelte";
    import locations from "../data/locations.json";
    import MapMarker from "./lib/leaflet/MapMarker.svelte";
</script>

<Map initialLatLng={[40.800901, -77.86094]} initialZoomLevel={17} height=844px width=100%>
    {#each locations as loc }
        <MapMarker lat={loc.lat} lng={loc.lng} />
    {/each}
</Map>
