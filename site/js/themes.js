/*!
  Design System (design.ehan.dev)
  Copyright (c) 2022-present Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://design.ehan.dev/license
*/

function setTheme(theme) {
  /* function to be used in this script and in other settings menus */
  document.documentElement.classList.remove(
    "purpleish",
    "owl",
    "owldark",
    "blurple",
    "cat",
    "catdim"
  );
  if (theme) {
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }
}

/* run function with localStorage to set to last used theme */
setTheme(localStorage.getItem("theme"));
