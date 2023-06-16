// var celcius = 25;
// var fahrenheit = celcius * 9/5 + 32;
// console.log(fahrenheit);

function konversi() {
var InputField = document.getElementById("InputField").value;
var hasil = parseInt(InputField) * 9/5 + 32 ;
document.getElementById("hasil").value = hasil;
}
function clearFunction() {
    document.getElementById("hasil").value = "";
  }
