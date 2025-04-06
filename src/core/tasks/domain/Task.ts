import { TaskId } from "./TaskId";
import { PhaseId } from "../phases/PhaseId";
import { TaskDescription } from "./TaskDescription";

export class Task {
    id: TaskId;
    phaseId: PhaseId;
    description: TaskDescription;

    constructor(id: TaskId, phaseId: PhaseId, description: TaskDescription) {
        this.id = id;
        this.phaseId = phaseId;
        this.description = description;
    }
}
