
<script lang="ts">
    export const name: string = "";
    export let color: string = "inherit";
    export let font_color: string = "inherit";
    export let width: string = "fit-content";
    export let height: string = "fit-content";
    export let margin: string = "0";
</script>

<style>
    .card {
        margin: var(--margin);
        width: var(--width);
        height: var(--height);
        border-radius: 10px;
        padding: .25rem;
        box-shadow: rgba(5,5,5,.15) 0 0 10px 10px;
        overflow: hidden;
        background: var(--color);
        color: var(--font-color);
    }
    .card-content {
        margin: 1rem;
    }
</style>

<div class="card" id="{name}_card" style="
--color:{color};
--width:{width};
--height:{height};
--margin: {margin};">
    <div class="card-content">
        <slot></slot>
    </div>
</div>