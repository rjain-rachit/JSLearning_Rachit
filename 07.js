//trim()
let firstName = "    rac hit    ";

console.log("length - " + firstName.length);
firstName = firstName.trim(); // "rachit"
console.log("trim() - " + firstName)

//toUpperCase() & toLowerCase()
firstName = firstName.toUpperCase();
console.log("toUpperCase() - " + firstName);
firstName = firstName.toLowerCase();
console.log("toLowerCase() - " + firstName);

// slice()
console.log("slice() with startIndex - " + firstName.slice(1)); // achit
//ra chit
console.log("slice() with startIndex & endIndex - " + firstName.slice(1,5));

// rachitjain123456@gmail.com  -> ra*****@gmail.com
// poorvijain34343@yahoo.in  -> po*****@yahoo.in
// arpitjain24232@rediffmail.com  -> ar*****@rediffmail.com 
console.log(confidentailEmail("poorvijain34343@yahoo.in"));

function confidentailEmail(email) {
    return email[0] + email[1] + "*****" + email.slice(email.indexOf("@"));
}