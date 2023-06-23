<script>
    import {faBookOpenReader} from "@fortawesome/free-solid-svg-icons";
    import Fa from "svelte-fa";

    let description = "Liste de fiches pour l'enseignement des sciences industrielles de l'ingénieur dans l'enseignement supérieur.";
</script>

<svelte:head>
    <title>
        Fiches | Sciences 2I
    </title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <span class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={faBookOpenReader}/>
                    </span>
                    <span class="space">Fiches</span>
                </span>
            </div>
            <div class="content">
                <p>
                    Tu trouveras sur cette page un lien vers différentes fiches
                    et formulaires utiles dans l'enseignement des mécatroniques.
                </p>
                <p>En cours de rédaction...</p>
                <progress class="progress is-primary" max="100">30%</progress>
            </div>
        </section>
    </div>
</div>
