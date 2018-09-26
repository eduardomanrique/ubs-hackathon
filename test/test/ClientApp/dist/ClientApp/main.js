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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-toolbar color=\"primary\">\r\n    <span class=\"d-none d-sm-block\">UBS Flow</span>\r\n\r\n    <span class=\"fill-space\"></span>\r\n  </mat-toolbar>\r\n\r\n  <app-flowlist></app-flowlist>\r\n\r\n  <button matTooltip=\"Add new flow\" class=\"btn-fixed btn-pin-bottom btn-pin-right\" mat-fab color=\"primary\" (click)=\"addFlowBtnHandler()\">\r\n    <mat-icon>add</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n<div [ngClass]=\"this.addPageClass\">\r\n  <app-add-flow-page>\r\n\r\n  </app-add-flow-page>\r\n</div>\r\n"

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
/* harmony import */ var _services_flow_list_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/flow-list.service */ "./src/app/services/flow-list.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(flowListService) {
        this.flowListService = flowListService;
        this.title = "ClientApp";
        this.addPageClass = "display-none";
    }
    AppComponent.prototype.addFlowBtnHandler = function () {
        this.flowListService.navToNewFlow();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flowListService.EditFlowEvent.subscribe(function (model) {
            _this.addPageClass = "show-animation";
        });
        this.flowListService.CancelFlowEvent.subscribe(function () {
            _this.addPageClass = "hide-animation";
            setTimeout(function () {
                _this.addPageClass = "hide-animation display-none";
            }, 500);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.flowListService.EditFlowEvent.unsubscribe();
        this.flowListService.CancelFlowEvent.unsubscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flow_list_service__WEBPACK_IMPORTED_MODULE_0__["FlowListService"]])
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_flow_page_add_flow_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-flow-page/add-flow-page.component */ "./src/app/components/add-flow-page/add-flow-page.component.ts");
/* harmony import */ var _components_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/flow-item/flow-item.component */ "./src/app/components/flow-item/flow-item.component.ts");
/* harmony import */ var _components_flowlist_flowlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/flowlist/flowlist.component */ "./src/app/components/flowlist/flowlist.component.ts");
/* harmony import */ var _components_rule_group_rule_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/rule-group/rule-group.component */ "./src/app/components/rule-group/rule-group.component.ts");
/* harmony import */ var _components_simple_rule_simple_rule_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/simple-rule/simple-rule.component */ "./src/app/components/simple-rule/simple-rule.component.ts");
/* harmony import */ var _components_apistep_apistep_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/apistep/apistep.component */ "./src/app/components/apistep/apistep.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_flowlist_flowlist_component__WEBPACK_IMPORTED_MODULE_12__["FlowlistComponent"],
                _components_flow_item_flow_item_component__WEBPACK_IMPORTED_MODULE_11__["FlowItemComponent"],
                _components_add_flow_page_add_flow_page_component__WEBPACK_IMPORTED_MODULE_10__["AddFlowPageComponent"],
                _components_rule_group_rule_group_component__WEBPACK_IMPORTED_MODULE_13__["RuleGroupComponent"],
                _components_simple_rule_simple_rule_component__WEBPACK_IMPORTED_MODULE_14__["SimpleRuleComponent"],
                _components_apistep_apistep_component__WEBPACK_IMPORTED_MODULE_15__["ApistepComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home' }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-flow-page/add-flow-page.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/add-flow-page/add-flow-page.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrapper {\r\n  background: #fff;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.step-wrapper input {\r\n  width: 500px;\r\n}\r\n\r\n.step-wrapper .mat-form-field {\r\n  width: 90%;\r\n}\r\n\r\n.steps-container .step-card {\r\n  width: 800px;\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.steps-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  -ms-align-items: center;\r\n  -o-align-items: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n  overflow: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/add-flow-page/add-flow-page.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-flow-page/add-flow-page.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrapper\">\r\n  <mat-toolbar color=\"warn\">\r\n    <mat-form-field *ngIf=\"this.model\" class=\"search-form\">\r\n      <input type=\"text\" [value]=\"this.model.title\" (input)=\"titleChangedHandler($event.target.value)\" placeholder=\"title\"\r\n        matInput />\r\n    </mat-form-field>\r\n\r\n    <span class=\"fill-space\"></span>\r\n\r\n    <button mat-icon-button (click)=\"saveBtnHandler()\">\r\n      <mat-icon matTooltip=\"Save\" aria-label=\"Save\">save</mat-icon>\r\n    </button>\r\n\r\n    <button mat-icon-button (click)=\"cancelBtnHandler()\">\r\n      <mat-icon matTooltip=\"Close\" aria-label=\"Close\">clear</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n\r\n  <div *ngIf=\"this.model\" class=\"steps-container\">\r\n    <div *ngIf=\"this.model.steps.length === 0\">Add steps to see the list</div>\r\n    <mat-accordion multi=\"false\">\r\n      <div *ngFor=\"let step of this.model.steps; let I = index\">\r\n\r\n        <app-apistep *ngIf=\"step.stepType == 1\" class=\"step-card\" [expanded]=\"step\" (removeButtonClick)=\"removeStepHandler(I)\"\r\n          [model]=\"step\">\r\n\r\n        </app-apistep>\r\n\r\n        <app-simple-rule *ngIf=\"step.stepType == 2\" [expanded]=\"step\" class=\"step-card\" (removeButtonClick)=\"removeStepHandler(I)\"\r\n          [model]=\"step\">\r\n\r\n        </app-simple-rule>\r\n\r\n      </div>\r\n    </mat-accordion>\r\n  </div>\r\n\r\n  <button mat-raised-button color=\"warn\" class=\"btn-fixed btn-pin-bottom btn-pin-right btn-right-1\" (click)=\"addEmptyStepHandler('rule')\">\r\n    <mat-icon aria-label=\"rule\">notes</mat-icon> Add Rule\r\n  </button>\r\n\r\n  <button mat-raised-button color=\"warn\" class=\"btn-fixed btn-pin-bottom btn-pin-right btn-right-2\" (click)=\"addEmptyStepHandler('url')\">\r\n    <mat-icon aria-label=\"api\">cloud</mat-icon> Add Source\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/add-flow-page/add-flow-page.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-flow-page/add-flow-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddFlowPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFlowPageComponent", function() { return AddFlowPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/flow.model */ "./src/app/models/flow.model.ts");
/* harmony import */ var _models_flowstep_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/flowstep.model */ "./src/app/models/flowstep.model.ts");
/* harmony import */ var _models_flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/flowsteptypes.enum */ "./src/app/models/flowsteptypes.enum.ts");
/* harmony import */ var _services_flow_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/flow-list.service */ "./src/app/services/flow-list.service.ts");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddFlowPageComponent = /** @class */ (function () {
    function AddFlowPageComponent(storageService, flowListService) {
        this.storageService = storageService;
        this.flowListService = flowListService;
    }
    AddFlowPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flowListService.EditFlowEvent.subscribe(function (model) {
            if (model) {
                _this.isEdit = true;
                _this.model = model;
            }
            else {
                _this.isEdit = false;
                _this.model = new _models_flow_model__WEBPACK_IMPORTED_MODULE_1__["FlowModel"]("");
                _this.model.steps = [];
                _this.addEmptyStepHandler('url');
            }
        });
    };
    AddFlowPageComponent.prototype.ngOnDestroy = function () {
        this.flowListService.EditFlowEvent.unsubscribe();
    };
    AddFlowPageComponent.prototype.titleChangedHandler = function (val) {
        this.model.title = val;
    };
    AddFlowPageComponent.prototype.cancelBtnHandler = function () {
        this.flowListService.closeEditor();
    };
    AddFlowPageComponent.prototype.removeStepHandler = function (index) {
        this.model.steps.splice(index, 1);
    };
    AddFlowPageComponent.prototype.addEmptyStepHandler = function (stepType) {
        switch (stepType) {
            case 'url':
                var newApi = new _models_flowstep_model__WEBPACK_IMPORTED_MODULE_2__["FlowStepModel"]("", "", "");
                newApi.stepType = _models_flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_3__["FlowStepTypes"].API;
                this.model.steps.push(newApi);
                break;
            case 'rule':
                var newRule = new _models_flowstep_model__WEBPACK_IMPORTED_MODULE_2__["FlowStepModel"]("", "", "");
                newRule.stepType = _models_flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_3__["FlowStepTypes"].RULE;
                this.model.steps.push(newRule);
                break;
            default: break;
        }
    };
    AddFlowPageComponent.prototype.validateModel = function () {
        var _this = this;
        var err = [];
        var flows = this.flowListService.getFlows();
        if (!this.model.title) {
            err.push("Name is mandatory");
        }
        if (this.model.steps.length == 0) {
            err.push("There should be at least 1 step in the flow");
        }
        if (!this.isEdit && flows.filter(function (item) { return item.title === _this.model.title; }).length) {
            err.push("Flow with name: " + this.model.title + " already exists, try to choose another name");
        }
        return err;
    };
    AddFlowPageComponent.prototype.saveBtnHandler = function () {
        var errors = this.validateModel();
        if (!errors.length) {
            this.flowListService.addFlow(this.model, this.isEdit);
            this.flowListService.closeEditor();
        }
        else {
            alert(errors.join("\n"));
        }
    };
    AddFlowPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-flow-page',
            template: __webpack_require__(/*! ./add-flow-page.component.html */ "./src/app/components/add-flow-page/add-flow-page.component.html"),
            styles: [__webpack_require__(/*! ./add-flow-page.component.css */ "./src/app/components/add-flow-page/add-flow-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"], _services_flow_list_service__WEBPACK_IMPORTED_MODULE_4__["FlowListService"]])
    ], AddFlowPageComponent);
    return AddFlowPageComponent;
}());



