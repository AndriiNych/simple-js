import axios from 'axios';
import Notification from './notification';

const notification = new Notification();
const ERR_404 =
  'Sorry, there are no images matching your search query. Please try again.';

export default class DataControler {
  #URL = '  https://pixabay.com/api/';
  #KEY = process.env.REACT_APP_GALLERY;
  #TYPE = 'image_type=photo';
  #PER_PAGE = 40;
  #totalHits = 0;
  #searchLine = '';
  #pageNumber = 0;
  #search;
  #isNowFetchActive = false;
  #maxPage = 1;

  onLoadLastData = '';

  setNewSearch(searchLine) {
    this.#pageNumber = 0;
    this.#maxPage = 1;
    this.#searchLine = searchLine.trim().toLowerCase();
  }

  async loadData() {
    if (this.#isNowFetchActive) {
      return false;
    }

    if (this.#pageNumber >= this.#maxPage) {
      this.#onShowLastData();

      return false;
    }

    this.#createSearchLine();

    this.#setFetchActive();

    return await this.#fetchData();
  }

  async #fetchData() {
    try {
      const result = await axios.get(this.#search);

      this.#totalHits = result.data.totalHits;
      this.#maxPage = Math.ceil(this.#totalHits / this.#PER_PAGE);

      this.#sendNotification(this.#totalHits);

      this.#resetFetchActive();

      return Promise.resolve(result);
    } catch (err) {
      this.#resetFetchActive();
      notification.sendNotificationError(err);
    }
  }

  get pageNumber() {
    return this.#pageNumber;
  }

  set pageNumber(newPage) {
    this.#pageNumber = newPage;
  }

  #setFetchActive() {
    this.#isNowFetchActive = true;
  }

  #resetFetchActive() {
    this.#isNowFetchActive = false;
  }

  #sendNotification() {
    if (this.#totalHits === 0) {
      notification.sendNotificationError(ERR_404);
    } else if (this.#pageNumber === 1) {
      notification.sendNotificationSuccess(
        `Hooray! We found ${this.#totalHits} images`
      );
    }

    if (this.#pageNumber === this.#maxPage) {
      notification.sendNotificationInfo('Oops! Load last data.');
    }
  }

  #createSearchLine() {
    this.#pageNumber++;
    this.#search = `${this.#URL}?${this.#KEY}&${this.#TYPE}
      &page=${this.#pageNumber}&per_page=${this.#PER_PAGE}&q=${
      this.#searchLine
    }&image_type=photo&orientation=horizontal&safesearch=true`;
  }

  #onShowLastData() {
    if (typeof this.onLoadLastData === 'function') {
      this.onLoadLastData();
    }
  }
}
