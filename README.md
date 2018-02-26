# Vue Utilities
A vue.js utilities plugin

## How to initialize Vue Utilities
Vue utilities is built as a vue plugin to allow for general purpose functions to be used throughout the application

```javascript
import Utilities from "@pderas/vue2-utilities";

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
| name       | Parameter                  | Type                    | Description                                                                      | Return      |
|------------|----------------------------|-------------------------|----------------------------------------------------------------------------------|-------------|
| createDate | **timestamp**              | String                  | Creates a date object from a database timestamp and returns a date object in UTC | Date        |
| getParent  | **el** <br> **identifier** | HTMLElement <br> String | Finds the closest parent element with the given identifier                       | HTMLElement |
| getUrlParams | url                      | String                  | Converts the url parameters into an object                                       | Object |
| printView  | **html**                   | String                  | Create a print screen for the view given                                         | N/A         |
| nl2br      | **str** <br> is_xhtml      | String <br> Boolean     | Converts all newline characters in a string into 'br' tag                        | String      |
| redirectTo | **url**                    | String                  | Redirects the window to a new url (based off hostname url)                       | N/A         |
| shadeColor | **color** <br> **percent** | String <br> Number      | Takes a color and a percent and shades that color                                | String      |

**Required parameters are bolded**


## Prototypes
### Date
| Name             | Parameter               | Type            | Default       |Description                                                              | Return |
|------------------|-------------------------|-----------------|---------------|-------------------------------------------------------------------------|--------|
| applyTimezone    |                         |                 |               | Applys the local timezone to the date object                            | Date   |
| getMinutesString |                         |                 |               | Gets the minute string for a date.                                      | String |
| getHoursString   |                         |                 |               | Gets the hour string for a date.                                        | String |
| subMinutes       | **date**                | Date            |               | Substracts the minutes of one date from another                         | Number |
| toFormattedString| monthDisplay, showTime  | String, Boolean | 'short', true | Converts the date to a custom formatted string (month day, year @ time) | String |

**Required parameters are bolded**

### Number
| Name           | Parameter | Type | Description                                     | Return |
|----------------|-----------|------|-------------------------------------------------|--------|
| toCommaString  |           |      | Converts a number to a comma seperated string   | String |
| toDollarString |           |      | Converts a number to a dollar string            | String |

**Required parameters are bolded**

### String
| Name          | Parameter | Type   | Description                                          | Return |
|---------------|-----------|--------|------------------------------------------------------|--------|
| capitalize    |           |        | Capitalizes the first character                      | String |
| capitalizeAll | delim     | String | Capitalizes all characters (delim defaults to space) | String |
| spacesToChar  | **char**  | String | Converts spaces to specified character               | String |
| stripSlashes  |           |        | Removes slashes                                      | String |
| stripPeriods  |           |        | Removes periods                                      | String |
| stripDashes   |           |        | Removes dashes                                       | String |

**Required parameters are bolded**


## License
This project is covered under the MIT License. Feel free to use it wherever you like.