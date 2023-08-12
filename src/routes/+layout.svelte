<script>
    import Header from "../components/Header.svelte";
    import {getAll} from "../stores/projects";

    getAll();
</script>

<style>
    #header {
        position: relative;
        z-index: 999;
    }
    #blur {
        position: fixed;
        top: 0;
        width: 100vw;
        height: 4.5rem;
        backdrop-filter: blur(2px);
        z-index: 99;
    }
    #content {
        margin-top: 5rem;
    }
    #bg {
        position: fixed;
        z-index: -999;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(90deg, rgb(15,15,25), rgb(25,25,35), rgb(15,15,25));
    }
</style>


<div id="header">
    <Header/>
</div>
<div id="blur"></div>
<div id="content">
    <slot></slot>
</div>
<div id="bg"></div>

