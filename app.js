import Model from "./MVP/Model";
import View from "./MVP/View";
import Presenter from "./MVP/Presenter";

// coздаем model
const myModel = new Model();

// создаем экземпляр view
const myView = new View({
  name: "IndexView", // имя вьюшки

  // в полях данного экземпляра поместим следующие DOM элементы
  fields: {
    input: document.querySelector(".js-view-input"),
    submitBtn: document.querySelector(".js-view-submit-btn"),
    label: document.querySelector(".js-view-label")
  },

  // публичный API нашего view, будет использоваться presenter'ом
  methods: {
    onSubmit: function() {
      if (this.presenter) {
        this.presenter.trigger("view_submit");
      }
    },
    getInputData: function() {
      return this.input.value;
    }
  },

  render: function(data) {
    this.label.innerHTML = data || "";
  },

  init: function() {
    this.submitBtn.addEventListener("click", this.onSubmit);
  }
});

// создаем presenter
const presenter = new Presenter({
  view: myView,
  model: myModel,
  events: {
    view_submit: function() {
      const data = this.view.getInputData();
      this.model.updateData(data);
    },
    model_update: function() {
      const data = this.model.getData();
      this.view.render(data);
    }
  }
});
