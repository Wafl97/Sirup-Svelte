<script lang="ts">

    const newObj: () => {} = () => {
        return {}
    }


    export let action: () => void = () => {
        console.log("no action");
    }
    export let value = "Submit";
</script>

<style>
    input[type=submit] {
        cursor: pointer;
        text-align: center;
        background-color: green;
        color: white;
        margin-block: 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 15px;
        padding: .5rem;
        width: 100%;
    }
    input[type=submit]:hover {
        background-color: darkgreen;
    }
</style>

<input type="submit" {value} on:click={() => action()}>