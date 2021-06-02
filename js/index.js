class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  mensaje;
  constructor(nombre, familia, edad, mensaje) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.mensaje = mensaje;
  }
  comunicar(mensaje) {
    console.log(`${this.mensaje}`);
  }
  //importante
  morir() {
    this.vivo = false;
  }
}

class Rol extends Personajes {
  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;

  constructor(nombre, familia, edad, mensaje) {
    super(nombre, familia, edad, mensaje);
  }
  arma() {
    return Math.floor(Math.random() * 11) + "destreza arma";
  }
  rey() {
    this.rey = true;
    console.log(this.comunicar());
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

let joffrey = new Rol("el muerto", "este", 17, "coño");
joffrey.morir();
joffrey.comunicar();
console.log(joffrey);
