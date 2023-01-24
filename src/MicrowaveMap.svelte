<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import Map from "./lib/leaflet/Map.svelte";
    import locations from "../data/locations.json";
    import MapMarker from "./lib/leaflet/MapMarker.svelte";

    function generateIcon(color: string = "#0000FF"): L.DivIcon {
        let element: HTMLElement = document.createElement("div");

        element.style.width = "0";
        element.style.height = "0";
        element.style.borderLeft = "15px solid transparent";
        element.style.borderRight = "15px solid transparent";
        element.style.borderTop = "50px solid " + color;

        element.style.position = "absolute";
        element.style.left = "-9px";
        element.style.top = "-25px";

        return L.divIcon({ className: "", html: element });
    }

    function getIconByAccess(access: string): L.DivIcon {
        switch (access) {
            case "monetary":
                return generateIcon("#ff9900");
                break;
            case "building":
                return generateIcon("#ff0000");
            default:
                return generateIcon("#0066ff");
        }
    }
</script>

<Map
    initialLatLng={[40.800901, -77.86094]}
    initialZoomLevel={17}
    height="844px"
    width="100%"
>
    {#each locations as loc}
        <MapMarker
            lat={loc.lat}
            lng={loc.lng}
            icon={getIconByAccess(loc.access)}
        >
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
