const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

//1 filter method => new array
const filterredItems = items.filter((item) => item.price > 100);
console.log(filterredItems);

//2 map method => new array
const mappedItems = items.map((item) => item.name);
console.log(mappedItems);

//3 find method -> returns first item that is true(not array)
const foundItem = items.find((item) => item.price === 10);
console.log(foundItem);

//4 some method -> returns true or false depending if at least one item returnts true to the statement
const hasExpensiveItems = items.some((item) => item.price > 500);
console.log(hasExpensiveItems);

//5 every method -> return true or false depending if all items return true
const hasPrice = items.every((item) => item.price > 0);
console.log(hasPrice);

//6 reduce method -> alternative to for loop -> count a total amount
const totalPrice = items.reduce((currentPrice, item) => {
  return item.price + currentPrice;
}, 0);
console.log(totalPrice);

//7 includes -> check if array has the item
const numbers = [1, 2, 3];
const includesTwo = numbers.includes(2);
console.log(includesTwo);