/***/ }),

/***/ "./src/app/components/apistep/apistep.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/apistep/apistep.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.card-body {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.step-wrapper input {\r\n  width: 500px;\r\n}\r\n\r\n.steps-container .step-card {\r\n  width: 800px;\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.options-container .mat-checkbox,\r\n.options-container .mat-radio-button {\r\n  margin-right: 20px;\r\n}\r\n\r\n.mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.title {\r\n  font-size: 1.4rem;\r\n  font-family: \"Segoe UI\", Arial;\r\n}\r\n\r\n.mat-expansion-panel-header-title {\r\n  margin: 0;\r\n}\r\n\r\n.subtitle {\r\n  color: #c7c7c7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/apistep/apistep.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/apistep/apistep.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel hideToggle>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>\r\n      <p class=\"title\"><span class=\"subtitle\">Request to: </span> <span class=\"api-name\">{{(this.selected && this.selected.name) || 'api not selected'}}</span> </p>\r\n\r\n      <span class=\"fill-space\"></span>\r\n\r\n      <button mat-icon-button>\r\n        <mat-icon matTooltip=\"Close\" aria-label=\"Close\" (click)=\"removeStepHandler()\">clear</mat-icon>\r\n      </button>\r\n    </mat-panel-title>\r\n  </mat-expansion-panel-header>\r\n\r\n  <div class=\"step-wrapper\">\r\n\r\n    <div class=\"card-body\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Select an application\" (selectionChange)=\"stepUrlChangedHandler($event.value)\">\r\n          <mat-option *ngFor=\"let item of this.availableUrls\" [value]=\"item\">\r\n            {{item.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div class=\"options-container\" *ngIf=\"this.selected\">\r\n          <div *ngIf=\"this.selected.optionsType=='checkbox'\">\r\n            <mat-checkbox *ngFor=\"let item of this.selected.availableOptions\" color=\"primary\">{{item}}</mat-checkbox>\r\n          </div>\r\n          <div *ngIf=\"this.selected.optionsType=='radio'\">\r\n            <mat-radio-group>\r\n              <mat-radio-button *ngFor=\"let item of this.selected.availableOptions\"\r\n                                color=\"primary\"\r\n                                value={{item}}>\r\n                {{item}}\r\n              </mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</mat-expansion-panel>\r\n"

