<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import {
        faScrewdriverWrench,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.MECANIQUE,
    ];

    export let data;

    let description = "Liste des cours de mécanique en sciences industrielles de l'ingénieur.";
</script>

<svelte:head>
    <title>Mécanique | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={Crumbs.MECANIQUE.icon}/>
                    </span>
                    <span class="space">{Crumbs.MECANIQUE.textKey}</span>
                </span>
            </div>
            <Breadcrumb crumbs={crumbs}/>
            <div class="content">
                <p>
                    Le génie mécanique peut se décomposer en plusieurs
                    catégories détaillés ci-dessous :
                </p>
                <div class="columns">
                    <div class="column is-4">
                        <h2 class="icon-text is-size-4 has-text-primary">
                            <span class="icon">
                                <Fa icon={Crumbs.SOLIDE.icon}/>
                            </span>
                            <span style="margin-left: 2px;"><a
                                    href={Crumbs.SOLIDE.link}>{Crumbs.SOLIDE.textKey}</a></span>
                        </h2>
                        <ul>
                            {#each data.summaries.solids as {link, title, tagName, tagColor}}
                                <li>
                                    {#if tagName === 'WIP...'}
                                        <span class="tag is-rounded is-light {tagColor}">{tagName}</span>
                                        {title}
                                    {:else}
                                        <span class="tag is-rounded is-light {tagColor}">{tagName}</span>
                                        <a href={link}>{title}</a>
                                    {/if}
                                </li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
