<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import Message from "$lib/components/MessageBox.svelte";
    import HideMessage from "$lib/components/HideMessageBox.svelte";
    import Framed from "$lib/components/Framed.svelte";
    import Figure from "$lib/components/Figure.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import CodeHighlight from "$lib/components/CodeHighlight.svelte";
    import js from "svelte-highlight/languages/python";
    import K from "$lib/components/K.svelte";

    let title = "Cours démonstration";

    let url = "/lessons/demo/";
    let lastDate = "05/04/2023";

    // A modifier
    const crumbs = [
        Crumbs.COURS,
    ];

    const lastCrumb = {
        textKey: "Démonstration template"
    };

    import Chart from 'chart.js/auto';

    import {onMount} from 'svelte';

    // Generate an array of x values between 0 and 10 with a step of 0.1
    const xValues = Array.from({length: 201}, (_, i) => i / 100);

    let zeta = 0.2; // coefficient d'amortissement
    let chart;
    const omega_n = 20; // fréquence naturelle non amortie
    const A = 5; // amplitude initiale

    let yValues = xValues.map(t => {
        const term1 = Math.exp(-zeta * omega_n * t);
        const term2 = Math.cos(omega_n * t * Math.sqrt(1 - zeta ** 2));
        const term3 = (zeta / (Math.sqrt(1 - zeta ** 2))) * Math.sin(omega_n * t * Math.sqrt(1 - zeta ** 2));
        return A * (1 - term1 * (term2 + term3));
    });

    function handleZetaChange(event) {
        zeta = event.target.value;
        yValues = xValues.map(t => {
            const term1 = Math.exp(-zeta * omega_n * t);
            const term2 = Math.cos(omega_n * t * Math.sqrt(1 - zeta ** 2));
            const term3 = (zeta / (Math.sqrt(1 - zeta ** 2))) * Math.sin(omega_n * t * Math.sqrt(1 - zeta ** 2));
            return A * (1 - term1 * (term2 + term3));
        });
        chart.data.datasets[0].data = yValues;
        chart.update();
    }

    onMount(() => {
        const ctx = document.getElementById('chart');
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    label: 'Second ordre impulsionnel sous-amorti',
                    data: yValues,
                    borderColor: '#1469b8',
                    fill: false,
                    pointRadius: 0 // hide the data points
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            font: {
                                family: "Roboto",
                                size: 16,
                            },
                            text: 't [s]' // set the x-axis label
                        },
                        ticks: {
                            font: {
                                family: "Roboto",
                                size: 16,
                            }
                        },
                        type: 'linear',
                    },
                    y: {
                        title: {
                            display: true,
                            font: {
                                family: "Roboto",
                                size: 16,
                            },
                            text: 'h(t)' // set the y-axis label
                        },
                        ticks: {
                            min: 0,
                            max: 10,
                            stepSize: 1,
                            font: {
                                family: "Roboto",
                                size: 16,
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                family: "Roboto",
                                size: 16,
                            }
                        }
                    }
                }
            }
        });
    });

    let code = "import numpy as np\n" +
        "import matplotlib.pyplot as plt\n" +
        "from scipy.integrate import solve_ivp\n" +
        "\n" +
        "def pendulum(t, y, L=1, g=9.81):\n" +
        "    \"\"\"Defines the differential equation for a simple pendulum.\"\"\"\n" +
        "    theta, omega = y\n" +
        "    dydt = [omega, -(g/L) * np.sin(theta)]\n" +
        "    return dydt\n" +
        "\n" +
        "# Define initial conditions and time span\n" +
        "theta0 = np.pi/4  # initial angle\n" +
        "omega0 = 0  # initial angular velocity\n" +
        "y0 = [theta0, omega0]  # initial state\n" +
        "t_span = [0, 10]  # time span\n" +
        "\n" +
        "# Solve the differential equation\n" +
        "sol = solve_ivp(pendulum, t_span, y0)\n" +
        "\n" +
        "# Extract the solution\n" +
        "theta = sol.y[0]\n" +
        "omega = sol.y[1]\n" +
        "t = sol.t\n" +
        "\n" +
        "# Plot the solution\n" +
        "fig, ax = plt.subplots()\n" +
        "ax.plot(t, theta, label='theta')\n" +
        "ax.plot(t, omega, label='omega')\n" +
        "ax.set_xlabel('Time')\n" +
        "ax.set_ylabel('Angle / Angular Velocity')\n" +
        "ax.set_title('Simple Pendulum')\n" +
        "ax.legend()\n" +
        "plt.show()";

    let description = "Page de démonstration du site Sciences 2I.";
</script>

<svelte:head>
    <title>Démonstration | Sciences 2I</title>
    <meta content={description} name="description"/>
    <meta content={description} property="og:description">
    <meta content={description} name="twitter:description">
</svelte:head>

