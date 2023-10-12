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
                title: "title text", // optional
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
                classList: [ // optional
                    "array",
                    "of",
                    "classes"
                ]
            }
            or can be
            {
                innerHtml: "entire innerHTML of modal",
                classList: [ //optional
                    "classes"
                ]
            }
        */
        var modal = document.createElement("div");
        modal.classList.add("modal");
        if (params.html) {
            modal.innerHTML = params.html;
        } else {
            if (params.title) {
                var modalTitle = document.createElement(
                    "p"
                );
                modalTitle.classList.add("h3");
                modalTitle.innerText = params.title;
                modal.appendChild(modalTitle);
            }
            var modalBody = document.createElement(
                "p"
            )
            
        }
    }
}
