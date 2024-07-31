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
- `src/`
    - `scss/`
        - `ehui.scss`
            - the "main" scss file that imports the other scss files, it gets compiled into `css/ehui.css`, it has options/variables and can be imported in another scss file to compile a customized ehui.css
    - `js/`
        - extra javascript utilities (these add extra functionality, ehui works without javascript)
- `themes/`
    - each theme is a css file that defines a bunch of css variables used by `css/ehui.css`, `css/ehui.css` has no colors without a css file from `themes/`
