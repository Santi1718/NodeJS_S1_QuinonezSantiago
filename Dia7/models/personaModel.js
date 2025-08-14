const fs = require("fs");
const path = "./db.json";

function loadData() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "[]");
    }
    const data = fs.readFileSync(path);
    return JSON.parse(data);
}

function saveData(data) {
    fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

function create(nombre) {
    const data = loadData();
    const id = Date.now();
    data.push({ id, nombre });
    saveData(data);
    return { id, nombre };
}

function getAll() {
    return loadData();
}

function update(id, nuevoNombre) {
    const data = loadData();
    const index = data.findIndex(item => item.id == id);
    if (index !== -1) {
        data[index].nombre = nuevoNombre;
        saveData(data);
        return true;
    }
    return false;
}

function remove(id) {
    const data = loadData();
    const index = data.findIndex(item => item.id == id);
    if (index !== -1) {
        data.splice(index, 1);
        saveData(data);
        return true;
    }
    return false;
}

module.exports = { create, getAll, update, remove };
