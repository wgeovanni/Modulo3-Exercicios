class Invoice {
    constructor(client) {
        this.client = client
    }

    generateInvoice() {
        return "Client: " + this.getClientName() + "\n" + this.getRequestProducts() +
            "Total Value: R$ " + this.getRequestTotalValue() + ".\n"
    }

    getClientName() {
        const name = this.client.name
        return name
    }

    getRequestTotalValue() {
        const totalValue = this.client.calculateTotalCart()
        return totalValue
    }

    getRequestProducts() {
        const products = this.client.cart.products.map(product => {
            return "Product name: " + product.productInfo.name + ", Product value: R$ " + product.productInfo.value +
                ", Quantity: " + product.quantity + ", Value total: R$ " + product.productInfo.value * product.quantity
                + "\n"
        }).join('')
        return products
    }
}

class Client {
    constructor(name) {
        this.name = name
        this.cart = new Request()
    }

    buyProducts(product, quantity) {
        this.cart.addProduct(product, quantity)
    }

    calculateTotalCart() {
        return this.cart.calculateTotalValue()
    }


}

class Request {
    constructor() {
        this.products = []
    }

    addProduct(product, quantity) {
        product.quantity = quantity
        this.products.push(product)
    }

    calculateTotalValue() {
        return this.products.reduce((acc, actual) => {
            return acc += actual.productInfo.value * actual.quantity
        }, 0)
    }
}

class Product {
    constructor(name, value) {
        this.productInfo = {
            name,
            value
        }
    }
}

//Testes unitários
const product1 = new Product("pencil", "1.20");
const product2 = new Product("pen", "10.50");

const cliente1 = new Client("joão")
const cliente2 = new Client('maria')

const nota1 = new Invoice(cliente1)
const nota2 = new Invoice(cliente2)

console.log(cliente1)
console.log(cliente2)

// Adiciona porduto ao pedido do cliente
cliente1.buyProducts(product1, 10)
cliente1.buyProducts(product2, 1)
cliente2.buyProducts(product2, 2)

console.log(cliente1)
console.log(cliente2)

// Gera nota fiscal
console.log(nota1.generateInvoice())
console.log(nota2.generateInvoice())