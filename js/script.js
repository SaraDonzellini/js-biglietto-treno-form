let numberOfKmElement = document.getElementById('km');
let passengerAgeElement = document.getElementById('age');

const pricePerKm = 0.2762;
const button = document.getElementById('button');



button.addEventListener('click', function () {

  let finalPrice;
  let numberOfKm = parseInt(numberOfKmElement.value);
  let passengerAge = parseInt(passengerAgeElement.value);
  
  finalPrice = numberOfKm * pricePerKm;

  if (passengerAge < 18) {
    finalPrice = finalPrice - (finalPrice * 0.175);
  } else if (passengerAge >= 65) {
    finalPrice = finalPrice - (finalPrice * 0.333);
  }
  
  document.getElementById('totale').innerHTML = finalPrice.toFixed(2) + "&euro;";

  console.log(numberOfKm);
  console.log(passengerAge);

});

