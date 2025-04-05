import { ProjectId } from "./ProjectId";

export class User{
    id: ProjectId;
    name: UserName;
    email: UserEmail;
    createdAt: UserCreatedAt;

    constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCreatedAt){
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }
    public nameAndEmail(){
        return `${this.name} - ${this.email}`;
    }
}