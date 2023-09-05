<script lang="ts">
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D;
    let midX: number;
    let midY: number;
    export let project;
    const data = project.data;

    onMount(() => {
       context = canvas.getContext("2d")!;
       context.lineWidth = 3;
       context.strokeStyle = "#f00";
       midX = canvas.width / 2;
       midY = canvas.height / 2;
       drawAxis();
    });

    const drawAxis = () => {
        context.fillText("X", midX + 10, 0);
        context.beginPath();
        context.moveTo(midX, 0);
        context.lineTo(midX, canvas.height);
        context.closePath();
        context.stroke();

        context.fillText("Y", midY + 10, 0);
        context.beginPath();
        context.moveTo(0, midY);
        context.lineTo(canvas.width, midY);
        context.closePath();
        context.stroke();
    }

    const drawLine = () => {
        context.strokeStyle = "#00f";
        context.beginPath();
        let increment = data.length - 2 / canvas.width;
        context.moveTo(0, midY - data[0]);
        console.log(increment);
        for (let i = 1; i <= data.length; i++) {
            context.lineTo(i * increment, midY - data[i]);
            context.moveTo(i * increment, midY - data[i]);
        }
        context.closePath();
        context.stroke();
    }

    const width = 500;
    const height = 200;
    const background = "#fff";
</script>

<style>
    .center {
        margin: 10rem;
        display: flex;
    }
</style>


<div class="center">
    <button on:click={() => drawLine()}>HERE</button>
    <canvas {width} {height} style:background bind:this={canvas}></canvas>
</div>


