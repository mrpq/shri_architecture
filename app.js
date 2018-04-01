import configureStore from "./app/configureStore";
import indexView from "./app/views/indexView";

const store = configureStore();
store.subscribe(indexView);
indexView.subscribe("store_updated", () => {
  const data = store.getState();
  indexView.render(data);
});
