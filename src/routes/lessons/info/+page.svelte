<script>
    import Scroller from "$lib/components/Scroller.svelte";
    import Message from "$lib/components/MessageBox.svelte";
    import HideMessage from "$lib/components/HideMessageBox.svelte";
    import Framed from "$lib/components/Framed.svelte";
    import Figure from "$lib/components/Figure.svelte";
    import {Crumbs} from '$lib/components/Crumbs.svelte';
    import K from "$lib/components/K.svelte";

    let title = "Cours démonstration";

    let url = "/lessons/info/";
    let lastDate = "05/04/2023";

    // A modifier
    const crumbs = [
        Crumbs.COURS,
    ];

    const lastCrumb = {
        textKey: "Informatique"
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
</script>

<svelte:head>
    <title>Informatique | Sciences 2I</title>
    <meta
            content="Liste des cours d'informatique en sciences industrielles de l'ingénieur."
            name="description"
    />
</svelte:head>

<Scroller {crumbs} {lastCrumb} {lastDate} {title} {url}>
    <div slot="foreground">
        <h1>Exemple d'utilisation des figures</h1>
        <div class="columns is-mobile is-centered">
            <div class="column is-12-tablet is-8-desktop">
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

        <h1>Mon deuxième titre</h1>

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
