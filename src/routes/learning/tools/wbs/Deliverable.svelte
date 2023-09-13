<script lang="ts">
    import type { Deliverable } from "../../../../stores/WBS";
    import SubDeliverable from "./SubDeliverable.svelte";
    import Node from "./Node.svelte";

    export let deliverable: Deliverable;
    export let id: any;
    console.log(`del.${deliverable.deliverable}`);
    
</script>

<Node hasChildren={deliverable.sub_deliverables.length > 0}>
    <div slot="info">
        Level 2 <br>
        Major deliverables<br>
        These are parts of the<br> 
        project that can be<br> 
        delivered and approved
    </div>
    <div slot="card">
        {id}<br>{deliverable.deliverable}
    </div>
    <div slot="children">
        {#each deliverable.sub_deliverables as sub_deliverable, i}
            <SubDeliverable id={`${id}.${i+1}`} {sub_deliverable}/>
        {/each}
    </div>
</Node>
