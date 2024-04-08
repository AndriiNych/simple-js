import windDirectionIndicator from '../images/cmp.svg';

const paramFetch = {
  url: 'https://api.openweathermap.org/data/2.5/',
  appid: process.env.REACT_APP_WEATHER,
  urlImg: 'https://openweathermap.org/img/wn/',
};

const arrCities = [
  {
    name: 'Kyiv',
    id: 703447,
    selected: true,
  },
  {
    name: 'Odesa',
    id: 698740,
  },
  {
    name: 'Kharkiv',
    id: 706483,
  },
  {
    name: 'Kherson',
    id: 706448,
  },
  {
    name: 'Dnipro',
    id: 709930,
  },
];

function createListOptionForSelect(arr) {
  let out = '';
  let isSelected = false;
  for (let i = 0; i < arr.length; i++) {
    let def = '';
    if (arr[i].selected && !isSelected) {
      isSelected = true;
      def = 'selected';
    }
    out += `<option value="${arr[i].id}" ${def}>${arr[i].name}</option>`;
  }
  return out;
}

function createSelect(clsPrev, cls, arr) {
  const nameSelector = 'city';
  if (document.querySelector(`#${nameSelector}`) !== null) {
    return;
  }

  // const appid = process.env.API_KEY_WEATHER;
  // console.log(appid);
  // paramFetch.appid = appid;

  const el = document.createElement('select');
  el.onchange = onChangeSelect;
  el.classList.add(cls);
  el.name = nameSelector;
  el.id = nameSelector;
  el.innerHTML = createListOptionForSelect(arr);
  document.querySelector(clsPrev).after(el);

  onChangeSelect.call(el);
}

function onChangeSelect() {
  getWeather(this.value);
}

function getWeather(id) {
  fetch(
    `${paramFetch.url}weather?id=${id}&units=metric&appid=${paramFetch.appid}`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      showWeather(data);
    });
}

function showInnerHtml(selector, html) {
  document.querySelector(selector).innerHTML = html;
}

function showWeatherImg(weather) {
  const el = document.querySelector('.weather__img');
  el.alt = weather.description;
  el.src = `${paramFetch.urlImg}${weather.icon}@2x.png`;
}

function showExtraElement(parent, innerHtml) {
  const el = document.createElement('li');
  el.classList.add('weather__other-item');
  el.innerHTML = innerHtml;
  parent.appendChild(el);
}

function showExtraOption(data) {
  const parent = document.querySelector('.weather__other-list');

  parent.innerHTML = '';

  showExtraElement(
    parent,
    `<p class="weather__subtitle">Weather:</p> ${data.weather[0].description}`
  );
  showExtraElement(
    parent,
    `<p class="weather__subtitle">Wind:</p><img src="${windDirectionIndicator}" class="wind__icon" width="12" hight="12" style="transform: rotate(${
      -45 + data.wind.deg + 180
    }deg)"><p>${data.wind.speed} m/s</><p>${getRumbByDeg(data.wind.deg)}</p> `
  );
  showExtraElement(
    parent,
    `<p class="weather__subtitle">Pressure:</p><p>${data.main.pressure} hPa</>`
  );
  showExtraElement(
    parent,
    `<p class="weather__subtitle">Humidity:</p><p>${data.main.humidity} %</>`
  );
}

function getRumbByDeg(deg) {
  const rumb = [
    'N',
    'NNE',
    'NNE',
    'NE',
    'NE',
    'ENE',
    'ENE',
    'E',
    'E',
    'ESE',
    'ESE',
    'SE',
    'SE',
    'SSE',
    'SSE',
    'S',
    'S',
    'SSW',
    'SSW',
    'SW',
    'SW',
    'WSW',
    'WSW',
    'W',
    'W',
    'WNW',
    'WNW',
    'NW',
    'NW',
    'NNW',
    'NNW',
    'N',
  ];

  return rumb[Math.floor(deg / 11.25)];
}

function showWeather(data) {
  showInnerHtml('.weather__data', new Date().toLocaleString());
  showInnerHtml('.weather__city', data.name);
  showInnerHtml('.weather__temp', Math.round(data.main.temp) + '&deg;C');

  showWeatherImg(data.weather[0]);

  showExtraOption(data);
}

export default function weatherJs() {
  createSelect('.input__title', 'input__select', arrCities);
}
