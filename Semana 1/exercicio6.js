class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Stock {

    addProduct() { }
    removeProduct() { }
    listProductsinStock() { }
}

class ProductInStock extends Stock {
    constructor() {
        super();
        this.products = [];
    }

    addProduct(product, quantity) {
        console.log(this.products)
        product.quantity = quantity
        this.products.push(product);
        console.log(this.products)
    }

    removeProduct(productToRemove) {
        const indexOfProduct = this.products.findIndex((product) => product.name === productToRemove.name);
        if (indexOfProduct !== -1) {
            this.products.splice(indexOfProduct, 1);
        }
    }

    listProductsInStock() {
        return this.products;
    }
}

// Utilização do Estoque
const stock = new ProductInStock();

const product1 = new Product('Camiseta', 29.99);
stock.addProduct(product1, 50);

const product2 = new Product('Calça Jeans', 89.99);
stock.addProduct(product2, 30);

console.log('Produtos em estoque:', stock.listProductsInStock());

stock.removeProduct(product1);

console.log('Produtos em estoque após a remoção:', stock.listProductsInStock());