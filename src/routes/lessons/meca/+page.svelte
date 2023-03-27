<script>
    import K from "$lib/components/K.svelte";
</script>

<svelte:head>
    <title>Mécanique | Sciences 2I</title>
    <meta
        name="description"
        content="Liste des cours de mécaniques en sciences industrielles de l'ingénieur."
    />
</svelte:head>

<section class="section">
    <h1 class="title">Test</h1>
    <h2 class="subtitle">youhou</h2>
    Simple <K>x_i = y^2_j</K>
    <p>Test d'une équation en ligne</p>
    <div class="container has-text-centered">
        <K>\pi = \frac{1}{2}</K>
    </div>
    <p>Test d'une matrice en ligne</p>
    <div class="container has-text-centered">
        <K
            >{`c = \\begin{pmatrix}
                a & b \\\\
                c & d
             \\end{pmatrix}`}</K
        >
    </div>
</section>
