function setUsername(username) {
  // complex DB calls
  this.username = username;
  console.log("called");
}
// the above function is called but removed from execution context so to get reference from it we use call with a parameter this
function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
