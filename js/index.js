class Personajes {
  nombre;
  familia;
  edad;
  vivo;
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


// const joffrey = new Personajes("Joffrey Baratheon", "Baratheon", 17, true);
// joffrey.morir();
// console.log(joffrey);

class Rol extends Personajes {
  rey;
  luchador;
  asesor;
  escudero;
  

}
