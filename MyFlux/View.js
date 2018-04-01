import Observer from "./Observer";
import logger from "./Logger";
export default class View extends Observer {
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
