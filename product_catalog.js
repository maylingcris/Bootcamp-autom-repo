var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var product = { id: 0, name: 'carro', price: 1250, tags: [1, 2] };
var newProduct = __assign(__assign({}, product), { archivedTags: product.tags });
newProduct.name = 'casa';
newProduct.price = 5000;
newProduct.tags = [3, 4];
console.log(product);
console.log(newProduct);
