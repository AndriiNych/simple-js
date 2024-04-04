// клас слухача подій
import { Listener } from './listener';
// клас отримання даних
import { DataControler } from './data-controler';
// клас малювання результату
import { DrawCountries } from './draw-data';

let refs = {};

let dataControler;

export default function countryJs() {
  refs = {
    list: document.querySelector('.country__list'),
    info: document.querySelector('.country__info'),
  };

  dataControler = new DataControler();

  // встанвлюємо слухача подій на поле пошуку
  new Listener({ selectorSource: '#search-box', callBack: onSearch });
}

function onSearch(e) {
  // робимо запит на сервер, якщо прийшли коректні дані - виводимо
  dataControler.loadData(e.target.value).then(data => {
    new DrawCountries(refs).draw(data);
  });
}
