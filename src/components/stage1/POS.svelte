<script lang="ts">
    import type { Project, POS } from "../../stores/projects";
    import {theme} from "../../stores/theme";

    export let project: Project;
    let pos: POS = project.pos;

    const getDate = (): string => {
        let date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        return d + "-" + m + "-" + y;
    }
</script>

<style>
    .pos {
        margin: 8rem;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .row {
        border: solid rgb(45,45,55) 2px;
        background-color: rgba(255,255,255,.025);
        display: flex;
        flex-direction: row;
        width: 40rem;
        margin: 0;
        padding: 0;
    }
    .box {
        border: solid rgb(45,45,55) 1px;
        padding: 1rem;
        width: fit-content;
        flex: 1;
    }
    p {
        margin: .5rem;
    }
    #pos-title {
        word-wrap: break-word;
        max-width: 7rem;
    }
    .textarea {
        width: 36.75rem;
        margin: 0;
        padding: .5rem;
        resize: none;
        background-color: transparent;
        border: rgb(45,45,55) 1px solid;
        color: var(--font-color);
    }
</style>

{#if project}
    <div class="pos" style="--font-color:{$theme.font_color}">
        <div id="row1" class="row">
            <div class="box">
                <p id="pos-title">PROJECT OVERVIEW STATEMENT</p>
            </div>
            <div class="box">
                <p>Project Name</p>
                <p>{project.projectName}</p>
            </div>
            <div class="box">
                <p>Project No.</p>
                <p>0</p>
            </div>
            <div class="box">
                <p>Project Manager</p>
                <p>NONE</p>
            </div>
        </div>
        <div id="row2" class="row">
            <div class="box">
                <p>Problem/Opportunity</p>
                <textarea
                        class="textarea"
                        name="problem"
                        id="problem"
                        cols="50"
                        rows="10"
                        placeholder="Enter here"
                        bind:value={pos.problems_opportunity}></textarea>
            </div>
        </div>
        <div id="row3" class="row">
            <div class="box">
                <p>Goal</p>
                <textarea
                        class="textarea"
                        name="problem"
                        id="goal"
                        cols="50"
                        rows="10"
                        placeholder="Enter here"
                        bind:value={pos.goal}></textarea>
            </div>
        </div>
        <div id="row4" class="row">
            <div class="box">
                <p>Objectives</p>
                <textarea
                        class="textarea"
                        name="problem"
                        id="objectives"
                        cols="50"
                        rows="10"
                        placeholder="Enter here"
                        bind:value={pos.objectives}></textarea>
            </div>
        </div>
        <div id="row5" class="row">
            <div class="box">
                <p>Success Criteria</p>
                <textarea
                        class="textarea"
                        name="problem"
                        id="criteria"
                        cols="50"
                        rows="10"
                        placeholder="Enter here"
                        bind:value={pos.success_criteria}></textarea>
            </div>
        </div>
        <div id="row6" class="row">
            <div class="box">
                <p>Assumptions, Risks, Obstacles</p>
                <textarea
                        class="textarea"
                        name="problem"
                        id="risks"
                        cols="50"
                        rows="10"
                        placeholder="Enter here"
                        bind:value={pos.assumptions_risks_obstacles}></textarea>
            </div>
        </div>
        <div id="row7" class="row">
            <div class="box">
                <p>Prepared by</p>
                <p>
                    {#if pos.prepBy}
                        {pos.prepBy}
                    {/if}
                </p>
            </div>
            <div class="box">
                <p>Date</p>
                <p>
                    {#if pos.prepDate}
                        {pos.prepDate}
                    {:else}
                        {getDate()}
                    {/if}
                </p>
            </div>
            <div class="box">
                <p>Approved by</p>
                <p>
                    {#if pos.aprBy}
                        {pos.aprBy}
                    {/if}
                </p>
            </div>
            <div class="box">
                <p>Date</p>
                <p>
                    {#if pos.aprDate}
                        {pos.aprDate}
                    {:else}
                        {getDate()}
                    {/if}
                </p>
            </div>
        </div>
    </div>
{/if}