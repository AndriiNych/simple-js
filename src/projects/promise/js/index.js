import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.5.min.css';

export default function promiseJs() {
  Notiflix.Notify.init({ position: 'right-bottom' });

  document
    .querySelector('.promise__from')
    .addEventListener('submit', formSubmit);
}

function setDisabled() {
  document.querySelector('button[type=submit]').setAttribute('disabled', true);
}

function setEnable(enable) {
  if (enable)
    document.querySelector('button[type=submit]').removeAttribute('disabled');
}

function createPromise({ position, delay, enable }) {
  return new Promise((resolve, reject) => {
    setTimeout(
      ({ position, delay, enable }) => {
        const shouldResolve = Math.random() > 0.3;

        if (shouldResolve) {
          resolve({ position, delay, enable });
        }

        reject({ position, delay, enable });
      },
      delay,
      { position, delay, enable }
    );
  });
}

function formSubmit(event) {
  event.preventDefault();

  setDisabled();

  const length = +event.currentTarget.amount.value;
  const step = +event.currentTarget.step.value;
  const delay = +event.currentTarget.delay.value;

  for (let i = 0; i < length; i++) {
    createPromise({
      position: i + 1,
      delay: delay + i * step,
      enable: i + 1 === length,
    })
      .then(onSucces)
      .catch(onError);
  }
}

function onSucces({ position, delay, enable }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
  setEnable(enable);
}

function onError({ position, delay, enable }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
  setEnable(enable);
}
