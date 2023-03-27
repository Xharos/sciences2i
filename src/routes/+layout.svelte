<script>
    import "../app.scss";
    import Fa from "svelte-fa";
    import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

    let bActive = false;
    let date = new Date().getFullYear();
</script>

<svelte:head>
    <title>Sciences 2I, cours et fiches de sciences industrielles</title>
    <meta
        name="description"
        content="Cours, fiches et tutoriels pour l'enseignement des sciences industrielles de l'ingénieur dans l'enseignement supérieur."
    />
</svelte:head>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- START NAV -->
<nav class="navbar is-fixed-top has-shadow" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img
                src="$lib/assets/favicon_64x64.webp"
                alt="Logo principale sciences-2i 64x64"
                width="32"
                height="32"
            />
        </a>

        <div
            on:click={() => (bActive = !bActive)}
            class={bActive ? "navbar-burger is-active" : "navbar-burger"}
            data-target="navMenu"
        >
            <span />
            <span />
            <span />
        </div>
    </div>

    <div id="navMenu" class={bActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div class="navbar-start">
            <a class="navbar-item" href="/lessons"> Cours </a>
            <a class="navbar-item" href="/cards"> Fiches </a>
            <a class="navbar-item" href="/tutorials"> Tutoriels </a>
        </div>
    </div>
</nav>
<section class="hero">
    <div class="hero-body">
        <div class="box">
            <slot />
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="columns">
            <div class="column is-1 has-text-centered">
                <a
                    class="icon-text"
                    href="https://www.youtube.com/channel/UC197VifUbGS9iqCiYUe0hSA"
                >
                    <span class="icon">
                        <Fa icon={faYoutube} primaryColor="#FF0000" />
                    </span>
                    <span>Youtube</span>
                </a>
            </div>
            <div class="column is-1 has-text-centered">
                <a class="icon-text" href="https://github.com/Xharos">
                    <span class="icon">
                        <Fa icon={faGithub} primaryColor="#171515" />
                    </span>
                    <span>Github</span>
                </a>
            </div>
            <div class="column is-1 has-text-centered">
                <a
                    rel="license"
                    href="http://creativecommons.org/licenses/by-nc/4.0/"
                >
                    <img
                        alt="Licence Creative Commons"
                        style="border-width:0"
                        src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
                    />
                </a>
            </div>
            <div class="column is-9 has-text-centered">
                <small class="text-light" />
                <span class="tag is-primary is-light">2023-{date}</span> | Valentin
                BURGAUD
            </div>
        </div>
    </div>
</footer>
