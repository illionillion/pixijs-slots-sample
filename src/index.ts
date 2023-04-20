import { Application, Graphics, Text } from "pixi.js";

/**
 * ウィンドウ横幅初期値
 */
const initialWidth = 400;
/**
 * ウィンドウ横幅初期値
 */
const initialHeight = 200;

const main = () => {
  /**
   * Applicationオブジェクト生成
   */
  const app = new Application({ width: initialWidth, height: initialHeight });
  document.body.append(app.view as HTMLCanvasElement); // DOMにマウント

  /**
   * リサイズ用
   */
  const onResize = () => {
    app.view.width = window.innerWidth;
    app.view.height = window.innerHeight;
    app.screen.width = window.innerWidth;
    app.screen.height = window.innerHeight;
  };
  onResize(); // 初回リサイズ
  window.addEventListener("resize", onResize); // 登録

  // const loader = PIXI.loader.shared; // 使えない

  const text = new Text("Hello World!");
  text.style.fill = "#ffffff";
  text.anchor.set(0.5);
  text.x = app.screen.width / 2;
  text.y = app.screen.height / 2;

  const graphics = new Graphics();
  graphics.beginFill(0xff0000);
  graphics.drawRect(0, 0, 100, 100);
  graphics.endFill();
  graphics.x = 0;
  graphics.y = 0;
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
    text.x = app.screen.width / 2;
    text.y = app.screen.height / 2;
  });
};

window.addEventListener("load", main);
