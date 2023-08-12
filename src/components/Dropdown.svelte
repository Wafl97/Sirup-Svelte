<script lang="ts">
    import { onMount } from "svelte";

    export let name = "dropdown";
    export let menu_placement = "right";
    export let margin_inline = "0";
    export let width = "fit-content";
    export let height = "inherit";
    export let menu_length = "fit-content";

    let show = false;
    const toggle = () => {
        show = !show;
    }
    onMount(() => {
        console.log(`Mounted Dropdown [${name}]`);
        const div = document.getElementById(`dropdown_${name}`);
        if (div) {
            div.onmouseenter = () => {
                show = true;
            }
            div.onmouseleave = () => {
                show = false;
            }
        }
    });
</script>

<style>
    ::-webkit-scrollbar {
        width: 0;
    }
    .header, .menu {
        padding: .5rem;
        background-color: rgb(10,10,10);
        color: white;
        width: fit-content;
        user-select: none;
    }
    .header {
        height: var(--height);
        width: calc(var(--width) + calc(3 * var(--margin-inline)));
        cursor: pointer;
        text-align: center;
        border-radius: var(--top-br);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .dropdown {
        --top-br: 15px;
        --bot-br: 15px;
        display: block;
        position: relative;
        margin-inline: var(--margin-inline);
    }
    .dropdown:hover {
        --top-br: 15px 15px 0 0;
        --bot-br: 0 0 15px 15px;
    }
    .menu {
        max-height: var(--menu-length);
        display: flex;
        flex-direction: column;
        position: absolute;
        transition: opacity 1ms;
        border-radius: var(--bot-br);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .menu[data-menu="right"] {
        left: 0;
    }
    .menu[data-menu="left"] {
        right: 0;
    }
    .menu[data-menu="center"] {
        left: 50%;
        transform: translate(-50%, 0);
    }
</style>

<div class="dropdown" id="dropdown_{name}"
     style="--margin-inline:{margin_inline}; --width:{width}; --height:{height}; --menu-length:{menu_length};">
    <div class="header" on:click={() => toggle()}>
        <h3>{name}</h3>
    </div>
    {#if show}
        <div class="menu" data-menu="{menu_placement}">
            <slot></slot>
        </div>
    {/if}
</div>
