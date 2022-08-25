export default class Element {
  constructor() {}

  static createElement(type, props, ...children) {
    let el = ``;

    switch (typeof type) {
      case "string":
        el = document.createElement(type);
        el.innerHTML = children.join("");
        break;
      case "function":
        el = new type().render();
        el.innerHTML = children
          .map(child => {
            switch (typeof child) {
              case "string":
                return child;
              case "function":
                return child.render();
            }
          })
          .join("");
        break;
    }

    return el;
  }
}