/***/ }),

/***/ "./src/app/components/apistep/apistep.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/apistep/apistep.component.ts ***!
  \*********************************************************/
/*! exports provided: ApistepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApistepComponent", function() { return ApistepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flowstep_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/flowstep.model */ "./src/app/models/flowstep.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApistepComponent = /** @class */ (function () {
    function ApistepComponent() {
        this.removeButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //public expanded = true;
        this.availableUrls = [
            {
                name: "BPX",
                url: "http://www.mocky.io/v2/5b922d8d3100008000939bed",
                availableOptions: ['banker advanced details', 'opportunity advanced details'],
                optionsType: 'checkbox'
            },
            {
                name: "Another processing application",
                url: "http://localhost:8080/converter/processData",
                availableOptions: ['calculate currency', 'group by country'],
                optionsType: 'checkbox'
            },
            {
                name: "Export",
                url: "http://localhost:8080/converter/convertToExcel",
                availableOptions: ['Excel', 'Word'],
                optionsType: 'radio'
            },
            {
                name: "Local file",
                url: "http://localhost:8080/converter/convertToExcel",
                availableOptions: ['Excel', 'Word'],
                optionsType: 'radio'
            }
        ];
    }
    ApistepComponent.prototype.ngOnInit = function () {
        var _this = this;
        var item = this.availableUrls.filter(function (item) { return item.name == _this.model.title && item.url == _this.model.content; })[0];
        if (item) {
            this.selected = item;
        }
    };
    ApistepComponent.prototype.removeStepHandler = function () {
        this.removeButtonClick.emit();
    };
    ApistepComponent.prototype.stepUrlChangedHandler = function (item) {
        this.model.content = item.url;
        this.model.title = item.name;
        this.selected = item;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_flowstep_model__WEBPACK_IMPORTED_MODULE_1__["FlowStepModel"])
    ], ApistepComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ApistepComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ApistepComponent.prototype, "removeButtonClick", void 0);
    ApistepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-apistep',
            template: __webpack_require__(/*! ./apistep.component.html */ "./src/app/components/apistep/apistep.component.html"),
            styles: [__webpack_require__(/*! ./apistep.component.css */ "./src/app/components/apistep/apistep.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApistepComponent);
    return ApistepComponent;
}());



