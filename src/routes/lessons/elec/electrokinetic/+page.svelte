<script>
    import {
        faBolt,
        faPersonChalkboard,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<svelte:head>
    <title>Électrocinétique | Sciences 2I</title>
    <meta
        name="description"
        content="Liste des cours d'électrocinétique en sciences industrielles de l'ingénieur."
    />
</svelte:head>

<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={faBolt} />
                    </span>
                    <span class="space">Génie électrique</span>
                </span>
            </div>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li>
                        <a href="/lessons">
                            <span class="icon is-small is-primary">
                                <Fa icon={faPersonChalkboard} />
                            </span>
                            <span>Cours</span>
                        </a>
                    </li>
                    <li>
                        <a href="/lessons/elec" aria-current="page">
                            <span class="icon is-small is-primary">
                                <Fa icon={faBolt} />
                            </span>
                            Électricité
                        </a>
                    </li>
                    <li class="is-active">
                        <a
                            href="/lessons/elec/electrokinetic"
                            aria-current="page"
                        >
                            Électrocinétique
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <p>
                    Le terme électrocinétique désigne l'ensemble des phénomènes
                    et des lois relatifs aux charges électriques en mouvement,
                    ainsi que leur étude.
                </p>
            </div>
        </section>
    </div>
</div>
