// var c = 800; // we usually avoid var to avoid confusion
let a = 300;
if (true) {
  let a = 444;
  const b = 20;
  //   console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "sanjay";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// one();

// ++++++++++++++++++ interesting ++++++++++++++++++

// console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization // Hoisting
const addTwo = function (num) {
  return num + 2;
};
