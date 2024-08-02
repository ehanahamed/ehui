# EhUI

This is a "UI kit" with a bunch of css styles. It's customizable and themeable, so that we don't need to rewrite similar css for different projects.

## To-do

- improve textboxes (inputs & textarea)
- checkbox checkmarks
- document using scss vars to build a custom ehui.css
- document creating a theme css file

## Project/folder structure

- `css/`
    - `ehui-auto.css` 
        - uses `@media (prefers-color-scheme`, has styles from `ehui-light.css` and `ehui-dark.css`
    - `ehui-dark.css`
        - compiled from `themes/dark.scss` (which imports `src/scss/ehui.scss`)
    - `ehui-light.css`
        - compiled from `themes/light.scss` (which imports `src/scss/ehui.scss`)
- `site/`
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

Use `npm run compile` to compile `css/ehui-dark.css` and `css/ehui-light.css` from the scss in `themes/` & `src/scss/`. It just uses `npx sass`, its in package.json

There's also a GitHub action (`.github/workflows/compile.yml`) that can run `npm run compile` & commit + push the compiled css for you. This is useful if you're developing on a device that you can't run npm commands on.

### ehui-auto.css

`css/ehui-auto.css` is made by copying `css/ehui-light.css` and `css/ehui-dark.css` (after those two css files are compiled from their scss source code)
```css
/* styles from ehui-light.css */
@media (prefers-color-scheme: dark) {
    /* styles from ehui-dark.css */
}
```

`css/ehui-auto.css` is minified into `site/css/ehui-auto.min.css`, ehui-auto.min.css is used by the demo/testing html

that means you should
1. first compile (`npm run compile` or the github action) the other css files
2. copy the compiled css into ehui-auto.css
3. then minify (`npm run minify` or the github action)

### Minifying css & updating site/

Use `npm run minify` to minify the css in `css/`, which will create `.min.css` files in `site/css/`. Run this after compiling (`npm run compile`) so that the minified css in `site/css/` matches the css in `css/` which is compiled from `themes/` and `/src/scss/`.

This also has a GitHub action (`.github/workflows/minify.yml`) in case you can't run the npm command at the moment.
