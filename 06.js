// String indexing 

let firstName = "rachit";

//  r   a   c   h   i   t
//  0   1   2   3   4   5 

console.log(firstName[4]);      //i

// length of string 
console.log(firstName.length);  //6

// If length of string is unknown, we need to use last index characters
// last Index : length - 1 
firstName = "KiyanaJain_DeepaliJain";
console.log(firstName[firstName.length-4]);  //J


// rachitjain123456@gmail.com  -> ra*****@gmail.com
// poorvijain34343@yahoo.in  -> po*****@yahoo.in
// arpitjain24232@rediffmail.com  -> ar*****@rediffmail.com 
console.log(confidentailEmail("poorvijain34343@yahoo.in"));

function confidentailEmail(email) {
    return email[0]+email[1]+"*****"+email.slice(email.indexOf("@"));
}







