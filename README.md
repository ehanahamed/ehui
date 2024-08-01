# EhUI

This is a "UI kit" with a bunch of css styles. It's customizable and themeable, so that we don't need to rewrite similar css for different projects.

## To-do

- improve textboxes (inputs & textarea)
- checkbox checkmarks
- document using scss vars to build a custom ehui.css
- document creating a theme css file

## Project/folder structure

- `css/`
    - `ehui.css`
        - css file compiled from `src/scss/`, use it with a css file from `themes/` to define it's colors (`css/ehui.css` has no colors without a css file from `themes/`)
- `site/`
    - `fonts/`
        - `fonts.css`
            - defines @fontface-s that `css/ehui.css` uses. ehui will still look okay without these fonts (`css/ehui.css` falls back to sans-serif). if you want these fancy fonts, copy `site/fonts/` anywhere (`site/fonts/fonts.css` uses relative paths), find the css file and `<link rel="stylesheet` it. TODO: DOCUMENT USING DIFFERENT FONTS BY COMPILING SASS WITH ALTERED FONT-FAMILY SCSS VAR
- `src/`
    - `scss/`
        - `ehui.scss`
            - the "main" scss file that imports the other scss files, it gets compiled into `css/ehui.css`, it has options/variables and can be imported in another scss file to compile a customized ehui.css
    - `js/`
        - extra javascript utilities (these add extra functionality, ehui works without javascript)
- `themes/`
    - each theme is a css file that defines a bunch of css variables used by `css/ehui.css`, `css/ehui.css` has no colors without a css file from `themes/`
