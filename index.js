function aRound(n) {
    return Math.round((n + Number.EPSILON) * 100)
    /100;
};

function getVal() {
  const input = document.querySelector("#user-input").value;
  
  document.querySelector("#length-m").textContent = input + " Feet(FT) to Meters(M): " + 
    aRound(input/3.281);
  document.querySelector("#length-ft").textContent = input + " Meters(M) to Feet(FT): " + 
    aRound(input*3.281);
    
  document.querySelector("#volume-l").textContent = input + " Litres(L) to Gallons(G): " +
    aRound(input / 4.546);
  document.querySelector("#volume-g").textContent = input + " Gallons(G) to Litres(L): " +
    aRound(input * 4.546);   
    
  document.querySelector("#mass-lbs").textContent = input + " Pounds(lbs) to Kilograms(Kgs): " +
    aRound(input / 2.205);
  document.querySelector("#mass-kg").textContent = input + " Kilograms(Kgs) to Pounds(Lbs): " +
    aRound(input * 2.205);         
}

getVal()
