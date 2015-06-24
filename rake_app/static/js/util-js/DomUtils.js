/**
 * Created by Danyang on 2/2/2015.
 */

function DomUtils() {}

/**
 * To get all elements in a page with a certain class attribute.
 * http://www.blackbam.at/blackbams-blog/2011/07/01/my-todays-top-10-most-useful-javascript-functions/
 * @param classname
 * @param node
 * @returns {Array}
 */
DomUtils.getElementsByClassName = function(classname, node){
    'use strict';
    if (!node) {
        node = document.getElementsByTagName('body')[0];
    }

    var a = [], re = new RegExp('\\b' + classname + '\\b');
    var els = node.getElementsByTagName('*');
    for (var i = 0, j = els.length; i < j; i++) {
        if (re.test(els[i].className)) {
            a.push(els[i]);
        }
    }
    return a;
};

/**
 * Test if a String is not empty
 * @param s
 * @returns {boolean}
 */
DomUtils.isNonblank = function(s) {
    'use strict';
    var bpat    = /\S/;
    return String (s).search (bpat) !== -1;
};

/**
 * Get scroll width/height of page visitors' browser window
 * A browser-safe way to get the number of pixels, which a user scrolled down the webpage currently.
 * @returns {*[]}
 */
DomUtils.getScrollXY = function() {
    'use strict';
    var scrOfX = 0, scrOfY = 0;

    if( typeof( window.pageYOffset ) === 'number' ) {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
};

/**
 * Get current size of page visitors' browser window
 * A browser-safe way to get the window height and window width of the current viewers browser in pixels.
 * @returns {*[]}
 */
DomUtils.getWindowSize = function() {
    'use strict';
    var myWidth = 0, myHeight = 0;

    if( typeof( window.innerWidth ) === 'number' ) {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return [ myWidth, myHeight ];
};

/**
 * Print Javascript Array
 * A really useful function for debugging and developing with javascript. Instead of [object Object] or something
 * similar you will see the whole contents of an array in your output.
 * @param arr
 * @param level
 * @returns {string}
 */
DomUtils.dump = function(arr,level) {
    'use strict';
    var dumped_text = '';
    if(!level) {
        level = 0;
    }
    //The padding given at the beginning of the line.
    var level_padding = '';
    for(var j=0;j<level+1;j++) {
        level_padding += '    ';
    }
    if(typeof(arr) === 'object') { //Array/Hashes/Objects
        for(var item in arr) {
            if(arr.hasOwnProperty(item)) {
                var value = arr[item];
                if(typeof(value) === 'object') { //If it is an array,
                    dumped_text += level_padding + '\'' + item + '\' ...\n';
                    dumped_text += DomUtils.dump(value,level+1);
                } else {
                    dumped_text += level_padding + '\'' + item + '\' => \'' + value + '\'\n';
                }
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = '===>'+arr+'<===('+typeof(arr)+')';
    }
    return dumped_text;
};