import View from "../../MyFlux/View";
import { actionDataSent } from "../actions/actions";

const indexView = new View("IndexView");

indexView.input = document.querySelector(".js-view-input");
indexView.submitBtn = document.querySelector(".js-view-submit-btn");
indexView.label = document.querySelector(".js-view-label");

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
