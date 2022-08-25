import Component from "../core/Component";
import Element from "../core/Element";

export default class NavBar extends Component {
  render() {
    return Element.createElement("div", null, "안녕하세요");
  }
}
