export class Listener {
  #DEBOUNCE_DELAY = 500;
  #debounce = require('lodash.debounce');
  #listenersSelectors = [];

  constructor({ selectorSource, callBack }) {
    if (
      this.#listenersSelectors.filter(item => item === selectorSource)
        .length === 0
    ) {
      this.#listenersSelectors.push(selectorSource);
      document
        .querySelector(selectorSource)
        .addEventListener(
          'input',
          this.#debounce(callBack, this.#DEBOUNCE_DELAY)
        );
    }
  }
}
