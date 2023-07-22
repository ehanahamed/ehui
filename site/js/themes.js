function setTheme(theme) {
    /* function to be used in this script and in other settings menus */
    document.documentElement.classList.remove("purpleish", "owl", "cat", "catdim");
    if (theme) {
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }
}

/* run function with localStorage to set to last used theme */
setTheme(localStorage.getItem("theme"));
