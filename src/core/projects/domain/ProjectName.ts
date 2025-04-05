export class ProjectName{
    value: string;

    constructor(value: string){
        this.value = value;
        this.ensureIsValid();
    }
    private ensureIsValid(){
        if(this.value.length < 3 ){
            throw new Error("UserId debe ser al menos de 3 caracteres");
        }
    }
}