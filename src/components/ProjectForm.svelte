<script lang="ts">
    import InputSubmit from "../composables/InputSubmit.svelte";
import {addProject} from "../stores/projects";

    let projectName = "";

    let showForm = false;
    const toggleForm = () => {
        showForm = !showForm;
    }

    const createProject = () => {
        addProject(projectName);
        toggleForm();
    }
</script>

<style>
    #bg {
        z-index: 999999;
        backdrop-filter: blur(10px);
        background-color: var(--card-color);
        padding: 2rem 5rem;
        border-radius: 10px;
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, 25%);
        overflow: hidden;
    }
    #new-btn {
        margin: 1.5rem;
        background-color: green;
        color: white;
        font-size: 2rem;
        padding: 1rem;
        border-radius: 50px;
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content:left;
        user-select: none;
    }
    #plus {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        height: 2rem;
        width: 2rem;
        border: solid 2px white;
        margin-right: 3rem;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .field {
        display: flex;
        align-items: center;
    }
    #close {
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgba(255,0,0,.95);
        border: none;
        color: white;
        font-size: 1rem;
        width: 1.5rem;
        border-radius: 0 0 0 10px;
        cursor: pointer;
    }
</style>

<div id="new-btn" on:click={() => toggleForm()}>
    <span id="plus">+</span>
    <span id="new-txt">Create new project</span>
</div>

{#if showForm}
    <div id="bg" style="--">
        <button id="close" on:click={() => toggleForm()}>X</button>
        <form>
            <div class="field">
                <input type="text" name="projectName" id="projectName" bind:value={projectName} placeholder="New Project">
            </div>
            <InputSubmit value="Create" action={() => createProject()}></InputSubmit>
        </form>
    </div>
{/if}

