// Iteration 1: Names and Input
let hacker1 = "juan"
console.log("the driver´s is ", hacker1);
let hacker2 = "Manuel"
console.log("the navigator´s name is", hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`)
} else if (hacker2.lenght > hacker1.lenght) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
let mayusHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
   mayusHacker1 += hacker1[i].toUpperCase() + " "
}
   console.log(mayusHacker1);
  
let hacker2rever = ""
for (let i = hacker2.length -1; i>=0; i--) {
    hacker2rever += hacker2[i]
}

console.log(hacker2rever)


 if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
 } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
 } else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
 }