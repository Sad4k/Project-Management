export class UserCreatedAt{
    value: Date;
  
    constructor(value: Date | string) {
      this.value = new Date(value);
      this.ensureIsValid();
    }
  
    private ensureIsValid() {
      if (isNaN(this.value.getTime())) {
        throw new Error("La fecha de creación no es válida");
      }
  
      const now = new Date();
      if (this.value > now) {
        throw new Error("La fecha de creación no puede estar en el futuro");
      }
    }
  }
  