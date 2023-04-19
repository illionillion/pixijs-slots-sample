import { Application, Text } from "pixi.js";
var main = function () {
    var app = new Application({ width: 400, height: 200 });
    document.body.append(app.view);
    var text = new Text("Hello World!");
    text.style.fill = "#ffffff";
    app.stage.addChild(text);
};
window.addEventListener("load", main);
//# sourceMappingURL=index.js.map