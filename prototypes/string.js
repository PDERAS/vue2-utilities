String.prototype.capitalize = function() {
    return (this.toLowerCase()).charAt(0).toUpperCase() + (this.toLowerCase().slice(1));
}

String.prototype.capitalizeAll = function(delim = ' ') {
    var str = this.toLowerCase().split(delim);

    for(var i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i][0] = str[i][0].toUpperCase();
        str[i] = str[i].join('');
    }

    return str.join(delim);
}

String.prototype.spacesToChar = function(char) {
    return this.replace(/\s+/g, char);
}

String.prototype.stripSlashes = function() {
    return this.replace(/\\/g, '');
}

String.prototype.stripPeriods = function() {
    return this.replace(/\./g, '');
}

String.prototype.stripDashes = function() {
    return this.replace(/\-/g, '');
}

String.prototype.toAlphaNumeric = function() {
    return this.replace(/[\W_]+/g, " ");
}
