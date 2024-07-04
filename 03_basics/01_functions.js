function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("N");
  console.log("J");
  console.log("A");
  console.log("Y");
}

// sayMyName();

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }

// addTwoNumbers(5, 6);

function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

// const result = addTwoNumbers(5, 6);
// console.log(result);

function loginUserMeassage(username = "Sanjay") {
  if (!username) {
    console.log("please enter username");
    return;
  } else {
    return `${username} just logged in`;
  }
}

// console.log(loginUserMeassage("Munda"));

function calculateCartPrice(val1, val2, ...num3) {
  return num3;
}

// console.log(calculateCartPrice(200, 300, 500, 600, 800, 900));

const user = {
  username: "Sanjay",
  price: 829,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user)
// handleObject({
//   username: "Munda",
//   price: 976,
// });

const myNewArray = [300, 4000, 8999, 656];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([300, 4455, 5656, 34343]));
