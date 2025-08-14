const model = require("../models/personaModel");
const view = require("../views/personaView");

function handleMenu(option) {
    switch (option) {
        case "1":
            const nombre = view.askNombre();
            const persona = model.create(nombre);
            view.showMessage(`Persona agregada: ID=${persona.id}`);
            break;

        case "2":
            const personas = model.getAll();
            view.showList(personas);
            break;

        case "3":
            const personasAct = model.getAll();
            view.showList(personasAct);
            const idAct = view.askId();
            const nuevoNombre = view.askNuevoNombre();
            if (model.update(idAct, nuevoNombre)) {
                view.showMessage("Persona actualizada.");
            } else {
                view.showMessage("Persona no encontrada.");
            }
            break;

        case "4":
            const personasDel = model.getAll();
            view.showList(personasDel);
            const idDel = view.askId();
            if (model.remove(idDel)) {
                view.showMessage("Persona eliminada.");
            } else {
                view.showMessage("Persona no encontrada.");
            }
            break;

        case "5":
            return false;

        default:
            view.showMessage("Opción inválida.");
    }
    return true;
}

module.exports = { handleMenu };
