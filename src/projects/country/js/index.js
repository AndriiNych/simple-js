// event listener class
import { Listener } from './listener';
// data receiving class
import { DataControler } from './data-controler';
// result drawing class
import { DrawCountries } from './draw-data';

let refs = {};

let dataControler;

export default function countryJs() {
  refs = {
    list: document.querySelector('.country__list'),
    info: document.querySelector('.country__info'),
  };

  dataControler = new DataControler();

  // set the event listener to the search field
  new Listener({ selectorSource: '#search-box', callBack: onSearch });
}

function onSearch(e) {
  // make a request to the server, if the data is correct, we display it
  dataControler.loadData(e.target.value).then(data => {
    new DrawCountries(refs).draw(data);
  });
}
