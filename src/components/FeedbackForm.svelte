<script lang="ts">
import Card from "../composables/Card.svelte";
import {theme} from "../stores/theme";
import InputSubmit from "../composables/InputSubmit.svelte";
import InputText from "../composables/InputText.svelte";

let anonymous = false;
let name = "";
let feedback = "";

const sendFeedback = () => {
    console.log("Sending feedback...");
    console.log(`${name} -> ${feedback}`)
}
</script>

<style>
    #feedback-form {
        display: flex;
        flex-direction: column;
    }
</style>

<Card color="{$theme.card_color}" font_color="{$theme.font_color}">
    <div id="feedback-form">
        <label for="as-anonymous">Submit anonymously
            <input type="checkbox" name="as-anonymous" id="as-anonymous" bind:checked={anonymous}>
        </label>
        <label for="giver-name">Name
            <input type="text" name="giver-name" id="giver-name" disabled="{anonymous}"
                   placeholder="{!anonymous? name : 'Anonymous'}" bind:value={name}>
        </label>
        <label for="feedback">Feedback</label>
        <textarea name="feedback" id="feedback" cols="30" rows="10" bind:value={feedback}></textarea>
        <InputSubmit value="Send feedback" action="{sendFeedback}"/>
    </div>
</Card>
