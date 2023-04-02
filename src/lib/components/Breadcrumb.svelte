<script>
    import Fa from "svelte-fa";

    export let crumbs = [];
    export let lastCrumb = null;

</script>

<nav aria-label="breadcrumbs" class="breadcrumb">
    <ul>
        {#each crumbs as crumb, index}
            {#if crumb}
                <li>
                    <a href="{crumb.link}">
                        {#if crumb.icon}
                            <span class="icon is-small is-primary">
                                <Fa icon={crumb.icon}/>
                            </span>
                        {/if}
                        {crumb.textKey}
                    </a>
                </li>
            {/if}
        {/each}
        {#if lastCrumb}
            <li class="is-active">
                <a href="{lastCrumb.link}">
                    {#if lastCrumb.icon}
                <span class="icon is-small is-primary">
                    <Fa icon={lastCrumb.icon}/>
                </span>
                    {/if}
                    {#if lastCrumb.textKey}
                        {lastCrumb.textKey}
                    {:else}
                        {lastCrumb.link}
                    {/if}
                </a>
            </li>
        {/if}
    </ul>
</nav>