// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

let giveMeRandom = function (n) {
    let newArray = [];
    for (i=0; i<n; i++){
        newArray[i] = (Math.floor(Math.random()*10));
    }
    return newArray;    
}
let testArray = giveMeRandom(5);
let checkArray = function (a) {
    let bigSum=0;
    for(i=0;i<a.length;i++){
        element = a[i];
        if(element>5){
            console.log(`Element#${i+1}:${element} is larger than five.`)
            bigSum = bigSum + element;
        }else{
            console.log(`Element#${i+1}:${element} is smaller than five.`)           
        }
    }
    return bigSum;
}
console.log(`Extra 1: Sum is ${checkArray(testArray)}`);
/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/
let socks = {price:69,name:"socks",id:123,quantity:2}
let shoes = {price:420,name:"shoes",id:124,quantity:2}
let shirts = {price:365,name:"shirts",id:125,quantity:4}
let shoppingCart = [socks,shoes,shirts]
let shoppingCartTotal = function(a){
    let totalCost = 0;
    for(i=0;i<a.length;i++){
        totalCost = totalCost+(a[i].price*a[i].quantity);
    }
    return totalCost;
}
console.log(`Extra 2: Cost is ${shoppingCartTotal(shoppingCart)}`);



/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/
let hat = {price:22,name:"hat",id:321,quantity:1}
let addToShoppingCart = function (cart,newItem){
    console.log(`Extra 3: New cart size: ${cart.push(newItem)}`);
}
addToShoppingCart(shoppingCart,hat);


/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

let maxShoppingCart = function (cart) {
    let expensiveItem = {price:0};
    //console.log(`cart length`,cart.length);
    for(i=0;i<cart.length;i++){
        if(cart[i].price>expensiveItem.price){
            for (var variableKey in expensiveItem){
                if (expensiveItem.hasOwnProperty(variableKey)){
                    delete expensiveItem[variableKey];
                }                
            }
            Object.assign(expensiveItem,cart[i]);
            //console.log(`debug`, expensiveItem);
        }
    }
    console.log(expensiveItem);
}
console.log(`Extra 4: The most expensive item is:`);
maxShoppingCart(shoppingCart);


/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
