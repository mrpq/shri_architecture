export default class View {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `View "${this.name}"`;
  }
}
