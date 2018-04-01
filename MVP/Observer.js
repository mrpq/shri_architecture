/**
 * От данного класса наследуют все остальные классы.
 * Предоставляет возможность подписыватся на события и триггерить события.
 *
 * @class Observer
 */
class Observer {
  constructor() {
    this.eventHandlers = [];
  }

  /**
   * Оповещает подписчиков о событии eventName. Вызывает колбэки всех подписчиков
   *
   * @param {string} eventName имя события
   * @param {any} data данные, передаваемые в колбэк подписчика
   * @memberof Observer
   */
  trigger(eventName, data) {
    const eventHandler = this.eventHandlers
      .find(h => h.eventName === eventName)
      .cb.bind(this);
    eventHandler(data);
  }

  /**
   * API для подписки на события
   *
   * @param {any} eventName имя события
   * @param {any} cb колбэк подписчика
   * @memberof Observer
   */
  subscribe(eventName, cb) {
    this.eventHandlers.push({ eventName, cb });
  }
}

export default Observer;
