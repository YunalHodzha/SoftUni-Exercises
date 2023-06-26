function attachEvents() {
    const locationInputElement = document.getElementById('location');
    const getWeatherBtn = document.getElementById('submit');
    getWeatherBtn.innerHTML = '&#176;'

    const forecastElem = document.getElementById('forecast');
    const currentElem = document.getElementById('current');
    const upcomingElem = document.getElementById('upcoming');

    const degree = '&#176;'

    getWeatherBtn.addEventListener('click', getWeather);

    async function getWeather() {
        forecastElem.style.display = "block";

        const locationInputValue = locationInputElement.value;

        const response = await fetch(`http://localhost:3030/jsonstore/forecaster/locations`);
        const data = await response.json();


        const location = locationByName(data, locationInputValue);
        const locationCode = location.code;

        const firstResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${locationCode}`);
        const firstResponseData = await firstResponse.json();
        const forecast = firstResponseData.forecast;
        

        const secondResponse = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`);
        const secondResponseData = await secondResponse.json();

        //first Div
        const forecastDiv = document.createElement('div');
        forecastDiv.classList.add('forecasts');
        currentElem.appendChild(forecastDiv);

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add("condition");
        forecastDiv.appendChild(conditionSpan);

        //inside spans
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('forecast-data');
        nameSpan.textContent = `${firstResponseData.name}`;
        forecastDiv.appendChild(nameSpan);

        const secondSpan = document.createElement('span');
        secondSpan.classList.add('forecast-data');
        secondSpan.textContent = `${forecast.low}${degree}/${forecast.high}${degree}`;
        forecastDiv.appendChild(secondSpan);

        const thirdSpan = document.createElement('span');
        thirdSpan.classList.add('forecast-data');
        thirdSpan.textContent = ''
        forecastDiv.appendChild(thirdSpan);



        console.log(firstResponseData)
        console.log(secondResponseData)
    }

    function locationByName(data, name) {
        return data.find(location => location.name === name);
    }

}

attachEvents();