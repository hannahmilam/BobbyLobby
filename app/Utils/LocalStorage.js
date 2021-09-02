import { ProxyState } from "../AppState.js"
import { Cart } from "../Models/Cart.js"
import { Item } from "../Models/Item.js"

export function saveState() {
    localStorage.setItem("Store", JSON.stringify({
        items: ProxyState.items,
        cart: ProxyState.cart
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem("Store"))
    console.log('load state', data)
    if (data != null) {
        ProxyState.items = data.items.map(i => new Item(i))
        ProxyState.cart = data.cart.map(i => new Item(i))
    }
    console.log('loaded state')
}