import Element from "./Element";

export default class Component {
  props;
  state;

  constructor(props) {
    this.props = props;
  }

  render() {
    return ``;
  }

  setState(state) {
    this.state = { ...this.state, ...state };
  }
}
