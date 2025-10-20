//stack
let myname="Arpit"
let anothername=myname
anothername="boom"
console.log(anothername);
console.log(myname);

//heap
let details={
    email:"arpittiwari@google.com",
    address:"renukoot"
}
console.log(details.email);
let details2=details
details2.email="boombaam@google.com"

console.log(details2.email);



