<script lang="ts">
    import Map from "./lib/leaflet/Map.svelte";
    import locations from "../data/locations.json";
    import MapMarker from "./lib/leaflet/MapMarker.svelte";
</script>

<Map
    initialLatLng={[40.800901, -77.86094]}
    initialZoomLevel={17}
    height="844px"
    width="100%"
>
    {#each locations as loc}
        <MapMarker lat={loc.lat} lng={loc.lng}>
            <p class="has-text-weight-semibold is-size-6">{loc.building}</p>
            {#if loc.room_approx}
                <p>{loc.room_approx}</p>
            {/if}
            {#if loc.room_exact}
                <p>Room: {loc.room_exact}</p>
            {/if}
            {#if loc.access && loc.access != "public"}
                <p>
                    {#if loc.access == "monetary"}
                        It may cost money to access this microwave.
                    {:else if loc.access == "building"}
                        You may need special access to enter this area.
                    {/if}
                </p>
            {/if}
        </MapMarker>
    {/each}
</Map>
