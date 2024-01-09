// and  or operator - more than 1 condition
let firstName = "Rachit";
let age = 20;
if(firstName[0] === "R" && age>18){
    console.log("Name starts with R and above 18");
}else{
    console.log("inside else");
}
firstName = "achit";

if(firstName[0] === "R" || age>18){
    console.log("Name starts with R or above 18");
}else{
    console.log("inside else");
}