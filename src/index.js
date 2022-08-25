import Renderer from "./core/Renderer";
import Element from "./core/Element";
import Component from "./core/Component";

Renderer.render(
  new Element("p", null, "Hello CSR"),
  document.getElementById("app")
);
