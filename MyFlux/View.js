import Observer from "./Observer";
import logger from "./Logger";

/**
 * Создает View
 *
 * @class View
 * @extends {Observer}
 */
export default class View extends Observer {
  /**
   * Creates an instance of View.
   * @param {string} params.name Имя для view
   * @param {object} params.methods Объект вида {'имя_метода': функция}
   *                                используется для определения публичного API view
   * @param {object} params.fields Объект вида {'имя_поля': значение}
   *                               используется для установки полей view.
   *                               В полях можно хранить какие угодно данные.
   * @param {fucntion} params.render Функция для отрисовки view на странице
   * @param {init} params.init Функция для инициализации view. Здесь подписываемся на события DOM, например
   * @memberof View
   */
  constructor(params) {
    super();
    const { name, methods, fields, render, init } = params;
    this.name = name;

    // Устанавливаем методы view
    Object.entries(methods).forEach(([meth, func]) => {
      this[meth] = func.bind(this);
    });

    // Устанавливаем поля view
    Object.entries(fields).forEach(([field, value]) => {
      this[field] = value;
    });

    // Устанавливаем view.render()
    this.render = render.bind(this);

    // Инициализируем view()
    init.bind(this)();
  }

  toString() {
    return `View "${this.name}"`;
  }
}

// LoggingView - тот же самый view, с методами обернутыми для логгирования.
export class LoggingView extends View {
  constructor(params) {
    super(params);
    this.logger = logger;
    const render = this.render;
    this.render = (...args) => {
      const logEntry = `${this} вызывает свой метод "render" для перерисовки с новыми данными`;
      this.logger.addEntry(logEntry);
      render(...args);
    };
  }

  trigger(eventName) {
    const logEntry = `На ${this} триггерится событие "${eventName}"`;
    this.logger.addEntry(logEntry);
    super.trigger(eventName);
  }

  subscribe(eventName, cb) {
    const logEntry = `${this} устанавливает обратотчик на событие "${eventName}".`;
    logger.addEntry(logEntry);
    super.subscribe(eventName, cb);
  }
}
