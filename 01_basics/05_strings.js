// const name = "Sanjay";
// const repoCount = 50;
// console.log(name + repoCount + "Value");
// console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sanjay-sj-com");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("j"));

const newString = gameName.substring(0, 4);
console.log(newString);
// slice allows negative values whereas substring does not
const anotherString = gameName.slice(-13, 4);
console.log(anotherString);

const newStringOne = "    Sanjay      ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanjay.com/sanjay%20munda";
console.log(url.replace("%20", "-"));

console.log(url.includes("jaya"));

console.log(gameName.split("-"));
