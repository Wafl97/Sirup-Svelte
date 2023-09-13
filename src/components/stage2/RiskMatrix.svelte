<script lang="ts">
    import Hoverable from "../../composables/Hoverable.svelte";
    import type { Risk } from "../../stores/Risk";
    import RiskBox from "./RiskBox.svelte";

    const risks: Risk[][] = [
        [
            {
                name: "RISK 1",
                likelyhood: "almost certain",
                impact: "insignificant"
            },
            {
                name: "RISK 2",
                likelyhood: "almost certain",
                impact: "minor"
            },
            {
                name: "RISK 3",
                likelyhood: "almost certain",
                impact: "significant"
            },
            {
                name: "RISK 4",
                likelyhood: "almost certain",
                impact: "major"
            },
            {
                name: "RISK 5",
                likelyhood: "almost certain",
                impact: "sever"
            }
        ],
        [
            {
                name: "RISK 6",
                likelyhood: "likely",
                impact: "insignificant"
            },
            {
                name: "RISK 7",
                likelyhood: "likely",
                impact: "minor"
            },
            {
                name: "RISK 8",
                likelyhood: "likely",
                impact: "significant"
            },
            {
                name: "RISK 9",
                likelyhood: "likely",
                impact: "major"
            },
            {
                name: "RISK 10",
                likelyhood: "likely",
                impact: "sever"
            }
        ],
        [
            {
                name: "RISK 11",
                likelyhood: "possible",
                impact: "insignificant"
            },
            {
                name: "RISK 12",
                likelyhood: "possible",
                impact: "minor"
            },
            {
                name: "RISK 13",
                likelyhood: "possible",
                impact: "significant"
            },
            {
                name: "RISK 14",
                likelyhood: "possible",
                impact: "major"
            },
            {
                name: "RISK 15",
                likelyhood: "possible",
                impact: "sever"
            }
        ],
        [
            {
                name: "RISK 16",
                likelyhood: "unlikely",
                impact: "insignificant"
            },
            {
                name: "RISK 17",
                likelyhood: "unlikely",
                impact: "minor"
            },
            {
                name: "RISK 18",
                likelyhood: "unlikely",
                impact: "significant"
            },
            {
                name: "RISK 19",
                likelyhood: "unlikely",
                impact: "major"
            },
            {
                name: "RISK 20",
                likelyhood: "unlikely",
                impact: "sever"
            }
        ],
        [
            {
                name: "RISK 21",
                likelyhood: "rare",
                impact: "insignificant"
            },
            {
                name: "RISK 22",
                likelyhood: "rare",
                impact: "minor"
            },
            {
                name: "RISK 23",
                likelyhood: "rare",
                impact: "significant"
            },
            {
                name: "RISK 24",
                likelyhood: "rare",
                impact: "major"
            },
            {
                name: "RISK 25",
                likelyhood: "rare",
                impact: "sever"
            }
        ],
    ]
</script>

<style>
    .risk-matrix {
        text-align: center;
        display: grid;
        grid-template-columns: 2fr 10fr;
        margin-inline: 25%;
    }
    .box {
        border: solid var(--card-color) 1px;
    }
    .impact-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 2fr;
    }
    .impact-categories {
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .likelyhood-wrapper {
        display: grid;
        grid-template-columns: 1fr 5fr;
        grid-template-rows: 1fr;
    }
    .likelyhood-categories {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
    .grid {
        color: black;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    }
    .rotated {
        writing-mode: vertical-lr
    }
    .impact, .likelyhood, .title {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .likelyhood, .title {
        height: 4rem;
    }
</style>


<div class="risk-matrix box">
    <div class="title box">
       RISK MATRIX
    </div>
    <div class="impact-wrapper">
        <div class="box">
            Impact
        </div>
        <div class="impact-categories">
            <div class="impact box">
                Insignificant
            </div>
            <div class="impact box">
                Minor
            </div>
            <div class="impact box">
                Significant
            </div>
            <div class="impact box">
                Major
            </div>
            <div class="impact box">
                Sever
            </div>
        </div>
    </div>
    <div class="likelyhood-wrapper">
        <div class="rotated box">
            Likelyhood
        </div>
        <div class="likelyhood-categories">
            <div class="likelyhood box">
                Almost Certain
            </div>
            <div class="likelyhood box">
                Likely
            </div>
            <div class="likelyhood box">
                Possible
            </div>
            <div class="likelyhood box">
                Unlikely
            </div>
            <div class="likelyhood box">
                Rare
            </div>
        </div>
    </div>
    <div class="grid">
        {#each risks as _risks, y}
        {#each _risks as risk, x}
            <RiskBox {risk} {x} {y}></RiskBox>
        {/each}
        {/each}
    </div>
</div>

