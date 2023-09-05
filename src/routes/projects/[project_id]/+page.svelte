<script lang="ts">
    import type {Project} from "../../../stores/projects";
    import {getProject, updateProject, Stage} from "../../../stores/projects";
    import {page} from "$app/stores";
    import ProjectStage1 from "../../../components/stage1/ProjectStage1.svelte";

    let p_id = $page.params.project_id;

    let project: Project;
    let o_p = getProject(p_id);
    if (o_p.isSome()) {
        project = o_p.unwrap();
        console.log(project);
    }
    else {
        console.log("Could not find project");
    }

    const nextStage = () => {
        switch (project.stage) {
            case Stage.ANALYSIS: {
                project.stage = Stage.DESIGN;
                break;
            }
            case Stage.DESIGN: {
                project.stage = Stage.IMPLEMENTATION;
                break;
            }
            case Stage.IMPLEMENTATION: {
                project.stage = Stage.COMPLETE;
                break;
            }
        }
        updateProject(project);
    }

    const previousStage = () => {
        switch (project.stage) {
            case Stage.COMPLETE: {
                project.stage = Stage.IMPLEMENTATION;
                break;
            }
            case Stage.IMPLEMENTATION: {
                project.stage = Stage.DESIGN;
                break;
            }
            case Stage.DESIGN: {
                project.stage = Stage.ANALYSIS;
                break;
            }
        }
        updateProject(project);
    }
</script>

{#if project}
    {#if project.stage === Stage.ANALYSIS}
        <ProjectStage1 project="{project}"/>
    {:else}
        {#if project.stage === Stage.DESIGN}
            DESIGN
        {:else}
            {#if project.stage === Stage.IMPLEMENTATION}
                IMPLEMENTING
            {:else}
                COMPLETED
            {/if}
        {/if}
    {/if}
    <button class="prev" on:click={() => previousStage()} disabled="{project.stage === Stage.ANALYSIS}">
        Go to previous stage
    </button>
    <button id="next" on:click={() => nextStage()} disabled="{project.stage === Stage.DESIGN}">
        Go to next stage
    </button>
{/if}

