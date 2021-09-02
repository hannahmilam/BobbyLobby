import { generateId } from "../Utils/generateId.js"

export class Item {
    constructor(itemData) {
        this.img = itemData.img
        this.name = itemData.name
        this.cost = itemData.cost
        this.quantity = itemData.quantity
        this.id = itemData.id || generateId()
        this.dept = itemData.dept
        this.description = itemData.description
        this.inCart = itemData.inCart
    }

    get itemTemplate() {
        return /*html*/ `
        <div class="${this.inCart ? 'col-lg-6' : 'col-lg-3'} text-center">
            <div class="card rounded shadow my-5" >
            <img src="${this.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${this.name} |  $${this.cost}</h5>
                <a onclick="app.cartController.addToCart('${this.id}')" class="btn btn-primary ${this.inCart ? 'visually-hidden' : ''}">Add to Cart</a>
            </div>
            </div>
            </div>
            `
    }

    // TODO get focus template working on click
    // get itemFocusTemplate() {
    //     return /*html*/ `
    //             <div class="card mb-3" style="max-width: 540px;">
    //                 <div class="row g-0">
    //                     <div class="col-md-4">
    //                     <img src="${this.img}" class="img-fluid rounded-start" alt="...">
    //                     </div>
    //                     <div class="col-md-8">
    //                     <div class="card-body">
    //                         <h5 class="card-title">${this.name}</h5>
    //                         <p class="card-text">${this.description}</p>
    //                         <p class="card-text"><small class="text-muted">${this.dept}</small></p>
    //                     </div>
    //                     <div>
    //                     <h6>${this.cost}</h6>
    //                     <!-- TODO add to Cart Function -->
    //                     <a href="#" class="btn btn-primary">Add to Cart</a>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 </div>
    // `
    // }
}