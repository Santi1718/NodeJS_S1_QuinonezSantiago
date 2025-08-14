const controller = require("./controllers/personaController");
const view = require("./views/personaView");

let running = true;
while (running) {
    const option = view.showMenu();
    running = controller.handleMenu(option);
}
