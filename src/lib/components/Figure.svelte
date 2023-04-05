<script>
    import {onDestroy, onMount} from 'svelte';
    import {figureCount} from './FigureStore.js';
    import {get} from 'svelte/store'

    export let legend;

    let countValue;
    onMount(() => {
        figureCount.update(n => n + 1);
        countValue = get(figureCount);
    });

    onDestroy(() => {
        figureCount.set(0);
    });
</script>

<div class="columns is-centered">
    <div class="column is-8">
        <div class="container is-max-desktop">
            <div class="is-flex is-justify-content-center is-align-items-center">
                <div>
                    <figure class="image">
                        <slot/>
                        <figcaption class="is-size-6 has-text-centered has-text-primary">Figure {countValue}
                            : {legend}</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>


