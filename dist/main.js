/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/countryCodesMap.js":
/*!****************************************!*\
  !*** ./src/helpers/countryCodesMap.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var countryMap = {
  AD: 'Andorra',
  AE: 'United Arab Emirates',
  AF: 'Afghanistan',
  AG: 'Antigua and Barbuda',
  AI: 'Anguilla',
  AL: 'Albania',
  AM: 'Armenia',
  AN: 'Netherlands Antilles',
  AO: 'Angola',
  AQ: 'Antarctica',
  AR: 'Argentina',
  AS: 'American Samoa',
  AT: 'Austria',
  AU: 'Australia',
  AW: 'Aruba',
  AX: 'Aland Islands',
  AZ: 'Azerbaijan',
  BA: 'Bosnia and Herzegovina',
  BB: 'Barbados',
  BD: 'Bangladesh',
  BE: 'Belgium',
  BF: 'Burkina Faso',
  BG: 'Bulgaria',
  BH: 'Bahrain',
  BI: 'Burundi',
  BJ: 'Benin',
  BL: 'Saint-Barthelemy',
  BM: 'Bermuda',
  BN: 'Brunei Darussalam',
  BO: 'Bolivia',
  BR: 'Brazil',
  BS: 'Bahamas',
  BT: 'Bhutan',
  BV: 'Bouvet Island',
  BW: 'Botswana',
  BY: 'Belarus',
  BZ: 'Belize',
  CA: 'Canada',
  CC: 'Cocos (Keeling) Islands',
  CD: 'Congo, (Kinshasa)',
  CF: 'Central African Republic',
  CG: 'Congo (Brazzaville)',
  CH: 'Switzerland',
  CI: 'Cote D\'Ivoire (Ivory Coast)',
  CK: 'Cook Islands',
  CL: 'Chile',
  CM: 'Cameroon',
  CN: 'China',
  CO: 'Colombia',
  CR: 'Costa Rica',
  CU: 'Cuba',
  CV: 'Cape Verde',
  CX: 'Christmas Island',
  CY: 'Cyprus',
  CZ: 'Czech Republic',
  DE: 'Germany',
  DJ: 'Djibouti',
  DK: 'Denmark',
  DM: 'Dominica',
  DO: 'Dominican Republic',
  DZ: 'Algeria',
  EE: 'Estonia',
  EG: 'Egypt',
  EH: 'Western Sahara',
  ER: 'Eritrea',
  ES: 'Spain',
  ET: 'Ethiopia',
  FI: 'Finland',
  FJ: 'Fiji',
  FK: 'Falkland Islands (Malvinas)',
  FM: 'Micronesia, Federated States',
  FO: 'Faroe Islands',
  FR: 'France',
  GA: 'Gabon',
  GB: 'United Kingdom (Great Britain)',
  GD: 'Grenada',
  GE: 'Georgia',
  GF: 'French Guiana',
  GG: 'Guernsey',
  GH: 'Ghana',
  GI: 'Gibraltar',
  GL: 'Greenland',
  GM: 'Gambia',
  GN: 'Guinea',
  GP: 'Guadeloupe',
  GQ: 'Equatorial Guinea',
  GR: 'Greece',
  GS: 'South Georgia and South Sandwich Islands',
  GT: 'Guatemala',
  GU: 'Guam',
  GW: 'Guinea-Bissau',
  GY: 'Guyana',
  HK: 'Hong Kong, Special Admin Region of China',
  HM: 'Heard and McDonald Islands',
  HN: 'Honduras',
  HR: 'Croatia',
  HT: 'Haiti',
  HU: 'Hungary',
  ID: 'Indonesia',
  IE: 'Ireland',
  IL: 'Israel',
  IM: 'Isle of Man',
  IN: 'India',
  IO: 'British Indian Ocean Territory',
  IQ: 'Iraq',
  IR: 'Iran, Islamic Republic',
  IS: 'Iceland',
  IT: 'Italy',
  JE: 'Jersey',
  JM: 'Jamaica',
  JO: 'Jordan',
  JP: 'Japan',
  KE: 'Kenya',
  KG: 'Kyrgyzstan',
  KH: 'Cambodia',
  KI: 'Kiribati',
  KM: 'Comoros',
  KN: 'Saint Kitts and Nevis',
  KP: 'Korea (North)',
  KR: 'Korea (South)',
  KW: 'Kuwait',
  KY: 'Cayman Islands',
  KZ: 'Kazakhstan',
  LA: 'Lao, People\'s Democratic Republic',
  LB: 'Lebanon',
  LC: 'Saint Lucia',
  LI: 'Liechtenstein',
  LK: 'Sri Lanka',
  LR: 'Liberia',
  LS: 'Lesotho',
  LT: 'Lithuania',
  LU: 'Luxembourg',
  LV: 'Latvia',
  LY: 'Libya',
  MA: 'Morocco',
  MC: 'Monaco',
  MD: 'Moldova',
  ME: 'Montenegro',
  MF: 'Saint-Martin (French Part)',
  MG: 'Madagascar',
  MH: 'Marshall Islands',
  MK: 'Macedonia, the Former Yugoslav Republic',
  ML: 'Mali',
  MM: 'Myanmar',
  MN: 'Mongolia',
  MO: 'Macao, Special Administrative Region of China',
  MP: 'Northern Mariana Islands',
  MQ: 'Martinique',
  MR: 'Mauritania',
  MS: 'Montserrat',
  MT: 'Malta',
  MU: 'Mauritius',
  MV: 'Maldives',
  MW: 'Malawi',
  MX: 'Mexico',
  MY: 'Malaysia',
  MZ: 'Mozambique',
  NA: 'Namibia',
  NC: 'New Caledonia',
  NE: 'Niger',
  NF: 'Norfolk Island',
  NG: 'Nigeria',
  NI: 'Nicaragua',
  NL: 'Netherlands',
  NO: 'Norway',
  NP: 'Nepal',
  NR: 'Nauru',
  NU: 'Niue',
  NZ: 'New Zealand',
  OM: 'Oman',
  PA: 'Panama',
  PE: 'Peru',
  PF: 'French Polynesia',
  PG: 'Papua New Guinea',
  PH: 'Philippines',
  PK: 'Pakistan',
  PL: 'Poland',
  PM: 'Saint Pierre and Miquelon',
  PN: 'Pitcairn',
  PR: 'Puerto Rico',
  PS: 'Palestinian Territory',
  PT: 'Portugal',
  PW: 'Palau',
  PY: 'Paraguay',
  QA: 'Qatar',
  RE: 'Réunion',
  RO: 'Romania',
  RS: 'Serbia',
  RU: 'Russian Federation',
  RW: 'Rwanda',
  SA: 'Saudi Arabia',
  SB: 'Solomon Islands',
  SC: 'Seychelles',
  SD: 'Sudan',
  SE: 'Sweden',
  SG: 'Singapore',
  SH: 'Saint Helena',
  SI: 'Slovenia',
  SJ: 'Svalbard and Jan Mayen Islands',
  SK: 'Slovakia (Slovak Republic)',
  SL: 'Sierra Leone',
  SM: 'San Marino',
  SN: 'Senegal',
  SO: 'Somalia',
  SR: 'Suriname',
  SS: 'South Sudan',
  ST: 'Sao Tome and Principe',
  SU: 'Soviet Union (former)',
  SV: 'El Salvador',
  SX: 'Saint Maarten (Dutch Part)',
  SY: 'Syrian Arab Republic (Syria)',
  SZ: 'Swaziland',
  TC: 'Turks and Caicos Islands',
  TD: 'Chad',
  TF: 'French Southern Territories',
  TG: 'Togo',
  TH: 'Thailand',
  TJ: 'Tajikistan',
  TK: 'Tokelau',
  TL: 'Timor-Leste',
  TM: 'Turkmenistan',
  TN: 'Tunisia',
  TO: 'Tonga',
  TR: 'Turkey',
  TT: 'Trinidad and Tobago',
  TV: 'Tuvalu',
  TW: 'Taiwan, Republic of China',
  TZ: 'Tanzania, United Republic',
  UA: 'Ukraine',
  UG: 'Uganda',
  UM: 'United States Minor Outlying Islands',
  US: 'United States of America',
  UY: 'Uruguay',
  UZ: 'Uzbekistan',
  VA: 'Vatican City State (Holy See)',
  VC: 'Saint Vincent and Grenadines',
  VE: 'Venezuela (Bolivarian Republic)',
  VG: 'Virgin Islands (British)',
  VI: 'Virgin Islands (US)',
  VN: 'Viet Nam',
  VU: 'Vanuatu',
  WF: 'Wallis and Futuna Islands',
  WS: 'Samoa',
  YE: 'Yemen',
  YT: 'Mayotte',
  ZA: 'South Africa',
  ZM: 'Zambia',
  ZW: 'Zimbabwe',
  default: 'Unknown'
};
/* harmony default export */ __webpack_exports__["default"] = (countryMap);

/***/ }),

/***/ "./src/helpers/getAdditionalImageParams.js":
/*!*************************************************!*\
  !*** ./src/helpers/getAdditionalImageParams.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getAdditionalImageParams; });
function getAdditionalImageParams(timezone, language) {
  // get daytime
  var dayOptions = {
    timezone: timezone,
    hour12: false,
    hour: 'numeric'
  };
  var date = new Date().toLocaleString(language, dayOptions);
  var dayTime = 'day';

  if (Number(date) > 21 || Number(date) < 6) {
    dayTime = 'night';
  } // get season


  var seasonMap = {
    December: 'winter',
    January: 'winter',
    February: 'winter',
    March: 'spring',
    April: 'spring',
    May: 'spring',
    June: 'summer',
    July: 'summer',
    August: 'summer',
    September: 'autumn',
    October: 'autumn',
    November: 'autumn'
  };
  var seasonOptions = {
    timezone: timezone,
    month: 'long'
  };
  var month = new Date().toLocaleString(language, seasonOptions);
  return {
    daytime: dayTime,
    season: seasonMap[month]
  };
}

/***/ }),

/***/ "./src/helpers/getLinkToImage.js":
/*!***************************************!*\
  !*** ./src/helpers/getLinkToImage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLinkToImage; });
function getLinkToImage(currently, daytime, season) {
  var IMAGE_API_TOKEN, summary;
  return regeneratorRuntime.async(function getLinkToImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          IMAGE_API_TOKEN = 'a20d9b8dc1f6e77d27b52b46a8ae17b85ccce68b3b33ce341f565de7698e8207';
          summary = currently.summary; // to make a better match for background image you can delete 2 of 3 parameter from ${season},${daytime},${summary} query string

          return _context.abrupt("return", fetch("https://api.unsplash.com/photos/random?orientation=landscape&query=town,".concat(season, ",").concat(daytime, ",").concat(summary, "&client_id=").concat(IMAGE_API_TOKEN)).then(function (response) {
            return response.json();
          }));

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.log(_context.t0));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

/***/ }),

/***/ "./src/helpers/getSearchLocationCoordinates.js":
/*!*****************************************************!*\
  !*** ./src/helpers/getSearchLocationCoordinates.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSearchLocationCoordinates; });
function getSearchLocationCoordinates(location) {
  var SEARCH_LOCATION_API_TOKEN;
  return regeneratorRuntime.async(function getSearchLocationCoordinates$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          SEARCH_LOCATION_API_TOKEN = '33b970e3928f43e0a50be991fca89565';
          return _context.abrupt("return", fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(location, "&key=").concat(SEARCH_LOCATION_API_TOKEN, "&pretty=1&no_annotations=1")).then(function (response) {
            return response.json();
          }));

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.log(_context.t0));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
}

/***/ }),

/***/ "./src/helpers/getUserLocation.js":
/*!****************************************!*\
  !*** ./src/helpers/getUserLocation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getUserLocation; });
function getUserLocation() {
  var LOCATION_API_TOKEN;
  return regeneratorRuntime.async(function getUserLocation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          LOCATION_API_TOKEN = '2be969b2309564';
          return _context.abrupt("return", fetch("https://ipinfo.io/json?token=".concat(LOCATION_API_TOKEN)).then(function (response) {
            return response.json();
          }));

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.log(_context.t0));

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 5]]);
}

/***/ }),

/***/ "./src/helpers/getWeatherForecast.js":
/*!*******************************************!*\
  !*** ./src/helpers/getWeatherForecast.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getWeatherForecast; });
function getWeatherForecast(locationCoordinates, language) {
  var WEATHER_API_TOKEN, proxyUrl, apiUrl;
  return regeneratorRuntime.async(function getWeatherForecast$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          WEATHER_API_TOKEN = '53e63ca98a9117cd9ccffcf9f62efd6e';
          proxyUrl = 'https://cors-anywhere.herokuapp.com/';
          apiUrl = "https://api.darksky.net/forecast/".concat(WEATHER_API_TOKEN, "/").concat(locationCoordinates, "?lang=").concat(language);
          return _context.abrupt("return", fetch(proxyUrl + apiUrl).then(function (response) {
            return response.json();
          }));

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", console.log(_context.t0));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

/***/ }),

/***/ "./src/helpers/renderForecastInfo.js":
/*!*******************************************!*\
  !*** ./src/helpers/renderForecastInfo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderForecastInfo; });
/* harmony import */ var _renderTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderTime */ "./src/helpers/renderTime.js");

