<script lang="ts">
    import type {Project} from "../../../stores/projects";
    import {getProject, updateProject, Stage} from "../../../stores/projects";
    import {page} from "$app/stores";
    import ProjectStage1 from "../../../components/stage1/ProjectStage1.svelte";
    import ProjectStage2 from "../../../components/stage2/ProjectStage2.svelte";

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
            case Stage.DEFINING: {
                project.stage = Stage.PLANNING;
                break;
            }
            case Stage.PLANNING: {
                project.stage = Stage.EXECUTION;
                break;
            }
            case Stage.EXECUTION: {
                project.stage = Stage.CLOSING;
                break;
            }
            case Stage.CLOSING: {
                project.stage = Stage.COMPLETE;
            }
            default: {
                return;
            }
        }
        updateProject(project);
    }

    const previousStage = () => {
        switch (project.stage) {
            case Stage.COMPLETE: {
                project.stage = Stage.CLOSING;
                break;
            }
            case Stage.CLOSING: {
                project.stage = Stage.EXECUTION;
                break;
            }
            case Stage.EXECUTION: {
                project.stage = Stage.PLANNING;
                break;
            }
            case Stage.PLANNING: {
                project.stage = Stage.DEFINING;
            }
            default: {
                return;
            }
        }
        updateProject(project);
    }
</script>

{#if project}
    {#if project.stage === Stage.DEFINING}
        <ProjectStage1 project="{project}"/>
    {:else}
        {#if project.stage === Stage.PLANNING}
            <ProjectStage2 project="{project}"/>
        {:else}
            {#if project.stage === Stage.EXECUTION}
                EXCUTION
            {:else}
                {#if project.stage === Stage.CLOSING}
                    CLOSING
                {:else}
                    COMPLETED
                {/if}
            {/if}
        {/if}
    {/if}
    <button class="prev" on:click={() => previousStage()} disabled="{project.stage === Stage.DEFINING}">
        Go to previous stage
    </button>
    <button id="next" on:click={() => nextStage()} disabled="{project.stage === Stage.COMPLETE}">
        Go to next stage
    </button>
{/if}

