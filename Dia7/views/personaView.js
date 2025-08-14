const prompt = require("prompt-sync")();

function showMenu() {
    console.log("\n=== CRUD en consola con Node.js ===");
    console.log("1. Crear persona");
    console.log("2. Listar personas");
    console.log("3. Actualizar persona");
    console.log("4. Eliminar persona");
    console.log("5. Salir\n");
    return prompt("Selecciona una opción: ");
}

function showList(data) {
    console.log("\n=== Lista de Personas ===");
    if (data.length === 0) {
        console.log("No hay personas.");
    } else {
        data.forEach((item, index) => {
            console.log(`${index + 1}. ID: ${item.id}, Nombre: ${item.nombre}`);
        });
    }
}

function askNombre() {
    return prompt("Ingresa un nombre: ");
}

function askId() {
    return prompt("Ingresa el ID: ");
}

function askNuevoNombre() {
    return prompt("Ingresa el nuevo nombre: ");
}

function showMessage(msg) {
    console.log(msg);
}

module.exports = { showMenu, showList, askNombre, askId, askNuevoNombre, showMessage };
