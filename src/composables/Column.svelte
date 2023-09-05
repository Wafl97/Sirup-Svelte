<script lang="ts">
    export let bg_color = "transparent";
    export let height = "100%";
    export let placement = "left";
    export let padding = "0";
    export let position = "relative";
    export let left = "0";
</script>

<style>
    .column {
        position: var(--position);
        display: flex;
        flex-direction: column;
        background-color: var(--bg-color);
        height: 100%;/*calc(var(--width) - (2 * var(--padding)));*/
        padding-block: var(--padding);
        align-items: var(--placement);
        left: var(--left);
    }
</style>

<div class="column" style="
        --bg-color: {bg_color};
        --height: {height};
        --placement: {placement};
        --padding: {padding};
        --position: {position};
        --left: {left};">
    <slot></slot>
</div>