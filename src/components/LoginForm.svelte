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
        background-color: var(--input-color);
        border: none;
        border-radius: 15px;
        padding: .5rem;
        color: var(--font-color);
        width: 100%;
    }
    input:hover {
        background-color: rgba(128,128,128,.1);;
    }
    .field {
        display: flex;
        align-items: center;
    }
    input[type=submit] {
        cursor: pointer;
        text-align: center;
        background-color: green;
        color: white;
    }
    input[type=submit]:hover {
        background-color: darkgreen;
    }
</style>

<div class="center" style="--input-color:{$theme.card_color}; --font-color: {$theme.font_color}">
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
