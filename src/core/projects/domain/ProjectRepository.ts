import { Project } from "./Project";
import { ProjectId } from "./ProjectId";

export interface ProjectRepository {
    create(project: Project): Promise<void>
    getAll(): Promise<Project[]>
    getOneById(id: ProjectId): Promise<Project | null>
    edit(project: ProjectId) : Promise<void>
    delete(id: Project) : Promise<void>
}