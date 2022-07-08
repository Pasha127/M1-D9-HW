/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
let side01 = 2;
let side02 = 3;

let rectArea = function (l1,l2){
    return l1*l2;
}
let area = rectArea(side01,side02);
console.log(`EX 1: The area of a rectangle with sides ${side01}cm and ${side02}cm is: ${area}cm^2.`);

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function (int1,int2){
    if(int1 === int2){
        return (int1+int2)*3;
    }else{
        return (int1+int2);
    }
}
let value01 = 4;
let value02 = 5;
console.log("EX 2: Crazy Sum:",`|${4}+${5}|=${crazySum(value01,value02)}`,"  ---    CrAzY:",`|${4}+${4}|=${crazySum(4,4)}`);


/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

let crazyDiff = function (x,y) {    
    if(x>19||y>19){
        return Math.abs(x-y)*3;
    }else{
        return Math.abs(x-y);
    }

}
console.log("EX 3: Crazy Dif:",`|${4}-${14}|=${crazyDiff(4,14)}`,"  ---  CrAzY:",`|${19}-${22}|=${crazyDiff(19,22)}` );

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/

let boundry = function (n) {
    if((n>=20 && n<=100) || n===400){
        return true;
    }else{
        return false;
    }
} 
console.log("EX 4: Boundry: 10", boundry(10),"20",boundry(20),"50",boundry(50),"100",boundry(100),"201",boundry(201),"400",boundry(400));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let original05String = "Try to survive!";
let test05String = "Strive to survive!";
let strivify = function (str){
    let strArray = str.split(" ");
    //console.log("debug", str, strArray);
    let firstWord = strArray[0].toLowerCase();
    if(firstWord === "strive"){
        return str;
    }else{
        let output = strArray;
        output.splice(0,1,"Strive");
        output = output.join(" ")
        output = output.toString();
        return output;
    }
}
console.log(`EX 5-A: Try to survive! ---> ${strivify(original05String)}`);
console.log(`EX 5-B: Strive to survive! ---> ${strivify(test05String)}`);


/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/

let check3and7 = function (n){
    if(n>=0){
        if(n%3 === 0){
            console.log(`EX 06-A: ${n} is a multiple of 3`);
            
        }else{
            console.log(`EX 06-A: ${n} is not a multiple of 3`);
        }
        if(n%7 === 0){
            console.log(`EX 06-B: ${n} is a multiple of 7`);
            
        }else{
            console.log(`EX 06-B: ${n} is not a multiple of 7`);
        }
        
    }else{
        console.log("Please enter a valid number");
    }
}
check3and7(3);


/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let reverseString = function (str){
    let strArray = str.split("");
    strArray = strArray.reverse();
    str = strArray.join("");
    console.log(str);
    return str;
}
console.log(`EX 7: Reverse String: "${original05String}" --->  ${reverseString(original05String)}`)
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/

let upperFirst = function (str) {
    strArray = str.split(" ");
    for(let i=0; i<strArray.length; i++){
        word = strArray[i];
        wordArray = word.split("");
        wordArray[0] = wordArray[0].toUpperCase();
        //console.log(wordArray[0]);
        word = wordArray.join("");
        strArray[i] = word;
    }
    str = strArray.join(" ");
    return str;

}

console.log(`EX 8: Upper First: "${original05String}" --->  ${upperFirst(original05String)}`)

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/

let cutString = function (str) {
    strArray = str.split("");
    strArray.pop();
    strArray.shift();
    str = strArray.join("");
    return str;    
}

cutString(original05String);
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

let giveMeRandom = function (n) {
    let newArray = [];
    for (let i=0; i<n; i++){
        newArray[i] = (Math.floor(Math.random()*10));
    }
    return newArray;
    
}
console.log(`EX 9: Give me a random array of length ${5}  ------> ${giveMeRandom(5)}`);
/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
