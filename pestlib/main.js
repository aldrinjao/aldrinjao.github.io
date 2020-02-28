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
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");






var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: ':crop', component: _category_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"] },
    { path: 'item/:tag', component: _item_item_component__WEBPACK_IMPORTED_MODULE_4__["ItemComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/header_green.png\" style='width:300px;'></a>\n\n\n\n    <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">About <span class=\"sr-only\">(current)</span></a>\n      </li>\n\n    </ul>\n    <a class=\"navbar-brand\" href=\"#\"><img src=\"./assets/dost-pcaarrd-uplb.png\" style='width:120px;'></a>\n\n  </div>\n\n</nav>\n<router-outlet></router-outlet>\n<img src=\"./assets/footer.png\" width=\"100%\">"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pest-lib';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var _category_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/pipe */ "./src/app/category/pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_12__["ItemComponent"],
                _category_pipe__WEBPACK_IMPORTED_MODULE_13__["FilterPipe"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_16__["CategoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["NgxPaginationModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridcontainer {\n    display: grid;\n    grid-gap: 40px;\n    grid-template-areas:\n        'crop crop crop crop';\n}\n\n\n.card {\n    margin: 1%;\n    background: rgb(250, 250, 250);\n    width: 25vh;\n    min-width: 100px;\n    box-shadow: 2px 2px rgba(50, 50, 50, 0.1);\n    transition: .5s ease;\n\n}\n\n\n/* .card:after {\n    content:'\\A';\n    position:absolute;\n    width:100%; height:100%;\n    top:0; left:0;\n    background:rgba(0,0,0,0.1);\n    opacity:1;\n    transition: all 0.5s;\n    -webkit-transition: all 0.5s;\n}\n\n.card:hover:after {\n    opacity:0;\n    box-shadow: 2px 2px rgba(50, 50, 50, 0.1);\n} */\n\n\n.card a {\n    text-decoration: none;\n    color: black;\n}\n\n\n.card-title {\n    font-size: 1.6rem;\n    font-weight: 500;\n}\n\n\n.searchform {\n    margin: auto;\n    width: 50%;\n}\n\n\n.open_new {\n    font-size: 1rem;\n    position: absolute;\n    bottom: 5px;\n    right: 5px;\n}\n\n\n.filterbar {\n    margin-top: 10px;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n.filterselect {\n    margin-right: 25px;\n    min-width: 200px;\n    width: 200px;\n}\n\n\n.pagecontrol {\n    display: flex;\n    margin-top: 30px;\n    margin-bottom: 0px;\n    justify-content: center;\n}\n\n\n.pagecontrol ::ng-deep .ngx-pagination {\n    -webkit-padding-start: 0;\n            padding-inline-start: 0;\n\n}\n\n\n.perpageselect {\n    width: 64px;\n    height: 26px;\n    padding-top: 0px;\n    padding-bottom: 0px;\n    font-size: .8rem;\n}\n\n\n.colcountbutton {\n    height: 20px;\n    width: 20px;\n    margin: 2px;\n}\n\n\n.card-img-top {\n    width: 100%;\n    height: 20vh;\n    -o-object-fit: cover;\n       object-fit: cover;\n    transition: .5s ease;\n    opacity: .9;\n\n}\n\n\n.breadcrumb {\n    margin-top: 20px;\n}\n\n\n@media screen and (max-width: 992px) {\n\n    .filterbar {\n        flex-flow: column;\n        justify-content: center;\n        text-align: center;\n        align-content: center;\n\n    }\n\n    .resetbutton {\n        width: 100px;\n        margin: 10px auto;\n\n    }\n\n    .selectbar {\n        flex-flow: column;\n\n    }\n\n    .card {\n        width: 30vw;\n    }\n\n    .gridcontainer {\n        grid-template-areas:\n            'crop crop';\n\n    }\n}\n\n\n@media screen and (max-width: 600px) {\n\n    .card{\n        width: 75%;\n        margin: auto;\n    }\n\n    .filterbar select{\n        margin: auto;\n    }\n    .gridcontainer {\n        grid-template-areas:\n            'crop';\n\n    }\n\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Q7NkJBQ3lCO0FBQzdCOzs7QUFHQTtJQUNJLFVBQVU7SUFDViw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5Q0FBeUM7SUFDekMsb0JBQW9COztBQUV4Qjs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0dBY0c7OztBQUdIO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksd0JBQXVCO1lBQXZCLHVCQUF1Qjs7QUFFM0I7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFdBQVc7O0FBRWY7OztBQUdBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFJQTs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHFCQUFxQjs7SUFFekI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osaUJBQWlCOztJQUVyQjs7SUFFQTtRQUNJLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSTt1QkFDZTs7SUFFbkI7QUFDSjs7O0FBRUE7O0lBRUk7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJO2tCQUNVOztJQUVkOzs7O0FBSUoiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yeS9jYXRlZ29yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWRjb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgJ2Nyb3AgY3JvcCBjcm9wIGNyb3AnO1xufVxuXG5cbi5jYXJkIHtcbiAgICBtYXJnaW46IDElO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTAsIDI1MCwgMjUwKTtcbiAgICB3aWR0aDogMjV2aDtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjEpO1xuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xuXG59XG5cblxuLyogLmNhcmQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6J1xcQSc7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7XG4gICAgdG9wOjA7IGxlZnQ6MDtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4xKTtcbiAgICBvcGFjaXR5OjE7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmNhcmQ6aG92ZXI6YWZ0ZXIge1xuICAgIG9wYWNpdHk6MDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IHJnYmEoNTAsIDUwLCA1MCwgMC4xKTtcbn0gKi9cblxuXG4uY2FyZCBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNlYXJjaGZvcm0ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTAlO1xufVxuXG4ub3Blbl9uZXcge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbn1cblxuLmZpbHRlcmJhciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmlsdGVyc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5wYWdlY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBhZ2Vjb250cm9sIDo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24ge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuXG59XG5cbi5wZXJwYWdlc2VsZWN0IHtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDI2cHg7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG59XG5cbi5jb2xjb3VudGJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbjogMnB4O1xufVxuXG4uY2FyZC1pbWctdG9wIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgb3BhY2l0eTogLjk7XG5cbn1cblxuXG4uYnJlYWRjcnVtYiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgICAuZmlsdGVyYmFyIHtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIH1cblxuICAgIC5yZXNldGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbiAgICB9XG5cbiAgICAuc2VsZWN0YmFyIHtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG5cbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICAgIHdpZHRoOiAzMHZ3O1xuICAgIH1cblxuICAgIC5ncmlkY29udGFpbmVyIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICdjcm9wIGNyb3AnO1xuXG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAuZmlsdGVyYmFyIHNlbGVjdHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuZ3JpZGNvbnRhaW5lciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAnY3JvcCc7XG5cbiAgICB9XG5cblxuXG59Il19 */"

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container breadcrumb\">\n  <a routerLink='/' style=\"padding-right: 10px;\">Home</a> / <span\n    style=\"padding-left: 10px;\">{{cropTerm | titlecase}}</span>\n\n</div>\n<div class=\"container\" style=\"margin-top: 20px;\">\n  <form class=\"searchform\">\n    <input name=\"term\" class=\"form-control mr-sm-2\" type=\"search\" (keyup)='p=1' placeholder=\"Search by Name\"\n      aria-label=\"Search\" [(ngModel)]=\"term\">\n\n  </form>\n</div>\n\n\n<div class=\"container filterbar\">\n  <div class=\"selectbar\" style=\"display: flex ;\">\n    <!-- <select class=\"custom-select filterselect\" name=\"cropTerm\" [(ngModel)]=\"cropTerm\" (change)=\"filterCrop();\">\n    <option value=\"All\">All Crops</option>\n    <option value=\"rice\">Rice</option>\n    <option value=\"corn\">Corn</option>\n    <option value=\"cacao\">Cacao</option>\n    <option value=\"coffee\">Coffee</option>\n  </select>  -->\n\n    <select class=\"custom-select filterselect\" name=\"pestOrDiseaseTerm\" [(ngModel)]=\"pestOrDiseaseTerm\"\n      (change)=\"filterCrop();\">\n      <option value=\"All\">Pest and Disease</option>\n      <option value=\"pest\">Pest</option>\n      <option value=\"disease\">Disease</option>\n    </select>\n\n    <select [disabled]=\"disabledFlag\" class=\"custom-select filterselect\" name=\"diseaseTypeTerm\"\n      [(ngModel)]=\"diseaseTypeTerm\" (change)=\"filterCrop();\">\n      <option value=\"All\">All Disease Types</option>\n      <option value=\"1\">Type 1</option>\n      <option value=\"2\">Type 2</option>\n      <option value=\"2\">Type 3</option>\n      <option value=\"2\">Type 4</option>\n    </select>\n    <button type=\"button\" class=\"resetbutton btn btn-outline-secondary\" (click)='resetfilters()'>Reset</button>\n\n  </div>\n  <div class=\"displaybar\">\n    <span style=\"font-size: .8rem\">display: </span>\n    <button class='colcountbutton'></button>\n    <button class='colcountbutton'></button>\n    <button class='colcountbutton'></button>\n\n    <span style=\"font-size: .8rem;margin-left: 10px;\">items per page:</span>\n    <select class=\"custom-select perpageselect\" name=\"itemperpage\" [(ngModel)]=\"itemperpage\"\n      (change)=\"changeitemperpage();\">\n      <option value='20'>\n        20\n      </option>\n      <option value='50'>\n        50\n      </option>\n\n      <option value='100'>\n        100\n      </option>\n\n    </select>\n  </div>\n\n\n</div>\n\n\n<div class=\"container pagecontrol\">\n  <pagination-controls [previousLabel]=\"prevlabel\" (pageChange)=\"test($event)\">\n  </pagination-controls>\n\n</div>\n\n\n<!-- \nDisease\n\ntag\t\ncrop\t\ndisease\t\nlocal names\t\ncausal type\t\npathogen (causal organsm)\t\nalternate host\t\ncrop stage affected\t\naffected plant parts\t\ngeneral description\t\nHow to Detect and Identify the Disease\t\nfavorable environment for disease emergence\t\nStrategies for Integrated Disease Management\t\nimage url\t\ncitation\n\n\nPest\ntag\t\nplant affected\t\ncommon name\t\nOrder/Family:\t\nscientific name\t\nother names\t\nfilipino names\t\nstages of development\t\ndescription\t\nhost range\t\ndamage characteristics\t\nmanagement practice\t\nimage url\t\ncitation\n\n -->\n\n<!-- lagyan ng disease type instead of order/family -->\n\n\n<div class=\"container cardcontainer gridcontainer\">\n\n  <div class=\"card\"\n    *ngFor=\"let pest of pestsdata | filter : term | paginate: { itemsPerPage: perpage, currentPage: p }\">\n    <a routerLink=\"/item/{{pest.tag}}\">\n\n\n        <img src=\"{{pest.image_url}}\" class=\"card-img-top\" alt=\"./assets/pest.jpeg\">\n\n        <div class=\"card-body\">\n          <div class=\"card-title\" [innerHTML]=\"pest.common_name | titlecase\"></div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n          <span class=\"card-subtitle\" style=\"font-size: .8rem;\">Order: {{pest.order_family}}</span>\n          <i class=\"material-icons open_new\">\n            open_in_new\n          </i>\n        </div>\n    </a>\n\n  </div>\n\n</div>\n\n<div class=\"container pagecontrol\">\n\n  <pagination-controls [previousLabel]=\"prevlabel\" (pageChange)=\"test($event)\">\n  </pagination-controls>\n\n\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(db, route) {
        var _this = this;
        this.route = route;
        this.pestsdata = [];
        this.completepestsdata = [];
        this.selectpestsdata = [];
        this.cropTerm = 'Rice';
        this.pestOrDiseaseTerm = 'All';
        this.diseaseTypeTerm = 'All';
        this.disabledFlag = false;
        // change to 23, 31, 48 for 4, 3, 2 on a page
        this.width = 23;
        this.p = 1;
        this.perpage = 20;
        this.itemperpage = 20;
        this.term = '';
        this.prevlabel = 'Prev';
        this.cropTerm = this.route.snapshot.paramMap.get('crop');
        this.items = db.list('items').valueChanges();
        var myObserver = {
            next: function (x) {
                x.forEach(function (sample) {
                    var tempObject = {
                        // insert the id too
                        item_id: sample.item_id,
                        entry_type: sample.entry_type,
                        tag: sample.tag,
                        plant_affected: sample.plant_affected,
                        common_name: sample.common_name.toLowerCase(),
                        order_family: sample.order_family,
                        scientific_name: sample.scientific_name,
                        other_names: sample.other_names,
                        filipino_names: sample.filipino_names,
                        stages_of_development: sample.stages_of_development,
                        description: sample.description,
                        host_range: sample.host_range,
                        damage_characteristics: sample.damage_characteristics,
                        management_practice: sample.management_practice,
                        image_url: sample.image_url,
                        citation: sample.citation
                    };
                    if (sample.plant_affected === _this.cropTerm) {
                        _this.pestsdata.push(tempObject);
                        _this.completepestsdata = _this.pestsdata;
                    }
                });
                // this.pestsdata = this.shuffle(this.pestsdata);
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('Observer got a complete notification'); }
        };
        this.items.subscribe(myObserver);
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.shuffle = function (array) {
        var currentIndex = array.length;
        var randomIndex;
        var temporaryValue;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    };
    CategoryComponent.prototype.filterCrop = function () {
        var _this = this;
        console.log('2');
        this.p = 1;
        if (this.pestOrDiseaseTerm === 'pest') {
            this.disabledFlag = true;
            this.diseaseTypeTerm = 'All';
        }
        else {
            this.disabledFlag = false;
        }
        var croptemp = this.completepestsdata;
        var cropordiseasetemp = this.completepestsdata;
        if ((this.cropTerm !== 'All')) {
            croptemp = this.completepestsdata.filter(function (f) {
                return (f.plant_affected === _this.cropTerm);
            });
        }
        else {
            croptemp = this.completepestsdata;
        }
        if ((this.pestOrDiseaseTerm !== 'All')) {
            cropordiseasetemp = this.completepestsdata.filter(function (f) {
                return (f.entry_type === _this.pestOrDiseaseTerm);
            });
        }
        else {
            cropordiseasetemp = this.completepestsdata;
        }
        // intersect 2 arrays
        var result = croptemp.filter(function (v) {
            // check sample present in the second array
            return cropordiseasetemp.indexOf(v) > -1;
            // or array2.includes(v)
        });
        this.pestsdata = result;
    };
    CategoryComponent.prototype.changeitemperpage = function () {
        this.p = 1;
        this.perpage = this.itemperpage;
    };
    CategoryComponent.prototype.test = function (event) {
        this.p = event;
    };
    CategoryComponent.prototype.resetfilters = function () {
        this.p = 1;
        this.perpage = 20;
        this.pestOrDiseaseTerm = 'All';
        this.diseaseTypeTerm = 'All';
        this.itemperpage = 20;
        this.term = '';
        this.pestsdata = this.completepestsdata;
    };
    CategoryComponent.prototype.removeItems = function () {
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        this.pestsdata.pop();
        console.log('this.pestdata :', this.pestsdata);
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/category/pipe.ts":
/*!**********************************!*\
  !*** ./src/app/category/pipe.ts ***!
  \**********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, term) {
        return term ? items.filter(function (item) { return item.common_name.indexOf(term) !== -1; }) : items;
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter',
            pure: false
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".namerow{\n    margin-top: 30px;\n}\nh4{\n    font-weight: 600;\n}\n.breadcrumb{\n    margin-top:30px;\n}\n.commonnamediv{\n    font-size: 2rem;\n    width: 100%;\n    font-weight: 600;\n}\n.othernamediv{\n    width: 100%;\n\n}\n.descrow{\n    display: flex;  \n    flex-wrap: wrap ;\n    justify-content: center;\n\n}\n.desccol{\n    width: 48%;\n    display: flex;\n    flex-direction: column;\n    min-width: 200px;\n    text-align: justify ;\n}\n.imagecol{\n    width: 48%;\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n}\n.hidediv{\n    display: none;\n}\n.namerow, .descrow, .damagerow, .managementrow {\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n    background:rgb(250,250,250);\n    margin-bottom: 20px;\n    box-shadow: 2px 4px rgb(200,200,200);\n    border: 1px solid rgba(33,37,41,.1);\n    border-radius: 3px;\n    font-weight: 400;\n\n}\n@media screen and (max-width: 900px) {\n    .descrow {\n        flex-direction: column-reverse;\n        \n    }\n\n    .imagecol img{\n        width: 100%;\n        margin: 20px;\n    }\n    .desccol, .imagecol{   \n        width: 100%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7O0FBRWY7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCOztBQUUzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQjtBQUdBO0lBQ0k7UUFDSSw4QkFBOEI7O0lBRWxDOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZXJvd3tcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuaDR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmJyZWFkY3J1bWJ7XG4gICAgbWFyZ2luLXRvcDozMHB4O1xufVxuLmNvbW1vbm5hbWVkaXZ7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5vdGhlcm5hbWVkaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLmRlc2Nyb3d7XG4gICAgZGlzcGxheTogZmxleDsgIFxuICAgIGZsZXgtd3JhcDogd3JhcCA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cblxuLmRlc2Njb2x7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5IDtcbn1cblxuLmltYWdlY29se1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaGlkZWRpdntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubmFtZXJvdywgLmRlc2Nyb3csIC5kYW1hZ2Vyb3csIC5tYW5hZ2VtZW50cm93IHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICAgIGJhY2tncm91bmQ6cmdiKDI1MCwyNTAsMjUwKTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggcmdiKDIwMCwyMDAsMjAwKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMzLDM3LDQxLC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcblxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICAgLmRlc2Nyb3cge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5pbWFnZWNvbCBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDIwcHg7XG4gICAgfVxuICAgIC5kZXNjY29sLCAuaW1hZ2Vjb2x7ICAgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container breadcrumb\">\n  <a routerLink='/' style=\"padding-right: 10px;\">Home</a> /  <a href=\"{{pest.plant_affected}}\" style=\"padding: 0px 10px;\">{{pest.plant_affected | titlecase}}</a> /  <span style=\"padding-left: 10px;\">{{pest.common_name}}</span>\n  \n</div>\n<div class=\"container namerow\">\n  <div class=\"commonnamediv\"> {{pest.common_name}}</div>\n  <div class=\"othernamediv\"[hidden]=\"pest.other_names===''\"><span style=\"font-size: 1.1rem;font-weight: 600;\">Other Names:</span> <div [innerHTML]=\"pest.other_names\">{{pest.other_names}}</div></div>\n  <div class=\"othernamediv\"><span style=\"font-size: 1.1rem;font-weight: 600;\">Scientific Name:</span> <div [innerHTML]=\"pest.scientific_name\">{{pest.scientific_name}}</div></div>\n  <div class=\"othernamediv\"><span style=\"font-size: 1.1rem;font-weight: 600;\">Plant Affected:</span> {{pest.plant_affected}}</div>\n\n\n</div>\n\n<div class=\"container descrow\">\n  <div class=\"desccol\">\n    <div [hidden]=\"pest.description===''\">\n      <h4>Description</h4>\n      <div [innerHTML]=\"pest.description\"></div>\n    </div>\n    <div [hidden]=\"pest.filipino_names===''\">\n\n      <h4>Filipino Names</h4>\n      <div [innerHTML]=\"pest.filipino_names\"></div>\n    </div>\n    <div [hidden]=\"pest.stages_of_development===''\">\n      <h4>Stages of Development</h4>\n      <div [innerHTML]=\"pest.stages_of_development\"></div>\n\n    </div>\n    <div [hidden]=\"pest.host_range===''\">\n      <h4>Host Range</h4>\n      <p>{{pest.host_range}}</p>\n\n    </div>\n\n  </div>\n  <div class=\"imagecol\">\n    <div style=\"margin:auto;\">\n    <img src=\"{{pest.image_url}}\" class=\"card-img-top\" alt=\"./assets/pest.jpeg\">\n    </div>\n\n\n\n  </div>\n\n\n</div>\n<div class=\"container damagerow\" [hidden]=\"pest.damage_characteristics===''\">\n  <h4>Damage Characteristics</h4>\n  <div [innerHTML]=\"pest.damage_characteristics\">{{pest.damage_characteristics}}</div>\n\n</div>\n<div class=\"container managementrow\" [hidden]=\"pest.management_practice===''\">\n  <h4>Management Practice</h4>\n  <div [innerHTML]=\"pest.management_practice\">{{pest.management_practice}}</div>\n\n</div>"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ItemComponent = /** @class */ (function () {
    function ItemComponent(db, route) {
        var _this = this;
        this.route = route;
        this.pest = {};
        this.filipinoFlag = true;
        window.scrollTo(0, 0);
        this.items = db.list('items').valueChanges();
        this.urltag = this.route.snapshot.paramMap.get('tag');
        var myObserver = {
            next: function (x) {
                x.forEach(function (sample) {
                    if (sample.tag === _this.urltag) {
                        var tempObject = {
                            // insert the id too
                            item_id: sample.item_id,
                            tag: sample.tag,
                            plant_affected: sample.plant_affected,
                            common_name: sample.common_name,
                            order_family: sample.order_family,
                            scientific_name: sample.scientific_name,
                            other_names: sample.other_names,
                            filipino_names: sample.filipino_names,
                            stages_of_development: sample.stages_of_development,
                            description: sample.description,
                            host_range: sample.host_range,
                            damage_characteristics: sample.damage_characteristics,
                            management_practice: sample.management_practice,
                            image_url: sample.image_url,
                            citation: sample.citation
                        };
                        _this.pest = tempObject;
                    }
                });
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('Observer got a complete notification'); },
        };
        this.items.subscribe(myObserver);
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gridcontainer {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-areas:\n    'crop crop crop';\n  margin-bottom: 50px;\n}\n\na {\n  color: black;\n  text-decoration: none;\n  /* no underline */\n}\n\n.card:after {\n  content: '\\A';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1);\n  opacity: 1;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n}\n\n.card:hover:after {\n  opacity: 0;\n}\n\n.card-body {\n  padding: 0.25rem;\n}\n\n.card-title {\n  margin: 0;\n  text-align: center;\n}\n\n.cardcontainer {\n  box-shadow: 2px 2px rgba(50, 50, 50, 0.2);\n  transition: .5s ease;\n}\n\n.cardcontainer:hover {\n  box-shadow: 2px 2px rgba(50, 50, 50, 0.4);\n  transition: .5 ease;\n\n}\n\n.card-img-top {\n  width: 100%;\n  height: 20vh;\n  -o-object-fit: cover;\n     object-fit: cover;\n\n}\n\n.herocontainer {\n  width: 100%;\n}\n\n.hero {\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n\n}\n\n.text span{\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.text {\n  background: rgba(255, 255, 255, 0.5);\n  position: absolute;\n  top: 50%;\n  left: 20%;\n  padding: 1rem;\n  transform: translateY(-50%);\n\n}\n\n.hero img {\n  width: 100%;\n  min-height: 200px;\n}\n\n@media screen and (max-width: 992px) {\n\n  .gridcontainer {\n    grid-template-areas:\n      'crop crop';\n\n  }\n\n  .text {\n    text-align: left;\n    top: 90px;\n    left: 0;\n  }\n\n  .text span{\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkO29CQUNrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLDhCQUE4QjtFQUM5QixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7O0FBRW5COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsMkJBQTJCOztBQUU3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBSUE7O0VBRUU7SUFDRTtpQkFDYTs7RUFFZjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsT0FBTztFQUNUOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDQwcHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2Nyb3AgY3JvcCBjcm9wJztcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAvKiBubyB1bmRlcmxpbmUgKi9cbn1cblxuLmNhcmQ6YWZ0ZXIge1xuICBjb250ZW50OiAnXFxBJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5jYXJkOmhvdmVyOmFmdGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDAuMjVyZW07XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xufVxuXG4uY2FyZGNvbnRhaW5lcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggcmdiYSg1MCwgNTAsIDUwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiAuNSBlYXNlO1xuXG59XG5cbi5jYXJkLWltZy10b3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZoO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcblxufVxuXG4uaGVyb2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVybyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG59XG5cbi50ZXh0IHNwYW57XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRleHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDIwJTtcbiAgcGFkZGluZzogMXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG59XG5cbi5oZXJvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG5cbiAgLmdyaWRjb250YWluZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnY3JvcCBjcm9wJztcblxuICB9XG5cbiAgLnRleHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdG9wOiA5MHB4O1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICAudGV4dCBzcGFue1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"herocontainer\">\n  <div class=\"hero\">\n    <img src=\"./assets/bg.jpg\" alt=\"\" >\n    <div class=\"text\">\n      <span>Insect Pest and Disease Library</span>\n      <p class=\"textstyle2\"><a href=\"http://sarai.ph/about-us\" target=\"new\">SARAi Project 2.4 Insect Pest and Disease Advisory System\n      (IPDAS)</a></p>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" style=\"display:inline;margin: 20px; text-align: center;\">\n\n  <h6></h6>\n</div>\n\n\n<div class=\"container gridcontainer\" style=\"width: 100%;\">\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"rice\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/rice.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\"> Rice</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"corn\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/corn.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">Corn</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"coffee\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/coffee.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">Coffee</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"cacao\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/cacao.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">Cacao</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"coconut\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/coconut.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\" style=\"color:black\">Coconut</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"sugarcane\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/sugarcane.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">Sugarcane</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"tomato\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/tomato.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\" style=\"color:black\">Tomato</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"banana\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/banana.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">Banana</div>\n        </div>\n      </div>\n\n    </a>\n  </div>\n\n  <div class=\"cardcontainer\">\n    <a routerLink=\"soybeans\">\n      <div class=\"card\" (click)=\"a()\">\n\n        <img src=\"./assets/soybeans.jpg\" class=\"card-img-top\" alt=\"./assets/rice.jpg\">\n        <div class=\"card-body\">\n          <div class=\"card-title\">Soybeans</div>\n          <!-- <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span> -->\n        </div>\n      </div>\n    </a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.a = function () {
        console.log('1111');
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
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
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBwTbF3n6wFwuZAPqtdhVepDggMnPnk4iY',
        authDomain: 'pest-library.firebaseapp.com',
        databaseURL: 'https://pest-library.firebaseio.com',
        projectId: 'pest-library',
        storageBucket: 'pest-library.appspot.com',
        messagingSenderId: '813558516567',
        appId: '1:813558516567:web:3a1a4456cdb6ad85718c12',
        measurementId: 'G-6FQV7579CH'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sarai/Desktop/pest-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map