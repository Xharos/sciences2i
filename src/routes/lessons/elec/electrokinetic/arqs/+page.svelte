<script>
    import Scroller from '$lib/components/Scroller.svelte';
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import Message from '$lib/components/MessageBox.svelte'
    import K from '$lib/components/K.svelte';

    export let data;
    let title = "Lois dans l'ARQS";

    const [prevElement, element, nextElement] = data.getElement(title);
    let lastDate = element.lastDate;

    const crumbs = [
        Crumbs.COURS,
        Crumbs.ELECTRICITE,
        Crumbs.ELECTROCINETIQUE,
    ];

    const lastCrumb = {
        textKey: title,
    };
    let description = "Cours sur les lois électriques dans l'approximation des régimes quasi stationnaires (ARQS).";
</script>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<Scroller {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title}>
    <div slot="foreground">
        <h1>Le courant électrique</h1>
        <p>
            Des expériences datant de la fin du XIXème siècle ont conduit à
            une interprétation de la matière en termes de particules
            élémentaires pouvant porter des charges électriques positives
            (les protons) ou négatives (les électrons). Les charges
            positives (retrait d'électrons du corps électrisé) et les
            charges négatives (apport d'électrons au corps électrisé).
        </p>
        <h2>Mise en évidence des porteurs de charge</h2>
        <Message title="A retenir" type="remember">
            Les charges électriques observées sont toujours des
            multiples entiers de la charge élémentaire
            <K math={"e"}/>
            .
            On dit que la charge électrique est une grandeur quantifiée
            ou discrète. La charge électrique est une grandeur
            conservative. Pour un système fermé, c'est-à-dire
            n'échangeant pas de matière avec l'extérieur, la charge
            électrique reste constante. La charge électrique est
            indépendante du référentiel d'étude. Son unité est le
            Coulomb (
            <K math={"C"}/>
            ).
        </Message>
        <h2>Mouvement d'ensemble ordonné ?</h2>
        <p>
            Dans un circuit ouvert, aucun courant ne circule et pourtant les
            électrons qui composent les fils sont mobiles avec une vitesse
            de
            <K math={"10^{-5}\\space m.s^{-1}"}/>
            (dépend de la température),
            mais de manière totalement désordonnée ce qui conduit à un déplacement
            moyen des électrons nuls. On parle
            <strong>d'agitation thermique</strong>.
        </p>
        <p>
            Dans un circuit ouvert en revanche, les électrons ont acquis un
            mouvement d'ensemble ordonné et ils se déplacent avec une
            vitesse bien plus faible, de l'ordre de
            <K
                    math={"10^{-4}\\space m.s^{-1}"}
            />
            . Le type de courant qui va nous intéresser est le
            <strong>de conduction</strong> dû au mouvement de porteurs de charges
            dans un milieu matériel immobile.
        </p>
        <p>
            Les matériaux dans lesquels des porteurs de charge peuvent se
            déplacer librement sont appelés <strong>conducteurs</strong>. A
            contrario, les matériaux dans lesquels des porteurs de charge ne
            peuvent pas se déplacer librement sont appelés
            <strong>isolants</strong>.
        </p>
        <p>
            Il est à noter que le passage d'un courant électrique peut avoir
            :
        </p>
        <ul>
            <li>
                un effet thermique (appelé effet Joule) : un conducteur
                parcouru par un courant chauffe ;
            </li>
            <li>
                un effet magnétique : un circuit parcouru par un courant
                produit un champ magnétique ;
            </li>
            <li>
                un effet chimique : une électrolyse correspond à la
                réalisation d'une réaction chimique non spontanée.
            </li>
        </ul>
        <h2>Le courant électrique</h2>
        <Message title="Courant électrique" type="definition">
            On appelle <strong>courant électrique</strong> tout mouvement
            d'ensemble ordonné de porteurs de charges. Par convention,
            le sens du courant est le sens de déplacement des charges
            positives (du plus vers le moins).
        </Message>

        <h1>Les grandeurs électriques</h1>
        <p>
            Dans ce paragraphe, on se place en régime permanent (ou
            stationnaire), les grandeurs électriques ne dépendent pas de la
            variable temps
            <K math={"t"}/>
        </p>
        <h2>L'intensité du courant électrique</h2>
        <Message title="Intensité électrique" type="definition">
            On appelle <strong>intensité d'un courant électrique</strong>
            traversant la section
            <K math={"S"}/>
            d'un conducteur, la
            quantité de charges électriques traversant une section
            <K math={"S"}/>
            par unité de temps, c'est-à-dire le débit de charges à
            travers cette section. Elle s'exprime en ampère (
            <K math={"A"}/>
            ).
        </Message>
        <p>
            Quelques ordres de grandeurs de l'intensité du courant
            électrique :
        </p>
        <ul>
            <li>
                en électronique : du
                <K math={"pA"}/>
                à l'
                <K math={"A"}/>
                ;
            </li>
            <li>
                usage domestique : de 1
                <K math={"A"}/>
                à 100
                <K math={"A"}/>
                ;
            </li>
            <li>
                1000
                <K math={"A"}/>
                environ dans les lignes de distributions
                ;
            </li>
            <li>
                entre 5000 et 300000
                <K math={"A"}/>
                pour la foudre.
            </li>
        </ul>
        <h2>La tension électrique</h2>
        <Message title="Tension" type="definition">
            L'état électrique d'un point du circuit électrique est
            caractérisé par une grandeur appelée
            <strong>potentiel</strong> et noté
            <K math={"V"}/>
            qui s'exprime
            en volt. La tension entre A et B est la différence de potentiel
            entre les deux points A et B d'un circuit, et caractérise
            la tendance des électrons à se rendre d'un point à un autre.
            C'est une grandeur algébrique :
            <K displayMode math={"U_{AB} = V_A - V_B"}/>
            qui se représente par une flèche orientée de B vers A.
        </Message>
        <p>Quelques ordres de grandeurs d'une tension électrique :</p>
        <ul>
            <li>
                en électronique : de quelques
                <K math={"\\mu V"}/>
                à quelques
                <K math={"V"}/>
                ;
            </li>
            <li>
                usage domestique : 220
                <K math={"V"}/>
                en France.
            </li>
            <li>
                400000
                <K math={"V"}/>
                et moins dans les lignes de distributions
                ;
            </li>
        </ul>
        <h2>Mesure d'une intensité et d'une tension</h2>
        <h2>Référence de potentiel</h2>
    </div>
</Scroller>
