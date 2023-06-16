<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import H from '$lib/components/H.svelte'
    import Message from "$lib/components/MessageBox.svelte";
    import K from "$lib/components/K.svelte";
    import Figure from "$lib/components/Figure.svelte";

    export let data;
    let title = "Modélisation des systèmes asservis"; // A MODIFIER SUIVANT DATA.JS

    const [prevElement, element, nextElement] = data.getElement(title);
    let lastDate = element.lastDate;

    // A modifier
    const crumbs = [
        Crumbs.COURS,
        Crumbs.INFORMATIQUE,
        Crumbs.AUTOMATIQUE,
    ];

    const lastCrumb = {
        textKey: title,
    };

    let description = "Cours sur la modélisation des systèmes linéaires continus invariants (SLCI).";
</script>

<svelte:head>
    <title>{title} | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<Scroller {crumbs} {element} {lastCrumb} {lastDate} {nextElement} {prevElement} {title}>
    <div slot="foreground">
        <h1>Introduction</h1>
        <p>Un système est un assemblage d'éléments qui réalise une tâche précise. Son état dépend des variables
            d'<H>entrées</H> et des différentes <H>perturbations</H>. Le résultat
            combiné de ces actions est la <H>réponse</H> du système. La représentation d'un système
            est généralement un <H>schéma fonctionnel</H> consistant en un bloc.
        </p>

        <h2>Commande</h2>
        <p>L’automatique est la discipline scientifique qui traite de la caractérisation, de la conception et de la
            réalisation du système de commande des systèmes automatisés.
        </p>
        <Message ref="linear-system" title="Système linéaire" type="definition">
            Un système automatisé est un système réalisant des opérations et pour lequel l’intervention humaine est limitée
            à la programmation du système et à son réglage préalable.
        </Message>
        <p>Dans le cas ou la réponse du système est mesuré par le système de commande (présence de capteurs), on peut
            alors adapter la consigne pour que la réponse corresponde au mieux à la consigne. C'est une structure avec
            une <H>rétroaction</H>, dite à <H>boucle fermée</H>, à l'opposé de la
            <H>boucle ouverte</H>. On peut mesurer et adapter la consigne en fonction des pertubations
            inconnues, ce qui améliore les performances dynamiques.
        </p>

        <h2>Structure</h2>
        <p>Les systèmes asservis permettent de maitriser l'évolution d'une ou plusieurs grandeurs physiques d'un processus.</p>
        <Message ref="controlled-system" title="Système asservi" type="definition">
            Un système asservi est l’association d’un processus, de capteurs et d’un système de commande permettant, à
            partir des consignes, de piloter une ou plusieurs grandeurs physiques du processus.
        </Message>
        <p>Les systèmes asservis sont caractérisés par la présence de <H>capteurs</H> permettant d’obtenir une
        image des grandeurs physiques que l’on souhaite piloter, appelées les <H>grandeurs asservies</H>.</p>
        <Figure legend="Structure d'un système asservi">
            <img src="$lib/assets/autom/model-1.webp">
        </Figure>
        <p>On peut alors définir la notion d'asservissement :</p>
        <Message ref="servo" title="Asservissement" type="definition">
            On appelle asservissement un système asservi dont la sortie doit suivre le plus fidèlement possible la
            consigne quelle que soit son évolution. Pour une consigne constante, le terme associé à l’asservissement est une régulation.
        </Message>

        <h2>Performances</h2>
        <p>Un système automatique repose sur le principe de causalité, l'effet ne peut précéder la cause.</p>
        <Message ref="causal-system" title="Système causal" type="definition">
            Un système est dit causal si sa réponse à un instant donné ne dépend que des entrées précédant cet
            instant.
        </Message>
        <p>On évalue le comportement du système suivant des critères de performance :</p>
        <ul class="is-disc">
            <li><H>Stabilité : </H> la réponse converge-t-elle pour une entrée constante ?</li>
            <li><H>Précision :</H> le système asservi atteint-il la valeur de consigne ?</li>
            <li><H>Rapidité :</H> combien de temps faut-il au système pour se stabiliser ?</li>
            <li><H>Dépassements :</H> La grandeur de sortie oscille-t-elle autour de la valeur de convergence avant de se stabiliser ?</li>
            <li><H>Robuste :</H> Une pertubation modifie-t-elle la valeur à convergence de la grandeur asservie ?</li>
        </ul>
        <Message ref="stability" title="Stabilité" type="definition">
            Un système est stable si pour toute entrée bornée, la sortie est bornée.
        </Message>
        <p>Traduit la convergence temporelle vers un état d'équilibre. A défaut, le système est dit <H>instable</H>.</p>
        <Message ref="precision" title="Précision" type="definition">
            La précision qualifie l’aptitude d’un système à respecter la consigne.
        </Message>
        <p>La précision est toujours associée à une quantification de l'erreur avec laquelle la sortie réalisée suit la loi de sortie désirée.</p>
        <Message ref="error" title="Erreur" type="definition">
            L’erreur <K math={"\\epsilon (t)"}/> est la différence entre la consigne <K math={"e (t)"}/> et la sortie <K math={"s (t)"}/> :
            <K displayMode math={"\\epsilon (t) = e(t) - s(t)"}/>
        </Message>
        <Message ref="static-error" title="Erreur statique" type="definition">
            L’erreur statique <K math={"\\epsilon_s"}/> est la limite au temps long de l’erreur associée à la réponse d’un système soumis à
            un échelon :
            <K displayMode math={"\\epsilon_s  = \\lim_{t \\rightarrow +\\infty} \\epsilon (t)"}/>
        </Message>
        <p>Un système est dit <H>précis</H> si l’erreur statique est nulle.</p>
        <Message ref="rapidity" title="Rapidité" type="definition">
            Un système est rapide s’il converge vers sa valeur finale en un temps court au regard de son contexte d’utilisation.
        </Message>
        <p>On associe la rapidité au <H>temps de réponse</H>, généralement à 5%.</p>
        <Message ref="response-time" title="Temps de réponse à 5%" type="definition">
            Le temps de réponse à 5% d’un système, noté <K math={"t_{r5\\%}"}/>, correspond au temps mis par la réponse de ce système
            soumis à un échelon pour entrer définitivement dans une bande à <K math={"\\pm 5"}/>% de sa valeur finale.
        </Message>
        <Message ref="overruns" title="Dépassements" type="definition">
            Un système stable présente des dépassements si sa réponse oscille de façon transitoire autour de la valeur finale avant de l’atteindre.
        </Message>
        <p>Les dépassements sont définis par rapport à la valeur finale de la réponse d’un système à un <H>échelon</H>. Ils peuvent
        être inférieurs ou supérieurs à cette valeur et sont numérotés par ordre croissant d’apparition. La convergence de
        la réponse vers une valeur finale implique que l’amplitude des dépassements diminue progressivement : on parle
        d’<H>amortissement</H> du régime transitoire de la réponse d’un système.</p>
        <Message ref="overruns" title="Robuste" type="definition">
            Un système est robuste (sensible aux perturbations) s’il ne converge pas vers les mêmes valeurs finales selon qu’une perturbation s’applique ou non.
        </Message>

        <Message ref="overruns" title="Performances des systèmes" type="remember">
            Pour l'étude des systèmes asservis, on veut rendre compatible les notions de stabilité, précision, rapidité et robustesse.
        </Message>

        <h1>Modélisation du comportement dynamique d'un système</h1>

        <h2>Hypothèses de la modélisation</h2>

        <h2>Systèmes linéaires continus invariants</h2>

        <h1>Résolution par la transformée de Laplace</h1>

        <h2>Définition et intérêts</h2>

        <h2>Théorèmes et propriétés</h2>

        <h2>Transformée de Laplace des fonctions usuelles</h2>

        <h2>Fonction de transfert</h2>

        <h2>Propriétés asymptotiques</h2>

        <h2>Transformée inverse</h2>

        <h1>Représentation par schéma-blocs</h1>

        <h2>Schéma-bloc</h2>

        <h2>Manipulation usuelles</h2>

    </div>
</Scroller>
