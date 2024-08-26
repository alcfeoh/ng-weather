(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let AppComponent = class AppComponent {
  constructor() {}
  static #_ = this.ctorParameters = () => [];
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AppComponent);


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 553);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 34);
/* harmony import */ var _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/current-conditions/current-conditions.component */ 6263);
/* harmony import */ var _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/notification/notification.component */ 6094);
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tab/tab.component */ 3730);
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tabs/tabs.component */ 6384);
/* harmony import */ var _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/zipcode-entry/zipcode-entry.component */ 3813);
/* harmony import */ var _pages_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/forecasts-list/forecasts-list.component */ 7262);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 4234);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/location.service */ 5434);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_7__.ZipcodeEntryComponent, _pages_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_8__.ForecastsListComponent, _components_current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_3__.CurrentConditionsComponent, _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_9__.MainPageComponent, _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__.TabsComponent, _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_5__.TabComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_2__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  }), _components_notification_notification_component__WEBPACK_IMPORTED_MODULE_4__.NotificationComponent],
  providers: [_services_location_service__WEBPACK_IMPORTED_MODULE_10__.LocationService, _services_weather_service__WEBPACK_IMPORTED_MODULE_11__.WeatherService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 34:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _pages_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/forecasts-list/forecasts-list.component */ 7262);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 4234);



const appRoutes = [{
  path: '',
  component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _pages_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 6263:
/*!*******************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 2923);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 4207);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/location.service */ 5434);
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather.service */ 1125);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_weather_service__WEBPACK_IMPORTED_MODULE_3__.WeatherService);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_services_location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    this.currentConditionsByZip = this.weatherService.getCurrentConditions();
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 6094:
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationComponent: () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification.component.html?ngResource */ 6241);
/* harmony import */ var _notification_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.css?ngResource */ 7562);
/* harmony import */ var _notification_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notification_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/notification.service */ 6896);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let NotificationComponent = class NotificationComponent {
  constructor() {
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService);
  }
  get message() {
    return this.notificationService.notification();
  }
};
NotificationComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: _notification_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_notification_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NotificationComponent);


/***/ }),

/***/ 3730:
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabComponent: () => (/* binding */ TabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TabComponent = class TabComponent {
  constructor() {
    this.closeTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.active = false;
  }
  static #_ = this.propDecorators = {
    tabTitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: [{
        required: true
      }]
    }],
    closeTab: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  };
};
TabComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({
  selector: 'app-tab',
  template: `@if (active) {
    <ng-content></ng-content>
  }`
})], TabComponent);


/***/ }),

/***/ 6384:
/*!***************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 5605);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 7481);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tab/tab.component */ 3730);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let TabsComponent = class TabsComponent {
  ngAfterContentChecked() {
    if (this.tabs.toArray().length > 0 && !this.tabs.toArray().some(tab => tab.active)) {
      setTimeout(() => {
        this.selectTab(this.tabs.first);
      });
    }
  }
  selectTab(tab) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
  removeTab(tab) {
    tab.closeTab.emit();
    this.selectTab(this.tabs.first);
  }
  static #_ = this.propDecorators = {
    tabs: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ContentChildren,
      args: [_tab_tab_component__WEBPACK_IMPORTED_MODULE_2__.TabComponent]
    }]
  };
};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-tabs',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 3813:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/location.service */ 5434);
/* harmony import */ var app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/notification.service */ 6896);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_services_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(app_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService);
  }
  addLocation(zipcodeInput) {
    const ZIPCODE = zipcodeInput.value;
    const VALIDATION_ERROR = this.validateZipcode(ZIPCODE);
    if (VALIDATION_ERROR) {
      this.notificationService.showError(VALIDATION_ERROR);
      return;
    }
    this.locationService.addLocation(ZIPCODE);
    zipcodeInput.value = ''; // Clear the input after adding location
  }

  validateZipcode(zipcode) {
    if (!zipcode) {
      return 'The zip code is invalid. Please enter a 5-digit zip code.';
    }
    const IS_VALID_ZIPCODE = /^\d{5}$/.test(zipcode);
    if (!IS_VALID_ZIPCODE) {
      return 'The zip code is invalid. Please enter a 5-digit zip code.';
    }
    const existingLocations = this.locationService.locations();
    if (existingLocations.includes(zipcode)) {
      return 'This zip code has already been added.';
    }
    return null;
  }
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], ZipcodeEntryComponent);


