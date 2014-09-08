# Gamajo Accessible Menu

Making WordPress navigation menus a little more accessible.

Improves menu accessibility in two ways:
 * Adds a delay to submenus disappearing when moving the mouse away.
 * Makes submenus appear when tabbing through menu items with the keyboard.

Kudos to Rian Rietveld for the code on which this plugin is based. Originally written for a Genesis Framework child theme, this should work for all WordPress themes and static sites which follow a typical structure for menus and submenus.

## Getting Started

### Bower

In your `bower.json`:

`"accessible-menu": "GaryJones/accessible-menu#master`

Change `#master` to `#develop` or a specific tag like `#1.0.0` if needed.

### Zip
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/gary/accessible-menu/master/dist/accessible-menu.min.js
[max]: https://raw.github.com/gary/accessible-menu/develop/dist/accessible-menu.js

### WordPress Theme
If using WordPress, and not concatenating it into your main theme JavaScript file, add the following to your theme functions.php:

~~~php
add_action( 'wp_enqueue_scripts', 'prefix_enqueue_scripts' );
/**
 * Enqueue accessible menu script.
 *
 * @since  1.0.0
 */
function prefix_enqueue_scripts() {
    $js_dir = trailingslashit( get_stylesheet_directory_uri() ) . 'js/';
    $suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

    wp_enqueue_script( 'gamajo-accessible-menu', $js_dir . "jquery.accessible-menu{$suffix}.js", array( 'jquery' ), '1.0.0', true );
}
~~~

Now in your main theme JavaScript file, add one of the Example lines from below.

### Static

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.accessible-menu.min.js"></script>
<script>
jQuery(function($) {
  $( document ).gamajoAccessibleMenu();
});
</script>
```

## Documentation

Here are the options:

### hoverClass
_Default:_ `'menu-item-hover'`
The CSS class to add to indicate item is hovered or focused.

### hoverDelay
_Default:_ `250`
The delay in milliseconds to keep submenus showing after mouse leaves.

### menuItemSelector
_Default:_ `'.menu-item'`
Selector for general menu items. If you remove the default menu item classes, then you may want to call this plugin with this value set to something like 'nav li' or '.menu li'.

## Examples
After enqueueing this file (or concatenating it with your theme JS file), call it with:

~~~js
$( document ).gamajoAccessibleMenu();
~~~

If you want to limit it to only certain menus, then change document to a limited scope, e.g.:

~~~js
$( '#menu-after-header' ).gamajoAccessibleMenu();
~~~

With the default options:

~~~js
jQuery( document ).gamajoAccessibleMenu({
    hoverClass: 'menu-item-hover',
    hoverDelay: 250,
    menuItemSelector: '.menu-item'
});
~~~

## Release History

### 1.0.0
* First public release.
