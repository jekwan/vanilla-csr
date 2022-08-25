export default class Element {
  constructor() {}

  static createElement(type, props, ...children) {
    let el = ``;

    switch (typeof type) {
      case "string":
        el = document.createElement(type);
        break;
      case "function":
        el = new type().render();
        break;
    }

    for (const child of children) {
      switch (typeof child) {
        case "string":
          const span = document.createElement("span");
          span.innerHTML = child;
          el.appendChild(span);
          break;
        case "function":
          el.appendChild(new child().render());
          break;
      }
    }

    return el;
  }
}
