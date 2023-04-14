<script>
    import Highlight, {LineNumbers} from "svelte-highlight";
    import "./github.css";

    export let language;
    export let code;

</script>

<Highlight class="highlight-container" {code} {language} let:highlighted>
    <LineNumbers class="scrollable-container" hideBorder={false} {highlighted}/>
</Highlight>


