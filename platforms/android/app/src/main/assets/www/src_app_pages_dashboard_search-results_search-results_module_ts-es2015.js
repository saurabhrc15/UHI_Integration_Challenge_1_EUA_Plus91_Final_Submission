(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_search-results_search-results_module_ts"],{

/***/ 41217:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/search-results/search-results-routing.module.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPageRoutingModule": function() { return /* binding */ SearchResultsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _search_results_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results.page */ 84399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _search_results_page__WEBPACK_IMPORTED_MODULE_0__.SearchResultsPage
    }
];
class SearchResultsPageRoutingModule {
}
SearchResultsPageRoutingModule.ɵfac = function SearchResultsPageRoutingModule_Factory(t) { return new (t || SearchResultsPageRoutingModule)(); };
SearchResultsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchResultsPageRoutingModule });
SearchResultsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchResultsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 20089:
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/search-results/search-results.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPageModule": function() { return /* binding */ SearchResultsPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-results-routing.module */ 41217);
/* harmony import */ var _search_results_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-results.page */ 84399);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);






class SearchResultsPageModule {
}
SearchResultsPageModule.ɵfac = function SearchResultsPageModule_Factory(t) { return new (t || SearchResultsPageModule)(); };
SearchResultsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SearchResultsPageModule });
SearchResultsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultsPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SearchResultsPageModule, { declarations: [_search_results_page__WEBPACK_IMPORTED_MODULE_1__.SearchResultsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _search_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchResultsPageRoutingModule] }); })();


/***/ }),

/***/ 84399:
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/search-results/search-results.page.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultsPage": function() { return /* binding */ SearchResultsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/api/api.service */ 45146);
/* harmony import */ var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common/common.service */ 69763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);










