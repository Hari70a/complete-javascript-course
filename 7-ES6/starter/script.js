// ES5- Mutation
// var name5 = "Hari Arun";
// var age5 = 22;
// name5 = "Hari Ram";
// console.log(name5);

// //ES6- Mutation
// let name6 = "Hari Arun";
// let age6 = 22;
// name6 = "Hari Ram";
// console.log(name6);
//

/*
//ES5 -- Block scoping
function salutation5(isMarried) {
  // console.log(name5, age5);// can access the before declaration becoz of hoisting to "undefined"
  if (isMarried) {
    var name5 = "Kavitha";
    var age5 = 25;
  }
  console.log("Mrs " + name5 + " is married at the age of " + age5);
}
salutation5(true);

//ES6 -- Block scoping
function salutation6(isMarried) {
  //console.log(name6, age6);//Cannot access the variable b4 it's declared eventhough it's hoisted(it's in temporal deadzone)
  let name6, age;
  //const age= 25 // const should be declared and defined in the same line
  if (isMarried) {
    name6 = "Kavitha";
    age6 = 25;
  }
  console.log("Mrs " + name6 + " is married at the age of " + age6);
}
salutation6(true);*/

/*
Analyse scoping with var and let
let i = 24;
console.log(i, "B4 loop");
for (let i = 0; i < 6; i++) {
  console.log(i, "Inn loop");
}
console.log(i, "Out loop");

var i = 24;
console.log(i, "B4 loop");
for (var i = 0; i < 6; i++) {
  console.log(i, "Inn loop");
}
console.log(i, "Out loop"); */

/*
//Block scope and IIFE
//ES5 (IIFE)
(function() {
  var x5 = 5;
})();

//ES6 (Block scope using let and const)
{
  const x6 = 6;
}*/

/*
//String methods in ES6
// var str = "Hariraj Arun";

// console.log(str.startsWith("H"));
// console.log(str.endsWith("run"));
// console.log(str.includes(" "));
// console.log("Hariraj ".repeat(5));
*/

//Arrow functions

//ES5
// const arr = [1, 2, 3];

// var squares5 = arr.map(function(el) {
//   return el * el;
// });
// console.log(squares5);

// //ES6

// const squares6 = arr.map(el => el * el);
// console.log(squares6);

// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function() {
//       var str =
//         "This is box number " + self.position + " and it is " + self.color;
//       alert(str);
//     });
//   }
// };
// box5.clickMe();

// ES6
// var box8 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     document.querySelector(".green").addEventListener("click", () => {
//       var str =
//         "This is box number " + this.position + " and it is " + this.color;
//       alert(str);
//     });
//   }
// };
// box8.clickMe();

// var box66 = {
//   color: "green",
//   position: 1,
//   clickMe: () => {
//     console.log(this);
//     document.querySelector(".green").addEventListener("click", () => {
//       var str =
//         "This is box number " + this.position + " and it is " + this.color;
//       alert(str);
//     });
//   }
// };
// box66.clickMe();

// function Person(name) {
//   this.name = name;
// }

// // ES5
// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(el) {
//       return this.name + " is friends with " + el;
//     }.bind(this)
//   );

//   console.log(arr);
// };

// var friends = ["Bob", "Jane", "Mark"];
// new Person("John").myFriends5(friends);

// // ES6
// Person.prototype.myFriends6 = friends => {
//   var arr = friends.map(el => `${this.name} is friends with ${el}`);

//   console.log(arr, "ES6");
// };

// new Person("Mike").myFriends6(friends);

//Arrays
//ES5
// var boxesES6 = document.querySelectorAll(".box");

//ES5
// var boxesArr = Array.prototype.slice.call(boxes);

// boxesArr.forEach(function(cur) {
//   cur.style.backgroundColor = "dodgerblue";
// });

//ES6
// var boxesArr6 = Array.from(boxesES6);
// boxesArr6.forEach(cur => {
//   cur.style.backgroundColor = "dodgerblue";
// });

