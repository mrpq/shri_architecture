import View from "../View";
import EventEmitter from "../../MyFlux/eventEmitter";
import logger from "../logger";
import { actionDataSent } from "../actions/actions";

const indexView = new View("IndexView");
const eventEmitter = new EventEmitter(logger);
eventEmitter.mixin(indexView);

const input = document.querySelector(".js-view-input");
const submitBtn = document.querySelector(".js-view-submit-btn");
const label = document.querySelector(".js-view-label");

indexView.input = input;
indexView.submitBtn = submitBtn;
indexView.label = label;

const sendToServer = data => {
  console.log(
    "Претворяемся, что отправляем данные на сервер... Данные успешно отправлены"
  );
  actionDataSent(data);
};

function onSubmit(event) {
  event.preventDefault();
  const data = this.input.value;
  sendToServer(data);
}

function onStoreChange(state) {
  const { data } = state;
  this.label.innerHTML = `Сервер принял данные: <${data}>`;
}

indexView.submitBtn.addEventListener("click", onSubmit.bind(indexView));
indexView.subscribe("change", onStoreChange.bind(indexView));

export default indexView;
