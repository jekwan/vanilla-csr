export default class Element {
  el;

  constructor(type, props, ...children) {
    switch (typeof type) {
      case "string":
        this.el = document.createElement(type);
        this.el.innerHTML = children.join("");
        break;
      case "function":
        this.el = document.createElement(type);
        this.el.innerHTML = children
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
  }
}
