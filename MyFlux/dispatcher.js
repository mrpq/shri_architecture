import logger from "../app/logger";

class Dispatcher {
  constructor(logger = null) {
    this.callbacks = [];
    this.logger = logger;
  }

  subscribe(cb) {
    if (this.logger) {
      const logEntry = `Store подписывается на события dispatcher`;
      this.logger.addEntry(logEntry);
    }
    this.callbacks.push(cb);
  }

  dispatch(action) {
    if (this.logger) {
      const logEntry = `dispatcher отправляет в подписанные store экшн ${
        action.action
      } с данными ${JSON.stringify(action.payload)}`;
      this.logger.addEntry(logEntry);
    }

    this.callbacks.forEach(cb => cb(action));
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

const dispatcher = new Dispatcher();
dispatcher.setLogger(logger);

export default dispatcher;
