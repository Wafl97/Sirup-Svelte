<script lang="ts">
    import Dropdown from "../components/Dropdown.svelte";
    import Row from "../components/Row.svelte";
    import Column from "../components/Column.svelte";
    import Circle from "./Circle.svelte";

    type Team = {
        owner: User;
        name: string;
        projects: {
            name: string;
            programs: {
                name: string;
            }[];
        }[];
    }
    type User = {
        name: string;
    }

    const alignments = {
        bar: "left",
        menus: "right"
    }

    const sizes = {
        width: "10rem",
        height: "3.5rem",
        margin_inline: ".25rem",
        menu_length: "20rem",
    }

    const liUser: User = {
        name: "Marc 'Wafl' Bertelsen"
    }

    const teams: Team[] = [
        {
            owner: liUser,
            name: "Team 1",
            projects: [
                {
                    name: "Project 1",
                    programs: [
                        {
                            name: "Program 1"
                        },
                        {
                            name: "Program 2"
                        }
                    ]
                }
            ]
        },
        {
            owner: {
                name: "John"
            },
            name: "Team 2",
            projects: [
                {
                    name: "Project 3",
                    programs: [
                        {
                            name: "Program 3"
                        }
                    ]
                },
                {
                    name: "Project 4",
                    programs: [
                        {
                            name: "Program x"
                        },
                        {
                            name: "Program z"
                        }
                    ]
                }
            ]
        }
    ];
</script>

<style>
    .menu-item {
        background-color: rgb(35,35,35);
        border-radius: 10px;
        padding: .25rem;
        margin: .125rem;
        width: 10rem;
        cursor: pointer;
    }
    .menu-item:hover {
        background-color: gray;
    }
    .data-title {
        box-shadow: white 0 2px;
        margin: .5rem;
    }
    .data-sub-title {
        color: #c2c2c2;
        margin: .25rem;
    }

</style>

<Row placement="space-between"
     bg_color="rgba(10,10,10,.50)"
     position="fixed">
    <Row placement="{alignments.bar}">
        <Circle/>
        <Dropdown
                name="Teams" menu_placement="{alignments.menus}"
                margin_inline="{sizes.margin_inline}"
                width="{sizes.width}"
                height="{sizes.height}"
                menu_length="{sizes.menu_length}">
            {#each teams as team}
                <div class="menu-item">
                    <h3 class="data-title">{team.name}</h3>
                    <h4 class="data-sub-title">- {team.owner.name}</h4>
                </div>
            {/each}
        </Dropdown>
        <Dropdown name="Projects"
                  menu_placement="{alignments.menus}"
                  margin_inline="{sizes.margin_inline}"
                  width="{sizes.width}"
                  height="{sizes.height}"
                  menu_length="{sizes.menu_length}">
            {#each teams as team}
                {#each team.projects as project}
                    <div class="menu-item">
                        <h3 class="data-title">{project.name}</h3>
                        <h4 class="data-sub-title">- {team.name}</h4>
                    </div>
                {/each}
            {/each}
        </Dropdown>
        <Dropdown name="Programs"
                  menu_placement="{alignments.menus}"
                  margin_inline="{sizes.margin_inline}"
                  width="{sizes.width}"
                  height="{sizes.height}"
                  menu_length="{sizes.menu_length}">
            {#each teams as team}
                {#each team.projects as project}
                    {#each project.programs as program}
                        <div class="menu-item">
                            <h3 class="data-title">{program.name}</h3>
                            <h4 class="data-sub-title">- {project.name}</h4>
                            <h4 class="data-sub-title">- {team.name}</h4>
                        </div>
                    {/each}
                {/each}
            {/each}
        </Dropdown>
    </Row>
    <Row placement="right">
        <Dropdown name="User" menu_placement="{alignments.menus}" margin_inline="{sizes.margin_inline}" width="{sizes.width}" height="{sizes.height}">
            <h4 class="data-sub-title">{liUser.name}</h4>
            <div class="menu-item">
                <h3 class="data-title">Account</h3>
            </div>
            <div class="menu-item">
                <h3 class="data-title">Logout</h3>
            </div>
        </Dropdown>
    </Row>
</Row>
