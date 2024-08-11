class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}

const sanjay = new User("sanjay@elemento.ai", "abc");

console.log(sanjay);
console.log(sanjay.email);
console.log(sanjay.password);
