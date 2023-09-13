<script lang="ts">
    import type { Project } from "../../stores/projects";
    import POS from "./POS.svelte";
    import WBS from "./WBS.svelte";
    import Diagram from "../Diagram.svelte";
    import MultiPage from "../pagination/MultiPage.svelte";
    import RBS from "./RBS.svelte";

    export let project: Project;   
</script>


<MultiPage pages="{[
    {name: "POS", component: POS},
    {name: "WBS", component: WBS},
    {name: "Diagram", component: Diagram},
    {name: "RBS", component: RBS}
    ]}" project="{project}"/>

