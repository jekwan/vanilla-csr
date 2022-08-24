export default class Renderer {
  renderElement;
  renderTarget;

  constructor(renderElement, renderTarget) {
    this.renderElement = renderElement;
    this.renderTarget = renderTarget;
  }

  render() {
    this.renderTarget.appendChild(this.renderElement.el);
  }
}
