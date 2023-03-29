<script>
    export let type;
    export let title;
</script>

<article class={`message ${type}`}>
    <div class="message-header">
        <p>{title}</p>
    </div>
    <div class="message-body">
        <slot />
    </div>
</article>
