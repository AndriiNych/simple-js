import * as React from 'react';

import './sass/index.scss';
import countdownTimerJs from './js';

export default function CountdownTimer() {
  React.useEffect(() => {
    countdownTimerJs();
  }, []);

  return (
    <section className="main  ">
      <div className="container">
        <div className="timer__container">
          <input type="text" id="datetime-picker" className="" />
          <button className="border-black" type="button" data-start>
            Start
          </button>

          <div className="timer">
            <div className="field">
              <span className="value" data-days>
                00
              </span>
              <span className="label">Days</span>
            </div>
            <div className="field">
              <span className="value" data-hours>
                00
              </span>
              <span className="label">Hours</span>
            </div>
            <div className="field">
              <span className="value" data-minutes>
                00
              </span>
              <span className="label">Minutes</span>
            </div>
            <div className="field">
              <span className="value" data-seconds>
                00
              </span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </div>
        <div className="notes">
          <p className="notes__all">
            Перелік реалізованих функцій на сторінці:
          </p>
          <ul className="notes__list">
            <li className="notes__item">
              Якщо таймер уже запущено, то повторне натискання на кнопку Start
              призведе до повідомлення про помилку.
            </li>
            <li className="notes__item">
              Щоб перезапустити таймер його необхідно зупинити.
            </li>
            <li className="notes__item">
              Зупинка таймера передбачена при повторній спробі ввести нову точку
              відліку.
            </li>
            <li className="notes__item">
              При виборі валідного значення точки відліку встановлюються
              показники таймеру.
            </li>
            <li className="notes__item">
              Пр запуску таймера, таймер спочатку перераховує свої показники на
              поточні (якщо була затримка між вибором точки відліку і запуском
              таймера, або таймер зупинявся) і тільки після цього запускається.
            </li>
            <li className="notes__item">
              Якщо введена помилкова точка відлліку, то показники таймеру
              обнуляються.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