//ES5
// for (var i = 0; i < boxesArr6.length; i++) {
//   if (boxesArr6[i].className === "box blue") {
//     continue;
//   }
//   boxesArr6[i].textContent = "I changed to Blue";
// }

//ES6
// for (const curr of boxesArr6) {
//   if (curr.className === "box blue") {
//     continue;
//   }
//   curr.textContent = "I changed to Blue";
// }

// for (const curr of boxesArr6) {
//   if (curr.className.includes("blue")) {
//     continue;
//   }
//   curr.textContent = "I changed to Blue";
// }

//var ages = [21, 15, 12, 14, 18];

//ES5

// var x = ages.map(function(cur) {
//   return cur >= 18;
// });
// console.log(ages[x.indexOf(true)]);

//ES6

// console.log(ages.findIndex(cur => cur >= 18));

// console.log(ages.find(cur => cur >= 18));

// function sumFourAges(a, b, c, d) {
//   return a + b + c + d;
// }
// var add1 = sumFourAges(21, 15, 12, 14, 18);
// console.log(add1);

// var add2 = sumFourAges.apply(null, ages);
// console.log(add1);

// //ES6 Rest
// var add3 = sumFourAges(...ages);
// console.log(add3);

// var h = document.querySelector("h1");
// var boxes = document.querySelectorAll(".box");
// var textBoxes = [h, ...boxes];
// Array.from(textBoxes).map(cur => (cur.style.color = "steelblue"));

// ES5
// Args without limit
// function isFullAges() {
//   var argsArr = Array.prototype.slice.call(arguments);
//   console.log(argsArr, "argsArr");
//   argsArr.forEach(function(cur) {
//     console.log(cur >= 18);
//   });
// }
//with limit
// function isFullAges() {
//   var argsArr = Array.prototype.slice.call(arguments, 1);
//   argsArr.forEach(function(cur) {
//     console.log(cur >= 18);
//   });
// }

// isFullAges(16, 17, 20, 18, 14);

//ES6
//Args with limit

// function isFullAges6(...ages) {
//   ages.forEach(cur => {
//     console.log(cur >= 18);
//   });
// }
// isFullAges6(16, 17, 20, 18, 14);

//Args without limit

// function isFullAges6(limit, ...ages) {
//   console.log(limit, ages);
//   ages.forEach(cur => {
//     console.log(cur >= limit);
//   });
// }
// isFullAges6(21, 16, 17, 20, 18, 14);

// var question = new Map();

// question.set("question", "What is the latest topic you learnt in JAVASCRIPT?");
// question.set(1, "Maps");
// question.set(2, "Map function");
// question.set(3, "Array function");
// question.set(4, "forEach");
// question.set("correct", 1);
// question.set(true, "You are right");
// question.set(false, "You are wrong.Please try again");

// console.log(question.get(1));
// // console.log(question.delete(4));
// console.log(question.size);

// if (question.has(4)) {
//   console.log("Option4 is here");
//   question.delete(4);
// }

// question.forEach((value, key) => {
//   if (typeof key === "number") {
//     console.log(`The option  ${key} is ${value}`);
//   }
//   console.log(`The ${key} is ${value}`);
// });

// for (let [key, value] of question.entries()) {
//   console.log(key, value, "Key value");
//   // if (typeof key === "number") {
//   //   console.log(`The option  ${key} is ${value}`);
//   // }
//   // console.log(`The ${key} is ${value}`);
// }

// var ans = parseInt(prompt(question.get(1)));

// console.log(question.get(ans === question.get("correct")));

//classes
// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calcAge = function() {
//   console.log(new Date().getFullYear() - this.yearOfBirth);
// };

//ES6
// class Person46 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calcAge() {
//     console.log(new Date().getFullYear() - this.yearOfBirth);
//   }
// }
// var john = new Person46("John", 1990, "teacher");

//ES5 classes with subclasses
// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }

// Person.prototype.calcAge = function() {
//   console.log(new Date().getFullYear() - this.yearOfBirth);
// };

