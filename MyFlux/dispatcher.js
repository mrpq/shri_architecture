import logger from "./Logger";

class Dispatcher {
  constructor() {
    this.callbacks = [];
  }

  subscribe(cb) {
    this.callbacks.push(cb);
  }

  dispatch(action) {
    this.callbacks.forEach(cb => cb(action));
  }
}

const dispatcher = new Dispatcher();
export default dispatcher;

class LoggingDispatcher extends Dispatcher {
  constructor() {
    super();
    this.logger = logger;
  }

  subscribe(cb) {
    const logEntry = `Store подписывается на события dispatcher`;
    this.logger.addEntry(logEntry);
    super.subscribe(cb);
  }

  dispatch(action) {
    const logEntry = `Dispatcher диспатчит в подписанные store's экшн ${JSON.stringify(
      action
    )}`;
    this.logger.addEntry(logEntry);
    super.dispatch(action);
  }
}

export const loggingDispatcher = new LoggingDispatcher();
// dispatcher.setLogger(logger);

// export default Dispatcher;
