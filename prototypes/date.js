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

/**
 * Depreciated 1.2.0
 */
Date.prototype.toFormattedString = function(monthDisplay = 'short', showTime = true) {
    if (monthDisplay != 'short' && monthDisplay != 'long') {
        throw "ERROR: toFormattedString: monthDisplay must be either 'short' or 'long'";
    }

    console.error('Date.toFormattedString is deprecated. Date.format should now be used with new syntax.');
    var format = 'm d, Y';
    if (monthDisplay == 'long') {
        format = 'M d, Y';
    }

    if (showTime) {
        format += ' @ T';
    }

    return this.format(format);
}

/**
 * Used to format a date object to the required specifications.
 *
 * Y - year in 4 digit format
 * y - year in 2 digit format
 * M - month fully spelled out
 * m - month in shortened 3 letter format
 * d - date
 * T - time in 'h:m a' format
 * H - 24 hour clock hours
 * h - 12 hour clock hours
 * i - minutes
 * s - seconds
 * a - time period (AM or PM)
 *
 * @return string
 */
Date.prototype.format = function(format = 'M d Y') {
    // Check if a valid date is being used
    if (this.getTime() !== this.getTime()) return;

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

    // Insert Year
    format = format.replace('Y', this.getFullYear());
    format = format.replace(/\by/, this.getFullYear().toString().slice(2));

    // Insert Month
    format = format.replace('M', months[this.getMonth()]['long']);
    format = format.replace(/\bm/, months[this.getMonth()]['short']);

    // Insert Date
    format = format.replace('d', this.getDate());

    // Insert Time
    var hours = this.getHours() % 12 == 0 ? 12 : this.getHours() % 12;
    var mins = this.getMinutes();
    mins = mins < 10 ? "0" + mins : mins;
    var secs = this.getSeconds();
    secs = secs < 10 ? "0" + secs : secs;

    var period = this.getHours() >= 12 ? 'PM' : 'AM';

    format = format.replace('T', hours + ':' + mins + ' ' + period);
    format = format.replace('H', this.getHours());
    format = format.replace(/\bh/, hours);
    format = format.replace(/\bi/, mins);
    format = format.replace(/\bs/, secs);
    format = format.replace(/\ba/, period);

    return format;
}