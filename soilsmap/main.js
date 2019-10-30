(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  min-height: 420px;\n  height: 420px;\n  padding: 0;\n}\n\n.mat-elevation-z8{\n  width: 90%;\n  margin: 20px auto;\n  \n}\n\n.mat-elevation-z8 table{\n  width: 100%;\n}\n\n.mat-elevation-z8 table th{\n  text-align:center;\n}\n\n.filterboxhideclass{\n\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  position: absolute;\n  top:20px;\n  left:20px;\n  z-index: 1000;\n  width: 35px;\n  height: 35px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  background: #fff;\n  border-radius: 4px;\n}\n\n.filter-box {\n  width: 240px;\n  min-height: 380px;\n  height: 90%;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  top:20px;\n  left:20px;\n  z-index: 1000;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.filter-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.filter-handle {\n\n  width: 90%;\n  margin: auto;\n  font-size: 1.2em;\n  \n}\n\n.filter-forms{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n\n.filter-control{\n  font-size: 16px;\n  width: 90%;\n}\n\n.mat-column-barangay {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 25% !important;\n  width: 25% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.column-crop {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-ph {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-om {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-n {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-p {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-k {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.filter-spacer{\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n  min-height: 100px;\n  padding-left: 5%;\n  \n}\n\n.example-element-description{\n\n  font-size:1.2em;\n}\n\n.desc-label{\n  font-weight: 500;\n  width: 10%;\n}\n\n.desc-content{\n  width: 20%;\n  padding-right: 5px;\n}\n\n.tdesc tr{\n  border: 1px solid black;\n  padding: 5px;\n}\n\n#cropselect{\n  min-width: 0px;\n}\n\n#footer{\n  text-align: left;\n  background: #444444;\n  color: white;\n  font-family: 'Open Sans', sans-serif;\n\n}\n\n.footertitle{\n  font-size: 24px;\n  font-weight: 900px;\n  margin-bottom: 20px;\n}\n\n.footercolumn{\n  padding: 20px;\n}\n\n.footer-contact-icon{\n    float: left;\n    margin-top: -11px;\n    width: 40px;\n    height: 40px;\n    border-radius: 250px;\n    color: #fff;\n    line-height: 55px;\n    text-align: center;\n}\n\n.footer-contact-line {\n    margin-bottom: 15px;\n}\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-bar {\n    background: #ffe4d1;\n    height: 2px;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-selection {\n    background: orange;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer {\n    width: 8px;\n    height: 16px;\n    top: auto; /* to remove the default positioning */\n    bottom: 0;\n    background-color: #333;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-pointer:after {\n    display: none;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-bubble {\n    bottom: 14px;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-limit {\n    font-weight: bold;\n    color: black;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-tick {\n    width: 1px;\n    height: 10px;\n    margin-left: 4px;\n    border-radius: 0;\n    background: #ffe4d1;\n    top: -1px;\n  }\n\n::ng-deep .custom-slider .ng5-slider .ng5-slider-tick.ng5-slider-selected {\n    background: black;\n  }\n\n.cdk-overlay-dark-backdrop {\n    background: rgba(0,0,0,.1) !important;\n}\n\n/* table#soilstable > tbody > tr:first-child */\n\ntableaa{\n  background: red;\n  -webkit-animation: glowing 1300ms infinite;\n  animation: glowing 1300ms infinite;\n\n\n}\n\n@-webkit-keyframes glowing {\n  0% { -webkit-box-shadow: 0 0 3px #0091b2; }\n  50% { -webkit-box-shadow: 0 0 15px #21c7ed; }\n  100% { -webkit-box-shadow: 0 0 3px #0091b2; }\n}\n\n@keyframes glowing {\n  0% { box-shadow: 0 0 3px #0091b2; }\n  50% { box-shadow: 0 0 15px #21c7ed; }\n  100% { box-shadow: 0 0 3px #0091b2; }\n}\n\n@-webkit-keyframes glowing-polygon {\n  0% { fill: #0091b2; -webkit-filter: drop-shadow( 0 0 3px #0091b2); }\n  50% { fill: #21c7ed; -webkit-filter: drop-shadow( 0 0 15px #21c7ed); }\n  100% { fill: #0091b2; -webkit-filter: drop-shadow( 0 0 3px #0091b2); }\n}\n\n@-webkit-keyframes glowingPolygon  {\n  0% { fill: #0091b2; -webkit-filter: drop-shadow( 0 0 3px #0091b2); filter: drop-shadow( 0 0 3px #0091b2); }\n  50% { fill: #21c7ed; -webkit-filter: drop-shadow( 0 0 15px #21c7ed); filter: drop-shadow( 0 0 15px #21c7ed); }\n  100% { fill: #0091b2; -webkit-filter: drop-shadow( 0 0 3px #0091b2); filter: drop-shadow( 0 0 3px #0091b2); }\n}\n\n@keyframes glowingPolygon  {\n  0% { fill: #0091b2; -webkit-filter: drop-shadow( 0 0 3px #0091b2); filter: drop-shadow( 0 0 3px #0091b2); }\n  50% { fill: #21c7ed; -webkit-filter: drop-shadow( 0 0 15px #21c7ed); filter: drop-shadow( 0 0 15px #21c7ed); }\n  100% { fill: #0091b2; -webkit-filter: drop-shadow( 0 0 3px #0091b2); filter: drop-shadow( 0 0 3px #0091b2); }\n}\n\n.mapscroll:hover {\n  cursor: pointer;\n  color: blue;\n}\n\n::ng-deep .mat-select-panel {\n  max-height: 80vh !important;\n}\n\n::ng-deep .mat-tab-label{\n  min-width: 60px !important;\n  padding: 0px !important;\n}\n\n.hidemenu {\n  display: none;\n}\n\n#soilstable td{\n  padding: 0px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBOztFQUVFLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYix1REFBdUQ7RUFDdkQ7OzZDQUUyQztBQUM3Qzs7QUFFQTtFQUNFOztnREFFOEM7QUFDaEQ7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7O0FBRWxCOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7O0FBRWxCOztBQUdBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFRTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFNBQVMsRUFBRSxzQ0FBc0M7SUFDakQsU0FBUztJQUNULHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0VBQzlCOztBQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsU0FBUztFQUNYOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0kscUNBQXFDO0FBQ3pDOztBQUVBLDhDQUE4Qzs7QUFDOUM7RUFDRSxlQUFlO0VBQ2YsMENBQTBDO0VBRzFDLGtDQUFrQzs7O0FBR3BDOztBQUVBO0VBQ0UsS0FBSyxtQ0FBbUMsRUFBRTtFQUMxQyxNQUFNLG9DQUFvQyxFQUFFO0VBQzVDLE9BQU8sbUNBQW1DLEVBQUU7QUFDOUM7O0FBRUE7RUFDRSxLQUFLLDJCQUEyQixFQUFFO0VBQ2xDLE1BQU0sNEJBQTRCLEVBQUU7RUFDcEMsT0FBTywyQkFBMkIsRUFBRTtBQUN0Qzs7QUFFQTtFQUNFLEtBQUssYUFBYSxFQUFFLDZDQUE2QyxFQUFFO0VBQ25FLE1BQU0sYUFBYSxFQUFFLDhDQUE4QyxFQUFFO0VBQ3JFLE9BQU8sYUFBYSxFQUFFLDZDQUE2QyxFQUFFO0FBQ3ZFOztBQUVBO0VBQ0UsS0FBSyxhQUFhLEVBQUUsNkNBQXFDLEVBQXJDLHFDQUFxQyxFQUFFO0VBQzNELE1BQU0sYUFBYSxFQUFFLDhDQUFzQyxFQUF0QyxzQ0FBc0MsRUFBRTtFQUM3RCxPQUFPLGFBQWEsRUFBRSw2Q0FBcUMsRUFBckMscUNBQXFDLEVBQUU7QUFDL0Q7O0FBSkE7RUFDRSxLQUFLLGFBQWEsRUFBRSw2Q0FBcUMsRUFBckMscUNBQXFDLEVBQUU7RUFDM0QsTUFBTSxhQUFhLEVBQUUsOENBQXNDLEVBQXRDLHNDQUFzQyxFQUFFO0VBQzdELE9BQU8sYUFBYSxFQUFFLDZDQUFxQyxFQUFyQyxxQ0FBcUMsRUFBRTtBQUMvRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgbWluLWhlaWdodDogNDIwcHg7XG4gIGhlaWdodDogNDIwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tYXQtZWxldmF0aW9uLXo4e1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgXG59XG5cbi5tYXQtZWxldmF0aW9uLXo4IHRhYmxle1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1lbGV2YXRpb24tejggdGFibGUgdGh7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG5cbi5maWx0ZXJib3hoaWRlY2xhc3N7XG5cbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjIwcHg7XG4gIGxlZnQ6MjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDI0MHB4O1xuICBtaW4taGVpZ2h0OiAzODBweDtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MjBweDtcbiAgbGVmdDoyMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5maWx0ZXItYm94OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmZpbHRlci1oYW5kbGUge1xuXG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgXG59XG5cblxuXG4uZmlsdGVyLWZvcm1ze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWx0ZXItY29udHJvbHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4ubWF0LWNvbHVtbi1iYXJhbmdheSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDI1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLmNvbHVtbi1jcm9wIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1waCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDExLjIlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMS4yJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLW9tIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTEuMiUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDExLjIlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDExLjIlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMS4yJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXAge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxMS4yJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTEuMiUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1rIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTEuMiUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDExLjIlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLmZpbHRlci1zcGFjZXJ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBcbn1cblxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9ue1xuXG4gIGZvbnQtc2l6ZToxLjJlbTtcbn1cblxuLmRlc2MtbGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5kZXNjLWNvbnRlbnR7XG4gIHdpZHRoOiAyMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cblxuLnRkZXNjIHRye1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jY3JvcHNlbGVjdHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbiNmb290ZXJ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICM0NDQ0NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuXG59XG5cbi5mb290ZXJ0aXRsZXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogOTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb290ZXJjb2x1bW57XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb290ZXItY29udGFjdC1pY29ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IC0xMXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNTBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mb290ZXItY29udGFjdC1saW5lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4gIDo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1iYXIge1xuICAgIGJhY2tncm91bmQ6ICNmZmU0ZDE7XG4gICAgaGVpZ2h0OiAycHg7XG4gIH1cbiAgOjpuZy1kZWVwIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXNlbGVjdGlvbiB7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXBvaW50ZXIge1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHRvcDogYXV0bzsgLyogdG8gcmVtb3ZlIHRoZSBkZWZhdWx0IHBvc2l0aW9uaW5nICovXG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzcHg7XG4gIH1cblxuICA6Om5nLWRlZXAgLmN1c3RvbS1zbGlkZXIgLm5nNS1zbGlkZXIgLm5nNS1zbGlkZXItcG9pbnRlcjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIDo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1idWJibGUge1xuICAgIGJvdHRvbTogMTRweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci1saW1pdCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgOjpuZy1kZWVwIC5jdXN0b20tc2xpZGVyIC5uZzUtc2xpZGVyIC5uZzUtc2xpZGVyLXRpY2sge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZlNGQxO1xuICAgIHRvcDogLTFweDtcbiAgfVxuXG4gIDo6bmctZGVlcCAuY3VzdG9tLXNsaWRlciAubmc1LXNsaWRlciAubmc1LXNsaWRlci10aWNrLm5nNS1zbGlkZXItc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICB9XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4xKSAhaW1wb3J0YW50O1xufVxuXG4vKiB0YWJsZSNzb2lsc3RhYmxlID4gdGJvZHkgPiB0cjpmaXJzdC1jaGlsZCAqL1xudGFibGVhYXtcbiAgYmFja2dyb3VuZDogcmVkO1xuICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvd2luZyAxMzAwbXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBnbG93aW5nIDEzMDBtcyBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBnbG93aW5nIDEzMDBtcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBnbG93aW5nIDEzMDBtcyBpbmZpbml0ZTtcblxuXG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBnbG93aW5nIHtcbiAgMCUgeyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggIzAwOTFiMjsgfVxuICA1MCUgeyAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxNXB4ICMyMWM3ZWQ7IH1cbiAgMTAwJSB7IC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCAjMDA5MWIyOyB9XG59XG5cbkBrZXlmcmFtZXMgZ2xvd2luZyB7XG4gIDAlIHsgYm94LXNoYWRvdzogMCAwIDNweCAjMDA5MWIyOyB9XG4gIDUwJSB7IGJveC1zaGFkb3c6IDAgMCAxNXB4ICMyMWM3ZWQ7IH1cbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAzcHggIzAwOTFiMjsgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvd2luZy1wb2x5Z29uIHtcbiAgMCUgeyBmaWxsOiAjMDA5MWIyOyAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDAgMCAzcHggIzAwOTFiMik7IH1cbiAgNTAlIHsgZmlsbDogIzIxYzdlZDsgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwIDAgMTVweCAjMjFjN2VkKTsgfVxuICAxMDAlIHsgZmlsbDogIzAwOTFiMjsgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwIDAgM3B4ICMwMDkxYjIpOyB9XG59XG5cbkBrZXlmcmFtZXMgZ2xvd2luZ1BvbHlnb24gIHtcbiAgMCUgeyBmaWxsOiAjMDA5MWIyOyBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwIDAgM3B4ICMwMDkxYjIpOyB9XG4gIDUwJSB7IGZpbGw6ICMyMWM3ZWQ7IGZpbHRlcjogZHJvcC1zaGFkb3coIDAgMCAxNXB4ICMyMWM3ZWQpOyB9XG4gIDEwMCUgeyBmaWxsOiAjMDA5MWIyOyBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwIDAgM3B4ICMwMDkxYjIpOyB9XG59XG5cbi5tYXBzY3JvbGw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBibHVlO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICBtYXgtaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHtcbiAgbWluLXdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uaGlkZW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5cbiNzb2lsc3RhYmxlIHRke1xuICBwYWRkaW5nOiAwcHggNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-toolbar>\n    <mat-toolbar-row>\n      <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n        <button mat-icon-button (click)=\"sidenav.toggle()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n\n      <a href=\"./\">\n        <span>\n          <img src=\"./assets/header_green.png\" style=\"width: 300px;\">\n        </span>\n      </a>\n\n      <span class=\"filter-spacer\"></span>\n\n      <div fxShow=\"true\" fxHide.lt-md=\"true\">\n\n        <span>\n          <button mat-button>About Us</button>\n\n\n          <button mat-button [matMenuTriggerFor]=\"beforeMenu\">Crops</button>\n          <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n            <button mat-menu-item>Item 1</button>\n            <button mat-menu-item>Item 2</button>\n          </mat-menu>\n\n          <button mat-button [matMenuTriggerFor]=\"beforeMenu\">Maps</button>\n          <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n            <button mat-menu-item>Item 1</button>\n            <button mat-menu-item>Item 2</button>\n          </mat-menu>\n\n          <button mat-button [matMenuTriggerFor]=\"afterMenu\">Services</button>\n          <mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n            <button mat-menu-item>Item 1</button>\n            <button mat-menu-item>Item 2</button>\n          </mat-menu>\n        </span>\n      </div>\n      <span><img src=\"./assets/dost-pcaarrd-uplb.png\" style=\"width: 110px;\"></span>\n\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container fxFlexFill class=\"example-container\">\n\n    <mat-sidenav color=\"primary\" #sidenav fxLayout=\"column\" mode=\"over\" opened=\"false\" fxHide.gt-sm=\"true\">\n      <div fxLayout=\"column\">\n        <a mat-button routerLink=\"/about-us\">About us</a>\n        <a mat-button routerLink=\"/prices\">SARAi Community</a>\n        <a mat-button routerLink=\"/start-page\">Crops</a>\n        <a mat-button routerLink=\"/offer\">Maps</a>\n        <a mat-button routerLink=\"/contact\">Services</a>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n\n\n\n      <div>\n\n        <div id=\"boundary\" style=\"background: red;\">\n\n          <div class=\"map\" leaflet [leafletOptions]=\"options\" (leafletMapReady)=\"onMapReady($event)\">\n\n            <div #filterboxid class=\"filter-box\" cdkDrag cdkDragBoundary='#boundary' (mouseenter)=\"mouseEnter()\"\n              (mouseleave)=\"mouseLeave()\">\n\n\n\n\n\n              <div class=\"filter-forms\">\n\n                <mat-tab-group id=\"filter-tab\" (selectedTabChange)=\"tabClick($event)\"\n                  [selectedIndex]='selectedTab.value'>\n                  <mat-tab>\n                    <ng-template mat-tab-label>\n                      <mat-icon class=\"example-tab-icon\" matTooltip=\"Filter\">search</mat-icon>\n\n                    </ng-template>\n\n                    <div class=\"filter-handle\">\n                      SARAi Soil Profiling & Characterization v1.1\n                    </div>\n\n\n                    <mat-form-field class=\"filter-control\">\n                      <mat-label>by crop</mat-label>\n                      <mat-select [formControl]=\"crops\" multiple id=\"cropselect\">\n                        <mat-option *ngFor=\"let crop of cropList\" [value]=\"crop\" checked>{{crop}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n\n\n                    <mat-form-field class=\"filter-control\">\n\n                      <mat-label>by province</mat-label>\n                      <mat-select [formControl]=\"sites\" multiple>\n                        <mat-option *ngFor=\"let site of siteList\" [value]=\"site\" checked>{{site}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"filter-control\">\n\n                      <mat-label>from</mat-label>\n\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" (dateInput)=\"addEventStart('input', $event)\" [value] = 'startdate.value' >\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n\n\n\n                    </mat-form-field>\n\n\n                    <mat-form-field class=\"filter-control\">\n\n                      <mat-label>to</mat-label>\n\n                      <input matInput [matDatepicker]=\"topicker\" placeholder=\"Choose a date\" (dateInput)=\"addEventEnd('input', $event)\" [value] = 'enddate.value' >\n                      <mat-datepicker-toggle matSuffix [for]=\"topicker\"></mat-datepicker-toggle>\n                      <mat-datepicker #topicker></mat-datepicker>\n\n\n                    </mat-form-field>\n\n\n\n                    <!-- \n              <div style=\"text-align: left; width: 90%;margin:auto;color: rgba(0,0,0,.54);font-size: 1.em;\">\n              pH Level\n              </div>\n              <div style=\"width:80%;margin: auto;font-size: 1em;\" class=\"custom-slider\">\n                \n                <ng5-slider [(value)]=\"phLowValue\" [(highValue)]=\"phHighValue\" [options]=\"slideroptions\"></ng5-slider>          \n            \n              </div> -->\n\n                  </mat-tab>\n                  <mat-tab>\n\n                    <ng-template mat-tab-label>\n                      <mat-icon class=\"example-tab-icon\" matTooltip=\"Filter by values\">settings_applications</mat-icon>\n\n                    </ng-template>\n\n\n\n\n                    <table style=\"width: 90%;margin:auto;\">\n                      <tr>\n                        <td style=\"width: 40px;\">\n                          <div style=\"text-align: center;margin:auto;color: rgba(0,0,0,.54);font-size: 1.em;\">\n                            pH\n                          </div>\n\n                        </td>\n                        <td>\n                          <div style=\"width:100%;margin: auto;font-size: 1em;\" class=\"custom-slider\">\n\n                            <ng5-slider [(value)]=\"phLowValue\" [(highValue)]=\"phHighValue\" [options]=\"phSlideroptions\">\n                            </ng5-slider>\n\n                          </div>\n\n                        </td>\n\n                      </tr>\n                      <tr>\n                        <td>\n                          <div style=\"text-align: center;margin:auto;color: rgba(0,0,0,.54);font-size: 1.em;\">\n                            N\n                          </div>\n\n                        </td>\n                        <td>\n                          <div style=\"width:100%;margin: auto;font-size: 1em;\" class=\"custom-slider\">\n\n                            <ng5-slider [(value)]=\"nLowValue\" [(highValue)]=\"nHighValue\" [options]=\"slideroptions\">\n                            </ng5-slider>\n\n                          </div>\n\n                        </td>\n\n                      </tr>\n                      <tr>\n                        <td>\n                          <div style=\"text-align: center;margin:auto;color: rgba(0,0,0,.54);font-size: 1.em;\">\n                            P\n                          </div>\n\n                        </td>\n                        <td>\n                          <div style=\"width:100%;margin: auto;font-size: 1em;\" class=\"custom-slider\">\n\n                            <ng5-slider [(value)]=\"pLowValue\" [(highValue)]=\"pHighValue\" [options]=\"pslideroptions\">\n                            </ng5-slider>\n\n                          </div>\n\n                        </td>\n\n                      </tr>\n                      <tr>\n                        <td>\n                          <div style=\"text-align: center;margin:auto;color: rgba(0,0,0,.54);font-size: 1.em;\">\n                            K\n                          </div>\n\n                        </td>\n                        <td>\n                          <div style=\"width:100%;margin: auto;font-size: 1em;\" class=\"custom-slider\">\n\n                            <ng5-slider [(value)]=\"kLowValue\" [(highValue)]=\"kHighValue\" [options]=\"kslideroptions\">\n                            </ng5-slider>\n\n                          </div>\n\n                        </td>\n\n                      </tr>\n                      <tr>\n                        <td>\n                          <div style=\"text-align: center;margin:auto;color: rgba(0,0,0,.54);font-size: 1.em;\">\n                            OM %\n                          </div>\n\n                        </td>\n                        <td>\n                          <div style=\"width:100%;margin: auto;font-size: 1em;\" class=\"custom-slider\">\n\n                            <ng5-slider [(value)]=\"omLowValue\" [(highValue)]=\"omHighValue\" [options]=\"omslideroptions\">\n                            </ng5-slider>\n\n                          </div>\n\n                        </td>\n\n                      </tr>\n                    </table>\n\n\n\n\n\n\n                  </mat-tab>\n                  <mat-tab>\n\n                    <ng-template mat-tab-label>\n                      <mat-icon class=\"example-tab-icon\" matTooltip=\"Info\">info</mat-icon>\n\n                    </ng-template>\n                    <span style=\"font-size: 1.5em;text-align: justify;\">\n                      SARAi Project 2.5: <br>Soil Sampling and Characterization\n                    </span>\n                    <br>\n                    Project Leader: Prof. Victorino A. Bato\n                    <br>\n                    <a href=\"http://sarai.ph/about-us/2.5\" target=\"new\">Read more</a>\n\n                  </mat-tab>\n\n                  <mat-tab>\n\n                    <ng-template mat-tab-label>\n                      <mat-icon class=\"example-tab-icon\" matTooltip=\"Hide\">keyboard_arrow_left</mat-icon>\n\n                    </ng-template>\n\n\n\n                  </mat-tab>\n\n\n                </mat-tab-group>\n\n\n                <div style=\"position:absolute;bottom: 10px;width: 100%;\">\n                  <button (click)=\"filterSelection()\">Filter</button>\n                  <button style=\"margin-left:10px;\" (click)=\"resetSelection()\">Reset Filter</button>\n                </div>\n\n\n              </div>\n\n\n\n            </div>\n            <div #filterboxshow class=\"filterboxhideclass hidemenu\" (click)='showmenu()'>\n              <mat-icon style=\"font-size:3em;\" class=\"example-tab-icon\" matTooltip=\"Show\">keyboard_arrow_right\n              </mat-icon>\n\n\n            </div>\n          </div>\n\n\n\n\n        </div>\n\n\n\n        <div class=\"mat-elevation-z8\">\n          <div style=\"width: 70%; padding-top: 20px; margin: auto;text-align:center;font-weight:300px;\">\n            <span style=\"font-size:1.5em;\">Soil Physical and Chemical Characteristics Database</span><br>\n            <span style=\"font-size: 0.9em; font-weight: 300;\">Soil samples were sent to the laboratory for physical,\n              chemical, and mineralogical analyses. The results obtained from the lab will be the baseline data that\n              researchers will utilize for their fertilizer application and water and crop management. The same lab\n              results will be utilized as baseline data by crop modelers for their crop model development.\n            </span>\n          </div>\n\n          <div id=\"tsetsetse\" style=\"width: 40%; padding-top: 20px; margin: auto;\">\n            <mat-form-field style=\"width: 100%;\">\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type here to search\">\n            </mat-form-field>\n            <div style=\"width: 100%;text-align:center;padding: 10px 0px;\">\n              <button style=\"background: rgb(245,245,245);\" mat-button (click)=\"openBottomSheet()\">Value References &\n                Ranges <i class=\"material-icons\">info</i></button>\n            </div>\n          </div>\n\n          <table mat-table matSort [dataSource]=\"dataSource1\" multiTemplateDataRows id=\"soilstable\">\n            <th></th>\n\n            <ng-container matColumnDef=\"expand\">\n              <th mat-header-cell *matHeaderCellDef> </th>\n              <td mat-cell *matCellDef=\"let element\">\n\n                <i class=\"material-icons\">\n                  expand_more\n                </i>\n              </td>\n            </ng-container>\n\n\n            <ng-container matColumnDef=\"date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Sampling Date </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'mediumDate'}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"barangay\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.barangay}}, {{element.province}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"crop\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Crop </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.crop}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"ph\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> pH </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.ph}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"om\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Organic Matter (OM) </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.om}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"n\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Nitrogen (N) </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.n}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"p\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Phosphorus (P) </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.p}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"k\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Potassium (K) </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.k}} </td>\n            </ng-container>\n\n\n            <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n            <ng-container matColumnDef=\"expandedDetail\">\n              <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n                <div class=\"example-element-detail\"\n                  [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                  <div style=\"width: 100%;\">\n\n                    <table class=\"tdesc\" style=\"border:1px solid black;padding: 10px;\">\n                      <tr>\n                        <td colspan=\"6\" style=\"width:  100%;text-align:right;\">\n                          <a class=\"mapscroll\" (click)=\"scrollToMap()\"  style=\"margin-right: 30px;\">\n                            <i class=\"material-icons\">\n                              pageview\n                            </i>\n                          </a>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td class=\"desc-label\">\n                          Collaborator\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.collaborator}}\n                        </td>\n                        <td class=\"desc-label\">\n                          Longitude\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.long}}\n                        </td>\n                        <td class=\"desc-label\">\n                          Latitude\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.lat}}\n                        </td>\n                      </tr>\n\n                      <tr>\n                        <td class=\"desc-label\">\n                          Barangay/Site\n                        </td>\n                        <td class=\"desc-content\">\n\n                          {{element.barangay}}\n                        </td>\n\n                        <td class=\"desc-label\">\n                          Municipality\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.municipality}}\n                        </td>\n\n                        <td class=\"desc-label\">\n                          Province\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.province}}\n                        </td>\n                      </tr>\n\n                      <tr>\n                        <td class=\"desc-label\">\n                          Nitrogen\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.nValue}}% ({{element.n}})\n                        </td>\n                        <td class=\"desc-label\">\n                          Phosphorus ({{element.p_analysis}})\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.pValue}} ppm ({{element.p}})\n                        </td>\n                        <td class=\"desc-label\">\n                          Potassium\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.kValue}} cmolc/kg ({{element.k}})\n                        </td>\n\n                      </tr>\n\n                      <tr>\n                        <td class=\"desc-label\">\n                          Textual Grade\n                        </td>\n                        <td class=\"desc-content\">\n\n                          {{element.textual_grade}}\n                        </td>\n                        <td class=\"desc-label\">\n\n                          ph Value\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.phValue}} ({{element.ph}})\n\n\n                        </td>\n\n                        <td class=\"desc-label\">\n                          Organic Matter\n                        </td>\n                        <td class=\"desc-content\">\n                          {{element.omValue}}% ({{element.om}})\n                        </td>\n\n                      </tr>\n\n                      <tr>\n                        <td class=\"desc-label\">\n                          Remarks\n                        </td>\n                        <td colspan=\"3\" class=\"desc-content\">\n                          {{element.remarks}}\n                        </td>\n                      </tr>\n                      <tr *ngIf=\"element.hasUrl\">\n                        <td class=\"desc-label\">\n                          Soil Profile\n                        </td>\n                        <td class=\"desc-content\">\n                          <a target=\"new\" href={{element.url}}>View Soil Profile</a>\n                        </td>\n\n                      </tr>\n                    </table>\n                  </div>\n                </div>\n\n\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" class=\"example-element-row\"\n              [class.example-expanded-row]=\"expandedElement === element\"\n              (click)=\"flyToMarker(element.lat, element.long); expandedElement = expandedElement === element ? null : element\">\n            </tr>\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n          </table>\n\n          <mat-paginator [pageSizeOptions]=\"[10, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\n          <div style=\"width: 100%;text-align:center;padding-bottom: 20px;\">\n\n            <a href=\"http://bit.ly/SaraiSoils\" target=\"new\">\n\n              <button style=\"background: rgb(245,245,245); color: black;\" mat-button>Download All Soils Data <i\n                  class=\"material-icons\">cloud_download</i></button>\n\n            </a>\n          </div>\n\n        </div>\n\n\n\n      </div>\n      <!-- \n\n<mat-grid-list cols=\"3\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list> -->\n\n      <div class=\"content\" fxLayout=\"row\" fxLayout.xs=\"column\" fxFlexFill id=\"footer\">\n\n        <div fxFlex=\"33\">\n          <div class=\"footercolumn\">\n\n            <span class=\"footertitle\">About SARAi</span>\n            <p>Project SARAi aims to develop a national crop forecasting and monitoring system for nine priority crops:\n              rice, corn, banana, coconut, coffee, cacao, sugarcane, tomato, and soybean. This project is funded by\n              DOST-PCAARRD.</p>\n            <span><img src=\"./assets/dost-pcaarrd-uplb.png\" style=\"width: 110px;\"></span>\n            <p>© 2017-2021 - Project SARAi</p>\n          </div>\n        </div>\n        <div fxFlex=\"33\">\n          <div class=\"footercolumn\">\n\n            <div class=\"footertitle\">Connect With Us</div>\n            <div class=\"footer-contact-line\">\n              <div class=\"footer-contact-icon\">\n                <i class=\"material-icons\">call</i>\n              </div>\n              <span>\n                +63 (049) 536 2302,+63 (049) 536 2836\n              </span>\n            </div>\n\n            <div class=\"footer-contact-line\">\n              <div class=\"footer-contact-icon\">\n                <i class=\"material-icons\">email</i>\n              </div>\n              <span>\n                project.sarai.uplb@gmail.com\n              </span>\n            </div>\n\n            <div class=\"footer-contact-line\">\n              <div class=\"footer-contact-icon\">\n                <i class=\"material-icons\">location_on</i>\n              </div>\n              <span>\n                SESAM UPLB, College, Laguna Philippines 4031\n              </span>\n            </div>\n\n\n          </div>\n        </div>\n        <div fxFlex=\"33\">\n          <div class=\"footercolumn\">\n\n            <span class=\"footertitle\">About SARAi</span>\n            <div>\n\n\n              <div fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n                <span>About Us</span>\n                <span>Monitoring</span>\n                <span>Suitability</span>\n                <span>Maps</span>\n                <span>Gallery</span>\n              </div>\n              <div fxFlex=\"50\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n                <span>Rice</span>\n                <span>Corn</span>\n                <span>Banana</span>\n                <span>Sugarcane</span>\n                <span>Tomato</span>\n                <span>Coffee</span>\n                <span>Cacao</span>\n                <span>Coconut</span>\n                <span>Soybean</span>\n\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _markers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./markers */ "./src/app/markers.ts");











var AppComponent = /** @class */ (function () {
    function AppComponent(db, bottomSheet) {
        var _this = this;
        this.bottomSheet = bottomSheet;
        this.phLowValue = 0;
        this.phHighValue = 10;
        this.omLowValue = 0;
        this.omHighValue = 100;
        this.nLowValue = 0;
        this.nHighValue = 10;
        this.pLowValue = 0;
        this.pHighValue = 100;
        this.kLowValue = 0;
        this.kHighValue = 1;
        this.phSlideroptions = {
            floor: 0,
            ceil: 10,
            showSelectionBar: true,
            selectionBarGradient: {
                from: 'red',
                to: 'blue'
            }
        };
        this.slideroptions = {
            floor: 0,
            ceil: 10,
            selectionBarGradient: {
                from: 'black',
                to: 'black'
            }
        };
        this.omslideroptions = {
            floor: 0,
            ceil: 100,
            selectionBarGradient: {
                from: 'black',
                to: 'black'
            }
        };
        this.pslideroptions = {
            floor: 0,
            ceil: 30,
            selectionBarGradient: {
                from: 'black',
                to: 'black'
            }
        };
        this.kslideroptions = {
            floor: 0,
            ceil: 1,
            step: .1,
            selectionBarGradient: {
                from: 'black',
                to: 'black'
            }
        };
        this.displayedColumns = [
            'expand',
            'date',
            'barangay',
            'crop',
            'ph',
            'om',
            'n',
            'p',
            'k'
        ];
        this.SOIL_DATA = [];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.markers = new _markers__WEBPACK_IMPORTED_MODULE_9__["SoilIcons"]();
        this.crops = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.cropList = [
            'Rice',
            'Corn',
            'Cacao/Coffee',
            'Sugarcane',
            'Tomato',
            'Banana',
            'Soybean'
        ];
        this.sites = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        // tslint:disable-next-line:max-line-length
        this.siteList = [
            'Laguna',
            'Albay',
            'Ilocos Norte',
            'Oriental Mindoro',
            'Nueva Ecija',
            'Isabela',
            'North Cotabato',
            'Misamis Oriental',
            'Cebu',
            'Bukidnon', 'Iloilo'
        ];
        this.siteFilter = [];
        this.cropFilter = [];
        this.eventstart = 0;
        this.eventend = 9999999999999;
        this.startdate = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](new Date(1527782400000));
        this.enddate = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](new Date());
        // FeatureGroup for each crop type
        this.itemsLevel1 = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"]();
        // main FeatureGroup
        this.layerMainGroup = [];
        this.mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
        // tslint:disable-next-line:max-line-length
        this.mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
        this.worldImagery = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '&copy; OpenStreetMap contributors'
        });
        this.grayscale = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])(this.mbUrl, { id: 'mapbox.light', attribution: this.mbAttr });
        this.streets = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])(this.mbUrl, { id: 'mapbox.streets', attribution: this.mbAttr });
        this.OpenStreet = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        this.basemaps = {
            'ESRI World Imagery': this.worldImagery,
            'Open Street Map': this.OpenStreet,
            'Mapbox Grayscale': this.grayscale,
            'Mapbox Streets': this.streets
        };
        this.title = 'Soils Map';
        this.options = {
            layers: [this.worldImagery],
            zoom: 5,
            minZoom: 5,
            zoomControl: false,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])([12.6, 121.726909]),
            maxZoom: 17
        };
        this.selectedTab = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](0);
        this.items = db.list('items').valueChanges();
        var myObserver = {
            next: function (x) {
                x.forEach(function (sample) {
                    var flag = false;
                    if (sample.url.length > 0) {
                        flag = true;
                    }
                    var tempObject = {
                        // insert the id too
                        id: sample.id,
                        crop: sample.crop,
                        ph: sample.ph,
                        phValue: sample.ph_value,
                        om: sample.om,
                        n: sample.n,
                        nValue: sample.n_value,
                        p: sample.p,
                        pValue: sample.p_value,
                        p_analysis: sample.p_analysis,
                        k: sample.k,
                        kValue: sample.k_value,
                        omValue: sample.om_value,
                        textual_grade: sample.textual_grade,
                        remarks: sample.remarks,
                        collaborator: sample.collaborator,
                        province: sample.province,
                        municipality: sample.municipality,
                        barangay: sample.barangay,
                        long: sample.long,
                        lat: sample.lat,
                        date: sample.date,
                        url: sample.url,
                        hasUrl: flag
                    };
                    _this.SOIL_DATA.push(tempObject);
                });
                _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.SOIL_DATA);
                _this.dataSource1.paginator = _this.paginator;
                _this.dataSource1.sort = _this.sort;
                _this.createMarkers(_this.SOIL_DATA);
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('Observer got a complete notification'); },
        };
        this.items.subscribe(myObserver);
    }
    AppComponent.prototype.createMarkers = function (items) {
        var _this = this;
        items.forEach(function (samplepoint) {
            var regularIcon = _this.markers.iconList[samplepoint.crop].regular;
            var biggerIcon = _this.markers.iconList[samplepoint.crop].big;
            // tslint:disable-next-line:max-line-length
            var tempMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([samplepoint.lat, samplepoint.long], { icon: regularIcon });
            // tslint:disable-next-line:max-line-length
            var popupContent = '<span style=\'font-size:1.5em;font-weight:500;\'>' + samplepoint.crop + '</span><br>' + samplepoint.barangay + '<br>Long: ' + samplepoint.long + '<br>Lat: ' + samplepoint.lat;
            if (samplepoint.n.length > 0) {
                popupContent = popupContent + '<br>N: ' + samplepoint.n;
            }
            if (samplepoint.p.length > 0) {
                popupContent = popupContent + '<br>P:' + samplepoint.p;
            }
            if (samplepoint.k.length > 0) {
                popupContent = popupContent + '<br>K: ' + samplepoint.k;
            }
            if (samplepoint.om.length > 0) {
                popupContent = popupContent + '<br>OM: ' + samplepoint.om;
            }
            if (samplepoint.hasUrl === true) {
                popupContent = popupContent + '<br>Soil Profile: <a target = "new" href="' + samplepoint.url + '">View Soil Profile</a>';
            }
            tempMarker.bindPopup(popupContent);
            tempMarker.on('mouseover', function (e) {
                e.target.setIcon(biggerIcon);
                e.target.setZIndexOffset('1000');
            });
            tempMarker.on('mouseout', function (e) {
                e.target.setIcon(regularIcon);
            });
            tempMarker.addTo(_this.itemsLevel1);
        });
        this.itemsLevel1.addTo(this.map);
    };
    AppComponent.prototype.onMapReady = function (map) {
        this.map = map;
        leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].zoom({
            position: 'topright'
        }).addTo(map);
        // this.map.setMaxBounds(map.getBounds());
        this.map.setView([14.1699, 121.2441], 13);
        leaflet__WEBPACK_IMPORTED_MODULE_2__["control"].layers(this.basemaps).addTo(map);
    };
    AppComponent.prototype.addEventStart = function (type, event) {
        console.log(this.startdate.value);
        var testDate = '1 1, 1970';
        if (event.value != null) {
            testDate = (event.value.getMonth() + 1) + ' ' + event.value.getDate() + ', ' + event.value.getFullYear();
        }
        this.eventstart = Date.parse(testDate);
    };
    AppComponent.prototype.addEventEnd = function (type, event) {
        var testDate = '1 1, 2100';
        if (event.value != null) {
            testDate = (event.value.getMonth() + 1) + ' ' + event.value.getDate() + ', ' + event.value.getFullYear();
        }
        this.eventend = Date.parse(testDate);
    };
    AppComponent.prototype.filterSelection = function () {
        var _this = this;
        var cropres = [];
        var siteres = [];
        if (this.crops.value != null) {
            cropres = this.SOIL_DATA.filter(function (f) { return _this.crops.value.includes(f.crop); });
            if (this.crops.value.length === 0) {
                cropres = this.SOIL_DATA;
            }
        }
        else {
            cropres = this.SOIL_DATA;
        }
        if (this.sites.value != null) {
            siteres = this.SOIL_DATA.filter(function (f) { return _this.sites.value.includes(f.province); });
            if (this.sites.value.length === 0) {
                siteres = this.SOIL_DATA;
            }
        }
        else {
            siteres = this.SOIL_DATA;
        }
        // Create new array
        // filter array for numbers in a range
        var phRange = this.SOIL_DATA.filter(function (f) {
            return (f.phValue >= _this.phLowValue && f.phValue <= _this.phHighValue);
        });
        // filter array for numbers in a range
        var dateRange = this.SOIL_DATA.filter(function (f) {
            return (Date.parse(f.date) >= _this.eventstart && Date.parse(f.date) <= _this.eventend);
        });
        console.log(dateRange);
        // display new filtered array
        var res = cropres.filter(function (v) {
            // check sample present in the second array
            return siteres.indexOf(v) > -1;
            // or array2.includes(v)
        });
        res = res.filter(function (v) {
            // iterate over the array
            // check sample present in the second array
            return phRange.indexOf(v) > -1;
            // or array2.includes(v)
        });
        // make the markers
        res = res.filter(function (v) {
            // iterate over the array
            // check sample present in the second array
            return dateRange.indexOf(v) > -1;
            // or array2.includes(v)
        });
        // make the markers
        console.log(res);
        this.itemsLevel1.clearLayers();
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
        this.createMarkers(res);
        this.map.fitBounds(this.itemsLevel1.getBounds());
    };
    AppComponent.prototype.mouseEnter = function () {
        this.map.dragging.disable();
        this.map.touchZoom.disable();
        this.map.doubleClickZoom.disable();
        this.map.scrollWheelZoom.disable();
    };
    AppComponent.prototype.mouseLeave = function () {
        this.map.dragging.enable();
        this.map.touchZoom.enable();
        this.map.doubleClickZoom.enable();
        this.map.scrollWheelZoom.enable();
    };
    AppComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource1.filter = filterValue.trim().toLowerCase();
    };
    AppComponent.prototype.flyToMarker = function (lat, long) {
        this.map.flyTo(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])([lat, long]), this.map.getZoom(), {
            animate: true,
            pan: {
                duration: 1
            }
        });
    };
    AppComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(BottomSheetOverviewExampleSheet);
    };
    AppComponent.prototype.resetSelection = function () {
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.SOIL_DATA);
        this.createMarkers(this.SOIL_DATA);
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
        this.startdate.setValue(new Date(1527782400000));
        this.enddate.setValue(new Date());
        this.crops.setValue(null);
        this.sites.setValue(null);
        this.phLowValue = 0;
        this.phHighValue = 10;
        this.map.fitBounds(this.itemsLevel1.getBounds());
    };
    AppComponent.prototype.scrollToMap = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    AppComponent.prototype.tabClick = function (tab) {
        if (tab.index === 3) {
            this.selectedTab.setValue(3);
            this.filterboxid.nativeElement.classList.add('hidemenu');
            this.filterboxshow.nativeElement.classList.remove('hidemenu');
        }
    };
    AppComponent.prototype.showmenu = function () {
        this.filterboxshow.nativeElement.classList.add('hidemenu');
        this.filterboxid.nativeElement.classList.remove('hidemenu');
        this.selectedTab.setValue(0);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTable"])
    ], AppComponent.prototype, "table", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], AppComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], AppComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterboxshow'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "filterboxshow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('filterboxid'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "filterboxid", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]])
    ], AppComponent);
    return AppComponent;
}());

