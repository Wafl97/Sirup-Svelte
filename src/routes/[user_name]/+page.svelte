<script>
    import {currentUser} from "../../stores/user";
</script>

<style>
    #user-id {

    }
</style>

<div class="account">
    <h1>{$currentUser.name} - <span id="user-id">{$currentUser.id}</span></h1>
</div>