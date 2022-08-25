import Component from "../core/Component";
import Element from "../core/Element";

export default class App extends Component {
  render() {
    return Element.createElement("div", null, "Hello App");
  }
}
