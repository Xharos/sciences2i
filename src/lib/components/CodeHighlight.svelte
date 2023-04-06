<script>
    import Highlight, {LineNumbers} from "svelte-highlight";
    import "./github.css";

    export let language;
    export let code;

    function copyCode() {
        navigator.clipboard.writeText(code);
    }
</script>

<Highlight class="highlight-container" {code} {language} let:highlighted>
    <LineNumbers hideBorder={false} {highlighted}/>
</Highlight>


