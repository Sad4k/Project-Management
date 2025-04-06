import { ProjectId } from "./ProjectId";
import { ProjectName } from "./ProjectName";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectStartDate } from "./ProjectStartDate";
import { ProjectStatus } from "./ProjectStatus";
import { ProjectCreatedAt } from "./ProjectCreatedAt";

export class Project {
    id: ProjectId;
    name: ProjectName;
    description: ProjectDescription;
    startDate: ProjectStartDate;
    status: ProjectStatus;
    createdAt: ProjectCreatedAt;

    constructor(id: ProjectId, name: ProjectName, description: ProjectDescription, startDate: ProjectStartDate, status: ProjectStatus, createdAt: ProjectCreatedAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.status = status;
        this.createdAt = createdAt;
    }
}
