// Constructor method- singleton

const tinderUser = new Object();
// const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign({}, obj1, obj2, obj4); //const returnedTarget = Object.assign(target, source); {} acts as target and other object as source, if {} not used then all values are going to obj1

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "k@gmail.com",
  },
  {
    id: 1,
    email: "s@gmail.com",
  },
];

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true "to find property"

// ****Destructuring****
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "sanjay",
};
// const { courseInstructor } = course;
// console.log(courseInstructor);

// const { courseInstructor: instructor } = course;
// console.log(instructor);

// https://jsonformatter.org/
