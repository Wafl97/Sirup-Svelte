<script lang="ts">
    import FormModal from "../../composables/FormModal.svelte";
    import Hoverable from "../../composables/Hoverable.svelte";
    import { impacts, likelyhoods, type Risk } from "../../stores/Risk";

    export let risk: Risk;
    export let x: number;
    export let y: number;
</script>

<style>
    .cell {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        border: solid var(--card-color) 1px;
        cursor: pointer;
    }
    .red {
        background-color: #FF9B9B;
    }
    .green {
        background-color: #CBFFA9;
    }
    .yellow {
        background-color: #FFFEC4;
    }
</style>


<FormModal>
    <div slot="main">
        <Hoverable width="100%">
            <span slot="info">
                {risk.likelyhood} - {risk.impact}
            </span>
            <div class="cell {  x === 0 && y > 0 || x === 1 && y > 2 || x === 2 && y > 3 ?  "green" : 
                                x === 4 && y < 4 || x === 3 && y < 2 || x === 2 && y < 1 ?  "red" : 
                                                                                            "yellow"}">
                {risk.name}
                
            </div>
        </Hoverable>
    </div>
    Edit risk
        <input type="text" name="" id="" value="{risk.name}">
        Impact: <select name="impact" id="impact" value={risk.impact}>
            {#each impacts as impact}
                <option value="{impact}">{impact}</option>
            {/each}
        </select><br>
        Likelyhood: <select name="likelyhood" id="likelyhood" value={risk.likelyhood}>
            {#each likelyhoods as likelyhood}
                <option value="{likelyhood}">{likelyhood}</option>
            {/each}
        </select>
</FormModal>
