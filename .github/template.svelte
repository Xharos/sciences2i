<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import K from "$lib/components/K.svelte";
    import Fa from "svelte-fa";
    import {faPersonChalkboard} from "@fortawesome/free-solid-svg-icons";

    // mettre ici l'url complet de la page en cours
    let url = "/lessons/elec/electrokinetic/1";

    //date de dernière modification
    let lastDate = "29/03/2023";

    //titre de la page et ressource
    let title = "TODO a modifier";
</script>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta
            content="TODO a modifier."
            name="description"
    />
</svelte:head>

<div class="columns is-centered">
    <div class="column is-11">
        <nav aria-label="breadcrumbs" class="breadcrumb">
            <ul>
                <li>
                    <a href="/lessons">
                        <span class="icon is-small is-primary">
                            <Fa icon={faPersonChalkboard}/>
                        </span>
                        <span>Cours</span>
                    </a>
                </li>
                <li class="is-active">
                    <a aria-current="page" href="/lessons/elec/electrokinetic">
                        {title}
                    </a>
                </li>
            </ul>
        </nav>
        <div class="content has-text-centered">
            <h1>{title}</h1>
        </div>
    </div>
</div>

<Scroller {lastDate} {url}>
    <div slot="background"/>
    <div slot="foreground">
        <div class="content">
            <h1>Titre</h1>
        </div>
    </div>
</Scroller>