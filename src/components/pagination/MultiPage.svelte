<script lang="ts">
    import Card from "../../composables/Card.svelte";
    import FormModal from "../../composables/FormModal.svelte";
    import Hoverable from "../../composables/Hoverable.svelte";
    import InputSubmit from "../../composables/InputSubmit.svelte";
    import type { Project } from "../../stores/projects";
    import { theme } from "../../stores/theme";

    export let pages: { name: string; component: any }[] = [];
    export let project: Project;

    const pageMax = pages.length - 1;
    let page = -1;

    const setPage = (newPage: number) => {
        page = newPage;
    };
    const nextPage = () => {
        page = Math.min(pageMax, page + 1);
    };
    const prevPage = () => {
        page = Math.max(0, page - 1);
    };
</script>

<style>
    .pageBtn {
        font-size: 1rem;
        position: absolute;
        top: 5rem;
        height: 2rem;
        width: 33.33%;
        color: white;
        background: rgb(35, 35, 45);
        border: none;
        cursor: pointer;
    }
    .pageBtn:hover {
        background: rgb(45, 45, 55);
    }
    #menu {
        left: 33.33%;
    }
    #prev {
        left: 0;
    }
    #next {
        right: 0;
    }
    #page-content {
        margin-top: 7rem;
    }
    .page-select {
        background: none;
        border: none;
        cursor: pointer;
        margin: 1rem;
        padding: 0;
    }
    .page-select-content {
        font-size: 2rem;
        font-weight: bold;
        padding: 1rem;
    }
    #grid {
        margin: 8rem 25%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
</style>


{#if page > -1}
    {#if page > 0}
        <button class="pageBtn" id="prev" on:click={() => prevPage()}
            >{"<"}</button
        >
    {/if}
    <button class="pageBtn" id="menu" on:click={() => setPage(-1)}>Menu</button>
    {#if page < pageMax}
        <button class="pageBtn" id="next" on:click={() => nextPage()}
            >{">"}</button
        >
    {/if}
    <div id="page-content">
        <svelte:component this={pages[page].component} {project} />
    </div>
{:else}
    <div id="grid">
        {#each pages as page, i}
            <button class="page-select" on:click={() => setPage(i)}>
                <Card color={$theme.card_color} width="100%">
                    <div class="page-select-content">
                        {page.name}
                    </div>
                </Card>
            </button>
        {/each}
    </div>
{/if}

