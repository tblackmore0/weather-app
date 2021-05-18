/* retrieve text from search box
    process text
    form validation
    use text as argument for async function to retrieve data
    retrieve data from API
    use data to modify HTML
*/


const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click',
        getWeatherData
    );

async function getWeatherData() {
    searchText = document.getElementById('searchBox').value;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=79849c311dcb4d61921155022211105&q=${searchText}`);
    const weatherData = await response.json();
    showData(weatherData);
} 


function showData(weatherData) {
    let temperature = weatherData.current.temp_f;
    updateTemp(temperature);

    let description = weatherData.current.condition.text;
    updateDescription(description);
};

    function updateTemp(temperature) {
        let tempDiv = document.getElementById('temperature');
        tempDiv.innerHTML = temperature;
    }

    function updateDescription(description) {
        let descDiv = document.getElementById('description');
        descDiv.innerHTML = description;
    }



