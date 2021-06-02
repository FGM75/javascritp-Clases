class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;
  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
  }
  comunicar(mensaje) {
    return `${mensaje}`;
  }
  morir() {
    this.vivo = false;
  }
}

console.log(Math.floor(Math.random() * 11));

class Rol extends Personajes {
  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;
  constructor(nombre, familia, edad, rey, luchador, asesor, escudero) {
    super(nombre, familia, edad);
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
    console.log(this.comunicar("Vais a morir todos"));
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
const joffrey = new Rol("Joffrie", "Baratheon", 17, true, false, false, false);
console.log(joffrey);

const jaime = new Rol("Jaime", "Lannister", 40, true, false, false, false)
