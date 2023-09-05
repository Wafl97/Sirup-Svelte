<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    export let content = [];
    export let prPage = 5;

    const endPage = Math.ceil(content.length / prPage);
    let page = 0;
    const shown = writable([]);

    onMount(() => {
        buildPage();
    });

    const buildPage = () => {
        console.log(endPage)
        shown.update(shown => {
            console.log("from",page * prPage,"to",(page + 1) * prPage)
            for (let i = 0; i < prPage; i++) {
                shown[i] = content[i + page * prPage];
            }
            return shown;
        });
    }

    const next = () => {
        page++;
        buildPage();
    }

    const prev = () => {
        page--;
        buildPage();
    }
</script>

{#each $shown as cnt}
    {#if cnt !== undefined}
        <h1>{cnt}</h1>
    {/if}
{/each}
<button on:click={() => prev()} disabled="{page === 0}">Prev</button>
Page: {page + 1} / {endPage}
<button on:click={() => next()} disabled="{page + 1 === endPage}">Next</button>
