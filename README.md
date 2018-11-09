# Vue Utilities
A vue.js utilities plugin

# Installation
```
npm install --save @pderas/vue2-utilities
```

## How to initialize Vue Utilities
Vue utilities is built as a vue plugin to allow for general purpose functions to be used throughout the application

```javascript
import Utilities from "@pderas/vue2-utilities";

// or just Vue.use(Utilities);
Vue.use(Utilities, {
    extendDate: true,
    extendNumber: true,
    extendString: true
});
```
## Usage
General usage: ```this.$utils.[FUNCTION_NAME]```
```javascript
// RedirectTo Example
this.$utils.redirectTo('/login')
```

## Functions
| name         | Parameter                  | Type                    | Description                                                                      | Return      |
|--------------|----------------------------|-------------------------|----------------------------------------------------------------------------------|:-----------:|
| createDate   | **timestamp**              | String                  | Creates a date object from a database timestamp and returns a date object in UTC | Date        |
| getParent    | **el** <br> **identifier** | HTMLElement <br> String | Finds the closest parent element with the given identifier                       | HTMLElement |
| getUrlParams | url                        | String                  | Converts the url parameters into an object                                       | Object      |
| printView    | **html**, timeout          | String, Number          | Create a print screen for the view given, default timeout is 500ms               | N/A         |
| nl2br        | **str** <br> is_xhtml      | String <br> Boolean     | Converts all newline characters in a string into 'br' tag                        | String      |
| redirectTo   | **url**                    | String                  | Redirects the window to a new url (based off hostname url)                       | N/A         |
| safeActiveElement | **doc**               | HTMLElement             | Gets the active element safely from the doc                                      | HTMLElement |
| shadeColor   | **color** <br> **percent** | String <br> Number      | Takes a color and a percent and shades that color                                | String      |

**Required parameters are bolded**


## Prototypes
### Date
| Name                 | Parameter                   | Type                | Default           |Description                                                              | Return     |
|----------------------|-----------------------------|:-------------------:|-------------------|-------------------------------------------------------------------------|:----------:|
| addTimezoneOffset    |                             |                     |                   | Modifies the date object by adding the timezone offset.                 | N/A        |
| format               | format                      | String              | 'M d Y'           | Converts the date to a custom formatted string (month day, year @ time) | String     |
| getMinutesString     |                             |                     |                   | Gets the minute string for a date.                                      | String     |
| getHoursString       |                             |                     |                   | Gets the hour string for a date.                                        | String     |
| removeTimezoneOffset |                             |                     |                   | Modifies the date object by removing the timezone offset.               | N/A        |
| subMinutes           | **date**                    | Date                |                   | Substracts the minutes of one date from another                         | Number     |
| ~~toFormattedString~~| ~~monthDisplay, showTime~~  | ~~String, Boolean~~ | ~~'short', true~~ | Depreciated. Please use the format prototype.                           | ~~String~~ |

**Required parameters are bolded**

### Number
| Name           | Parameter      | Type    | Default | Description                                     | Return |
|----------------|----------------|:-------:|---------|-------------------------------------------------|:------:|
| precisionRound | precision      | Number  | 0       | Rounds a number to the specified precision      | Number |
| toCommaString  |                |         |         | Converts a number to a comma seperated string   | String |
| toDollarString | showDollarSign | Boolean | true    | Converts a number to a dollar string            | String |

**Required parameters are bolded**

### String
| Name           | Parameter | Type   | Description                                          | Return |
|----------------|-----------|:------:|------------------------------------------------------|:------:|
| capitalize     |           |        | Capitalizes the first character                      | String |
| capitalizeAll  | delim     | String | Capitalizes all characters (delim defaults to space) | String |
| spacesToChar   | **char**  | String | Converts spaces to specified character               | String |
| stripSlashes   |           |        | Removes slashes                                      | String |
| stripPeriods   |           |        | Removes periods                                      | String |
| stripDashes    |           |        | Removes dashes                                       | String |
| toAlphaNumeric |           |        | Coverts a string to alpha numeric                    | String |

**Required parameters are bolded**


## License
This project is covered under the MIT License. Feel free to use it wherever you like.