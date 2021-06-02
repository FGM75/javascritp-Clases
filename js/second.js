class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  rey;
  luchador;
  asesor;
  escudero;
  constructor(nombre, familia, edad, rey, luchador, asesor, escudero) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.rey = rey;
    this.luchador = luchador;
    this.asesor = asesor;
    this.escudero = escudero;
  }
}

const joffrey = new Personajes(
  "joffrey",
  "baration",
  17,
  true,
  false,
  false,
  false
);
console.log(joffrey);
