<script context="module">
    const handlers = [];
    let manager;

    if (typeof window !== "undefined") {
        const run_all = () => handlers.forEach((fn) => fn());

        window.addEventListener("scroll", run_all);
        window.addEventListener("resize", run_all);
    }

    if (typeof IntersectionObserver !== "undefined") {
        const map = new Map();

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    const update = map.get(entry.target);
                    const index = handlers.indexOf(update);

                    if (entry.isIntersecting) {
                        if (index === -1) handlers.push(update);
                    } else {
                        update();
                        if (index !== -1) handlers.splice(index, 1);
                    }
                });
            },
            {
                rootMargin: "400px 0px", // TODO why 400?
            }
        );

        manager = {
            add: ({outer, update}) => {
                const {top, bottom} = outer.getBoundingClientRect();

                if (top < window.innerHeight && bottom > 0)
                    handlers.push(update);

                map.set(outer, update);
                observer.observe(outer);
            },

            remove: ({outer, update}) => {
                const index = handlers.indexOf(update);
                if (index !== -1) handlers.splice(index, 1);

                map.delete(outer);
                observer.unobserve(outer);
            },
        };
    } else {
        manager = {
            add: ({update}) => {
                handlers.push(update);
            },

            remove: ({update}) => {
                const index = handlers.indexOf(update);
                if (index !== -1) handlers.splice(index, 1);
            },
        };
    }
</script>

<script>
    import {onMount} from "svelte";
    import authors from "$lib/components/authors.js";
    import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
    import Fa from "svelte-fa";
    import Breadcrumb from "$lib/components/Breadcrumb.svelte";

    // config
    export let top = 0.12;
    export let bottom = 0.9;
    export let threshold = 0.5;
    export let query = "section";
    export let parallax = false;

    // bindings
    export let index = 0;
    export let count = 0;
    export let offset = 0;
    export let progress = 0;
    export let visible = false;
    export let url = "/";
    export let lastDate = "29/03/2023";

    export let crumbs = [];
    export let lastCrumb = null;
    export let author = "valentin";

    export let nextElement;
    export let element;
    export let prevElement;

    export let title;
    let auth = authors[author];


    let outer;
    let foreground;
    let background;
    let left;
    let sections;
    let titlesDOM;
    let titles = [];
    let wh = 0;
    let fixed;
    let offset_top = 0;
    let width = 1;
    let inverted;
    let calc = 75;

    $: top_px = Math.round(top * wh);
    $: bottom_px = Math.round(bottom * wh);
    $: threshold_px = Math.round(threshold * wh);

    $: top, bottom, threshold, parallax, update();

    $: style = `
		position: ${fixed ? "fixed" : "absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${inverted ? 3 : 1};
	`;

    onMount(() => {
        sections = foreground.querySelectorAll(query);
        titlesDOM = foreground.querySelectorAll(
            "h1:not(.toc-exclude), h2:not(.toc-exclude)"
        );
        for (let i = 0; i < titlesDOM.length; i++) {
            titles[i] = [
                titlesDOM[i].outerText,
                titlesDOM[i].nodeName,
                `section-${i + 1}`,
            ];
            const container = document.createElement('div');
            container.id = `section-${i + 1}`;

            const innerContainer = document.createElement('div');
            innerContainer.classList.add("inner");
            if (i === 0) {
                innerContainer.classList.add("intro");
            }

            const titleInnerContainer = document.createElement('div');
            titleInnerContainer.classList.add("title-link-container");

            titlesDOM[i].removeAttribute("id");

            titlesDOM[i].parentNode.insertBefore(container, titlesDOM[i]);
            container.appendChild(innerContainer);
            innerContainer.appendChild(titleInnerContainer);

            const link = document.createElement('a');
            link.href = `#section-${i + 1}`;
            link.textContent = '#';
            link.classList.add('link-translucent');
            titleInnerContainer.appendChild(link);
            titleInnerContainer.appendChild(titlesDOM[i]);
        }

        count = sections.length;

        update();

        const scroller = {outer, update};

        manager.add(scroller);
        return () => manager.remove(scroller);
    });

    function update() {
        if (!foreground) return;

        // re-measure outer container
        const bcr = outer.getBoundingClientRect();
        left = bcr.left;
        width = bcr.right - left;

        // determine fix state
        const fg = foreground.getBoundingClientRect();
        const bg = background.getBoundingClientRect();

        visible = fg.top < wh && fg.bottom > 0;

        const foreground_height = fg.bottom - fg.top;
        const background_height = bg.bottom - bg.top;

        const available_space = bottom_px - top_px;
        progress = (top_px - fg.top) / (foreground_height - available_space);
        if (background_height > wh) {
            calc = 75 - progress * (background_height - wh + 75);
        }

        if (progress <= 0) {
            offset_top = 0;
            fixed = false;
        } else if (progress >= 1) {
            offset_top = parallax
                ? foreground_height - background_height
                : foreground_height - available_space;
            fixed = false;
        } else {
            offset_top = parallax
                ? Math.round(
                    top_px - progress * (background_height - available_space)
                )
                : top_px;
            fixed = true;
        }

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const {top} = section.getBoundingClientRect();

            const next = sections[i + 1];
            const bottom = next ? next.getBoundingClientRect().top : fg.bottom;

            offset = (threshold_px - top) / (bottom - top);
            if (bottom >= threshold_px) {
                index = i;
                break;
            }
        }
    }