/***/ }),

/***/ "./src/app/components/flow-item/flow-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/flow-item/flow-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-title {\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  font-family: \"Segoe UI\", Arial;\r\n  width: 100%;\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.flow-item {\r\n  display: inline-block;\r\n  margin: 10px;\r\n  width: 400px;\r\n}\r\n\r\n.mat-card-actions {\r\n  display: flex;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n  font-size: 1rem;\r\n  font-family: \"Segoe UI\", Arial;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/flow-item/flow-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/flow-item/flow-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"flow-item\">\r\n  <mat-card-header>\r\n    <div class=\"absolute\">\r\n        <span class=\"fill-space\"></span>\r\n\r\n        <mat-menu #appMenu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"editFlowHandler()\">Edit</button>\r\n        </mat-menu>\r\n\r\n        <button style=\"float: right\" mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n    </div>\r\n    <mat-card-title class=\"card-title\">\r\n      {{this.model.title}}\r\n    </mat-card-title>\r\n    <mat-card-subtitle *ngIf=\"!this.expanded\">\r\n      ({{this.model.steps.length}} steps)\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <ul *ngIf=\"this.expanded && this.model\">\r\n      <li *ngFor=\"let item of this.model.steps; let I = index\">\r\n        {{I + 1}}) {{item.stepType == 1 ? 'call to:' : 'apply rule:'}} {{item.title}}\r\n      </li>\r\n    </ul>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-icon-button (click)=\"toggleExpanded()\">\r\n      <mat-icon matTooltip=\"show flow details\" *ngIf=\"!this.expanded\">expand_more</mat-icon>\r\n      <mat-icon matTooltip=\"hide flow details\" *ngIf=\"this.expanded\">expand_less</mat-icon>\r\n    </button>\r\n    <span class=\"fill-space\"></span>\r\n    <button mat-button (click)=\"removeFlowHandler()\">\r\n      <mat-icon>delete</mat-icon>Remove\r\n    </button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"executeBtnHandler()\">\r\n      <mat-icon>play_arrow</mat-icon>Execute\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/flow-item/flow-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/flow-item/flow-item.component.ts ***!
  \*************************************************************/
/*! exports provided: FlowItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowItemComponent", function() { return FlowItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/flow.model */ "./src/app/models/flow.model.ts");
/* harmony import */ var _services_flow_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/flow-list.service */ "./src/app/services/flow-list.service.ts");
/* harmony import */ var _services_flow_engine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/flow-engine.service */ "./src/app/services/flow-engine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlowItemComponent = /** @class */ (function () {
    function FlowItemComponent(flowListService, flowEngineServie) {
        this.flowListService = flowListService;
        this.flowEngineServie = flowEngineServie;
    }
    FlowItemComponent.prototype.ngOnInit = function () {
    };
    FlowItemComponent.prototype.removeFlowHandler = function () {
        if (confirm("Are you sure you want to delete flow: " + this.model.title + " ?")) {
            this.flowListService.removeFlow(this.model.title);
        }
    };
    FlowItemComponent.prototype.editFlowHandler = function () {
        this.flowListService.navToEditFlow(this.model);
    };
    FlowItemComponent.prototype.executeBtnHandler = function () {
        this.flowEngineServie.execute(this.model);
    };
    FlowItemComponent.prototype.toggleExpanded = function () {
        this.expanded = !this.expanded;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_flow_model__WEBPACK_IMPORTED_MODULE_1__["FlowModel"])
    ], FlowItemComponent.prototype, "model", void 0);
    FlowItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flow-item',
            template: __webpack_require__(/*! ./flow-item.component.html */ "./src/app/components/flow-item/flow-item.component.html"),
            styles: [__webpack_require__(/*! ./flow-item.component.css */ "./src/app/components/flow-item/flow-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flow_list_service__WEBPACK_IMPORTED_MODULE_2__["FlowListService"], _services_flow_engine_service__WEBPACK_IMPORTED_MODULE_3__["FlowEngineService"]])
    ], FlowItemComponent);
    return FlowItemComponent;
}());



