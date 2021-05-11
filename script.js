/* retrieve text from search box
    process text
    form validation
    use text as argument for async function to retrieve data
    retrieve data from API
    use data to modify HTML
*/

/*
const searchBox = document.getElementById('searchBox');
    searchBox.addEventListener('submit', getWeatherData);

*/
async function getWeatherData() {
    const output = searchBox.elements[0];
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=79849c311dcb4d61921155022211105&q=Beijing`, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    showData(weatherData);
}

function showData(weatherData) {
    let temperature = weatherData.current.temp_f;
    updateTemp(temperature);

    let description = weatherData.current.condition.text;
    updateDescription(description);
}

    function updateTemp(temperature) {
        let tempDiv = document.getElementById('temperature');
        tempDiv.innerHTML = temperature;
    }

    function updateDescription(description) {
        let descDiv = document.getElementById('description');
        descDiv.innerHTML = description;
    }


getWeatherData();


