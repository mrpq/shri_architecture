import logger from "../app/logger";

export default class Store {
  constructor(initialState = {}, logger = null) {
    this.subscribers = [];
    this.state = initialState;
    this.logger = logger;
  }

  emmit(eventName) {
    if (this.logger) {
      const logEntry = `Store отправляет подписчикам событие ${eventName}`;
      this.logger.addEntry(logEntry);
    }
    this.subscribers.forEach(s => s.trigger(eventName, this.getState()));
  }

  subscribe(sub) {
    if (this.logger) {
      const logEntry = `${sub} подписывается на события Store`;
      this.logger.addEntry(logEntry);
    }
    this.subscribers.push(sub);
  }

  getState() {
    return this.state;
  }

  setLogger(logger) {
    this.logger = logger;
  }
}
