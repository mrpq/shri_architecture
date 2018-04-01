import Observer from "./Observer";

export default class Presenter extends Observer {
  constructor(params) {
    super();
    const { view, model } = params;
    this.view = view;
    this.model = model;
    view.subscribePresenter(this);
    model.subscribePresenter(this);
    //
    Object.entries(params.events).forEach(([eventName, func]) => {
      this.subscribe(eventName, func.bind(this));
    });
  }
}
