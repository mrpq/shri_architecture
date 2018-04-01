// import Store from "../MyFlux/Store";
import { LoggingStore } from "../MyFlux/Store";
// import dispatcher from "../MyFlux/Dispatcher";
import { loggingDispatcher } from "../MyFlux/Dispatcher";
import { DATA_SENT_SUCCESS } from "./actions/constants";

export const updateDataCb = function({ action, payload }) {
  switch (action) {
    case DATA_SENT_SUCCESS:
      this.state.data = payload;
    default:
  }
  this.emmit("store_updated");
};

const configureStore = () => {
  const store = new LoggingStore();
  loggingDispatcher.subscribe(updateDataCb.bind(store));
  return store;
};

export default configureStore;
