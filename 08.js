// "typeof" operator 

let age = 22; 
let firstName = "Rachit";

console.log(typeof age);
console.log(typeof firstName);
console.log(typeof "Amber");
console.log(typeof 22/7);   //NaN is not a number or invalid number
console.log(typeof (22/7));  
console.log(typeof 3*3); 
console.log(typeof 3+3); 
console.log(Number.isNaN(22/7)); //Number.isNaN() returns true if the value is NaN
console.log(Number.isNaN('abc'/7)); 
console.log(typeof true);



// 22 -> "22"
// convert number to string. 
age = age + "";
console.log(typeof(age));           //"22"  - String
console.log(typeof(String(345)));   //"345" - String --> String constructor (Recommended)


// convert string to number. 
let myStr = +"34";
console.log(typeof myStr);          //34  - number 
console.log(myStr); 

let myStr1 = +"34c";
console.log(typeof myStr1);          //34c  - number 
console.log(myStr1);                // NaN

let age1 = "18";
age1 = Number(age1);
console.log(typeof age1);           //18  - number --> Number constructor (Recommended)