/***/ }),

/***/ "./src/app/components/flowlist/flowlist.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/flowlist/flowlist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flow-items-container {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.no-data {\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/flowlist/flowlist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/flowlist/flowlist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flow-items-container\">\r\n  <div *ngIf=\"this.myFlows.length == 0\" class=\"no-data\">\r\n    You have no any saved flows, use create button to create one.\r\n  </div>\r\n  <div *ngIf=\"this.myFlows.length != 0\">\r\n    <app-flow-item *ngFor=\"let flowitem of this.myFlows\" [model]=\"flowitem\"></app-flow-item>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/flowlist/flowlist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/flowlist/flowlist.component.ts ***!
  \***********************************************************/
/*! exports provided: FlowlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowlistComponent", function() { return FlowlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_flow_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/flow-list.service */ "./src/app/services/flow-list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlowlistComponent = /** @class */ (function () {
    function FlowlistComponent(flowListService) {
        this.flowListService = flowListService;
    }
    FlowlistComponent.prototype.ngOnInit = function () {
        this.myFlows = this.flowListService.getFlows();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FlowlistComponent.prototype, "filterText", void 0);
    FlowlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flowlist',
            template: __webpack_require__(/*! ./flowlist.component.html */ "./src/app/components/flowlist/flowlist.component.html"),
            styles: [__webpack_require__(/*! ./flowlist.component.css */ "./src/app/components/flowlist/flowlist.component.css")]
        }),
        __metadata("design:paramtypes", [_services_flow_list_service__WEBPACK_IMPORTED_MODULE_1__["FlowListService"]])
    ], FlowlistComponent);
    return FlowlistComponent;
}());



/***/ }),

/***/ "./src/app/components/rule-group/rule-group.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/rule-group/rule-group.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.card {\r\n  max-width: 800px;\r\n}\r\n\r\n.header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.accordeon-headers-align .mat-expansion-panel-header-title,\r\n.accordeon-headers-align .mat-expansion-panel-header-description {\r\n  flex-basis: 0;\r\n}\r\n\r\n.accordeon-headers-align .mat-expansion-panel-header-description {\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/components/rule-group/rule-group.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/rule-group/rule-group.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-header>\r\n    <mat-card-title>\r\n      <h3>Rules</h3>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <mat-accordion class=\"accordeon-headers-align\">\r\n      <mat-expansion-panel *ngFor=\"let rule of rules; let i = index\" [expanded]=\"pos === i\" (opened)=\"setPos(i)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{rule.name || 'Unnamed'}}\r\n          </mat-panel-title>\r\n          <button mat-icon-button color=\"secondary\" (click)=\"removeRule(rule)\">\r\n            <mat-icon aria-label=\"Remove rule\">remove</mat-icon>\r\n          </button>\r\n        </mat-expansion-panel-header>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Name\" name=\"name\" onfocus=\"this.setSelectionRange(0, this.value.length)\" (input)=\"textChangedHandler($event, rule)\"\r\n            [value]=\"rule.name\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"When\" name=\"condition\" (input)=\"textChangedHandler($event, rule)\" [value]=\"rule.condition\">\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Then\" name=\"action\" (input)=\"textChangedHandler($event, rule)\" [value]=\"rule.action\"></textarea>\r\n        </mat-form-field>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-icon-button color=\"primary\" (click)=\"addRule()\">\r\n      <mat-icon aria-label=\"Add rule\">add</mat-icon>\r\n    </button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/rule-group/rule-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/rule-group/rule-group.component.ts ***!
  \***************************************************************/
