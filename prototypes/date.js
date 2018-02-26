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

Date.prototype.toFormattedString = function(monthDisplay = 'short', showTime = true) {
    if (monthDisplay != 'short' && monthDisplay != 'long') {
        throw "ERROR: toFormattedString: monthDisplay must be either 'short' or 'long'";
    }

    var months = [
        { short: "Jan", long: "January" },
        { short: "Feb", long: "February" },
        { short: "Mar", long: "March" },
        { short: "Apr", long: "April" },
        { short: "May", long: "May" },
        { short: "Jun", long: "June" },
        { short: "Jul", long: "July" },
        { short: "Aug", long: "August" },
        { short: "Sep", long: "September" },
        { short: "Oct", long: "October" },
        { short: "Nov", long: "November" },
        { short: "Dec", long: "December" }
    ];

    var returnVal = months[this.getMonth()][monthDisplay] + ' ' + this.getDate() + ', ' + this.getFullYear();

    if (showTime) {
        var hours = this.getHours() % 12 == 0 ? 12 : this.getHours() % 12;
        var mins = this.getMinutesString();
        var period = this.getHours() >= 12 ? 'PM' : 'AM';

        returnVal += ' @ ' + hours + ':' + mins + ' ' + period;
    }
    return returnVal;
}
