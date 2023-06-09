<script>
    import {onMount} from "svelte";
    import YouTube from "svelte-youtube-embed";
    import {faGithub, faLinkedin, faYoutube,} from "@fortawesome/free-brands-svg-icons";
    import {faScrewdriverWrench} from "@fortawesome/free-solid-svg-icons";
    import authors from "$lib/components/authors.js";
    import Fa from "svelte-fa";

    let valentin = authors['valentin'];
    let latestIds = [];

    onMount(async () => {
        const cid = "UC197VifUbGS9iqCiYUe0hSA";
        const channelURL = encodeURIComponent(
            `https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
        );
        const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

        fetch(reqURL)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < 3; i++) {
                    const link = data.items[i].link;
                    const id = link.substring(link.indexOf("=") + 1);
                    latestIds[i] = id;
                }
            })
            .catch((error) => {
                return [];
            });
    });

    let description = "Cours, fiches et tutoriels pour l'enseignement des sciences industrielles de l'ingénieur dans l'enseignement supérieur.";
</script>

<svelte:head>
    <title>Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<!-- svelte-ignore a11y-img-redundant-alt -->
<div class="columns is-centered">
    <div class="column is-11">
        <section class="section">
            <div class="content">
                <div class="wrapper-test">
                    <div class="icon-text is-size-3 has-text-primary">
                    <span class="icon">
                        <Fa icon={faScrewdriverWrench}/>
                    </span>
                        <span class="space">S2I</span>
                    </div>
                </div>
            </div>

            <div class="notification is-primary">
                Le site est en cours de construction, voici un <a href="/lessons/demo">lien vers la page exemple</a>.
            </div>

            <div class="columns is-desktop">
                <div class="column is-12-tablet is-7-desktop">
                    <div class="content">
                        <p>
                            Ce site recense mes années d'expérience en enseignement
                            des sciences de l'ingénieur. Il est destiné tout
                            particulièrement aux élèves et aux professeurs des
                            classes de l'enseignement supérieur.
                        </p>
                        <p>
                            Tu pourras y retrouver un ensemble de cours
                            interactifs, tutoriels et de fiches sur les grands
                            thèmes de la mécatronique.
                        </p>
                        <p>
                            Cette page recense de plus les dernières vidéos publiées
                            sur ma chaîne Youtube, directement en lien avec les
                            sciences de l'ingénieur ou bien le monde de l'éducation.
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="box">
                        <article class="media">
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <img
                                            alt="photo de profil"
                                            class="is-rounded"
                                            height="256"
                                            src={valentin.logo}
                                            width="256"
                                    />
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <tag class="has-text-weight-bold">
                                            {valentin.name}
                                        </tag>
                                        <tag
                                                class="has-text-primary is-size-7 is-italic"
                                        >
                                            {valentin.mail}
                                        </tag>
                                        <br/>
                                        {valentin.description}
                                    </p>
                                </div>
                                <nav class="level is-mobile">
                                    <div class="level-left">
                                        <a
                                                alt="Poursuivre vers la chaîne youtube de Valentin BURGAUD"
                                                class="level-item"
                                                href="https://www.youtube.com/channel/UC197VifUbGS9iqCiYUe0hSA"
                                        >
                                        <span class="icon is-medium">
                                            <Fa
                                                    icon={faYoutube}
                                                    primaryColor="#FF0000"
                                            />
                                        </span>
                                        </a>
                                        <a
                                                alt="Accéder au profil Linkedin de Valentin BURGAUD"
                                                class="level-item"
                                                href="https://www.linkedin.com/in/valentin-burgaud-72bb451a2/"
                                        >
                                        <span class="icon is-medium">
                                            <Fa
                                                    icon={faLinkedin}
                                                    primaryColor="#0077B5"
                                            />
                                        </span>
                                        </a>
                                        <a
                                                alt="Découvrir le dépôt github de ce projet"
                                                class="level-item"
                                                href="https://github.com/Xharos/sciences2i"
                                        >
                                        <span class="icon is-medium">
                                            <Fa
                                                    icon={faGithub}
                                                    primaryColor="#171515 "
                                            />
                                        </span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
            <article class="message m-4 is-primary">
                <div class="message-body">
                    Des erreurs peuvent se glisser dans ces pages, merci de m'en
                    faire part par mail ou via le <i>github</i> du projet ou ce site est hébergé.
                </div>
            </article>
            <div class="content">
            <span class="icon-text is-size-5 has-text-primary">
                <span class="icon">
                    <Fa icon={faYoutube} primaryColor="#FF0000"/>
                </span>
                <span>Dernières vidéos youtube</span>
            </span>
            </div>
            <div class="columns">
                {#if latestIds}
                    {#each latestIds as id}
                        <div class="column is-4">
                            <div class="video-responsive">
                                <YouTube {id}/>
                            </div>
                        </div>
                    {/each}
                {:else}
                    <p>Loading...</p>
                {/if}
            </div>
            <article class="message m-4 is-primary">
                <div class="message-body">
                    <a
                            href="http://creativecommons.org/licenses/by-nc/4.0/"
                            rel="license"
                    >
                        <img
                                alt="Licence Creative Commons"
                                height="31"
                                src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
                                style="border-width:0"
                                width="88"
                        />
                    </a><br/>
                    L'ensemble des documents présents sur ce site sont mis à disposition
                    selon les termes de la
                    <a
                            href="http://creativecommons.org/licenses/by-nc/4.0/"
                            rel="license"
                    >
                        Licence Creative Commons Attribution - Pas d'Utilisation
                        Commerciale 4.0 International
                    </a>.
                </div>
            </article>
        </section>
    </div>
</div>
