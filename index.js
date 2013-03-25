var hyperglue = require('hyperglue');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/static/keyboard.html');
var css = fs.readFileSync(__dirname + '/static/keyboard.css');

var KeyboardKeys = require('./keys').keys;
var keyCodes = require('./keys').keyCodes;

var insertedCss = false;

module.exports = Keyboard;
Keyboard.prototype = new EventEmitter;

function Keyboard () {
    if (!(this instanceof Keyboard)) return new Keyboard();
    EventEmitter.call(this);
    var self = this;

    if (!insertedCss) {
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(css));

        if (document.head.childNodes.length) {
            document.head.insertBefore(style, document.head.childNodes[0]);
        }
        else {
            document.head.appendChild(style);
        }
        insertedCss = true;
    }

    var shift = 'off';
    var caps = 'off';

    var root = hyperglue(html);

    function changeKeyCase (shiftOrCaps) {
        var keys = root.querySelectorAll('.key');
        for (var i = 0; i < keys.length; i++) {
            var node = keys[i];
            var val = node.firstChild.nodeValue;
            node.firstChild.nodeValue = KeyboardKeys['shift-' + shiftOrCaps][val];
        }
    }

    var shifts = root.querySelectorAll('.shift');
    for (var i = 0; i < shifts.length; i++) {
        var key = shifts[i];
        key.addEventListener('click', function (ev) {
            changeKeyCase(shift);
            shift = shift == 'off' ? 'on' : 'off';
        });
    }

    root.querySelector('.caps').addEventListener('click', function (key) {
        changeKeyCase(caps);
        caps = caps == 'off' ? 'on' : 'off';
    });

    var keys = root.querySelectorAll('.key');
    for (var i = 0; i < keys.length; i++) {
        var node = keys[i];
        node.addEventListener('click', function (ev) {
            var key = this.firstChild.nodeValue;
            if (key == 'Shift' || key == 'Caps') {
                return;
            }
            if (keyCodes[key]) {
                self.emit('key', keyCodes[key], key);
            }
            else {
                self.emit('key', key.charCodeAt(0), key);
            }
            if (shift == 'on') {
                changeKeyCase(shift);
                shift = 'off';
            }
        });
    }

    this.appendTo = function (target) {
        if (typeof target === 'string') {
            target = document.querySelector(target);
        }
        target.appendChild(root);
    }
}

