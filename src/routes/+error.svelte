<script>
    import {page} from '$app/stores';

    let description = "Mauvaise route!"
</script>

<svelte:head>
    <title>{$page.status} | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
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

