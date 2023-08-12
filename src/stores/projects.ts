import type { Writable} from "svelte/store";
import { writable } from "svelte/store";
import {none, some} from "./Types";
import type {Optional} from "./Types";


type Project = {
    projectName: string;
    stage: Stage;
}
enum Stage {
    ANA = 0,
    DES = 1,
    IMP = 2,
    COM = 3
}

let projects: Writable<Map<string,Project>> = new writable(new Map());
const dummies = [
    {
        projectName: "Project-01",
        stage: Stage.ANA,
    },
    {
        projectName: "Project-02",
        stage: Stage.DES,
    },
    {
        projectName: "Project-03",
        stage: Stage.IMP,
    },
    {
        projectName: "Project-04",
        stage: Stage.COM,
    }
];

const getAll = (): Optional<boolean> => {
    projects.update(projects => {
        dummies.forEach(dummy => {
            projects.set(dummy.projectName, dummy);
        })
        return projects;
    });
    return some(true);
}

const getProject = (projectName: string): Optional<Project> => {
    let p;
    projects.update(projects => {
        p = projects.get(projectName);
        return projects;
    });
    if (p === undefined) {
        return none();
    }
    return some(p);
}

const addProject = (projectName: string) => {
    let p: Project = {
        projectName: projectName,
        stage: Stage.ANA,
    };
    projects.update(projects => {
        projects.set(p.projectName, p);
        return projects;
    });
}

const updateProject = (project: Project) => {
    projects.update(projects => {
        projects.set(project.projectName, project);
        return projects;
    });
}

const checkmark = "✓";

export {Project, Stage, projects, getAll, getProject, addProject, updateProject}