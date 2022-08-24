export default class Component {
  renderTarget;
  state;

  constructor(renderTarget) {
    this.renderTarget = renderTarget;
  }

  render() {
    return ``;
  }

  setState(state) {
    this.state = { ...this.state, ...state };
  }
}
