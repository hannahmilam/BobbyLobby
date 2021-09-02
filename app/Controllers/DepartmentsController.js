import { ProxyState } from "../AppState.js"

function _drawDepts() {
    let template = ''
    ProxyState.departments.forEach(d => template += d.deptTemplate)
    document.getElementById('dept-section').innerHTML = template

}

export class DepartmentsController {
    constructor() {
        _drawDepts()
    }
}