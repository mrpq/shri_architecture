import logger from "./Logger";

/**
 * Диспатчер. Отправляет actions в store
 *
 * @class Dispatcher
 */
class Dispatcher {
  constructor() {
    this.callbacks = [];
  }

  /**
   * API для подписки store на события.
   *
   * @param {function} cb Колбэк для изменения стейта store. Колбэк ожидает как минимум один агрумент
   * вида {action: 'ACTION_NAME', payload: {data}}
   * @memberof Dispatcher
   */
  subscribe(cb) {
    this.callbacks.push(cb);
  }

  /**
   * Метод для отправки экшнов в store. Фактически выполняет колбэки предоставленные
   * хранилищами, передавая им action в качестве агрумента
   *
   * @param {object} action
   * @memberof Dispatcher
   */
  dispatch(action) {
    this.callbacks.forEach(cb => cb(action));
  }
}

// Диспатчер один для всех хранилищ, поэтому инициализируется единожды.
const dispatcher = new Dispatcher();
export default dispatcher;

// LoggingDispatcher - тот же самый диспатчер, с методами обернутыми для логгирования.
class LoggingDispatcher extends Dispatcher {
  constructor() {
    super();
    this.logger = logger;
  }

  subscribe(cb) {
    const logEntry = `Store подписывается на события dispatcher`;
    this.logger.addEntry(logEntry);
    super.subscribe(cb);
  }

  dispatch(action) {
    const logEntry = `Dispatcher диспатчит в подписанные store's экшн ${JSON.stringify(
      action
    )}`;
    this.logger.addEntry(logEntry);
    super.dispatch(action);
  }
}

export const loggingDispatcher = new LoggingDispatcher();
// dispatcher.setLogger(logger);

// export default Dispatcher;
