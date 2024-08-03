const promiseOne = new Promise(function (resolve, reject) {
  // Do an Async task
  // Db calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async task done");
    resolve(); // to complete and consume
  }, 1000);
});

// consume
promiseOne.then(function () {
  console.log("Promise Consumed");
});

// without variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// data pass through resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      name: "Sanjay",
      age: 18,
    });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

// Chaining
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        name: "Munda",
        email: "sanjay@gmail.com",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

// handling with async await and using try catch
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        username: "SanjayMunda",
        email: "sanjay@gmail.com",
      });
    } else {
      reject("Error: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async await, even json conversion also take time so await is required
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

// same with .then.catch method
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// promise.all
