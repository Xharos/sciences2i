<script>
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import {
        faBolt,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
    ];

    export let data;
</script>

<svelte:head>
    <title>Électrique | Sciences 2I</title>
    <meta
            content="Liste des cours d'électricité en sciences industrielles de l'ingénieur."
            name="description"
    />
</svelte:head>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={faBolt}/>
                    </span>
                    <span class="space">Génie électrique</span>
                </span>
            </div>
            <Breadcrumb crumbs={crumbs}/>
            <div class="content">
                <p>
                    Le génie électrique peut se décomposer en plusieurs
                    catégories détaillés ci-dessous :
                </p>
                <div class="columns">
                    <div class="column is-4">
                        <h2 class="icon-text is-size-4 has-text-primary">
                            <span class="icon">
                                <Fa icon={Crumbs.ELECTROCINETIQUE.icon}/>
                            </span>
                            <span style="margin-left: 2px;"><a
                                    href={Crumbs.ELECTROCINETIQUE.link}>{Crumbs.ELECTROCINETIQUE.textKey}</a></span>
                        </h2>
                        <ul>
                            {#each data.summaries.electrokinetics as {link, title, tagName, tagColor}}
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
                    <div class="column is-4">
                        <h2 class="icon-text is-size-4 has-text-primary">
                            <span class="icon">
                                <Fa icon={Crumbs.ELECTRONIQUE.icon}/>
                            </span>
                            <span style="margin-left: 2px;"><a
                                    href={Crumbs.ELECTRONIQUE.link}>{Crumbs.ELECTRONIQUE.textKey}</a></span>
                        </h2>
                        <ul>
                            {#each data.summaries.electronics as {link, title, tagName, tagColor}}
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
                    <div class="column is-4">
                        <h2 class="icon-text is-size-4 has-text-primary">
                            <span class="icon">
                                <Fa icon={Crumbs.ELECTROTECHNIQUE.icon}/>
                            </span>
                            <span style="margin-left: 2px;"><a
                                    href={Crumbs.ELECTROTECHNIQUE.link}>{Crumbs.ELECTROTECHNIQUE.textKey}</a></span>
                        </h2>
                        <ul>
                            {#each data.summaries.electricals as {link, title, tagName, tagColor}}
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
