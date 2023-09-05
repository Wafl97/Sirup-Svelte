<script>
    export let value;
    export let name;
    export let label;
</script>

<style>
    input {
        margin-block: 1rem;
        font-size: 1rem;
        background-color: var(--input-color);
        border: none;
        border-radius: 15px;
        padding: .5rem;
        color: var(--font-color);
        width: 100%;
    }
    input:hover {
        background-color: var(--input-hover-color);
    }
</style>

<label for="{name}">{label}</label>
<input type="text" {name} id="{name}" {value}>
