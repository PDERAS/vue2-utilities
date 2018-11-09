var install = function (Vue, options) {
    if (!options || (options && options.extendDate)) {
        require('./prototypes/date');
    }
    if (!options || (options && options.extendNumber)) {
        require('./prototypes/number');
    }
    if (!options || (options && options.extendString)) {
        require('./prototypes/string');
    }

    Vue.$utils = Vue.prototype.$utils = {
        /**
         * Creates a date object from a database timestamp.
         *
         * @param string A timestamp
         *
         * @return Date A date object using UTC.
         */
        createDate: function createDate(timestamp) {
            if (!timestamp.match(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
                throw new Error("Format must be: YYYY-mm-dd hh-mm-ss");
            }

            var a = timestamp.split(" ");
            var d = a[0].split("-");
            var t = a[1].split(":");

            return new Date(Date.UTC(d[0], (d[1] - 1), d[2], t[0], t[1], t[2]));
        },

        /**
         * Finds the closest parent element with the given identifier.
         *
         * @param el HTMLElement
         * @param string identifier
         *
         * @return HTMLElement || null
         */
        getParent: function getParent(el, identifier) {
            var idn = identifier.toLowerCase();
            var type = 'class';
            if (/^#/.test(identifier)) type = 'id';

            type == 'class' ? idn = idn.replace(/./, '') : idn = idn.replace(/#/, '');
            while (el && el.parentNode) {
                el = el.parentNode;
                if (type == 'id') {
                    if (el.id && el.id == idn) {
                        return el;
                    }
                } else {
                    if (el.classList && el.classList.contains(idn)) {
                        return el;
                    }
                }
            }

            return undefined;
        },

        /**
         * Get all the query parameters from a given url or from the current window location.
         *
         * @param string url
         *
         * @return object
         */
        getUrlParams: function getUrlParams(url) {
            var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
            var obj = {};

            if (queryString) {
                queryString = queryString.split('#')[0];
                var arr = queryString.split('&');

                for (var i = 0; i < arr.length; i++) {
                    var a = arr[i].split('=');

                    var paramNum = undefined;
                    var slice = function slice(v) {
                        paramNum = v.slice(1, -1);
                        return '';
                    }
                    var paramName = a[0].replace(/\[\d*\]/, slice);

                    var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

                    if (obj[paramName]) {
                        if (typeof obj[paramName] === 'string') {
                            obj[paramName] = [obj[paramName]];
                        }

                        if (typeof paramNum === 'undefined') {
                            obj[paramName].push(paramValue);
                        } else {
                            obj[paramName][paramNum] = paramValue;
                        }
                    } else {
                        obj[paramName] = paramValue;
                    }
                }
            }

            return obj;
        },

        /**
         * Create a print screen for the view given.
         *
         * @param string html
         *
         * @return
         */
        printView: function printView(html) {
            /* Create the iframe */
            var printFrame = document.createElement('iframe');
            printFrame.name = "printFrame";
            printFrame.style.position = 'absolute';
            printFrame.style.top = '-1000000px';
            document.body.appendChild(printFrame);

            /* Grab the frame from the iframe */
            var frameDoc = printFrame.contentWindow ? printFrame.contentWindow : printFrame.contentDocument.document ? printFrame.contentDocument.document : printFrame.contentDocument;

            /* Write the html to the iframe */
            frameDoc.document.open();
            frameDoc.document.write(html);
            frameDoc.document.close();

            setTimeout(function () {
                frameDoc.focus();
                frameDoc.print();
                printFrame.remove();
            }, 500);
        },

        /**
         * Converts all newline characters in a string into <br>.
         *
         * Defaults to html syntax.
         *
         * @param str The string to perform the conversion on.
         * @param boolean is_xhtml Specify if the conversion should be to xhtml
         *
         * @return String Returns a string with the conversions performed.
         */
        nl2br: function nl2br(str, is_xhtml) {
            var is_xhtml = is_xhtml || false;
            var breakTag = is_xhtml ? '<br />' : '<br>';
            return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
        },

        /**
         * Redirects the window to a new url
         *
         * @param string url
         * @param boolean external
         *
         * @return
         */
        redirectTo: function redirectTo(url, external) {
            if (typeof external != 'undefined' && external) {
                window.location.href = url;
            } else {
                window.location.href = window.location.protocol + '//' + window.location.hostname + url;
            }
        },

        /**
         * Gets the documents safe active element.
         * REF: https://gist.github.com/Alex1990/046a6553dc83e22dd6f4
         *
         * @param HTMLWindow doc
         *
         * @return HTMLElement
         */
        safeActiveElement: function safeActiveElement(doc) {
            doc = doc || document;
            var activeElement;

            try {
                activeElement = doc.activeElement;
                if (!activeElement || !activeElement.nodeName) {
                    activeElement = doc.body;
                }
            } catch ( error ) {
                activeElement = doc.body;
            }

            return activeElement;
        }

        /**
         * Takes a color and a percent and shades that color
         *
         * @param string color
         * @param Number percent
         *
         * @return string
         */
        shadeColor: function shadeColor(color, percent) {
            var num = parseInt(color.slice(1), 16);
            var amt = Math.round(2.55 * percent);

            var R = (num >> 16) + amt;
            var G = (num >> 8 & 0x00FF) + amt;
            var B = (num & 0x0000FF) + amt;

            var newR = (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000;
            var newG = (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100;
            var newB = B < 255 ? (B < 1 ? 0 : B) : 255;

            var colorVal = 0x1000000 + newR + newB + newG;

            return "#" + colorVal.toString(16).slice(1);
        }
    }
}

export default install;
