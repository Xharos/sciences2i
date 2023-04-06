<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import Fa from "svelte-fa";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.MECANIQUE,
        Crumbs.SOLIDE,
    ];

    let description = "Liste des cours de mécanique du solide en sciences industrielles de l'ingénieur.";
</script>

<svelte:head>
    <title>Mécanique solide | Sciences 2I</title>
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
                        <Fa icon={Crumbs.SOLIDE.icon}/>
                    </span>
                    <span class="space">{Crumbs.SOLIDE.textKey}</span>
                </span>
            </div>
            <Breadcrumb crumbs={crumbs}/>
            <div class="content">
                <p>
                    Le terme mécanique du solide est la partie de la mécanique qui s'intéresse aux objets que l'on ne
                    peut réduire en un point matériel.
                </p>
            </div>
        </section>
    </div>
</div>
