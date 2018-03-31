export default class ActionCreator {
  constructor(dispatcher) {
    this.dispatcher = dispatcher;
  }

  createAction(action) {
    return data => this.dispatcher.dispatch({ action, payload: data });
  }
}
