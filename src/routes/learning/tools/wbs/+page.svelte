<script lang="ts">
    import WBS from "./WBS.svelte";
    import type {tWBS} from "../../../../stores/WBS";
    import Card from "../../../../composables/Card.svelte";

    const wbs: tWBS = {
        project: "C-RUP",
        deliverables: [
            {
                deliverable: "Frontend",
                sub_deliverables: [
                    {
                        sub_deliverable: "Web-Platform",
                        lowest_sub_deliverables: [
                            {
                                lowest_sub_deliverable: "Learning Pages",
                                cost_accounts: [
                                    {
                                        cost_account: "Development",
                                        work_packages: [
                                            {
                                                work_package: "Overview Page"
                                            },
                                            {
                                                work_package: "Project Page"
                                            },
                                            {
                                                work_package: "Organization Page"
                                            },
                                            {
                                                work_package: "Project Management Page"
                                            },
                                            {
                                                work_package: "Tools Page"
                                            },
                                            {
                                                work_package: "Business And Strategy Page"
                                            }
                                        ]
                                    },
                                    {
                                        cost_account: "Research",
                                        work_packages: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                deliverable: "Backend",
                sub_deliverables: [

                ]
            },
            {
                deliverable: "Marketing",
                sub_deliverables: []
            }
        ]
    }

</script>

<style>
    .wbs {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="wbs">
    <Card margin="2rem">
        <h1>WBS</h1>
        <p>Below you can see an example of a Work Breakdown Structure(WBS).<br>
            This example is the one that is used for the C-RUP project.<br>
            Hover over the different items to get information about what each thing is and how they relate to one another.
        </p>
    </Card>
    <Card>
        <WBS {wbs}/>
    </Card>
</div>