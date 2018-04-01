import Observer from "./Observer";
import logger from "./Logger";

/**
 * Создает хранилища для данных
 *
 * @class Store
 */
class Store {
  constructor(initialState = {}) {
    this.subscribers = [];
    this.state = initialState;
  }

  /**
   * API для получения состояни store
   *
   * @returns {object} store.state
   * @memberof Store
   */
  getState() {
    return this.state;
  }

  /**
   * Метод для оповещения подписчиков о событиях произошедших в store
   *
   * @param {string} eventName имя события
   * @memberof Store
   */
  emmit(eventName) {
    this.subscribers.forEach(s => s.trigger(eventName));
  }

  /**
   * API для подписки Views на события Store
   *
   * @param {View} sub - объект класса View
   * @memberof Store
   */
  subscribe(sub) {
    this.subscribers.push(sub);
  }
}

// LoggingStore - тот же самый store, с методами обернутыми для логгирования.
export class LoggingStore extends Store {
  constructor(initialState = {}) {
    super(initialState);
    this.logger = logger;
  }

  emmit(eventName) {
    const logEntry = `Store отправляет подписчикам событие ${eventName}`;
    this.logger.addEntry(logEntry);
    super.emmit(eventName);
  }

  subscribe(sub) {
    const logEntry = `${sub} подписывается на события Store`;
    this.logger.addEntry(logEntry);
    super.subscribe(sub);
  }
}

export default Store;
