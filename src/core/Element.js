export default class Element {
  el;

  constructor(type, [props], [...children]) {
    this.el = document.createElement(type);
  }
}