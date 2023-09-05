<script lang="ts">
    export let spacer_color: string = "white";
    export let padding_top: string = "0";
    export let section_name: string = "noname";
</script>

<style>
    .section {
        padding-top: var(--padding-top);
    }
    .section:after {
        background: linear-gradient(90deg, transparent, var(--spacer-color), transparent);
        position: absolute;
        content: "";
        display: flex;
        width: 100%;
        height: .125rem;
        margin-top: 2rem;

    }
</style>

<a id="{section_name}">
    <div class="section" style="--spacer-color:{spacer_color}; --padding-top:{padding_top}">
        <slot></slot>
    </div>
</a>
