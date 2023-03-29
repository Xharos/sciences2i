<script>
    import Scroller from "$lib/components/Scroller.svelte";

    let url = "/lessons/elec/electrokinetic/1";
</script>

<svelte:head>
    <title>Lois dans l'ARQS | Sciences 2I</title>
    <meta
        name="description"
        content="Cours sur les lois électriques dans l'approximation des régimes quasi stationnaires (ARQS)."
    />
</svelte:head>

<Scroller {url}>
    <div slot="background" />
    <div slot="foreground">
        <section class="lesson">
            This is the first section.
            <h1 id="t1">
                Titre 1 qui est bien long pour tester le saut de ligne
            </h1>
            <h2 id="s11">Section 11</h2>
            <h2 id="s21">Section 21</h2>
            <h1 id="t2">Titre 2</h1>
            <h2 id="s12">Section 12</h2>
            <h2 id="s22">Section 22</h2>
            <h2 id="s32">Section 32</h2>
            <h1 id="t3">Titre 3</h1>
            <h2 id="s13">Section 13</h2>
            <h2 id="s23">Section 23</h2>
            <h2 id="s33">Section 33</h2>
            <h1 id="t4">Titre 4</h1>
            <h2 id="s14">Section 14</h2>
            <h2 id="s24">Section 24</h2>
            <h2 id="s34">Section 34</h2>
            <h1 id="t5">Titre 5</h1>
            <h2 id="s15">Section 15</h2>
            <h2 id="s25">Section 25</h2>
            <h2 id="s35">Section 35</h2>
        </section>
    </div>
</Scroller>

<style>
    h1,
    h2 {
        height: 80vh;
    }
</style>
