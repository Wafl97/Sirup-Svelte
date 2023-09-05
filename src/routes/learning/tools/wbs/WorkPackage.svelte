<script lang="ts">
    import Card from "../../../../composables/Card.svelte";
    import Hoverable from "../../../../composables/Hoverable.svelte";
    import type { WorkPackage } from "../../../../stores/WBS";
    import {theme} from "../../../../stores/theme";
    import Node from "./Node.svelte";

    export let work_package: WorkPackage;
    export let id: any;
    console.log(`wor.${work_package.work_package}`);
    
</script>

<Node indent={"10"}>
    <div slot="info">
        Level 6 <br>
        Identifiable work activities<br>
        This is the individaul tasks neede to complete the project
    </div>
    <div slot="card">
        {id}<br>{work_package.work_package}
    </div>
</Node>