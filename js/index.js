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
class Asesor extends Personajes {
  asesoriamiento = daenerys.nombre;
  mensajeAsesor ="No sé por qué, pero creo que voy a morir pronto";
  constructor(nombre, familia, edad, arma) {
    super(nombre, familia, edad);
  }
}

const Tyrion = new Asesor("Tyrion", "Lannister",89)

const Jaime = new Luchador("Jaime", "Lannister", 40, "espadon");

console.log(Jaime);

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
    //return this.comunicar("Soy un loser");
  }
} */

let joffrey = new Acciones("el muerto", "este", 17, "coño");
joffrey.morir();
joffrey.escudero;
joffrey.comunicar();
joffrey.hacerRey();
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
