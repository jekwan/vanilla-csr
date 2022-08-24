export default class Component {
  renderTarget;
  state;

  constructor(renderTarget) {
    this.renderTarget = renderTarget;
    this.render();
  }
  template() {
    return ``;
  }
  render() {
    this.renderTarget.innerHTML = this.template();
  }
  setState(state) {
    this.state = { ...this.state, ...state };
    this.render();
  }
}
