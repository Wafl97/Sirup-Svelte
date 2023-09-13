<script lang="ts">
    import type { LowestSubDeliverable } from "../../../../stores/WBS";
    import CostAccount from "./CostAccount.svelte";
    import Node from "./Node.svelte";

    export let lowest_sub_deliverable: LowestSubDeliverable;
    export let id: any;
    console.log(`low.${lowest_sub_deliverable.lowest_sub_deliverable}`);
    
</script>

<Node indent={"6"} hasChildren={lowest_sub_deliverable.cost_accounts.length > 0}>
    <div slot="info">
        Level 4 <br>
        Lowest management responsibility level
    </div>
    <div slot="card">
        {id}<br>{lowest_sub_deliverable.lowest_sub_deliverable}
    </div>
    <div slot="children">
        {#each lowest_sub_deliverable.cost_accounts as cost_account, i}
            <CostAccount id={`${id}.${i+1}`} {cost_account}/>
        {/each}
    </div>
</Node>