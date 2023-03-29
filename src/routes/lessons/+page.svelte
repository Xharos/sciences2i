<script>
    import {
        faPersonChalkboard,
        faWrench,
        faComputer,
        faBolt,
    } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<svelte:head>
    <title>
        Cours | Sciences 2I, cours et fiches de sciences industrielles
    </title>
    <meta
        name="description"
        content="Liste de cours détaillés pour l'enseignement des sciences industrielles de l'ingénieur dans l'enseignement supérieur."
    />
</svelte:head>

<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={faPersonChalkboard} />
                    </span>
                    <span class="space">Cours</span>
                </span>
            </div>
            <div class="content">
                <p>
                    Tu trouveras sur cette page un lien vers différentes
                    ressources de cours en mécatronique.
                </p>
                <blockquote>
                    Ces ressources ne sont pas exhaustives et ne sauraient
                    remplacer un cours construit dans un référentiel précis.
                </blockquote>
            </div>
        </section>
        <section class="section">
            <div class="columns">
                <div class="column is-4 has-text-centered">
                    <a href="/lessons/elec">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="$lib/assets/elec.webp"
                                        alt="Cours de génie électrique"
                                        width="1280"
                                        height="960"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <span
                                            class="icon-text is-size-2 has-text-primary"
                                        >
                                            <span class="icon">
                                                <Fa icon={faBolt} />
                                            </span>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4 has-text-primary">
                                            Électrique
                                        </p>
                                    </div>
                                </div>
                                <div class="content">
                                    Étude des lois de l'électrocinétique, de
                                    l'électronique et de l'électrotechnique.
                                    <br />
                                </div>
                                <div class="tags">
                                    <span class="tag is-primary is-light">
                                        Kirchoff
                                    </span>
                                    <span class="tag is-primary is-light">
                                        AOP
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Filtrage
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Transistor
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Convertisseurs
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Machines
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="column is-4 has-text-centered">
                    <a href="/lessons/meca">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="$lib/assets/meca.webp"
                                        alt="Cours de génie mécanique"
                                        width="1280"
                                        height="960"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <span
                                            class="icon-text is-size-2 has-text-primary"
                                        >
                                            <span class="icon">
                                                <Fa icon={faWrench} />
                                            </span>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4 has-text-primary">
                                            Mécanique
                                        </p>
                                    </div>
                                </div>
                                <div class="content">
                                    Etude de la cinématique, statique et
                                    dynamique des solides indéformables.
                                    <br />
                                </div>
                                <div class="tags">
                                    <span class="tag is-primary is-light">
                                        Cinématique
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Statique
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Dynamique
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Torseur
                                    </span>
                                    <span class="tag is-primary is-light">
                                        RDM
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="column is-4 has-text-centered">
                    <a href="/lessons/info">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        src="$lib/assets/info.webp"
                                        alt="Cours de génie informatique"
                                        width="1280"
                                        height="960"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <span
                                            class="icon-text is-size-2 has-text-primary"
                                        >
                                            <span class="icon">
                                                <Fa icon={faComputer} />
                                            </span>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-4 has-text-primary">
                                            Informatique
                                        </p>
                                    </div>
                                </div>
                                <div class="content">
                                    Etude des systèmes continus et discrets.
                                    <br />
                                </div>
                                <div class="tags">
                                    <span class="tag is-primary is-light">
                                        SLCI
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Transformée en z
                                    </span>
                                    <span class="tag is-primary is-light">
                                        Arduino
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>
</div>
