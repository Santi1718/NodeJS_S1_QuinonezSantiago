const Animal= require("./Animal");

class Perro extends Animal{
    //Sobreescritura de método
    hablar(){
        console.log('&{this.nombre} esta ladrando')
    }

}
/*
Aquí, Perro hereda de Aniaml, lo cual evita la duplicacion de código, facilitando el mantenimiento del mismo y la extension de comportamientos con facilidad.
*/
module.exports=Perro;