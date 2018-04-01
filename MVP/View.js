import Observer from "./Observer";

export default class View extends Observer {
  constructor(params) {
    super();
    const { name, methods, fields, render, init } = params;
    this.name = name;

    Object.entries(methods).forEach(([meth, func]) => {
      this[meth] = func.bind(this);
    });

    this.render = render.bind(this);

    Object.entries(fields).forEach(([field, value]) => {
      this[field] = value;
    });

    init.bind(this)();
  }

  subscribePresenter(presenter) {
    this.presenter = presenter;
  }

  toString() {
    return `View "${this.name}"`;
  }
}
