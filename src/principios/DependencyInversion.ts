export class Notificador {
  private email: Email;
  private sms: SMS;

  constructor() {
    this.email = new Email();
    this.sms = new SMS();
  }

  enviarEmail(mensaje: string) {
    this.email.enviar(mensaje);
  }

  enviarSMS(mensaje: string) {
    this.sms.enviar(mensaje);
  }
}

class Email {
  enviar(mensaje: string) {
    console.log(`Enviando correo electrónico: ${mensaje}`);
  }
}

class SMS {
  enviar(mensaje: string) {
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

interface Mensajero {
  enviar(mensaje: string): void;
}

export class Notificador2 {
  private mensajeros: Mensajero[];

  constructor(mensajeros: Mensajero[]) {
    this.mensajeros = mensajeros;
  }

  notificarATodos(mensaje: string) {
    this.mensajeros.forEach((mensajero) => {
      mensajero.enviar(mensaje);
    });
  }
}

export class Email2 implements Mensajero {
  enviar(mensaje: string) {
    console.log(`Enviando correo electrónico: ${mensaje}`);
  }
}

export class SMS2 implements Mensajero {
  enviar(mensaje: string) {
    console.log(`Enviando SMS: ${mensaje}`);
  }
}

export class PushNotification2 implements Mensajero {
  enviar(mensaje: string) {
    console.log(`Enviando notificación push: ${mensaje}`);
  }
}
