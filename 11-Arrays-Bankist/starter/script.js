'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////

//slice method

const arr = ['a','b','c','d','e','f','g','h']
console.log(arr);
console.log(arr.slice(2)); // ['removed' 'b','c','d','e','f','g','h'].
console.log(arr.slice(4)); // first four removed.
console.log(arr.slice(-3)); // ['f','g','h'] last three printed.
console.log([...arr]) // ['a','b','c','d','e','f','g','h'] full array printed by useing spread oparetor.
console.log([...arr].splice(-2)) // last two elements printed.
console.log(arr); // array is not muteted full data will load => ['a','b','c','d','e','f','g','h']

// splice method = same like slice but muteted.
console.log(arr.splice(4));  // ['e','f','g','h'].
console.log(arr) // ['a','b','c','d'] last four elements removed from original array.
console.log(arr.splice(1,2)) // ['b','c'] element one deleted , next two are printed , rest elements ignored.
console.log(arr) // ['a','d'] finailly remaing elements printed, after mutetion.

// reverse method
const arr2 = ['a','b','c','d','e','f','g','h']
console.log(arr2.reverse()) // eleements are all reversed.
console.log(arr2) // muteted array not a original one.

// concat method
const result = arr.concat(arr2)
console.log(result) 
console.log([...arr, ...arr2]) // above both results are same

//JOIN method
console.log(result.join('-')) // a-d-h-g-f-e-d-c-b-a "adding all the elements with - " more push, pop, ...etc follow MDN docs.

// New Method at
const arr3 = [23, 54, 78];
console.log(arr3[0]) // 23
console.log(arr3.at(0)) // 23 same result 
console.log(arr3.length) // 3
console.log(arr3.length-1) // 2
console.log(arr3[arr3.length - 1]) // 78 taking last element
console.log(arr3.slice(-1)) // [78] taking last element and print array

console.log(arr3.at(-2)) // 54 taking second element from lase
console.log('shravan'.at(0)) // s printed
console.log('shravan'.at(-1)) // n printed

// Looping forEach Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Treditional method
for(const movement of movements){
  if(movement > 0){
   console.log(`you are diposited money ${movement} succesfully`)
  }else{
    console.log(`you are withdrew money ${movement} succesfully`)
  }
}
console.log(".......................seperated by two methods and the expected same result.......")
// by useing forEach loop
movements.forEach((movement , i)=>{
  if(movement > 0){
    console.log(` Movement ${i + 1}: you are diposited money ${movement} succesfully`) // indexing and access the array
  }else{
    console.log(`Movement ${i + 1}: you are withdrew money ${movement} succesfully`)
  }
})

// set method

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// itetrating array and printing
currencies.forEach((value, key, map)=>{console.log(`${key}:${value}`)}) 
// USD:United States dollar
// EUR:Euro
// GBP:Pound sterling
// taking as a arguments and printing key and value.

const uniqueCurrencies = new Set(['usd','euro', 'inr', 'myr', 'euro']);
console.log(uniqueCurrencies) // by useing this method only unique values are taken

uniqueCurrencies.forEach((value, _, map)=>{console.log(`${value}:${value}`)}) // -_ taken as a key



