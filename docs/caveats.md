# Caveats/Annoying stuff

## Pseudo-elements (::before and ::after)

Always make sure to add `content: ""` or else, they just wont exist.
```css
something::before {
  content: "";
  /* ... */
}
```

## File inputs

Web browsers hate web developers, so they made it annoying to style the default `<input type="file"...` element.

### Current "sollution"

Regardless, the current solution isn't too "hacky". Simply hide the actual `input` element, and use the associated `label` element as a button.

However, hiding the `input` element is a bit more of a struggle, because simply using some css like `display: none;` will make the upload button useless to certain accisibility features.

Instead use a more "hacky" css approach:

```css
/* this is from src/scss/classes.scss */
.invisible {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0px;
  opacity: 0;
  overflow: hidden;
}
```

Now the `input` element is technically not hidden, the user can't see it, but the web browser thinks the user can.

Then the rest is simple, just make the label look like a button. You're html would look something like this:
```html
<div>
  <!-- no extra css is needed, all these classes are already in EhUI -->
  <label for="ID" ... class="button">Select File</label>
  <input type="file" ... id="ID" class="invisible" />
</div>
```

## Position sticky

`position: sticky` needs it's parent elements to have `height: auto`, or else it won't work properly
