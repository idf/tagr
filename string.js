String.prototype.toFixLengthWithPrefix = function(len, prefix) {
    "use strict";
    var prefix_str = "";
    for (var i = 0; i < len; i++) {
        prefix_str += prefix;
    }
    var new_str = prefix_str + this.toString();
    new_str = new_str.substring(new_str.length - len);
    return new_str;
};

String.prototype.toNumberWithCommas = function() {
    "use strict";
    return this.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

String.prototype.include = function(str, delimiter) {
    "use strict";
    var strs = this.split(delimiter);
    for (var i=0; i<strs.length; i++) {
        if (str === strs[i]) {
            return true;
        }
    }
    return false;
};

String.prototype.format = function(param) {
    "use strict";
    var str = this;
    for (var i=0; i<param.length; i++) {
        str = str.replace("{" + i + "}", param[i]);
    }
    return str;
};

String.prototype.build = function() {
    "use strict";
    var str = this;
    for (var i=0; i<arguments.length; i++) {
        str = str.replace("{" + i + "}", arguments[i]);
    }
    return str;
};
