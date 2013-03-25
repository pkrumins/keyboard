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

Methods
=======

## var keyboard = keyboard()

Return a new keyboard instance.

## keyboard.appendTo(target)

Append the keyboard widget to the dom element or query selector string target.

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
