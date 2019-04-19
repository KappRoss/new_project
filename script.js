/*
//______________________________________________________________________

//                                DAY 1
//______________________________________________________________________
const person1 = {
	name: 'Wow',
	lastName: 'Tkach'
}


function seyHello(){
	console.log(`Hello,  ${this.name} ${this.lastName}`)
}

seyHello.bind(person1)();

function getPerson(name, name2, age){
	const person = {
		name: name,
		name2: name2,
		age: age,
	
		sayHello(){
			console.log(`Hi, my name is ${this.name} ${this.name2} and i'm ${this.age}`)
		}	
	}
	return person;
}

const personRostik = getPerson('Rost', 'Kapl', '20');

personRostik.sayHello()


function Person(name, name2, age){
	this.name = name
	this.name2 = name2
	this.age = age

	this.sayHello = () => {
		console.log(`Hi, my name is ${this.name} ${this.name2} and i'm ${this.age}`)
	} 
}

const dude = new Person ('Rost', 'Kapl', '20');
dude.sayHello()

*/
//______________________________________________________________________

//                                DAY 2
//______________________________________________________________________
/*

// below ES5
function sum(){
	console.log(arguments); // ( arguments instanceof Array) - for check arguments (it is not array)

	var sum = 0;
	Array.prototype.forEach.call(arguments,function(value){  
		sum += value;
	})
	console.log(sum);
}
*/

//sum(1,5,8,9,10,-3);

//console.log(typeof(sum));
/*
// below ES6
function sum(...values){
	let sum = 0
	values.forEach(function(value){
		sum += value;
	})
	console.log(sum);
}
*/
/*
// with reduce method
function sum(...values){
	console.log(values.reduce(function(prevValue, currentValue){
		return prevValue + currentValue;
	}))
}

const sum = (function() {
  
	return function sum(...args) {		
		return args.reduce((a, b) => a + b, 0);
	};

})();
console.log(sum(2,4,-1,6,46));

*/
/*
let browsers = ['Chrome','Opera','Safari','Mozilla','Edge'];

//  'for (in)' - for kays of array 

for (let browser in browsers){
	console.log(browser);
}

console.log(browsers);

//  values
for (let index in browsers){
	console.log(browsers[index]);
}

// 'for (of)' - for values of array

for (let browser of browsers){
	console.log(browser);
}*/
//______________________________________________________________________

//                                DAY 3
//______________________________________________________________________
/*const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  
  const {tomorrow : tempOfTomorrow} = avgTemperatures; 
  
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  
  const {tomorrow : {max: maxOfTomorrow}} = forecast; 

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6


let a = 5;
let b = 6;
let c = 0;

console.log(` a =  ${a}`);
console.log(` b =  ${b}`);

c = a;
a = b;
b = c;

console.log(` a =  ${a}`);
console.log(` b =  ${b}`);
*/
//______________________________________________________________________

//                                DAY 4
//______________________________________________________________________


// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["id-blacklist", "no-dup-keys"]
// };
// function makeList(arr) {
//   "use strict";

//   const resultDisplayArray = arr.map((item) => `<li class="text-warning">${item}</li>`);

//   return resultDisplayArray;
// }

// const resultDisplayArray = makeList(result.failure);
// console.log(resultDisplayArray)

// const createPerson = (name, age, gender) => {name, age, gender};
//console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
//______________________________________________________________________

//                                DAY 5
//______________________________________________________________________


//  the area of ​​the triangle based on the known side and the corners adjacent to it
// const radian = (gradus) => gradus * Math.PI / 180;

// const solution = (sideOne, cornerOne, cornerTwo)  => {
//   return ((sideOne**2) / 2) * ((Math.sin(radian(cornerOne)) * Math.sin(radian(cornerTwo))) / (Math.sin(radian(180 - (cornerOne + cornerTwo))))) 
// }
// export default solution; 


// const getTriangleArea = (h,b) => (1/2 * h) * b;
// console.log(getTriangleArea(15,12))

//______________________________________________________________________

