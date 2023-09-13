<script lang="ts">
    import type { SubDeliverable } from "../../../../stores/WBS";
    import LowestSubDeliverable from "./LowestSubDeliverable.svelte";
    import Node from "./Node.svelte";

    export let sub_deliverable: SubDeliverable;
    export let id: any;
    console.log(`sub.${sub_deliverable.sub_deliverable}`);
    
</script>

<Node indent={"4"} hasChildren={sub_deliverable.lowest_sub_deliverables.length > 0}>
    <div slot="info">
        Level 3 <br>
        Supporting deliverables
    </div>
    <div slot="card">
        {id}<br>{sub_deliverable.sub_deliverable}
    </div>
    <div slot="children">
        {#each sub_deliverable.lowest_sub_deliverables as lowest_sub_deliverable, i}
            <LowestSubDeliverable id={`${id}.${i+1}`} {lowest_sub_deliverable}/>
        {/each}
    </div>
</Node>