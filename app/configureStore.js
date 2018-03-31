import Store from "../MyFlux/store";
import dispatcher from "../MyFlux/dispatcher";
// import { updateDataCb } from "./storeCallbacks";
import logger from "../app/logger";
import { DATA_SENT_SUCCESS } from "./actions/constants";

export const updateDataCb = function({ action, payload }) {
  switch (action) {
    case DATA_SENT_SUCCESS:
      this.state.data = payload;
    default:
  }
  this.emmit("change");
};

const configureStore = () => {
  const store = new Store();
  store.setLogger(logger);
  dispatcher.subscribe(updateDataCb.bind(store));
  return store;
};

export default configureStore;
