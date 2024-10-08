const groceries = ["vegetables", "meat", "dairy", "eggs", "fruits", "milk"];
console.log(groceries[1]);
console.log(groceries.length);
console.log(groceries[groceries.length - 1]);
console.log(groceries.pop());
console.log(groceries.push("Oats", "Pasta", "broccoli"));
console.log(groceries);

let firstThreeItems = groceries.slice(0, 3);
console.log(firstThreeItems);

console.log(groceries);

groceries.splice(2, 1);
console.log(groceries);
groceries.unshift("Oats");
console.log(groceries);
groceries.splice(0, 2);
groceries.unshift("ketchup", "chili");
console.log(groceries);
