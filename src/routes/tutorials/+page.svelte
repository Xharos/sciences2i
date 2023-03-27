<script>
    import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";
</script>

<svelte:head>
    <title>
        Tutoriels | Sciences 2I, cours et fiches de sciences industrielles
    </title>
    <meta
        name="description"
        content="Liste de tutoriels pour l'enseignement des sciences industrielles de l'ingénieur dans l'enseignement supérieur."
    />
</svelte:head>

<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={faChalkboardTeacher} />
                    </span>
                    <span class="space">Tutoriels</span>
                </span>
            </div>
            <div class="content">
                <p>
                    Tu trouveras sur cette page un lien vers différents
                    tutoriels utiles dans l'enseignement des mécatroniques. Que
                    ce soit sur l'utilisation de logiciels ou bien de prise en
                    main de matériel.
                </p>
                <p>En cours de rédaction...</p>
                <progress class="progress is-primary" max="100">30%</progress>
            </div>
        </section>
    </div>
</div>
