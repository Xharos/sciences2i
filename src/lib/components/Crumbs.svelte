<script context="module">
    import {
        faBolt,
        faPersonChalkboard,
        faPlug,
        faChargingStation,
        faTowerBroadcast,
        faComputer,
    } from "@fortawesome/free-solid-svg-icons";

    export const Crumbs = {
        COURS: {
            textKey: "Cours",
            link: "/lessons",
            icon: faPersonChalkboard,
        },
        ELECTRICITE: {
            textKey: "Électricité",
            link: "/lessons/elec",
            icon: faBolt,
        },
        INFORMATIQUE: {
            textKey: "Informatique",
            link: "/lessons/info",
            icon: faComputer,
        },
        ELECTRONIQUE: {
            textKey: "Électronique",
            link: "/lessons/elec/electronic",
            icon: faTowerBroadcast,
        },
        ELECTROCINETIQUE: {
            textKey: "Électrocinétique",
            link: "/lessons/elec/electrokinetic",
            icon: faPlug,
        },
        ELECTROTECHNIQUE: {
            textKey: "Électrotechnique",
            link: "/lessons/elec/electrical",
            icon: faChargingStation,
        },
    };
</script>