import { Dept } from "./Models/Dept.js"
import { Item } from "./Models/Item.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
    /** @type {import('./Models/Item').Item[]} */
    items = [
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2F5%2F24%2Ff2%2F524f259b309e5782ee1fc1c70d1cb22eef25abed%2F350Wx350H-2062909-0821-PX.jpg', name: 'Cannister', cost: 10, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2F5%2F5b%2F87%2F55b8719d4cc91276465155922ca1a7315623b173%2F166Wx166H-2057610-0821-PX.jpg', name: 'Basket', cost: 60, dept: 'Home Decor' }),
        new Item({ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5XoLmP0Z59bKe9V0tXlkRNLxdumywpW_zQS6Jzbtk47_pb4TaUyk6y13asc&usqp=CAc', name: 'Planters', cost: 78, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimgprd19.hobbylobby.com%2Fsys-master%2Fmigrated%2Fh6e%2Fhce%2Fh00%2F9235584974878%2F1286012%5B1%5D.jpg', name: 'Shelf Hanger', cost: 50, dept: 'Home Decor' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSvVshD0lAZ_iryR-Yla7wG64Qa-P1nwKk6Ap5Chr6T6ljE5gzWuTayyQXviaM%26usqp%3DCAc', name: 'Dark Walnut Tiling', cost: 20, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcRMfAYd5Y_pWlMoAfXkGpZzbI55sL69746zEvq3SdCyan_9DiV9UWglOGKhkA%26usqp%3DCAc', name: 'Barn Wood', cost: 20, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTL9O94RyVdTjVxQ0NTX8wyqJYedSuosNPb5QSszQRtHy3qBkiRbUBx4K-6Y8g%26usqp%3DCAc', name: 'Hickory', cost: 20, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTWF3NMTzEmhnwuvSazP1EwhskRZ9Tb7GVMsQpt2rME7ix-z-s84xAw8kuTwg%26usqp%3DCAc', name: 'Plastic Wood', cost: 450, dept: 'Reclaimed Wood' }),
        new Item({ img: 'https://lda.lowes.com/is/image/Lowes/yellow-black-dewalt-20-volt-dp18-299078-acc1?scl=1', name: 'Drill', cost: 59.99, dept: 'Hand Tools' }),
        new Item({ img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQixELD9rWXFbiWW8lNLGhmBhcbaS0-KcbaYOBZ445TuPGHenR2XX-XCeIzD-Cv8B7Q11jWTq9P%26usqp%3DCAc', name: 'Contractor Saw', cost: 893.24, dept: 'Machine Tools' }),
        new Item({ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaagdEasr7NchIRCLFolgGywkEXi3RS5wQf3kbW4GFVxJAfRSme5R4iVXp18t965J0N8DIYG0&usqp=CAc', name: 'Tool Box', cost: 127, dept: 'Hand Tools' }),
        new Item({ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTERbDfplrQTbNSG75Yrlmi1qqqsFTxfGM5m8JFeOxJBmDibfhVpYJBRAHs4HosLkQ4Z2EMWlM&usqp=CAc', name: 'Socket Set', cost: 59, dept: 'Hand Tools' }),
        new Item({ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaOTcgRbkYE22sSc46kwZPpH-fllQZMOyng&usqp=CAU', name: 'Drill Bits', cost: 79, dept: 'Hand Tools' }),
        new Item({ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoyY2YCHPQg6bugu0SsHfIMUR1LJIDFXzVLrahUA7XBqAUBBIpyyr4KKwr1A&usqp=CAc', name: 'Sawzall', cost: 358, dept: 'Machine Tools' }),
        new Item({ img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SZ1Mf-W9vSQSa8nww-Vvq48DY_-6Yqpt7Lg-O4E0wG-VBm6slQrCVowia3wXCZ5pnQ18KTA&usqp=CAc', name: 'Chop Saw', cost: 450, dept: 'Machine Tools' }),
        new Item({ img: 'https://www.dewalt.com/NA/product/images/3000x3000x96/DWE7491X/DWE7491X_1.jpg', name: 'Table Saw', cost: 540, dept: 'Machine Tools' }),

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