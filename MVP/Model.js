import Observer from "./Observer";

export default class Model extends Observer {
  constructor(initialData) {
    super();
    this.data = initialData;
    this.subedPresenters = [];
  }

  getData() {
    return this.data;
  }

  updateData(data) {
    this.data = data;
    this.subedPresenters.forEach(p => p.trigger("model_update"));
  }

  subscribePresenter(presenter) {
    this.subedPresenters.push(presenter);
  }
}
