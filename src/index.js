import Renderer from "./core/Renderer";
import Element from "./core/Element";

const renderer = new Renderer();
renderer.render(
  new Element("p", null, "Hello CSR"),
  document.getElementById("app")
);
