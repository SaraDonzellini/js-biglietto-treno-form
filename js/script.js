let numberOfKm = document.getElementById('km');
let passengerAge = document.getElementById('age');

const pricePerKm = 0.2762;
const button = document.getElementById('button');

let ticketFull
let ticketMinor
let ticketSenior

button.addEventListener('click', function () {
  console.log(numberOfKm.value);
  console.log(passengerAge.value);
  console.log(ticketFull)
  console.log(ticketMinor)
  console.log(ticketSenior)

  ticketFull = numberOfKm.value * pricePerKm;
  ticketMinor = ticketFull - (ticketFull * 0.175);
  ticketSenior = ticketFull - (ticketFull * 0.333);

  if (passengerAge.value < 18) {
    document.getElementById('totale').innerHTML = ticketMinor.toFixed(2) + "&euro;"
  } else if (passengerAge.value >= 65) {
    document.getElementById('totale').innerHTML = ticketSenior.toFixed(2) + "&euro;"
  } else
    document.getElementById('totale').innerHTML = ticketFull.toFixed(2) + "&euro;"
});

