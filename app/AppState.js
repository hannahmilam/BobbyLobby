import { Dept } from "./Models/Dept.js"
import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
    /** @type {import('./Models/Item').Item[]} */
    items = [
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2F5%2F24%2Ff2%2F524f259b309e5782ee1fc1c70d1cb22eef25abed%2F350Wx350H-2062909-0821-PX.jpg', name: 'Cannister', cost: 10, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2F5%2F5b%2F87%2F55b8719d4cc91276465155922ca1a7315623b173%2F166Wx166H-2057610-0821-PX.jpg', name: 'Basket', cost: 60, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2F7%2F63%2F9c%2F7639c6b005ef2ee38aa52984e9f3c1cea20c0a5e%2F350Wx350H-2070282--082521-px.jpg', name: 'Wire Hanging Thing', cost: 788, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2Fsys-master%2Fmigrated%2Fh6e%2Fhce%2Fh00%2F9235584974878%2F1286012%5B1%5D.jpg', name: 'Shelf Hanger', cost: 50, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSvVshD0lAZ_iryR-Yla7wG64Qa-P1nwKk6Ap5Chr6T6ljE5gzWuTayyQXviaM%26usqp%3DCAc', name: 'Dark Walnut Tiling', cost: 20, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRMfAYd5Y_pWlMoAfXkGpZzbI55sL69746zEvq3SdCyan_9DiV9UWglOGKhkA%26usqp%3DCAc', name: 'Barn Wood', cost: 20, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTL9O94RyVdTjVxQ0NTX8wyqJYedSuosNPb5QSszQRtHy3qBkiRbUBx4K-6Y8g%26usqp%3DCAc', name: 'Hickory', cost: 20, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTWF3NMTzEmhnwuvSazP1EwhskRZ9Tb7GVMsQpt2rME7ix-z-s84xAw8kuTwg%26usqp%3DCAc', name: 'Plastic Wood', cost: 450, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1546827209-a218e99fdbe9%3Fixid%3DMnwxMjA3fDB8MHxzZWFyY2h8MXx8cG93ZXIlMjB0b29sc3xlbnwwfHwwfHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D600%26q%3D60', name: 'Drill', cost: 59.99, dept: 'Hand Tools' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQixELD9rWXFbiWW8lNLGhmBhcbaS0-KcbaYOBZ445TuPGHenR2XX-XCeIzD-Cv8B7Q11jWTq9P%26usqp%3DCAc', name: 'Contractor Saw', cost: 893.24, dept: 'Machine Tools' }),
    ]

    /** @type {import('./Models/Dept').Dept[]} */

    departments = [
        new Dept({ name: 'Reclaimed Wood' }),
        new Dept({ name: 'Hand Tools' }),
        new Dept({ name: 'Home Decor' }),
        new Dept({ name: 'Machine Tools' })

    ]

    cart = []
}

export const ProxyState = new Proxy(new AppState(), {
    get(target, prop) {
        isValidProp(target, prop)
        return target[prop]
    },
    set(target, prop, value) {
        isValidProp(target, prop)
        target[prop] = value
        target.emit(prop, value)
        return true
    }
})