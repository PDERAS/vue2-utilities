Date.prototype.applyTimezone = function() {
    var year = this.getFullYear();
    var month = this.getMonth();
    var date = this.getDate();

    var hour = this.getHours();
    var min = this.getMinutes();
    var sec = this.getSeconds();

    return new Date(Date.UTC(year, month, date, hour, min, sec));
}

Date.prototype.getMinutesString = function() {
    var mins = this.getMinutes();
    return mins < 10 ? "0" + mins : mins;
}

Date.prototype.getHoursString = function() {
    var hours = this.getHours();
    return hours < 10 ? "0" + hours : hours;
}

Date.prototype.subMinutes = function(date) {
    return (new Date(date) - this) / 60000;
}
