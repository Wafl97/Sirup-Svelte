<script lang="ts">
    import type { Project } from "../../stores/projects";
    import POS from "./POS.svelte";
    import WBS from "./WBS.svelte";
    import Diagram from "../Diagram.svelte";
    import MultiPage from "../pagination/MultiPage.svelte";
    import RBS from "./RBS.svelte";

    export let project: Project;   
</script>


<MultiPage pages="{[POS,WBS,Diagram,RBS]}" project="{project}"/>

