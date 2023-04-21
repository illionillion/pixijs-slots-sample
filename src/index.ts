import {
  AnimatedSprite,
  Application,
  Assets,
  Container,
  Spritesheet,
} from "pixi.js";

/**
 * ウィンドウ横幅初期値
 */
const initialWidth = 400;
/**
 * ウィンドウ横幅初期値
 */
const initialHeight = 200;

const main = async () => {
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

  const playerTexture = await Assets.load("./assets/image/player/player.png"); // これでシートJSONの読み込みはできる
  console.log(playerTexture);
  const playerSprite = await Assets.load(
    "./assets/image/player/player.sprite.json"
  );
  const playerObject = new Spritesheet(playerTexture, playerSprite.data); // playerSprite.data でなんかいけた
  console.log(await playerObject.parse());
  const frontTextures = [
    playerObject.textures["front-1.png"],
    playerObject.textures["front-2.png"],
  ];
  const frontAnimation = new AnimatedSprite(frontTextures);
  frontAnimation.animationSpeed = 0.1;
  frontAnimation.play();
  frontAnimation.scale.x = 3;
  frontAnimation.scale.y = 3;

  const backTextures = [
    playerObject.textures["back-1.png"],
    playerObject.textures["back-2.png"],
  ];
  const backAnimation = new AnimatedSprite(backTextures);
  backAnimation.animationSpeed = 0.1;
  backAnimation.play();
  backAnimation.scale.x = 3;
  backAnimation.scale.y = 3;

  const leftTextures = [
    playerObject.textures["left-1.png"],
    playerObject.textures["left-2.png"],
  ];
  const leftAnimation = new AnimatedSprite(leftTextures);
  leftAnimation.animationSpeed = 0.1;
  leftAnimation.play();
  leftAnimation.scale.x = 3;
  leftAnimation.scale.y = 3;

  const rightTextures = [
    playerObject.textures["right-1.png"],
    playerObject.textures["right-2.png"],
  ];
  const rightAnimation = new AnimatedSprite(rightTextures);
  rightAnimation.animationSpeed = 0.1;
  rightAnimation.play();
  rightAnimation.scale.x = 3;
  rightAnimation.scale.y = 3;

  const playerAnimatedSprite = new AnimatedSprite(frontTextures);
  playerAnimatedSprite.animationSpeed = 0.1;
  playerAnimatedSprite.play();

  // キャラクターの初期方向を前向きに設定する
  let currentAnimation = frontAnimation;

  // キャラクターを画面中央に配置する
  const character = new Container();
  character.addChild(
    frontAnimation,
    leftAnimation,
    rightAnimation,
    backAnimation
  );
  character.position.set(app.screen.width / 2, app.screen.height / 2);

  // キー入力に応じてキャラクターを動かす
  document.addEventListener("keydown", (e) => {
    const keyCode = e.code;
    switch (keyCode) {
      case "ArrowUp":
        e.preventDefault();
        currentAnimation = backAnimation;
        character.y -= 10;
        break;
      case "ArrowDown":
        e.preventDefault();
        currentAnimation = frontAnimation;
        character.y += 10;
        break;
      case "ArrowLeft":
        e.preventDefault();
        currentAnimation = leftAnimation;
        character.x -= 10;
        break;
      case "ArrowRight":
        e.preventDefault();
        currentAnimation = rightAnimation;
        character.x += 10;
        break;
    }
    currentAnimation.play();
  });

  // ゲームループを開始する
  app.ticker.add(() => {});

  // キャラクターを描画領域に追加
  app.stage.addChild(character);
};

window.addEventListener("load", main);
