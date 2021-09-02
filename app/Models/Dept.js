import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";
export class Dept {
    constructor(deptData) {
        this.id = deptData.id || generateId()
        this.name = deptData.name
    }

    get deptTemplate() {
        return /*html*/ `
        <div class="row text-center my-4 bg-white p-3" id="${this.name}">
                <div class="col">
                    <h3>${this.name}</h3>
                </div>
        </div>
        <div class="row text-center" id="item-inventory">
        ${this.Items}
        </div>
            `
    }

    get Items() {
        let template = ''
        let findItems = ProxyState.items.filter(i => i.dept == this.name)
        console.log('after findItems filter', findItems)
        findItems.forEach(i => template += i.itemTemplate)
        return template
    }
}