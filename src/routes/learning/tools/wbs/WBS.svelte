<script lang="ts">
    import Row from "../../../../composables/Row.svelte";
    import type { tWBS } from "../../../../stores/WBS";
    import Deliverable from "./Deliverable.svelte";
    import Node from "./Node.svelte";

    export let wbs: tWBS;
    console.log(`wbs.${wbs.project}`);
    
</script>

<style>
    .children {
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
    .project {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<Node root={true}>
    <div slot="info">
        Level 1<br>
        Complete project<br>
        This is the overall project, it represents the final outcome of the project when completed
    </div>
    <div slot="card" class="project">
        {wbs.project}
    </div>
    <div slot="children" class="children">
        {#each wbs.deliverables as deliverable, i}
            <Deliverable id={i+1} {deliverable}/>
        {/each}
    </div>
</Node>
