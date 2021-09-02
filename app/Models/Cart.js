import { ProxyState } from "../AppState.js"

export class Cart {
    constructor(cartData) {
        this.ItemId = cartData.ItemId
        this.total = cartData.total

    }

    get cartTemplate() {
        return /*html*/ `
        
    `
    }

    get Items() {
        let template = ''
        ProxyState.cart.forEach(c => template += c.itemTemplate)
        return template
    }
}