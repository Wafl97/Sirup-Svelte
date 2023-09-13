<script lang="ts">
    import Card from "../../../../composables/Card.svelte";
    import Hoverable from "../../../../composables/Hoverable.svelte";
    import { theme } from "../../../../stores/theme";

    export let indent: string = "0";
    export let root: boolean = false;
    export let hasChildren: boolean = false;

    let showChildren = true;
    const toggleChildren = () => {
        showChildren = !showChildren;
    }

</script>

<style>
    .node {
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        align-items: center;
    }
</style>

<div class="node" data-root={root} style="padding-left:{indent}rem">
    <Hoverable>
        <div slot="info">
            <slot name="info"></slot>
        </div>
        <Card color="{$theme.card_color}" width="15rem" height="5rem">
            <slot name="card" class=""></slot>
        </Card>
    </Hoverable>
    {#if hasChildren}
        <button on:click={() => toggleChildren()}>
            {showChildren? "Hide" : "Show"}
        </button>
        <div class="children">
            {#if showChildren}
            <slot name="children"></slot>
            {/if}
        </div>
    {/if}
</div>