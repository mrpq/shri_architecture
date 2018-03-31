import logger from "../app/logger";

class EventEmitter {
  constructor(logger = null) {
    this.logger = logger;
  }
  mixin(obj) {
    if (this.logger) {
      const logEntry = `Добавляем ${obj} функционал для подписки на события`;
      this.logger.addEntry(logEntry);
    }
    obj.eventHandlers = [];
    obj.trigger = this._trigger(this.logger).bind(obj);
    obj.subscribe = this._subscribe(this.logger).bind(obj);
  }

  _trigger(logger) {
    return function(eventName, data) {
      if (logger) {
        const logEntry = `На подписчиках Store триггерится событие  "${eventName}". Подписчики получают обновленный стейт: ${JSON.stringify(
          data
        )}`;
        logger.addEntry(logEntry);
      }
      console.log(">>>>", this.eventHandlers, eventName, data);
      const eh = this.eventHandlers
        .find(h => h.eventName === eventName)
        .cb.bind(this);
      eh(data);
    };
  }

  _subscribe(logger) {
    return function(eventName, cb) {
      if (logger) {
        const logEntry = `View устанавливает обработчик события "${eventName}"`;
        logger.addEntry(logEntry);
      }
      this.eventHandlers.push({ eventName, cb });
    };
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

export default EventEmitter;
