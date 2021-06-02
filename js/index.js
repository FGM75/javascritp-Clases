class Personajes {
  nombre;
  familia;
  edad;
  serie = "Juego de Tronos";
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

const jaime = new Luchador("Jaime", "Lannister", 40, "espadon");

const daenerys = new Luchador("Daenerys", "Lannister", 40, "guantazo");

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

const joffrey = new Rey("Joffrey", "Baratheon", 17, 3);

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

const bronn = new Escudero("Bronn", "NuNAFamily", 78);

class Asesor extends Personajes {
  arma;
  asesoriamiento = daenerys.nombre;
  mensajeAsesor = "No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad, arma) {
    super(nombre, familia, edad);
    this.arma = arma;
  }
}

const tyrion = new Asesor("Tyrion", "Lannister", 36, "ballesta");

const tywin = new Asesor("Tywin", "Lannister", 89, "ninguna");

const arrayPersonajes = [tyrion, tywin, joffrey, jaime, daenerys, bronn];

const mensajes = (array) => array.filter;
const mensajePersona = arrayPersonajes.reduce(
  (contador, persona) =>
    persona.mensajeLuchador !== undefined
      ? [...contador, persona.mensajeLuchador]
      : contador,
  []
);

console.log(mensajePersona);
