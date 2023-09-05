<script>
    import Card from "../../composables/Card.svelte";
    import {theme} from "../../stores/theme";

    const height = "20vh";
    const width = "30vw";
</script>

<style>
    a {
        text-decoration: none;
        margin: 0;
        padding: 0;
    }
    #grid {
        margin: 25vh 15vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-items: center;
        justify-items: center;
        grid-gap: 2rem;
    }
</style>

<div id="grid">
    <a href="/learning/project">
        <Card
            color="{$theme.card_color}"
            font_color="{$theme.font_color}"
            {height}
            {width}>
            <h2>
                Learn about Projects
            </h2>
            <h3>
                What is a project?
            </h3>
            <h3>
                What are the phases of a project?
            </h3>
        </Card>
    </a>

    <a href="/learning/project-manager">
        <Card
            color="{$theme.card_color}"
            font_color="{$theme.font_color}"
            {height}
            {width}>
            <h2>
                Learn about Project Managers
            </h2>
            <h3>
                What is a project manager?
            </h3>
            <h3>
                What does the project manager do?
            </h3>
        </Card>
    </a>

    <a href="/learning/organization">
        <Card
            color="{$theme.card_color}"
            font_color="{$theme.font_color}"
            {height}
            {width}>
            <h2>
                Learn about Organizations
            </h2>
            <h3>
                What are the different types of organizations?
            </h3>
        </Card>
    </a>

<a href="/learning/business-and-strategy">
    <Card
        color="{$theme.card_color}"
        font_color="{$theme.font_color}"
        {height}
        {width}>
            <h2>
                Learn about Business and Strategy
            </h2>
            <h3>

            </h3>
        </Card>
    </a>

</div>





