export class Listener {
  #DEBOUNCE_DELAY = 500;
  #debounce = require('lodash.debounce');
  #listenersSelectors = [];

  constructor({ selectorSource, callBack }) {
    console.log(' listener');

    if (
      this.#listenersSelectors.filter(item => item === selectorSource)
        .length === 0
    ) {
      console.log('add listener');
      this.#listenersSelectors.push(selectorSource);
      console.table(this.#listenersSelectors);
      document
        .querySelector(selectorSource)
        .addEventListener(
          'input',
          this.#debounce(callBack, this.#DEBOUNCE_DELAY)
        );
    }
  }
}
