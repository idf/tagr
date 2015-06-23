/**
 * Created by Danyang on 2/6/2015.
 */
(function () {
    'use strict';

    Array.prototype.max = function() {
        return Math.max.apply(null, this);
    };

    Array.prototype.min = function() {
        return Math.min.apply(null, this);
    };

})();

(function () {
    'use strict';

    Number.prototype.toFix = function(dig) {
        return this.toString().toFixLengthWithPrefix(dig, '0');
    };

    Number.prototype.toRound = function(dig) {
        var factor = Math.pow(10, dig);
        return Math.round(this * factor) / factor;
    };

    Number.prototype.toMonthName = function() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[this - 1];
    };

})();

(function () {
    'use strict';

    String.prototype.toFixLengthWithPrefix = function(len, prefix) {
        var prefix_str = '';
        for (var i = 0; i < len; i++) {
            prefix_str += prefix;
        }
        var new_str = prefix_str + this.toString();
        new_str = new_str.substring(new_str.length - len);
        return new_str;
    };

    String.prototype.toNumberWithCommas = function() {
        return this.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    String.prototype.include = function(str, delimiter) {
        var strs = this.split(delimiter);
        for (var i=0; i<strs.length; i++) {
            if (str === strs[i]) {
                return true;
            }
        }
        return false;
    };

    String.prototype.format = function(param) {
        var str = this;
        for (var i=0; i<param.length; i++) {
            str = str.replace('{' + i + '}', param[i]);
        }
        return str;
    };

    String.prototype.build = function() {
        var str = this;
        for (var i=0; i<arguments.length; i++) {
            str = str.replace('{' + i + '}', arguments[i]);
        }
        return str;
    };

})();





