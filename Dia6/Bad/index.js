class Impresora {
    imprimirdocumento() { }
    imprimirFoto() { }
    imprimirContrato(){ }
}

class ImpresoraLaser extends Impresora {
    imprimirDocumento(){
        // lógica válida
    }



    imprimirFoto() {
        // Lógica innecesaria
    }
    imprimirContrato(){
        // lógica innecesaria
    }
}
/*
En esta implementacion, hay una interaz Impresora con tres métodos: imprimirDocumento(), imprimirFoto() e imprimirContrato().
Las clases ImpresoraLaser e ImpresoraInyeccionTinta implementan esta interfaz, pero la clase ImpresoraLaser se ve obligada a
proporcionar implementaciones vacías para los métodos imprimirFoto() e ImprimirContrato() las cuales no son aplicables a una impresora láser.
*/