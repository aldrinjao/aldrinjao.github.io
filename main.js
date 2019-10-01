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

module.exports = ".map {\n  height: 50vh;\n  padding: 0;\n}\n\n.mat-elevation-z8{\n  width: 90%;\n  margin: 20px auto;\n  \n}\n\n.mat-elevation-z8 table{\n  width: 100%;\n}\n\n.mat-elevation-z8 table th{\n  text-align:center;\n}\n\n.filter-box {\n  width: 220px;\n  height: 280px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  top:20px;\n  left:20px;\n  z-index: 1000;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.filter-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.filter-handle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n\n.hide-button {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  width: 24px;\n  height: 24px;\n}\n\n.filter-forms{\n  position: absolute;\n  top: 60px;\n}\n\n.filter-control{\n  font-size: 16px;\n  width: 90%;\n}\n\n.mat-column-barangay {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 25% !important;\n  width: 25% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.column-crop {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-ph {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-om {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-n {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-p {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-k {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 11.2% !important;\n  width: 11.2% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.filter-spacer{\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n  min-height: 100px;\n  padding-left: 5%;\n  \n}\n\n.example-element-description{\n\n  font-size:1.2em;\n}\n\n.desc-label{\n  font-weight: 500;\n  width: 10%;\n}\n\n.desc-content{\n  width: 20%;\n}\n\n#tdesc tr{\n  border: 1px solid black;\n  padding: 5px;\n}\n\n#cropselect{\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGFBQWE7RUFDYix1REFBdUQ7RUFDdkQ7OzZDQUUyQztBQUM3Qzs7QUFFQTtFQUNFOztnREFFOEM7QUFDaEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7O0VBRXJCLHNCQUFzQjs7RUFFdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCOztFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdCQUFnQjs7QUFFbEI7O0FBR0E7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gIGhlaWdodDogNTB2aDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1hdC1lbGV2YXRpb24tejh7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBcbn1cblxuLm1hdC1lbGV2YXRpb24tejggdGFibGV7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB0YWJsZSB0aHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5maWx0ZXItYm94IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDI4MHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgY3Vyc29yOiBtb3ZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjIwcHg7XG4gIGxlZnQ6MjBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZmlsdGVyLWJveDphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5maWx0ZXItaGFuZGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBtb3ZlO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG5cbi5oaWRlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uZmlsdGVyLWZvcm1ze1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbn1cblxuLmZpbHRlci1jb250cm9se1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5tYXQtY29sdW1uLWJhcmFuZ2F5IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMjUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4uY29sdW1uLWNyb3Age1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXBoIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTEuMiUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDExLjIlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tb20ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxMS4yJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTEuMiUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1uIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTEuMiUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDExLjIlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tcCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDExLjIlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMS4yJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWsge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxMS4yJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTEuMiUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4uZmlsdGVyLXNwYWNlcntcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc3Nztcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIFxufVxuXG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb257XG5cbiAgZm9udC1zaXplOjEuMmVtO1xufVxuXG4uZGVzYy1sYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmRlc2MtY29udGVudHtcbiAgd2lkdGg6IDIwJTtcbn1cblxuI3RkZXNjIHRye1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogNXB4O1xufVxuXG4jY3JvcHNlbGVjdHtcbiAgbWluLXdpZHRoOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div> \n<mat-toolbar>\n  <mat-toolbar-row>\n    <div fxShow=\"true\" fxHide.gt-sm=\"true\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n\n    <a href=\"./\">\n      <span>\n        <img src=\"./assets/header_green.png\" style=\"width: 300px;\">\n      </span>\n    </a>\n    \n    <span class=\"filter-spacer\"></span>\n\n    <div  fxShow=\"true\" fxHide.lt-md=\"true\">\n      \n      <span>\n        <button mat-button>About Us</button>\n\n        <button mat-button>SARAi Community</button>\n\n        <button mat-button [matMenuTriggerFor]=\"beforeMenu\">Crops</button>\n        <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n          <button mat-menu-item>Item 1</button>\n          <button mat-menu-item>Item 2</button>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"beforeMenu\">Maps</button>\n        <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n          <button mat-menu-item>Item 1</button>\n          <button mat-menu-item>Item 2</button>\n        </mat-menu>\n\n        <button mat-button [matMenuTriggerFor]=\"afterMenu\">Services</button>\n        <mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\n          <button mat-menu-item>Item 1</button>\n          <button mat-menu-item>Item 2</button>\n        </mat-menu>\n        </span>\n    </div>\n    <span><img src=\"./assets/dost-pcaarrd-uplb.png\" style=\"width: 110px;\"></span>\n \n  </mat-toolbar-row>\n</mat-toolbar>\n\n  <mat-sidenav-container fxFlexFill class=\"example-container\">\n\n    <mat-sidenav color=\"primary\" #sidenav fxLayout=\"column\" mode=\"over\"  opened=\"false\" fxHide.gt-sm=\"true\">\n      <div fxLayout=\"column\">\n        <a mat-button routerLink=\"/about-us\">About us</a>\n        <a mat-button routerLink=\"/prices\">SARAi Community</a>\n        <a mat-button routerLink=\"/start-page\">Crops</a>\n        <a mat-button routerLink=\"/offer\">Maps</a>\n        <a mat-button routerLink=\"/contact\">Services</a>\n      </div>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n\n\n<div>\n\n\n\n\n\n\n\n\n\n<div id=\"boundary\" style=\"background: red;\">\n\n  <div  class=\"map\"\n        leaflet\n        [leafletOptions]=\"options\"\n        (leafletMapReady)=\"onMapReady($event)\"\n        >\n\n  <div class=\"filter-box\" cdkDrag cdkDragBoundary='#boundary' (mouseenter) =\"mouseEnter()\" (mouseleave)=\"mouseLeave()\">\n\n    <div class=\"hide-button\">\n      <mat-icon>home</mat-icon>\n      \n    </div>\n    \n    <div class=\"filter-handle\" cdkDragHandle>\n      <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n        <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      </svg>\n    </div>\n  \n    <div class=\"filter-forms\" style=\"width: 100%;height:100%;\">\n\n    <span style=\"font-size:1.2em\">Soil Physical and Chemical Characteristics Database</span>\n    <mat-form-field class=\"filter-control\" >\n      <mat-label>Filter by crop</mat-label>\n      <mat-select [formControl]=\"crops\" multiple id=\"cropselect\">\n        <mat-option *ngFor=\"let crop of cropList\" [value]=\"crop\" checked>{{crop}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n    <mat-form-field class=\"filter-control\">\n      <mat-label>Filter by province</mat-label>\n      <mat-select [formControl]=\"sites\" multiple>\n        <mat-option *ngFor=\"let site of siteList\" [value]=\"site\" checked>{{site}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  <button (click)=\"filterSelection()\">Filter</button>\n\n\n    </div>\n  \n  \n  \n  </div>\n  </div>\n\n\n\n\n</div>\n\n\n\n<div class=\"mat-elevation-z8\">\n  <div style=\"width: 70%; padding-top: 20px; margin: auto;text-align:center;font-weight:300px;\">\n    <span style=\"font-size:1.5em;\">Soil Physical and Chemical Characteristics Database</span><br>\n    <span  style=\"font-size: 0.9em; font-weight: 300;\">Soil samples were sent to the laboratory for physical, chemical, and mineralogical analyses. The results obtained from the lab will be the baseline data that researchers will utilize for their fertilizer application and water and crop management. The same lab results will be utilized as baseline data by crop modelers for their crop model development.\n    </span>\n  </div>\n\n  <div id=\"tsetsetse\" style=\"width: 40%; padding-top: 20px; margin: auto;\">\n    <mat-form-field style=\"width: 100%;\">\n      <input  matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Type here to search\">\n    </mat-form-field>\n  </div>\n\n\n\n<table  mat-table\n        matSort\n        [dataSource]=\"dataSource1\" multiTemplateDataRows\n       >\n\n\n\n\n  <ng-container matColumnDef=\"barangay\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Location </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.barangay}}, {{element.province}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"crop\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Crop </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.crop}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"ph\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> pH </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.ph}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"om\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Organic Matter (OM) </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.om}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"n\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Nitrogen (N) </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.n}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"p\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Phosphorus (P) </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.p}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"k\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Potassium (K) </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.k}} </td>\n  </ng-container>\n\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"displayedColumns.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n        <table id=\"tdesc\" style=\"border:1px solid black;\">\n          <tr>\n            <td class=\"desc-label\">\n              Sampling Date\n            </td>\n            <td colspan=\"5\">\n              {{element.date | date: 'mediumDate'}}\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\"desc-label\">\n              Collaborator\n            </td>\n            <td class=\"desc-content\">\n             {{element.collaborator}}\n            </td>\n            <td class=\"desc-label\">\n              Longitude              \n            </td>\n            <td class=\"desc-content\">\n              {{element.long}}\n            </td>\n            <td class=\"desc-label\">\n              Latitude\n            </td>\n            <td class=\"desc-content\">\n              {{element.lat}}\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\"desc-label\">\n              Barangay/Site              \n            </td>\n            <td class=\"desc-content\">\n\n             {{element.barangay}}\n            </td>\n\n            <td class=\"desc-label\">\n              Municipality\n            </td>\n            <td class=\"desc-content\">\n              {{element.municipality}}\n            </td>\n\n            <td class=\"desc-label\">\n              Province\n            </td>\n            <td class=\"desc-content\">\n              {{element.province}}\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\"desc-label\">\n              Textual Grade\n            </td>\n            <td class=\"desc-content\">\n\n              {{element.textual_grade}}\n            </td>\n            <td class=\"desc-label\" *ngIf=\"element.hasUrl\">\n              Soil Profile\n            </td>\n            <td class=\"desc-content\" *ngIf=\"element.hasUrl\">\n              \n                <a target=\"new\" href={{element.url}} >View Soil Profile</a>\n              \n            </td>\n\n          </tr>\n          <tr>\n            <td class=\"desc-label\">\n              Remarks\n            </td>\n            <td colspan=\"3\" class=\"desc-content\">\n              {{element.remarks}}\n            </td>\n          </tr>\n\n        </table>\n      \n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"flyToMarker(element.lat, element.long); expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 20, 50, 100]\" showFirstLastButtons></mat-paginator>\n\n</div>\n\n\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
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
    function AppComponent(db) {
        var _this = this;
        this.displayedColumns = ['barangay', 'crop', 'ph', 'om', 'n', 'p', 'k'];
        this.SOIL_DATA = [];
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.markers = new _markers__WEBPACK_IMPORTED_MODULE_9__["SoilIcons"]();
        this.crops = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.cropList = ['Rice', 'Corn', 'Cacao/Coffee', 'Sugarcane', 'Tomato', 'Banana', 'Soybean'];
        this.sites = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        // tslint:disable-next-line:max-line-length
        this.siteList = ['Laguna', 'Albay', 'Ilocos Norte', 'Oriental Mindoro', 'Nueva Ecija', 'Isabela', 'North Cotabato', 'Misamis Oriental', 'Cebu', 'Bukidnon', 'Iloilo'];
        this.siteFilter = [];
        this.cropFilter = [];
        // layergroup for each crop type
        this.itemsLevel1 = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LayerGroup"]();
        // main layergroup
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
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])([12.6, 121.726909])
        };
        this.items = db.list('items').valueChanges();
        var myObserver = {
            next: function (x) {
                x.forEach(function (sample) {
                    var flag = false;
                    if (sample.url.length > 0) {
                        flag = true;
                    }
                    ;
                    var tempObject = {
                        // insert the id too
                        id: sample.id,
                        crop: sample.crop,
                        ph: sample.ph,
                        om: sample.om,
                        n: sample.n,
                        p: sample.p,
                        p_analysis: sample.p_analysis,
                        k: sample.k,
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
            console.log(samplepoint.crop + _this.markers.iconList[samplepoint.crop]);
            var regularIcon = _this.markers.iconList[samplepoint.crop].regular;
            var biggerIcon = _this.markers.iconList[samplepoint.crop].big;
            // tslint:disable-next-line:max-line-length
            var tempMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([samplepoint.lat, samplepoint.long], { icon: regularIcon });
            // tslint:disable-next-line:max-line-length
            var popupContent = '<span style=\'font-size:1.5em;font-weight:500;\'>' + samplepoint.crop + '</span><br>' + samplepoint.barangay + '<br>N: ' + samplepoint.n + '<br>P: ' + samplepoint.p + '<br>K: ' + samplepoint.k + '<br>Organic Matter: ' + samplepoint.om;
            tempMarker.bindPopup(popupContent);
            tempMarker.on('mouseover', function (e) {
                e.target.setIcon(biggerIcon);
                e.target.setZIndexOffset('1000');
                console.log(biggerIcon);
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
        var res = cropres.filter(function (v) {
            // check sample present in the second array
            return siteres.indexOf(v) > -1;
            // or array2.includes(v)
        });
        // make the markers
        this.itemsLevel1.clearLayers();
        this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
        this.createMarkers(res);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], AppComponent);
    return AppComponent;
}());

// layer control. keep an array or list of active layers, then rebuild the layerMainGroup everytime the list changes
// https://www.google.com/search?q=%27&oq=%27&aqs=chrome..69i57.2j0j4&sourceid=chrome&ie=UTF-8


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

















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
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
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_48__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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