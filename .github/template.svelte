<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import K from "$lib/components/K.svelte";

    // mettre ici l'url complet de la page en cours
    let url = "/lessons/elec/electrokinetic/1";

    //date de dernière modification
    let lastDate = "29/03/2023";

    //titre de la page et ressource
    let title = "TODO a modifier";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTROCINETIQUE,
    ];

    const lastCrumb = {
        textKey: title,
        link: null,
        icon: null,
    };
</script>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta
            content="TODO a modifier."
            name="description"
    />
</svelte:head>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta
            content="Cours sur les lois électriques dans l'approximation des régimes quasi stationnaires (ARQS)."
            name="description"
    />
</svelte:head>

<Scroller {crumbs} {lastCrumb} {lastDate} {title} {url}>
    <div slot="foreground">
        <h1>Chapitre 1 </h1>
    </div>
</Scroller>