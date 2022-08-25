import Renderer from "./core/Renderer";
import Element from "./core/Element";
import App from "./components/App";

Renderer.render(Element.createElement(App), document.getElementById("app"));
