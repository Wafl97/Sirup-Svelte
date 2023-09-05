<script lang="ts">
    import WbsNode from "./WbsNode.svelte";
    import type {Node} from "../../stores/wbsNode";
    import type { Writable} from "svelte/store";
    import { writable } from "svelte/store";
    import {walkTree} from "../../stores/wbsNode";

    export let node: Node;
    const self: Writable<Node | undefined> = writable(node);
    let showChildren = true;

    const toggleShowChildren = () => {
        showChildren = !showChildren;
    }

    const randomColor = () => {
        return "hsla(" + Math.floor(Math.random() * 360 % 360) + ",60%,50%,.5)";
    }

    const appendNode = (name: string) => {
        let newNode: Node = {
            name: name,
            level: node.level + 1,
            index: node.children.length,
            color: node.color === undefined ? randomColor() : node.color,
            parent: node,
            children: [],
        }
        self.update(self => {
            if (!self) return;
            self.children.push(newNode);
            return self;
        })

    }

    const newNode = () => {
        appendNode("NEW");
    }

    const removeNode = () => {
        self.update(me => {
            if (!me || !me.parent) return;
            let oldIndex = me.index;
            me.parent.children.splice(me.index, 1);
            console.log(me.parent.children)
            console.log(oldIndex, me.parent.children.length)
            for (oldIndex; oldIndex < me.parent.children.length; oldIndex++) {
                console.log(me.parent.children[oldIndex])
                me.parent.children[oldIndex].index--;
                console.log(oldIndex)
            }
            return me;
        });
        $self = undefined;
    }
    const getCode = (node: Node): string => {
        const arr = []
        let code = "";
        let p = node.parent;
        if (!p?.parent) return code;
        while (p.parent !== undefined) {
            arr.push(p.index + 1);
            p = p.parent;
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            code += arr[i] + ".";
        }
        code += node.index + 1;
        return code;
    }


</script>

<style>
    #children {
        display: flex;
        flex-direction: column;
    }
    #children[data-root="true"] {
        flex-direction: row;
    }
    .node {
        font-size: 2rem;
        /*margin: 1rem;*/
        margin-left: var(--indent);
        border: solid white 2px;
        height: 3rem;
        color: black;
        padding: 1rem;
        background-color: white;
    }
</style>

{#if $self}
    <div id="node-tree">
        <div class="node" style="background-color:{$self.color}; --indent:{$self.level * 10}%;">
            {#if $self.parent !== undefined}
                {getCode($self)} -
            {/if}
                {$self.name}
            {#if $self.parent !== undefined}
                <button id="remove" on:click={() => removeNode()}>X</button>
            {/if}
        </div>
        <button class="append" on:click={() => newNode()}>Add</button>
        <button class="collapse" on:click={() => toggleShowChildren()}>
            {#if showChildren}
                ^
            {:else}
                v
            {/if}
        </button>
        {#if showChildren}
            <div data-root="{$self.parent === undefined}" id="children">
                {#each $self.children as child}
                    <WbsNode node="{child}"/>
                {/each}
            </div>
        {/if}
    </div>
{/if}