/*! exports provided: RuleGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleGroupComponent", function() { return RuleGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/flow.model */ "./src/app/models/flow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RuleGroupComponent = /** @class */ (function () {
    function RuleGroupComponent() {
        this.rules = [{
                name: 'condition 1',
                condition: '$entity.xyz == "ABC" and $entity.point == 3',
                action: '$entity.evaluation = 10'
            }, {
                name: 'condition 2',
                condition: '$entity.point == 2',
                action: "\n$entity.evaluation = $entity.point * 2\n$entity.xyz = 'XYZ'\n    "
            }, {
                name: 'condition 3',
                condition: '$entity.name == "Test3"',
                action: '$entity.evaluation = $entity.evaluation + 2'
            }];
        this.pos = 0;
    }
    RuleGroupComponent.prototype.setPos = function (index) {
        this.pos = index;
    };
    RuleGroupComponent.prototype.textChangedHandler = function (event, rule) {
        var val = event.target.value;
        var name = event.target.getAttribute('name');
        rule[name] = val;
    };
    RuleGroupComponent.prototype.addRule = function () {
        this.rules.push({
            name: '',
            condition: '',
            action: ''
        });
    };
    RuleGroupComponent.prototype.removeRule = function (rule) {
        this.rules.splice(this.rules.indexOf(rule), 1);
    };
    RuleGroupComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_flow_model__WEBPACK_IMPORTED_MODULE_1__["FlowModel"])
    ], RuleGroupComponent.prototype, "model", void 0);
    RuleGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rule-group',
            template: __webpack_require__(/*! ./rule-group.component.html */ "./src/app/components/rule-group/rule-group.component.html"),
            styles: [__webpack_require__(/*! ./rule-group.component.css */ "./src/app/components/rule-group/rule-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RuleGroupComponent);
    return RuleGroupComponent;
}());



/***/ }),

/***/ "./src/app/components/simple-rule/simple-rule.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/simple-rule/simple-rule.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n  width: 100%;\r\n}\r\n.title {\r\n  font-size: 1.4rem;\r\n  font-family: \"Segoe UI\", Arial;\r\n}\r\n.mat-expansion-panel-header-title {\r\n  margin: 0;\r\n}\r\n.subtitle {\r\n  color: #c7c7c7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/simple-rule/simple-rule.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/simple-rule/simple-rule.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <p class=\"title\"> <span class=\"subtitle\">Apply rule:</span> <span class=\"api-name\">{{this.model.title || 'Unnamed'}}</span> </p>\r\n\r\n        <span class=\"fill-space\"></span>\r\n\r\n        <button mat-icon-button>\r\n          <mat-icon matTooltip=\"Close\" aria-label=\"Close\" (click)=\"removeStepHandler()\">clear</mat-icon>\r\n        </button>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Name\" name=\"title\"\r\n             onfocus=\"this.setSelectionRange(0, this.value.length)\"\r\n             (input)=\"textChangedHandler($event)\"\r\n             [value]=\"this.model.title\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"When\" name=\"content\" (input)=\"textChangedHandler($event)\" [value]=\"this.model.content\">\r\n    </mat-form-field>\r\n    <br>\r\n    <mat-form-field>\r\n      <textarea matInput placeholder=\"Then\" name=\"action\" (input)=\"textChangedHandler($event)\" [value]=\"this.model.action\"></textarea>\r\n    </mat-form-field>\r\n  </mat-expansion-panel>\r\n"

/***/ }),

/***/ "./src/app/components/simple-rule/simple-rule.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/simple-rule/simple-rule.component.ts ***!
  \*****************************************************************/
/*! exports provided: SimpleRuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleRuleComponent", function() { return SimpleRuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flowstep_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/flowstep.model */ "./src/app/models/flowstep.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleRuleComponent = /** @class */ (function () {
    //public expanded = true;
    function SimpleRuleComponent() {
        this.removeButtonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SimpleRuleComponent.prototype.ngOnInit = function () {
    };
    SimpleRuleComponent.prototype.textChangedHandler = function (event) {
        var name = event.target.getAttribute('name');
        this.model[name] = event.target.value;
    };
    SimpleRuleComponent.prototype.removeStepHandler = function () {
        this.removeButtonClick.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_flowstep_model__WEBPACK_IMPORTED_MODULE_1__["FlowStepModel"])
    ], SimpleRuleComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SimpleRuleComponent.prototype, "expanded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SimpleRuleComponent.prototype, "removeButtonClick", void 0);
    SimpleRuleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-rule',
            template: __webpack_require__(/*! ./simple-rule.component.html */ "./src/app/components/simple-rule/simple-rule.component.html"),
            styles: [__webpack_require__(/*! ./simple-rule.component.css */ "./src/app/components/simple-rule/simple-rule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimpleRuleComponent);
    return SimpleRuleComponent;
}());



/***/ }),

/***/ "./src/app/models/flow.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/flow.model.ts ***!
  \**************************************/
