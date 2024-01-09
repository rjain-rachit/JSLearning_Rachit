/* 
-----RULES FOR NAMING VARIABLES-----
 */

// 1. Can't start with number 
// example :- 
// 1value (invalid)
// value1 (valid)

var 1value = 2;
console.log(value1);  //2

// 2. Can use only undersore _ or dollar symbol in special scharaters
// first_name (valid)
// _firstname (valid) 

// first$name (valid)
// $firstname (valid)

// 3. Can't use spaces 
// first name (invalid)

// 4. Recommended Convention - start with small letter and use camelCase 
// var first_name = "rachit"; // snake case writing (Not Recommended)
// var firstName = "rachit"; // camel case writing (Recommended)