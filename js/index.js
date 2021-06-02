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

class Acciones extends Personajes {
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
    return this.comunicar("Soy un loser");
  }
}

let joffrey = new Acciones("el muerto", "este", 17, "coño");
joffrey.morir();
joffrey.comunicar();
joffrey.hacerRey();
console.log(joffrey);