function renderForecastInfo(currently, daily, city, timezone, language, country, countryMap) {
  var summary = currently.summary,
      icon = currently.icon,
      apparentTemperature = currently.apparentTemperature,
      humidity = currently.humidity,
      windSpeed = currently.windSpeed,
      temperature = currently.temperature; // icons map

  var weatherIconClassName = {
    'clear-day': 'icon wi wi-day-sunny',
    'clear-night': 'icon wi wi-night-clear',
    'partly-cloudy-day': 'icon wi wi-day-cloudy',
    'partly-cloudy-night': 'icon wi wi-night-alt-cloudy',
    cloudy: 'icon wi wi-cloudy',
    rain: 'icon wi wi-rain',
    sleet: 'icon wi wi-sleet',
    snow: 'icon wi wi-snow',
    wind: 'icon wi wi-strong-wind',
    fog: 'icon wi wi-fog',
    default: 'icon wi wi-na'
  }; // date time options

  var options = {
    timeZone: timezone,
    hour12: false,
    weekday: 'short',
    day: '2-digit',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric'
  };
  var date = new Date().toLocaleString(language, options);
  var timeOptions = {
    timeZone: timezone,
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  var time = new Date().toLocaleString(language, timeOptions);
  Object(_renderTime__WEBPACK_IMPORTED_MODULE_0__["default"])(time, language, timezone, date); // location name

  var countryName = countryMap[country.toUpperCase()] ? countryMap[country.toUpperCase()] : countryMap.default;
  var divLocationName = document.createElement('div');
  divLocationName.innerText = "".concat(city, ", ").concat(countryName);
  divLocationName.className = 'weather-info__forecast-block-location-name'; // location date-time

  var divLocationDateTime = document.createElement('div');
  divLocationDateTime.className = 'weather-info__forecast-block-date-time';
  var divLocationDate = document.createElement('div');
  divLocationDate.innerText = "".concat(date);
  divLocationDate.className = 'weather-info__forecast-block-date-time_date';
  divLocationDateTime.appendChild(divLocationDate); // location weather forecast info block

  var divLocationWeatherInfo = document.createElement('div');
  divLocationWeatherInfo.className = 'weather-info__forecast-block-weather-info';
  var divLocationTemperature = document.createElement('div');
  divLocationTemperature.innerHTML = "".concat(Math.round(temperature), "&deg;");
  divLocationTemperature.className = 'weather-info__forecast-block-weather-info_temperature';
  divLocationWeatherInfo.appendChild(divLocationTemperature);
  var divLocationForecastInfo = document.createElement('div');
  divLocationForecastInfo.className = 'weather-info__forecast-block-weather-info_forecast';
  divLocationWeatherInfo.appendChild(divLocationForecastInfo); // icon

  var iconEl = document.createElement('i');
  iconEl.className = weatherIconClassName[icon] ? weatherIconClassName[icon] : weatherIconClassName.default;
  divLocationForecastInfo.appendChild(iconEl); // summary

  var DivSummary = document.createElement('div');
  DivSummary.innerText = summary;
  DivSummary.className = 'weather-info__forecast-block-weather-info_summary';
  divLocationForecastInfo.appendChild(DivSummary); // feels like

  var DivFeelsLike = document.createElement('div');
  DivFeelsLike.innerHTML = "feels like: ".concat(Math.round(apparentTemperature), "&deg;");
  DivFeelsLike.className = 'weather-info__forecast-block-weather-info_feels';
  divLocationForecastInfo.appendChild(DivFeelsLike); // wind

  var DivWind = document.createElement('div');
  var windSpeedInMeters = (windSpeed * 1000 / 3600).toFixed(2);
  DivWind.innerHTML = "".concat('wind: '.toUpperCase()).concat(windSpeedInMeters, " m/s");
  DivWind.className = 'weather-info__forecast-block-weather-info_wind';
  divLocationForecastInfo.appendChild(DivWind); // humidity

  var DivHumidity = document.createElement('div');
  var humidityInPercents = humidity * 100;
  DivHumidity.innerHTML = "humidity: ".concat(humidityInPercents, "%");
  DivHumidity.className = 'weather-info__forecast-block-weather-info_humidity';
  divLocationForecastInfo.appendChild(DivHumidity); // next 3 days weather forecast

  var divNextDaysForecast = document.createElement('div');
  divNextDaysForecast.className = 'weather-info__forecast-block-weather-info_next-days';
  divLocationWeatherInfo.appendChild(divNextDaysForecast);
  var nextDayOptions = {
    timezone: timezone,
    weekday: 'long'
  };

  for (var i = 1; i <= 3; i++) {
    var _daily$data$i = daily.data[i],
        _time = _daily$data$i.time,
        _icon = _daily$data$i.icon,
        temperatureMax = _daily$data$i.temperatureMax,
        temperatureMin = _daily$data$i.temperatureMin;
    var temperatureAvg = Math.floor((temperatureMax + temperatureMin) / 2);
    var nextDate = new Date(_time * 1000).toLocaleString(language, nextDayOptions);
    var divNextDay = document.createElement('div');
    divNextDay.className = 'weather-info__forecast-block-weather-info_next-day';
    var divNextDayName = document.createElement('div');
    divNextDayName.innerHTML = nextDate;
    divNextDayName.className = 'weather-info__forecast-block-weather-info_next-day-name';
    divNextDay.appendChild(divNextDayName);
    var divNextDayTemperature = document.createElement('div');
    divNextDayTemperature.innerHTML = "".concat(temperatureAvg, "&deg;");
    divNextDayTemperature.className = 'weather-info__forecast-block-weather-info_next-day-temperature';
    divNextDay.appendChild(divNextDayTemperature);
    var divNextDayIcon = document.createElement('div');
    divNextDayIcon.className = weatherIconClassName[_icon] ? weatherIconClassName[_icon] : weatherIconClassName.default;
    divNextDay.appendChild(divNextDayIcon);
    divNextDaysForecast.appendChild(divNextDay);
  }

  var divForecastLeftBlock = document.createElement('div');
  divForecastLeftBlock.appendChild(divLocationName);
  divForecastLeftBlock.appendChild(divLocationDateTime);
  divForecastLeftBlock.appendChild(divLocationWeatherInfo);
  divForecastLeftBlock.className = 'weather-info__forecast-block';
  return divForecastLeftBlock;
}

/***/ }),

/***/ "./src/helpers/renderMapBlock.js":
/*!***************************************!*\
  !*** ./src/helpers/renderMapBlock.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderMapBlock; });
function renderMapBlock(loc) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibGVpa2EiLCJhIjoiY2s0NTg0bmEwMDY4MTNsbGZrbWQ0ZTJ2ZCJ9.EwCBFvjABj3AtxUB6Ccq0g';
  var divMapRightBlock = document.createElement('div');
  divMapRightBlock.className = 'weather-info__map-block';
  var divMap = document.createElement('div');
  divMap.className = 'weather-info__map-block_map';
  divMapRightBlock.appendChild(divMap);
  var divInnerMap = document.createElement('div');
  divInnerMap.className = 'inner_map';
  divInnerMap.id = 'map';
  divMap.appendChild(divInnerMap); // get coords and render map section

  var coords = loc.split(',');
  setTimeout(function () {
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coords[1], coords[0]],
      // [lng, lat]
      zoom: 10
    });
  }, 0);

  function getCoordinates(coords) {
    var minutes = 0;
    var coordinate = coords.split('.');

    if (coordinate.length > 1) {
      minutes = Math.round(Number("0.".concat(coordinate[1]) * 60));
    }

    coordinate[1] = minutes;
    return coordinate;
  }

  var longitude = getCoordinates(coords[1]);
  var latitude = getCoordinates(coords[0]);
  var divLatitude = document.createElement('div');
  divLatitude.innerHTML = "Latitude: ".concat(latitude[0], "&deg; ").concat(latitude[1], "'");
  divLatitude.className = 'weather-info__map-block_latitude';
  divMapRightBlock.appendChild(divLatitude);
  var divLongitude = document.createElement('div');
  divLongitude.innerHTML = "Longitude: ".concat(longitude[0], "&deg; ").concat(longitude[1], "'");
  divLongitude.className = 'weather-info__map-block_longitude';
  divMapRightBlock.appendChild(divLongitude);
  return divMapRightBlock;
}

/***/ }),

/***/ "./src/helpers/renderTime.js":
/*!***********************************!*\
  !*** ./src/helpers/renderTime.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderTime; });
function renderTime(time, language, timezone, date) {
  var result = time.split(':');
  var seconds = Number(result[2]);
  var minutes = Number(result[1]);
  var hours = Number(result[0]);
  setInterval(function () {
    var secondsToRender = seconds;
    var minutesToRender = minutes;
    var hoursToRender = hours;

    if (seconds.toString().length === 1) {
      secondsToRender = "0".concat(seconds);
    }

    if (minutes.toString().length === 1) {
      minutesToRender = "0".concat(minutes);
    }

    if (hours.toString().length === 1) {
      hoursToRender = "0".concat(hours);
    }

    seconds++;

    if (seconds === 60) {
      minutes++;
      seconds = 0;

      if (minutes === 60) {
        hours++;
        minutes = 0;

        if (hours === 24) {
          hours = 0;
        }
      }
    }

    if (secondsToRender === '00') {
      document.querySelector('.weather-info__forecast-block-date-time_date').innerText = "".concat(date.slice(0, -5)).concat(hoursToRender, ":").concat(minutesToRender);
    }
  }, 1000);
}

/***/ }),

/***/ "./src/helpers/renderTopPanel.js":
/*!***************************************!*\
  !*** ./src/helpers/renderTopPanel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderTopPanel; });
function renderTopPanel(language) {
  // top left panel buttons
  var leftPanelButtonsContainer = document.createDocumentFragment();
  var divSwitchImage = document.createElement('div');
  divSwitchImage.className = 'button weather-info__top-panel-switch-image';
  leftPanelButtonsContainer.appendChild(divSwitchImage); // language select

  var divSwitchLanguage = document.createElement('div');
  divSwitchLanguage.className = 'weather-info__top-panel-switch-language';
  leftPanelButtonsContainer.appendChild(divSwitchLanguage);
  var divCurrentLanguage = document.createElement('div');
  divCurrentLanguage.className = 'button weather-info__top-panel-switch-language_title';
  divCurrentLanguage.innerText = language.toUpperCase();
  divSwitchLanguage.appendChild(divCurrentLanguage);
  var ulLanguageList = document.createElement('ul');
  ulLanguageList.className = 'weather-info__top-panel-switch-language_list';
  divSwitchLanguage.appendChild(ulLanguageList);
  var liEn = document.createElement('li');
  liEn.className = 'active-lang weather-info__top-panel-switch-language_list-item';
  liEn.innerText = 'EN';
  ulLanguageList.appendChild(liEn);
  var liRu = document.createElement('li');
  liRu.className = 'weather-info__top-panel-switch-language_list-item';
  liRu.innerText = 'RU';
  ulLanguageList.appendChild(liRu);
  var liBe = document.createElement('li');
  liBe.className = 'weather-info__top-panel-switch-language_list-item';
  liBe.innerText = 'BE';
  ulLanguageList.appendChild(liBe); // temperature

  var divSwitchTemperature = document.createElement('div');
  divSwitchTemperature.className = 'weather-info__top-panel-switch-temperature';
  var divFahrenheit = document.createElement('div');
  divFahrenheit.className = 'active button weather-info__top-panel-switch-temperature_fahrenheit';
  divFahrenheit.innerHTML = '&deg;F';
  divSwitchTemperature.appendChild(divFahrenheit);
  var divCelsius = document.createElement('div');
  divCelsius.className = 'button weather-info__top-panel-switch-temperature_celsius';
  divCelsius.innerHTML = '&deg;C';
  divSwitchTemperature.appendChild(divCelsius);
  leftPanelButtonsContainer.appendChild(divSwitchTemperature); // top right search panel

  var rightPanelSearchBarContainer = document.createDocumentFragment();
  var inputSearch = document.createElement('input');
  inputSearch.type = 'text';
  inputSearch.className = 'weather-info__top-panel-search';
  rightPanelSearchBarContainer.appendChild(inputSearch);
  var inputSubmitSearch = document.createElement('div');
  inputSubmitSearch.innerText = 'search'.toUpperCase();
  inputSubmitSearch.className = 'button weather-info__top-panel-submit';
  rightPanelSearchBarContainer.appendChild(inputSubmitSearch); // top panel

  var divTopPanelBlock = document.createElement('div');
  divTopPanelBlock.className = 'weather-info__top-panel';
  var divLeftPanelBlock = document.createElement('div');
  divLeftPanelBlock.className = 'weather-info__top-panel_left';
  divLeftPanelBlock.appendChild(leftPanelButtonsContainer);
  divTopPanelBlock.appendChild(divLeftPanelBlock);
  var divRightPanelBlock = document.createElement('div');
  divRightPanelBlock.className = 'weather-info__top-panel_right';
  divRightPanelBlock.appendChild(rightPanelSearchBarContainer);
  divTopPanelBlock.appendChild(divRightPanelBlock);
  return divTopPanelBlock;
}

/***/ }),

/***/ "./src/helpers/renderWeatherApp.js":
/*!*****************************************!*\
  !*** ./src/helpers/renderWeatherApp.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderWeatherApp; });
function renderWeatherApp(urls, topPanelBlock, leftForecastBlock, rightMapBlock) {
  // wrapper
  var divWrapper = document.createElement('div');
  divWrapper.className = 'wrapper'; // weather block

  var divWeatherBlock = document.createElement('div');
  divWeatherBlock.className = 'weather-info';
  divWeatherBlock.style.backgroundImage = "linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(".concat(urls.regular, ")");
  divWrapper.appendChild(divWeatherBlock); // inner content

  divWeatherBlock.appendChild(topPanelBlock);
  divWeatherBlock.appendChild(leftForecastBlock);
  divWeatherBlock.appendChild(rightMapBlock);
  document.querySelector('body').appendChild(divWrapper);
}

/***/ }),

/***/ "./src/helpers/setTopPanelEvents.js":
/*!******************************************!*\
  !*** ./src/helpers/setTopPanelEvents.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setTopPanelEvents; });
/* harmony import */ var _getLinkToImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLinkToImage */ "./src/helpers/getLinkToImage.js");
/* harmony import */ var _getSearchLocationCoordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSearchLocationCoordinates */ "./src/helpers/getSearchLocationCoordinates.js");
/* harmony import */ var _getWeatherForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeatherForecast */ "./src/helpers/getWeatherForecast.js");
/* harmony import */ var _renderForecastInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderForecastInfo */ "./src/helpers/renderForecastInfo.js");
/* harmony import */ var _countryCodesMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countryCodesMap */ "./src/helpers/countryCodesMap.js");
/* harmony import */ var _renderMapBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderMapBlock */ "./src/helpers/renderMapBlock.js");
/* harmony import */ var _getAdditionalImageParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getAdditionalImageParams */ "./src/helpers/getAdditionalImageParams.js");







