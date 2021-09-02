import { CartController } from "./Controllers/CartController.js";
import { DepartmentsController } from "./Controllers/DepartmentsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
    departmentsController = new DepartmentsController();
    cartController = new CartController();
}

loadState()

window["app"] = new App();