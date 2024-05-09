import conditions from './conditions.js';

console.log(conditions);

const apiKey = 'eb74da4c66234328af9220857240605';

const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');

function removeCard() {
	const prevCard = document.querySelector('.card');
	if (prevCard) prevCard.remove();
}

function showError(errorMessage) {
	const html = `<div class="card">${errorMessage}</div>`;

	header.insertAdjacentHTML('afterend', html);
}

function showCard({ name, country, temp, conditionText, imgPath }) {
    const html = `<div class="card">
                                <h2 class="card-city">${name} <span>${country}</span></h2>
                                <div class="card-weather">
                                    <div class="card-value">${temp}<sup>°C</sup></div>
                                    <img class="card-img" src="${imgPath}" alt="Weather icon">
                                </div>
                                <div class="card-description">${conditionText}</div>
                            </div>`;
    header.insertAdjacentHTML('afterend', html);
}
async function getWeather(city, lang='en') {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=${lang}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

form.onsubmit = async function (e) {
    e.preventDefault();
    let city = input.value.trim();
    const data = await getWeather(city);

    if (data.error) {
        removeCard();
        showError(data.error.message);
    } else {
        removeCard();
        const weatherData = {
            name: data.location.name,
            country: data.location.country,
            temp: data.current.temp_c,
            conditionText: data.current.condition.text, 
            imgPath: getImgPath(data.current.condition.code, data.current.is_day)
        };

        showCard(weatherData);
    }
};

function getImgPath(conditionCode, isDay) {
    const info = conditions.find(obj => obj.code === conditionCode);
    const dayOrNight = isDay ? 'day' : 'night';
    const fileName = (isDay ? info.day : info.night) + '.png';
    return `./img/${dayOrNight}/${fileName}`;
}
