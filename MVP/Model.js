import Observer from "./Observer";

export default class Model extends Observer {
  /**
   * Creates an instance of Model.
   * @param {any} initialData
   * @memberof Model
   */
  constructor(initialData) {
    super();
    this.data = initialData;
    this.subedPresenters = [];
  }

  /**
   * API для получения данных из модели
   *
   * @returns данные модели
   * @memberof Model
   */
  getData() {
    return this.data;
  }

  /**
   * API для обновления данных модели.
   * Наследуя от Model и переопределяя updateData можно добавлять валидацию
   * и логику обработки данных.
   * Данный метод триггерит событие 'model_update' на подписанных презентерах
   *
   * @param {any} data
   * @memberof Model
   */
  updateData(data) {
    this.data = data;
    this.subedPresenters.forEach(p => p.trigger("model_update"));
  }

  /**
   * API для подписки презентеров на события model
   *
   * @param {any} presenter
   * @memberof Model
   */
  subscribePresenter(presenter) {
    this.subedPresenters.push(presenter);
  }
}
