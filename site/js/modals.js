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
        var modalContent = document.createElement("div");
        modalContent.classList.add("content");
        if (params.contentClassList) {
            for (var i = 0; i < params.contentClassList.length; i++) {
                modalContent.classList.add(params.classList[i]);
            }
        }
        if (params.innerHtml) {
            modalContent.innerHTML = params.innerHtml;
        } else {
            if (params.title) {
                var modalContentTitle = document.createElement(
                    "p"
                );
                modalContentTitle.classList.add("h3");
                modalContentTitle.innerText = params.title;
                modalContent.appendChild(modalContentTitle);
            }
            if (params.body) {
                var modalContentBody = document.createElement(
                    "p"
                );
                modalContentBody.innerText = params.body;
                modalContent.appendChild(modalContentBody);
            }
            if (params.actions) {
                var modalContentActions = document.createElement(
                    "div"
                );
                modalContentActions.classList.add("flex");
                for (var i = 0; i < params.actions.length; i++) {
                    var modalContentActionsAction = document.createElement(
                        params.actions[i].tag
                    );
                    modalContentActionsAction.innerText = params.actions[i].text;
                    if (params.actions[i].tag === "a") {
                        modalContentActionsAction.classList.add("button");
                        modalContentActionsAction.href = params.actions[i].href;
                    } else if (params.actions[i].tag === "button") {
                        modalContentActionsAction.onclick = params.actions[i].onClick;
                    }
                    if (params.actions[i].classList) {
                        for (var i2 = 0; i2 < params.actions.length; i2++) {
                            modalContentActionsAction.classList.add(params.actions[i].classList[i2]);
                        }
                    }
                    modalContentActions.appendChild(modalContentActionsAction);
                }
                modalContent.appendChild(modalContentActions);
            }
        }
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        if (params.useList === false) {
            return modal
        } else {
            modals.list.push(modal);
            return modals.list.length - 1;
        }
    }
}
