import { ProjectCreatedAt } from "./ProjectCreatedAt";
import { ProjectEmail } from "./ProjectEmail";
import { ProjectId } from "./ProjectId";
import { ProjectName } from "./ProjectName";

export class Project{
    id: ProjectId;
    name: ProjectName;
    email: ProjectEmail;
    createdAt: ProjectCreatedAt;

    constructor(id: ProjectId, name: ProjectName, email: ProjectEmail, createdAt: ProjectCreatedAt){
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }
    public nameAndEmail(){
        return `${this.name} - ${this.email}`;
    }
}