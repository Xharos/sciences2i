<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import Fa from "svelte-fa";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTRONIQUE,
    ];

    let description = "Liste des cours d'électronique en sciences industrielles de l'ingénieur.";
</script>

<svelte:head>
    <title>Électronique | Sciences 2I</title>
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
                        <Fa icon={Crumbs.ELECTRONIQUE.icon}/>
                    </span>
                    <span class="space">{Crumbs.ELECTRONIQUE.textKey}</span>
                </span>
            </div>
            <Breadcrumb crumbs={crumbs}/>
            <div class="content">
                <p>
                    Le terme électronique désigne une branche de la physique
                    appliquée, qui s'intéresse aux phénomènes de conduction
                    électrique et aux équipements associés.
                </p>
            </div>
        </section>
    </div>
</div>
