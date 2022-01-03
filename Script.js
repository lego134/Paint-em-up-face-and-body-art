// We maked a variable and sign it to the number 293.
const kelvin = 0;
// We maked a varibale called celsius.
const celsius = kelvin - 273;
// It is calculate celsius to fhrenheit.
let fahrenheit = celsius * (9/5) + 32;

fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');


let Newton = celsius * (33/100);

Newton = Math.floor(Newton);

console.log('The temperature is in newton is ' + Newton + ' have a good day.');

// secound coding Project 
// We maked variable called myAge and have the value of 19.
const myAge = 8;
// Maked variable. 
let earlyYears = 2;

earlyYears = earlyYears * 10.5;
//
let laterYears = myAge - 2;

laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

myAgeInDogYears = earlyYears + laterYears

const myName = 'JONAH'.toLowerCase();
console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
// thrid coding Project 

let userName = '';

userName ? console.log(`Hello ${userName}!`): console.log('Hello');   

const userQuestion = 'Am I get a dog in the future.';

console.log(userName + ' said ' + userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case (1): 
 eightBall ='It is certain';
  break; 
  case (2):
 eightBall = 'It is decidedly so';
  break;
   case (3):
  eightBall = 'Reply hazy try again';
  break;
   case (4):
 eightBall ='Cannot predict now';
  break;
   case (5):
  eightBall = 'Do not count on it';
  break;
   case (6):
  eightBall = 'My sources say no';
  break;
   case (7):
  eightBall ='Outlook not so good';
  break;
   case (8):
  eightBall = 'Signs point to yes';
  break;
}
console.log(eightBall);
let eightBall2 = '';
if (randomNumber === 1)  {
  eightBall2 = 'It is certain';
} else if (randomNumber === 2)  {
  eightBall2 = 'It is decidedly so';
} else if (randomNumber === 3)  {
  eightBall2 = 'Reply hazy try again';
}else if (randomNumber === 4)  {
   eightBall2 ='Cannot predict now';
}else if (randomNumber === 5)  {
eightBall2 = 'Do not count on it';
}else if (randomNumber === 6)  {
 eightBall2 = 'My sources say no';
}else if (randomNumber === 7)  {
  eightBall2 ='Outlook not so good';
}else if (randomNumber === 8)  {
  eightBall2 = 'Signs point to yes';
}
console.log(eightBall2);
// four coding Project 
let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = false;
let runerAge = 76;

if (runnerRegisteredEarly && runerAge >= 18) {
 raceNumber += 1000;
} 

if (runerAge > 18 && runnerRegisteredEarly) {
  console.log('You start at 9:30AM and this is your number. ' + raceNumber + ' Thank you for join the race. ');
} else if (runerAge > 18 && !runnerRegisteredEarly) {
  console.log('You start at 11:00AM and this is your number. ' + raceNumber + ' Thank you for join the race. ');
} else if (runerAge < 18) {
  console.log('You start at 12:30AM and this is your number. ' + raceNumber + ' Thank you for join the race.');
}else{
  console.log('runner to see the registration desk')
}
