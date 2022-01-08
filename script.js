'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
const arr =[7,8,9];
const badNewArr =[1,2,arr[0],arr[1],arr[2]];
console.log(badNewArr);

const newArr =[1,2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

const question = new Map([['question','What is the best programming language in the world'],[1,'c'],[2,'java'],[3,'javascript'],['correct',3],[true,'correct'],[false,'try again']]);
console.log(question);

//convert object to Map

console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours))

console.log(hoursMap);

// Quiz app
 console.log(question.get('question'));
 for(const [key,value] of question ) {
   if(typeof key === 'number') console.log('Answer ${key}: ${value}');
 }

 const answer = Number(prompt('your answer'));

 //working with strings part 1

 const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);

console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));
console.log(airline.slice(-2));
console.log(airline.slice(1,-1));

const checkMiddleSeat = function(seat){
  // B and E are middle seats 
  const s = seat.slice(-1);
  console.log(s);
  if (s==='B' || s==='E')
  console.log('You got the middle seat');
  else console.log('you got luck');
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name 
const passenger ='jOnAS'; //jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase()+ passengerLower.slice(1);console.log(passengerCorrect);


const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim()

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E','$').replace(',','.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23.Boarding door 23!';
console.log(announcement.replace('door','gate'));
//console.log(announcement.replaceAll('door','gate'));

console.log(announcement.replace(/door/g,'gate'));

//Booleans
const airplane = 'Airbus A320neo';
console.log(airplane.includes('A320'));
console.log(airplane.includes('Boeing'));
console.log(airplane.startsWith('Air'));

if(plane.startsWith('Airbus') && plane.endsWith('neo')){
  console.log('part of the NEW Airbus family');
  
}


// practice exercise

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
console.log('You are not allowed on board');
  }
  else{
    console.log('Welcome aboard');
  }
};
checkBaggage('i have a laptop and gun');
checkBaggage('I have camera and football');
checkBaggage('I have knife ');

console.log('a+very+nice+string'.split('+'));
console.log('Kishan Yarlagadda'.split(' '));

const [firstName,lastName] = 'Kishan Yarlagadda'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  
  for(const n of names){
    namesUpper.push(n[0].toUpperCase()+n.slice(1));
    //namesUpper.push(n.replace(n[0],n[0].toUpperCase));
  
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('Kishan Yarlagadda');

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20,'+').padEnd(30,'+'));
console.log('Jonas'.padStart(20,'+').padEnd(30,'+'));

const maskCreditCard = function (number){
  const str = number + ' ';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

//Repeat
const message2 ='Bad weather..All Departures Delayed...';
console.log(message2.repeat(5));

