document.getElementById("output").style.visibility = "hidden";
document.getElementById("kgInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";

  // e.target.value is method for assigning a value to a variable by getting that value
  // by listening to the value of < input > using an event listener "e"
  let kg = e.target.value;
  document.getElementById("gramsOutput").innerHTML = (kg * 1000).toFixed(2);
  document.getElementById("lbOutput").innerHTML = (kg * 2.2046).toFixed(2);
  document.getElementById("ozOutput").innerHTML = (kg * 35.27396195).toFixed(2);
});

document.getElementById("output1").style.visibility = "hidden";
document.getElementById("kmInput").addEventListener("input", function(e) {
  document.getElementById("output1").style.visibility = "visible";

  let km = e.target.value;
  document.getElementById("milesOutput").innerHTML = (km * 0.62137).toFixed(2);
  document.getElementById("mOutput").innerHTML = (km / 0.001).toFixed(2);
  document.getElementById("ftOutput").innerHTML = (km * 3280.8).toFixed(2);
});
