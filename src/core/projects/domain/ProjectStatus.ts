export class ProjectStatus{
    value: string;

    constructor(value: string){
        this.value = value;
        this.ensureIsValid();
    }
    private ensureIsValid(){
        if(this.value.length < 5 ){
            throw new Error("UserId debe ser al menos de 5 caracteres");
        }
    }
}