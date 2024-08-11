const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5.14;
// console.log(Math.PI);

const chai = {
  name: "lemon chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("order chai");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

console.log(chai.name);
Object.defineProperty(chai, "name", {
  //   writable: false,
  enumerable: false,
});
chai.name = "milk chai";
console.log(chai.name);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
