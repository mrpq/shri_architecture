import View from "../MVP/View";

const myView = new View({
  name: "IndexView",

  fields: {
    input: document.querySelector(".js-view-input"),
    submitBtn: document.querySelector(".js-view-submit-btn"),
    label: document.querySelector(".js-view-label")
  },

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

export default myView;
