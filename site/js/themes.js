/*!
  Design System (design.ehan.dev)
  Copyright (c) 2022-present Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://design.ehan.dev/license
*/

function setTheme(theme) {
  document.documentElement.classList.remove(
    "auto",
    "purpleish",
    "snow",
    "owl",
    "owldark",
    "blurple",
    "cat",
    "catdim"
  );
  document.documentElement.classList.add(theme);
  localStorage.setItem("theme", theme);
}

/* run function with localStorage to set to last used theme */
if (localStorage.getItem("theme")) {
  setTheme(localStorage.getItem("theme"));
} else {
  setTheme("auto")
}
