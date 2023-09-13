<script lang="ts">
    export let showModal = false;
    const toggleModal = () => {
        showModal = !showModal;
    }
</script>

<style>
    .modal {
        z-index: 999999;
        backdrop-filter: blur(10px);
        background-color: var(--card-color);
        padding: 2rem 5rem;
        border-radius: 10px;
        position: fixed;
        top: 25%;
        left: 50%;
        transform: translate(-50%, 25%);
        overflow: hidden;
        cursor: auto;
    }
    .ghost {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        position: fixed;
        z-index: 999998;
        cursor: auto;
    }
    .close {
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgba(255,0,0,.95);
        border: none;
        color: white;
        font-size: 1rem;
        width: 1.5rem;
        border-radius: 0 0 0 10px;
        cursor: pointer;
    }
</style>

<div on:click={() => toggleModal()} on:keydown={() => toggleModal()} on:keyup={() => toggleModal()} on:keypress={() => toggleModal()}>
    <slot name="main"></slot>
</div>
{#if showModal}
    <div class="ghost" on:click={() => toggleModal()} on:keydown={() => toggleModal()} on:keyup={() => toggleModal()} on:keypress={() => toggleModal()}></div>
    <div class="modal">
        <button class="close" on:click={() => toggleModal()}>X</button>
        <slot></slot>
    </div>
{/if}