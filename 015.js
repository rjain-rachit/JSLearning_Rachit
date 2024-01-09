// Logic without ternary operator 
let age = 4;
let drink;

if(age>=5){
    drink = "coffee";
}else{
    drink = "milk";
}
console.log(drink);         //milk


// Logic with ternary operator  
drink = age >= 5 ? "tea" : "water";
console.log(drink);         //water

