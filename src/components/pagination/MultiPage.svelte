<script lang="ts">
    import type { Project } from "../../stores/projects";

    export let pages: [] = [];
    export let project: Project;

    const pageMax = pages.length - 1;
    let page = 0;

    const nextPage = () => {
        page = Math.min(pageMax, page + 1);
    }
    const prevPage = () => {
        page = Math.max(0, page - 1);
    }
</script>

<style>
    .pageBtn {
        font-size: 1rem;
        position: absolute;
        top: 5rem;
        height: 2rem;
        width: 50%;
        color: white;
        background: rgb(35,35,45);
        border: none;
        cursor: pointer;
    }
    .pageBtn:hover {
        background: rgb(45,45,55);
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
</style>

{#if page > 0}
    <button class="pageBtn" id="prev" on:click={() => prevPage()}>{"<"}</button>
{/if}
{#if page < pageMax}
    <button class="pageBtn" id="next" on:click={() => nextPage()}>{">"}</button>
{/if}
<div id="page-content">
    <svelte:component this="{pages[page]}" {project}></svelte:component>
</div>