<Scroller {crumbs} {lastCrumb} {lastDate} {title} {url}>
    <div slot="foreground">
        <h1>Mon premier titre</h1>
        <p>La table des matières est cliquable et se remplit toute seule pour chaque balise h1 et h2 dans le texte.</p>

        <h1>Éléments uniformisés</h1>
        <p>Ce site fournit plusieurs blocs pour simplifier la mise en page et le développement</p>

        <h2>Bloc propriété</h2>
        <p>Bloc coloré en vert, le compteur est intégré :</p>
        <!-- type peut être property, definition, remember -->
        <Message title="Masse volumique" type="property">
            La masse volumique (noté
            <K math={"\\rho"}/>
            ) est une propriété caractéristique qui représente la quantité de matière (masse) se trouvant dans un espace
            (une unité de volume) donné.
        </Message>

        <h2>Bloc définition</h2>
        <p>Bloc coloré en bleu, le compteur est intégré :</p>
        <!-- type peut être property, definition, remember -->
        <Message title="Système linéaire" type="definition">
            Un système linéaire au sens de l'automatique est un système qui peut être décrit par des équations
            linéaires.
        </Message>

        <h2>Bloc à retenir</h2>
        <p>Bloc coloré en rouge :</p>
        <!-- type peut être property, definition, remember -->
        <Message title="Système linéaire" type="remember">
            Mettre ce site dans ses favoris.
        </Message>

        <h2>Bloc caché</h2>
        <p>Bloc caché qui apparaît lors du clic de l'utilisateur :</p>
        <!-- un bloc ou l'utilisateur doit cliquer pour l'étendre en longueur -->
        <HideMessage title="Démonstration">
            <p>Très utile pour y mettre des démonstrations qui sont longues par exemple</p>
        </HideMessage>
        <p>Il suffit de cliquer sur la bannière bleue.</p>

        <h2>Bloc remarque</h2>
        <p>Bloc qui ne sert exclusivement qu'aux remarques :</p>
        <Framed>
            Ceci est une remarque !
        </Framed>

        <h1>Le mode maths</h1>
        <p>
            Le mode math peut s'intégrer en ligne (comme ici
            <K math={"10^{-4}\\space m.s^{-1}"}/>
            ) ou bien en mode <i>display</i> comme avec Latex :
        </p>
        <K displayMode math={"U_{AB} = V_A - V_B"}/>

        <p>On peut évidemment mélanger les environnements, ici une longue formule dans une boîte définition</p>
        <Message title="Exemple" type="definition">
            <K displayMode
               math={"\\pi = 3.141592653589793238462643383279502884197169399375105814159265358979323846264338327950288419716939937510581415926535897932384626433832795028841971693993751058"}/>
            <p>On remarquera que le compteur est passé à 2, deuxième définition du document.</p>
        </Message>

        <p>
            <K displayMode
               math={"\\pi = 3.14159265358979323846264338327950288419716141592653589793238462643383279502884197161415926535897932384626433832795028841971614159265358979323846264338327950288419716"}/>
        </p>
        <p>Cette formule ne déborde pas</p>
        <p>Tout le site est responsive (normalement) vous pouvez re-dimensionner l'onglet comme vous le voulez, ou
            l'ouvrir sur tablette ou mobile.</p>
        <br/>
        <h2>Ajouter des images</h2>
        <p>L'image est ajouté dans un container centré et aux bonnes dimensions. Il est possible de le re-dimensionner
            en utilisant les classes adaptés avec Bulma (image is-3by-1 par exemple. Privilégier des noms évidents
            d'image, le format webp et une mise en page type bannière pour ne pas occuper tout l'espace utile..</p>
        <Figure legend="coucou toi">
            <img src="$lib/assets/elec.webp">
        </Figure>

        <h1>Exemple d'utilisation des figures</h1>
        <p>L'intérêt même d'avoir un cours en verison web, ajouter du contenu interactif!</p>
        <div class="columns is-mobile is-centered">
            <div class="column is-12-desktop is-8-widescreen">
                <div class="chart-container">
                    <canvas id="chart"></canvas>
                </div>
            </div>
        </div>
        <p>Ce graphique représente la réponse impulsionnelle d'un système du second ordre sous-amorti :

        </p>
        <K displayMode
           math={"h(t) = Ke_0\\Bigg[1-e^{-\\xi w_0t}\\bigg( \\cos\\Big(w_0t\\sqrt{1 - \\xi^2} \\Bigr) \\biggr) + \\frac{\\xi}{\\sqrt{1-\\xi^2}}\\sin\\Big(w_0t\\sqrt{1 - \\xi^2} \\Bigr) \\Biggr]"}/>
        <div class="slider-container">
            <label for="zeta-slider">Fait varier le coefficient d'amortissement
                <K math='{"\\xi"}'/>
                :</label>
            <input id="zeta-slider" max="0.99" min="0" on:input={handleZetaChange} step="0.05" type="range"
                   value={zeta}/>
            <span>{zeta}</span>
        </div>
        <br/>
        <br/>

        <CodeHighlight code={code} language={js}/>

    </div>
</Scroller>

<style>
    .chart-container {
        position: relative;
        height: 0;
        padding-bottom: 50%; /* 4:3 aspect ratio */
    }

    .chart-container canvas {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
</style>
