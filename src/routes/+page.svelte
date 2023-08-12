<script lang="ts">
    import Card from "../components/Card.svelte";
    import { getAll, users} from "../stores/user";
    import Header from "../components/Header.svelte";

    const onClick = () => {
        getAll();
    }
</script>

<style>
    h2 {
        margin: 0;
        padding: 0;
    }
    a {
        color: white;
        padding: 1rem;
    }
</style>

<h1>SIRUP</h1>

<h2>
    <a href="/projects">Projects</a>
</h2>

<!--<Card width="50%" color_1="red" color_2="orange" angle="0">
    <h1>Welcome to Wafl's site</h1>
</Card>-->

<!--<button on:click={() => onClick()}>
    Get Users
</button>

{#if $users}
    {#each $users as user}
        <Card color_2="red" color_1="orange" width="20rem">
            <h3>{user.name}</h3>
            <h4>{user.id}</h4>
        </Card>
    {/each}
{/if}-->
