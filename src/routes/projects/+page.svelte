<style>
    .project {
        margin: 2rem;
        padding: 3rem;
        background-color: transparent;
        filter: blur();
        border-radius: 15px;
        border: solid 2px rgb(45,45,55);
        width: 100%;
        height: fit-content;
        box-shadow: rgb(35,35,45) 0 0 2px 2px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a {
        text-decoration: underline;
        color: white;
    }
    .project-name {
        color: white;
    }
    .progress {
        display: flex;
    }
    .stage {
        height: 2rem;
        width: 2rem;
        border: solid 3px green;
        border-radius: 50px;
        margin: .5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    }
    .stage[data-completed="true"] {
        background-color: green;
    }
    .stage[data-completed="false"] {
        background-color: transparent;
    }
</style>

<script lang="ts">
    import Column from "../../components/Column.svelte";
    import Row from "../../components/Row.svelte";
    import {projects} from "../../stores/projects";
    import ProjectForm from "../../components/ProjectForm.svelte";
    let checkmark = "✓";
</script>

<Row placement="center">
    <Column placement="center">
        <ProjectForm/>
        {#each $projects.values() as project,i }
            <div class="project">
                <a href="/projects/{project.projectName}">
                    <h3 class="project-name">{project.projectName}</h3>
                </a>
                <div class="progress">
                    <div class="stage" data-completed="{project.stage >= 1}" id="stage-analysis">
                        {#if project.stage >= 1}
                            {checkmark}
                        {/if}
                    </div>
                    <div class="stage" data-completed="{project.stage >= 2}" id="stage-design">
                        {#if project.stage >= 2}
                            {checkmark}
                        {/if}
                    </div>
                    <div class="stage" data-completed="{project.stage >= 3}" id="state-implementation">
                        {#if project.stage >= 3}
                            {checkmark}
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </Column>
</Row>



