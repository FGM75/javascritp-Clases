class Personajes {
  nombre;
  familia;
  edad;
  vivo = true;
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
};

// const joffrey = new Personajes("Joffrey Baratheon", "Baratheon", 17, true);
// joffrey.morir();
// console.log(joffrey);

class Rol extends Personajes {
  super(nombre);
  rey = false;
  luchador = false;
  asesor = false;
  escudero = false;
  rey(){
    this.rey = true;
  };
   luchador(){
    this.luchador = true;
  };
   asesor(){
    this.asesor = true;
  };
   escudero(){
    this.escudero = true;
  };
asd   
  constructor(rey,luchador,asesor,escudero){
    this.asesor = asesor;
    this.luchador = luchador;
    this.rey = rey;
    this.escudero=escudero;
  }
}
