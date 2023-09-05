<script lang="ts">
    import {onMount} from "svelte";
    import Card from "./Card.svelte";
    import {theme} from "../stores/theme";

    const hId = "h" + Math.random();
    const iId = "i" + Math.random();

    onMount(() => {
        const hoverable = document.getElementById(hId);
        const infoDiv = document.getElementById(iId);
        if (hoverable && infoDiv) {
            hoverable.onmouseenter = (ev) => {
                hoverable.onmousemove = (ev) => {
                    console.log(hId,ev.x,ev.y);
                    
                    infoDiv.style.setProperty("--x",`${ev.x+5}px`);
                    infoDiv.style.setProperty("--y",`${ev.y+5}px`);
                }
            }
            hoverable.onmouseleave = (ev) => {
                hoverable.onmousemove = null;
            }
        }
    });
</script>

<style>
    .hoverable {
        width: fit-content;
        height: fit-content;
    }
    .info {
        position: fixed;
        top: var(--y);
        left: var(--x);
    }
    .hoverable .info {
        visibility: hidden;
    }
    .hoverable:hover .info {
        visibility: visible;
    }
</style>

<div class="hoverable" id="{hId}">
    <span class="info" id="{iId}">
        <Card color="{$theme.tooltip_color}">
            <slot name="info"></slot>
        </Card>
    </span>
    <slot></slot>
</div>

