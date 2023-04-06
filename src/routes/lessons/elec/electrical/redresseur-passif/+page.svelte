<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import Message from "$lib/components/MessageBox.svelte";
    import HideMessage from "$lib/components/HideMessageBox.svelte";
    import Framed from "$lib/components/Framed.svelte";
    import Figure from "$lib/components/Figure.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import K from "$lib/components/K.svelte";

    export let data;
    let title = "Redresseurs passifs"; // A MODIFIER SUIVANT DATA.JS

    const [prevElement, element, nextElement] = data.getElement(title);
    let url = element.link;
    let lastDate = element.lastDate;

    // A modifier
    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTROTECHNIQUE,
    ];

    const lastCrumb = {
        textKey: title,
    };

    let description = "Liste des cours d'électricité en sciences industrielles de l'ingénieur.";
</script>

<svelte:head>
    <title>Électrique | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<Scroller {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title} {url}>
    <div slot="foreground">
        <h1>Mon premier titre</h1>

        <p>Bloc coloré avec compteur intégré :</p>

        <!-- type peut être property, definition, remember -->
        <Message title="Masse volumique" type="property">
            La masse volumique (noté
            <K math={"\\rho"}/>
            ) est une propriété caractéristique qui représente la quantité de matière (masse) se trouvant dans un espace
            (une unité de volume) donné.
        </Message>

        <p>Bloc caché qui apparaît lors du clic de l'utilisateur :</p>
        <!-- un bloc ou l'utilisateur doit cliquer pour l'étendre en longueur -->
        <HideMessage title="Démonstration">
            La démonstration ici est normalement caché..
        </HideMessage>

        <p>Bloc tout simple qui ne sert exclusivement que pour les remarques</p>
        <Framed>
            Ceci est une remarque !
        </Framed>

        <p>
            Le mode math peut s'intégrer en ligne (comme ici
            <K math={"10^{-4}\\space m.s^{-1}"}/>
            ) ou bien sur plusieurs :
        </p>
        <K displayMode math={"U_{AB} = V_A - V_B"}/>

        <h2>Ajouter des images</h2>
        <p>L'image est ajouté dans un container centré et aux bonnes dimensions. Il est possible de le re-dimensionner
            en utilisant les classes adaptés avec Bulma (image is-3by-1 par exemple. Privilégier des noms évidents
            d'image, le format webp et une mise en page type bannière pour ne pas occuper tout l'espace utile..</p>
        <Figure legend="coucou toi">
            <img src="$lib/assets/elec.webp">
        </Figure>
    </div>
</Scroller>
