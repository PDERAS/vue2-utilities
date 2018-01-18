export default {
    install (Vue, options) {
        Vue.prototype.$utils = {

            /**
             * Creates a date object from a database timestamp.
             *
             * @param string A timestamp
             *
             * @return Date A date object using UTC.
             */
            createDate(timestamp) {
                if (!timestamp.match(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]) ([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
                    throw new Error("Format must be: YYYY-mm-dd hh-mm-ss");
                }

                var a = timestamp.split(" ");
                var d = a[0].split("-");
                var t = a[1].split(":");

                return new Date(Date.UTC(d[0],(d[1]-1),d[2],t[0],t[1],t[2]));
            },

            /**
             * Finds the closest parent element with the given identifier.
             *
             * @param el HTMLElement
             * @param string identifier
             *
             * @return HTMLElement || null
             */
            getParent(el, identifier) {
                var idn = identifier.toLowerCase();
                var type = 'class';
                if (/^#/.test(identifier))  type = 'id';

                type == 'class' ?  idn = idn.replace(/./, '') : idn = idn.replace(/#/, '');
                while (el && el.parentNode) {
                    el = el.parentNode;
                    if (type == 'id') {
                        if (el.id && el.id == idn) return el;
                    } else {
                        if (el.classList && el.classList.contains(idn)) return el ;
                    }
                }

                return undefined;
            },

            /**
             * Create a print screen for the view given.
             *
             * @param string html
             *
             * @return
             */
            printView(html) {
                /* Create the iframe */
                var printFrame = document.createElement('iframe');
                printFrame.name = "printFrame";
                printFrame.style.position = 'absolute';
                printFrame.style.top = '-1000000px';
                document.body.appendChild(printFrame);

                /* Grab the frame from the iframe */
                var frameDoc = printFrame.contentWindow ? printFrame.contentWindow :    printFrame.contentDocument.document ? printFrame.contentDocument.document : printFrame.contentDocument;

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
            nl2br(str, is_xhtml == false) {
                var breakTag = is_xhtml ? '<br />' : '<br>';
                return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
            },

            /**
             * Redirects the window to a new url
             *
             * @param string url
             *
             * @return
             */
            redirectTo(url) {
                window.location.href = window.location.protocol + '//' + window.location.hostname + url;
            },

            /**
             * Takes a color and a percent and shades that color
             *
             * @param string color
             * @param Number percent
             *
             * @return string
             */
            shadeColor(color, percent) {
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
}
