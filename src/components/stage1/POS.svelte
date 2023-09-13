<script lang="ts">
    import Card from "../../composables/Card.svelte";
import Hoverable from "../../composables/Hoverable.svelte";
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

    let latex: string | undefined;
    const toLaTeX = () => {
        const objectivesArr = pos.objectives.split("*");
        let objectives = "    \\begin{itemize}\n";
        objectivesArr.shift();        
        objectivesArr.forEach(objective => {           
            objectives += `\t        \\item${objective}`;
        }); 
        objectives += "\n\t    \\end{itemize}";
        latex = `
\\begin{table}[h]
    \\begin{tabular}{|p{\\textwidth}|}
        \\hline
        \\begin{tabular}{m{6.5em}|p{7em}|p{5.5em}|p{10em}}
            PROJECT OVERVIEW STATEMENT & 
            \\begin{tabular}{c}
                Project Name \\\\
                ${project.projectName}
            \\end{tabular} & 
            \\begin{tabular}{c}
                Projcet No. \\\\
                1
            \\end{tabular} & 
            \\begin{tabular}{c}
                Projcet Manager \\\\\\
                
            \\end{tabular} \\\\
        \\end{tabular} \\\\
        \\hline
        \\textbf{Problem/Opportunity} \\\\
        ${pos.problems_opportunity} \\\\
        \\hline
        \\textbf{Goal} \\\\
        ${pos.goal} \\\\
        \\hline
        \\textbf{Objectives} \\\\
        ${objectives} \\\\
        \\hline
        \\textbf{Success Criteria} \\\\
        ${pos.success_criteria} \\\\
        \\hline
        \\textbf{Assumptions, Risks, Obstacles} \\\\
        ${pos.assumptions_risks_obstacles} \\\\
        \\hline
        \\begin{tabular}{p{9em}|p{5em}|p{9em}|p{5em}}
            \\begin{tabular}{c}
                Prepared by \\\\\\
                ${pos.prepBy}
            \\end{tabular} &
            \\begin{tabular}{c}
                Date \\\\\\
                ${pos.prepDate}
            \\end{tabular} &
            \\begin{tabular}{c}
                Approved by \\\\\\
                ${pos.aprDate}
            \\end{tabular} &
            \\begin{tabular}{c}
                Date \\\\\\
                ${pos.aprDate}
            \\end{tabular}
        \\end{tabular} \\\\
        \\hline
    \\end{tabular}
\\end{table}`
    };
    let showJson = false;
    const toJson = () => {
        showJson = true;
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
    .section-title {
        display: flex;
        align-items: center;
        gap: .5rem;
        
    }
    .info-icon {
        user-select: none;
        position: relative;
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
                <p class="section-title">
                    Problem/Opportunity
                    <Hoverable>
                        <p slot="info">
                            The different problems that the project can incounter,<br> in addition to the opportunities it also can enable
                        </p>
                        <span class="info-icon">🛈</span>
                    </Hoverable>
                </p>
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
                <p class="section-title">
                    Goal
                    <Hoverable>
                        <p slot="info">
                            What is the overall goal of the project?<br>
                            What is the intended product or service, and what will is offer?
                        </p>
                        <span class="info-icon">🛈</span>
                    </Hoverable>
                </p>
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
                <p class="section-title">
                    Objectives
                    <Hoverable>
                        <p slot="info">
                            What are the different objectives that are needed to complete the project?
                        </p>
                        <span class="info-icon">🛈</span>
                    </Hoverable>
                </p>
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
                <p class="section-title">
                    Success Criteria
                    <Hoverable>
                        <p slot="info">
                            What is needed for the project to be accepted as a success?
                        </p>
                        <span class="info-icon">🛈</span>
                    </Hoverable>
                </p>
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
                <p class="section-title">
                    Assumptions, Risks, Obstacles
                    <Hoverable>
                        <p slot="info">
                            What are the different assumptions that are made about the project?<br>
                            What are the risks that might occur during the project?<br>
                            What obstacles can cause challenges for the project?
                        </p>
                        <span class="info-icon">🛈</span>
                    </Hoverable>
                </p>
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
    <button on:click={() => toLaTeX()}>To LaTeX</button>
    <button on:click={() => toJson()}>To JSON</button>
{/if}
{#if latex}
    <pre><code>>
        {latex}
    </code></pre>
{/if}
{#if showJson}
    <pre><code>
        {JSON.stringify(pos, null, 4)}
    </code></pre>
{/if}