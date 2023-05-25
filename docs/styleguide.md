# Styleguide

HTML form elements should NOT use the label as a wrapper, the label and input should be insdie a div:

```html
<div class="">
    <input type="" name"" id="ID" />
    <label for="ID">text</label>
</div>
```

Unclosed elements should use a slash at the end

```html
<element attribute="" />
```

## UI/UX

### When to use alt buttons

By default a button should NOT have the `alt` class.

However, if two buttons are next to eachother, and one button is the "default" action, the other buttons that are not the "default" action should have the `alt` class.

However, when a button is by itself it should almost never have the `alt` class.

### When to use buttons or links

Buttons are for "actions", links are to "bring you somewhere".

For example, on a page lets say you can save something, the component to save the thing should be a button. At the same time, somewhere else on the page you can go to the documentation. That component should be a link. However, the need for a button overrides the need for a link. For example, if the link to the documentation was related to saving, and was right next to the save button, both components should be buttons, even though the documentation isn't an "action". (buttons right next to links just doesn't look nice)

In another example, lets say you have a menu where all the menu items are links to pages. All of them should be links. However, if one of them is an action, they would all become buttons. (However, this specific example doesn't exist, because a menu (the `menu` class, inside a `header` tag) should not have any actions in the first place, only links leading to other places)
