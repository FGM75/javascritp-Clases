class Personajes {
  nombre;
  familia;
  edad;
  serie= "Juego de Tronos";
  vivo = true;
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  morir() {
    this.vivo = false;
  }
}

class Luchador extends Personajes {
  destreza = Math.floor(Math.random() * 11);
  arma;
  mensajeLuchador = "Primero pego y luego pregunto";
  constructor(nombre, familia, edad, arma) {
    super(nombre, familia, edad);
    this.arma = arma;
  }
}

class Asesor extends Personajes {
  arma;
  asesoriamiento = daenerys.nombre;
  mensajeAsesor ="No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad,arma) {
    super(nombre, familia, edad);
    this.arma = arma;
  }
}


class Rey extends Personajes {
  añosDeReinado;
  mensajeRey = "Vais a morir todos";
  constructor(nombre, familia, edad, añosDeReinado) {
    super(nombre, familia, edad);
    this.añosDeReinado = añosDeReinado;
  }
  hablar() {
    console.log(this.mensajeRey);
  }
}

class Escudero extends Personajes {
  nivelpelotismo;
  mensajeEscudero;
  personajeAlQueSirve;
  mensajeEscudero = "Soy un Loser L";
  nivelpelotismo = Math.floor(Math.random() * 11);
  personajeAlQueSirve = jaime.name;

  constructor(nombre, familia, edad) {
    super(nombre, familia, edad);
  }
}

const tyrion = new Asesor("Tyrion", "Lannister",36, "ballesta");
const jaime = new Luchador("Jaime", "Lannister", 40, "espadon");
const tywin = new Asesor("Tywin", "Lannister", 89,"ninguna");
const daenerys = new Luchador("Jaime", "Lannister", 40, "guantazo");
const joffrey = new Rey("Joffrey", "Lannister", 17, 3);
const bronn = new Escudero("Bronn", "NuNAFamily", 78);
