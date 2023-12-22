class ProductManager {
    constructor() {
        this.products = [];
        this.id = 0;
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Verifica datos obligatiorios
        if (!title || !description || !price || !thumbnail || !code || (stock === null || stock === undefined)) {
            console.log('Todos los campos son obligatorios');
            return;
        }

       
        if (!this.products.some((p) => p.code === code)) {  // Verifica si ya existe algún producto con el mismo valor de code
            // Creador un nuevo producto 
            let newProduct = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                id: this.id++
            };

            this.products.push(newProduct);
            console.log(`El producto ${title} se agregó correctamente`);
        } else {
            console.log(`Ya existe un producto con el código ${code}`);
        }
    }

    getProductByCode(code) {
        let product = this.products.find((p) => p.code === code);

        if (product) {
            console.log('El producto con ese codigo encontrado fue:')
            return {product};
        } else {
            console.log(`No existe ningún producto con el código ${code}`);
        }
    }
}

const productManager = new ProductManager();

// Agregar productos
productManager.addProduct("Manzana", "Manzana roja", 2, "img-url", 1, 1);
productManager.addProduct("Banana", "Banana ecuador", 2, "img-url", 2, 1);
productManager.addProduct("Pera", "Pera exotica", 5, "img-url", 3, 0);

// Verificar valores de productos
console.log(productManager.getProducts());

// Muestra de todos los productos
console.log(productManager.getProducts());

// Ejemplo busqueda 
console.log(productManager.getProductByCode(2))