<script lang="ts">
    import Pagination from "../../components/pagination/Pagination.svelte";
    import Diagram from "../../components/Diagram.svelte";
    import type {Project} from "../../stores/projects";
    import {Stage} from "../../stores/projects";
    import Hoverable from "../../composables/Hoverable.svelte";

    const content = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
    const prPage = 8;

    let p: Project = {
        data: [10,30,20,40,30,50,40,60,50,70,60,80,70,90,80,100,90,50,50,50],
        pos: {
            problems_opportunity: "",
            goal: "",
            objectives: "",
            success_criteria: "",
            assumptions_risks_obstacles: ""
        },
        projectId: "this-is-not-a-valid-uuid",
        projectName: "PG-Project",
        stage: Stage.ANALYSIS
    }
</script>

<Hoverable>
    <div slot="info">
        <h1>H1</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetu<br>r adipisicing elit. Rem, di<br>gnissimos inventore! Fugiat alias numquam labore. Tempore fuga, animi dicta facere cumque quidem temporibus excepturi explicabo officiis modi minima saepe dolor?
        </p>
        This is where all the tooltip info goes
    </div>
    This is the main item
</Hoverable>

<Diagram project="{p}"/>

<Pagination {content} {prPage}/>

