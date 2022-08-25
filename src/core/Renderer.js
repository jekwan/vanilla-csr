export default class Renderer {
  constructor() {}

  static render(renderElement, renderTarget) {
    renderTarget.appendChild(renderElement);
  }
}
