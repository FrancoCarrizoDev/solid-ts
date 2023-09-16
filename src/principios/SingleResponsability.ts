/*

El principio de responsabilidad única (SRP, por sus siglas en inglés: Single Responsibility Principle)
 establece que una clase debe tener una sola razón para cambiar, 
es decir, debe tener una sola responsabilidad. Si una clase tiene más de una responsabilidad, 
es más propensa a cambios y dificulta la mantenibilidad y escalabilidad del código.


*/

export class GestorArchivos {
  constructor(private nombreArchivo: string) {}

  leerArchivo() {
    // Código para leer el archivo
    console.log(`Leyendo ${this.nombreArchivo}`);
  }

  escribirArchivo(datos: string) {
    // Código para escribir en el archivo
    console.log(datos);
    console.log(`Escribiendo en ${this.nombreArchivo}`);
  }

  enviarCorreo(datos: string) {
    // Código para enviar un correo con los datos
    console.log(`Enviando correo con los datos: ${datos}`);
  }
}

// En este ejemplo, la clase GestorArchivos tiene tres responsabilidades: leer archivos, escribir archivos y enviar correos.
// Esto viola el principio de responsabilidad única porque una clase debería tener una sola razón para cambiar.
// Si alguna de estas responsabilidades cambia, la clase GestorArchivos también deberá cambiar, lo que aumenta la complejidad y la fragilidad del código.

// Solución aplicando el SRP:

// Para aplicar el SRP, debemos dividir la clase GestorArchivos en clases más pequeñas, cada una con una sola responsabilidad. Aquí está la solución:

export class Archivo {
  constructor(private nombreArchivo: string) {}

  leerArchivo() {
    // Código para leer el archivo
    console.log(`Leyendo ${this.nombreArchivo}`);
  }

  escribirArchivo(datos: string) {
    // Código para escribir en el archivo
    console.log(datos);
    console.log(`Escribiendo en ${this.nombreArchivo}`);
  }
}

export class Correo {
  enviarCorreo(datos: string) {
    // Código para enviar un correo con los datos
    console.log(`Enviando correo con los datos: ${datos}`);
  }
}

// Ahora, tenemos dos clases separadas: Archivo y Correo.
// La clase Archivo se encarga de las operaciones de lectura y escritura de archivos, mientras que la clase Correo se encarga de enviar correos.
// Cada clase tiene una sola responsabilidad y es más fácil de mantener y extender sin afectar a la otra.
// Esto cumple con el principio de responsabilidad única.
