import Store from "../MyFlux/Store";
import dispatcher from "../MyFlux/Dispatcher";
import { DATA_SENT_SUCCESS } from "./actions/constants";

export const updateDataCb = function({ action, payload }) {
  switch (action) {
    case DATA_SENT_SUCCESS:
      this.state.data = payload;
    default:
  }
  this.trigger("change");
};

const configureStore = () => {
  const store = new Store();
  dispatcher.subscribe(updateDataCb.bind(store));
  return store;
};

export default configureStore;