/***/ }),

/***/ 7262:
/*!******************************************************************!*\
  !*** ./src/app/pages/forecasts-list/forecasts-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 8738);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 271);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ForecastsListComponent = class ForecastsListComponent {
  constructor() {
    this.route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.weatherService.getForecast(this.zipcode).subscribe(data => this.forecast = data);
    });
  }
  static #_ = this.ctorParameters = () => [];
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 4234:
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 6753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let MainPageComponent = class MainPageComponent {};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], MainPageComponent);


/***/ }),

/***/ 248:
/*!*******************************************!*\
  !*** ./src/app/services/cache.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheService: () => (/* binding */ CacheService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let CacheService = class CacheService {
  setItem(key, data, expirationInSeconds) {
    const expirationDate = new Date().getTime() + expirationInSeconds * 1000;
    const cacheItem = {
      data: data,
      expirationDate: expirationDate
    };
    localStorage.setItem(key, JSON.stringify(cacheItem));
  }
  getItem(key) {
    const cacheItem = localStorage.getItem(key);
    if (!cacheItem) {
      return null;
    }
    const parsedItem = JSON.parse(cacheItem);
    const currentTime = new Date().getTime();
    // If the item is expired, delete it and return null
    if (currentTime > parsedItem.expirationDate) {
      localStorage.removeItem(key);
      return null;
    }
    return parsedItem.data;
  }
  removeItem(key) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
};
CacheService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], CacheService);


/***/ }),

/***/ 5434:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor() {
    this.locationsSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    const LOCATIONS_STRING = localStorage.getItem(LOCATIONS);
    if (LOCATIONS_STRING) this.locationsSignal.set(JSON.parse(LOCATIONS_STRING));
  }
  get locations() {
    return this.locationsSignal.asReadonly();
  }
  addLocation(zipcode) {
    this.locationsSignal.update(locations => [...locations, zipcode]);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsSignal()));
  }
  removeLocation(zipcode) {
    this.locationsSignal.update(locations => locations.filter(location => location !== zipcode));
    localStorage.setItem(LOCATIONS, JSON.stringify(this.locationsSignal()));
  }
  static #_ = this.ctorParameters = () => [];
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)()], LocationService);


/***/ }),

/***/ 6896:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationService: () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let NotificationService = class NotificationService {
  constructor() {
    this.notificationSignal = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
  }
  get notification() {
    return this.notificationSignal.asReadonly();
  }
  showError(message) {
    this.notificationSignal.set(message);
    setTimeout(() => {
      this.notificationSignal.set(null);
    }, 3000); // Notification disappears after 3 seconds
  }
};

NotificationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], NotificationService);


/***/ }),

/***/ 1125:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core/rxjs-interop */ 839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3064);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6520);
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cache.service */ 248);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.service */ 5434);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification.service */ 6896);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;








