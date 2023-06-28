const enumIcon = {
    Sunny: "&#x2600", // ☀
    "Partly sunny": '&#x26C5', // ⛅
    Overcast: '&#x2601', // ☁
    Rain: '&#x2614', // ☂
    Degrees: '&#176' // °
}
const forecastContainer = document.getElementById('forecast');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
}

async function getWeather() {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations';
    const townName = document.getElementById('location').value;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const info = data.find(x => x.name === townName);

        createForCaster(info.code);
    } catch {
        forecastContainer.style.display = "block";
        forecastContainer.textContent = 'Error';
    }
}

async function createForCaster(code) {
    const currentSection = document.getElementById('current');
    const upcomingContainer = document.getElementById('upcoming');


    const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
    const urlThreeDay = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

    //TODO use Promise.all
    try {
        const responsToday = await fetch(urlToday);
        const dataToday = await responsToday.json();

        const responseUpcoming = await fetch(urlThreeDay);
        const dataUpcoming = await responseUpcoming.json();

        forecastContainer.style.display = "block";
        const togayHtmlTemp = createToday(dataToday);
        currentSection.appendChild(togayHtmlTemp);

        const upcomingHtmlTemp = createUpcoming(dataUpcoming);
        upcomingContainer.appendChild(upcomingHtmlTemp);
    } catch {
        forecastContainer.textContent = 'Error';
    }

}

function createUpcoming(data) {

    const container = document.createElement('div');
    container.classList.add('forecast-info');

    data.forecast.forEach(data => {
        const spanHolder = generateSpan(data);
        container.appendChild(spanHolder);
    });
    return container;
}

function generateSpan(data) {
    const { condition, high, low } = data;

    const spanHolder = document.createElement('span');
    spanHolder.classList.add('upcoming');

    const iconSpan = document.createElement('span');
    iconSpan.classList.add('symbol');
    iconSpan.innerHTML = enumIcon[condition];

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.innerHTML = `${low}${enumIcon['Degrees']}/${high}${enumIcon['Degrees']}`;

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('forecast-data');
    conditionSpan.textContent = condition;

    spanHolder.appendChild(iconSpan)
    spanHolder.appendChild(tempSpan)
    spanHolder.appendChild(conditionSpan);

    return spanHolder;
}

function createToday(data) {
    const { condition, high, low } = data.forecast

    const conditionContainer = document.createElement('div');
    conditionContainer.classList.add('forecasts');

    const conditionIconSpan = document.createElement('span');
    conditionIconSpan.classList.add('condition', 'symbol');
    conditionIconSpan.innerHTML = enumIcon[condition];

    const conditionSpan = document.createElement('span');
    conditionSpan.classList.add('condition');

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('forecast-data');
    nameSpan.textContent = data.name;

    const tempSpan = document.createElement('span');
    tempSpan.classList.add('forecast-data');
    tempSpan.innerHTML = `${low}${enumIcon['Degrees']}/${high}${enumIcon['Degrees']}`;

    const conditionTxtSpan = document.createElement('span');
    conditionTxtSpan.classList.add('forecast-data');
    conditionTxtSpan.innerHTML = condition;

    conditionSpan.appendChild(nameSpan);
    conditionSpan.appendChild(tempSpan);
    conditionSpan.appendChild(conditionTxtSpan);

    conditionContainer.appendChild(conditionIconSpan);
    conditionContainer.appendChild(conditionSpan);

    return conditionContainer;
}

attachEvents();