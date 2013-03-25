// browserify -t brfs ./main.js > bundle.js
//
var keyboard = require('../');
var keyboard = keyboard();
keyboard.appendTo('#keyboard');

keyboard.on('key', function (keyCode, keyDesc) {
    console.log('You pressed ' + keyDesc + ' (key code: ' + keyCode + ')');
});
