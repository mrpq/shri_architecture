import configureStore from "./app/configureStore";
import indexView from "./app/views/indexView";

// создаем store
const store = configureStore();
// view подписывается на события store
store.subscribe(indexView);
// view устанавливает обработчик события "store_updated"
indexView.subscribe("store_updated", () => {
  const data = store.getState();
  indexView.render(data);
});
