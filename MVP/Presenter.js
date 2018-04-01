import Observer from "./Observer";

/**
 * Класс презентера. Объекты данного класса ответственны за обработку событий
 * на наших view и моделях. Слушает события возникающие на view,
 * вызывает обработчики, переданные в параметрах конструктора
 *
 * @class Presenter
 * @extends {Observer}
 */
export default class Presenter extends Observer {
  /**
   * Creates an instance of Presenter.
   * @param {Model} params.model - модель
   * @param {View} params.view - view
   * @param {object} params.events - Объект вида {имя_события: обработчик}.
   *
   * @memberof Presenter
   */
  constructor(params) {
    super();
    const { view, model, events } = params;
    this.view = view;
    this.model = model;
    view.subscribePresenter(this);
    model.subscribePresenter(this);
    // Конструкция ниже подписывает презентер на события из params.events
    Object.entries(events).forEach(([eventName, func]) => {
      this.subscribe(eventName, func.bind(this));
    });
  }
}
