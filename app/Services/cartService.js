import { ProxyState } from "../AppState.js"
import { saveState } from "../Utils/LocalStorage.js"

class CartService {
    addToCart(itemId) {
        let newItem = ProxyState.items.find(i => i.id == itemId)
        newItem.inCart = true
        ProxyState.cart = [...ProxyState.cart, newItem]
    }
    constructor() {
        ProxyState.on('cart', saveState)
    }

}

export const cartService = new CartService()