<script>
    import katex from "katex";

    export let math;

    export let ref;
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
    <div class="scrollable-container" id={ref || null}>
        {@html katexString}
    </div>
{:else}
    {@html katexString}
{/if}
