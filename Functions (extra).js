// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

let giveMeRandom = function (n) {
    let newArray = [];
    for (let i=0; i<n; i++){
        newArray[i] = (Math.floor(Math.random()*10));
    }
    return newArray;    
}
let testArray = giveMeRandom(5);
let checkArray = function (a) {
    let bigSum=0;
    for(let i=0;i<a.length;i++){
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
    for(let i=0;i<a.length;i++){
        totalCost = totalCost+(a[i].price*a[i].quantity);
    }
    return totalCost;
}
console.log(`Extra 2: Cost is ${shoppingCartTotal(shoppingCart)}`);



/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/0
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
    for(let i=0;i<cart.length;i++){
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
    return expensiveItem;
}
console.log(`Extra 4: The most expensive item is:`, maxShoppingCart(shoppingCart));



/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

let latestShoppingCart = function (cart){
    
    lastItem = cart[cart.length-1];
   return lastItem;

}
console.log(`Extra 5: The latest item is:`, latestShoppingCart(shoppingCart));


/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

let loopUntil = function (x){
    if(x>0 && x<9){
        let newArray =[];
        do{
            newArray = giveMeRandom(3);
            //console.log(newArray);        //<--------------------uncomment to print all randomizations
        }while(newArray[0]<=x || newArray[1]<=x || newArray[3]<=x);
        console.log(newArray);
        
    }
}
console.log("Extra 6: Loop Until:");
loopUntil(7)


/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

let testArray02 = giveMeRandom(7);
let average = function (a) {
    let aSum = 0;
    let avg = 0;
    let numArray = a.filter(element => typeof element === 'number');
    for(let i=0;i<numArray.length;i++){
        aSum += numArray[i];
        //console.log(aSum);
    }
    avg = aSum/numArray.length;
    return avg;

    
}
console.log(`Extra 7-A: The average of ${testArray02} is:`, average(testArray02) );
console.log(`Extra 7-B: The average of ${[1,null,1,1,'A',1]} is:`, average([1,null,1,1,'A',1]) );


/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/
let arrayOfStrings = ["Who","let","the", "dogs", "out?"]
let longest = function (a) {
    let longString = "";
    for(let i=0;i<a.length;i++){
        if(a[i].length>longString.length){
            longString = a[i];
            //console.log(longString);
        }//else{console.log("debug")}
    }
    return longString;
}
console.log(`Extra 8: The longest string out of ${arrayOfStrings} is:`, longest(arrayOfStrings));


/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

let emailContent01= "Hello, this is a spAm email."
let emailContent02= "Hello, this is a sCam email."
let emailContent03= "Hello, this is a legit email."
let isSpam = function (str) {
    let strArray = str.split(" ");
    for(let i=0;i<strArray.length;i++){
        let checkWord = strArray[i].toLowerCase();
        if(checkWord === "spam" || checkWord === "scam"){
            return true
        }
    }
    return false;
}
console.log(`Extra 9-A: Is "${emailContent01}" spam?:`, isSpam(emailContent01));
console.log(`Extra 9-B: Is "${emailContent02}" spam?:`, isSpam(emailContent02));
console.log(`Extra 9-C: Is "${emailContent03}" spam?:`, isSpam(emailContent03));

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

let inputDate = new Date('1/1/2022');

let elapsedDays = function (d1) {
    let today = new Date();
    let diff = today.getTime() - d1.getTime();
    let totalDays = Math.ceil(diff / (1000 * 3600 * 24));
    return totalDays;
}

console.log(`Extra 10: How many days have passed since ${inputDate}?`, elapsedDays(inputDate),`days`);



/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

let matrixGenerator = function (x,y){
    let generatedArray = [];
    for(let i=0;i<y;i++){
        let newXArr = [];
        let newYArr =[];
        for(let j=0;j<x;j++){
            
            newXArr[j]=j.toString();            
        }
        newYArr[i] =newXArr;
        generatedArray[i] = newYArr[i];
        //console.log(`debug`, newYArr);
    }
    console.log(generatedArray);
    
}
matrixGenerator(3,2);


/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
