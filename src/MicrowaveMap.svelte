<script lang="ts">
    import "leaflet/dist/leaflet.css";
    import L from "leaflet";
    import Map from "./lib/leaflet/Map.svelte";
    import locations from "../data/locations.json";
    import MapMarker from "./lib/leaflet/MapMarker.svelte";
    import { repoUrl } from "./lib/const";

    import publicMarker from "../assets/markers/public.png";
    import monetaryMarker from "../assets/markers/monetary.png";
    import buildingAccessMarker from "../assets/markers/building.png";

    export let height = 400;

    function getIconByAccess(access: string): L.Icon.Default {
        let iconUrl;

        switch (access) {
            case "monetary":
                iconUrl = monetaryMarker;
                break;
            case "building":
                iconUrl = buildingAccessMarker;
                break;
            default:
                iconUrl = publicMarker;
                break;
        }

        // Leaflet is a pain
        iconUrl = "../../../.." + iconUrl;
        return new L.Icon.Default({ iconUrl: iconUrl, iconRetinaUrl: iconUrl });
    }
</script>

<Map
    initialLatLng={[40.800901, -77.86094]}
    initialZoomLevel={17}
    height={height + "px"}
    width="100%"
>
    {#each locations as loc}
        <MapMarker
            lat={loc.lat}
            lng={loc.lng}
            icon={getIconByAccess(loc.access)}
        >
            <p class="has-text-weight-semibold is-size-6">{loc.building}</p>

            {#if loc.room_exact}
                <p>Room: {loc.room_exact}</p>
            {/if}

            {#if loc.notes}
                <p>{loc.notes}</p>
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

            <a
                href="https://www.google.com/maps/dir/?api=1&destination={loc.lat +
                    ',' +
                    loc.lng}&travelmode=walking"
            >
                <button
                    class="button is-small is-fullwidth has-text-centered is-link is-outlined"
                >
                    Navigate
                </button>
            </a>
            <p class="has-text-centered m-0 p-0 pt-3">
                <a
                    href="{repoUrl}/tree/main/data/locations/{loc.id}.yml"
                    class="has-text-danger"
                >
                    Edit
                </a>
            </p>
        </MapMarker>
    {/each}
</Map>
