<script lang="ts">
    import type {Project} from "../../../stores/projects";
    import {getProject, updateProject, Stage} from "../../../stores/projects";
    import {page} from "$app/stores";

    let p_name = $page.params.project_name;

    let project: Project;
    let o_p = getProject(p_name);
    if (o_p.isSome()) {
        project = o_p.unwrap();
        console.log(project);
    }
    else {
        console.log("Could not find project");
    }

    const nextStage = () => {
        switch (project.stage) {
            case Stage.ANA: {
                project.stage = Stage.DES;
                break;
            }
            case Stage.DES: {
                project.stage = Stage.IMP;
                break;
            }
            case Stage.IMP: {
                project.stage = Stage.COM;
                break;
            }
        }
        updateProject(project);
    }

    const previousStage = () => {
        switch (project.stage) {
            case Stage.COM: {
                project.stage = Stage.IMP;
                break;
            }
            case Stage.IMP: {
                project.stage = Stage.DES;
                break;
            }
            case Stage.DES: {
                project.stage = Stage.ANA;
                break;
            }
        }
        updateProject(project);
    }
</script>

<style>
    #project {
        color: white;
    }
</style>

{#if project}
    <div id="project">
        <h1>{project.projectName}</h1>
        <h2>Stage: {project.stage}</h2>
    </div>
    <button class="prev" on:click={() => previousStage()}>
        Go to previous stage
    </button>
    <button id="next" on:click={() => nextStage()}>
        Go to next stage
    </button>
{/if}

