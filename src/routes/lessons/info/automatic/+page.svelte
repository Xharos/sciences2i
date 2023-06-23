<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import Fa from "svelte-fa";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.INFORMATIQUE,
        Crumbs.AUTOMATIQUE,
    ];

    let description = "Liste des cours d'automatique en sciences industrielles de l'ingénieur.";
</script>

<svelte:head>
    <title>Automatique | Sciences 2I</title>
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
                        <Fa icon={Crumbs.ELECTROTECHNIQUE.icon}/>
                    </span>
                    <span class="space">{Crumbs.ELECTROTECHNIQUE.textKey}</span>
                </span>
            </div>
            <Breadcrumb crumbs={crumbs}/>
            <div class="content">
                <p>
                    Le terme électrotechnique désigne l'étude des applications
                    techniques de l'électricité ou encore, la discipline qui
                    étudie la production, le transport, le traitement, la
                    transformation et l'utilisation de l'énergie électrique.
                </p>
            </div>
        </section>
    </div>
</div>
