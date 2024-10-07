// Function to calculate wind chill factor
function calculateWindChill(temperature, windSpeed) {
    // Formula for wind chill calculation
    return Math.round(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)));
}

// Get static values for temperature and wind speed
const temperature = parseFloat(document.getElementById("temperature").innerText);
const windSpeed = parseFloat(document.getElementById("wind").innerText);

// Check conditions for displaying wind chill factor
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("wind-chill").innerText = windChill + " °C";
} else {
    document.getElementById("wind-chill").innerText = "N/A";
}