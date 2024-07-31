const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const results = document.getElementById("results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please enter a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please enter a valid weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let category;
    if (bmi < 18.6) {
      category = "Under Weight";
    } else if (bmi < 24.9) {
      category = "Normal Weight";
    } else {
      category = "Overweight";
    }
    results.innerHTML = `${category}, Your BMI is ${bmi}`;
  }
});