</script>

<div class="columns is-centered">
    <div class="column is-12">
        <Breadcrumb crumbs={crumbs} lastCrumb={lastCrumb}/>
        <div class="content has-text-centered">
            <h1>{title}</h1>
        </div>
    </div>
</div>

<svelte:window bind:innerHeight={wh}/>

<svelte-scroller-outer bind:this={outer}>
    <div class="columns">
        <div class="column is-2 is-hidden-touch">
            <svelte-scroller-background
                    bind:this={background}
                    style:top="{calc}px"
            >
                <div class="box" style="padding: 5px">
                    <slot name="background"/>
                    <aside class="menu">
                        <p class="menu-label">Table des matières</p>
                        <div class="tags has-addons">
                            <span class="tag">Date</span>
                            <span class="tag is-primary">{lastDate}</span>
                        </div>
                        <div class="columns">
                            <div class="column">
                                <progress
                                        class="progress is-small is-primary"
                                        max="1"
                                        value={Math.round(progress * 100) / 100}
                                >{Math.round(progress * 100) / 1}%
                                </progress
                                >
                            </div>
                        </div>
                        {#each titles as title, i}
                            {#if title[1] === "H1"}
                                <a href={url + "#" + title[2]} class="menu-label"
                                >{title[0]}</a
                                >
                                <ul class="menu-list">
                                    {#each titles.slice(i + 1, titles.indexOf(titles
                                        .slice(i + 1, titles.length)
                                        .find((obj) => obj[1] === "H1")) === -1 ? titles.length : titles.indexOf(titles
                                        .slice(i + 1, titles.length)
                                        .find((obj) => obj[1] === "H1"))) as section}
                                        <li>
                                            <a href={url + "#" + section[2]}
                                            >{section[0]}</a
                                            >
                                        </li>
                                    {/each}
                                </ul>
                            {/if}
                        {/each}
                    </aside>
                </div>
            </svelte-scroller-background>
        </div>
        <div class="column">
            <svelte-scroller-foreground bind:this={foreground}>
                <div class="content main-container">
                    <slot name="foreground"/>
                    <h1 class="toc-exclude">Auteur</h1>
                    <br/>
                    <div class="columns is-centered">
                        <div class="column is-9">

                            <div class="box">
                                <article class="media">
                                    <figure class="media-left">
                                        <p class="image is-64x64">
                                            <img
                                                    alt="photo de profil"
                                                    class="is-rounded"
                                                    height="256"
                                                    src={auth.logo}
                                                    width="256"
                                            />
                                        </p>
                                    </figure>
                                    <div class="media-content">
                                        <div class="content">
                                            <p>
                                                <tag class="has-text-weight-bold">
                                                    {auth.name}
                                                </tag>
                                                <tag
                                                        class="has-text-primary is-size-7 is-italic"
                                                >
                                                    {auth.mail}
                                                </tag>
                                                <br/>
                                                {auth.description}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </svelte-scroller-foreground>
            <div class="section">
                <nav aria-label="pagination" class="pagination is-centered" role="navigation">
                    {#if prevElement }
                        <a class="pagination-previous" href={prevElement.link}>{prevElement.title}</a>
                    {/if}
                    {#if nextElement }
                        <a class="pagination-next" href={nextElement.link}>{nextElement.title}</a>
                    {/if}
                    {#if element }
                        <ul class="pagination-list">
                            <li>
                                <p class="pagination-link is-current">{element.title}</p>
                            </li>
                        </ul>
                    {/if}
                </nav>
            </div>
        </div>
    </div>
</svelte-scroller-outer>

<style>

    @media screen and (min-width: 1024px) {
        .main-container {
            width: 80vw;
        }
    }

    @media screen and (min-width: 767px) and (max-width: 1023px) {
        .main-container {
            width: 90vw;
        }
    }

    svelte-scroller-outer {
        display: grid;
        grid-template-columns: minmax(0, auto) minmax(0, 1fr);
        position: relative;
        width: 100vw;
        max-width: 100%;
        margin: 0 auto;
    }

    svelte-scroller-background {
        position: sticky;
        position: -webkit-sticky;
        display: block;
        top: 75px;
        align-self: start;
    }

    svelte-scroller-foreground {
        display: block;
        position: relative;
    }

    svelte-scroller-foreground::after {
        content: " ";
        display: block;
        clear: both;
    }
</style>
