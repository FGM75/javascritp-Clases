class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;
  constructor(nombre, familia, edad, vivo) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.vivo = vivo;
  }
  comunicar(mensaje) {
    return `${mensaje}`;
  }
  morir() {
    this.vivo = false;
  }
}

const joffrey = new Personajes("Joffrey Baratheon", "Baratheon", 17);
joffrey.morir();

console.log(Math.floor(Math.random() * 11));

class Rol extends Personajes {
  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;
  constructor(nombre, rey, luchador, asesor, escudero) {
    super(nombre);
    this.asesor = asesor;
    this.luchador = luchador;
    this.rey = rey;
    this.escudero = escudero;
  }
  comunicar(mensaje) {
    return `${mensaje}`;
  }
  arma() {
    return Math.floor(Math.random() * 11) + "destreza arma";
  }
  rey() {
    this.rey = true;
    return this.comunicar("Vais a morir todos");
  }
  luchador() {
    this.luchador = true;
    const armaLuchador = arma();
    return this.comunicar("Primero pego y luego pregunto") + armaLuchador;
  }
  asesor() {
    this.asesor = true;
    return this.comunicar("No sé por qué, pero creo que voy a morir pronto");
  }
  escudero() {
    this.escudero = true;
    return this.comunicar("Soy un loser");
  }
}
joffrey = new Rol().luchador();
console.log(joffrey);
