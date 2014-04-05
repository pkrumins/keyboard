Keyboard
========

A HTML keyboard widget. Press button get bacon. Wait. Get character. Yep.

Example
=======

```js
var keyboard = require('keyboard2');
keyboard.appendTo('#keyboard');

keyboard.on('key', function (key, keyCode, keyScanCode) {
    console.log('You pressed ' + key + ' (key ascii code: ' + keyCode + ', key scan code: ' + keyScanCode + ')');
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

## keyboard.on('key', function (key, keyCode, keyScanCode) { })

Keyboard emits `key` events when you press keys. The callback receives `key`, `keyCode`, `keyScanCode` parameters. `keyCode` is the decimal key code for the pressed key. `key` is the key description (such as 'a', 'Enter', 'ESC', etc.). `keyScanCode` is the keyboard scan code of the key.

Install
=======

With [npm](https://npmjs.org) do:

```
npm install keyboard2
```

Use [browserify](http://browserify.org) to `require('keyboard2')`.

License
=======

MIT
