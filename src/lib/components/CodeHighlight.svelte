<script>
    import Highlight, {LineNumbers} from "svelte-highlight";
    import "./github.css";

    export let language;
    export let code;

    export let ref;


</script>

<Highlight class="highlight-container" {code} id={ref || null} {language} let:highlighted>
    <LineNumbers class="scrollable-container" hideBorder={false} {highlighted}/>
</Highlight>


