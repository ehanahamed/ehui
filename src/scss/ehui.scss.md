# ehui.scss

~~To make a ehui theme, include `ehui.scss` with the `@use` rule.~~

Required variables:
```scss
@use "ehui.scss" with (
  $dark-theme: bool, // is it a dark theme?
  $bg1: color,      // background color
  $fg1: color,      // text/foreground color
  $main: color,     // main/primary/accent color
  $scary: color,    // error/incorrect/danger color (usually red)
  $yay: color       // sucess/correct/good color (usually green)
)
```

Important variables:
```scss
// Some have default values based on other variables' values
@use "ehui.scss" with (
  // is this a dark theme?
  $dark-theme: boolean,
  // below (usually darker than) bg1
  $bg0: color, // default is 20% darkend $bg1
  // background color
  $bg1: color,
  // above (usually lighter than) bg1
  $bg2: color, // default is 20% brightened $bg1
  // above bg2 (usually the lightest bg color)
  $bg3: color, // default is 20% brightened $bg2
  /* subtle/disabled text */
  $fg0: color, // default is mixing $fg1 with $bg
  /* text/foreground color */
  $fg1: color,
  /* boldest text (can be same as fg1) */
  $fg2: color, // default is $fg1
  /* main/primary/accent color */
  $main: color,
  /* extra/secondary color (can be same as $main) */
  $extra: color, // default is $main
  /* background color to go with $extra */
  $bgExtra: color, // default is $bg0
  /* error/incorrect/danger color (usually red) */
  $scary: color,
  /* sucess/correct/good color (usually green) */
  $yay: color,

  // border radius (in rem, decimals are fine), use 0px for 0 */
  $border-radius: number, // default is 0.8rem
  // link color
  $links: color, // default is $main
  // button background (color or gradient, etc)
  $button-bg: background, // default is $main
  // button text color
  $button-text: color; // default is $bg0
  // button border, size should be in rem, whole thing can be none
  // color doesn't really matter, it's set elsewhere (see button-border-color)
  $button-border: border; // default is 0.2rem solid
  $alt-button-bg: $bg3 !default;
  $alt-button-text: $main !default;
  $alt-button-border: none !default;
)
```
