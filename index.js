/*
'`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backsp'
'~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backsp'

'TAB', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'
'TAB', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|'

'CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'
'CAPS', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'

'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'
'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift'
*/

var hyperglue = require('hyperglue');
var EventEmitter = require('events').EventEmitter;
var fs = require('fs');

var html = fs.readFileSync(__dirname + '/static/keyboard.html');
var css = fs.readFileSync(__dirname + '/static/keyboard.css');

var keys = require('./keys').keys;
var keyCodes = require('./keys').keyCodes;

var insertedCss = false;

module.exports = Keyboard;

function Keyboard () {
    if (!(this instanceof Keyboard)) return new Keyboard();
    EventEmitter.call(this);
    var self = this;

    var shift = 'off';
    var caps = 'off';

    if (!insertedCss) {
        var style = document.createElement('style');
        style.append(document.createTextNode(css));

        if (document.head.childNodes.length) {
            document.head.insertBefore(style, document.head.childNodes[0]);
        }
        else {
            document.head.appendChild(style);
        }
        insertedCss = true;
    }

    function changeKeyCase (shiftOrCaps) {
        /*
        $('#keyboard .row').each(function () {
            $('.key', this).each(function () {
                $(this).text(keys['shift-' + shiftOrCaps][$(this).text()]);
            });
        });
        */
    }

    var root = hyperglue(html);

    function printKey (keyCode, val) {
        //$('#output').append(val + " (" + keyCode + ") ");
    }

    root.querySelectorAll('.shift').forEach(function (key)) {
        key.addEventListener('click', function (ev) {
            changeKeyCase(shift);
            shift = shift == 'off' ? 'on' : 'off';
        });
    }

    root.querySelector('.caps').addEventListener('click'(function (key)) {
        changeKeyCase(caps);
        caps = caps == 'off' ? 'on' : 'off';
    });

    root.querySelectorAll('.key').forEach(function (key)) {
        key.addEventListener('click', function (ev) {
            //var key = $(this).text();
            if (key == 'Shift' || key == 'Caps') {
                return;
            }
            if (keyCodes[key]) {
                this.emit('key', keyCodes[key], key);
                //printKey(keyCodes[key], key);
            }
            else {
                //printKey(key.charCodeAt(0), key);
                this.emit('key', key.charCodeAt(0), key);
            }
            if (shift == 'on') {
                changeKeyCase(shift);
                shift = 'off';
            }
        });
    });

    function appendTo (target) {
        if (typeof target === 'string') {
            target = document.querySelector(target);
        }
        target.appendChild(this.element);
    }
}
