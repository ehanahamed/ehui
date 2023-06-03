/*!
design (design.ehan.dev)
Copyright (c) 2023-present Ehan Ahamed and contributors
Licensed under the UPL-1.0 License
https://src.ehan.dev/design/LICENSE.txt
*/

setTheme(localStorage.getItem("theme"));
if (localStorage.getItem("theme") === "purpleish") {
    document.getElementById("headerOptionsThemedivPurpleish").checked = true;
} else if (localStorage.getItem("theme") === "owl") {
    document.getElementById("headerOptionsThemedivOwl").checked = true;
};
document.getElementById("headerMenuMenubutton").addEventListener("click", function () {
    document.getElementById('headerMenuMenudiv').classList.toggle('hide');
});
document.getElementById("headerOptionsLangbutton").addEventListener("click", function () {
    document.getElementById('headerOptionsLangdiv').classList.toggle('hide');
    document.getElementById('headerOptionsThemediv').classList.add('hide');
    document.getElementById('headerOptionsOptionsdiv').classList.add('hide');
});
document.getElementById("headerOptionsThemebutton").addEventListener("click", function () {
    document.getElementById('headerOptionsLangdiv').classList.add('hide');
    document.getElementById('headerOptionsThemediv').classList.toggle('hide');
    document.getElementById('headerOptionsOptionsdiv').classList.add('hide');
});
document.getElementById("headerOptionsOptionsbutton").addEventListener("click", function () {
    document.getElementById('headerOptionsLangdiv').classList.add('hide');
    document.getElementById('headerOptionsThemediv').classList.add('hide');
    document.getElementById('headerOptionsOptionsdiv').classList.toggle('hide');
});
function setTheme(theme) {
    document.documentElement.classList.remove("purpleish", "owl");
    document.documentElement.classList.add(theme);
}
document.getElementById("headerOptionsThemedivPurpleish").addEventListener("change", function (event) {
    setTheme("purpleish");
    localStorage.setItem("theme", "purpleish");
});
document.getElementById("headerOptionsThemedivOwl").addEventListener("change", function (event) {
    setTheme("owl");
    localStorage.setItem("theme", "owl");
});
document.getElementById("headerOptionsOptionsdivMin").addEventListener("change", function (event) {
    document.documentElement.classList.toggle("min")
});