/*! exports provided: FlowModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowModel", function() { return FlowModel; });
var FlowModel = /** @class */ (function () {
    function FlowModel(title) {
        this.title = title;
        this.steps = [];
    }
    return FlowModel;
}());



/***/ }),

/***/ "./src/app/models/flowstep.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/flowstep.model.ts ***!
  \******************************************/
/*! exports provided: FlowStepModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowStepModel", function() { return FlowStepModel; });
/* harmony import */ var _flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flowsteptypes.enum */ "./src/app/models/flowsteptypes.enum.ts");

var FlowStepModel = /** @class */ (function () {
    function FlowStepModel(title, content, action) {
        if (action === void 0) { action = ""; }
        this.title = title;
        this.content = content;
        this.action = action;
        this.stepType = _flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_0__["FlowStepTypes"].API;
    }
    return FlowStepModel;
}());



/***/ }),

/***/ "./src/app/models/flowsteptypes.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/models/flowsteptypes.enum.ts ***!
  \**********************************************/
/*! exports provided: FlowStepTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowStepTypes", function() { return FlowStepTypes; });
var FlowStepTypes;
(function (FlowStepTypes) {
    FlowStepTypes[FlowStepTypes["API"] = 1] = "API";
    FlowStepTypes[FlowStepTypes["RULE"] = 2] = "RULE";
})(FlowStepTypes || (FlowStepTypes = {}));


/***/ }),

/***/ "./src/app/services/flow-engine.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/flow-engine.service.ts ***!
  \*************************************************/
/*! exports provided: FlowEngineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowEngineService", function() { return FlowEngineService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/flowsteptypes.enum */ "./src/app/models/flowsteptypes.enum.ts");
/* harmony import */ var _util_rule_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/rule-engine */ "./src/app/util/rule-engine.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var FlowEngineService = /** @class */ (function () {
    function FlowEngineService(http) {
        this.http = http;
    }
    FlowEngineService.prototype.execute = function (model) {
        return __awaiter(this, void 0, void 0, function () {
            var currentContent, _loop_1, this_1, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _loop_1 = function (i) {
                            var item, _a, response, result, engine_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        console.log(i);
                                        item = model.steps[i];
                                        _a = item.stepType;
                                        switch (_a) {
                                            case _models_flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_2__["FlowStepTypes"].API: return [3 /*break*/, 1];
                                            case _models_flowsteptypes_enum__WEBPACK_IMPORTED_MODULE_2__["FlowStepTypes"].RULE: return [3 /*break*/, 6];
                                        }
                                        return [3 /*break*/, 7];
                                    case 1:
                                        console.log('REQUEST TO API: ' + item.content);
                                        response = void 0;
                                        if (i === 0) {
                                            response = this_1.http.get(item.content);
                                        }
                                        else {
                                            response = this_1.http
                                                .post(item.content, JSON.stringify(currentContent), {
                                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
                                                    .set('Content-Type', 'application/json')
                                            });
                                        }
                                        console.log(i + ': ' + response + ' ' + model.steps.length);
                                        if (!(i === model.steps.length - 1)) return [3 /*break*/, 3];
                                        console.log('open ');
                                        return [4 /*yield*/, response.toPromise()];
                                    case 2:
                                        result = _b.sent();
                                        console.log('open ' + result.url);
                                        console.log(result.url);
                                        window.open(result.url);
                                        return [3 /*break*/, 5];
                                    case 3:
                                        console.log('nn ');
                                        return [4 /*yield*/, response.toPromise()];
                                    case 4:
                                        currentContent = _b.sent();
                                        _b.label = 5;
                                    case 5: return [3 /*break*/, 8];
                                    case 6:
                                        console.log('APPLY RULE');
                                        engine_1 = new _util_rule_engine__WEBPACK_IMPORTED_MODULE_3__["default"]([item]);
                                        currentContent.forEach(function (entity) { return engine_1.exec(entity); });
                                        return [3 /*break*/, 8];
                                    case 7: return [3 /*break*/, 8];
                                    case 8: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < model.steps.length)) return [3 /*break*/, 4];
                        return [5 /*yield**/, _loop_1(i)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        console.log(JSON.stringify(currentContent));
                        return [2 /*return*/];
                }
            });
        });
    };
    FlowEngineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], FlowEngineService);
    return FlowEngineService;
}());



/***/ }),

/***/ "./src/app/services/flow-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/flow-list.service.ts ***!
  \***********************************************/
