import type {Project} from "./projects";

export type Node = {
    name: string;
    level: number;
    index: number;
    color?: string;
    parent?: Node;
    children: Node[];
}

const walkTree = (root: Node, path: number[]) => {
    let level = 0;
    let node = root.children[path[level] - 1];
    while (node !== undefined) {
        node = root.children[path[level] - 1];
        level++;
    }
}

const newTree = (project: Project): Node => {
    return {
        name: project.projectName,
        level: 0,
        index: 0,
        children: [],
    }
}

export {walkTree,newTree}
