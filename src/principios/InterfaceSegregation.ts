// El siguiente principio en el conjunto SOLID es el Principio de Segregación de
//  Interfaces (ISP, por sus siglas en inglés: Interface Segregation Principle).
//  Este principio se centra en el diseño de interfaces y establece que una clase no debe verse obligada a implementar interfaces que no utiliza.
//  En otras palabras, las interfaces deben ser específicas y cohesivas para las necesidades de las clases que las implementan.

// Supongamos que estamos desarrollando un sistema de gestión de documentos,
// y tenemos una interfaz GestorDocumento que contiene varios métodos relacionados con documentos:

export interface GestorDocumento {
  crearDocumento(): void;
  abrirDocumento(): void;
  guardarDocumento(): void;
  imprimirDocumento(): void;
  enviarDocumentoPorCorreo(): void;
}

export class EditorDocumento implements GestorDocumento {
  crearDocumento() {
    // Implementación de crearDocumento
  }

  abrirDocumento() {
    // Implementación de abrirDocumento
  }

  guardarDocumento() {
    // Implementación de guardarDocumento
  }

  imprimirDocumento() {
    // Implementación de imprimirDocumento
  }

  enviarDocumentoPorCorreo() {
    // Implementación de enviarDocumentoPorCorreo
  }
}

// El problema aquí es que la clase EditorDocumento debe implementar todos los métodos de la interfaz GestorDocumento,
// incluso si no los utiliza. Por ejemplo, un editor de documentos no tiene por qué enviar documentos por correo directamente.
// Esta violación del ISP significa que la clase está obligada a tener una dependencia innecesaria de un método que no necesita.

// Para cumplir con el principio ISP, debemos dividir la interfaz GestorDocumento en interfaces más pequeñas y específicas,
// de modo que las clases solo implementen las interfaces que sean relevantes para ellas. Por ejemplo:

interface Creable {
  crearDocumento(): void;
}

interface Abrible {
  abrirDocumento(): void;
}

interface Guardable {
  guardarDocumento(): void;
}

interface Imprimible {
  imprimirDocumento(): void;
}

interface EnviadorCorreo {
  enviarDocumentoPorCorreo(): void;
}

class EditorDocumento implements Creable, Abrible, Guardable, Imprimible {
  crearDocumento() {
    // Implementación de crearDocumento
  }

  abrirDocumento() {
    // Implementación de abrirDocumento
  }

  guardarDocumento() {
    // Implementación de guardarDocumento
  }

  imprimirDocumento() {
    // Implementación de imprimirDocumento
  }
}
