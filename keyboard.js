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

var keys = {
    'shift-off' : {
        '`' : '~', 
        '1' : '!', 
        '2' : '@', 
        '3' : '#', 
        '4' : '$', 
        '5' : '%', 
        '6' : '^', 
        '7' : '&', 
        '8' : '*', 
        '9' : '(', 
        '0' : ')', 
        '-' : '_', 
        '=' : '+', 

        'q' : 'Q', 
        'w' : 'W', 
        'e' : 'E', 
        'r' : 'R', 
        't' : 'T', 
        'y' : 'Y', 
        'u' : 'U', 
        'i' : 'I', 
        'o' : 'O', 
        'p' : 'P', 
        '[' : '{', 
        ']' : '}', 

        'CAPS' : 'CAPS', 
        'a' : 'A', 
        's' : 'S', 
        'd' : 'D', 
        'f' : 'F', 
        'g' : 'G', 
        'h' : 'H', 
        'j' : 'J', 
        'k' : 'K', 
        'l' : 'L', 
        ';' : ':', 
        '\'' : '"', 

        'Shift' : 'Shift', 
        'z' : 'Z', 
        'x' : 'X', 
        'c' : 'C', 
        'v' : 'V', 
        'b' : 'B', 
        'n' : 'N', 
        'm' : 'M', 
        ',' : '<', 
        '.' : '>', 
        '/' : '?', 
    },
    'shift-on' : {
        '~' : '`', 
        '!' : '1',
        '@' : '2',
        '#' : '3',
        '$' : '4',
        '%' : '5',
        '^' : '6',
        '&' : '7',
        '*' : '8',
        '(' : '9',
        ')' : '0',
        '_' : '-',
        '+' : '=',

        'Q' : 'q',
        'W' : 'w',
        'E' : 'e',
        'R' : 'r',
        'T' : 't',
        'Y' : 'y',
        'U' : 'u',
        'I' : 'i',
        'O' : 'o',
        'P' : 'p',
        '{' : '[',
        '}' : ']',

        'CAPS' : 'CAPS',
        'A' : 'a',
        'S' : 's',
        'D' : 'd',
        'F' : 'f',
        'G' : 'g',
        'H' : 'h',
        'J' : 'j',
        'K' : 'k',
        'L' : 'l',
        ':' : ';',
        '"' : '\'',

        'Shift' : 'Shift',
        'Z' : 'z',
        'X' : 'x',
        'C' : 'c',
        'V' : 'v',
        'B' : 'b',
        'N' : 'n',
        'M' : 'm',
        '<' : ',',
        '>' : '.',
        '?' : '/',
    }
};

var keyCodes = {
    'Ctrl' : 17,
    'Alt' : 18,
    'WinKey' : 21,
    'OptKey' : 93,
    'Space' : 32,
    'ESC' : 27,
    'F1' : 112,
    'F2' : 113,
    'F3' : 114,
    'F4' : 115,
    'F5' : 116,
    'F6' : 117,
    'F7' : 118,
    'F8' : 119,
    'F9' : 120,
    'F10' : 121,
    'F11' : 122,
    'F12' : 123,
    'Backsp' : 8,
    'TAB' : 9,
    'Enter' : 13,

}

var shift = 'off';
var caps = 'off';

$(function () {
    function changeKeyCase (shiftOrCaps) {
        $('#keyboard .row').each(function () {
            $('.key', this).each(function () {
                $(this).text(keys['shift-' + shiftOrCaps][$(this).text()]);
            });
        });
    }

    function printKey (keyCode, val) {
        $('#output').append(val + " (" + keyCode + ") ");
    }

    $('#keyboard .shift').click(function () {
        changeKeyCase(shift);
        shift = shift == 'off' ? 'on' : 'off';
    });

    $('#keyboard .caps').click(function () {
        changeKeyCase(caps);
        caps = caps == 'off' ? 'on' : 'off';
    });

    $('.key').click(function () {
        var key = $(this).text();
        if (key == 'Shift' || key == 'Caps') {
            return;
        }
        if (keyCodes[key]) {
            printKey(keyCodes[key], key);
        }
        else {
            printKey(key.charCodeAt(0), key);
        }
        if (shift == 'on') {
            changeKeyCase(shift);
            shift = 'off';
        }
    });
});

