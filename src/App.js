function App() {
  const app = document.getElementById("app");
  app.innerHTML = "Hello CSR";
  return app;
}

document.body.appendChild(App());
