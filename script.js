//warmup
// let arr = new Array();
// let arr2 = ["hello world", 200, true];

// console.log(arr);
// console.log(arr2);

// console.log(arr2[2]);

// arr2[1] = 100;

// console.log(arr2);
// console.log(arr2[1]);

// console.log("length of arr2:", arr2.length);

// console.log("highest index in arr2:", arr2.length - 1);

// console.log("last element in the arr2:", arr2[arr2.length - 1]);


// let fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length]); //should show as an error because there is no 3rd index

//warmup


//+++Sarah's Grocery Store Inventory - EXERCISE 1+++//

let groceryList = ["cereal", "chicken", "mango", "chocolate", "strawberries"];

console.log(groceryList.length);

groceryList[1] = null;

groceryList[3] = null;

console.log(groceryList);

// groceryList[6] = []; //added empty but also added an empty array object that wants to be filled?

groceryList.length += 2; //ty freelancer rates for assignment operator 
// same thing as writing: groceryList.length = groceryList.length + 2;

console.log(groceryList);

groceryList[5] = "peaches";

groceryList[6] = "pringles - jalapeno cheese flavor";


console.log(groceryList);
console.log(groceryList.length);

//self-congrats function (NOT PART OF EXERCISE)//

if (groceryList.length == 7) {
    console.log("you did it! :)")

} else {
    
    console.log("uh oh")
}
//self-congrats function (NOT PART OF EXERCISE)//


//+++Sarah's Grocery Store Shopping Cart - EXERCISE 2+++//

let shoppingCart = [];

console.log(shoppingCart);
console.log(shoppingCart.length);

shoppingCart.push("bacon", "lettuce", "tomato");

console.log(shoppingCart);
console.log(shoppingCart.length);

const whichDidItTake = shoppingCart.pop();

console.log(whichDidItTake);
console.log(shoppingCart);
console.log(shoppingCart.length)


// for loop practice//

let choppedCheese = ["salt", "pepper", "ketchup"]

for (let index = 0; index < choppedCheese.length; index++){
    console.log(`Jose ordered ${choppedCheese[index]} on his chopped cheese`);
};

//for loop practice//


//+++Break down the For Loop - EXERCISE 3+++//

let symbolThrow = ["rock", "paper", "scissor", "gun", "snakes"];

for(let type = 0; type < symbolThrow.length; type++){
    console.log(`Initialized value is: ${type}`);

    if (type < symbolThrow.length){
        console.log(`Condition is met? ${type == symbolThrow.length - 1}`);
    }

    console.log(`Current throw: ${symbolThrow[type]}`);

    console.log(`After iterator, initialized value is: ${type + 1}`);
};