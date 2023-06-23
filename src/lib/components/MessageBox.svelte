<script>
    import {onDestroy, onMount} from 'svelte';
    import {propertyCount, definitionCount} from './MessageStore.js';
    import {get} from 'svelte/store'

    export let type;
    export let title;

    export let ref;

    const validTypes = ['definition', 'property', 'remember'];

    if (!validTypes.includes(type)) {
        console.warn(`Invalid message type "${type}". Defaulting to "remember".`);
        type = 'remember';
    }

    let prefix = '';

    onMount(() => {
        if (type === 'property') {
            propertyCount.update(n => n + 1);
            let countValue = get(propertyCount);
            prefix = "Propriété " + countValue + " : ";
        } else if (type === 'definition') {
            definitionCount.update(n => n + 1);
            let countValue = get(definitionCount);
            prefix = "Définition " + countValue + " : ";
        }

    });

    onDestroy(() => {
        propertyCount.set(0);
        definitionCount.set(0);
    });
</script>

<div class="columns is-desktop is-centered">
    <div class="column is-12-tablet is-11-desktop">
        <article class={`message is-${type}`} id={ref || null}>
            <div class="message-header">
                <p>{prefix} {title}</p>
            </div>
            <div class="message-body">
                <slot/>
            </div>
        </article>
    </div>
</div>

