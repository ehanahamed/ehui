/*!
  design.ehan.dev
  Copyright (c) Ehan Ahamed and contributors
  Licensed under the UPL-1.0 License
  https://design.ehan.dev/LICENSE.txt
*/

var modals = {
    list: [],
    create: function (params) {
        var modal = document.createElement("div");
        modal.classList.add("modal");
        if (params.classList) {
            for (var i = 0; i < params.classList.length; i++) {
                modal.classList.add(params.classList[i]);
            }
        }
        if (params.innerHtml) {
            modal.innerHTML = params.innerHtml;
        } else {
            if (params.title) {
                var modalTitle = document.createElement(
                    "p"
                );
                modalTitle.classList.add("h3");
                modalTitle.innerText = params.title;
                modal.appendChild(modalTitle);
            }
            if (params.body) {
                var modalBody = document.createElement(
                    "p"
                );
                modalBody.innerText = params.body;
                modal.appendChild(modalBody);
            }
            if (params.actions) {
                var modalActions = document.createElement(
                    "div"
                );
                modalActions.classList.add("flex");
                for (var i = 0; i < params.actions.length; i++) {
                    var modalActionsAction = document.createElement(
                        params.actions[i][0]
                    );
                    modalActionsAction.innerText = params.actions[i][1];
                    if (params.actions[i][0] === "a") {
                        modalActionsAction.classList.add("button");
                        modalActionsAction.href = params.actions[i][2];
                    } else if (params.actions[i][0] === "button") {
                        modalActionsAction.onclick = params.actions[i][2];
                    }
                    if (params.actions[i][3]) {
                        for (var i2 = 0; i2 < params.actions.length; i2++) {
                            modalActionsAction.classList.add(params.actions[i][3][i2]);
                        }
                    }
                }
            }
        }
    }
}
