<script lang="ts">
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
        backdrop-filter: blur(2px);
        background-color: rgba(10,10,10,.50);
        padding: 5rem;
        border: solid 2px rgb(45,45,55);
        border-radius: 10px;
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, 50%);
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
</style>

<div id="new-btn" on:click={() => toggleForm()}>
    <div id="plus">+</div>
    <div id="new-txt">Create new project</div>
</div>

{#if showForm}
    <div id="bg">
        <form action="#">
            <label for="projectName">Project Name
                <input type="text" name="projectName" id="projectName" bind:value={projectName}>
            </label>
            <input type="submit" value="Create" on:click={() => createProject()}>
        </form>
    </div>
{/if}

