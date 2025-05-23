let product = {id: 0, name: 'carro', price: 1250, tags: [1, 2]};
let newProduct = {...product, archivedTags:product.tags};
newProduct.name = 'casa';
newProduct.price = 5000;
newProduct.tags = [3, 4];
console.log(product);
console.log(newProduct);
