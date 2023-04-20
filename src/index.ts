import { Application, Graphics, Text } from "pixi.js";

const main = () => {
  const app = new Application({ width: 400, height: 200 });
  // document.body.append(app.view as unknown as string | Node);
  document.body.append(app.view as HTMLCanvasElement);

  const text = new Text("Hello World!!");
  text.style.fill = "#ffffff";
  text.anchor.set(0.5);
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;
  
  const graphics = new Graphics();
  graphics.beginFill(0xff0000);
  graphics.drawRect(0, 0, 100, 100);
  graphics.endFill();
  graphics.x = 100;
  graphics.y = 100;
  app.stage.addChild(graphics);
  app.stage.addChild(text);
  // ゲームループを開始する
  app.ticker.add(() => {
    graphics.x += 1;
    graphics.y += 1;
    if (graphics.x > app.screen.width) {
      graphics.x = 0;
    }
    if (graphics.y > app.screen.height) {
      graphics.y = 0;
    }
  });
};

window.addEventListener("load", main);
