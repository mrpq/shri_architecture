import logger from "./Logger";

export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  createAction(action) {
    return data => {
      this.dispatcher.dispatch({ action, payload: data });
    };
  }
}

export class LoggerActionCreator extends ActionCreator {
  constructor(dispatcher) {
    super(dispatcher);
    this.logger = logger;
  }

  createAction(action) {
    return data => {
      const logEntry = `Dispatcher диспатчит экшн ${JSON.stringify({
        action,
        payload: data
      })}`;
      this.logger.addEntry(logEntry);
    };
  }
}
