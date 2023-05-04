
var components = {
    init: function () {
        for (var i = 0; i < document.getElementsByClassName("checkbox").length; i++) {
            document.getElementsByClassName("checkbox")[i].addEventListener(
                "click",
                function (event) {
                    event.target.classlist.toggle("select");
                }
            );
        }
    }
}
