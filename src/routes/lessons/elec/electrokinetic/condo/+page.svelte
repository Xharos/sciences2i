<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import K from "$lib/components/K.svelte";

    export let data;
    let title = "Condensateur et bobine, circuits RC et RL";

    const [prevElement, element, nextElement] = data.getElement(title);
    let lastDate = element.lastDate;

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTROCINETIQUE,
    ];

    const lastCrumb = {
        textKey: title,
    };
    let description = "Cours sur les bobines et condensateurs dans l'approximation des régimes quasi stationnaires (ARQS).";
</script>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<Scroller author="fabien" {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title}>
    <div slot="foreground">
        <h1>La bobine</h1>
    </div>
</Scroller>