let WeatherService = class WeatherService {
  static #_ = WeatherService_1 = this;
  static #_2 = this.URL = 'https://api.openweathermap.org/data/2.5';
  static #_3 = this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  static #_4 = this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  constructor() {
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.signal)([]);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_location_service__WEBPACK_IMPORTED_MODULE_1__.LocationService);
    this.cacheService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_cache_service__WEBPACK_IMPORTED_MODULE_0__.CacheService);
    this.notificationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService);
    // Convert the Signal<string[]> to Observable<string[]>
    this.locations$ = (0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.toObservable)(this.locationService.locations);
    this.locations$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(locations => {
      this.handleChangeLocations(locations);
      return rxjs__WEBPACK_IMPORTED_MODULE_7__.EMPTY;
    })).subscribe();
  }
  handleChangeLocations(locations) {
    const CURRENT_ZIPCODES = this.currentConditions().map(currentCondition => currentCondition.zip);
    locations.forEach(loc => {
      if (!CURRENT_ZIPCODES.includes(loc)) {
        this.addCurrentConditions(loc);
      }
    });
    CURRENT_ZIPCODES.forEach(zip => {
      if (!locations.includes(zip)) {
        this.removeCurrentConditions(zip);
      }
    });
  }
  addCurrentConditions(zipcode) {
    const cacheKey = `weather-current-${zipcode}`;
    const cachedData = this.cacheService.getItem(cacheKey);
    if (cachedData) {
      this.currentConditions.update(conditions => [...conditions, {
        zip: zipcode,
        data: cachedData
      }]);
    } else {
      const url = `${WeatherService_1.URL}/weather?zip=${zipcode},us&units=imperial&APPID=${WeatherService_1.APPID}`;
      this.http.get(url).subscribe({
        next: data => {
          this.cacheService.setItem(cacheKey, data, 7200); // Cache for 7200 seconds (2 hours)
          this.currentConditions.update(conditions => [...conditions, {
            zip: zipcode,
            data
          }]);
        },
        error: () => {
          this.locationService.removeLocation(zipcode);
          this.notificationService.showError(`Failed to fetch weather data for ${zipcode}`);
        }
      });
    }
  }
  removeCurrentConditions(zipcode) {
    const cacheKey = `weather-current-${zipcode}`;
    this.cacheService.removeItem(cacheKey);
    this.currentConditions.update(conditions => {
      return conditions.filter(condition => condition.zip !== zipcode);
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    const cacheKey = `weather-forecast-${zipcode}`;
    const cachedData = this.cacheService.getItem(cacheKey);
    if (cachedData) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
        observer.next(cachedData);
        observer.complete();
      });
    } else {
      const url = `${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`;
      return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(data => {
        this.cacheService.setItem(cacheKey, data, 7200); // Cache for 7200 seconds (2 hours)
        return new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
          observer.next(data);
          observer.complete();
        });
      }));
    }
  }
  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) return WeatherService_1.ICON_URL + 'art_storm.png';else if (id >= 501 && id <= 511) return WeatherService_1.ICON_URL + 'art_rain.png';else if (id === 500 || id >= 520 && id <= 531) return WeatherService_1.ICON_URL + 'art_light_rain.png';else if (id >= 600 && id <= 622) return WeatherService_1.ICON_URL + 'art_snow.png';else if (id >= 801 && id <= 804) return WeatherService_1.ICON_URL + 'art_clouds.png';else if (id === 741 || id === 761) return WeatherService_1.ICON_URL + 'art_fog.png';else return WeatherService_1.ICON_URL + 'art_clear.png';
  }
  static #_5 = this.ctorParameters = () => [];
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()], WeatherService);


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4737);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 4207:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.close {
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[".close {\r\n  cursor: pointer;\r\n}\r\n.flex {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7562:
/*!*******************************************************************************!*\
  !*** ./src/app/components/notification/notification.component.css?ngResource ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    background-color: #f44336;
    color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    font-size: 14px;
    z-index: 1000;
    opacity: 0.9;
}`, "",{"version":3,"sources":["webpack://./src/app/components/notification/notification.component.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,2CAA2C;IAC3C,eAAe;IACf,aAAa;IACb,YAAY;AAChB","sourcesContent":[".notification {\r\n    position: fixed;\r\n    top: 20px;\r\n    right: 20px;\r\n    padding: 15px 20px;\r\n    background-color: #f44336;\r\n    color: #ffffff;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\r\n    font-size: 14px;\r\n    z-index: 1000;\r\n    opacity: 0.9;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 7481:
/*!***************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tab-list {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #ccc;
}

.tab-list li {
  background-color: #eae9e9;
  border-left:2px solid #ffffff;
  padding: 10px;
  cursor: pointer;
  position: relative;
}

.tab-list li.active {
  background-color: #337ab7;
  color: #ffffff;
  font-weight: bold;
}

.tab-list li button {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/app/components/tabs/tabs.component.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,aAAa;EACb,UAAU;EACV,SAAS;EACT,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,eAAe;AACjB","sourcesContent":[".tab-list {\r\n  list-style-type: none;\r\n  display: flex;\r\n  padding: 0;\r\n  margin: 0;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.tab-list li {\r\n  background-color: #eae9e9;\r\n  border-left:2px solid #ffffff;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.tab-list li.active {\r\n  background-color: #337ab7;\r\n  color: #ffffff;\r\n  font-weight: bold;\r\n}\r\n\r\n.tab-list li button {\r\n  background: none;\r\n  border: none;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 271:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forecasts-list/forecasts-list.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/pages/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\r\n  width: 45px;\r\n  height: 45px;\r\n  position: absolute;\r\n  right: 20px;\r\n  top: -2px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-notification></app-notification>\r\n<router-outlet></router-outlet>\r\n";

/***/ }),

