const User = {
  _email: "sanjay@elemento.ai",
  _password: "123",
  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
  get password() {
    return this._password.toUpperCase();
  },
  set password(value) {
    this._password = value;
  },
};

console.log(User);
console.log(User.email);
console.log(User.password);

const tea = Object.create(User);

console.log(tea);
console.log(tea.email);
tea.email = "tea@tea.com";
console.log(tea.email);
console.log(User.email);
console.log(tea.password);
