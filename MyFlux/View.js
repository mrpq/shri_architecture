import Observer from "./Observer";
export default class View extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  toString() {
    return `View "${this.name}"`;
  }
}
