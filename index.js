



function covertTemp() {
    const tempInput = document.getElementById('tempInput').value;
    const toFahrenheit = document.getElementById('toFahrenheit');
    const toCelsius = document.getElementById('toCelsius');
    const outPut = document.getElementById('outPut');

    let temp;

    temp = Number(tempInput);

    if(toFahrenheit.checked){
        temp = (temp * 9 / 5) + 32;
        outPut.textContent = temp.toFixed(2) + "°F";
    }

    else if(toCelsius.checked){
        temp = (temp - 32) * 9 / 5;
        outPut.textContent = temp.toFixed(2) + "°C";
    }

    else{
        outPut.textContent =  "Select a unit";
    }
    
};