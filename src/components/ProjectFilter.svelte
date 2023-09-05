<script lang="ts">
    import {Stage} from "../stores/projects";
    export let applyFilter = (name: string, stage: Stage) => {
        console.log("No filter!", name, stage);
    }
    let name = "";
    let stage = Stage.ALL;
    let showFilter = false;
    const toggleShow = () => {
        showFilter = !showFilter;
    }
</script>

<style>
    .filter {
        display: flex;
        flex-direction: column;
    }
</style>

<button on:click={() => toggleShow()}>Filter</button>


{#if showFilter}
    <div class="filter">
        <label for="projectName">Project Name
            <input type="text" name="projectName" id="projectName" bind:value={name}>
        </label>
        <label for="stageSelect">Stage
            <select name="stageSelect" id="stageSelect" bind:value={stage} >
                <option value="{Stage.ALL}">All</option>
                <option value="{Stage.ANALYSIS}">Analysis</option>
                <option value="{Stage.DESIGN}">Design</option>
                <option value="{Stage.IMPLEMENTATION}">Implementation</option>
                <option value="{Stage.COMPLETE}">Completed</option>
            </select>
        </label>
        <input type="submit" value="Apply filter" on:click={() => applyFilter(name, stage)}>
    </div>
{/if}
