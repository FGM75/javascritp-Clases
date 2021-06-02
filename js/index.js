/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
class Personajes {
  nombre;

  familia;

  edad;

  serie = "Juego de Tronos";

  vivo = true;

  mensaje;

  tipo;

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

  mensaje = "Primero pego y luego pregunto";

  constructor(nombre, familia, edad, arma, tipo) {
    super(nombre, familia, edad, tipo);
    this.arma = arma;
  }

  tipo = "Luchador";
}

const jaime = new Luchador("Jaime", "Lannister", 40, "espadon");

const daenerys = new Luchador("Daenerys", "Lannister", 40, "guantazo");

class Rey extends Personajes {
  añosDeReinado;

  mensaje = "Vais a morir todos";

  constructor(nombre, familia, edad, añosDeReinado, tipo) {
    super(nombre, familia, edad, tipo);
    this.añosDeReinado = añosDeReinado;
  }

  tipo = "Rey";

  hablar() {
    console.log(this.mensaje);
  }
}

const joffrey = new Rey("Joffrey", "Baratheon", 17, 3);

class Escudero extends Personajes {
  nivelpelotismo;

  personajeAlQueSirve;

  mensaje = "Soy un Loser L";

  nivelpelotismo = Math.floor(Math.random() * 11);

  personajeAlQueSirve = jaime.name;

  constructor(nombre, familia, edad, tipo) {
    super(nombre, familia, edad, tipo);
  }

  tipo = "Escudero";
}

const bronn = new Escudero("Bronn", "NuNAFamily", 78);

class Asesor extends Personajes {
  arma;

  asesoriamiento = daenerys.nombre;

  mensaje = "No sé por qué, pero creo que voy a morir pronto";

  constructor(nombre, familia, edad, arma, tipo) {
    super(nombre, familia, edad, tipo);
    this.arma = arma;
  }

  tipo = "Asesor";
}

const tyrion = new Asesor("Tyrion", "Lannister", 36, "ballesta");

const tywin = new Asesor("Tywin", "Lannister", 89, "ninguna");

const arrayPersonajes = [tyrion, tywin, joffrey, jaime, daenerys, bronn];

const mensajePersona = arrayPersonajes.reduce(
  (contador, persona) => [...contador, persona.mensaje],
  []
);
const mensajeLuchador = arrayPersonajes
  .filter((personajes) => personajes.tipo === "Luchador")
  .reduce((contador, persona) => [...contador, persona.mensaje], []);

console.log(mensajePersona);
console.log(mensajeLuchador);
tywin.morir();
jaime.morir();
tyrion.morir();
