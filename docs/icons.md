# Icons

designsys works great with nerdftons (https://www.nerdfonts.com/)

Some webdevs decide to make their own icon set, but there is truly no need to reinvent the wheel, for almost all icon sets end up looking exactly the same, and are mostly a waste of time to make. (It's quite different from UI libraries, Design Systems, or logos, for which being unique is very important.) Icons on the other hand, should NOT be unique, because they are meant to convey a universal meaning that a user can easily understand.

It is USUALLY against deisngsys's design princibles to have "icon buttons" or icons by themselves with no text. Almost all icons must have text with them. (The same is NOT true for text, text does not need icons, do NOT overuse icons when not needed.)

There are only three "universal" icons that can be used without text.
 - directional arrows/movement arrows
 - X to close (NOT X to delete or trash to delete, only X as close/hide ui)
 - three vertical bars for menu

ONLY THESE THREE ICON TYPES CAN BE USED WITHOUT TEXT, all other icons need text!!!

## Same-ness

If a button in a row of buttons has an icon, every button in that "group"/row should have an icon. If it becomes hard to find a related icon, none of the buttons in the group should have an icon.

## HTML-ing

If you can, make icons on different lines than text or other html elements.
```html
<!-- having them on different lines effects spacing -->
<element>
    <i class="nf nf-something"></i>
    <element>text</element>
</element>
<element>
    <i class="nf nf-something"></i>
    text
</element>
```

If an icon is on the same line as text or another html element, add spaces:
```html
<!-- adding whitespace effects the actual spacing of the rendered html -->
<!-- this one-line technique should be used when dealing with html stuff in javascript -->
<element> <i class="nf nf-something"></i> <element>text</element> </element>
<element> <i class="nf nf-something"></i> text </element> 
```

If you do not follow this spacing and newline-ing guide, the icons will be spaced incorrectly and might even overlap text.

## Usage

### General guide

Always use the most "visible" icon avilable, the one that can be most easily distinguished. Always prefer outlined over filled icons, filled icons look like "images", while outlined look like part of the text, which is what we want in icons.

It is perfectly fine to mix icons from different icon libraries! (thats the whole point of using nerdfonts) However, don't mix stuff too far from eachother, for example if theres an octicon `X` you're using for "incorrect", and a matching `checkmark` you could use for "correct", use the matching icon!

### Icon usage

An `X` icon should be used to indicate closing or hiding something. NOT deleting something.

A "trash bin" icon should be used to indicate deleting something. Anytime user-made content is being "gone"-ed you use a trash bin, NOT an `X`.

An "eye" icon and a "crossed-out-eye" icon is used for toggling between two states of visibility. Like showing a password or hiding the password. The content should still be "there" and still "see"-able, just shown *differently*.

Options, or an icon with a bunch of "sliders", is used for options, NOT settings. In designsys terminology options refers to designsys's settings and UI appearence options while settings refers to the actual app/website's settings and configuration. Settings, or a "cog"/gear is used for "settings".

### Specific icons

`nf-fa-trash_o` for trash can

`nf-md-translate` for language

`nf-cod-symbol_color` for theme/color

`nf-cod-settings` for options

`nf-cod-arrow_left`, `nf-cod-arrow_down`, `nf-cod-arrow_up`, `nf-cod-arrow_right` for moving an item in a certain direction.

`nf-oct-plus` for create/new/add

`nf-oct-check` for done/checkmark/finish
