setInterval(clock ,1000);

function clock() {
  var d = new Date();
  document.getElementById("demo").innerHTML=d.toLocaleTimeString();
}
