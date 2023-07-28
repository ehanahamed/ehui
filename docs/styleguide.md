# Styleguide

Use `0px` instead of just `0` (even though `0` is allowed in css, `0px` looks better)

```css
element {
  property: 0px;
}
/* do this even when another unit is next to it */
anotherelement {
  anotherproperty: 1rem 0px 3rem 2rem;
}
```

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

Use `<br />`s as shown in [`./spacing.md`](./spacing.md)

### HTML IDs

IDs for headers and IDs for other elements are much different, headers should have "user-readable" IDs, while other elements who's IDs are used in JS should have "structure-sensitive" IDs.

HTML IDs for headers should have a user-understandable ID. For example:

```html
<h2>Settings</h2>
<h3 id="appearance">Appearance</h3>
<element>...</element>
<h3 id="accesibility">Accesibility</h3>
<element>...</element>
<something>
  <h3 id="account">Account</h3>
  <element>...</element>
</something>
```

HTML IDs for elements with JavaScript functionality should be likie:

```html
<div class="header">
  <div class="menu">
    <button id="headerMenuSettingsbutton">Show Settings</button>
    <div id="headerMenuSettingssection">...</div>
  </div>
</div>
<something>
  <element id="somethingElement">...</element>
</something>
```

Notice how when two elements have a similar name, like the settings button and the settings section, you just add another descriptive word. the settings button is named `settingsbutton` and the settings section is `settingssection`. The parent elements are also listed in the full id, so that even if theres another settings button somewhere else, you'll never get confused.

## UI/UX

### When to use alt buttons

By default a button should NOT have the `alt` class.

However, if two buttons are next to eachother, and one button is the "default" action, the other buttons that are not the "default" action should have the `alt` class.

However, when a button is by itself it should almost never have the `alt` class.

### When to use buttons or links

Buttons are for "actions", links are to "bring you somewhere".

For example, on a page lets say you can save something, the component to save the thing should be a button. At the same time, somewhere else on the page you can go to the documentation. That component should be a link. However, the need for a button overrides the need for a link. For example, if the link to the documentation was related to saving, and was right next to the save button, both components should be buttons, even though the documentation isn't an "action". (buttons right next to links just doesn't look nice)

In another example, lets say you have a menu where all the menu items are links to pages. All of them should be links. However, if one of them is an action, they would all become buttons. (However, this specific example doesn't exist, because a menu (the `menu` class, inside a `header` tag) should not have any actions in the first place, only links leading to other places)

Buttons should always be in a new line, usualy inside a flexbox (`<div class="flex ...`), however links should almost NEVER be on a new line, if theres a blob of text corresponding with a link, the link goes on the same line as the text, or one newline, but never inside a flex div like a button or button "group" would.
