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
    <div slot="foreground">
        <div class="columns">
            <div class="column is-10 is-offset-2">
                <section class="lesson">
                    This is the first section.
                    <a href="#t1">
                        Jump to the part of the page with the “anchor-name” id
                    </a>
                    <h1 id="t1">
                        Titre 1 qui est bien long pour tester le saut de ligne
                    </h1>
                    <h2 id="s1">Section 11</h2>
                    <h3>Sous section 111</h3>
                    <h3>Sous section 211</h3>
                    <h2 id="s2">Section 21</h2>
                    <h3>Sous section 112</h3>
                    <h1 id="t2">Titre 2</h1>
                    <h2 id="s21">Section 12</h2>
                    <h2 id="s22">Section 22</h2>
                    <h2 id="s23">Section 32</h2>
                </section>
            </div>
        </div>
    </div>
</Scroller>

<style>
    h1,
    h2 {
        height: 80vh;
    }
</style>
