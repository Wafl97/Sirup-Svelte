<script>
    import Row from "../composables/Row.svelte";
    import {theme} from "../stores/theme";
</script>

<style>
    .footer, a {
        color: var(--font-color);
    }
    li {
        padding-block: 1rem;
        list-style: none;
    }

</style>

<div class="footer" style="--font-color:{$theme.font_color}">
    <Row position="fixed" top="calc(100vh - 3rem)" placement="space-around" width="100vw" bg_color="{$theme.footer_color}">
        <li><a href="/learning">Learning</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="https://github.com/Wafl97">Author</a></li>
    </Row>
</div>
