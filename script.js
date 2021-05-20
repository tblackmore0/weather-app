const searchButton = document.getElementById('searchButton');
    
    searchButton.addEventListener('click',
        getWeatherData
    );

    document.addEventListener('keydown', function (e) {
        if (e.code === "Enter") {
            getWeatherData();
        }
    });

const searchBox = document.getElementById('searchBox');
    
    searchBox.addEventListener('click', clearInput);

    function clearInput() {
        searchBox.value = '';
        searchBox.removeEventListener('click', clearInput);
    };

const celsius = document.getElementById('celsius');
const celsiusText = document.getElementById('celsiusText')
const farenheit = document.getElementById('farenheit')
const farenheitText = document.getElementById('farenheitText')

let weatherData 

celsius.addEventListener('click', function (e) {
    if (celsius.className === 'tempInactive') {
        celsius.className = 'tempActive';
        celsiusText.className = 'textActive';
        farenheit.className = 'tempInactive';
        farenheitText.className = 'textInactive';
        changeMeasurement(weatherData);
    }
});

farenheit.addEventListener('click', function (e) {
    if (farenheit.className === 'tempInactive') {
        farenheitText.className = 'textActive';
        farenheit.className = 'tempActive';
        celsius.className = 'tempInactive';
        celsiusText.className = 'textInactive';
        changeMeasurement(weatherData);
    }
});

async function getWeatherData() {
    searchText = searchBox.value;

    try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=79849c311dcb4d61921155022211105&q=${searchText}`);
    weatherData = await response.json();
    showData(weatherData);

    } catch (err) {
         if (err.name === 'TypeError') {
             alert('Cannot find location!')
         }
      } 
    
} 

function showData(weatherData) {

    changeMeasurement (weatherData);

    let description = weatherData.current.condition.text;
    updateDescription(description);

    let wind = weatherData.current.wind_mph;
    updateWind(wind);

    let precip = weatherData.current.precip_mm;
    updateRain(precip);


    let humidity = weatherData.current.humidity;
    updateHumid(humidity);

    let city = weatherData.location.name;
    let country = weatherData.location.country;
    updateLocation(city, country);

    showStuff ();
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

function changeMeasurement (weatherData) {
    
        let temperatureC = weatherData.current.temp_c;
        let feelsLikeC = weatherData.current.feelslike_c;
        let temperatureF = weatherData.current.temp_f;
        let feelsLikeF = weatherData.current.feelslike_f;

        if (celsius.className === 'tempActive') {
            updateTemp(temperatureC);
            updateFeel(feelsLikeC);
        }
        if (farenheit.className === 'tempActive') {
            updateTemp(temperatureF);
            updateFeel(feelsLikeF);
    }};

// This needs refactoring

function showStuff () {
    titles = document.getElementsByClassName('minorTitle');
        for (i = 0; i <titles.length; i++) {
            titles[i].style.display = 'flex';
        }

    let showTemp1 = document.getElementsByClassName('tempActive')
    for (i = 0; i <showTemp1.length; i++) {
        showTemp1[i].style.display = 'block';
    }
    let showTemp2 = document.getElementsByClassName('tempInactive')
    for (i = 0; i <showTemp2.length; i++) {
        showTemp2[i].style.display = 'block';
    }
    let showTemp3 = document.getElementsByClassName('textActive')
    for (i = 0; i <showTemp3.length; i++) {
        showTemp3[i].style.display = 'block';
    }
    let showTemp4 = document.getElementsByClassName('textInactive')
    for (i = 0; i <showTemp4.length; i++) {
        showTemp4[i].style.display = 'block';
    }}

