// let country = "India";
// let continent = "Asia";
// let population = "1 billion";

// console.log(country);
// console.log(continent);
// console.log(population);

// let iAmFun = true;
// console.log(typeof(iAmFun));

// let mango;
// console.log(typeof mango);

// let year;
// console.log(typeof year);

// year = 2005;
// console.log(typeof year);

// console.log(typeof null); // it should be null not object, it is a bug in js which has not been corrected due to legacy reasons.


//! String and template literals

// const firstname = "rohit";
// const age = 20;
// const birthYear = 2005;

// const description = "my name is" + " " + firstname + " and i am " + age + " years old"; 
// console.log(description);

// const newName = `I'm ${firstname} and i am ${age} years old and my birth year is ${birthYear}`;

// console.log(newName);

// console.log(`this is
//     line 
//     changing`);

//! if else

// const age = 9;
// const isOldEnough = age>=18;

// if (isOldEnough) {
//     console.log(`you can drive.`);
// }
// else {
//     const yearsLeft = 18 - age;
//     console.log(`you cannot drive for ${yearsLeft} more years`);
    
// }

//! type conversion and coercin

// // type conversion
// const a = "2420";
// console.log(a + 12);
// console.log(Number(a)+12); 

// console.log(Number("hello"));
// console.log(typeof NaN);

// console.log(String(234)+12);

// // type coercin
// console.log("23"+2+"41");
// console.log("23" - 2 -"41");
// console.log("23"*"2");
// console.log("23"/"2");

//! equality operators

// const age = "18";

// if (age === 18) {
//     console.log("Strict equality");
// }

// if(age == 18){
//     console.log("loose equality");
// }

// const a =Number( prompt("enter a number")); //* it will store in string only, for number use number function in prompt.
// console.log(a);
// console.log(typeof a);

//! logical operators

// cc ques 3

//! ternary operator

const age = 23;

age>=23?console.log("can drink"):console.log("cannot drink");

const validAge = age>=20? "you can drink" : "you cannot drink"
console.log(validAge);


















