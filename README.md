# EhUI

This is a "UI kit" with a bunch of css styles. It's customizable and themeable, so that we don't need to rewrite similar css for different projects.

## To-do

- fonts
    - other scss files have different `font-family:` properties that don't follow `$font-family`
    - that ancient `fonts/fonts.css` file and `fonts/` dir does something?
- border radius
    - use scss vars
- document using scss vars to build a custom ehui.css

## Project/folder structure

- `css/ehui.css`
    - css file compiled from `src/scss/`, use it with a css file from `themes/` to define it's colors (`css/ehui.css` has no colors without a css file from `themes/`)
- `site/`
- `src/`
    - `scss/`
        - the "actual" source code that is later compiled into `css/ehui.css`
    - `js/`
        - extra javascript utilities (these add extra functionality, ehui works without javascript)
- `themes/`
    - each theme is a css file that defines a bunch of css variables used by `css/ehui.css`, `css/ehui.css` has no colors without a css file from `themes/`
