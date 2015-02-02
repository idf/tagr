Number.prototype.toFix = function(dig) {
    "use strict";
    return this.toString().toFixLengthWithPrefix(dig, "0");
};

Number.prototype.toRound = function(dig) {
    "use strict";
    var factor = Math.pow(10, dig);
    return Math.round(this * factor) / factor;
};

Number.prototype.toMonthName = function() {
    "use strict";
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[this - 1];
};
