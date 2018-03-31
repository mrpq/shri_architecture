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
  console.log(`Создаем экншн "DATA_SENT_SUCCESS" c payload ${data}`);
  actionDataSent(data);
};

function onSubmit(event) {
  event.preventDefault();
  const data = this.input.value;
  sendToServer(data);
}

function render(state) {
  const { data } = state;
  this.label.innerHTML = `Сервер принял данные: <${data}>`;
}

indexView.render = render.bind(indexView);

indexView.submitBtn.addEventListener("click", onSubmit.bind(indexView));

export default indexView;
