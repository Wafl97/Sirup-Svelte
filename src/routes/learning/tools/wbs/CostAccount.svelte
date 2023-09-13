<script lang="ts">
    import type { CostAccount } from "../../../../stores/WBS";
    import Node from "./Node.svelte";
    import WorkPackage from "./WorkPackage.svelte";

    export let cost_account: CostAccount;
    export let id: any;
    console.log(`cos.${cost_account.cost_account}`);
    
</script>

<Node indent={"8"} hasChildren={cost_account.work_packages.length > 0}>
    <div slot="info">
        Level 5 <br>
        Grouping of work packages for monitoring progress and responsibility
    </div>
    <div slot="card">
        {id}<br>{cost_account.cost_account}
    </div>
    <div slot="children">
        {#each cost_account.work_packages as work_package, i}
            <WorkPackage id={`${id}.${i+1}`} {work_package}/>
        {/each}
    </div>
</Node>