/*!
designsys (designsys.ehan.dev)
Copyright (c) 2023-present Ehan Ahamed and contributors
Licensed under the UPL-1.0 License
https://src.ehan.dev/designsys/LICENSE.txt
*/

var components = {
    init: function () {
        for (var i = 0; i < document.getElementsByClassName("checkbox").length; i++) {
            document.getElementsByClassName("checkbox")[i].tabindex = 0;
            document.getElementsByClassName("checkbox")[i].addEventListener(
                "click",
                function (event) {
                    event.target.classList.toggle("select");
                }
            );
            document.getElementsByClassName("checkbox")[i].addEventListener(
                "keyup",
                function (event) {
                    event.target.classList.toggle("select");
                }
            )
        }
    }
}

components.init(); // temporary
