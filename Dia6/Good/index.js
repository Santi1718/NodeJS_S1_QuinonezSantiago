class Usuario {
    enviarEmail(mensaje) {
        // lógica concreta
    }

    enviarSMS(mensaje) {
        // lógica concreta
    }
}

/*
En esta implemantacion la clase Usuario esta Directamente acoplada a las implementacoomes concretas 
de los canales de notificación ( correo electronico y SMS), donde si en el futuro se requiere agregar un 
canal de notificaciones, como notificaciones push, se tendría que modificar la clase
*/
