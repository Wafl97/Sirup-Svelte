<script>
    import Card from "../../composables/Card.svelte";
    import { theme } from "../../stores/theme";
    import FeedbackForm from "../../components/FeedbackForm.svelte";

    const email = "c_rup@gmail.com";
    const github_user = "Wafl97";
</script>

<style>
    .question {
        font-weight: bold;
    }
    a {
        color: var(--link-color);
    }
    a:visited {
        color: var(--link-visited-color);
    }
</style>

<div id="about" style="--link-color:{$theme.link_color}; --link-visited-color:{$theme.link_visited_color};">
    <Card margin="7.5% 15%" width="auto" color="{$theme.card_color}" font_color="{$theme.font_color}">
        <h1>About C-RUP</h1>
        <p>
            <span class="question">What is C-RUP?</span><br>
            C-RUP is a project by <a href="https://github.com/{github_user}">{github_user}</a>. <br>
            The goal of this project is to develop a platform for structuring the process of doing projects.
            In addition to feature tools for project work,
            the project also aims to be a place for learning about projects and project management.
        </p>
        <p>
            The project was originally the bachelor project of <a href="https://github.com/{github_user}">{github_user}</a>,
            called Project-Sirup.
            It was concerned with generating microservice from JSON, this concept will also be integrated into C-RUP.
            The new focus of the new project is to focus more on the project work aspect
            with the code generation as a bonus.
        </p>
        <p>
            The initial idea for the batchelor project was to create a platform where developers could collaborate on
            analyzing and designing different service for a microservice architecture backend, and then have the platform
            generate the boilerplate for the service, based on a configuration file.
        </p>
        <p>
            Feedback from the exam showed that the core idea needed some refinement, and so the decision
            to focus more on the project process was chosen.
            This decision was also driven by the desire to better understand the concepts of project management.
        </p>
        <p>
            <span class="question">When will the platform be done?</span><br>
            Currently only 1 person is working on the project in their free time, so probably not soon. <br>
            It is not certain that it ever will be done, but hopefully the learning section will be done in 2023.
        </p>
        <p>
            <span class="question">Where can I get in contact?</span><br>
            Well, I would like to give some social media account here, but I don't really use any, so send an email to
            <a href="mailto:{email}">{email}</a>
        </p>
    </Card>
    <Card color="{$theme.card_color}">
        <h1>Feedback</h1>
        <p>Leave any feedback below</p>
        <FeedbackForm/>
        <!--<FeedbackList/>-->
    </Card>
</div>
