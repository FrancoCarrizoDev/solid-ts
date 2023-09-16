// El principio abierto/cerrado (OCP, por sus siglas en inglés: Open/Closed Principle)
// establece que las entidades de software, como clases, módulos y funciones,
// deben estar abiertas para la extensión pero cerradas para la modificación.
//  En otras palabras, cuando se agregan nuevas funcionalidades o se realizan cambios en el sistema
//  , no se deben modificar las clases existentes,
//  sino que se deben extender o utilizar mecanismos de extensión para agregar nuevas funcionalidades.

// Supongamos que tienes una clase GestorDescuentos que calcula descuentos para diferentes tipos de productos.
// Originalmente, la clase se diseñó para calcular descuentos para productos básicos,
//  pero ahora debes agregar soporte para productos VIP sin modificar la clase existente:

export class GestorDescuentos {
  calcularDescuento(producto: string, precio: number): number {
    if (producto === "ProductoBasico") {
      return precio * 0.1; // Descuento del 10% para productos básicos
    } else if (producto === "ProductoVIP") {
      return precio * 0.2; // Descuento del 20% para productos VIP
    }
    return 0;
  }
}

//   Este código viola el principio OCP porque para agregar soporte para un nuevo tipo de producto ("ProductoVIP"),
//   debemos modificar la clase GestorDescuentos.
//   Esto hace que la clase sea frágil y puede introducir errores en el código existente.

abstract class CalculadoraDescuento {
  abstract calcularDescuento(precio: number): number;
}

export class CalculadoraDescuentoBasico extends CalculadoraDescuento {
  calcularDescuento(precio: number): number {
    return precio * 0.1; // Descuento del 10% para productos básicos
  }
}

export class CalculadoraDescuentoVIP extends CalculadoraDescuento {
  calcularDescuento(precio: number): number {
    return precio * 0.2; // Descuento del 20% para productos VIP
  }
}
