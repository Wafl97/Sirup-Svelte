import type { Writable} from "svelte/store";
import { writable } from "svelte/store";
import { none, some } from "./Types";
import type { Optional } from "./Types";
import { v4 as uuid } from "uuid";


type Project = {
    projectId: string;
    projectName: string;
    stage: Stage;
    pos: POS;
    data: number[];
}
enum Stage {
    ALL = -1,
    ANALYSIS = 0,
    DESIGN = 1,
    IMPLEMENTATION = 2,
    COMPLETE = 3
}
type POS = {
    prepDate?: string;
    prepBy?: string;
    aprDate?: string;
    aprBy?: string;
    problems_opportunity: string;
    goal: string;
    objectives: string;
    success_criteria: string;
    assumptions_risks_obstacles: string;
}

const createId = (): string => {
    return uuid();
}

let projects: Writable<Map<string, Project>> = new writable(new Map());
const dummies = [
    {
        projectId: createId(),
        projectName: "Project-01",
        stage: Stage.ANALYSIS,
        pos: {
            problems_opportunity: "",
            goal: "",
            objectives: "",
            success_criteria: "",
            assumptions_risks_obstacles: "",
            prepBy: "Wafl",
            prepDate: "13-8-2023",
        },
        data: [10,15,10,25,50,10,30,25],
    },
    {
        projectId: createId(),
        projectName: "Project-02",
        stage: Stage.DESIGN,
        pos: {
            problems_opportunity: "",
            goal: "",
            objectives: "",
            success_criteria: "",
            assumptions_risks_obstacles: "",
        },
        data: [50,25,-50,-25,50,75,100,5,5,5,5,55,5,10],
    },
    {
        projectId: createId(),
        projectName: "Project-03",
        stage: Stage.IMPLEMENTATION,
        pos: {
            problems_opportunity: "",
            goal: "",
            objectives: "",
            success_criteria: "",
            assumptions_risks_obstacles: "",
        },
        data: [],
    },
    {
        projectId: createId(),
        projectName: "Project-04",
        stage: Stage.COMPLETE,
        pos: {
            problems_opportunity: "",
            goal: "",
            objectives: "",
            success_criteria: "",
            assumptions_risks_obstacles: "",
        },
        data: [],
    }
];

const getAll = (): Optional<boolean> => {
    projects.update(projects => {
        dummies.forEach(dummy => {
            projects.set(dummy.projectId, dummy);
        })
        return projects;
    });
    return some(true);
}

let projectArr;
const getAllProjects = (): Project[] => {
    if (projectArr === undefined) {
        projects.subscribe(p => {
            projectArr = [...p.values()];
        });
    }
    return projectArr;
}

const getProject = (projectId: string): Optional<Project> => {
    let p;
    projects.update(projects => {
        p = projects.get(projectId);
        return projects;
    });
    if (p === undefined) {
        return none();
    }
    return some(p);
}

const addProject = (projectName: string) => {
    let p: Project = {
        projectId: createId(),
        projectName: projectName,
        stage: Stage.ANALYSIS,
        pos: {
            problems_opportunity: "",
            goal: "",
            objectives: "",
            success_criteria: "",
            assumptions_risks_obstacles: "",
        },
        data: [],
    };
    projects.update(projects => {
        projects.set(p.projectId, p);
        return projects;
    });
}

const updateProject = (project: Project) => {
    projects.update(projects => {
        projects.set(project.projectName, project);
        return projects;
    });
}

const GET = (url: string, body?: string) => {
    return {statusCode: 200, body: ""};
}

const getUsersProjects = (userid: string): Optional<Project[]> => {
    const req = GET(`/api/v1/user/${userid}/projects`);
    if (req.statusCode === 200) {
        let pArr: Project[] = [];
        return some(pArr);
    }
    return none();
}

const checkmark = "✓";

export {Project, POS, Stage, projects, getAll, getProject, addProject, updateProject, getAllProjects}