// function Employee(name, yearOfBirth, job, DOJ, designation) {
//   Person.call(this, name, yearOfBirth, job);
//   this.DOJ = DOJ;
//   this.designation = designation;
// }

// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.calcExperience = function() {
//   console.log(new Date().getFullYear() - this.DOJ);
// };

// var hari = new Employee("hari", 1993, "Engineer", 2016, "Technical consultant");
// // hari.calcAge();
// hari.calcExperience();
// hari.calcAge();

//ES6
// class Person66 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }

//   calcAge() {
//     console.log(new Date().getFullYear() - this.yearOfBirth);
//   }
// }

// class Employee66 extends Person66 {
//   constructor(name, yearOfBirth, job, DOJ, designation) {
//     super(name, yearOfBirth, job);
//     this.DOJ = DOJ;
//     this.designation = designation;
//   }

//   calcExperince() {
//     console.log(new Date().getFullYear() - this.DOJ);
//   }
// }

// var hari = new Employee66(
//   "hari",
//   1993,
//   "Engineer",
//   2016,
//   "Technical consultant"
// );
// hari.calcExperience();
// hari.calcAge();

//Coding Solution 8

// class Element {
//   constructor(name, buildYear) {
//     this.name = name;
//     this.buildYear = buildYear;
//   }
// }

// class Park extends Element {
//   constructor(name, buildYear, noOfTrees, parkArea) {
//     super(name, buildYear);
//     this.noOfTrees = noOfTrees;
//     this.parkArea = parkArea; //km2
//   }
//   calcTreeDensity() {
//     var density = this.noOfTrees / this.parkArea;
//     console.log(
//       `${this.name} has a tree density of ${density} and it is build in ${
//         this.buildYear
//       }`
//     );
//   }
// }

// class Street extends Element {
//   constructor(name, buildYear, streetLength, size = 3) {
//     super(name, buildYear);
//     this.streetLength = streetLength;
//     this.size = size;
//   }

//   classifyStreet() {
//     var classification = new Map();
//     classification.set(1, "tiny");
//     classification.set(2, "small");
//     classification.set(3, "normal");
//     classification.set(4, "big");
//     classification.set(5, "huge");
//     classification.set(6, "tiny");
//     console.log(
//       `${this.name} is build in ${
//         this.buildYear
//       } and it is ${classification.get(this.size)} street`
//     );
//   }
// }

// var allParks = [
//   new Park("Green park", 1980, 500, 2.2),
//   new Park("National park", 1960, 1200, 4),
//   new Park("Arignar Anna park", 1990, 600, 3)
// ];

// var allStreets = [
//   new Street("Gurubux street", 1980, 1.2, 1),
//   new Street("MGR street", 1960, 2.3, 5),
//   new Street("Kamaraj street", 1965, 3.4, 2),
//   new Street("Raja annamalai street", 1970, 4.5, 3),
//   new Street("Pillaiyar koil street", 1970, 5.6, 4)
// ];

// function calc(dataArr) {
//   const sum = dataArr.reduce((prev, cur, index) => prev + cur, 0);
//   return [sum];
// }

// function reportParks(p) {
//   console.log("----------Parks--------------------");
//   // density
//   p.forEach(cur => cur.calcTreeDensity());
//   // total Ages
//   const [totalAges] = calc(
//     p.map(cur => new Date().getFullYear() - cur.buildYear)
//   );
//   const avgAge = totalAges / p.length;
//   console.log(`Our park has an average age of ${avgAge}`);
//   var i = p.findIndex(cur => cur.noOfTrees >= 1000);
//   console.log(`${p[i].name} has more than 1000 trees`);
// }

// function reportStreets(s) {
//   console.log("----------Streets--------------------");
//   s.forEach(cur => cur.classifyStreet());
//   const [totalLen] = calc(s.map(x => x.streetLength));
//   console.log(totalLen, "totalLen");
//   const avgLen = totalLen / s.length;
//   console.log(
//     `Our street has an total length of ${totalLen} km and average length of ${avgLen} km`
//   );
// }

// reportParks(allParks);
// reportStreets(allStreets);
