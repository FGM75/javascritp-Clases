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

const jaime = new Luchador("Jaime", "Lannister", 40, "espadon");

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
console.log(Personajes);
