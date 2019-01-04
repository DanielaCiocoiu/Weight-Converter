document.getElementById("output").style.visibility = "hidden";

document.getElementById("kgInput").addEventListener("input", function(e) {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  document.getElementById("gramsOutput").innerHTML = (kg * 1000).toFixed(2);
  document.getElementById("lbOutput").innerHTML = (kg * 2.2046).toFixed(2);
  document.getElementById("ozOutput").innerHTML = (kg * 35.27396195).toFixed(2);
});
