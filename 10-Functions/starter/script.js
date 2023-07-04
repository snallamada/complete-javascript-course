 'use strict';

// const bookings = [];

// const createBooking = (flightnumber, 
//     numberofpassengers,
//      price = 250 * numberofpassengers) =>{
//     const booking ={
//         flightnumber,numberofpassengers,price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }
// createBooking('AI186');
// createBooking('AI186',2, 800);
// createBooking('AI186',4);
// createBooking('AI186', undefined, 400);


// const flight = "AI186";
// const shravan = {
//     name: shravan,
//     passport: 3922411,
// } 

// const chackIn = (flightNum , passenger) => {
//     flightNum = "LI186";
//     passenger.name = "Mr.Nallamada" + passenger.name;
 
//      if (passenger.passport === 3922411) {
// alert("Your welcome ready to board.....")
//     } else {

// alert("You are not allowed to take this flight.....due to in valid passport")
//     }
// }

// chackIn(flight, shravan);
// console.log(flight);
// console.log(shravan);
 
///////////////////////////////////////
// Functions Accepting Callback Functions
// const oneWord = function (str) {
//     return str.replace(/ /g, '').toLowerCase();
//   };
  
//   const upperFirstWord = function (str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
//   };
  
//   // Higher-order function
//   const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
  
//     console.log(`Transformed by: ${fn.name}`);
//   };
  
//   transformer('JavaScript is the best!', upperFirstWord);
//   transformer('JavaScript is the best!', oneWord);

// //Js uses call back functions

// const Display = ()=>{
//     console.log("👋")
// }
// document.body.addEventListener('click', Display);
// ['shravan', 'mehathaa', 'fin'].forEach(Display);

//////////////////////////////////////
// functions returning functions

const Greet = (greetings) =>{
    return((name)=>{console.log(`${greetings},${name}`);});
}

const Greterhey = Greet('Hey');
Greterhey('shravan');
Greet('Hello')('Shravan');