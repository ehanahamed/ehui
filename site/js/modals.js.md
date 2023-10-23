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
