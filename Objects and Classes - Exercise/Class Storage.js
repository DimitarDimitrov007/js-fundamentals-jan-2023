function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }

        addProduct(product) {
            this.storage.push(product)
            this.capacity -= product.quantity;
            this.totalCost += product.quantity * product.price;
        }

        getProducts() {
            let result = [];
            for (let el of this.storage) {
                el = JSON.stringify(el);
                result.push(el);
            }

            return result.join("\n");
        }

    } 
}
classStorage();