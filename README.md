# EhUI

This is a "UI kit" with a bunch of css styles. It's customizable and themeable, so that we don't need to rewrite similar css for different projects.

## To-do

- improve textboxes (inputs & textarea)
- checkbox checkmarks
- document theming

## Project/folder structure

- `css/`
    - `ehui-auto.css` 
        - uses `@media (prefers-color-scheme`, has styles from `ehui-light.css` and `ehui-dark.css`
    - `ehui-dark.css`
        - compiled from `themes/dark.scss` (which imports `src/scss/ehui.scss`)
    - `ehui-light.css`
        - compiled from `themes/light.scss` (which imports `src/scss/ehui.scss`)
- `site/`
    - `css/`
        - minified css files
    - `fonts/`
        - `fonts.css`
            - defines @fontface-s that `css/ehui-<theme>.css` uses. ehui will still look okay without these fonts (`css/ehui-<theme>.css` falls back to sans-serif). if you want these fancy fonts, copy `site/fonts/` anywhere (`site/fonts/fonts.css` uses relative paths), find the css file and `<link rel="stylesheet` it.
- `src/`
    - `scss/`
        - `ehui.scss`
            - the scss files in `themes/` import ehui.scss, ehui.scss imports other scss files
    - `js/`
        - extra javascript utilities (these are extra, ehui works without javascript)
- `themes/`
    - each theme is a scss file that imports `src/scss/ehui.scss`, each theme gets compiled into a css file at `css/ehui-<theme>.css`

## Compiling, minifying, etc

Use `npm run build` to compile + minify the css, and update `site/`. There is a github action (`.github/workflows/build.yml`) that can run `npm run build` & commit + push the compiled css for you (it's useful if you're developing on a device that you can't run npm commands on).

`npm run build` does all the compiling, concatenating, and minifying in one command/npm script.

It just runs `npm run compile` and then `npm run minify`.

### Compiling

Use `npm run compile` to compile `css/ehui-dark.css`, `css/ehui-light.css`, and `css/ehui-auto.css`. There's also a GitHub action (`.github/workflows/compile.yml`) for this.

`css/ehui-dark.css` and `css/ehui-light.css` are compiled from the scss in `themes/` (the scss in themes uses the scss in `src/scss/`).

After those two are compiled, `css/ehui-auto.css` is made by concatenating `css/ehui-light.css` and `css/ehui-dark.css`, (`cat.js` does this), like this:
```css
/* styles from ehui-light.css */
@media (prefers-color-scheme: dark) {
    /* styles from ehui-dark.css */
}
```

Compiling ONLY updates `css/`. Use `npm run build` to update `css/` AND `site/css/`. (`site/css/` has minified css)

### Minifying css & updating site/

Use `npm run minify` to minify the css in `css/`, which will create `.min.css` files in `site/css/`. Run this after compiling (`npm run compile`) so that `css/` and `site/css/` are up-to-date.

This also has a GitHub action (`.github/workflows/minify.yml`) in case you can't run the npm command at the moment.
