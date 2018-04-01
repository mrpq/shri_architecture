// import Observer from "./Observer";
// class Dispatcher extends Observer {
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
  constructor(logger = null) {
    super();
    this.logger = logger;
  }

  subscribe(cb) {
    const logEntry = `Store подписывается на события dispatcher`;
    this.logger.addEntry(logEntry);
    super.subscribe(cp);
  }

  dispatch(action) {
    const logEntry = `dispatcher отправляет в подписанные store экшн ${
      action.action
    } с данными ${JSON.stringify(action.payload)}`;
    this.logger.addEntry(logEntry);
    super.subscribe(action);
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

// const dispatcher = new Dispatcher();
// dispatcher.setLogger(logger);

// export default Dispatcher;
