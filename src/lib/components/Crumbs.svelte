<script context="module">
    import {
        faBolt,
        faPersonChalkboard,
        faPlug,
        faChargingStation,
        faTowerBroadcast,
    } from "@fortawesome/free-solid-svg-icons";

    export const Crumbs = {
        COURS: {
            textKey: "cours",
            link: "/lessons",
            icon: faPersonChalkboard,
        },
        ELECTRICITE: {
            textKey: "électricité",
            link: "/lessons/elec",
            icon: faBolt,
        },
        ELECTRONIQUE: {
            textKey: "électronique",
            link: "/lessons/elec/electronic",
            icon: faTowerBroadcast,
        },
        ELECTROCINETIQUE: {
            textKey: "électrocinétique",
            link: "/lessons/elec/electrokinetic",
            icon: faPlug,
        },
        ELECTROTECHNIQUE: {
            textKey: "électrotechnique",
            link: "/lessons/elec/electrical",
            icon: faChargingStation,
        },
    };
</script>