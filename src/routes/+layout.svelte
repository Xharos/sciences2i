<script>
    import "../app.scss";
    import Fa from "svelte-fa";
    import {onMount} from 'svelte'
    import {faYoutube, faGithub} from "@fortawesome/free-brands-svg-icons";
    import {page} from '$app/stores';

    let bActive = false;
    let date = new Date().getFullYear();

    let deferredInstallEvent

    onMount(() => {
        window.addEventListener("beforeinstallprompt", e => {
            e.preventDefault()
            deferredInstallEvent = e
        })
    })

    async function handleInstall() {
        deferredInstallEvent.prompt()
        let choice = await deferredInstallEvent.userChoice
        if (choice.outcome === "accepted") {
            // User accepted to install the application
        } else {
            // User dismissed the prompt
        }
        deferredInstallEvent = undefined
    }
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
            <div on:click={()=> (bActive = false)}>
                <a class="navbar-item" class:is-selected={$page.url.pathname.startsWith('/lessons')} href="/lessons">
                    Cours </a>
            </div>
            <div on:click={()=> (bActive = false)}>
                <a class="navbar-item" class:is-selected={$page.url.pathname.startsWith('/cards')} href="/cards">
                    Fiches </a>
            </div>
            <div on:click={()=> (bActive = false)}>
                <a class="navbar-item" class:is-selected={$page.url.pathname.startsWith('/tutorials')}
                   href="/tutorials">
                    Tutoriels </a>
            </div>
        </div>
    </div>
</nav>

<style>
    .install-button {
        position: absolute;
        top: 1px;
        left: 1px;
    }
</style>

<main>
    <section class="hero">
        <div class="hero-body" style="padding: 2rem">
            <slot/>
            {#if deferredInstallEvent}
                <button class="install-button" on:click={handleInstall}>Install</button>
            {/if}
        </div>
    </section>
</main>

<footer class="section">
    <div class="container">
        <div class="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
            <div class="mr-auto mb-2">
                <a class="is-inline-block" href="/">
                    <img alt="Logo du site, casque de chantier sur un engrenage" class="image"
                         src="$lib/assets/favicon_32x32.webp" width="32px">
                </a>
            </div>
            <div>
                <ul class="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
                    <li class="mr-4"><a class="button is-white" href="/lessons">Cours</a></li>
                    <li class="mr-4"><a class="button is-white" href="/cards">Fiches</a></li>
                    <li class="mr-4"><a class="button is-white" href="/tutorials">Tutoriels</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="pt-5" style="border-top: 1px solid #dee2e6;"></div>
    <div class="container is-flex-mobile centered">
        <div class="is-flex-tablet is-justify-content-between is-align-items-center">
            <p><span class="tag is-primary">2023-{date}</span> | Valentin BURGAUD</p>
            <div class="py-2 is-hidden-tablet"></div>
            <div class="ml-auto centered">
                <a class="mr-4 is-inline-block"
                   href="https://www.youtube.com/channel/UC197VifUbGS9iqCiYUe0hSA">
                <span class="icon">
                    <Fa icon={faYoutube} primaryColor="#FF0000"/>
                </span>
                </a>
                <a class="mr-4 is-inline-block" href="https://github.com/Xharos/sciences2i">
                <span class="icon">
                    <Fa icon={faGithub} primaryColor="#171515"/>
                </span>
                </a>
                <a class="mr-4 is-inline-block"
                   href="http://creativecommons.org/licenses/by-nc/4.0/"
                   rel="license">
                    <img
                            alt="Licence Creative Commons"
                            height="31"
                            src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
                            style="border-width:0"
                            width="88"
                    />
                </a>
            </div>
        </div>
    </div>
</footer>

