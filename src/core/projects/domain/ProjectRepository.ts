import { Project } from "./Project";
import { ProjectId } from "./ProjectId";

export interface ProjectRepository {
    create(Project: Project): Promise<void>
    getAll(): Promise<Project[]>
    getOneById(id: ProjectId): Promise<Project | null>
    edit(Project: ProjectId) : Promise<void>
    delete(id: Project) : Promise<void>
}