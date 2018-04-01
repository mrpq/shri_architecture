class Observer {
  constructor() {
    this.eventHandlers = [];
  }
  trigger(eventName, data) {
    const eh = this.eventHandlers
      .find(h => h.eventName === eventName)
      .cb.bind(this);
    eh(data);
  }

  subscribe(eventName, cb) {
    this.eventHandlers.push({ eventName, cb });
  }
}
///////////////////////////////////////////////

class LoggingObserver extends Observer {
  constructor(logger = null) {
    super();
    this.logger = logger;
  }

  trigger(eventName, data) {
    const logEntry = `На подписчиках Store триггерится событие  "${eventName}". Подписчики получают обновленный стейт: ${JSON.stringify(
      data
    )}`;
    this.logger.addEntry(logEntry);
    super.trigger(eventName, cb);
  }

  subscribe(eventName, cb) {
    const logEntry = `View устанавливает обработчик события "${eventName}"`;
    logger.addEntry(logEntry);
    super.subscribe(eventName, cb);
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

export default Observer;
