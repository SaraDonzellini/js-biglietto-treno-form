let numberOfKm = document.getElementById('km');
let passengerAge = document.getElementById('age');

const pricePerKm = 0.2762;
const button = document.getElementById('button');



button.addEventListener('click', function () {

  let finalPrice;
  
  finalPrice = numberOfKm.value * pricePerKm;

  if (passengerAge.value < 18) {
    finalPrice = finalPrice - (finalPrice * 0.175);
  } else if (passengerAge.value >= 65) {
    finalPrice = finalPrice - (finalPrice * 0.333);
  }
  
  document.getElementById('totale').innerHTML = finalPrice.toFixed(2) + "&euro;";

  console.log(numberOfKm.value);
  console.log(passengerAge.value);

});

