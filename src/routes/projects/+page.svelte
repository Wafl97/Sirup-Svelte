<script lang="ts">
    import Column from "../../composables/Column.svelte";
    import Row from "../../composables/Row.svelte";
    import type {Project} from "../../stores/projects";
    import {projects, Stage} from "../../stores/projects";
    import ProjectForm from "../../components/ProjectForm.svelte";
    import ProjectFilter from "../../components/ProjectFilter.svelte";
    import ProjectList from "../../components/ProjectList.svelte";
    import {writable} from "svelte/store";

    const nameFilter = (p: Project, name: string): boolean => {
        return name === "" || p.projectName.toLowerCase().startsWith(name.toLowerCase());
    }

    const stageFilter = (p: Project, stage: Stage): boolean => {
        return stage === Stage.ALL || p.stage === stage;
    }

    const list = writable<Project[]>([]);
    projects.subscribe(p => {
        list.set([... p.values()]);
    });

    const filterCallback = (name: string, stage: Stage) => {
        projects.subscribe(p => {
            list.set([... p.values()].filter(p => applyFilters(p,
                {func: nameFilter, filter: name},
                {func: stageFilter, filter: stage}
            )));
        });
    }
    type Filter<T> = {
        func: ((project: Project, filter: T) => boolean);
        filter: T;
    }
    const applyFilters = (project: Project, ... filters: Filter<any>[]): boolean => {
        for (let filter of filters) {
            if (!filter.func.call(null, project, filter.filter)) {
                return false;
            }
        }
        return true;
    }

</script>

<Row placement="center">
    <Column placement="center">
        <ProjectFilter applyFilter="{filterCallback}"/>
        <ProjectForm/>
        <ProjectList projects="{$list}"/>
    </Column>
</Row>



