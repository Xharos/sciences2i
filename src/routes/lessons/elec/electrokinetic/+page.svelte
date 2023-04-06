<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import Fa from "svelte-fa";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTROCINETIQUE,
    ];
    let description = "Liste des cours d'électrocinétique en sciences industrielles de l'ingénieur.";
</script>

<svelte:head>
    <title>Électrocinétique | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={Crumbs.ELECTROCINETIQUE.icon}/>
                    </span>
                    <span class="space">{Crumbs.ELECTROCINETIQUE.textKey}</span>
                </span>
            </div>
            <Breadcrumb crumbs={crumbs}/>
            <div class="content">
                <p>
                    Le terme électrocinétique désigne l'ensemble des phénomènes
                    et des lois relatifs aux charges électriques en mouvement,
                    ainsi que leur étude.
                </p>
            </div>
        </section>
    </div>
</div>