//                                DAY 6
//______________________________________________________________________
/*
// Wang of hockey score 
const func = (a,b,c,d) => {
  if (a === c && b === d ){
    return 2
    //            ничья                    п1                  п2
  }else if((a === b && c === d) || ( a > b && c > d) || (a < b && c < d)){
    return 1
  }
  else{
    return 0
  }
}
export default func;
*/
// 5!(a) = 1 * 2 * 3 * 4 * 5(a) = 120

// function factorial(n) {				//return (n != 1) ? n * factorial(n - 1) : 1; 
// 	var b = 1;
// 	for ( var i = 1; i <=n; i++){
// 		b *= i ;
// 	}
//   return b;
// }

// console.log(factorial(12))
// assert.equal(factorial(2), 2);
// assert.equal(factorial(3), 6);
// assert.equal(factorial(1),1);
// assert.equal(factorial(0),1);

//______________________________________________________________________

//                                DAY 7
//______________________________________________________________________

//   RECURSION 

// const sequenceSum = (begin, end) => {
//   if (begin === end){
//     return end;
//   }
//   else if(begin > end){
//   	return NaN
//   }
//   return begin + sequenceSum(begin + 1, end) 
// };

// console.log(sequenceSum(1,4))

// node
/*test('solution', () => {
  expect(sequenceSum(0, 0)).toBe(0);
  expect(sequenceSum(1, 1)).toBe(1);
  expect(sequenceSum(1, 5)).toBe(15);
  expect(sequenceSum(2, 6)).toBe(20);
  expect(sequenceSum(-1, -1)).toBe(-1);
  expect(sequenceSum(-5, 4)).toBe(-5);
  expect(Number.isNaN(sequenceSum(2, 1))).toBe(true);
  expect(Number.isNaN(sequenceSum(1, -5))).toBe(true);
});
*/
// const smallestDivisor = (n) =>{
//     const iter = (current, acc ) =>{
//       if(current % acc === 0){
//         return acc;
//       }else if(current === 1){
//       	return 1
//       }
//       return iter(current , acc + 1 )
//     }
//   return iter(n,2)
// }
// console.log(smallestDivisor(17))

// // OR 

// const smallestDivisor = (num) => {
//   const iter = (acc) => {
//     if (acc > num / 2) {
//       return num;
//     }
//     if (num % acc === 0) {
//       return acc;
//     }
//     return iter(acc + 1);
//   };

//   return iter(2);
// };

// export default smallestDivisor;

// //console.log(smallestDivisor(17))

//______________________________________________________________________

//                                DAY 8
//______________________________________________________________________

// const smallestDivisor = (num) => {
//   if (num < 1){
//     return NaN;
//   }

//   if (num === 1){
//     return 1;
//   }

//   let divisor = 2;
//   while (num % divisor !== 0) {
//     divisor += 1;
//   }

//   return divisor;
// }

//  console.log(smallestDivisor(121))

//GREATEST COMMON DIVISOR

//  const gcd = (a, b) => {
//   if (b === 0) {
//     return a;
//   }

//   return gcd(b, a % b);
// };


// console.log(gcd(15,18))

//______________________________________________________________________

//                                DAY 9
//______________________________________________________________________

// const isPrime = (num) => {
//   if (num < 2) {
//     return false;
//   }

//   let i = 2;

//   while (i <= num / 2) {
//     if (num % i === 0) {
//       return false;
//     }
//     i += 1; 
//   }

//   return true;
// };


// console.log(isPrime(17));

// const sequenceSum = (begin, end) =>{
// if (begin > end) {
//     return NaN;
//   } else if (begin === end) {
//     return begin;
//   }
//   return begin + sequenceSum(begin + 1, end);
//  } 
//  console.log(sequenceSum(5,2))
//______________________________________________________________________

//                                DAY 10
//______________________________________________________________________

//  iterative process! smallest divider
 const smallestDivisor = (num) => {
  
  if (num === 1){
   	return num
   }
   if (num > 0){
   const iter = (counter, acc) => {
    if (num % acc === 0){
      return acc
     }
     return iter(counter , acc + 1)
   }
   return iter(num, 2)
   }
  
 }
 console.log(smallestDivisor(121))
 console.log() 