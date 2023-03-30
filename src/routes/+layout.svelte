<script>
    import "../app.scss";
    import Fa from "svelte-fa";
    import {faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons";
    import {page} from '$app/stores';

    let bActive = false;
    let date = new Date().getFullYear();
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- START NAV -->
<nav aria-label="main navigation" class="navbar is-fixed-top has-shadow">
    <div class="navbar-brand">
        <a class="navbar-item" href="/">
            <img
                    alt="Logo principale sciences-2i, lien page accueil"
                    src="$lib/assets/favicon_64x64.webp"
            />
        </a>

        <div
                class={bActive ? "navbar-burger is-active" : "navbar-burger"}
                data-target="navMenu"
                on:click={() => (bActive = !bActive)}
        >
            <span/>
            <span/>
            <span/>
        </div>
    </div>

    <div class={bActive ? "navbar-menu is-active" : "navbar-menu"} id="navMenu">
        <div class="navbar-start">
            <a class="navbar-item" class:is-selected={$page.url.pathname.startsWith('/lessons')} href="/lessons">
                Cours </a>
            <a class="navbar-item" class:is-selected={$page.url.pathname.startsWith('/cards')} href="/cards">
                Fiches </a>
            <a class="navbar-item" class:is-selected={$page.url.pathname.startsWith('/tutorials')} href="/tutorials">
                Tutoriels </a>
        </div>
    </div>
</nav>
<section class="hero">
    <div class="hero-body">
        <div class="box">
            <slot/>
        </div>
    </div>
</section>

<footer class="footer">
    <div class="container">
        <div class="columns">
            <div class="column is-1 has-text-centered">
                <a
                        alt="Poursuivre vers la chaîne Youtube de Valentin Burgaud"
                        class="icon-text"
                        href="https://www.youtube.com/channel/UC197VifUbGS9iqCiYUe0hSA"
                >
                    <span class="icon">
                        <Fa icon={faYoutube} primaryColor="#FF0000"/>
                    </span>
                    <span>Youtube</span>
                </a>
            </div>
            <div class="column is-1 has-text-centered">
                <a
                        alt="Accéder au stockage sur github de ce site"
                        class="icon-text"
                        href="https://github.com/Xharos/sciences2i"
                >
                    <span class="icon">
                        <Fa icon={faGithub} primaryColor="#171515"/>
                    </span>
                    <span>Github</span>
                </a>
            </div>
            <div class="column is-1 has-text-centered">
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
                </a>
            </div>
            <div class="column is-9 has-text-centered">
                <small class="text-light"/>
                <span class="tag is-primary">2023-{date}</span> | Valentin BURGAUD
            </div>
        </div>
    </div>
</footer>