var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom-sheet-overview-example-sheet',
            template: __webpack_require__(/*! ./bottom-sheet-overview-example-sheet.html */ "./src/app/bottom-sheet-overview-example-sheet.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetRef"]])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");



















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["BottomSheetOverviewExampleSheet"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_11__["BottomSheetOverviewExampleSheet"]
            ],
            exports: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__["LeafletModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_47__["AngularFireDatabaseModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_14__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_15__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_17__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_25__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_32__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_33__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_34__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_35__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_36__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_37__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_38__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_39__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_40__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__["MatStepperModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_42__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_44__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_46__["MatTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_48__["FlexLayoutModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_49__["Ng5SliderModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottom-sheet-overview-example-sheet.html":
/*!**********************************************************!*\
  !*** ./src/app/bottom-sheet-overview-example-sheet.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%;text-align:right;\">\n    <i class=\"material-icons\">\n    info\n    </i>\n</div>\n\n<div class=\"ph_ref_table\" \n    style=\" display: flex;\n            flex-direction: row;\">\n<div style=\"min-width: 350px;\">\n        <table class=\"mat-table\">\n            <thead>\n                <tr class=\"\">\n                    <th style=\"width: 75%\">\n                        Soil pH\n                    </th>\n                    <th style=\"width: 25%\">\n                        Range\n                    </th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Extremely Acidic\n                    </td>\n                    <td class=\"mat-cell\">\n                        < 4.4\n                    </td>\n                </tr>\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Very strongly Acidic\n                    </td>\n                    <td class=\"mat-cell\">\n                        4.5 - 5.0\n                    </td>\n                </tr>\n\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Strongly Acidic\n                    </td>\n                    <td class=\"mat-cell\">\n                        5.1 - 5.5\n                    </td>\n                </tr>\n\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Moderately Acidic\n                    </td>\n                    <td class=\"mat-cell\">\n                        5.6 - 6.0\n                    </td>\n                </tr>\n\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Slightly Acidic\n                    </td>\n                    <td class=\"mat-cell\">\n                        6.1 - 6.5\n                    </td>\n                </tr>\n\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Neutral\n                    </td>\n                    <td class=\"mat-cell\">\n                        6.6 - 7.3\n                    </td>\n                </tr>\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Slightly Alkaline\n                    </td>\n                    <td class=\"mat-cell\">\n                        7.4 - 7.8\n                    </td>\n                </tr>\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Moderately Alkaline\n                    </td>\n                    <td class=\"mat-cell\">\n                        7.9 - 8.4\n                    </td>\n                </tr>\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Strongly Alkaline\n                    </td>\n                    <td class=\"mat-cell\">\n                        8.5 - 9.0\n                    </td>\n                </tr>\n\n                <tr class=\"\">\n                    <td class=\"mat-cell\">\n                        Extremely Alkaline\n                    </td>\n                    <td class=\"mat-cell\">\n                        > 9.0\n                    </td>\n                </tr>\n            </tbody>\n\n        </table>\n    </div>\n    <div style=\"min-width: 600px;\">\n    <table id=\"ref_table\" style=\"text-align: center; width: 100%;\">\n        <tr class=\"\">\n            <th rowspan=\"2\"> Range</th>\n            <th>OM</th>\n            <th>Olsen</th>\n            <th>Bray</th>\n            <th>K</th>\n        </tr>\n        <tr class=\"\">\n            <th>\n                %\n            </th>\n            <th>\n                ppm\n            </th>\n            <th>\n                ppm\n            </th>\n            <th>\n                cmolc/kg\n            </th>\n\n        </tr>\n\n        <tr class=\"\">\n            <td class=\"mat-cell\" style=\"text-align: left;\">Very High</td>\n            <td class=\"mat-cell\"> > 6.0</td>\n            <td class=\"mat-cell\"></td>\n            <td class=\"mat-cell\"></td>\n            <td class=\"mat-cell\"></td>\n        </tr>\n\n\n        <tr class=\"\">\n            <td class=\"mat-cell\" style=\"text-align: left;\">High</td>\n            <td class=\"mat-cell\"> 4.3 - 6.0</td>\n            <td class=\"mat-cell\"> > 10.0 </td>\n            <td class=\"mat-cell\"> > 20 </td>\n            <td class=\"mat-cell\"> 0.6 </td>\n        </tr>\n\n        <tr class=\"\">\n            <td class=\"mat-cell\" style=\"text-align: left;\">Medium</td>\n            <td class=\"mat-cell\"> 2.1 - 4.2</td>\n            <td class=\"mat-cell\"> 5.1 - 10 </td>\n            <td class=\"mat-cell\"> 7 - 20 </td>\n            <td class=\"mat-cell\"> 0.25 </td>\n        </tr>\n\n        <tr class=\"\">\n            <td class=\"mat-cell\" style=\"text-align: left;\">Low</td>\n            <td class=\"mat-cell\"> 1.0 - 2.0 </td>\n            <td class=\"mat-cell\"> < 5.0 </td>\n            <td class=\"mat-cell\"> < 3 -7 </td>\n            <td class=\"mat-cell\"> 0.15 </td>\n        </tr>\n        <tr class=\"\">\n            <td class=\"mat-cell\" style=\"text-align: left;\">References</td>\n            <td class=\"mat-cell\"> </td>\n            <td class=\"mat-cell\"> Olsen et.al., <br> (1954); ASA, <br>1982 </td>\n            <td class=\"mat-cell\"> Bray and Kurtz <br> (1945); ASA, <br>1982 </td>\n            <td class=\"mat-cell\"> BSWM Manual </td>\n        </tr>\n\n\n    </table>\n\n\n    </div>\n\n</div>\n\n<!-- Copyright 2019 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "./src/app/markers.ts":
/*!****************************!*\
  !*** ./src/app/markers.ts ***!
  \****************************/
/*! exports provided: SoilIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoilIcons", function() { return SoilIcons; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);

var SoilIcons = /** @class */ (function () {
    function SoilIcons() {
        this.riceIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/ricemarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerRiceIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/ricemarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.cornIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/cornmarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerCornIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/cornmarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.soyIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/soybeanmarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerSoyIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/soybeanmarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.sugarIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/sugarmarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerSugarIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/sugarmarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.coffeeIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/coffeemarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerCoffeeIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/coffeemarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.tomatoIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/tomatomarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerTomatoIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/tomatomarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.coconutIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/coconutmarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerCoconutIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/coconutmarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.bananaIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/bananamarker.png',
            iconSize: [45, 45],
            popupAnchor: [0, -20]
        });
        this.biggerBananaIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])({
            iconUrl: './assets/bananamarker.png',
            iconSize: [65, 65],
            popupAnchor: [0, -20]
        });
        this.iconList = {
            Rice: {
                regular: this.riceIcon,
                big: this.biggerRiceIcon
            },
            Corn: {
                regular: this.cornIcon,
                big: this.biggerCornIcon
            },
            'Cacao/Coffee': {
                regular: this.coffeeIcon,
                big: this.biggerCoffeeIcon
            },
            Tomato: {
                regular: this.tomatoIcon,
                big: this.biggerTomatoIcon
            },
            Soybean: {
                regular: this.soyIcon,
                big: this.biggerSoyIcon
            },
            Banana: {
                regular: this.bananaIcon,
                big: this.biggerBananaIcon
            },
            Sugarcane: {
                regular: this.sugarIcon,
                big: this.biggerSugarIcon
            }
        };
    }
    return SoilIcons;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAb3KPQP0mK4C4cMoS9FKS1BeZVeho_6KI',
        authDomain: 'soilsdb.firebaseapp.com',
        databaseURL: 'https://soilsdb.firebaseio.com',
        projectId: 'soilsdb',
        storageBucket: 'soilsdb.appspot.com',
        messagingSenderId: '170923533549',
        appId: '1:170923533549:web:ceaeb93b639c8926fbd8e4'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sarai/Desktop/soilsmap/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map