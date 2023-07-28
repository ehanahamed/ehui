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

They say they do this for "saftey" so the "user doesn't accidentally upload stuff cause..." but all their explainations are just excuses cause they're actually too lazy and egotistical to improve any code they already wrote. "BuT ChAnGiNG iT WiLl cAuSE BrEAkiNG CHaNgES to SoME SiTEs", they'll say. (It won't btw cause changing something that doesnt remove or change any existing features won't break anything, but they like to pretend it will.)

### Current "sollution"

Regardless, the current solution isn't too "hacky". Simply hide the actual `input` element, and use the associated `label` element as a button.

However, hiding the `input` element is a bit more of a struggle, because simply using some css like `display: none;` will make the upload button useless to certain accisibility features.

Instead use a more "hacky" css approach:

```css
/*
this css class is in designsys (in utils.css)
*/
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

Then the rest is simple, just make the label look like a button. Since designsys already has a `.button` class, its super easy. You're html would look something like this:

```html
<div>
  <!-- no extra css is needed, all these classes are already in designsys -->
  <label for="ID" ... class="button">Select File</label>
  <input type="file" ... id="ID" class="invisible" />
</div>
```

The above html is how file inputs are supposed to be written when using designsys's css.

## position: sticky

web browsers decided that `position: sticky` will litterally just behave randomly if any of it's parent elements do not have `height: auto`, there is no reason, logic, or explanation to this nonsense, they just do it cause its funny to them when stuff doesn't work as intended.
