Number.prototype.toCommaString = function () {
    var result = this.toString();
    while (/(\d+)(\d{3})/.test(result)) {
        result = result.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }

    return String(result);
}

Number.prototype.toDollarString = function (showDollarSign = true) {
    var val = this.toFixed(2);
    var valSplit = val.split('.');

    if (isNaN(Number(val)) || !isFinite(val)) {
        return "N/A";
    }

    while (/(\d+)(\d{3})/.test(valSplit[0].toString())) {
        valSplit[0] = valSplit[0].toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    }

    val = valSplit[0] + "." + valSplit[1];

    return showDollarSign ? "$" + val : val;
}

Number.prototype.precisionRound = function (precision = 0) {
    return Number(Math.round(this + 'e' + precision) + 'e-' + precision);
}
