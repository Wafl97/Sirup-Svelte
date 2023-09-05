<script lang="ts">
    import type {Project} from "../stores/projects";
    import {theme} from "../stores/theme";
    import Card from "../composables/Card.svelte";
    const checkmark = "✓";
    export let projects: Project[] = [];
</script>

<style>
    .project {
        height: fit-content;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    a {
        text-decoration: underline;
        color: var(--font-color);
    }
    .checkmark {
        color: var(--font-color);
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

{#each projects as project}
    <Card width="100%" height="100%" margin="2rem" color="{$theme.card_color}" font_color="{$theme.font_color}">
        <div class="project" style="--font-color: {$theme.font_color}">
            <a href="/projects/{project.projectId}">
                <h3 class="project-name">{project.projectName}</h3>
            </a>
            <div class="progress">
                <div class="stage" data-completed="{project.stage >= 1}" id="stage-analysis">
                    {#if project.stage >= 1}
                        <span class="checkmark">{checkmark}</span>
                    {/if}
                </div>
                <div class="stage" data-completed="{project.stage >= 2}" id="stage-design">
                    {#if project.stage >= 2}
                        <span class="checkmark">{checkmark}</span>
                    {/if}
                </div>
                <div class="stage" data-completed="{project.stage >= 3}" id="state-implementation">
                    {#if project.stage >= 3}
                        <span class="checkmark">{checkmark}</span>
                    {/if}
                </div>
            </div>
        </div>
    </Card>
{/each}