function SearchResultsPage_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " No Doctors Found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SearchResultsPage_div_11_div_1_br_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
} }
function SearchResultsPage_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SearchResultsPage_div_11_div_1_br_14_Template, 1, 0, "br", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ion-card-content", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-chip", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SearchResultsPage_div_11_div_1_Template_ion_chip_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const i_r4 = restoredCtx.index; const fulfillment_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.book_appointment(i_r4, fulfillment_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fulfillment_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", fulfillment_r3.agent.gender == "M" ? "assets/male-doctor.png" : "assets/female-doctor.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", fulfillment_r3.agent.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"]("", fulfillment_r3.type, " / ", fulfillment_r3.items.descriptor.name, " ", fulfillment_r3.agent.tags["@abdm/gov/in/education"] ? "/" + fulfillment_r3.agent.tags["@abdm/gov/in/education"] : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fulfillment_r3.agent.tags["@abdm/gov/in/hpr_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", fulfillment_r3.agent.tags["@abdm/gov/in/hpr_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fulfillment_r3.agent.tags["@abdm/gov/in/languages"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fulfillment_r3.agent.tags["@abdm/gov/in/experience"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rs. ", fulfillment_r3.items.price.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](fulfillment_r3.context.provider_id);
} }
function SearchResultsPage_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SearchResultsPage_div_11_div_1_Template, 27, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1._commonService.searchResults.fulfillments);
} }
class SearchResultsPage {
    constructor(_router, _api, _commonService) {
        this._router = _router;
        this._api = _api;
        this._commonService = _commonService;
        this.isSocketTrigger = false;
        if (!this._commonService.searchResults.hasOwnProperty("fulfillments")) {
            this._commonService.searchResults.fulfillments = [];
        }
        if (this._commonService.transaction_id == null || this._commonService.transaction_id == undefined) {
            this._router.navigate(["/dashboard/"]);
        }
    }
    ngOnInit() {
        setTimeout(() => {
            this.get_onSearchData();
        }, 500);
        this._commonService.SOCKET.on('on_search', (data) => {
            this.isSocketTrigger = true;
        });
    }
    sortData(res) {
        if (res.status_code == 200) {
            if (res.hasOwnProperty("context") && res.hasOwnProperty("message") && res.message.hasOwnProperty("catalog")) {
                if (res.message.catalog.hasOwnProperty("fulfillments")) {
                    res.message.catalog.fulfillments.forEach((fulfillment) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                        res.message.catalog.items.forEach((item) => {
                            if (parseInt(fulfillment.id) == parseInt(item.fulfillment_id)) {
                                let fulfillmentObj = fulfillment;
                                fulfillmentObj["items"] = item;
                                fulfillmentObj["context"] = res.context;
                                let tempArr = JSON.stringify(fulfillmentObj);
                                this._commonService.searchResults.fulfillments.push(JSON.parse(tempArr));
                            }
                        });
                    }));
                    if (this.isSocketTrigger) {
                        this.isSocketTrigger = false;
                        this.get_onSearchData();
                    }
                }
            }
        }
        console.log("fulfillments count -> ", (this._commonService.searchResults.fulfillments).length);
    }
    get_onSearchData() {
        let param = {
            "transaction_id": this._commonService.transaction_id
        };
        this._commonService.presentLoading(2000);
        this._api.get_onSearchData(param).subscribe((res) => {
            this._commonService.searchResults.fulfillments = [];
            // this._commonService.presentLoading(3000);
            res.data.forEach(data => {
                if (data.hasOwnProperty("request_body")) {
                    var results = JSON.parse(data.request_body);
                    this.sortData(results);
                    /*if(results.status_code==200 && results.hasOwnProperty("context") && results.hasOwnProperty("message") && results.message.hasOwnProperty("catalog"))
                    {
                      // (results.message.catalog.providers).forEach(provider => {
                        results.message.catalog.fulfillments.forEach(fulfillment => {
                          var isDoctorAlreadyAdded = false;
                          for(var i=0; i<(this._commonService.searchResults).length;i++)
                          {
                            if(this._commonService.searchResults[i].doctor_id == fulfillment.person.id)
                            {
                              isDoctorAlreadyAdded = true;
                              break;
                            }
                          };
                          if(!isDoctorAlreadyAdded)
                          {
                            var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
                            var regex = new RegExp(expression);
                            if(!fulfillment.person.image.match(regex)) {
                              fulfillment.person.image = "";
                            }
          
                            // message.catalog.providers[0].fulfillments[0].quote.price.value
                            this._commonService.searchResults.push({
                              service_provider: results.message.catalog.descriptor.name,
                              // provider_id: results.message.catalog.id,
                              hospital_name: results.message.catalog.descriptor.name,
                              doctor_name: fulfillment.person.name,
                              doctor_id: fulfillment.person.id,
                              doctor_gender: (fulfillment.person.gender).toLowerCase(),
                              doctor_img: fulfillment.person.image,
                              doctor_cred: fulfillment.person.cred,
                              doctor_service_type: fulfillment.type=="NA"?"":fulfillment.type,
                              doctor_service_category: "",
                              quote: fulfillment.quote,
                              start: fulfillment.start,
                              end: fulfillment.end,
                              item_id: null
                            });
                          }
                        });
          
                        results.message.catalog.items.forEach(item => {
                          this._commonService.searchResults.forEach(doctor => {
                            if(doctor.doctor_id==item.fulfillment_id)
                            {
                              doctor.item_id = item.id;
                              // provider.categories.forEach(category => {
                              //   if(category.id==item.category_id)
                              //   {
                              //     doctor.doctor_service_category = category.descriptor.name=="NA"?"":category.descriptor.name;
                              //     doctor.item_id = item.id;
                              //   }
                              // });
                            }
                          });
          
                        });
                        console.log(this._commonService.searchResults);
                      // });
                    }*/
                }
            });
        }, (err) => {
            if (err) {
                console.error(err);
            }
        });
    }
    book_appointment(index, data) {
        this._commonService.presentLoading(1000);
        // console.log(index);
        this._router.navigate(["/dashboard/book-appointment", index]);
        return;
        // var param = {
        //   provider_id: data.provider_id,
        //   item_id: data.item_id,
        //   fulfillment_id: data.doctor_id,
        //   transaction_id: this._commonService.transaction_id
        // }
        // console.log(data);
        // this._router.navigate(["/dashboard/search-results"]);
        //   this._api.select(param).subscribe((res: any) => {
        //     console.log(res);
        //     if(res.success && res.body.message.ack.status=="ACK")
        //     {
        //       this._router.navigate(["/dashboard/book-appointment"]);
        //     }
        //   }, (err) => {
        //     if (err) {
        //       console.error(err);
        //     }
        //   });
    }
}
SearchResultsPage.ɵfac = function SearchResultsPage_Factory(t) { return new (t || SearchResultsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService)); };
SearchResultsPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SearchResultsPage, selectors: [["app-search-results"]], decls: 12, vars: 4, consts: [[3, "translucent"], ["slot", "start"], ["slot", "secondary"], ["defaultHref", "/dashboard/home"], [3, "fullscreen"], [1, "container-fluid", "w-100", "h-100", "p-3"], ["class", "col-12 text-center", 4, "ngIf"], ["class", "d-block w-100 h-100", 4, "ngIf"], [1, "col-12", "text-center"], [1, "d-block", "w-100", "h-100"], ["class", "d-block col-12", 4, "ngFor", "ngForOf"], [1, "d-block", "col-12"], [1, "m-0", "p-0", "mb-3"], [1, "border-0"], [1, "h-100", 2, "padding-top", "5px", "padding-bottom", "5px"], ["alt", "", 2, "width", "60px", "margin", "5px 15px 5px 0px", "border-radius", "100%", 3, "src"], [1, "text-muted", "fs-14"], [2, "color", "#3880ff"], [4, "ngIf"], [1, "m-0", "p-2"], [1, "d-flex", "flex-wrap", "justify-content-start"], ["outline", "", "color", "primary", 3, "click"], [2, "color", "red", "font-size", "16px", "font-weight", "700"], [2, "font-size", "12px", "font-weight", "600", "margin-left", "10px", "color", "var(--ion-color-primary)"]], template: function SearchResultsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Search Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SearchResultsPage_div_10_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SearchResultsPage_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._commonService.searchResults.fulfillments.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._commonService.searchResults.fulfillments.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonChip], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2gtcmVzdWx0cy5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_search-results_search-results_module_ts-es2015.js.map