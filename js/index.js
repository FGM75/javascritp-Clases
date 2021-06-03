/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
class Personajes {
  nombre;

  familia;

  edad;

  serie = "Juego de Tronos";

  vivo = true;

  mensaje;

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  morir() {
    this.vivo = false;
  }

  comunicar() {
    return `${this.nombre} dice:`;
  }
}

class Luchador extends Personajes {
  destreza;

  arma;

  constructor(nombre, familia, edad, arma, valorDestreza) {
    super(nombre, familia, edad, valorDestreza);
    this.arma = arma;

    this.destreza = this.filtraDestreza(valorDestreza);
  }

  comunicar() {
    return `${super.comunicar()} "Primero pego y luego pregunto`;
  }

  filtraDestreza(valorDestreza) {
    if (valorDestreza < 0) {
      return 0;
    } else if (valorDestreza > 10) {
      return 10;
    } else {
      return valorDestreza;
    }
  }
}

class Rey extends Personajes {
  añosDeReinado;

  constructor(nombre, familia, edad, añosDeReinado) {
    super(nombre, familia, edad);
    this.añosDeReinado = añosDeReinado;
  }

  comunicar() {
    return `${super.comunicar()} "Vais a morir todos`;
  }
}

class Escudero extends Personajes {
  nivelpelotismo;

  personajeAlQueSirve;

  nivelpelotismo = Math.floor(Math.random() * 11);

  personajeAlQueSirve = jaime.name;

  constructor(nombre, familia, edad, personajeSirve) {
    super(nombre, familia, edad);
    if (personajeSirve instanceof Luchador) {
      this.personajeAlQueSirve = personajeSirve;
    }
  }

  comunicar() {
    return `${super.comunicar()} "Soy un Loser`;
  }
}

class Asesor extends Personajes {
  arma;

  asesoriamiento;

  constructor(nombre, familia, edad, arma, personajeSirve) {
    super(nombre, familia, edad);
    this.arma = arma;
    if (personajeSirve instanceof Personajes) {
      this.personajeAlQueSirve = personajeSirve;
    }
  }

  comunicar() {
    return `${super.comunicar()} "No sé por qué, pero creo que voy a morir pronto`;
  }
}

const tywin = new Asesor("Tywin", "Lannister", 89, "manos");
const joffrey = new Rey("Joffrey", "Baratheon", 16, 2);
const jaime = new Luchador("Jaime", "Lannister", 45, "Espada", 7);
const daenerys = new Luchador("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Asesor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Escudero("Bronn", "AguasNegras", 54, 0, jaime);

const arrayPersonajes = [tyrion, tywin, joffrey, jaime, daenerys, bronn];

const mensajeLuchador = (personajes) =>
  personajes
    .filter((personajes) => personajes instanceof Luchador)
    .map((persona) => persona.comunicar());

const mensajePersona = arrayPersonajes.reduce(
  (contador, persona) => [...contador, persona.comunicar()],
  []
);

console.log(
  `Los personajes pertenecen a la serie ${arrayPersonajes[0].serie}.`
);

const luchadoreHablando = mensajeLuchador(arrayPersonajes);

console.log(mensajePersona);
for (const mensaje of luchadoreHablando) {
  console.log(mensaje);
}

tywin.morir();
jaime.morir();
tyrion.morir();

const resumenPersonajes = (personajes) =>
  personajes
    .map((personaje) => personaje.constructor.name)
    .filter((clase, i, clases) => clases.indexOf(clase) === i)
    .map((tipo) => ({
      tipo,
      personajes: personajes
        .filter((personaje) => personaje.constructor.name === tipo)
        .map((personaje) => ({
          nombre: `${personaje.nombre} ${personaje.familia}`,
          estado: personaje.vivo ? "vivo" : "muerto",
          edad: personaje.edad,
        }))
        .sort((personajeA, personajeB) => personajeA.edad - personajeB.edad),
    }));

console.log(resumenPersonajes(arrayPersonajes));
