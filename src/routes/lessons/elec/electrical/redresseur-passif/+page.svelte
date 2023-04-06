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

<Scroller {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title} {url} author="fabien">
    <div slot="foreground">
        <h1>Introduction</h1>
        <p>Un redresseur est un composant qui permet de transformer un courant alternatif en courant continu. Il est dit
        passif lorsqu'il fonctionne de lui même, sans aucune commande ou alimentation supplémentaire.</p>
        <p>C'est la construction la plus économique pour effectuer un redresseur et elle est énormément utilisée dans
            les objets du quotidien.</p>

        <h1>La diode</h1>
        <p>Ce dernier, s'il est dit passif, se base principalement sur la brique essentielle qu'est la diode. Il s'agit d'un composant non
            linéraire et polarisé : il dispose d'un sens de branchement. Elle ne laisse passer le courant que dans un
            seul sens qui dépend de son branchement, nous ne pouvons pas commander sa fermeture ou son ouverture.
        </p>
        <p> On peut voir la représentation schématique de la diode dans la figure suivante :
        </p>

        <Figure legend="Représentation schématique de la diode">
            <img src="$lib/assets/diode.webp" alt="Schéma diode">
        </Figure>

        <Message title="A retenir" type="remember">
            Le pôle nommé <i>A</i>, est l'anode de notre diode, et le pôle nommé <i>K</i> en est la cathode. Le courant ne peut passer
            que de l'anode vers la cathode.
        </Message>
        <p>
            On suppose dans la suite de ce développement que la diode est parfaite : on considère que le courant passant est nul
            en configuration bloqué.
        </p>

        <Framed>
            Dans des cours de niveau supérieur, nous verrons que cela n'est pas la réalité. La diode laisse passer un
            courant de fuite de l'ordre de quelques <K math={"nA"}/>
        </Framed>
        <h2>Caractéristique parfaite de la diode</h2>
        <p>
            On peut alors tracer dans le plan <K math={"U-I"}/> le comportement de la diode parfaite. On obtient alors
            la courbe visible sur la figure suivante.
        </p>
        <Figure legend="Courbe caractéristique de la diode parfaite">
            <img src="$lib/assets/courbe_carac_diode.webp" alt="Caractéristique diode">
        </Figure>

        <h1>Redresseur simple alternance</h1>

        <h1>Redresseur double alternance</h1>
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
            <img src="$lib/assets/elec.webp" alt="elec.webp">
        </Figure>

    </div>

</Scroller>
