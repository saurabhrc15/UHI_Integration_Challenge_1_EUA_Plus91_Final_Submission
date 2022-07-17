(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_pages_dashboard_home_home_module_ts"], {
    /***/
    32242:
    /*!*************************************************************!*\
      !*** ./src/app/pages/dashboard/home/home-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      49226);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function _HomePageRoutingModule() {
        _classCallCheck(this, _HomePageRoutingModule);
      };

      _HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) {
        return new (t || _HomePageRoutingModule)();
      };

      _HomePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _HomePageRoutingModule
      });
      _HomePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_HomePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    9871:
    /*!*****************************************************!*\
      !*** ./src/app/pages/dashboard/home/home.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home-routing.module */
      32242);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page */
      49226);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HomePageModule = function _HomePageModule() {
        _classCallCheck(this, _HomePageModule);
      };

      _HomePageModule.ɵfac = function HomePageModule_Factory(t) {
        return new (t || _HomePageModule)();
      };

      _HomePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _HomePageModule
      });
      _HomePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_HomePageModule, {
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule]
        });
      })();
      /***/

    },

    /***/
    49226:
    /*!***************************************************!*\
      !*** ./src/app/pages/dashboard/home/home.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/api/api.service */
      45146);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function HomePage_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function HomePage_div_10_Template_ion_input_change_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.onStartDateChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-item", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "ion-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_div_10_Template_ion_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      } // import { NgxTypeaheadModule } from 'ngx-typeahead';
      // import { typeahead } from 'src/assets/typeahead/typeahead.bundle.js';
      // declare function typeahead(): any;


      var _HomePage = /*#__PURE__*/function () {
        function _HomePage(_router, _api, _commonService) {
          _classCallCheck(this, _HomePage);

          this._router = _router;
          this._api = _api;
          this._commonService = _commonService; // name = "";
          // title = "";
          // public url = "//suggestqueries.google.com/complete/search";
          // public params = {
          //   hl: "en",
          //   ds: "yt",
          //   xhr: "t",
          //   client: "youtube"
          // };
          // public query = "test";

          this.isSearchOpen = true;
          this.homeOption = [{
            title: 'Teleconsultation',
            url: '/dashboard/teleconsultation',
            icon: './assets/teleconsultation-blue.png'
          }, {
            title: 'Physical Consultation',
            url: '/dashboard/physical-consultation',
            icon: './assets/doctor-blue.png'
          }, {
            title: 'Ambulance',
            url: '/dashboard/ambulance',
            icon: './assets/ambulance-blue.png'
          }, {
            title: 'Lab Test',
            url: '/dashboard/lab-test',
            icon: './assets/lab-report-blue.png'
          }, {
            title: 'Blood Bank',
            url: '/dashboard/blood-bank',
            icon: './assets/blood-bank-blue.png'
          }];
        }

        _createClass(_HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {//     var app = angular.module('home', ['ui.bootstrap']);
            // app.controller('SearchController', function ($scope){                     
            // 	$scope.selected="";
            //     //  Set your object 
            // 	$scope.objects = [
            // 		{id:1, name : 'Dilip', type :{ title : 'a'}},
            // 		{id:2, name : 'Devendra', type :{ title : 'b'}},
            // 		{id:3, name : 'Jayesh', type :{ title : 'a'}},
            // 		{id:4, name : 'Jekin', type :{ title : 'c'}},
            // 		{id:5, name : 'Gaurang', type :{ title : 'a'}},
            // 		{id:6, name : 'Bhavin', type :{ title : 'e'}},
            // 	];
            // }); 
            // $('#the-basics .typeahead').typeahead({
            //   hint: true,
            //   highlight: true,
            //   minLength: 1
            // },
            // {
            //   name: 'states'
            // });

            /*var typeahead = jQuery.fn.typeahead.noConflict();
            jQuery.fn._typeahead = typeahead;
            
            $('.typeahead').typeahead({
              hint: true,
              highlight: true,
              minLength: 1
            },
            {
              name: 'cars'
            });
            $.typeahead({
              input: '.js-typeahead-country_v1',
              order: "desc",
              source: {
                data: [
                  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
                  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh",
                  "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia",
                  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma",
                  "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad",
                  "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the",
                  "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
                  "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador",
                  "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
                  "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea",
                  "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
                  "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
                  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos",
                  "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
                  "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
                  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco",
                  "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
                  "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
                  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino",
                  "Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone",
                  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain",
                  "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
                  "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
                  "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
                  "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
                ]
              },
              callback: {
                onInit: function (node) {
                  console.log('Typeahead Initiated on ' + node.selector);
                }
              }
            });*/
          } // handleResultSelected(result) {
          //   this.query = result;
          // }

        }, {
          key: "toggleSearchOption",
          value: function toggleSearchOption() {
            this.isSearchOpen = !this.isSearchOpen;
          }
        }, {
          key: "search",
          value: function search() {
            var _this = this;

            var searchvalue = $("#searchInput").val();
            var start_date = $("#start_date").val();
            var end_date = $("#end_date").val();
            console.log(searchvalue, start_date, end_date);

            if (searchvalue == "") {
              this._commonService.presentToast("Enter Search Keywords");

              return;
            } else if (start_date == "") {
              this._commonService.presentToast("Select Start Date");

              return;
            } else if (end_date == "") {
              this._commonService.presentToast("Select End Date");

              return;
            }

            this._commonService.presentLoading();

            var param = {
              searchvalue: searchvalue,
              start_date: start_date,
              end_date: end_date,
              type: "Teleconsultation"
            }; // console.log(param);

            this._api.search(param).subscribe(function (res) {
              console.log("search response");
              console.log(res);

              if (res.success && res.body.message.ack.status == "ACK") {
                _this._commonService.transaction_id = res.transaction_id;

                _this._router.navigate(["/dashboard/search-results"]);
              }
            }, function (err) {
              if (err) {
                console.log(err);
              }
            });
          }
        }, {
          key: "onStartDateChange",
          value: function onStartDateChange() {
            var start_date = $("#start_date").val();
            console.log("onStartDateChange", start_date);
            $("#end_date").attr("min", start_date + "");
          }
        }]);

        return _HomePage;
      }();

      _HomePage.ɵfac = function HomePage_Factory(t) {
        return new (t || _HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
      };

      _HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HomePage,
        selectors: [["app-home"]],
        decls: 239,
        vars: 3,
        consts: [[3, "translucent"], ["slot", "start"], ["slot", "end"], ["color", "primary", "slot", "start", "name", "search", 3, "click"], [3, "fullscreen"], [1, "container-fluid", "w-100", "h-100", "p-3"], ["class", "container-fluid d-block col-12 p-0 m-0 mb-3", 4, "ngIf"], [1, "d-block"], [1, "mb-3", "fs-16"], [1, "m-0", "p-0"], [1, "fs-12"], ["src", "assets/download.jpeg", "alt", "", 2, "width", "60px", "margin", "5px 10px 5px 0px", "border-radius", "100%"], [1, "d-flex", "flex-wrap", "justify-content-between"], ["fill", "", 2, "color", "#3880ff", "font-size", "12px"], ["color", "primary", "slot", "start", "name", "close"], ["color", "primary", "slot", "start", "name", "calendar"], ["color", "primary", "slot", "start", "name", "chatbubble-ellipses"], [1, "mt-4", 2, "background-color", "#adadad"], [1, "m-0", "p-0", "mb-4"], [1, "container-fluid", "d-block", "col-12", "p-0", "m-0", "mb-3"], ["position", "stacked"], ["id", "searchInput", "autocorrect", "on", "spellcheck", "true", "autocomplete", "on", "placeholder", "Eg. Cadiologist with 5Yr experience", "value", "cardiologist near me"], [1, "d-flex"], [1, "col-6", "fs-12"], ["position", "floating"], ["id", "start_date", "type", "date", "min", "2022-07-14", "placeholder", "Start Date", "value", "2022-07-14", 3, "change"], ["id", "end_date", "type", "date", "min", "2022-07-14", "placeholder", "End Date", "value", "2022-07-15"], ["expand", "full", 1, "mt-2", "fs-12", 3, "click"], ["slot", "start", "name", "search"]],
        template: function HomePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-buttons", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-menu-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomePage_Template_ion_icon_click_7_listener() {
              return ctx.toggleSearchOption();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HomePage_div_10_Template, 18, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Upcoming Appointments");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Tommorrow at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-card-content", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "ion-icon", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "ion-icon", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Reschedule");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "ion-button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "ion-icon", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "hr", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Appointment History");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "1 Jul, 2022 at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "29 Jun, 2022 at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "17 Jun, 2022 at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](104, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](116, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](121, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](126, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](131, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](138, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](161, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](173, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](181, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](208, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](211, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](224, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](226, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](228, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "ion-item", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, " Dr. Daniel Paul");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, " 20 minutes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](236, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "ion-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Yesterdat at 9:00 AM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("translucent", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullscreen", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSearchOpen);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardSubtitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_dashboard_home_home_module_ts-es5.js.map