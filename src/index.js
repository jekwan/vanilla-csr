function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello CSR";
  return element;
}

document.body.appendChild(component());
