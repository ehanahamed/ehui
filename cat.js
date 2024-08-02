const fs = require("node:fs");
let css = "";

function addLight() {
    fs.readFile("./css/ehui-light.css", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        css += data;
        addDark();
      }
    });
}

function addDark() {
    css += "\n" +
    "@media (prefers-color-scheme: dark) {" +
    "\n";
    fs.readFile("./css/ehui-light.css", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      } else {
        css += data;
        css += "\n"+
        "}" +
        "\n"
        writeCss();
      }
    });
}

function writeCss() {
    fs.writeFile("./css/ehui-auto.css", css, function (err) {
        if (err) {
            console.error(err);
            return;
        }
    })
}

addLight();
