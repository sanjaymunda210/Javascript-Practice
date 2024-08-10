class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }
  // static doesn not give access to the instance of the class
  static createId() {
    return `123`;
  }
}

const sanjay = new User("Sanjay");
// console.log(sanjay.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(iphone.createId());
