class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }

  //importante
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
const Jaime = new Luchador("Jaime", "Lannister", 40, "espadon");

console.log(Jaime);

/* class Acciones extends Personajes {

  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;
  mensaje2 = {
    mensajeRey: "Primero pego y luego pregunto",
    mensajeEscudero: "cosa",
    mens,
  };
  comunicar(mensaje) {
    console.log(`${this.mensaje}`);
  }
  constructor(nombre, familia, edad) {
    super(nombre, familia, edad);
  }
  arma() {
    return Math.floor(Math.random() * 11) + "destreza arma";
  }
  hacerRey() {
    this.rey = true;
    this.mensaje2.mensajeRey;
  }

  luchador() {
    this.luchador = true;
    const armaLuchador = arma();
    return this.comunicar("Primero pego y luego pregunto");
  }
  asesor() {
    this.asesor = true;
    return this.comunicar("No sé por qué, pero creo que voy a morir pronto");
  }
  escudero() {
    this.escudero = true;
    //return this.comunicar("Soy un loser");
  }
} */

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
const joffrey = new Rey("Joffrey", "Lannister", 17, 3);
joffrey.hablar();
console.log(joffrey);

const daenerys = new Rol(
  "Daenerys",
  "Targaryen",
  25,
  "primero pego luego pregunto"
);
daenerys.comunicar();
console.log(daenerys);

const tyrion = new Rol("Tyrion", "Lannister", 89, "holita");
daenerys.comunicar();
console.log(daenerys);

class escudero extends Personajes {
  nivelpelotismo;
  mensajeEscudero;
  personajeAlQueSirve;

  constructor(
    nombre,
    familia,
    edad,
    nivelpelotismo,
    mensajeEscudero,
    personajeAlQueSirve
  ) {
    super(nombre, familia, edad);
    this.nivelpelotismo = nivelpelotismo;
    this.mensajeEscudero = "Soy un Loser L";
    this.personajeAlQueSirve = jaime;
  }
}
const bronn = new escudero(
  "Bronn",
  "NuNAFamily",
  78,
  6,
  mensajeEscudero,
  "jaime"
);