/*! exports provided: FlowListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlowListService", function() { return FlowListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/services/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlowListService = /** @class */ (function () {
    function FlowListService(storageService) {
        this.storageService = storageService;
        this.EditFlowEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.CancelFlowEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        var data = this.storageService.getObj("flows");
        if (!data || !data.length) {
            data = [];
            this.storageService.setObj("flows", data);
        }
        this.flows = data;
    }
    FlowListService.prototype.closeEditor = function () {
        this.CancelFlowEvent.emit();
    };
    FlowListService.prototype.navToNewFlow = function () {
        this.EditFlowEvent.emit(null);
    };
    FlowListService.prototype.navToEditFlow = function (model) {
        this.EditFlowEvent.emit(model);
    };
    FlowListService.prototype.getFlows = function () {
        return this.flows;
    };
    FlowListService.prototype.addFlow = function (model, replace) {
        if (replace === void 0) { replace = false; }
        var index = this.flows.findIndex(function (item) { return item.title == model.title; });
        if (replace && index >= 0) {
            this.flows.splice(index, 1, model);
            this.storageService.setObj("flows", this.flows);
        }
        else {
            if (index < 0) {
                this.flows.push(model);
                this.storageService.setObj("flows", this.flows);
            }
        }
    };
    FlowListService.prototype.removeFlow = function (title) {
        var index = this.flows.findIndex(function (flow) { return flow.title === title; });
        if (index >= 0) {
            this.flows.splice(index, 1);
            this.storageService.setObj("flows", this.flows);
        }
    };
    FlowListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], FlowListService);
    return FlowListService;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.storage = window.localStorage;
        this.json = window['JSON'];
    }
    LocalStorageService.prototype.setObj = function (name, objValue) {
        this.storage.setItem(name, this.json.stringify(objValue));
    };
    LocalStorageService.prototype.getObj = function (name) {
        return this.json.parse(this.storage.getItem(name));
    };
    LocalStorageService.prototype.setItem = function (name, val) {
        this.storage.setItem(name, val);
    };
    LocalStorageService.prototype.getItem = function (name) {
        return this.storage.getItem(name);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/util/rule-engine.ts":
/*!*************************************!*\
  !*** ./src/app/util/rule-engine.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var coffeescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coffeescript */ "./node_modules/coffeescript/lib/coffeescript/browser.js");
/* harmony import */ var coffeescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coffeescript__WEBPACK_IMPORTED_MODULE_0__);

var RuleEngine = /** @class */ (function () {
    function RuleEngine(rules) {
        this.script = null;
        this.rules = rules;
    }
    RuleEngine.prototype.exec = function ($entity) {
        if (!this.script) {
            this.buildScript($entity);
        }
        eval(this.script);
    };
    RuleEngine.prototype.buildScript = function (e) {
        var scripts = ['$entity.appliedRules = [];\n'];
        scripts = scripts.concat(this.rules.map(function (rule, index) {
            var script = Object.keys(e).map(function (k) { return k + "=$entity." + k; });
            var condition = rule['content']
                .replace(/\sequals\s/g, '==')
                .replace(/\sis\s*different\s*of\s/g, '!=')
                .replace(/\sis\s*greater\s*than\s*or\s*equal\s*to\s/g, '>=')
                .replace(/\sis\s*greater\s*than\s/g, '>')
                .replace(/\sis\s*less\s*than\s*or\s*equal\s*to\s/g, '<=')
                .replace(/\sis\s*less\s*than\s/g, '<');
            script.push("if " + condition + "\n  $entity.appliedRules.push(" + index + ")");
            return coffeescript__WEBPACK_IMPORTED_MODULE_0___default.a.compile(script.join('\n'));
        }));
        scripts = scripts.concat(this.rules.map(function (rule, index) {
            var script = Object.keys(e).map(function (k) { return k + "=$entity." + k; });
            script.push("if $entity.appliedRules.indexOf(" + index + ") >= 0\n" + rule['action'].split('\n').map(function (line) { return "  " + line.trim(); }).join('\n'));
            script = script.concat(Object.keys(e).map(function (k) { return "$entity." + k + "=" + k; }));
            return coffeescript__WEBPACK_IMPORTED_MODULE_0___default.a.compile(script.join('\n'));
        }));
        this.script = scripts.join('\n');
        console.log(this.script);
    };
    return RuleEngine;
}());
/* harmony default export */ __webpack_exports__["default"] = (RuleEngine);


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tigra\source\Hackathon\ubs-hackathon\test\test\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map