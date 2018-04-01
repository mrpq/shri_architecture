/**
 * От данного класса наследуют все остальные классы.
 * Предоставляет возможность подписыватся на события и триггерить события.
 *
 * @class Observer
 */
class Observer {
  constructor() {
    this.eventHandlers = [];
  }

  trigger(eventName, data) {
    const eventHandler = this.eventHandlers
      .find(h => h.eventName === eventName)
      .cb.bind(this);
    eventHandler(data);
  }

  subscribe(eventName, cb) {
    this.eventHandlers.push({ eventName, cb });
  }
}

export default Observer;