/***/ 2923:
/*!********************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (currentConditionsByZip().length) {\r\n  <app-tabs>\r\n    @for (location of currentConditionsByZip(); track $index) {\r\n      <app-tab \r\n        [tabTitle]=\"location.data.name + ' (' + location.zip + ')'\" \r\n        (closeTab)=\"locationService.removeLocation(location.zip)\">\r\n        <div \r\n          class=\"well flex\" \r\n          (click)=\"showForecast(location.zip)\" \r\n          (keydown.enter)=\"showForecast(location.zip)\" \r\n          tabindex=\"0\"\r\n        >\r\n          <div>\r\n            <h3>{{ location.data.name }} ({{ location.zip }})</h3>\r\n            <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\r\n            <h4>Temperatures today:</h4>\r\n            <p>\r\n              Current {{ location.data.main.temp | number: '.0-0' }} - Max\r\n              {{ location.data.main.temp_max | number: '.0-0' }} - Min\r\n              {{ location.data.main.temp_min | number: '.0-0' }}\r\n            </p>\r\n            <p>\r\n              <a [routerLink]=\"['/forecast', location.zip]\"\r\n                >Show 5-day forecast for {{ location.data.name }}</a\r\n              >\r\n            </p>\r\n          </div>\r\n          <div>\r\n            <img \r\n              [src]=\"weatherService.getWeatherIcon(location.data.weather[0].id)\" \r\n              alt=\"Weather icon for {{ location.data.weather[0].description }}\"\r\n            />\r\n          </div>\r\n        </div>\r\n      </app-tab>\r\n    }\r\n  </app-tabs>\r\n}\r\n\r\n";

/***/ }),

/***/ 6241:
/*!********************************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (message) {\r\n    <div class=\"notification\">\r\n        {{ message }}\r\n    </div>\r\n}\r\n";

/***/ }),

/***/ 5605:
/*!****************************************************************!*\
  !*** ./src/app/components/tabs/tabs.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ul class=\"tab-list\">\r\n    @for (tab of tabs; track $index) {\r\n        <li [class.active]=\"tab.active\">\r\n            <span (click)=\"selectTab(tab)\" (keydown.enter)=\"selectTab(tab)\" tabindex=\"0\">{{ tab.tabTitle }}</span>\r\n            <button (click)=\"removeTab(tab)\">&times;</button>\r\n        </li>\r\n    }\r\n</ul>\r\n<ng-content></ng-content>";

/***/ }),

/***/ 2647:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\r\n  <h2>Enter a zipcode:</h2>\r\n  <input \r\n    type=\"text\" \r\n    #zipcodeInput \r\n    placeholder=\"Zipcode\" \r\n    class=\"form-control\" \r\n    (keydown.enter)=\"addLocation(zipcodeInput)\" \r\n  />\r\n  <br />\r\n  <button class=\"btn btn-primary\" (click)=\"addLocation(zipcodeInput)\">\r\n    Add location\r\n  </button>\r\n</div>\r\n";

/***/ }),

/***/ 8738:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\r\n    </div>\r\n    <ul class=\"list-group\">\r\n      <li *ngFor=\"let dailyForecast of forecast?.list\" class=\"list-group-item\">\r\n        {{ dailyForecast.dt * 1000 | date: 'EEEE, MMM d' }}:\r\n        {{ dailyForecast.weather[0].main }}\r\n        - Min: {{ dailyForecast.temp.min | number: '.0-0' }} - Max:\r\n        {{ dailyForecast.temp.max | number: '.0-0' }}\r\n\r\n        <img\r\n          [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\"\r\n          class=\"icon\"\r\n          [attr.alt]=\"'Weather Icon'\"\r\n        />\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<button class=\"btn btn-success\" [routerLink]=\"'/'\">< Back to main page</button>\r\n";

/***/ }),

/***/ 6753:
/*!*********************************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\r\n  <app-zipcode-entry> </app-zipcode-entry>\r\n  <app-current-conditions></app-current-conditions>\r\n</div>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map