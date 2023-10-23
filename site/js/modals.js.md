# modals.js

This script has a bunch of functions to easily manage modals using js.

## .list

The `modals.list` property is an array of all modals created using `modals.create()`, so that these modals can be manipulated later.

## .create()

The `modals.create()` function accepts one parameter, an object.

### Parameters & usage

`modals.create()` accepts a single parameter, an object.

The object looks like this:

```javascript
modals.create({
  title: "string",
  body: "string",
  actions: [
    {
      tag: "string", /* either "a" or "button" */
      text: "string", /* button or link-button text */
      href: "string" /* only used if .tag is "a" */
      onClick: func() /* only used if .tag is "button" */
      classList: [] /* array of optional classes as strings */
      /* if [0] is "a", ".button" class gets added automatically */
    },
  ],
  classList: [] /* array of optional modal classes as strings */
  /* ".modal" is added automatically */
});

/*
  or, if complex-er html is needed, use:
*/
modals.create({
  innerHtml: "string",
  classList: [] /* array of optional modal classes as strings */
  /* ".modal" is added automatically */
})
```

An example (will be) below:
```
work in progress
```

### Source code

The code below begins at line `11` of `site/js/modals.js`

```javascript
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
```
