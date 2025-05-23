export class UserEmail {
    value: string;
  
    constructor(value: string) {
      this.value = value;
      this.ensureIsValid();
    }
  
    private ensureIsValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (!emailRegex.test(this.value)) {
        throw new Error("El correo electrónico no es válido");
      }
    }
  }
  