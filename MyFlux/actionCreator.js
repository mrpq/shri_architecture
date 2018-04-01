import logger from "./Logger";

/**
 * Вспомогательный класс для создания экшнов
 *
 * @export
 * @class ActionCreator
 */
export default class ActionCreator {
  /**
   * Creates an instance of ActionCreator.
   * @param {Dispatcher} dispatcher Диспатчер
   * @memberof ActionCreator
   */
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  /**
   *
   *
   * @param {string} action Название экшна (напр ADD_TODO)
   * @returns {function} Экшн креэйтор. В качестве агрумента ожидает данные для payload
   * @memberof ActionCreator
   */
  createAction(action) {
    return data => {
      this.dispatcher.dispatch({ action, payload: data });
    };
  }
}
