# Icons

designsys works great with nerdftons (https://www.nerdfonts.com/)

Some webdevs decide to make their own icon set, but there is truly no need to reinvent the wheel, for almost all icon sets end up looking exactly the same, and are mostly a waste of time to make. (It's quite different from UI libraries, Design Systems, or logos, for which being unique is very important.) Icons on the other hand, should NOT be unique, because they are meant to convey a universal meaning that a user can easily understand.

It is against deisngsys's design princibles to have "icon buttons" or icons by themselves with no text. All icons must have text with them. (The same is NOT true for text, text does not need icons, do NOT overuse icons when not needed.)

## Same-ness

If a button in a row of buttons has an icon, every button in that "group"/row should have an icon. If it becomes hard to find a related icon, none of the buttons in the group should have an icon.

## Usage

### General guide

Always use the most "visible" icon avilable, the one that can be most easily distinguished. Always prefer outlined over filled icons, filled icons look like "images", while outlined look like part of the text, which is what we want in icons.

It is perfectly fine to mix icons from different icon libraries! (thats the whole point of using nerdfonts)

### Icon usage

An `X` icon should be used to indicate closing or hiding something. NOT deleting something.

A "trash bin" icon should be used to indicate deleting something. Anytime user-made content is being "gone"-ed you use a trash bin, NOT an `X`.

An "eye" icon and a "crossed-out-eye" icon is used for toggling between two states of visibility. Like showing a password or hiding the password. The content should still be "there" and still "see"-able, just shown *differently*.

Options, or an icon with a bunch of "sliders", is used for options, NOT settings. In designsys terminology options refers to designsys's settings and UI appearence options while settings refers to the actual app/website's settings and configuration. Settings, or a "cog"/gear is used for "settings".

### Specific icons

`nf-cod-trash` for trash can

`nf-md-translate` for language

`nf-cod-symbol_color` for theme/color

`nf-cod-settings` for options