function setTopPanelEvents(currently, daily, language, timezone) {
  // change degrees section
  function toCelsius(temperature) {
    return Math.round((Number(temperature) - 32) * 5 / 9);
  }

  function renderDegrees(degreeType, currently, daily) {
    var apparentTemperature = currently.apparentTemperature,
        temperature = currently.temperature;
    var calcTemperature = temperature;
    var calcApparentTemperature = apparentTemperature;

    if (degreeType === 'celsius') {
      calcTemperature = toCelsius(temperature);
      calcApparentTemperature = toCelsius(apparentTemperature);
    }

    document.querySelector('.weather-info__forecast-block-weather-info_temperature').innerHTML = "".concat(Math.round(calcTemperature), "&deg;");
    document.querySelector('.weather-info__forecast-block-weather-info_feels').innerHTML = "feels like: ".concat(Math.round(calcApparentTemperature), "&deg;");

    for (var i = 1; i <= 3; i++) {
      var _daily$data$i = daily.data[i],
          temperatureMax = _daily$data$i.temperatureMax,
          temperatureMin = _daily$data$i.temperatureMin;
      var temperatureAvg = Math.floor((temperatureMax + temperatureMin) / 2);

      if (degreeType === 'celsius') {
        temperatureAvg = toCelsius(temperatureAvg);
      }

      document.querySelector(".weather-info__forecast-block-weather-info_next-day:nth-child(".concat(i, ") .weather-info__forecast-block-weather-info_next-day-temperature")).innerHTML = "".concat(temperatureAvg, "&deg;");
    }
  }

  function changeDegreesByType(currently, daily) {
    localStorage.setItem('language', language); // change degrees to fahrenheit

    document.querySelector('.weather-info__top-panel-switch-temperature_fahrenheit').addEventListener('click', function changeToFar() {
      document.querySelector('.weather-info__top-panel-switch-temperature_celsius').classList.remove('active');
      this.classList.add('active');
      renderDegrees('fahrenheit', currently, daily);
      localStorage.setItem('temperature', 'fahrenheit');
    }); // change degrees to celsius

    document.querySelector('.weather-info__top-panel-switch-temperature_celsius').addEventListener('click', function changeToCel() {
      document.querySelector('.weather-info__top-panel-switch-temperature_fahrenheit').classList.remove('active');
      this.classList.add('active');
      renderDegrees('celsius', currently, daily);
      localStorage.setItem('temperature', 'celsius');
    });

    if (localStorage.getItem('temperature') && localStorage.getItem('temperature') === 'celsius') {
      document.querySelector('.weather-info__top-panel-switch-temperature_celsius').click();
    }
  } // change background image section


  function changeBackground(currently, timezone, language) {
    var _getAdditionalImagePa = Object(_getAdditionalImageParams__WEBPACK_IMPORTED_MODULE_6__["default"])(timezone, language),
        daytime = _getAdditionalImagePa.daytime,
        season = _getAdditionalImagePa.season;

    function setBackground() {
      var _ref, urls;

      return regeneratorRuntime.async(function setBackground$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(Object(_getLinkToImage__WEBPACK_IMPORTED_MODULE_0__["default"])(currently, daytime, season));

            case 2:
              _ref = _context.sent;
              urls = _ref.urls;
              document.querySelector('.weather-info').style.backgroundImage = "linear-gradient(180deg, rgba(8, 15, 26, 0.79) 0%, rgba(17, 17, 46, 0.66) 100%), url(".concat(urls.regular, ")");

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    } // remove events to prevent additional requests


    document.querySelector('.weather-info__top-panel-switch-image').removeEventListener('click', setBackground);
    document.querySelector('.weather-info__top-panel-switch-image').addEventListener('click', setBackground);
  }

  changeBackground(currently, timezone, language); // language switcher section

  document.querySelector('.weather-info__top-panel-switch-language').addEventListener('click', function () {
    document.querySelector('.weather-info__top-panel-switch-language_list').classList.toggle('visible');
    document.querySelector('.weather-info__top-panel-switch-language_title').classList.toggle('clicked');
  });
  changeDegreesByType(currently, daily); // get location rendering according to search section

  document.querySelector('.weather-info__top-panel-submit').addEventListener('click', function _callee() {
    var location, _ref2, results, locationData, _locationData, geometry, components, lat, lng, country_code, locCoords, _ref3, currently, daily, timezone, killId, leftForecastBlock, rightMapBlock;

    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            location = document.querySelector('.weather-info__top-panel-search').value;

            if (!(location.length === 0)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            _context2.next = 5;
            return regeneratorRuntime.awrap(Object(_getSearchLocationCoordinates__WEBPACK_IMPORTED_MODULE_1__["default"])(location));

          case 5:
            _ref2 = _context2.sent;
            results = _ref2.results;
            locationData = results;

            if (results.length > 1) {
              locationData = results[0];
            }

            _locationData = locationData, geometry = _locationData.geometry, components = _locationData.components;

            if (!(geometry === undefined)) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt("return");

          case 12:
            lat = geometry.lat, lng = geometry.lng;
            country_code = components.country_code;
            locCoords = "".concat(lat, ",").concat(lng);
            _context2.next = 17;
            return regeneratorRuntime.awrap(Object(_getWeatherForecast__WEBPACK_IMPORTED_MODULE_2__["default"])(locCoords, language));

          case 17:
            _ref3 = _context2.sent;
            currently = _ref3.currently;
            daily = _ref3.daily;
            timezone = _ref3.timezone;
            killId = setTimeout(function () {
              for (var i = killId; i > 0; i--) {
                clearInterval(i);
              }
            }, 0);
            leftForecastBlock = Object(_renderForecastInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(currently, daily, location, timezone, language, country_code, _countryCodesMap__WEBPACK_IMPORTED_MODULE_4__["default"]);
            document.querySelector('.weather-info__forecast-block').replaceWith(leftForecastBlock);
            changeDegreesByType(currently, daily);
            changeBackground(currently, timezone, language);
            rightMapBlock = Object(_renderMapBlock__WEBPACK_IMPORTED_MODULE_5__["default"])(locCoords);
            document.querySelector('.weather-info__map-block').replaceWith(rightMapBlock);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    });
  }); // ability to search by pressing enter

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
      document.querySelector('.weather-info__top-panel-submit').click();
    }
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_getUserLocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/getUserLocation */ "./src/helpers/getUserLocation.js");
/* harmony import */ var _helpers_getWeatherForecast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/getWeatherForecast */ "./src/helpers/getWeatherForecast.js");
/* harmony import */ var _helpers_renderWeatherApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/renderWeatherApp */ "./src/helpers/renderWeatherApp.js");
/* harmony import */ var _helpers_renderForecastInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/renderForecastInfo */ "./src/helpers/renderForecastInfo.js");
/* harmony import */ var _helpers_renderTopPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/renderTopPanel */ "./src/helpers/renderTopPanel.js");
/* harmony import */ var _helpers_countryCodesMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/countryCodesMap */ "./src/helpers/countryCodesMap.js");
/* harmony import */ var _helpers_renderMapBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/renderMapBlock */ "./src/helpers/renderMapBlock.js");
/* harmony import */ var _helpers_getAdditionalImageParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/getAdditionalImageParams */ "./src/helpers/getAdditionalImageParams.js");
/* harmony import */ var _helpers_getLinkToImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/getLinkToImage */ "./src/helpers/getLinkToImage.js");
/* harmony import */ var _helpers_setTopPanelEvents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/setTopPanelEvents */ "./src/helpers/setTopPanelEvents.js");











