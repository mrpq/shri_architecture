import Observer from "./Observer";

class Store extends Observer {
  constructor(initialState = {}) {
    super();
    this.state = initialState;
  }

  getState() {
    return this.state;
  }

  setLogger(logger) {
    this.logger = logger;
  }
}

export default Store;
