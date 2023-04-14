<script>
    import {onMount, onDestroy} from 'svelte';

    export let title;

    export let ref;

    let isExpanded = false;

    function toggleExpansion() {
        isExpanded = !isExpanded;
    }

    onMount(() => {
        // Hide the message body on mount
        isExpanded = false;
    });

    onDestroy(() => {
        // Clean up any event listeners or timers here
    });
</script>
<div class="columns is-desktop is-centered">
    <div class="column is-12-tablet is-11-desktop">
        <article class="message is-primary" id={ref || null}>
            <div class="message-header" on:click={toggleExpansion}>
                <span>{title} </span>
                <span>[Cliquez moi]</span>
            </div>
            {#if isExpanded}
                <div class="message-body">
                    <slot/>
                </div>
            {/if}
        </article>
    </div>
</div>

<style>
    .message-header:hover {
        cursor: pointer;
    }
</style>