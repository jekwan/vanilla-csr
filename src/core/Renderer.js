export default class Renderer {
  constructor() {}

  render(renderElement, renderTarget) {
    renderTarget.appendChild(renderElement.el);
  }
}
