Represents the weather forecast for multiple days.

| Element | Description | Type | Notes |
| --- | --- | --- | --- |
| longitude | Longitude of the location where the forecast takes place | number |  |
| latitude | Latitude of the location where the forecast takes place | number |  |
| forecast | Daily forecast | array of daily forecast objects |  |
| &nbsp; &nbsp; date | Date of the forecast | string | Format is YYYY-MM-DD|
| &nbsp; &nbsp; description | Text description of the weather | string | Valid values: sunny, overcast, partly cloudy, raining, and snowing |
| &nbsp; &nbsp; maxTemp | High temperature | number | In degrees Celsius |
| &nbsp; &nbsp; minTemp | Low temperature | number | In degrees Celsius |
| &nbsp; &nbsp; windSpeed | Wind speed | number | In kilometers per hour |
| &nbsp; &nbsp; danger | true if the weather conditions are dangerous; otherwise, false. | Boolean | |