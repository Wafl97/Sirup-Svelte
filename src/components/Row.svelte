<script lang="ts">
    export let bg_color = "transparent";
    export let width = "100%";
    export let placement = "left";
    export let padding = "0";
    export let position = "relative";
    export let top = "0";
    export let filter = "";
</script>

<style>
    .row {
        position: var(--position);
        display: flex;
        flex-direction: row;
        background: var(--bg-color);
        width: 100%;/*calc(var(--width) - (2 * var(--padding)));*/
        justify-content: var(--placement);
        padding-inline: var(--padding);
        top: var(--top);
        backdrop-filter: var(--filter);
    }
</style>

<div class="row" style="
        --bg-color: {bg_color};
        --width: {width};
        --placement: {placement};
        --padding: {padding};
        --position: {position};
        --top: {top};
        --filter: {filter}">
    <slot></slot>
</div>