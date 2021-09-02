import { ProxyState } from "../AppState.js"
import { cartService } from "../Services/cartService.js"

function _drawCart() {
    let template = ''
    ProxyState.cart.forEach(c => template += c.itemTemplate)
    document.getElementById('cart').innerHTML = template
    console.log(ProxyState.cart)
}

export class CartController {
    constructor() {
        ProxyState.on('cart', _drawCart)
        _drawCart()
    }

    addToCart(itemId) {
        cartService.addToCart(itemId)
    }
}