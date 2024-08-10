// (String, function, array) -> object -> null

// let myName = "sanjay     ";
// let mychannel = "chai     ";

// own code
// Object.prototype.trueLength = function () {
//   return this.trim().length;
// };

// console.log(myName.trueLength());

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sanjay = function () {
  console.log(`Sanjay is present in all objects`);
};

Array.prototype.heySanjay = function () {
  console.log(`Sanjay says hello`);
};

heroPower.sanjay();
myHeros.sanjay();
myHeros.heySanjay();
// heroPower.heySanjay(); //error

// inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // get access of teaching support
};

Teacher.__proto__ = User; // get access of user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher); // get access of teacher

let anotherUsername = "ChaiAurCode     ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Sanjay  ".trueLength();
"iceTea".trueLength();
