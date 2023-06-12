// Get the elements
const temperatureInput = document.getElementById('temperatureInput');
const unitSelect = document.getElementById('unitSelect');
const convertBtn = document.getElementById('convertBtn');
const resultArea = document.getElementById('resultArea');

// Add event listener to the convert button
convertBtn.addEventListener('click', () => {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;
    let convertedTemperature;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = convertCelsius(temperature);
        convertedUnit = 'Fahrenheit';
    } else if (unit === 'fahrenheit') {
        convertedTemperature = convertFahrenheit(temperature);
        convertedUnit = 'Celsius';
    } else if (unit === 'kelvin') {
        convertedTemperature = convertKelvin(temperature);
        convertedUnit = 'Celsius';
    }

    if (!isNaN(convertedTemperature)) {
        resultArea.textContent = convertedTemperature.toFixed(2) + ' ' + convertedUnit;
    } else {
        resultArea.textContent = 'Invalid input';
    }
});

// Celsius to Fahrenheit conversion
function convertCelsius(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Fahrenheit to Celsius conversion
function convertFahrenheit(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Kelvin to Celsius conversion
function convertKelvin(kelvin) {
    return kelvin - 273.15;
}
