/*!
  Design System (design.ehan.dev)
  Copyright (c) 2022-present Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://design.ehan.dev/license
*/

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.classList.remove(
    "purpleish",
    "snow",
    "owl",
    "owldark",
    "blurple",
    "cat",
    "catdim"
  );

  if (theme === "auto") {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      document.documentElement.classList.add("snow");
    } else {
      document.documentElement.classList.add("purpleish");
    }
  } else {
    document.documentElement.classList.add(theme);
  }
}

/* run function with localStorage to set to last used theme */
if (localStorage.getItem("theme")) {
  setTheme(localStorage.getItem("theme"));
} else {
  setTheme("auto")
}
