<script lang="ts">
    import Pos from "../../../../components/stage1/POS.svelte";
    import { Stage, type Project } from "../../../../stores/projects";

    const project: Project = {
        projectId: "",
        projectName: "",
        stage: Stage.ALL,
        pos: {
            prepDate: undefined,
            prepBy: undefined,
            aprDate: undefined,
            aprBy: undefined,
            problems_opportunity: "",
            goal:   "Creating a platform for structured project work, with the added support for project management tools." + 
                    "Additionally, the platform must be able to take the designed services from the users and convert it into am implementation.",
            objectives: "* Give users a platform for collaborating on projects\n" + 
                        "* Give users a wide range of project mangement tool\n" + 
                        "* Give uses sufficiant material to learn the project mangement tools\n" + 
                        "* Give users the ability to generate code from their design",
            success_criteria: "",
            assumptions_risks_obstacles: ""
        },
        data: []
    }
</script>

<h1>POS</h1>
<Pos {project}></Pos>