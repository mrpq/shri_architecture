// import View from "../../MyFlux/View";
import { LoggingView } from "../../MyFlux/View";
import { actionDataSent } from "../actions/actions";

const sendToServer = data => {
  console.log(
    "Притворяемся, что отправляем данные на сервер... Данные успешно отправлены"
  );
  actionDataSent(data);
};

const indexView = new LoggingView({
  name: "MyView",

  fields: {
    input: document.querySelector(".js-view-input"),
    submitBtn: document.querySelector(".js-view-submit-btn"),
    label: document.querySelector(".js-view-label")
  },
  methods: {
    onSubmit: function(event) {
      event.preventDefault();
      const data = this.input.value;
      sendToServer(data);
    }
  },

  render: function(state) {
    const { data } = state;
    this.label.innerHTML = `Сервер принял данные: "${data}"`;
  },

  init: function() {
    this.submitBtn.addEventListener("click", this.onSubmit);
  }
});

export default indexView;
