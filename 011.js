// undefined datatype
let firstName;
console.log(typeof firstName);                  //undefined
firstName = "Rachit";
console.log(typeof firstName, firstName);       //string Rachit


// null datatype
let myVariable = null;                          //null
console.log(myVariable);
console.log(typeof myVariable);                 //object
// This is a bug or error in JS. 
// If they try to resolve in latest release of JS, older JS project will get impacted
myVariable = "rachit";
console.log(myVariable, typeof myVariable);     //rachit string
console.log(typeof null);                       //object


// BigInt datatype
// There is a limit of Number datatype i.e.
console.log(Number.MAX_SAFE_INTEGER);           //9007199254740991

// BigInt is a new primitive datatype came in 2020, which can store high integer value than Number
let n = 123564343327457567199254740991456873n;  //123564343327457567199254740991456873n
console.log(n);  

// There are 2 ways to define BigInt
let myNumber = BigInt(12);      
let sameMyNumber = 123n;
console.log(myNumber);                          //12n
console.log(typeof sameMyNumber);               //bigint

console.log(BigInt.MAX_SAFE_INTEGER);           //undefined
console.log(myNumber+ sameMyNumber);            //135n