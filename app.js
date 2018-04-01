import configureStore from "./app/configureStore";
import indexView from "./app/views/indexView";

const store = configureStore();
store.subscribe("change", () => {
  indexView.trigger("change");
});
indexView.subscribe("change", () => {
  const data = store.getState();
  indexView.render(data);
});
