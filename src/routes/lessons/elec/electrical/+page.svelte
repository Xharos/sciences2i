<script>
    import {
        faBolt,
        faPersonChalkboard,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<svelte:head>
    <title>Électrotechnique | Sciences 2I</title>
    <meta
        name="description"
        content="Liste des cours d'électrotechnique en sciences industrielles de l'ingénieur."
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
                            Électrotechnique
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <p>
                    Le terme électrotechnique désigne l'étude des applications
                    techniques de l'électricité ou encore, la discipline qui
                    étudie la production, le transport, le traitement, la
                    transformation et l'utilisation de l'énergie électrique.
                </p>
            </div>
        </section>
    </div>
</div>
