<script>
    import Card from "../../../composables/Card.svelte";
    import DummyText from "../../../composables/DummyText.svelte";
    import {theme} from "../../../stores/theme";
    import PageSection from "../../../composables/PageSection.svelte";

    const margin = "1rem 5rem";

</script>

<style>
    h1, h2, h3 {
        margin: 2rem 0 0 6rem;
        padding: 0;
    }
    .question {
        margin: 1rem;
        font-size: 1.25rem;
        font-weight: bold;
    }
</style>

<div id="learn-projects">
    <a href="/learning">Back</a>
    <PageSection spacer_color="{$theme.font_color}">
        <h1>Project</h1>
        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <p>
                <span class="question">What is a project?</span><br><br>
                <DummyText/>
                A Project goes through 5 phases, you can view these below on this page
                or by jumping to the phase you want to know more about by clicking one of the links below.
            </p>
            <ul>
                <li>
                    <a href="#defining">Defining</a><br>
                </li>
                <li>
                    <a href="#planning">Planning</a><br>
                </li>
                <li>
                    <a href="#execution">Execution</a><br>
                </li>
                <li>
                    <a href="#controlling">Controlling</a><br>
                </li>
                <li>
                    <a href="#closing">Closing</a>
                </li>
            </ul>
        </Card>
    </PageSection>

    <PageSection spacer_color="{$theme.font_color}" padding_top="4rem" section_name="defining">
        <h2>Defining</h2>
        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <p>
                <span class="question">How do you define the project?</span><br><br>
                <DummyText/>
            </p>
        </Card>

        <h3>Defining Tools</h3>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText with_links="true"/>

            <a href="/learning/tools/pos">Project Overview Statement</a><br>
            <a href="/learning/tools/wbs">Work Breakdown Structure</a>
        </Card>
    </PageSection>

    <PageSection spacer_color="{$theme.font_color}" padding_top="4rem" section_name="planning">
        <h2>Planning</h2>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText/>
        </Card>

        <h3>Planning Tools</h3>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText with_links="true"/>
        </Card>
    </PageSection>

    <PageSection spacer_color="{$theme.font_color}" padding_top="4rem" section_name="execution">
        <h2>Execution</h2>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText/>
        </Card>

        <h3>Execution Tools</h3>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText with_links="true"/>
        </Card>
    </PageSection>

    <PageSection spacer_color="{$theme.font_color}" padding_top="4rem" section_name="controlling">
        <h2>Controlling</h2>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText/>
        </Card>

        <h3>Controlling Tools</h3>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText with_links="true"/>
        </Card>
    </PageSection>

    <PageSection spacer_color="{$theme.font_color}" padding_top="4rem" section_name="closing">
        <h2>Closing</h2>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText/>
        </Card>

        <h3>Closing Tools</h3>

        <Card margin="{margin}" color="{$theme.card_color}" font_color="{$theme.font_color}">
            <DummyText with_links="true"/>
        </Card>
    </PageSection>

</div>
