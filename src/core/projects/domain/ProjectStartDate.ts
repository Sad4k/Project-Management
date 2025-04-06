export class ProjectStartDate {
    value: Date;
  
    constructor(value: Date | string) {
      this.value = new Date(value);
      this.ensureIsValid();
    }
  
    private ensureIsValid() {
      if (isNaN(this.value.getTime())) {
        throw new Error("La fecha inicial no es válida");
      }
  
      const now = new Date();
      if (this.value < now) {
        throw new Error("La fecha inicial no puede estar en el pasado");
      }
    }
  }
  