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

var shift = 'off';
var caps = 'off';

$(function () {
    $('#keyboard .shift').click(function () {
        $('#keyboard .row').each(function () {
            $('.key', this).each(function () {
                $(this).text(keys['shift-' + shift][$(this).text()]);
            });
        });
        shift = shift == 'off' ? 'on' : 'off';
    });

    $('#keyboard .caps').click(function () {
        $('#keyboard .row').each(function () {
            $('.key', this).each(function () {
                $(this).text(keys['shift-' + caps][$(this).text()]);
            });
        });
        caps = caps == 'off' ? 'on' : 'off';
    });

    $('.key').click(function () {
        document.write($(this).text());
    });
});

