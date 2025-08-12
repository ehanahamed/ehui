# EhUI

EhUI is a customizable free & open source UI-kit/css-library.

https://ehan.dev/ehui

[Codeberg](https://codeberg.org/ehanahamed/ehui) · [GitHub](https://github.com/ehanahamed/ehui)

## Installation

Get EhUI from `site/css/ehui.min.css`, and a theme from `site/themes/`.
```html
<link rel="stylesheet" href="css/ehui.min.css">
<link rel="stylesheet" href="themes/auto.min.css">
```

EhUI's colors are defined in those theme css files, so you need one. `auto.min.css` is a good default. (it's automatic light/dark based on users' browser settings) We also have seperate `dark.min.css` and `light.min.css`, and you can easily make your own theme and/or configure how your project uses/switches themes however you want.

I reccomend hosting/serving the css files yourself, under your own site or on your own server, because the css files from `https://ehan.dev/ehui/css/` and `https://ehan.dev/ehui/themes/` are updated often, and have frequent breaking changes. (Even my/our own projects, like [Quizfreely](https://quizfreely.com), use a seperate copy of EhUI's css to avoid accidentally breaking styles across different projects/sites/apps)

Btw, EhUI doesn't need any JavaScript. Even dropdowns, accordians, and other interactive stuff work without JavaScript. Obviously, EhUI also works well with JavaScript too, it's just not required if you don't need it.

## Customization & Themes

Themes' SCSS are in `themes/`. They're compiled to css files under `build/themes/`, and they're minified versions are in `site/themes/`.

## Development

EhUI is written in SASS/SCSS, and gets compiled to CSS.
- `site/css/` and `site/themes/` have minified css from `build/`.
- `build/css/` and `build/themes/` have compiled css from source code in `src/scss/ehui.scss` and `themes/`

### Compiling, Minifying, etc

Use `npm run build` to compile + minify the css. There is a github action ([build.yml](.github/workflows/build.yml)) that can run `npm run build` & commit + push the compiled css for you (it's useful if you're developing on a device that you can't run those npm commands on).

`npm run build` runs `npm run compile` and then `npm run minify`.
- Compiling with `npm run compile` ONLY updates `build/` by compiling `src/scss/` and `themes/`.
- Minifying with `npm run minify` ONLY updates `site/` by minifying css from `build/`. (It should be run after running `npm run compile`)
- Just using `npm run build` is easier, cause it just does both `compile` and `minify` in order, for you lol

### Site & Demos/Testing

`site/` has ehui's website's source code. All the html examples, demos, & testing is there.

EhUI's website is at [ehan.dev/ehui](https://ehan.dev/ehui). Because it's part of `ehan.dev`, there's a copy of ehui's `site/` in `ehan.dev`'s source code (which is `ehanahamed/site` on [codeberg](https://codeberg.org/ehanahamed/site) and [github](https://github.com/ehanahamed/site)).

To update the copy in the `site` repository, we copy `<ehui repo>/site/` to `<site repo>/site/ehui/`.

We have a github action ([update-site.yml](.github/workflows/update-site.yml)) to update the copy in `site`'s repo more convinently.
