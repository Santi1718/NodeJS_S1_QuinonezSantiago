/*
La herencia permite crear nuevas clases a partir de otras, mediante la reutilizacion de atributos y metodos.
*/
class Animal{
    constructor(nombre){
        this.nombre=nombre;
    }
    hablar(){
        console.log('&{this.nombre} esta haciendo ruido.');
    }
}
module.exports = Animal;