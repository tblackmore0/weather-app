const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click',
        getWeatherData
    );

    document.addEventListener('keydown', function (e) {
        if (e.code === "Enter") {
            getWeatherData();
        }
    });


async function getWeatherData() {
    searchBox = document.getElementById('searchBox');
    searchText = searchBox.value;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=79849c311dcb4d61921155022211105&q=${searchText}`);
    const weatherData = await response.json();
    showData(weatherData);
} 


function showData(weatherData) {
    let temperature = weatherData.current.temp_c;
    updateTemp(temperature);

    let description = weatherData.current.condition.text;
    updateDescription(description);

    let wind = weatherData.current.wind_mph;
    updateWind(wind);

    let precip = weatherData.current.precip_mm;
    updateRain(precip);

    let feelsLike = weatherData.current.feelslike_c;
    updateFeel(feelsLike);

    let humidity = weatherData.current.humidity;
    updateHumid(humidity);

    let city = weatherData.location.name;
    let country = weatherData.location.country;
    updateLocation(city, country);
};

    function updateTemp(temperature) {
        let tempDiv = document.getElementById('temperature');
        tempDiv.innerHTML = temperature + '\u00B0';
    }

    function updateDescription(description) {
        let descDiv = document.getElementById('description');
        descDiv.innerHTML = description;
    }

    function updateWind(wind) {
        let windDiv = document.getElementById('wind');
        windDiv.innerHTML = wind + ' mph';
    }

    function updateRain(precip) {
        let rainDiv = document.getElementById('rain');
        rainDiv.innerHTML = precip + ' mm';
    }
    
    function updateFeel(feelsLike) {
        let feelsDiv = document.getElementById('feels');
        feelsDiv.innerHTML = feelsLike + '\u00B0';
    }

    function updateHumid(humidity) {
        let humidDiv = document.getElementById('humidity');
        humidDiv.innerHTML = humidity + ' %';
    }

    function updateLocation(city, country) {
        let locationDiv = document.getElementById('location');
        locationDiv.innerHTML = city + ', ' + country;
    }



