<script>
    import Header from "../components/Header.svelte";
    import { getAll } from "../stores/projects";
    import {initTheme, theme} from "../stores/theme";
    import {onMount} from "svelte";
    import Footer from "../components/Footer.svelte";


    let initialized = false;

    onMount(() => {
        getAll();
        initTheme();
        initialized = true;
    })
</script>

<style global>
    #header, #footer {
        position: relative;
        z-index: 999;
    }
    #blur {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 4.5rem;
        backdrop-filter: blur(10px);
        z-index: 99;
    }
    #content {
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
    #bg {
        position: fixed;
        z-index: -999;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /*background-image: linear-gradient(90deg, rgb(15,15,25), rgb(25,25,35), rgb(15,15,25));*/
    }
    :global(input) {
        margin-block: 1rem;
        font-size: 1rem;
        background-color: var(--input-color);
        border: none;
        border-radius: 15px;
        padding: .5rem;
        color: var(--font-color);
        width: 100%;
    }
    :global(input:hover) {
        background-color: var(--input-hover-color);
    }
</style>

{#if initialized}
    <div id="header">
        <Header/>
    </div>
    <div id="blur"></div>
    <div id="content" style="
    color:{$theme.font_color};
--font-color:{$theme.font_color};
--input-color:{$theme.input_color};
--input-hover-color:{$theme.input_hover_color};
--card-color:{$theme.card_color};">
        <slot></slot>
    </div>
    <div id="bg" style="background: {$theme.background_color}"></div>
    <div id="footer">
        <Footer/>
    </div>
{/if}



