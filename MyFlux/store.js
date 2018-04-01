import Observer from "./Observer";
import logger from "./Logger";

class Store {
  constructor(initialState = {}) {
    this.subscribers = [];
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  emmit(eventName) {
    this.subscribers.forEach(s => s.trigger(eventName));
  }

  subscribe(sub) {
    this.subscribers.push(sub);
  }
}

export class LoggingStore extends Store {
  constructor(initialState = {}) {
    super(initialState);
    this.logger = logger;
  }

  emmit(eventName) {
    const logEntry = `Store отправляет подписчикам событие ${eventName}`;
    this.logger.addEntry(logEntry);
    super.emmit(eventName);
  }

  subscribe(sub) {
    const logEntry = `${sub} подписывается на события Store`;
    this.logger.addEntry(logEntry);
    super.subscribe(sub);
  }
}

export default Store;
