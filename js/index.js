class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
  constructor(nombre, familia, edad, vivo) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }
  comunicar(mensaje) {
    return `${mensaje}`;
  }
  morir(estado) {
    estado = "muerto";
  }
}


const joffrey = new Personajes("Joffrey Baratheon", "Baratheon", 17, "vivo");
joffrey.morir();
console.log(joffrey);