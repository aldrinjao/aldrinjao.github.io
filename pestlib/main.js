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





var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
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













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _item_item_component__WEBPACK_IMPORTED_MODULE_12__["ItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".namerow{\n    margin-top: 30px;\n}\nh4{\n    font-weight: 600;\n}\n.breadcrumb{\n    margin-top:30px;\n}\n.commonnamediv{\n    font-size: 2rem;\n    width: 100%;\n    font-weight: 600;\n}\n.othernamediv{\n    width: 100%;\n\n}\n.descrow{\n    display: flex;  \n    flex-wrap: wrap ;\n    justify-content: center;\n\n}\n.desccol{\n    width: 48%;\n    display: flex;\n    flex-direction: column;\n    min-width: 200px;\n    text-align: justify ;\n}\n.imagecol{\n    width: 48%;\n    min-width: 200px;\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n}\n.hidediv{\n    display: none;\n}\n.namerow, .descrow, .damagerow, .managementrow {\n    padding-top: 10px;\n    padding-bottom: 10px;\n\n    background:rgb(250,250,250);\n    margin-bottom: 20px;\n    box-shadow: 2px 4px rgb(200,200,200);\n    border: 1px solid rgba(33,37,41,.1);\n    border-radius: 3px;\n    font-weight: 400;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7O0FBRWY7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCOztBQUUzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsZ0JBQWdCOztBQUVwQiIsImZpbGUiOiJzcmMvYXBwL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hbWVyb3d7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmg0e1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5icmVhZGNydW1ie1xuICAgIG1hcmdpbi10b3A6MzBweDtcbn1cbi5jb21tb25uYW1lZGl2e1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ub3RoZXJuYW1lZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5kZXNjcm93e1xuICAgIGRpc3BsYXk6IGZsZXg7ICBcbiAgICBmbGV4LXdyYXA6IHdyYXAgO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cbi5kZXNjY29se1xuICAgIHdpZHRoOiA0OCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSA7XG59XG5cbi5pbWFnZWNvbHtcbiAgICB3aWR0aDogNDglO1xuICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmhpZGVkaXZ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hbWVyb3csIC5kZXNjcm93LCAuZGFtYWdlcm93LCAubWFuYWdlbWVudHJvdyB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG5cbiAgICBiYWNrZ3JvdW5kOnJnYigyNTAsMjUwLDI1MCk7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiAycHggNHB4IHJnYigyMDAsMjAwLDIwMCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMywzNyw0MSwuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container breadcrumb\">\n  <a routerLink='/main' style=\"padding-right: 10px;\">Home</a> /  <span style=\"padding-left: 10px;\">{{pest.common_name}}</span>\n  \n</div>\n<div class=\"container namerow\">\n  <div class=\"commonnamediv\"> {{pest.common_name}}</div>\n  <div class=\"othernamediv\"[hidden]=\"pest.other_names===''\">Other Names: {{pest.other_names}}</div>\n  <div class=\"othernamediv\">Scientific Name: <span style=\"font-style:italic\">{{pest.scientific_name}}</span></div>\n  <div class=\"othernamediv\">Plant Affected: {{pest.plant_affected}}</div>\n\n\n</div>\n\n<div class=\"container descrow\">\n  <div class=\"desccol\">\n    <div [hidden]=\"pest.description===''\">\n      <h4>Description</h4>\n      <p>{{pest.description}}</p>\n    </div>\n    <div [hidden]=\"pest.filipino_names===''\">\n\n      <h4>Filipino Names</h4>\n      <p>{{pest.filipino_names}}</p>\n    </div>\n    <div [hidden]=\"pest.stages_of_development===''\">\n      <h4>Stages of Development</h4>\n      <p>{{pest.stages_of_development}}</p>\n\n    </div>\n    <div [hidden]=\"pest.host_range===''\">\n      <h4>Host Range</h4>\n      <p>{{pest.host_range}}</p>\n\n    </div>\n\n  </div>\n  <div class=\"imagecol\">\n    <div style=\"margin:auto;\">\n      <img src=\"./assets/pest2.jpg\" style=\"width: 100%;\">\n    </div>\n\n\n\n  </div>\n\n\n</div>\n<div class=\"container damagerow\" [hidden]=\"pest.damage_characteristics===''\">\n  <h4>Damage Characteristics</h4>\n  <p>{{pest.damage_characteristics}}</p>\n\n</div>\n<div class=\"container managementrow\" [hidden]=\"pest.management_practice===''\">\n  <h4>Management Practice</h4>\n  <p>{{pest.management_practice}}</p>\n\n</div>"

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

module.exports = ".container{\n  display: flex;\n  flex-wrap: wrap ;\n}\n\n.cardcontainer{\n  margin-top: 20px;\n  justify-content: center;\n\n}\n\n.card{\n  margin: 1%;\n  background: rgb(250,250,250);\n  box-shadow: 2px 4px rgb(200,200,200);\n}\n\n.searchform{\n  margin: auto;\n  width: 50%;\n}\n\n.open_new{\n font-size: 1rem;\n position:\n absolute;\n bottom: 5px;\n right: 5px;\n}\n\n.filterbar{\n  padding-top: 40px;\n  justify-content: space-between;\n}\n\n.filterselect{\n  margin-right: 25px;\n  min-width: 200px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1Qjs7QUFFekI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLG9DQUFvQztBQUN0Qzs7QUFJQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Y7U0FDUTtDQUNSLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwIDtcbn1cblxuLmNhcmRjb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cblxuLmNhcmR7XG4gIG1hcmdpbjogMSU7XG4gIGJhY2tncm91bmQ6IHJnYigyNTAsMjUwLDI1MCk7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggcmdiKDIwMCwyMDAsMjAwKTtcbn1cblxuXG5cbi5zZWFyY2hmb3Jte1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5vcGVuX25ld3tcbiBmb250LXNpemU6IDFyZW07XG4gcG9zaXRpb246XG4gYWJzb2x1dGU7XG4gYm90dG9tOiA1cHg7XG4gcmlnaHQ6IDVweDtcbn1cblxuLmZpbHRlcmJhcntcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZpbHRlcnNlbGVjdHtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"display:inline;margin: 20px; text-align: center;\">\n\n  <h4>Insect Pest and Disease Library</h4>\n  <h6><a href=\"http://sarai.ph/about-us\" target=\"new\">SARAi Project 2.4 Insect Pest and Disease Advisory System (IPDAS)</a></h6>\n</div>\n\n\n<div class=\"container\" style=\"margin-top: 20px;\">\n  <form class=\"searchform\">\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n\n  </form>\n</div>\n\n\n<div class=\"container filterbar\">\n<div style=\"display:flex;\">\n  <select class=\"custom-select filterselect\">\n    <option selected>All Crops</option>\n    <option value=\"1\">Rice</option>\n    <option value=\"2\">Corn</option>\n    <option value=\"3\">Cacao</option>\n    <option value=\"3\">Coffee</option>\n  </select> \n\n  <select class=\"custom-select  filterselect\">\n    <option selected>Pest and Disease</option>\n    <option value=\"1\">Pest</option>\n    <option value=\"2\">Disease</option>\n  </select> \n\n  <select class=\"custom-select  filterselect\">\n    <option selected>All Disease Types</option>\n    <option value=\"1\">Type 1</option>\n    <option value=\"2\">Type 2</option>\n    <option value=\"2\">Type 3</option>\n    <option value=\"2\">Type 4</option>\n  </select> \n\n</div>\n<div>\n  <button></button>  <button></button>  <button></button>\n</div>\n\n\n</div>\n\n\n\n\n\n  <!-- \nDisease\n\ntag\t\ncrop\t\ndisease\t\nlocal names\t\ncausal type\t\npathogen (causal organsm)\t\nalternate host\t\ncrop stage affected\t\naffected plant parts\t\ngeneral description\t\nHow to Detect and Identify the Disease\t\nfavorable environment for disease emergence\t\nStrategies for Integrated Disease Management\t\nimage url\t\ncitation\n\n\nPest\ntag\t\nplant affected\t\ncommon name\t\nOrder/Family:\t\nscientific name\t\nother names\t\nfilipino names\t\nstages of development\t\ndescription\t\nhost range\t\ndamage characteristics\t\nmanagement practice\t\nimage url\t\ncitation\n\n -->\n\n<!-- lagyan ng disease type instead of order/family -->\n\n\n<div class=\"container cardcontainer\">\n\n  <div class=\"card\" [style.width.%]=\"width\" *ngFor=\"let pest of pestsdata\">\n    <img src=\"./assets/pest.jpeg\" class=\"card-img-top\" alt=\"./assets/pest.jpeg\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{pest.common_name}}</h5>\n      <span class=\"card-subtitle mb-2 text-muted\" style=\"font-style:italic;font-size: .75rem;\">{{pest.scientific_name}}</span>\n      <br>\n      <span class=\"card-subtitle\" style=\"font-size: .8rem;\">Order: {{pest.order_family}}</span>\n      <a routerLink=\"/item/{{pest.tag}}\">\n        <i class=\"material-icons open_new\">\n          open_in_new\n        </i>\n      </a>\n    </div>\n  </div>\n\n\n</div>"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var MainComponent = /** @class */ (function () {
    function MainComponent(db) {
        var _this = this;
        this.pestsdata = [];
        // change to 23, 31, 48 for 4, 3, 2 on a page
        this.width = 23;
        this.items = db.list('items').valueChanges();
        var myObserver = {
            next: function (x) {
                x.forEach(function (sample) {
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
                    _this.pestsdata.push(tempObject);
                });
                _this.pestsdata = _this.shuffle(_this.pestsdata);
            },
            error: function (err) { return console.error('Observer got an error: ' + err); },
            complete: function () { return console.log('Observer got a complete notification'); }
        };
        this.items.subscribe(myObserver);
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.shuffle = function (array) {
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
    MainComponent.prototype.removeItems = function () {
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
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
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