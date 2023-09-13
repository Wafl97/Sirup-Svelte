<script lang="ts">
    import type { Project } from "../../stores/projects";
    import MultiPage from "../pagination/MultiPage.svelte";
    import RiskMatrix from "./RiskMatrix.svelte";

    export let project: Project; 
</script>

<MultiPage pages="{[RiskMatrix]}" project={project}></MultiPage>