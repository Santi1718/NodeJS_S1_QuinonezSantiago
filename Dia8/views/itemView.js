// La vista busca centralizar toda la interacción 
// por consola, lo cual incluye menú, prompts y 
// formatos de salida

const ItemView = {
    mostrarMenu() {
        console.log("\n=== CRUD de Items (MVC, consola) ===");
        console.log("1) Crear");
        console.log("2) Listar");
        console.log("3) Ver por ID");
        console.log("4) Actualizar");
        console.log("5) Eliminar");
        console.log("0) Salir");
    },
    pedirOpciones(prompt){
        const op= prompt("Elige una opción: ")
        return op.trim();
    },
    pedirDatosCreacion(prompt){
        const nombre = prompt("Nombre: ").trim();
        const descripcion = prompt("Descripcion: ").trim();
        return {nombre, descripcion};
    }
}
module.exports={ItemView}