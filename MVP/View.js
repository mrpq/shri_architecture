import Observer from "./Observer";

/**
 * Создает views
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

  /**
   * API для подписки презентера на события view
   *
   * @param {any} presenter
   * @memberof View
   */
  subscribePresenter(presenter) {
    this.presenter = presenter;
  }

  toString() {
    return `View "${this.name}"`;
  }
}
