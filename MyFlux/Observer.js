/**
 * Класс от которого наследует View. Предоставляет API для подписки на события
 * и возможность триггерить события на экземплярах.
 *
 * @class Observer
 */
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

export default Observer;
