<script>
    import {
        faBolt,
        faPersonChalkboard,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<svelte:head>
    <title>Électrique | Sciences 2I</title>
    <meta
        name="description"
        content="Liste des cours d'électricité en sciences industrielles de l'ingénieur."
    />
</svelte:head>

<!-- svelte-ignore a11y-img-redundant-alt -->
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
                    <li class="is-active">
                        <a href="/lessons/elec" aria-current="page">
                            <span class="icon is-small is-primary">
                                <Fa icon={faBolt} />
                            </span>
                            Électricité
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="content">
                <p>
                    Le génie électrique peut se décomposer en plusieurs
                    catégories détaillés ci-dessous :
                </p>
                <div class="columns">
                    <div class="column is-4">
                        <h2>
                            <a href="/lessons/elec/electrokinetic"
                                >Électrocinétique</a
                            >
                        </h2>
                        <ul>
                            <li>
                                <span class="tag is-rounded is-primary is-light"
                                    >L1</span
                                >
                                <a href="/lessons/elec/electrokinetic/1"
                                    >Lois dans l'ARQS</a
                                >
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Condensateur et bobine, circuits RC et RL
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Puissance en régime stationnaire
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Circuit RLC série
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Régime sinusoïdal
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Résonnances RLC série
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Filtrage analogique
                            </li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <h2>
                            <a href="/lessons/elec/electronic">Électronique</a>
                        </h2>
                        <ul>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Modélisation du transistor
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Amplificateur opérationnel
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Analyse spectrale
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Echantillonnage
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Bande de base
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Boucle à verrouillage de phase
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Modulation analogique
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Modulation numérique
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Représentation entiers/flottants
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Filtrage numérique
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Hyperfréquence
                            </li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <h2>
                            <a href="/lessons/elec/electrical"
                                >Électrotechnique</a
                            >
                        </h2>
                        <ul>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Systèmes polyphasés équilibrés
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Puissances déformantes/harmoniques
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Modélisation du transformateur
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Hacheurs
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Alimentations à découpage
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Redresseurs passifs
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Redresseurs commandés
                            </li>
                            <li>
                                <span class="tag is-rounded is-danger is-light"
                                    >WIP...</span
                                > Systèmes polyphasés déséquilibrés
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
