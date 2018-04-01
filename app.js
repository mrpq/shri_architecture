import Model from "./MVP/Model";
import Presenter from "./MVP/Presenter";
import myView from "./mvpapp/myView";

const model = new Model();
const presenter = new Presenter({
  view: myView,
  model,
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
