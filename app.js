import configureStore from "./app/configureStore";
import logger from "./app/logger";
import indexView from "./app/views/indexView";

const store = configureStore(logger);
store.subscribe(indexView);

indexView.subscribe("change", () => indexView.render(store.getState()));
