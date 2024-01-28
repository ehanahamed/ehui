/*
  Ehan's UI Kit
  Copyright (c) Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://uikit.ehan.dev/LICENSE.txt
*/

var ehansUi = {
  version: "v0.4.0",
  setTheme: function (theme) {
    document.documentElement.classList.remove(
      "auto",
      "purpleish",
      "light",
      "owl",
      "blurple",
      "cat",
      "catdim"
    );
    document.documentElement.classList.add(theme);
    /* save theme to localstorage */
    localStorage.setItem("theme", theme);
  }   
}

/* get theme from localstorage */
if (localStorage.getItem("theme")) {
  ehansUi.setTheme(localStorage.getItem("theme"));
} else {
  ehansUi.setTheme("auto")
}
