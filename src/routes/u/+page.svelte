<script>
    import { goto } from "$app/navigation";
    import { currentUser } from "../../stores/user";

    goto(`/u/${$currentUser.name}`);
</script>