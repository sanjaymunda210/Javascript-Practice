const clock = document.getElementById("clock");

setInterval(() => {
  let date = new Date();
  //   console.log(date.toLocaleTimeString("en-IN"));
  clock.innerHTML = date.toLocaleTimeString("en-IN").toUpperCase();
}, 1000);
