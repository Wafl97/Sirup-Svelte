<script lang="ts">

    import {theme} from "../stores/theme";
    import InputSubmit from "../composables/InputSubmit.svelte";

    let username = "";
    let password = "";

    const login = () => {
        console.log("logging in...");
        console.log({
            username: username,
            password: password,
        });
    }
</script>

<style>
    .center {
        display: flex;
        width: 20rem;
        margin-top: 25vh;
        margin-inline: auto;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    label {
        margin-right: 1rem;
    }
    input {
        margin-block: 1rem;
        font-size: 1rem;
        border: none;
        border-radius: 15px;
        padding: .5rem;
        width: 100%;
    }
    .field {
        display: flex;
        align-items: center;
    }
</style>

<div class="center">
    <form action="#">
        <div class="field">
            <label for="login_username">Username:</label>
            <input type="text" name="username" id="login_username" bind:value={username}>
        </div>
        <div class="field">
            <label for="login_password">Password:</label>
            <input type="password" name="password" id="login_password" bind:value={password}>
        </div>
        <InputSubmit value="Login" action="{login}"/>
    </form>
</div>
<a href="/">back</a>
