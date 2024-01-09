// if else condition 
let age = 17;
if(age>=18){
    console.log("User can play ddlc");
}else {
    console.log("User can play mario");
}

let num = 13;
if(num%2===0){
    console.log("even");
}else{
    console.log("odd");
}

// Falsy Value check
let firstName;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty- Falsy Value");
}
firstName= 0;
if(firstName){
    console.log(firstName);
}else{
    console.log("firstName is kinda empty- Falsy Value");
}

// Truthy Value check
num=20
if(num){
    console.log("num contain Truthy value");
}else{
    console.log("num is kinda empty");
}