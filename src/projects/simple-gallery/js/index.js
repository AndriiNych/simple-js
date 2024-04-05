import { galleryItems } from '../data/gallery-items.js';
const basicLightbox = require('basiclightbox');

let modalWindow;

let refGalleryContainer;

const createGallery = galleryItems =>
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    )
    .join('');

const inputGalleryToDocument = () => {
  refGalleryContainer.innerHTML = createGallery(galleryItems);
};

const turnOnScroll = () => {
  document.body.style.paddingRight = 0;
  document.body.style.overflowY = 'visible';
};

const turnOffScroll = () => {
  document.body.style.paddingRight = '15px';
  document.body.style.overflowY = 'hidden';
};

const openModalWindow = event => {
  if (document.querySelector('.basicLightbox')) {
    return;
  }

  modalWindow = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">`
  );
  modalWindow.show();
};

const onKeyDownEsc = event => {
  if (!document.querySelector('.basicLightbox')) {
    document.body.removeEventListener('keydown', onKeyDownEsc);
    return;
  }

  if (event.code === 'Escape') {
    modalWindow.close();
    turnOnScroll();
    return;
  }
};

const onGalleryClick = event => {
  if (![...event.target.classList].includes('gallery__image')) return;

  event.preventDefault();

  openModalWindow(event);

  turnOffScroll();

  document
    .querySelector('.basicLightbox')
    .addEventListener('click', turnOnScroll, { once: true });
  document.body.addEventListener('keydown', onKeyDownEsc);
};

export default function simpleGalleryJs() {
  document
    .querySelector('link')
    .insertAdjacentHTML(
      'beforebegin',
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css" />'
    );

  refGalleryContainer = document.querySelector('div.gallery');

  inputGalleryToDocument();

  refGalleryContainer.addEventListener('click', onGalleryClick);
}
