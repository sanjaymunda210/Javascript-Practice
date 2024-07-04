// Immediately Invoked Function Expressions (IIFE)
// to avoid global pollution
// called by itself ()()
// semicolon needed

(function chai() {
  console.log("DB Connected");
})();

(() => {
  console.log("DB connected two");
})();
((name) => {
  console.log(`welcome, ${name} `);
})("Sanjay");
