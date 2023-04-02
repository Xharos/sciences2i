<script context="module">
    import {
        faBolt,
        faPersonChalkboard,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
    
    export const Crumbs = {
        COURS: {
            textKey: "cours",
            link: "/lessons",
            icon: faPersonChalkboard,
        },
        ELECTRICITE: {
            textKey: "electricite",
            link: "/lessons/elec",
            icon: faBolt,
        },
        ELECTROCINETIQUE: {
            textKey: "electrocinetique",
            link: "/lessons/elec/electrokinetic",
            icon: faBolt,
        },
    };
</script>