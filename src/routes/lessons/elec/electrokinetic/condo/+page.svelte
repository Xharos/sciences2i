<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import K from "$lib/components/K.svelte";

    export let data;
    let title = "Condensateur et bobine, circuits RC et RL";

    const [prevElement, element, nextElement] = data.getElement(title);
    let url = element.link;
    let lastDate = element.lastDate;

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTROCINETIQUE,
    ];

    const lastCrumb = {
        textKey: title,
    };
</script>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta
            content="Cours sur les lois électriques dans l'approximation des régimes quasi stationnaires (ARQS)."
            name="description"
    />
</svelte:head>

<Scroller {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title} {url}>
    <div slot="background"/>
    <div slot="foreground">
        <h1>La bobine</h1>
    </div>
</Scroller>
