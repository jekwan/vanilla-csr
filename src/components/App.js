import Component from "../core/Component";
import Element from "../core/Element";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    return Element.createElement(NavBar, null, NavBar);
  }
}
