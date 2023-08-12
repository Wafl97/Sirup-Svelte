
<script lang="ts">
    export const name: string = "";
    export let color_1: string = "red";
    export let color_2: string = "blue";
    export let angle: number = 0;
    export let width: string = "100%";
    export let height: string = "100%";
</script>

<style>

    @property --grad-color-1 {
        syntax: '<color>';
        inherits: false;
        initial-value: white;
    }

    @property --grad-color-2 {
        syntax: '<color>';
        inherits: false;
        initial-value: white;
    }

    @keyframes move {
        0% {
            --grad-color-1: var(--color-1);
            --grad-color-2: var(--color-2);
        }
        100% {
            --grad-color-1: var(--color-2);
            --grad-color-2: var(--color-1);
        }
    }

    @keyframes unmove {
        0% {
            --grad-color-1: var(--color-2);
            --grad-color-2: var(--color-1);
        }
        100% {
            --grad-color-1: var(--color-1);
            --grad-color-2: var(--color-2);
        }
    }

    .card {
        margin: 2.5rem;
        width: var(--width);
        height: var(--height);
        border-radius: 10px;
        padding: .25rem;
        box-shadow: rgba(5,5,5,.15) 0 0 10px 10px;
        overflow: hidden;
        --grad-color-1: var(--color-1);
        --grad-color-2: var(--color-2);
        background-image: linear-gradient(var(--angle),var(--grad-color-1),var(--grad-color-2));
        animation: unmove 100ms linear 0ms forwards;
    }
    .card-content {
        margin: 1rem;
    }
    .card:hover {
        animation: move 100ms linear 0ms forwards;
        cursor: pointer;
    }
</style>

<div class="card" id="{name}_card" style="--color-1:{color_1}; --color-2:{color_2}; --angle:{angle}deg; --width:{width}; --height:{height}">
    <div class="card-content">
        <slot></slot>
    </div>
</div>