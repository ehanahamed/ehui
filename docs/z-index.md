# Z-index in EhUI

Unlike most other css libraries or ui kits, EhUI does NOT use absurdly high z-index values like `z-index: 9999`.

Instead we have an organized list of z-index ranges and their uses.

| Z-index(s) | Use                                               | Examples                |
|------------|---------------------------------------------------|-------------------------|
| 1-9        | Elements with 3D effects & stuff                  | Flashcards              |
| 10-19      | Elements that go above most stuff but below menus | Searchbar suggestions   |
| 20-29      | Menus/tooltips that go above must stuff           | Tooltips/menus          |
| 100        | Modal/alert box background                        | Overlay for alert/modal |
| 101        | Modal/alert box                                   | Modal/alert box         |
