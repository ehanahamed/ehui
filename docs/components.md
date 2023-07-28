# Components & stuff

"Components" are the actual visible "things" in designsys.

## `Text` components

`Text`components are usually inline elements that the user sees as "part of the text".

`Text` components include:

- `<span>...</span>`
- bold text (`<b>...</b>`, `<span class="b">...</span>`, `<... class="b">...</...>`)
- italic text (`<i>...</i>`, `<span class="i">...</span>`, `<... class="i">...</...>`)
- strikethroughs (`<s>...</s>`, `<span class="s">...</span>`, `<... class="s">...</...>`)
- highlighted text (`<mark>...</mark>`, `<... class="mark">...</...>`)
- inline code (`<code>...</code>`, `<... class="code">...</...>`)
- links (`<a>...</a>`)

> Note that span elements have no extra styling applied, they're meant to be used with specific classes. For example `<span class="b i">bold & italic text</span>`.

## `Box` components

`Box` components are usually block or inline-block elements that the user sees as "a seperate thing".

`Box` components include:

- boxes (`<... class="box">...</...>`)
- table children (`<table>...</table>`)
  - `th`
  - `td`
- heros (`<... class="hero">...</...>`)
- footers (`<footer>...</footer>`, `<... class="footer">...</...>`)

> Note that in tables, the padding is applied to each cell (`th`, `td`).

## `Interactive` components

`Interactive` components are usually a variety of display types, including inline, inline-block, and block. The user sees "interactive" components are parts of the page they can click, tap, change, input, and otherwise interact with. Interactive components are one of the only elements that have the primary color, other non-interactive components usually do not have the primary color, as the primary color is a indication to the user that they can interact with an element.

`Interactive` components include:

- links (`<a>...</a>`)
- buttons (`<button>...</button>`, `<... class="button">...</...>`)
- inputs (`<input type="...">...</input>`)
  - textareas (`<textarea>...</textarea>`)

work in progress
