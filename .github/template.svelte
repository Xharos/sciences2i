<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import K from "$lib/components/K.svelte";

    export let data;
    let title = "Lois dans l'ARQS"; // A MODIFIER SUIVANT DATA.JS

    const [prevElement, element, nextElement] = data.getElement(title);
    let url = element.link;
    let lastDate = element.lastDate;

    // A modifier
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
            content="TODO A MODIFIER."
            name="description"
    />
</svelte:head>

<Scroller {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title} {url}>
    <div slot="foreground">
        <h1>Mon premier titre</h1>

    </div>
</Scroller>
