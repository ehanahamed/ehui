# Navigation Menus/Bars/Headers

EhUI has classes `nav-menu`, `nav-menu-toggle`, `menu`, and `nav`.

The HTML of our menu thingies looks like this:
```html
<header>
    <div class="menu">
      <input type="checkbox" class="nav-menu-toggle" />
      <div class="nav-menu">
        <div>
            <a href="/">Home</a>
        </div>
        <div class="current">
            <a href="/ex">Example</a>
        </div>
        <div>
            <a href="/ex2">Example 2</a>
        </div>
      </div>
    </div>
</header>
```

The `nav` class is depreciated, don't use it. It was not documented, designed, or implemented properly so it has been replaced by `nav-menu`. You won't find any documentation about `nav` becuase I was rushing and forgot to document it when it was created in like 2023-ish, and as a result I don't know how it works anymore. This is being written while I'm rewriting/replacing `nav` with `nav-menu`, and now I'm still rushing, but I'm better than past me so I'm documenting it and everything cause you like need to, and the old `nav` class is a great example of how horribly unorganized stuff becomes when you don't document everything. So anyways yea.

The `menu` class should be inside a `header` element (and a direct child).

The `nav-menu` class and `nav-menu-toggle` class should be inside a `menu` class element, because `menu` sets the grid area of the container that nav-menu and nav-menu-toggle are both inside of for layout/position-ing stuffs.

On wider screens, all of nav-menu's links are shown horizontally and nav-menu-toggle is hidden. On smaller screens (like mobile), nav-menu is hidden by default, and nav-menu-toggle is shown, and using nav-menu-toggle, 
