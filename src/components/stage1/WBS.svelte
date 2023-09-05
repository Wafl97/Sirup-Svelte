<script lang="ts">
    import WbsNode from "./WbsNode.svelte";
    import type {Node} from "../../stores/wbsNode";
    import type {Project} from "../../stores/projects";
    import type { Writable} from "svelte/store";
    import { writable } from "svelte/store";

    export let project: Project;

    const root: Writable<Node>= writable({
        name: project.projectName,
        level: 0,
        index: 0,
        color: undefined,
        parent: undefined,
        children: [],
    });

    export {root};
</script>

<style>
    #wbs {
        margin: 8rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    #root {
        text-align: center;
    }
</style>

<div id="wbs">
    <div id="root">
        <WbsNode node="{$root}"/>
    </div>
</div>
