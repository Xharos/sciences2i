<script>
    import {page} from '$app/stores';
</script>

<svelte:head>
    <title>{$page.status} | Sciences 2I</title>
    <meta
            content="Page d'erreur du site sciences-2i."
            name="description"
    />
</svelte:head>

<div class="columns is-centered">
    <div class="column is-9">
        <section class="section">
            <div class="content">
                <h1 class="title">{$page.status}</h1>
                <p>Il semblerait qu'une erreur soit survenue...</p>
                <blockquote class="is-primary">{$page.error.message}</blockquote>
            </div>
        </section>
    </div>
</div>

