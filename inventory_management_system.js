//Create an array
var idToRemove = 1;
var inventory = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Headphones", price: 150 },
    { id: 3, name: "Keyboard", price: 100 }
];
//Add a new item
inventory.push({ id: 4, name: "Mouse", price: 50 });
//Remove an item from the array based on its id
for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === idToRemove) {
        inventory.splice(i, 1);
        break;
    }
}
//Search for another item based on its id and modify its initial price
var idToUpdate = 3;
var newPrice = 120;
for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].id === idToUpdate) {
        inventory[i].price = newPrice;
        break;
    }
}
for (var i = 0; i < inventory.length; i++) {
    for (var key in inventory[i]) {
        console.log("The key  ".concat(key, " has value ").concat(inventory[i][key]));
    }
}
