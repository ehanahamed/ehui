/*!
  design.ehan.dev
  Copyright (c) Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://design.ehan.dev/LICENSE.txt
*/

var modals = {
    create: function (params) {
        /*
            params can be
            {
                title: "title text",
                body: "body text",
                actions: [
                    [
                        "action text",
                        onclickFunc(),
                        [
                            "optional",
                            "classes"
                        ]
                    ],
                    [
                        "button text",
                        onclickFunc()
                    ]
                ]
            }
            or can be
            {
                html: "entire innerHTML of modal"
            }
        */
        var modal = document.createElement("div");
        modal.classList.add("modal");
        if (params.html) {
            modal.innerHTML = params.html;
        } else {
            var modalTitle = document.createElement(
                "h1"
            );
        }
    }
}
