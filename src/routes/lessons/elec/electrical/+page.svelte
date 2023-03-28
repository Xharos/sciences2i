<script>
    import { faSliders } from "@fortawesome/free-solid-svg-icons";
</script>

<svelte:head>
    <title>Électrotechnique | Sciences 2I</title>
    <meta
        name="description"
        content="Liste des cours d'électrotechnique en sciences industrielles de l'ingénieur."
    />
</svelte:head>

<div class="sections">
    <div class="toc-container">
        <div class="columns">
            <div class="column is-2 is-hidden-mobile">
                <nav class="section-nav">
                    <aside class="menu">
                        <p class="menu-label">General</p>
                        <ul class="menu-list">
                            <li><a>Dashboard</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                            <li><a>Customers</a></li>
                        </ul>
                    </aside>
                </nav>
            </div>
            <div class="column">
                <section class="lesson">
                    This is the first section.
                    <h1 id="t1">
                        Titre 1 qui est bien long pour tester le saut de ligne
                    </h1>
                    <h2 id="s1">Section 11</h2>
                </section>
            </div>
        </div>
    </div>
</div>

<style>
    h1,
    h2 {
        height: 80vh;
    }

    div.toc-container > div > div > nav {
        position: sticky;
        top: 5rem;
        align-self: start;
    }

    div.toc-container {
        display: grid;
        grid-template-columns: 1fr 0em;
        max-width: 100em;
        width: 100%;
        margin: 0 auto;
    }
</style>
