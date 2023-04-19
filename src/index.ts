import { Application, Text } from "pixi.js";

const main = () => {
  const app = new Application({ width: 400, height: 200 });
  document.body.append(app.view as unknown as string | Node);

  const text = new Text("Hello World!");
  text.style.fill = "#ffffff";
  app.stage.addChild(text);
};

window.addEventListener("load", main);
