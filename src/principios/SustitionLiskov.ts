export class Ave {
  volar() {
    console.log("Volando alto...");
  }
}

export class Avestruz extends Ave {
  volar() {
    throw new Error("Las avestruces no pueden volar.");
  }
}

export class Ave2 {
  volar() {
    console.log("Volando alto...");
  }
}

export class Avestruz2 extends Ave {
  // No es necesario anular el método volar aquí,
  // ya que las avestruces simplemente no vuelan.
}

export class Pinguino2 extends Ave {
  volar() {
    console.log("¡Los pingüinos no vuelan, pero nadan muy bien!");
  }
}
