Keyboard
========

A HTML keyboard widget. Press button get bacon. Wait. Get character. Yep.

Example
=======

```js
var keyboard = require('slideways');
keyboard.appendTo('#keyboard');

keyboard.on('key', function (key, keyCode, keyDesc) {
    console.log('You pressed ' + keyDesc + ' (key code: ' + keyCode + ')');
}
```

[See a live demo example.](http://www.catonmat.net/ftp/keyboard/)

Methods
=======

## var keyboard = keyboard()

Return a new keyboard instance.

## keyboard.appendTo(target)

Append the keyboard widget to the dom element or query selector string target.

Events
======

## keyboard.on('key', function (keyCode, keyDesc) { })

Keyboard emits `key` events when you press keys. The callback receives `keyCode`, `keyDesc` parameters. `keyCode` is the decimal key code for the pressed key. `keyDesc` is the key description (such as 'a', 'Enter', 'ESC', etc.)

Install
=======

With [npm](https://npmjs.org) do:

```
npm install keyboard
```

Use [browserify](http://browserify.org) to `require('keyboard')`.

License
=======

MIT