function init() {
  var language, _ref, loc, city, timezone, country, _ref2, currently, daily, _getAdditionalImagePa, daytime, season, _ref3, urls, leftForecastBlock, topPanelBlock, rightMapBlock;

  return regeneratorRuntime.async(function init$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          language = 'en';

          if (localStorage.getItem('language')) {
            language = localStorage.getItem('language');
          }

          localStorage.setItem('language', language);
          _context.next = 6;
          return regeneratorRuntime.awrap(Object(_helpers_getUserLocation__WEBPACK_IMPORTED_MODULE_0__["default"])());

        case 6:
          _ref = _context.sent;
          loc = _ref.loc;
          city = _ref.city;
          timezone = _ref.timezone;
          country = _ref.country;
          _context.next = 13;
          return regeneratorRuntime.awrap(Object(_helpers_getWeatherForecast__WEBPACK_IMPORTED_MODULE_1__["default"])(loc, language));

        case 13:
          _ref2 = _context.sent;
          currently = _ref2.currently;
          daily = _ref2.daily;
          _getAdditionalImagePa = Object(_helpers_getAdditionalImageParams__WEBPACK_IMPORTED_MODULE_7__["default"])(timezone, language), daytime = _getAdditionalImagePa.daytime, season = _getAdditionalImagePa.season;
          _context.next = 19;
          return regeneratorRuntime.awrap(Object(_helpers_getLinkToImage__WEBPACK_IMPORTED_MODULE_8__["default"])(currently, daytime, season));

        case 19:
          _ref3 = _context.sent;
          urls = _ref3.urls;
          leftForecastBlock = Object(_helpers_renderForecastInfo__WEBPACK_IMPORTED_MODULE_3__["default"])(currently, daily, city, timezone, language, country, _helpers_countryCodesMap__WEBPACK_IMPORTED_MODULE_5__["default"]);
          topPanelBlock = Object(_helpers_renderTopPanel__WEBPACK_IMPORTED_MODULE_4__["default"])(language);
          rightMapBlock = Object(_helpers_renderMapBlock__WEBPACK_IMPORTED_MODULE_6__["default"])(loc);
          Object(_helpers_renderWeatherApp__WEBPACK_IMPORTED_MODULE_2__["default"])(urls, topPanelBlock, leftForecastBlock, rightMapBlock);
          Object(_helpers_setTopPanelEvents__WEBPACK_IMPORTED_MODULE_9__["default"])(currently, daily, language, timezone);
          _context.next = 31;
          break;

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
}

init();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvY291bnRyeUNvZGVzTWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2dldEFkZGl0aW9uYWxJbWFnZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRMaW5rVG9JbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRTZWFyY2hMb2NhdGlvbkNvb3JkaW5hdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL2dldFVzZXJMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9nZXRXZWF0aGVyRm9yZWNhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcmVuZGVyRm9yZWNhc3RJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlbmRlck1hcEJsb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9oZWxwZXJzL3JlbmRlclRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcmVuZGVyVG9wUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvcmVuZGVyV2VhdGhlckFwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGVscGVycy9zZXRUb3BQYW5lbEV2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY291bnRyeU1hcCIsIkFEIiwiQUUiLCJBRiIsIkFHIiwiQUkiLCJBTCIsIkFNIiwiQU4iLCJBTyIsIkFRIiwiQVIiLCJBUyIsIkFUIiwiQVUiLCJBVyIsIkFYIiwiQVoiLCJCQSIsIkJCIiwiQkQiLCJCRSIsIkJGIiwiQkciLCJCSCIsIkJJIiwiQkoiLCJCTCIsIkJNIiwiQk4iLCJCTyIsIkJSIiwiQlMiLCJCVCIsIkJWIiwiQlciLCJCWSIsIkJaIiwiQ0EiLCJDQyIsIkNEIiwiQ0YiLCJDRyIsIkNIIiwiQ0kiLCJDSyIsIkNMIiwiQ00iLCJDTiIsIkNPIiwiQ1IiLCJDVSIsIkNWIiwiQ1giLCJDWSIsIkNaIiwiREUiLCJESiIsIkRLIiwiRE0iLCJETyIsIkRaIiwiRUUiLCJFRyIsIkVIIiwiRVIiLCJFUyIsIkVUIiwiRkkiLCJGSiIsIkZLIiwiRk0iLCJGTyIsIkZSIiwiR0EiLCJHQiIsIkdEIiwiR0UiLCJHRiIsIkdHIiwiR0giLCJHSSIsIkdMIiwiR00iLCJHTiIsIkdQIiwiR1EiLCJHUiIsIkdTIiwiR1QiLCJHVSIsIkdXIiwiR1kiLCJISyIsIkhNIiwiSE4iLCJIUiIsIkhUIiwiSFUiLCJJRCIsIklFIiwiSUwiLCJJTSIsIklOIiwiSU8iLCJJUSIsIklSIiwiSVMiLCJJVCIsIkpFIiwiSk0iLCJKTyIsIkpQIiwiS0UiLCJLRyIsIktIIiwiS0kiLCJLTSIsIktOIiwiS1AiLCJLUiIsIktXIiwiS1kiLCJLWiIsIkxBIiwiTEIiLCJMQyIsIkxJIiwiTEsiLCJMUiIsIkxTIiwiTFQiLCJMVSIsIkxWIiwiTFkiLCJNQSIsIk1DIiwiTUQiLCJNRSIsIk1GIiwiTUciLCJNSCIsIk1LIiwiTUwiLCJNTSIsIk1OIiwiTU8iLCJNUCIsIk1RIiwiTVIiLCJNUyIsIk1UIiwiTVUiLCJNViIsIk1XIiwiTVgiLCJNWSIsIk1aIiwiTkEiLCJOQyIsIk5FIiwiTkYiLCJORyIsIk5JIiwiTkwiLCJOTyIsIk5QIiwiTlIiLCJOVSIsIk5aIiwiT00iLCJQQSIsIlBFIiwiUEYiLCJQRyIsIlBIIiwiUEsiLCJQTCIsIlBNIiwiUE4iLCJQUiIsIlBTIiwiUFQiLCJQVyIsIlBZIiwiUUEiLCJSRSIsIlJPIiwiUlMiLCJSVSIsIlJXIiwiU0EiLCJTQiIsIlNDIiwiU0QiLCJTRSIsIlNHIiwiU0giLCJTSSIsIlNKIiwiU0siLCJTTCIsIlNNIiwiU04iLCJTTyIsIlNSIiwiU1MiLCJTVCIsIlNVIiwiU1YiLCJTWCIsIlNZIiwiU1oiLCJUQyIsIlREIiwiVEYiLCJURyIsIlRIIiwiVEoiLCJUSyIsIlRMIiwiVE0iLCJUTiIsIlRPIiwiVFIiLCJUVCIsIlRWIiwiVFciLCJUWiIsIlVBIiwiVUciLCJVTSIsIlVTIiwiVVkiLCJVWiIsIlZBIiwiVkMiLCJWRSIsIlZHIiwiVkkiLCJWTiIsIlZVIiwiV0YiLCJXUyIsIllFIiwiWVQiLCJaQSIsIlpNIiwiWlciLCJkZWZhdWx0IiwiZ2V0QWRkaXRpb25hbEltYWdlUGFyYW1zIiwidGltZXpvbmUiLCJsYW5ndWFnZSIsImRheU9wdGlvbnMiLCJob3VyMTIiLCJob3VyIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImRheVRpbWUiLCJOdW1iZXIiLCJzZWFzb25NYXAiLCJEZWNlbWJlciIsIkphbnVhcnkiLCJGZWJydWFyeSIsIk1hcmNoIiwiQXByaWwiLCJNYXkiLCJKdW5lIiwiSnVseSIsIkF1Z3VzdCIsIlNlcHRlbWJlciIsIk9jdG9iZXIiLCJOb3ZlbWJlciIsInNlYXNvbk9wdGlvbnMiLCJtb250aCIsImRheXRpbWUiLCJzZWFzb24iLCJnZXRMaW5rVG9JbWFnZSIsImN1cnJlbnRseSIsIklNQUdFX0FQSV9UT0tFTiIsInN1bW1hcnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZ2V0U2VhcmNoTG9jYXRpb25Db29yZGluYXRlcyIsImxvY2F0aW9uIiwiU0VBUkNIX0xPQ0FUSU9OX0FQSV9UT0tFTiIsImdldFVzZXJMb2NhdGlvbiIsIkxPQ0FUSU9OX0FQSV9UT0tFTiIsImdldFdlYXRoZXJGb3JlY2FzdCIsImxvY2F0aW9uQ29vcmRpbmF0ZXMiLCJXRUFUSEVSX0FQSV9UT0tFTiIsInByb3h5VXJsIiwiYXBpVXJsIiwicmVuZGVyRm9yZWNhc3RJbmZvIiwiZGFpbHkiLCJjaXR5IiwiY291bnRyeSIsImljb24iLCJhcHBhcmVudFRlbXBlcmF0dXJlIiwiaHVtaWRpdHkiLCJ3aW5kU3BlZWQiLCJ0ZW1wZXJhdHVyZSIsIndlYXRoZXJJY29uQ2xhc3NOYW1lIiwiY2xvdWR5IiwicmFpbiIsInNsZWV0Iiwic25vdyIsIndpbmQiLCJmb2ciLCJvcHRpb25zIiwidGltZVpvbmUiLCJ3ZWVrZGF5IiwiZGF5IiwibWludXRlIiwidGltZU9wdGlvbnMiLCJzZWNvbmQiLCJ0aW1lIiwicmVuZGVyVGltZSIsImNvdW50cnlOYW1lIiwidG9VcHBlckNhc2UiLCJkaXZMb2NhdGlvbk5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJjbGFzc05hbWUiLCJkaXZMb2NhdGlvbkRhdGVUaW1lIiwiZGl2TG9jYXRpb25EYXRlIiwiYXBwZW5kQ2hpbGQiLCJkaXZMb2NhdGlvbldlYXRoZXJJbmZvIiwiZGl2TG9jYXRpb25UZW1wZXJhdHVyZSIsImlubmVySFRNTCIsIk1hdGgiLCJyb3VuZCIsImRpdkxvY2F0aW9uRm9yZWNhc3RJbmZvIiwiaWNvbkVsIiwiRGl2U3VtbWFyeSIsIkRpdkZlZWxzTGlrZSIsIkRpdldpbmQiLCJ3aW5kU3BlZWRJbk1ldGVycyIsInRvRml4ZWQiLCJEaXZIdW1pZGl0eSIsImh1bWlkaXR5SW5QZXJjZW50cyIsImRpdk5leHREYXlzRm9yZWNhc3QiLCJuZXh0RGF5T3B0aW9ucyIsImkiLCJkYXRhIiwidGVtcGVyYXR1cmVNYXgiLCJ0ZW1wZXJhdHVyZU1pbiIsInRlbXBlcmF0dXJlQXZnIiwiZmxvb3IiLCJuZXh0RGF0ZSIsImRpdk5leHREYXkiLCJkaXZOZXh0RGF5TmFtZSIsImRpdk5leHREYXlUZW1wZXJhdHVyZSIsImRpdk5leHREYXlJY29uIiwiZGl2Rm9yZWNhc3RMZWZ0QmxvY2siLCJyZW5kZXJNYXBCbG9jayIsImxvYyIsIm1hcGJveGdsIiwiYWNjZXNzVG9rZW4iLCJkaXZNYXBSaWdodEJsb2NrIiwiZGl2TWFwIiwiZGl2SW5uZXJNYXAiLCJpZCIsImNvb3JkcyIsInNwbGl0Iiwic2V0VGltZW91dCIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsImdldENvb3JkaW5hdGVzIiwibWludXRlcyIsImNvb3JkaW5hdGUiLCJsZW5ndGgiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImRpdkxhdGl0dWRlIiwiZGl2TG9uZ2l0dWRlIiwicmVzdWx0Iiwic2Vjb25kcyIsImhvdXJzIiwic2V0SW50ZXJ2YWwiLCJzZWNvbmRzVG9SZW5kZXIiLCJtaW51dGVzVG9SZW5kZXIiLCJob3Vyc1RvUmVuZGVyIiwidG9TdHJpbmciLCJxdWVyeVNlbGVjdG9yIiwic2xpY2UiLCJyZW5kZXJUb3BQYW5lbCIsImxlZnRQYW5lbEJ1dHRvbnNDb250YWluZXIiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiZGl2U3dpdGNoSW1hZ2UiLCJkaXZTd2l0Y2hMYW5ndWFnZSIsImRpdkN1cnJlbnRMYW5ndWFnZSIsInVsTGFuZ3VhZ2VMaXN0IiwibGlFbiIsImxpUnUiLCJsaUJlIiwiZGl2U3dpdGNoVGVtcGVyYXR1cmUiLCJkaXZGYWhyZW5oZWl0IiwiZGl2Q2Vsc2l1cyIsInJpZ2h0UGFuZWxTZWFyY2hCYXJDb250YWluZXIiLCJpbnB1dFNlYXJjaCIsInR5cGUiLCJpbnB1dFN1Ym1pdFNlYXJjaCIsImRpdlRvcFBhbmVsQmxvY2siLCJkaXZMZWZ0UGFuZWxCbG9jayIsImRpdlJpZ2h0UGFuZWxCbG9jayIsInJlbmRlcldlYXRoZXJBcHAiLCJ1cmxzIiwidG9wUGFuZWxCbG9jayIsImxlZnRGb3JlY2FzdEJsb2NrIiwicmlnaHRNYXBCbG9jayIsImRpdldyYXBwZXIiLCJkaXZXZWF0aGVyQmxvY2siLCJiYWNrZ3JvdW5kSW1hZ2UiLCJyZWd1bGFyIiwic2V0VG9wUGFuZWxFdmVudHMiLCJ0b0NlbHNpdXMiLCJyZW5kZXJEZWdyZWVzIiwiZGVncmVlVHlwZSIsImNhbGNUZW1wZXJhdHVyZSIsImNhbGNBcHBhcmVudFRlbXBlcmF0dXJlIiwiY2hhbmdlRGVncmVlc0J5VHlwZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlVG9GYXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjaGFuZ2VUb0NlbCIsImdldEl0ZW0iLCJjbGljayIsImNoYW5nZUJhY2tncm91bmQiLCJzZXRCYWNrZ3JvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsInZhbHVlIiwicmVzdWx0cyIsImxvY2F0aW9uRGF0YSIsImdlb21ldHJ5IiwiY29tcG9uZW50cyIsInVuZGVmaW5lZCIsImxhdCIsImxuZyIsImNvdW50cnlfY29kZSIsImxvY0Nvb3JkcyIsImtpbGxJZCIsImNsZWFySW50ZXJ2YWwiLCJyZXBsYWNlV2l0aCIsImUiLCJjb2RlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsSUFBRSxFQUFFLFNBRGE7QUFFakJDLElBQUUsRUFBRSxzQkFGYTtBQUdqQkMsSUFBRSxFQUFFLGFBSGE7QUFJakJDLElBQUUsRUFBRSxxQkFKYTtBQUtqQkMsSUFBRSxFQUFFLFVBTGE7QUFNakJDLElBQUUsRUFBRSxTQU5hO0FBT2pCQyxJ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a0IsQ0FBQ25CLFNBQUQsRUFBWW9CLEtBQVosRUFBbUJDLElBQW5CLEVBQXlCakQsUUFBekIsRUFBbUNDLFFBQW5DLEVBQTZDaUQsT0FBN0MsRUFBc0Q3UyxnRUFBdEQsQ0FmaEQ7QUFnQlVpYSx1QkFoQlYsR0FnQjBCdEIsdUVBQWMsQ0FBQy9JLFFBQUQsQ0FoQnhDO0FBaUJVdUssdUJBakJWLEdBaUIwQjFELHVFQUFjLENBQUNDLEdBQUQsQ0FqQnhDO0FBbUJJcUQsbUZBQWdCLENBQUNDLElBQUQsRUFBT0MsYUFBUCxFQUFzQkMsaUJBQXRCLEVBQXlDQyxhQUF6QyxDQUFoQjtBQUNBSyxvRkFBaUIsQ0FBQ2pKLFNBQUQsRUFBWW9CLEtBQVosRUFBbUIvQyxRQUFuQixFQUE2QkQsUUFBN0IsQ0FBakI7QUFwQko7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFzQkltQyxpQkFBTyxDQUFDQyxHQUFSOztBQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUEwQkE2SyxJQUFJLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgY291bnRyeU1hcCA9IHtcbiAgQUQ6ICdBbmRvcnJhJyxcbiAgQUU6ICdVbml0ZWQgQXJhYiBFbWlyYXRlcycsXG4gIEFGOiAnQWZnaGFuaXN0YW4nLFxuICBBRzogJ0FudGlndWEgYW5kIEJhcmJ1ZGEnLFxuICBBSTogJ0FuZ3VpbGxhJyxcbiAgQUw6ICdBbGJhbmlhJyxcbiAgQU06ICdBcm1lbmlhJyxcbiAgQU46ICdOZXRoZXJsYW5kcyBBbnRpbGxlcycsXG4gIEFPOiAnQW5nb2xhJyxcbiAgQVE6ICdBbnRhcmN0aWNhJyxcbiAgQVI6ICdBcmdlbnRpbmEnLFxuICBBUzogJ0FtZXJpY2FuIFNhbW9hJyxcbiAgQVQ6ICdBdXN0cmlhJyxcbiAgQVU6ICdBdXN0cmFsaWEnLFxuICBBVzogJ0FydWJhJyxcbiAgQVg6ICdBbGFuZCBJc2xhbmRzJyxcbiAgQVo6ICdBemVyYmFpamFuJyxcbiAgQkE6ICdCb3NuaWEgYW5kIEhlcnplZ292aW5hJyxcbiAgQkI6ICdCYXJiYWRvcycsXG4gIEJEOiAnQmFuZ2xhZGVzaCcsXG4gIEJFOiAnQmVsZ2l1bScsXG4gIEJGOiAnQnVya2luYSBGYXNvJyxcbiAgQkc6ICdCdWxnYXJpYScsXG4gIEJIOiAnQmFocmFpbicsXG4gIEJJOiAnQnVydW5kaScsXG4gIEJKOiAnQmVuaW4nLFxuICBCTDogJ1NhaW50LUJhcnRoZWxlbXknLFxuICBCTTogJ0Jlcm11ZGEnLFxuICBCTjogJ0JydW5laSBEYXJ1c3NhbGFtJyxcbiAgQk86ICdCb2xpdmlhJyxcbiAgQlI6ICdCcmF6aWwnLFxuICBCUzogJ0JhaGFtYXMnLFxuICBCVDogJ0JodXRhbicsXG4gIEJWOiAnQm91dmV0IElzbGFuZCcsXG4gIEJXOiAnQm90c3dhbmEnLFxuICBCWTogJ0JlbGFydXMnLFxuICBCWjogJ0JlbGl6ZScsXG4gIENBOiAnQ2FuYWRhJyxcbiAgQ0M6ICdDb2NvcyAoS2VlbGluZykgSXNsYW5kcycsXG4gIENEOiAnQ29uZ28sIChLaW5zaGFzYSknLFxuICBDRjogJ0NlbnRyYWwgQWZyaWNhbiBSZXB1YmxpYycsXG4gIENHOiAnQ29uZ28gKEJyYXp6YXZpbGxlKScsXG4gIENIOiAnU3dpdHplcmxhbmQnLFxuICBDSTogJ0NvdGUgRFxcJ0l2b2lyZSAoSXZvcnkgQ29hc3QpJyxcbiAgQ0s6ICdDb29rIElzbGFuZHMnLFxuICBDTDogJ0NoaWxlJyxcbiAgQ006ICdDYW1lcm9vbicsXG4gIENOOiAnQ2hpbmEnLFxuICBDTzogJ0NvbG9tYmlhJyxcbiAgQ1I6ICdDb3N0YSBSaWNhJyxcbiAgQ1U6ICdDdWJhJyxcbiAgQ1Y6ICdDYXBlIFZlcmRlJyxcbiAgQ1g6ICdDaHJpc3RtYXMgSXNsYW5kJyxcbiAgQ1k6ICdDeXBydXMnLFxuICBDWjogJ0N6ZWNoIFJlcHVibGljJyxcbiAgREU6ICdHZXJtYW55JyxcbiAgREo6ICdEamlib3V0aScsXG4gIERLOiAnRGVubWFyaycsXG4gIERNOiAnRG9taW5pY2EnLFxuICBETzogJ0RvbWluaWNhbiBSZXB1YmxpYycsXG4gIERaOiAnQWxnZXJpYScsXG4gIEVFOiAnRXN0b25pYScsXG4gIEVHOiAnRWd5cHQnLFxuICBFSDogJ1dlc3Rlcm4gU2FoYXJhJyxcbiAgRVI6ICdFcml0cmVhJyxcbiAgRVM6ICdTcGFpbicsXG4gIEVUOiAnRXRoaW9waWEnLFxuICBGSTogJ0ZpbmxhbmQnLFxuICBGSjogJ0ZpamknLFxuICBGSzogJ0ZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKScsXG4gIEZNOiAnTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcycsXG4gIEZPOiAnRmFyb2UgSXNsYW5kcycsXG4gIEZSOiAnRnJhbmNlJyxcbiAgR0E6ICdHYWJvbicsXG4gIEdCOiAnVW5pdGVkIEtpbmdkb20gKEdyZWF0IEJyaXRhaW4pJyxcbiAgR0Q6ICdHcmVuYWRhJyxcbiAgR0U6ICdHZW9yZ2lhJyxcbiAgR0Y6ICdGcmVuY2ggR3VpYW5hJyxcbiAgR0c6ICdHdWVybnNleScsXG4gIEdIOiAnR2hhbmEnLFxuICBHSTogJ0dpYnJhbHRhcicsXG4gIEdMOiAnR3JlZW5sYW5kJyxcbiAgR006ICdHYW1iaWEnLFxuICBHTjogJ0d1aW5lYScsXG4gIEdQOiAnR3VhZGVsb3VwZScsXG4gIEdROiAnRXF1YXRvcmlhbCBHdWluZWEnLFxuICBHUjogJ0dyZWVjZScsXG4gIEdTOiAnU291dGggR2VvcmdpYSBhbmQgU291dGggU2FuZHdpY2ggSXNsYW5kcycsXG4gIEdUOiAnR3VhdGVtYWxhJyxcbiAgR1U6ICdHdWFtJyxcbiAgR1c6ICdHdWluZWEtQmlzc2F1JyxcbiAgR1k6ICdHdXlhbmEnLFxuICBISzogJ0hvbmcgS29uZywgU3BlY2lhbCBBZG1pbiBSZWdpb24gb2YgQ2hpbmEnLFxuICBITTogJ0hlYXJkIGFuZCBNY0RvbmFsZCBJc2xhbmRzJyxcbiAgSE46ICdIb25kdXJhcycsXG4gIEhSOiAnQ3JvYXRpYScsXG4gIEhUOiAnSGFpdGknLFxuICBIVTogJ0h1bmdhcnknLFxuICBJRDogJ0luZG9uZXNpYScsXG4gIElFOiAnSXJlbGFuZCcsXG4gIElMOiAnSXNyYWVsJyxcbiAgSU06ICdJc2xlIG9mIE1hbicsXG4gIElOOiAnSW5kaWEnLFxuICBJTzogJ0JyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeScsXG4gIElROiAnSXJhcScsXG4gIElSOiAnSXJhbiwgSXNsYW1pYyBSZXB1YmxpYycsXG4gIElTOiAnSWNlbGFuZCcsXG4gIElUOiAnSXRhbHknLFxuICBKRTogJ0plcnNleScsXG4gIEpNOiAnSmFtYWljYScsXG4gIEpPOiAnSm9yZGFuJyxcbiAgSlA6ICdKYXBhbicsXG4gIEtFOiAnS2VueWEnLFxuICBLRzogJ0t5cmd5enN0YW4nLFxuICBLSDogJ0NhbWJvZGlhJyxcbiAgS0k6ICdLaXJpYmF0aScsXG4gIEtNOiAnQ29tb3JvcycsXG4gIEtOOiAnU2FpbnQgS2l0dHMgYW5kIE5ldmlzJyxcbiAgS1A6ICdLb3JlYSAoTm9ydGgpJyxcbiAgS1I6ICdLb3JlYSAoU291dGgpJyxcbiAgS1c6ICdLdXdhaXQnLFxuICBLWTogJ0NheW1hbiBJc2xhbmRzJyxcbiAgS1o6ICdLYXpha2hzdGFuJyxcbiAgTEE6ICdMYW8sIFBlb3BsZVxcJ3MgRGVtb2NyYXRpYyBSZXB1YmxpYycsXG4gIExCOiAnTGViYW5vbicsXG4gIExDOiAnU2FpbnQgTHVjaWEnLFxuICBMSTogJ0xpZWNodGVuc3RlaW4nLFxuICBMSzogJ1NyaSBMYW5rYScsXG4gIExSOiAnTGliZXJpYScsXG4gIExTOiAnTGVzb3RobycsXG4gIExUOiAnTGl0aHVhbmlhJyxcbiAgTFU6ICdMdXhlbWJvdXJnJyxcbiAgTFY6ICdMYXR2aWEnLFxuICBMWTogJ0xpYnlhJyxcbiAgTUE6ICdNb3JvY2NvJyxcbiAgTUM6ICdNb25hY28nLFxuICBNRDogJ01vbGRvdmEnLFxuICBNRTogJ01vbnRlbmVncm8nLFxuICBNRjogJ1NhaW50LU1hcnRpbiAoRnJlbmNoIFBhcnQpJyxcbiAgTUc6ICdNYWRhZ2FzY2FyJyxcbiAgTUg6ICdNYXJzaGFsbCBJc2xhbmRzJyxcbiAgTUs6ICdNYWNlZG9uaWEsIHRoZSBGb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMnLFxuICBNTDogJ01hbGknLFxuICBNTTogJ015YW5tYXInLFxuICBNTjogJ01vbmdvbGlhJyxcbiAgTU86ICdNYWNhbywgU3BlY2lhbCBBZG1pbmlzdHJhdGl2ZSBSZWdpb24gb2YgQ2hpbmEnLFxuICBNUDogJ05vcnRoZXJuIE1hcmlhbmEgSXNsYW5kcycsXG4gIE1ROiAnTWFydGluaXF1ZScsXG4gIE1SOiAnTWF1cml0YW5pYScsXG4gIE1TOiAnTW9udHNlcnJhdCcsXG4gIE1UOiAnTWFsdGEnLFxuICBNVTogJ01hdXJpdGl1cycsXG4gIE1WOiAnTWFsZGl2ZXMnLFxuICBNVzogJ01hbGF3aScsXG4gIE1YOiAnTWV4aWNvJyxcbiAgTVk6ICdNYWxheXNpYScsXG4gIE1aOiAnTW96YW1iaXF1ZScsXG4gIE5BOiAnTmFtaWJpYScsXG4gIE5DOiAnTmV3IENhbGVkb25pYScsXG4gIE5FOiAnTmlnZXInLFxuICBORjogJ05vcmZvbGsgSXNsYW5kJyxcbiAgTkc6ICdOaWdlcmlhJyxcbiAgTkk6ICdOaWNhcmFndWEnLFxuICBOTDogJ05ldGhlcmxhbmRzJyxcbiAgTk86ICdOb3J3YXknLFxuICBOUDogJ05lcGFsJyxcbiAgTlI6ICdOYXVydScsXG4gIE5VOiAnTml1ZScsXG4gIE5aOiAnTmV3IFplYWxhbmQnLFxuICBPTTogJ09tYW4nLFxuICBQQTogJ1BhbmFtYScsXG4gIFBFOiAnUGVydScsXG4gIFBGOiAnRnJlbmNoIFBvbHluZXNpYScsXG4gIFBHOiAnUGFwdWEgTmV3IEd1aW5lYScsXG4gIFBIOiAnUGhpbGlwcGluZXMnLFxuICBQSzogJ1Bha2lzdGFuJyxcbiAgUEw6ICdQb2xhbmQnLFxuICBQTTogJ1NhaW50IFBpZXJyZSBhbmQgTWlxdWVsb24nLFxuICBQTjogJ1BpdGNhaXJuJyxcbiAgUFI6ICdQdWVydG8gUmljbycsXG4gIFBTOiAnUGFsZXN0aW5pYW4gVGVycml0b3J5JyxcbiAgUFQ6ICdQb3J0dWdhbCcsXG4gIFBXOiAnUGFsYXUnLFxuICBQWTogJ1BhcmFndWF5JyxcbiAgUUE6ICdRYXRhcicsXG4gIFJFOiAnUsOpdW5pb24nLFxuICBSTzogJ1JvbWFuaWEnLFxuICBSUzogJ1NlcmJpYScsXG4gIFJVOiAnUnVzc2lhbiBGZWRlcmF0aW9uJyxcbiAgUlc6ICdSd2FuZGEnLFxuICBTQTogJ1NhdWRpIEFyYWJpYScsXG4gIFNCOiAnU29sb21vbiBJc2xhbmRzJyxcbiAgU0M6ICdTZXljaGVsbGVzJyxcbiAgU0Q6ICdTdWRhbicsXG4gIFNFOiAnU3dlZGVuJyxcbiAgU0c6ICdTaW5nYXBvcmUnLFxuICBTSDogJ1NhaW50IEhlbGVuYScsXG4gIFNJOiAnU2xvdmVuaWEnLFxuICBTSjogJ1N2YWxiYXJkIGFuZCBKYW4gTWF5ZW4gSXNsYW5kcycsXG4gIFNLOiAnU2xvdmFraWEgKFNsb3ZhayBSZXB1YmxpYyknLFxuICBTTDogJ1NpZXJyYSBMZW9uZScsXG4gIFNNOiAnU2FuIE1hcmlubycsXG4gIFNOOiAnU2VuZWdhbCcsXG4gIFNPOiAnU29tYWxpYScsXG4gIFNSOiAnU3VyaW5hbWUnLFxuICBTUzogJ1NvdXRoIFN1ZGFuJyxcbiAgU1Q6ICdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnLFxuICBTVTogJ1NvdmlldCBVbmlvbiAoZm9ybWVyKScsXG4gIFNWOiAnRWwgU2FsdmFkb3InLFxuICBTWDogJ1NhaW50IE1hYXJ0ZW4gKER1dGNoIFBhcnQpJyxcbiAgU1k6ICdTeXJpYW4gQXJhYiBSZXB1YmxpYyAoU3lyaWEpJyxcbiAgU1o6ICdTd2F6aWxhbmQnLFxuICBUQzogJ1R1cmtzIGFuZCBDYWljb3MgSXNsYW5kcycsXG4gIFREOiAnQ2hhZCcsXG4gIFRGOiAnRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzJyxcbiAgVEc6ICdUb2dvJyxcbiAgVEg6ICdUaGFpbGFuZCcsXG4gIFRKOiAnVGFqaWtpc3RhbicsXG4gIFRLOiAnVG9rZWxhdScsXG4gIFRMOiAnVGltb3ItTGVzdGUnLFxuICBUTTogJ1R1cmttZW5pc3RhbicsXG4gIFROOiAnVHVuaXNpYScsXG4gIFRPOiAnVG9uZ2EnLFxuICBUUjogJ1R1cmtleScsXG4gIFRUOiAnVHJpbmlkYWQgYW5kIFRvYmFnbycsXG4gIFRWOiAnVHV2YWx1JyxcbiAgVFc6ICdUYWl3YW4sIFJlcHVibGljIG9mIENoaW5hJyxcbiAgVFo6ICdUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljJyxcbiAgVUE6ICdVa3JhaW5lJyxcbiAgVUc6ICdVZ2FuZGEnLFxuICBVTTogJ1VuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kcycsXG4gIFVTOiAnVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhJyxcbiAgVVk6ICdVcnVndWF5JyxcbiAgVVo6ICdVemJla2lzdGFuJyxcbiAgVkE6ICdWYXRpY2FuIENpdHkgU3RhdGUgKEhvbHkgU2VlKScsXG4gIFZDOiAnU2FpbnQgVmluY2VudCBhbmQgR3JlbmFkaW5lcycsXG4gIFZFOiAnVmVuZXp1ZWxhIChCb2xpdmFyaWFuIFJlcHVibGljKScsXG4gIFZHOiAnVmlyZ2luIElzbGFuZHMgKEJyaXRpc2gpJyxcbiAgVkk6ICdWaXJnaW4gSXNsYW5kcyAoVVMpJyxcbiAgVk46ICdWaWV0IE5hbScsXG4gIFZVOiAnVmFudWF0dScsXG4gIFdGOiAnV2FsbGlzIGFuZCBGdXR1bmEgSXNsYW5kcycsXG4gIFdTOiAnU2Ftb2EnLFxuICBZRTogJ1llbWVuJyxcbiAgWVQ6ICdNYXlvdHRlJyxcbiAgWkE6ICdTb3V0aCBBZnJpY2EnLFxuICBaTTogJ1phbWJpYScsXG4gIFpXOiAnWmltYmFid2UnLFxuICBkZWZhdWx0OiAnVW5rbm93bicsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3VudHJ5TWFwO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0QWRkaXRpb25hbEltYWdlUGFyYW1zKHRpbWV6b25lLCBsYW5ndWFnZSkge1xuICAvLyBnZXQgZGF5dGltZVxuICBjb25zdCBkYXlPcHRpb25zID0ge1xuICAgIHRpbWV6b25lLFxuICAgIGhvdXIxMjogZmFsc2UsXG4gICAgaG91cjogJ251bWVyaWMnLFxuICB9O1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhsYW5ndWFnZSwgZGF5T3B0aW9ucyk7XG5cbiAgbGV0IGRheVRpbWUgPSAnZGF5JztcbiAgaWYgKE51bWJlcihkYXRlKSA+IDIxIHx8IE51bWJlcihkYXRlKSA8IDYpIHtcbiAgICBkYXlUaW1lID0gJ25pZ2h0JztcbiAgfVxuXG4gIC8vIGdldCBzZWFzb25cbiAgY29uc3Qgc2Vhc29uTWFwID0ge1xuICAgIERlY2VtYmVyOiAnd2ludGVyJyxcbiAgICBKYW51YXJ5OiAnd2ludGVyJyxcbiAgICBGZWJydWFyeTogJ3dpbnRlcicsXG4gICAgTWFyY2g6ICdzcHJpbmcnLFxuICAgIEFwcmlsOiAnc3ByaW5nJyxcbiAgICBNYXk6ICdzcHJpbmcnLFxuICAgIEp1bmU6ICdzdW1tZXInLFxuICAgIEp1bHk6ICdzdW1tZXInLFxuICAgIEF1Z3VzdDogJ3N1bW1lcicsXG4gICAgU2VwdGVtYmVyOiAnYXV0dW1uJyxcbiAgICBPY3RvYmVyOiAnYXV0dW1uJyxcbiAgICBOb3ZlbWJlcjogJ2F1dHVtbicsXG4gIH07XG5cbiAgY29uc3Qgc2Vhc29uT3B0aW9ucyA9IHtcbiAgICB0aW1lem9uZSxcbiAgICBtb250aDogJ2xvbmcnLFxuICB9O1xuICBjb25zdCBtb250aCA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcobGFuZ3VhZ2UsIHNlYXNvbk9wdGlvbnMpO1xuXG4gIHJldHVybiB7XG4gICAgZGF5dGltZTogZGF5VGltZSxcbiAgICBzZWFzb246IHNlYXNvbk1hcFttb250aF0sXG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRMaW5rVG9JbWFnZShjdXJyZW50bHksIGRheXRpbWUsIHNlYXNvbikge1xuICB0cnkge1xuICAgIGNvbnN0IElNQUdFX0FQSV9UT0tFTiA9ICdhMjBkOWI4ZGMxZjZlNzdkMjdiNTJiNDZhOGFlMTdiODVjY2NlNjhiM2IzM2NlMzQxZjU2NWRlNzY5OGU4MjA3JztcbiAgICBjb25zdCB7IHN1bW1hcnkgfSA9IGN1cnJlbnRseTtcblxuICAgIC8vIHRvIG1ha2UgYSBiZXR0ZXIgbWF0Y2ggZm9yIGJhY2tncm91bmQgaW1hZ2UgeW91IGNhbiBkZWxldGUgMiBvZiAzIHBhcmFtZXRlciBmcm9tICR7c2Vhc29ufSwke2RheXRpbWV9LCR7c3VtbWFyeX0gcXVlcnkgc3RyaW5nXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbT9vcmllbnRhdGlvbj1sYW5kc2NhcGUmcXVlcnk9dG93biwke3NlYXNvbn0sJHtkYXl0aW1lfSwke3N1bW1hcnl9JmNsaWVudF9pZD0ke0lNQUdFX0FQSV9UT0tFTn1gKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VhcmNoTG9jYXRpb25Db29yZGluYXRlcyhsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IFNFQVJDSF9MT0NBVElPTl9BUElfVE9LRU4gPSAnMzNiOTcwZTM5MjhmNDNlMGE1MGJlOTkxZmNhODk1NjUnO1xuXG4gICAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9xPSR7bG9jYXRpb259JmtleT0ke1NFQVJDSF9MT0NBVElPTl9BUElfVE9LRU59JnByZXR0eT0xJm5vX2Fubm90YXRpb25zPTFgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckxvY2F0aW9uKCkge1xuICB0cnkge1xuICAgIGNvbnN0IExPQ0FUSU9OX0FQSV9UT0tFTiA9ICcyYmU5NjliMjMwOTU2NCc7XG5cbiAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vaXBpbmZvLmlvL2pzb24/dG9rZW49JHtMT0NBVElPTl9BUElfVE9LRU59YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JlY2FzdChsb2NhdGlvbkNvb3JkaW5hdGVzLCBsYW5ndWFnZSkge1xuICB0cnkge1xuICAgIGNvbnN0IFdFQVRIRVJfQVBJX1RPS0VOID0gJzUzZTYzY2E5OGE5MTE3Y2Q5Y2NmZmNmOWY2MmVmZDZlJztcbiAgICBjb25zdCBwcm94eVVybCA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xuICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5kYXJrc2t5Lm5ldC9mb3JlY2FzdC8ke1dFQVRIRVJfQVBJX1RPS0VOfS8ke2xvY2F0aW9uQ29vcmRpbmF0ZXN9P2xhbmc9JHtsYW5ndWFnZX1gO1xuXG4gICAgcmV0dXJuIGZldGNoKHByb3h5VXJsICsgYXBpVXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHJlbmRlclRpbWUgZnJvbSAnLi9yZW5kZXJUaW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3RJbmZvKGN1cnJlbnRseSwgZGFpbHksIGNpdHksIHRpbWV6b25lLCBsYW5ndWFnZSwgY291bnRyeSwgY291bnRyeU1hcCkge1xuICBjb25zdCB7XG4gICAgc3VtbWFyeSwgaWNvbiwgYXBwYXJlbnRUZW1wZXJhdHVyZSwgaHVtaWRpdHksIHdpbmRTcGVlZCwgdGVtcGVyYXR1cmUsXG4gIH0gPSBjdXJyZW50bHk7XG5cbiAgLy8gaWNvbnMgbWFwXG4gIGNvbnN0IHdlYXRoZXJJY29uQ2xhc3NOYW1lID0ge1xuICAgICdjbGVhci1kYXknOiAnaWNvbiB3aSB3aS1kYXktc3VubnknLFxuICAgICdjbGVhci1uaWdodCc6ICdpY29uIHdpIHdpLW5pZ2h0LWNsZWFyJyxcbiAgICAncGFydGx5LWNsb3VkeS1kYXknOiAnaWNvbiB3aSB3aS1kYXktY2xvdWR5JyxcbiAgICAncGFydGx5LWNsb3VkeS1uaWdodCc6ICdpY29uIHdpIHdpLW5pZ2h0LWFsdC1jbG91ZHknLFxuICAgIGNsb3VkeTogJ2ljb24gd2kgd2ktY2xvdWR5JyxcbiAgICByYWluOiAnaWNvbiB3aSB3aS1yYWluJyxcbiAgICBzbGVldDogJ2ljb24gd2kgd2ktc2xlZXQnLFxuICAgIHNub3c6ICdpY29uIHdpIHdpLXNub3cnLFxuICAgIHdpbmQ6ICdpY29uIHdpIHdpLXN0cm9uZy13aW5kJyxcbiAgICBmb2c6ICdpY29uIHdpIHdpLWZvZycsXG4gICAgZGVmYXVsdDogJ2ljb24gd2kgd2ktbmEnLFxuICB9O1xuXG4gIC8vIGRhdGUgdGltZSBvcHRpb25zXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgdGltZVpvbmU6IHRpbWV6b25lLFxuICAgIGhvdXIxMjogZmFsc2UsXG4gICAgd2Vla2RheTogJ3Nob3J0JyxcbiAgICBkYXk6ICcyLWRpZ2l0JyxcbiAgICBtb250aDogJ2xvbmcnLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgfTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcobGFuZ3VhZ2UsIG9wdGlvbnMpO1xuXG4gIGNvbnN0IHRpbWVPcHRpb25zID0ge1xuICAgIHRpbWVab25lOiB0aW1lem9uZSxcbiAgICBob3VyMTI6IGZhbHNlLFxuICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICBtaW51dGU6ICdudW1lcmljJyxcbiAgICBzZWNvbmQ6ICdudW1lcmljJyxcbiAgfTtcbiAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcobGFuZ3VhZ2UsIHRpbWVPcHRpb25zKTtcbiAgcmVuZGVyVGltZSh0aW1lLCBsYW5ndWFnZSwgdGltZXpvbmUsIGRhdGUpO1xuXG4gIC8vIGxvY2F0aW9uIG5hbWVcbiAgY29uc3QgY291bnRyeU5hbWUgPSBjb3VudHJ5TWFwW2NvdW50cnkudG9VcHBlckNhc2UoKV0gPyBjb3VudHJ5TWFwW2NvdW50cnkudG9VcHBlckNhc2UoKV0gOiBjb3VudHJ5TWFwLmRlZmF1bHQ7XG4gIGNvbnN0IGRpdkxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZMb2NhdGlvbk5hbWUuaW5uZXJUZXh0ID0gYCR7Y2l0eX0sICR7Y291bnRyeU5hbWV9YDtcbiAgZGl2TG9jYXRpb25OYW1lLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLWxvY2F0aW9uLW5hbWUnO1xuXG4gIC8vIGxvY2F0aW9uIGRhdGUtdGltZVxuICBjb25zdCBkaXZMb2NhdGlvbkRhdGVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkxvY2F0aW9uRGF0ZVRpbWUuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2stZGF0ZS10aW1lJztcblxuICBjb25zdCBkaXZMb2NhdGlvbkRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25EYXRlLmlubmVyVGV4dCA9IGAke2RhdGV9YDtcbiAgZGl2TG9jYXRpb25EYXRlLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLWRhdGUtdGltZV9kYXRlJztcbiAgZGl2TG9jYXRpb25EYXRlVGltZS5hcHBlbmRDaGlsZChkaXZMb2NhdGlvbkRhdGUpO1xuXG4gIC8vIGxvY2F0aW9uIHdlYXRoZXIgZm9yZWNhc3QgaW5mbyBibG9ja1xuICBjb25zdCBkaXZMb2NhdGlvbldlYXRoZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkxvY2F0aW9uV2VhdGhlckluZm8uY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvJztcblxuICBjb25zdCBkaXZMb2NhdGlvblRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkxvY2F0aW9uVGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh0ZW1wZXJhdHVyZSl9JmRlZztgO1xuICBkaXZMb2NhdGlvblRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb190ZW1wZXJhdHVyZSc7XG4gIGRpdkxvY2F0aW9uV2VhdGhlckluZm8uYXBwZW5kQ2hpbGQoZGl2TG9jYXRpb25UZW1wZXJhdHVyZSk7XG5cbiAgY29uc3QgZGl2TG9jYXRpb25Gb3JlY2FzdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9jYXRpb25Gb3JlY2FzdEluZm8uY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvX2ZvcmVjYXN0JztcbiAgZGl2TG9jYXRpb25XZWF0aGVySW5mby5hcHBlbmRDaGlsZChkaXZMb2NhdGlvbkZvcmVjYXN0SW5mbyk7XG5cbiAgLy8gaWNvblxuICBjb25zdCBpY29uRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gIGljb25FbC5jbGFzc05hbWUgPSB3ZWF0aGVySWNvbkNsYXNzTmFtZVtpY29uXSA/IHdlYXRoZXJJY29uQ2xhc3NOYW1lW2ljb25dIDogd2VhdGhlckljb25DbGFzc05hbWUuZGVmYXVsdDtcbiAgZGl2TG9jYXRpb25Gb3JlY2FzdEluZm8uYXBwZW5kQ2hpbGQoaWNvbkVsKTtcblxuICAvLyBzdW1tYXJ5XG4gIGNvbnN0IERpdlN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgRGl2U3VtbWFyeS5pbm5lclRleHQgPSBzdW1tYXJ5O1xuICBEaXZTdW1tYXJ5LmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb19zdW1tYXJ5JztcbiAgZGl2TG9jYXRpb25Gb3JlY2FzdEluZm8uYXBwZW5kQ2hpbGQoRGl2U3VtbWFyeSk7XG5cbiAgLy8gZmVlbHMgbGlrZVxuICBjb25zdCBEaXZGZWVsc0xpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgRGl2RmVlbHNMaWtlLmlubmVySFRNTCA9IGBmZWVscyBsaWtlOiAke01hdGgucm91bmQoYXBwYXJlbnRUZW1wZXJhdHVyZSl9JmRlZztgO1xuICBEaXZGZWVsc0xpa2UuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvX2ZlZWxzJztcbiAgZGl2TG9jYXRpb25Gb3JlY2FzdEluZm8uYXBwZW5kQ2hpbGQoRGl2RmVlbHNMaWtlKTtcblxuICAvLyB3aW5kXG4gIGNvbnN0IERpdldpbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3Qgd2luZFNwZWVkSW5NZXRlcnMgPSAoKHdpbmRTcGVlZCAqIDEwMDApIC8gMzYwMCkudG9GaXhlZCgyKTtcbiAgRGl2V2luZC5pbm5lckhUTUwgPSBgJHsnd2luZDogJy50b1VwcGVyQ2FzZSgpfSR7d2luZFNwZWVkSW5NZXRlcnN9IG0vc2A7XG4gIERpdldpbmQuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvX3dpbmQnO1xuICBkaXZMb2NhdGlvbkZvcmVjYXN0SW5mby5hcHBlbmRDaGlsZChEaXZXaW5kKTtcblxuICAvLyBodW1pZGl0eVxuICBjb25zdCBEaXZIdW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBodW1pZGl0eUluUGVyY2VudHMgPSBodW1pZGl0eSAqIDEwMDtcbiAgRGl2SHVtaWRpdHkuaW5uZXJIVE1MID0gYGh1bWlkaXR5OiAke2h1bWlkaXR5SW5QZXJjZW50c30lYDtcbiAgRGl2SHVtaWRpdHkuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvX2h1bWlkaXR5JztcbiAgZGl2TG9jYXRpb25Gb3JlY2FzdEluZm8uYXBwZW5kQ2hpbGQoRGl2SHVtaWRpdHkpO1xuXG4gIC8vIG5leHQgMyBkYXlzIHdlYXRoZXIgZm9yZWNhc3RcbiAgY29uc3QgZGl2TmV4dERheXNGb3JlY2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZOZXh0RGF5c0ZvcmVjYXN0LmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb19uZXh0LWRheXMnO1xuICBkaXZMb2NhdGlvbldlYXRoZXJJbmZvLmFwcGVuZENoaWxkKGRpdk5leHREYXlzRm9yZWNhc3QpO1xuXG4gIGNvbnN0IG5leHREYXlPcHRpb25zID0ge1xuICAgIHRpbWV6b25lLFxuICAgIHdlZWtkYXk6ICdsb25nJyxcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICBjb25zdCB7XG4gICAgICB0aW1lLCBpY29uLCB0ZW1wZXJhdHVyZU1heCwgdGVtcGVyYXR1cmVNaW4sXG4gICAgfSA9IGRhaWx5LmRhdGFbaV07XG4gICAgY29uc3QgdGVtcGVyYXR1cmVBdmcgPSBNYXRoLmZsb29yKCh0ZW1wZXJhdHVyZU1heCArIHRlbXBlcmF0dXJlTWluKSAvIDIpO1xuXG4gICAgY29uc3QgbmV4dERhdGUgPSBuZXcgRGF0ZSh0aW1lICogMTAwMCkudG9Mb2NhbGVTdHJpbmcobGFuZ3VhZ2UsIG5leHREYXlPcHRpb25zKTtcblxuICAgIGNvbnN0IGRpdk5leHREYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZOZXh0RGF5LmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb19uZXh0LWRheSc7XG5cbiAgICBjb25zdCBkaXZOZXh0RGF5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk5leHREYXlOYW1lLmlubmVySFRNTCA9IG5leHREYXRlO1xuICAgIGRpdk5leHREYXlOYW1lLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb19uZXh0LWRheS1uYW1lJztcbiAgICBkaXZOZXh0RGF5LmFwcGVuZENoaWxkKGRpdk5leHREYXlOYW1lKTtcblxuICAgIGNvbnN0IGRpdk5leHREYXlUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk5leHREYXlUZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHt0ZW1wZXJhdHVyZUF2Z30mZGVnO2A7XG4gICAgZGl2TmV4dERheVRlbXBlcmF0dXJlLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb19uZXh0LWRheS10ZW1wZXJhdHVyZSc7XG4gICAgZGl2TmV4dERheS5hcHBlbmRDaGlsZChkaXZOZXh0RGF5VGVtcGVyYXR1cmUpO1xuXG4gICAgY29uc3QgZGl2TmV4dERheUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZOZXh0RGF5SWNvbi5jbGFzc05hbWUgPSB3ZWF0aGVySWNvbkNsYXNzTmFtZVtpY29uXSA/IHdlYXRoZXJJY29uQ2xhc3NOYW1lW2ljb25dIDogd2VhdGhlckljb25DbGFzc05hbWUuZGVmYXVsdDtcbiAgICBkaXZOZXh0RGF5LmFwcGVuZENoaWxkKGRpdk5leHREYXlJY29uKTtcblxuICAgIGRpdk5leHREYXlzRm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGl2TmV4dERheSk7XG4gIH1cblxuICBjb25zdCBkaXZGb3JlY2FzdExlZnRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZGb3JlY2FzdExlZnRCbG9jay5hcHBlbmRDaGlsZChkaXZMb2NhdGlvbk5hbWUpO1xuICBkaXZGb3JlY2FzdExlZnRCbG9jay5hcHBlbmRDaGlsZChkaXZMb2NhdGlvbkRhdGVUaW1lKTtcbiAgZGl2Rm9yZWNhc3RMZWZ0QmxvY2suYXBwZW5kQ2hpbGQoZGl2TG9jYXRpb25XZWF0aGVySW5mbyk7XG4gIGRpdkZvcmVjYXN0TGVmdEJsb2NrLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrJztcblxuICByZXR1cm4gZGl2Rm9yZWNhc3RMZWZ0QmxvY2s7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYXBCbG9jayhsb2MpIHtcbiAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2liR1ZwYTJFaUxDSmhJam9pWTJzME5UZzBibUV3TURZNE1UTnNiR1pyYldRMFpUSjJaQ0o5LkV3Q0JGdmpBQmozQXR4VUI2Q2NxMGcnO1xuXG4gIGNvbnN0IGRpdk1hcFJpZ2h0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TWFwUmlnaHRCbG9jay5jbGFzc05hbWUgPSAnd2VhdGhlci1pbmZvX19tYXAtYmxvY2snO1xuXG4gIGNvbnN0IGRpdk1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZNYXAuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fbWFwLWJsb2NrX21hcCc7XG4gIGRpdk1hcFJpZ2h0QmxvY2suYXBwZW5kQ2hpbGQoZGl2TWFwKTtcblxuICBjb25zdCBkaXZJbm5lck1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZJbm5lck1hcC5jbGFzc05hbWUgPSAnaW5uZXJfbWFwJztcbiAgZGl2SW5uZXJNYXAuaWQgPSAnbWFwJztcbiAgZGl2TWFwLmFwcGVuZENoaWxkKGRpdklubmVyTWFwKTtcblxuICAvLyBnZXQgY29vcmRzIGFuZCByZW5kZXIgbWFwIHNlY3Rpb25cbiAgY29uc3QgY29vcmRzID0gbG9jLnNwbGl0KCcsJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiAnbWFwJyxcbiAgICAgIHN0eWxlOiAnbWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMScsXG4gICAgICBjZW50ZXI6IFtjb29yZHNbMV0sIGNvb3Jkc1swXV0sIC8vIFtsbmcsIGxhdF1cbiAgICAgIHpvb206IDEwLFxuICAgIH0pO1xuICB9LCAwKTtcblxuICBmdW5jdGlvbiBnZXRDb29yZGluYXRlcyhjb29yZHMpIHtcbiAgICBsZXQgbWludXRlcyA9IDA7XG4gICAgY29uc3QgY29vcmRpbmF0ZSA9IGNvb3Jkcy5zcGxpdCgnLicpO1xuICAgIGlmIChjb29yZGluYXRlLmxlbmd0aCA+IDEpIHtcbiAgICAgIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKE51bWJlcihgMC4ke2Nvb3JkaW5hdGVbMV19YCAqIDYwKSk7XG4gICAgfVxuICAgIGNvb3JkaW5hdGVbMV0gPSBtaW51dGVzO1xuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGU7XG4gIH1cbiAgY29uc3QgbG9uZ2l0dWRlID0gZ2V0Q29vcmRpbmF0ZXMoY29vcmRzWzFdKTtcbiAgY29uc3QgbGF0aXR1ZGUgPSBnZXRDb29yZGluYXRlcyhjb29yZHNbMF0pO1xuXG4gIGNvbnN0IGRpdkxhdGl0dWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdkxhdGl0dWRlLmlubmVySFRNTCA9IGBMYXRpdHVkZTogJHtsYXRpdHVkZVswXX0mZGVnOyAke2xhdGl0dWRlWzFdfSdgO1xuICBkaXZMYXRpdHVkZS5jbGFzc05hbWUgPSAnd2VhdGhlci1pbmZvX19tYXAtYmxvY2tfbGF0aXR1ZGUnO1xuICBkaXZNYXBSaWdodEJsb2NrLmFwcGVuZENoaWxkKGRpdkxhdGl0dWRlKTtcblxuICBjb25zdCBkaXZMb25naXR1ZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TG9uZ2l0dWRlLmlubmVySFRNTCA9IGBMb25naXR1ZGU6ICR7bG9uZ2l0dWRlWzBdfSZkZWc7ICR7bG9uZ2l0dWRlWzFdfSdgO1xuICBkaXZMb25naXR1ZGUuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fbWFwLWJsb2NrX2xvbmdpdHVkZSc7XG4gIGRpdk1hcFJpZ2h0QmxvY2suYXBwZW5kQ2hpbGQoZGl2TG9uZ2l0dWRlKTtcblxuICByZXR1cm4gZGl2TWFwUmlnaHRCbG9jaztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRpbWUodGltZSwgbGFuZ3VhZ2UsIHRpbWV6b25lLCBkYXRlKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHRpbWUuc3BsaXQoJzonKTtcbiAgbGV0IHNlY29uZHMgPSBOdW1iZXIocmVzdWx0WzJdKTtcbiAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIocmVzdWx0WzFdKTtcbiAgbGV0IGhvdXJzID0gTnVtYmVyKHJlc3VsdFswXSk7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGxldCBzZWNvbmRzVG9SZW5kZXIgPSBzZWNvbmRzO1xuICAgIGxldCBtaW51dGVzVG9SZW5kZXIgPSBtaW51dGVzO1xuICAgIGxldCBob3Vyc1RvUmVuZGVyID0gaG91cnM7XG5cbiAgICBpZiAoc2Vjb25kcy50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2Vjb25kc1RvUmVuZGVyID0gYDAke3NlY29uZHN9YDtcbiAgICB9XG4gICAgaWYgKG1pbnV0ZXMudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIG1pbnV0ZXNUb1JlbmRlciA9IGAwJHttaW51dGVzfWA7XG4gICAgfVxuICAgIGlmIChob3Vycy50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgaG91cnNUb1JlbmRlciA9IGAwJHtob3Vyc31gO1xuICAgIH1cblxuICAgIHNlY29uZHMrKztcbiAgICBpZiAoc2Vjb25kcyA9PT0gNjApIHtcbiAgICAgIG1pbnV0ZXMrKztcbiAgICAgIHNlY29uZHMgPSAwO1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDYwKSB7XG4gICAgICAgIGhvdXJzKys7XG4gICAgICAgIG1pbnV0ZXMgPSAwO1xuICAgICAgICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgICAgICAgaG91cnMgPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNlY29uZHNUb1JlbmRlciA9PT0gJzAwJykge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2stZGF0ZS10aW1lX2RhdGUnKS5pbm5lclRleHQgPSBgJHtkYXRlLnNsaWNlKDAsIC01KX0ke2hvdXJzVG9SZW5kZXJ9OiR7bWludXRlc1RvUmVuZGVyfWA7XG4gICAgfVxuICB9LCAxMDAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlclRvcFBhbmVsKGxhbmd1YWdlKSB7XG4gIC8vIHRvcCBsZWZ0IHBhbmVsIGJ1dHRvbnNcbiAgY29uc3QgbGVmdFBhbmVsQnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgZGl2U3dpdGNoSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2U3dpdGNoSW1hZ2UuY2xhc3NOYW1lID0gJ2J1dHRvbiB3ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtaW1hZ2UnO1xuICBsZWZ0UGFuZWxCdXR0b25zQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdlN3aXRjaEltYWdlKTtcblxuICAvLyBsYW5ndWFnZSBzZWxlY3RcbiAgY29uc3QgZGl2U3dpdGNoTGFuZ3VhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2U3dpdGNoTGFuZ3VhZ2UuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fdG9wLXBhbmVsLXN3aXRjaC1sYW5ndWFnZSc7XG4gIGxlZnRQYW5lbEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2U3dpdGNoTGFuZ3VhZ2UpO1xuXG4gIGNvbnN0IGRpdkN1cnJlbnRMYW5ndWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZDdXJyZW50TGFuZ3VhZ2UuY2xhc3NOYW1lID0gJ2J1dHRvbiB3ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtbGFuZ3VhZ2VfdGl0bGUnO1xuICBkaXZDdXJyZW50TGFuZ3VhZ2UuaW5uZXJUZXh0ID0gbGFuZ3VhZ2UudG9VcHBlckNhc2UoKTtcbiAgZGl2U3dpdGNoTGFuZ3VhZ2UuYXBwZW5kQ2hpbGQoZGl2Q3VycmVudExhbmd1YWdlKTtcblxuICBjb25zdCB1bExhbmd1YWdlTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHVsTGFuZ3VhZ2VMaXN0LmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtbGFuZ3VhZ2VfbGlzdCc7XG4gIGRpdlN3aXRjaExhbmd1YWdlLmFwcGVuZENoaWxkKHVsTGFuZ3VhZ2VMaXN0KTtcblxuICBjb25zdCBsaUVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGlFbi5jbGFzc05hbWUgPSAnYWN0aXZlLWxhbmcgd2VhdGhlci1pbmZvX190b3AtcGFuZWwtc3dpdGNoLWxhbmd1YWdlX2xpc3QtaXRlbSc7XG4gIGxpRW4uaW5uZXJUZXh0ID0gJ0VOJztcbiAgdWxMYW5ndWFnZUxpc3QuYXBwZW5kQ2hpbGQobGlFbik7XG5cbiAgY29uc3QgbGlSdSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxpUnUuY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fdG9wLXBhbmVsLXN3aXRjaC1sYW5ndWFnZV9saXN0LWl0ZW0nO1xuICBsaVJ1LmlubmVyVGV4dCA9ICdSVSc7XG4gIHVsTGFuZ3VhZ2VMaXN0LmFwcGVuZENoaWxkKGxpUnUpO1xuXG4gIGNvbnN0IGxpQmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaUJlLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtbGFuZ3VhZ2VfbGlzdC1pdGVtJztcbiAgbGlCZS5pbm5lclRleHQgPSAnQkUnO1xuICB1bExhbmd1YWdlTGlzdC5hcHBlbmRDaGlsZChsaUJlKTtcblxuICAvLyB0ZW1wZXJhdHVyZVxuICBjb25zdCBkaXZTd2l0Y2hUZW1wZXJhdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZTd2l0Y2hUZW1wZXJhdHVyZS5jbGFzc05hbWUgPSAnd2VhdGhlci1pbmZvX190b3AtcGFuZWwtc3dpdGNoLXRlbXBlcmF0dXJlJztcbiAgY29uc3QgZGl2RmFocmVuaGVpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZGYWhyZW5oZWl0LmNsYXNzTmFtZSA9ICdhY3RpdmUgYnV0dG9uIHdlYXRoZXItaW5mb19fdG9wLXBhbmVsLXN3aXRjaC10ZW1wZXJhdHVyZV9mYWhyZW5oZWl0JztcbiAgZGl2RmFocmVuaGVpdC5pbm5lckhUTUwgPSAnJmRlZztGJztcbiAgZGl2U3dpdGNoVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoZGl2RmFocmVuaGVpdCk7XG4gIGNvbnN0IGRpdkNlbHNpdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2Q2Vsc2l1cy5jbGFzc05hbWUgPSAnYnV0dG9uIHdlYXRoZXItaW5mb19fdG9wLXBhbmVsLXN3aXRjaC10ZW1wZXJhdHVyZV9jZWxzaXVzJztcbiAgZGl2Q2Vsc2l1cy5pbm5lckhUTUwgPSAnJmRlZztDJztcbiAgZGl2U3dpdGNoVGVtcGVyYXR1cmUuYXBwZW5kQ2hpbGQoZGl2Q2Vsc2l1cyk7XG4gIGxlZnRQYW5lbEJ1dHRvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2U3dpdGNoVGVtcGVyYXR1cmUpO1xuXG4gIC8vIHRvcCByaWdodCBzZWFyY2ggcGFuZWxcbiAgY29uc3QgcmlnaHRQYW5lbFNlYXJjaEJhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dFNlYXJjaC50eXBlID0gJ3RleHQnO1xuICBpbnB1dFNlYXJjaC5jbGFzc05hbWUgPSAnd2VhdGhlci1pbmZvX190b3AtcGFuZWwtc2VhcmNoJztcbiAgcmlnaHRQYW5lbFNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFNlYXJjaCk7XG5cbiAgY29uc3QgaW5wdXRTdWJtaXRTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRTdWJtaXRTZWFyY2guaW5uZXJUZXh0ID0gJ3NlYXJjaCcudG9VcHBlckNhc2UoKTtcbiAgaW5wdXRTdWJtaXRTZWFyY2guY2xhc3NOYW1lID0gJ2J1dHRvbiB3ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zdWJtaXQnO1xuICByaWdodFBhbmVsU2VhcmNoQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0U3VibWl0U2VhcmNoKTtcblxuICAvLyB0b3AgcGFuZWxcbiAgY29uc3QgZGl2VG9wUGFuZWxCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZUb3BQYW5lbEJsb2NrLmNsYXNzTmFtZSA9ICd3ZWF0aGVyLWluZm9fX3RvcC1wYW5lbCc7XG5cbiAgY29uc3QgZGl2TGVmdFBhbmVsQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TGVmdFBhbmVsQmxvY2suY2xhc3NOYW1lID0gJ3dlYXRoZXItaW5mb19fdG9wLXBhbmVsX2xlZnQnO1xuICBkaXZMZWZ0UGFuZWxCbG9jay5hcHBlbmRDaGlsZChsZWZ0UGFuZWxCdXR0b25zQ29udGFpbmVyKTtcbiAgZGl2VG9wUGFuZWxCbG9jay5hcHBlbmRDaGlsZChkaXZMZWZ0UGFuZWxCbG9jayk7XG5cbiAgY29uc3QgZGl2UmlnaHRQYW5lbEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdlJpZ2h0UGFuZWxCbG9jay5jbGFzc05hbWUgPSAnd2VhdGhlci1pbmZvX190b3AtcGFuZWxfcmlnaHQnO1xuICBkaXZSaWdodFBhbmVsQmxvY2suYXBwZW5kQ2hpbGQocmlnaHRQYW5lbFNlYXJjaEJhckNvbnRhaW5lcik7XG4gIGRpdlRvcFBhbmVsQmxvY2suYXBwZW5kQ2hpbGQoZGl2UmlnaHRQYW5lbEJsb2NrKTtcblxuICByZXR1cm4gZGl2VG9wUGFuZWxCbG9jaztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcldlYXRoZXJBcHAodXJscywgdG9wUGFuZWxCbG9jaywgbGVmdEZvcmVjYXN0QmxvY2ssIHJpZ2h0TWFwQmxvY2spIHtcbiAgLy8gd3JhcHBlclxuICBjb25zdCBkaXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdldyYXBwZXIuY2xhc3NOYW1lID0gJ3dyYXBwZXInO1xuXG4gIC8vIHdlYXRoZXIgYmxvY2tcbiAgY29uc3QgZGl2V2VhdGhlckJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdldlYXRoZXJCbG9jay5jbGFzc05hbWUgPSAnd2VhdGhlci1pbmZvJztcbiAgZGl2V2VhdGhlckJsb2NrLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDgsIDE1LCAyNiwgMC43OSkgMCUsIHJnYmEoMTcsIDE3LCA0NiwgMC42NikgMTAwJSksIHVybCgke3VybHMucmVndWxhcn0pYDtcbiAgZGl2V3JhcHBlci5hcHBlbmRDaGlsZChkaXZXZWF0aGVyQmxvY2spO1xuXG4gIC8vIGlubmVyIGNvbnRlbnRcbiAgZGl2V2VhdGhlckJsb2NrLmFwcGVuZENoaWxkKHRvcFBhbmVsQmxvY2spO1xuICBkaXZXZWF0aGVyQmxvY2suYXBwZW5kQ2hpbGQobGVmdEZvcmVjYXN0QmxvY2spO1xuICBkaXZXZWF0aGVyQmxvY2suYXBwZW5kQ2hpbGQocmlnaHRNYXBCbG9jayk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGRpdldyYXBwZXIpO1xufVxuIiwiaW1wb3J0IGdldExpbmtUb0ltYWdlIGZyb20gJy4vZ2V0TGlua1RvSW1hZ2UnO1xuaW1wb3J0IGdldFNlYXJjaExvY2F0aW9uQ29vcmRpbmF0ZXMgZnJvbSAnLi9nZXRTZWFyY2hMb2NhdGlvbkNvb3JkaW5hdGVzJztcbmltcG9ydCBnZXRXZWF0aGVyRm9yZWNhc3QgZnJvbSAnLi9nZXRXZWF0aGVyRm9yZWNhc3QnO1xuaW1wb3J0IHJlbmRlckZvcmVjYXN0SW5mbyBmcm9tICcuL3JlbmRlckZvcmVjYXN0SW5mbyc7XG5pbXBvcnQgY291bnRyeU1hcCBmcm9tICcuL2NvdW50cnlDb2Rlc01hcCc7XG5pbXBvcnQgcmVuZGVyTWFwQmxvY2sgZnJvbSAnLi9yZW5kZXJNYXBCbG9jayc7XG5pbXBvcnQgZ2V0QWRkaXRpb25hbEltYWdlUGFyYW1zIGZyb20gJy4vZ2V0QWRkaXRpb25hbEltYWdlUGFyYW1zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VG9wUGFuZWxFdmVudHMoY3VycmVudGx5LCBkYWlseSwgbGFuZ3VhZ2UsIHRpbWV6b25lKSB7XG4gIC8vIGNoYW5nZSBkZWdyZWVzIHNlY3Rpb25cbiAgZnVuY3Rpb24gdG9DZWxzaXVzKHRlbXBlcmF0dXJlKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKE51bWJlcih0ZW1wZXJhdHVyZSkgLSAzMikgKiA1IC8gOSk7XG4gIH1cblxuICBmdW5jdGlvbiByZW5kZXJEZWdyZWVzKGRlZ3JlZVR5cGUsIGN1cnJlbnRseSwgZGFpbHkpIHtcbiAgICBjb25zdCB7IGFwcGFyZW50VGVtcGVyYXR1cmUsIHRlbXBlcmF0dXJlIH0gPSBjdXJyZW50bHk7XG4gICAgbGV0IGNhbGNUZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xuICAgIGxldCBjYWxjQXBwYXJlbnRUZW1wZXJhdHVyZSA9IGFwcGFyZW50VGVtcGVyYXR1cmU7XG5cbiAgICBpZiAoZGVncmVlVHlwZSA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICBjYWxjVGVtcGVyYXR1cmUgPSB0b0NlbHNpdXModGVtcGVyYXR1cmUpO1xuICAgICAgY2FsY0FwcGFyZW50VGVtcGVyYXR1cmUgPSB0b0NlbHNpdXMoYXBwYXJlbnRUZW1wZXJhdHVyZSk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb190ZW1wZXJhdHVyZScpLmlubmVySFRNTCA9IGAke01hdGgucm91bmQoY2FsY1RlbXBlcmF0dXJlKX0mZGVnO2A7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvX2ZlZWxzJykuaW5uZXJIVE1MID0gYGZlZWxzIGxpa2U6ICR7TWF0aC5yb3VuZChjYWxjQXBwYXJlbnRUZW1wZXJhdHVyZSl9JmRlZztgO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICBjb25zdCB7IHRlbXBlcmF0dXJlTWF4LCB0ZW1wZXJhdHVyZU1pbiB9ID0gZGFpbHkuZGF0YVtpXTtcbiAgICAgIGxldCB0ZW1wZXJhdHVyZUF2ZyA9IE1hdGguZmxvb3IoKHRlbXBlcmF0dXJlTWF4ICsgdGVtcGVyYXR1cmVNaW4pIC8gMik7XG4gICAgICBpZiAoZGVncmVlVHlwZSA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICAgIHRlbXBlcmF0dXJlQXZnID0gdG9DZWxzaXVzKHRlbXBlcmF0dXJlQXZnKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC53ZWF0aGVyLWluZm9fX2ZvcmVjYXN0LWJsb2NrLXdlYXRoZXItaW5mb19uZXh0LWRheTpudGgtY2hpbGQoJHtpfSkgLndlYXRoZXItaW5mb19fZm9yZWNhc3QtYmxvY2std2VhdGhlci1pbmZvX25leHQtZGF5LXRlbXBlcmF0dXJlYCkuaW5uZXJIVE1MID0gYCR7dGVtcGVyYXR1cmVBdmd9JmRlZztgO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZURlZ3JlZXNCeVR5cGUoY3VycmVudGx5LCBkYWlseSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGxhbmd1YWdlKTtcbiAgICAvLyBjaGFuZ2UgZGVncmVlcyB0byBmYWhyZW5oZWl0XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mb19fdG9wLXBhbmVsLXN3aXRjaC10ZW1wZXJhdHVyZV9mYWhyZW5oZWl0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBjaGFuZ2VUb0ZhcigpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtdGVtcGVyYXR1cmVfY2Vsc2l1cycpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIHJlbmRlckRlZ3JlZXMoJ2ZhaHJlbmhlaXQnLCBjdXJyZW50bHksIGRhaWx5KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZW1wZXJhdHVyZScsICdmYWhyZW5oZWl0Jyk7XG4gICAgfSk7XG4gICAgLy8gY2hhbmdlIGRlZ3JlZXMgdG8gY2Vsc2l1c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtdGVtcGVyYXR1cmVfY2Vsc2l1cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gY2hhbmdlVG9DZWwoKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvX190b3AtcGFuZWwtc3dpdGNoLXRlbXBlcmF0dXJlX2ZhaHJlbmhlaXQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICByZW5kZXJEZWdyZWVzKCdjZWxzaXVzJywgY3VycmVudGx5LCBkYWlseSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVtcGVyYXR1cmUnLCAnY2Vsc2l1cycpO1xuICAgIH0pO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcGVyYXR1cmUnKSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVtcGVyYXR1cmUnKSA9PT0gJ2NlbHNpdXMnKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvX190b3AtcGFuZWwtc3dpdGNoLXRlbXBlcmF0dXJlX2NlbHNpdXMnKS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGNoYW5nZSBiYWNrZ3JvdW5kIGltYWdlIHNlY3Rpb25cbiAgZnVuY3Rpb24gY2hhbmdlQmFja2dyb3VuZChjdXJyZW50bHksIHRpbWV6b25lLCBsYW5ndWFnZSkge1xuICAgIGNvbnN0IHsgZGF5dGltZSwgc2Vhc29uIH0gPSBnZXRBZGRpdGlvbmFsSW1hZ2VQYXJhbXModGltZXpvbmUsIGxhbmd1YWdlKTtcbiAgICBhc3luYyBmdW5jdGlvbiBzZXRCYWNrZ3JvdW5kKCkge1xuICAgICAgY29uc3QgeyB1cmxzIH0gPSBhd2FpdCBnZXRMaW5rVG9JbWFnZShjdXJyZW50bHksIGRheXRpbWUsIHNlYXNvbik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoOCwgMTUsIDI2LCAwLjc5KSAwJSwgcmdiYSgxNywgMTcsIDQ2LCAwLjY2KSAxMDAlKSwgdXJsKCR7dXJscy5yZWd1bGFyfSlgO1xuICAgIH1cbiAgICAvLyByZW1vdmUgZXZlbnRzIHRvIHByZXZlbnQgYWRkaXRpb25hbCByZXF1ZXN0c1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtaW1hZ2UnKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEJhY2tncm91bmQpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtaW1hZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldEJhY2tncm91bmQpO1xuICB9XG4gIGNoYW5nZUJhY2tncm91bmQoY3VycmVudGx5LCB0aW1lem9uZSwgbGFuZ3VhZ2UpO1xuXG4gIC8vIGxhbmd1YWdlIHN3aXRjaGVyIHNlY3Rpb25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW5mb19fdG9wLXBhbmVsLXN3aXRjaC1sYW5ndWFnZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zd2l0Y2gtbGFuZ3VhZ2VfbGlzdCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvX190b3AtcGFuZWwtc3dpdGNoLWxhbmd1YWdlX3RpdGxlJykuY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZCcpO1xuICB9KTtcblxuICBjaGFuZ2VEZWdyZWVzQnlUeXBlKGN1cnJlbnRseSwgZGFpbHkpO1xuXG4gIC8vIGdldCBsb2NhdGlvbiByZW5kZXJpbmcgYWNjb3JkaW5nIHRvIHNlYXJjaCBzZWN0aW9uXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX3RvcC1wYW5lbC1zZWFyY2gnKS52YWx1ZTtcblxuICAgIGlmIChsb2NhdGlvbi5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IGdldFNlYXJjaExvY2F0aW9uQ29vcmRpbmF0ZXMobG9jYXRpb24pO1xuICAgIGxldCBsb2NhdGlvbkRhdGEgPSByZXN1bHRzO1xuICAgIGlmIChyZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxvY2F0aW9uRGF0YSA9IHJlc3VsdHNbMF07XG4gICAgfVxuICAgIGNvbnN0IHsgZ2VvbWV0cnksIGNvbXBvbmVudHMgfSA9IGxvY2F0aW9uRGF0YTtcblxuICAgIGlmIChnZW9tZXRyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gZ2VvbWV0cnk7XG4gICAgY29uc3QgeyBjb3VudHJ5X2NvZGUgfSA9IGNvbXBvbmVudHM7XG4gICAgY29uc3QgbG9jQ29vcmRzID0gYCR7bGF0fSwke2xuZ31gO1xuXG4gICAgY29uc3QgeyBjdXJyZW50bHksIGRhaWx5LCB0aW1lem9uZSB9ID0gYXdhaXQgZ2V0V2VhdGhlckZvcmVjYXN0KGxvY0Nvb3JkcywgbGFuZ3VhZ2UpO1xuXG4gICAgY29uc3Qga2lsbElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0ga2lsbElkOyBpID4gMDsgaS0tKSBjbGVhckludGVydmFsKGkpO1xuICAgIH0sIDApO1xuXG4gICAgY29uc3QgbGVmdEZvcmVjYXN0QmxvY2sgPSByZW5kZXJGb3JlY2FzdEluZm8oY3VycmVudGx5LCBkYWlseSwgbG9jYXRpb24sIHRpbWV6b25lLCBsYW5ndWFnZSwgY291bnRyeV9jb2RlLCBjb3VudHJ5TWFwKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvX19mb3JlY2FzdC1ibG9jaycpLnJlcGxhY2VXaXRoKGxlZnRGb3JlY2FzdEJsb2NrKTtcbiAgICBjaGFuZ2VEZWdyZWVzQnlUeXBlKGN1cnJlbnRseSwgZGFpbHkpO1xuICAgIGNoYW5nZUJhY2tncm91bmQoY3VycmVudGx5LCB0aW1lem9uZSwgbGFuZ3VhZ2UpO1xuICAgIGNvbnN0IHJpZ2h0TWFwQmxvY2sgPSByZW5kZXJNYXBCbG9jayhsb2NDb29yZHMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWluZm9fX21hcC1ibG9jaycpLnJlcGxhY2VXaXRoKHJpZ2h0TWFwQmxvY2spO1xuICB9KTtcblxuICAvLyBhYmlsaXR5IHRvIHNlYXJjaCBieSBwcmVzc2luZyBlbnRlclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvX190b3AtcGFuZWwtc3VibWl0JykuY2xpY2soKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IGdldFVzZXJMb2NhdGlvbiBmcm9tICcuL2hlbHBlcnMvZ2V0VXNlckxvY2F0aW9uJztcbmltcG9ydCBnZXRXZWF0aGVyRm9yZWNhc3QgZnJvbSAnLi9oZWxwZXJzL2dldFdlYXRoZXJGb3JlY2FzdCc7XG5pbXBvcnQgcmVuZGVyV2VhdGhlckFwcCBmcm9tICcuL2hlbHBlcnMvcmVuZGVyV2VhdGhlckFwcCc7XG5pbXBvcnQgcmVuZGVyRm9yZWNhc3RJbmZvIGZyb20gJy4vaGVscGVycy9yZW5kZXJGb3JlY2FzdEluZm8nO1xuaW1wb3J0IHJlbmRlclRvcFBhbmVsIGZyb20gJy4vaGVscGVycy9yZW5kZXJUb3BQYW5lbCc7XG5pbXBvcnQgY291bnRyeU1hcCBmcm9tICcuL2hlbHBlcnMvY291bnRyeUNvZGVzTWFwJztcbmltcG9ydCByZW5kZXJNYXBCbG9jayBmcm9tICcuL2hlbHBlcnMvcmVuZGVyTWFwQmxvY2snO1xuaW1wb3J0IGdldEFkZGl0aW9uYWxJbWFnZVBhcmFtcyBmcm9tICcuL2hlbHBlcnMvZ2V0QWRkaXRpb25hbEltYWdlUGFyYW1zJztcbmltcG9ydCBnZXRMaW5rVG9JbWFnZSBmcm9tICcuL2hlbHBlcnMvZ2V0TGlua1RvSW1hZ2UnO1xuaW1wb3J0IHNldFRvcFBhbmVsRXZlbnRzIGZyb20gJy4vaGVscGVycy9zZXRUb3BQYW5lbEV2ZW50cyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIHRyeSB7XG4gICAgbGV0IGxhbmd1YWdlID0gJ2VuJztcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykpIHtcbiAgICAgIGxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gICAgfVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGxhbmd1YWdlKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGxvYywgY2l0eSwgdGltZXpvbmUsIGNvdW50cnksXG4gICAgfSA9IGF3YWl0IGdldFVzZXJMb2NhdGlvbigpO1xuICAgIGNvbnN0IHsgY3VycmVudGx5LCBkYWlseSB9ID0gYXdhaXQgZ2V0V2VhdGhlckZvcmVjYXN0KGxvYywgbGFuZ3VhZ2UpO1xuICAgIGNvbnN0IHsgZGF5dGltZSwgc2Vhc29uIH0gPSBnZXRBZGRpdGlvbmFsSW1hZ2VQYXJhbXModGltZXpvbmUsIGxhbmd1YWdlKTtcbiAgICBjb25zdCB7IHVybHMgfSA9IGF3YWl0IGdldExpbmtUb0ltYWdlKGN1cnJlbnRseSwgZGF5dGltZSwgc2Vhc29uKTtcblxuICAgIGNvbnN0IGxlZnRGb3JlY2FzdEJsb2NrID0gcmVuZGVyRm9yZWNhc3RJbmZvKGN1cnJlbnRseSwgZGFpbHksIGNpdHksIHRpbWV6b25lLCBsYW5ndWFnZSwgY291bnRyeSwgY291bnRyeU1hcCk7XG4gICAgY29uc3QgdG9wUGFuZWxCbG9jayA9IHJlbmRlclRvcFBhbmVsKGxhbmd1YWdlKTtcbiAgICBjb25zdCByaWdodE1hcEJsb2NrID0gcmVuZGVyTWFwQmxvY2sobG9jKTtcblxuICAgIHJlbmRlcldlYXRoZXJBcHAodXJscywgdG9wUGFuZWxCbG9jaywgbGVmdEZvcmVjYXN0QmxvY2ssIHJpZ2h0TWFwQmxvY2spO1xuICAgIHNldFRvcFBhbmVsRXZlbnRzKGN1cnJlbnRseSwgZGFpbHksIGxhbmd1YWdlLCB0aW1lem9uZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlKTtcbiAgfVxufVxuXG5pbml0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9