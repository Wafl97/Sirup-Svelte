<script lang="ts">
    import FormModal from "../composables/FormModal.svelte";
import InputSubmit from "../composables/InputSubmit.svelte";
import {addProject} from "../stores/projects";

    let projectName = "";

    const createProject = () => {
        addProject(projectName);
    }
</script>

<style>
    #new-btn-wrapper {
        display: flex;
        margin-block: 1rem;
    }
    #new-btn {
        padding: 1rem;
        background-color: green;
        color: white;
        font-size: 2rem;
        border-radius: 50px;
        width: 100%;
        cursor: pointer;
        display: flex;
        justify-content: left;
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
        margin-right: 1rem;
    }
    #new-txt {
        margin-right: 1rem;
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
</style>

<FormModal>
    <div slot="main" id="new-btn-wrapper">
        <div id="new-btn">
            <span id="plus">+</span>
            <span id="new-txt">Create new project</span>
        </div>
    </div>
    <form>
        <div class="field">
            <input type="text" name="projectName" id="projectName" bind:value={projectName} placeholder="New Project">
        </div>
        <InputSubmit value="Create" action={() => createProject()}></InputSubmit>
    </form>
</FormModal>

