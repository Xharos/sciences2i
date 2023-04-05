<script>
    import katex from "katex";

    export let math;
    export let displayMode = false;

    const options = {
        displayMode: displayMode,
        throwOnError: false,
    };

    $: katexString = katex.renderToString(math, options);
</script>

<svelte:head>
    <link
            crossorigin="anonymous"
            href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
            integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
            rel="stylesheet"
    />
</svelte:head>
{#if displayMode}
    <div class="columns is-centered">
        <div class="column is-12">
            <div class="scrollable-container">
                {@html katexString}
            </div>
        </div>
    </div>
{:else}
    {@html katexString}
{/if}
