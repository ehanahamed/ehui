/*
  EhUI
  Copyright (c) Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://ehui.ehan.dev/LICENSE.txt
*/

var ehUi = {
  version: "v0.4.0",
  setTheme: function (theme) {
    document.documentElement.classList.remove(
      "auto",
      "purpleish",
      "light",
      "darker"
    );
    document.documentElement.classList.add(theme);
    /* save theme to localstorage */
    localStorage.setItem("theme", theme);
  }   
}

/* get theme from localstorage */
if (localStorage.getItem("theme")) {
  ehUi.setTheme(localStorage.getItem("theme"));
} else {
  ehUi.setTheme("auto")
}
