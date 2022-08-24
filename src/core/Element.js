export default class Element {
  el;

  constructor(type, props, ...children) {
    this.el = document.createElement(type);
    this.el.innerHTML = children.join("");
  }
}
