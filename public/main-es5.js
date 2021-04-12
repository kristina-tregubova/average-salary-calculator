function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../config/default.js":
  /*!****************************!*\
    !*** ../config/default.js ***!
    \****************************/

  /*! exports provided: default */

  /***/
  function configDefaultJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var config = {
      "port": 3000,
      "mongoUri": "mongodb+srv://kristina:12345@cluster0.4atel.mongodb.net/app",
      "baseUrl": "http://localhost:3000"
    };
    /* harmony default export */

    __webpack_exports__["default"] = config;
    /***/
  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"centered-container\">\r\n    <div class=\"panel\">\r\n        <div class=\"panel-heading\"> {{ 'MAIN.PANEL-HEADING' | translate }} </div>\r\n        <div class=\"tabs is-fullwidth\">\r\n            <ul>\r\n                <li routerLinkActive=\"is-active\">\r\n                    <a routerLink=\"/calculator/average\">{{ 'MAIN.TAB-AVERAGE' | translate }}</a>\r\n                </li>\r\n                <li routerLinkActive=\"is-active\">\r\n                    <a routerLink=\"/calculator/month\">{{ 'MAIN.TAB-MONTH' | translate }} </a>\r\n                </li>\r\n                <li routerLinkActive=\"is-active\">\r\n                    <a routerLink=\"/settings\">{{ 'MAIN.TAB-SETTINGS' | translate }}</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n        <app-loader *ngIf=\"loading$ | async\"></app-loader>\r\n    </div>\r\n    <app-page-footer></app-page-footer>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/calculator-panel.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/calculator-panel.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalculatorPanelCalculatorPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n    <app-form\n        [formType]=\"formType\"\n        (gotCalculationResults)=\"assignResults($event)\"\n    >\n    </app-form>\n    <app-results\n        [calculationResults]=\"calculationResults\"\n        [formType]=\"formType\"\n    >\n    </app-results>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/form/form.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/form/form.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalculatorPanelFormFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form\n    [formGroup]=\"formData\"\n    (ngSubmit)=\"onFormSubmit()\"\n>\n    <div class=\"form-field\">\n        <label\n            class=\"label\"\n            for=\"grossMonthlySalary\"\n            ng-required\n        >{{ 'FORM.TYPE-SALARY' | translate }}:</label>\n        <input\n            id=\"grossMonthlySalary\"\n            type=\"text\"\n            class=\"input\"\n            placeholder=\"Ваша зарплата (gross)\"\n            formControlName=\"grossMonthlySalary\"\n            required\n        >\n    </div>\n    <div\n        *ngIf=\"formType === formTypes.SalaryForGivenMonth\"\n        class=\"form-field\"\n    >\n        <label\n            class=\"label\"\n            for=\"month\"\n            ng-required\n        >{{ 'FORM.CHOOSE-MONTH' | translate }}:</label>\n        <div class=\"select\">\n            <select\n                id=\"month\"\n                formControlName=\"month\"\n                required\n            >\n                <option *ngFor=\"let month of months; let index\">{{month}}</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"form-field\">\n        <label class=\"label checkbox\">\n            <input\n                type=\"checkbox\"\n                name=\"isThirteensSalaryChecked\"\n                formControlName=\"isThirteensSalaryChecked\"\n            >{{ 'FORM.CHOOSE-THIRTEENS-SALARY' | translate }}</label>\n    </div>\n    <div class=\"buttons-block\">\n        <button\n            class=\"button\"\n            type=\"button\"\n            [disabled]=\"!formData.dirty\"\n            (click)=\"onResetClick()\"\n        >{{ 'BUTTON.RESET' | translate }}</button>\n        <button\n            type=\"submit\"\n            class=\"button is-primary\"\n            [disabled]=\"!formData.valid\"\n        >{{ 'BUTTON.CALCULATE' | translate }}</button>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/results/results.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/results/results.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCalculatorPanelResultsResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n    <div *ngIf=\"calculationResults && formType === formTypes.AverageMonthlySalary\" class=\"result-item\">\n        <h3>{{ \"RESULTS.AVERAGE-SALARY\" | translate }}:</h3>\n        <p>{{calculationResults?.averageMonthlySalary}} {{ \"RESULTS.RUB\" | translate }}</p>\n    </div>\n    <div *ngIf=\"calculationResults && formType === formTypes.AverageMonthlySalary\" class=\"result-item\">\n        <h3>{{ \"RESULTS.ANNUAL-INCOME\" | translate }}:</h3>\n        <p>{{calculationResults?.annualIncome}} {{ \"RESULTS.RUB\" | translate }}</p>\n    </div>\n    <div *ngIf=\"calculationResults && formType === formTypes.SalaryForGivenMonth\" class=\"result-item\">\n        <h3>{{ \"RESULTS.SALARY-MONTH\" | translate }} {{(calculationResults?.month | lowercase) || '...'}}:</h3>\n        <p>{{calculationResults?.salaryForGivenMonth}} {{ \"RESULTS.RUB\" | translate }}</p>\n    </div>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page-footer/page-footer.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-footer/page-footer.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageFooterPageFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n    <p> {{ 'FOOTER.TEXT' | translate}} <a href=\"https://github.com/kristina-tregubova/average-salary-calculator\"> {{\n            'FOOTER.LINK-TEXT' | translate}}</a></p>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form\n    [formGroup]=\"formData\"\n    (ngSubmit)=\"onFormSubmit()\"\n>\n    <div\n        *ngFor=\"let index of indices | keyvalue\"\n        class=\"form-field\"\n    >\n        <label class=\"label\"> {{ 'SETTINGS.INDEX' | translate }} {{index.key | uppercase}}: <input\n                type=\"text\"\n                class=\"input\"\n                formControlName=\"{{index.key}}\"\n            ></label>\n        <button\n            type=\"button\"\n            class=\"button\"\n            (click)=\"onResetClick(index.key)\"\n        >{{ 'BUTTON.RESET' | translate }}</button>\n    </div>\n    <div class=\"buttons-block\">\n        <button\n            type=\"button\"\n            class=\"button\"\n            (click)=\"onResetAllClick()\"\n        >{{ 'BUTTON.RESET-ALL' | translate }}</button>\n        <button\n            type=\"submit\"\n            [disabled]=\"formData.invalid || formData.pristine\"\n            class=\"button is-primary\"\n        >{{ 'BUTTON.SAVE' | translate }}</button>\n    </div>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loader-wrapper\">\n    <div class=\"loader\"></div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _calculator_panel_calculator_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./calculator-panel/calculator-panel.component */
    "./src/app/calculator-panel/calculator-panel.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");

    var routes = [{
      path: 'calculator/average',
      component: _calculator_panel_calculator_panel_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorPanelComponent"]
    }, {
      path: 'calculator/month',
      component: _calculator_panel_calculator_panel_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorPanelComponent"]
    }, {
      path: 'settings',
      component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }, {
      path: '**',
      redirectTo: '/calculator/average',
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: '/calculator/average',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".centered-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n.centered-container .panel {\n  display: flex;\n  flex-direction: column;\n  width: 65%;\n  max-width: 550px;\n  min-width: 520px;\n  height: 75%;\n  position: relative;\n  background-color: #f8f8f8;\n}\n.centered-container .tabs {\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin-bottom: 0;\n  height: 70px;\n}\n.centered-container .tabs ul {\n  border: 0;\n}\n.centered-container app-page-footer {\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxrdGlraG9ub1xcRGVza3RvcFxcYXZlcmFnZS1zYWxhcnktY2FsY3VsYXRvclxcY2xpZW50L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxrdGlraG9ub1xcRGVza3RvcFxcYXZlcmFnZS1zYWxhcnktY2FsY3VsYXRvclxcY2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREY7QURHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJFYkk7QURZUjtBRElFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFDRSxTQUFBO0FDRk47QURNRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi9zaGFyZWQvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5jZW50ZXJlZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLnBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDUyMHB4O1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQ7XHJcbiAgfVxyXG5cclxuICAudGFicyB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGhlaWdodDogNzBweDtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcC1wYWdlLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICB9XHJcbn1cclxuIiwiLmNlbnRlcmVkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNlbnRlcmVkLWNvbnRhaW5lciAucGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNjUlO1xuICBtYXgtd2lkdGg6IDU1MHB4O1xuICBtaW4td2lkdGg6IDUyMHB4O1xuICBoZWlnaHQ6IDc1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuLmNlbnRlcmVkLWNvbnRhaW5lciAudGFicyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuLmNlbnRlcmVkLWNvbnRhaW5lciAudGFicyB1bCB7XG4gIGJvcmRlcjogMDtcbn1cbi5jZW50ZXJlZC1jb250YWluZXIgYXBwLXBhZ2UtZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufSIsIiR0dXJxdW9pc2U6ICMwMGI0OTI7XHJcbiRncmVlbjogIzkzZWEyMDtcclxuJGRhcmstZ3JlZW46ICMwMDQ1NTA7XHJcbiR0dXJxdW9pc2UtdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMTgwLCAxNDYsIDAuMik7XHJcblxyXG4kbGlnaHQ6ICNmOGY4Zjg7XHJcblxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkZ3JlZW47XHJcbiRsaW5rOiAkdHVycXVvaXNlO1xyXG4kdGV4dC1zdHJvbmc6ICRkYXJrLWdyZWVuO1xyXG5cclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kcGFuZWwtaGVhZGluZy1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuJHBhbmVsLWhlYWRpbmctY29sb3I6ICRkYXJrLWdyZWVuOyJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/loader.service */
    "./src/app/services/loader.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(loader, translateService, detector) {
        _classCallCheck(this, AppComponent);

        this.loader = loader;
        this.translateService = translateService;
        this.detector = detector;
        this.loading$ = this.loader.loading$;
        this.translateService.use(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].defaultLocale);
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.detector.markForCheck();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _calculator_panel_form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./calculator-panel/form/form.component */
    "./src/app/calculator-panel/form/form.component.ts");
    /* harmony import */


    var _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./page-footer/page-footer.component */
    "./src/app/page-footer/page-footer.component.ts");
    /* harmony import */


    var _calculator_panel_results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./calculator-panel/results/results.component */
    "./src/app/calculator-panel/results/results.component.ts");
    /* harmony import */


    var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings/settings.component */
    "./src/app/settings/settings.component.ts");
    /* harmony import */


    var _calculator_panel_calculator_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./calculator-panel/calculator-panel.component */
    "./src/app/calculator-panel/calculator-panel.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_request_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/request.interceptor */
    "./src/app/services/request.interceptor.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_15__["TranslateHttpLoader"](http, './assets/locale/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _calculator_panel_calculator_panel_component__WEBPACK_IMPORTED_MODULE_9__["CalculatorPanelComponent"], _calculator_panel_form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"], _page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_6__["PageFooterComponent"], _calculator_panel_results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
        },
        useDefaultLang: false
      })],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _services_request_interceptor__WEBPACK_IMPORTED_MODULE_12__["RequestInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/calculator-panel/calculator-panel.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/calculator-panel/calculator-panel.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalculatorPanelCalculatorPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 5%;\n  height: 100%;\n  position: relative;\n}\n:host > *:not(:last-child) {\n  margin-bottom: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci1wYW5lbC9DOlxcVXNlcnNcXGt0aWtob25vXFxEZXNrdG9wXFxhdmVyYWdlLXNhbGFyeS1jYWxjdWxhdG9yXFxjbGllbnQvc3JjXFxhcHBcXGNhbGN1bGF0b3ItcGFuZWxcXGNhbGN1bGF0b3ItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3ItcGFuZWwvY2FsY3VsYXRvci1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhdG9yLXBhbmVsL2NhbGN1bGF0b3ItcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYgPiAqOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcbn0iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNSU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/calculator-panel/calculator-panel.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/calculator-panel/calculator-panel.component.ts ***!
    \****************************************************************/

  /*! exports provided: CalculatorPanelComponent */

  /***/
  function srcAppCalculatorPanelCalculatorPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorPanelComponent", function () {
      return CalculatorPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/form */
    "./src/app/models/form.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CalculatorPanelComponent = /*#__PURE__*/function () {
      function CalculatorPanelComponent(router) {
        var _this = this;

        _classCallCheck(this, CalculatorPanelComponent);

        this.router = router;
        this.router.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (segments) {
          return segments.join("/");
        })).subscribe(function (res) {
          return _this.currentUrl = res;
        });
      }

      _createClass(CalculatorPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defineFormType();
        }
      }, {
        key: "assignResults",
        value: function assignResults(results) {
          this.calculationResults = results;
        }
      }, {
        key: "defineFormType",
        value: function defineFormType() {
          this.formType = this.currentUrl.includes(_models_form__WEBPACK_IMPORTED_MODULE_2__["FormType"].AverageMonthlySalary) ? _models_form__WEBPACK_IMPORTED_MODULE_2__["FormType"].AverageMonthlySalary : _models_form__WEBPACK_IMPORTED_MODULE_2__["FormType"].SalaryForGivenMonth;
        }
      }]);

      return CalculatorPanelComponent;
    }();

    CalculatorPanelComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    CalculatorPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-calculator-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./calculator-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/calculator-panel.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./calculator-panel.component.scss */
      "./src/app/calculator-panel/calculator-panel.component.scss"))["default"]]
    })], CalculatorPanelComponent);
    /***/
  },

  /***/
  "./src/app/calculator-panel/form/form.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/calculator-panel/form/form.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalculatorPanelFormFormComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  height: 55%;\n  display: flex;\n  flex-direction: column;\n}\nform > *:not(:last-child) {\n  margin-bottom: 5%;\n}\nform .select {\n  width: 50%;\n}\nform .select select {\n  width: 100%;\n}\nform .label.checkbox input {\n  margin-right: 15px;\n}\nform .buttons-block {\n  display: flex;\n  justify-content: flex-end;\n}\nform .buttons-block .button:not(:last-child) {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci1wYW5lbC9mb3JtL0M6XFxVc2Vyc1xca3Rpa2hvbm9cXERlc2t0b3BcXGF2ZXJhZ2Utc2FsYXJ5LWNhbGN1bGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcY2FsY3VsYXRvci1wYW5lbFxcZm9ybVxcZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FsY3VsYXRvci1wYW5lbC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0FDQ1I7QURFSTtFQUNJLFVBQUE7QUNBUjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FESUk7RUFDSSxrQkFBQTtBQ0ZSO0FES0k7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNIUjtBREtRO0VBQ0ksa0JBQUE7QUNIWiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3ItcGFuZWwvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBoZWlnaHQ6IDU1JTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICYgPiAqOm5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuXHJcbiAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sYWJlbC5jaGVja2JveCBpbnB1dCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zLWJsb2NrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJmb3JtIHtcbiAgaGVpZ2h0OiA1NSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5mb3JtID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5mb3JtIC5zZWxlY3Qge1xuICB3aWR0aDogNTAlO1xufVxuZm9ybSAuc2VsZWN0IHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSAubGFiZWwuY2hlY2tib3ggaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5mb3JtIC5idXR0b25zLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbmZvcm0gLmJ1dHRvbnMtYmxvY2sgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/calculator-panel/form/form.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/calculator-panel/form/form.component.ts ***!
    \*********************************************************/

  /*! exports provided: FormComponent */

  /***/
  function srcAppCalculatorPanelFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/helper */
    "./src/app/models/helper.ts");
    /* harmony import */


    var _services_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/calculator.service */
    "./src/app/services/calculator.service.ts");
    /* harmony import */


    var _models_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/form */
    "./src/app/models/form.ts");

    var FormComponent = /*#__PURE__*/function () {
      function FormComponent(calculatorService) {
        _classCallCheck(this, FormComponent);

        this.calculatorService = calculatorService;
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          grossMonthlySalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_helper__WEBPACK_IMPORTED_MODULE_3__["onlyNumbersRegExp"])]),
          isThirteensSalaryChecked: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.gotCalculationResults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.months = _models_helper__WEBPACK_IMPORTED_MODULE_3__["Months"];
        this.formTypes = _models_form__WEBPACK_IMPORTED_MODULE_5__["FormType"];
      }

      _createClass(FormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.defineControlsForFormType();
        }
      }, {
        key: "defineControlsForFormType",
        value: function defineControlsForFormType() {
          if (this.formType === _models_form__WEBPACK_IMPORTED_MODULE_5__["FormType"].SalaryForGivenMonth) {
            this.formData.addControl('month', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_models_helper__WEBPACK_IMPORTED_MODULE_3__["Months"][0], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
          }
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this2 = this;

          this.calculatorService.sendFormData(this.formData.value).subscribe(function (res) {
            _this2.gotCalculationResults.emit(res);
          });
          this.formData.reset(this.formData.value);
        }
      }, {
        key: "onResetClick",
        value: function onResetClick() {
          this.formData.reset();
        }
      }]);

      return FormComponent;
    }();

    FormComponent.ctorParameters = function () {
      return [{
        type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormComponent.prototype, "formType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FormComponent.prototype, "gotCalculationResults", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/form/form.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./form.component.scss */
      "./src/app/calculator-panel/form/form.component.scss"))["default"]]
    })], FormComponent);
    /***/
  },

  /***/
  "./src/app/calculator-panel/results/results.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/calculator-panel/results/results.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCalculatorPanelResultsResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  position: absolute;\n  bottom: 0;\n  margin-bottom: 7%;\n}\n:host .result-item {\n  min-height: 7em;\n}\n:host .result-item:not(:last-child) {\n  margin-bottom: 5%;\n}\n:host .result-item h3 {\n  font-size: 1.3em;\n  font-weight: bold;\n  color: #004550;\n}\n:host .result-item p {\n  font-size: 2em;\n  font-weight: bold;\n  color: #93ea20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci1wYW5lbC9yZXN1bHRzL0M6XFxVc2Vyc1xca3Rpa2hvbm9cXERlc2t0b3BcXGF2ZXJhZ2Utc2FsYXJ5LWNhbGN1bGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcY2FsY3VsYXRvci1wYW5lbFxccmVzdWx0c1xccmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY2FsY3VsYXRvci1wYW5lbC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbGN1bGF0b3ItcGFuZWwvcmVzdWx0cy9DOlxcVXNlcnNcXGt0aWtob25vXFxEZXNrdG9wXFxhdmVyYWdlLXNhbGFyeS1jYWxjdWxhdG9yXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ0RGO0FER0U7RUFDRSxlQUFBO0FDREo7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjRWZPO0FEYWI7QURLSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNFdEJFO0FEbUJSIiwiZmlsZSI6InNyYy9hcHAvY2FsY3VsYXRvci1wYW5lbC9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiA3JTtcclxuXHJcbiAgLnJlc3VsdC1pdGVtIHtcclxuICAgIG1pbi1oZWlnaHQ6IDdlbTtcclxuXHJcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAkZGFyay1ncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogJGdyZWVuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cbjpob3N0IC5yZXN1bHQtaXRlbSB7XG4gIG1pbi1oZWlnaHQ6IDdlbTtcbn1cbjpob3N0IC5yZXN1bHQtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG46aG9zdCAucmVzdWx0LWl0ZW0gaDMge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwMDQ1NTA7XG59XG46aG9zdCAucmVzdWx0LWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5M2VhMjA7XG59IiwiJHR1cnF1b2lzZTogIzAwYjQ5MjtcclxuJGdyZWVuOiAjOTNlYTIwO1xyXG4kZGFyay1ncmVlbjogIzAwNDU1MDtcclxuJHR1cnF1b2lzZS10cmFuc3BhcmVudDogcmdiYSgwLCAxODAsIDE0NiwgMC4yKTtcclxuXHJcbiRsaWdodDogI2Y4ZjhmODtcclxuXHJcblxyXG4vLyBVcGRhdGUgQnVsbWEncyBnbG9iYWwgdmFyaWFibGVzXHJcbiRmYW1pbHktc2Fucy1zZXJpZjogXCJOdW5pdG9cIiwgc2Fucy1zZXJpZjtcclxuJHByaW1hcnk6ICRncmVlbjtcclxuJGxpbms6ICR0dXJxdW9pc2U7XHJcbiR0ZXh0LXN0cm9uZzogJGRhcmstZ3JlZW47XHJcblxyXG5cclxuLy8gVXBkYXRlIHNvbWUgb2YgQnVsbWEncyBjb21wb25lbnQgdmFyaWFibGVzXHJcbiRwYW5lbC1oZWFkaW5nLWJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4kcGFuZWwtaGVhZGluZy1jb2xvcjogJGRhcmstZ3JlZW47Il19 */";
    /***/
  },

  /***/
  "./src/app/calculator-panel/results/results.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/calculator-panel/results/results.component.ts ***!
    \***************************************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppCalculatorPanelResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/form */
    "./src/app/models/form.ts");

    var ResultsComponent = function ResultsComponent() {
      _classCallCheck(this, ResultsComponent);

      this.formTypes = _models_form__WEBPACK_IMPORTED_MODULE_2__["FormType"];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResultsComponent.prototype, "calculationResults", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResultsComponent.prototype, "formType", void 0);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator-panel/results/results.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./results.component.scss */
      "./src/app/calculator-panel/results/results.component.scss"))["default"]]
    })], ResultsComponent);
    /***/
  },

  /***/
  "./src/app/models/form.ts":
  /*!********************************!*\
    !*** ./src/app/models/form.ts ***!
    \********************************/

  /*! exports provided: FormType */

  /***/
  function srcAppModelsFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormType", function () {
      return FormType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FormType;

    (function (FormType) {
      FormType["AverageMonthlySalary"] = "average";
      FormType["SalaryForGivenMonth"] = "month";
    })(FormType || (FormType = {}));
    /***/

  },

  /***/
  "./src/app/models/helper.ts":
  /*!**********************************!*\
    !*** ./src/app/models/helper.ts ***!
    \**********************************/

  /*! exports provided: Months, onlyNumbersRegExp */

  /***/
  function srcAppModelsHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Months", function () {
      return Months;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onlyNumbersRegExp", function () {
      return onlyNumbersRegExp;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var onlyNumbersRegExp = new RegExp(/^[0-9]*$/);
    /***/
  },

  /***/
  "./src/app/models/indices.ts":
  /*!***********************************!*\
    !*** ./src/app/models/indices.ts ***!
    \***********************************/

  /*! exports provided: Indices */

  /***/
  function srcAppModelsIndicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Indices", function () {
      return Indices;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Indices = // write only specified fields
    function Indices(obj) {
      _classCallCheck(this, Indices);

      this.x1 = null;
      this.x2 = null;
      this.x3 = null;
      this.x4 = null;
      this.x5 = null;

      for (var _i = 0, _Object$entries = Object.entries(obj); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (this.hasOwnProperty(key)) this[key] = value;
      }
    };
    /***/

  },

  /***/
  "./src/app/page-footer/page-footer.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/page-footer/page-footer.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageFooterPageFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  color: #f8f8f8;\n}\n:host a {\n  color: #93ea20;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1mb290ZXIvQzpcXFVzZXJzXFxrdGlraG9ub1xcRGVza3RvcFxcYXZlcmFnZS1zYWxhcnktY2FsY3VsYXRvclxcY2xpZW50L3NyY1xcYXBwXFxwYWdlLWZvb3RlclxccGFnZS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2UtZm9vdGVyL0M6XFxVc2Vyc1xca3Rpa2hvbm9cXERlc2t0b3BcXGF2ZXJhZ2Utc2FsYXJ5LWNhbGN1bGF0b3JcXGNsaWVudC9zcmNcXGFwcFxcc2hhcmVkXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZS1mb290ZXIvcGFnZS1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0VJO0FDSFI7QUZHSTtFQUNJLGNDTEE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtZm9vdGVyL3BhZ2UtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2hhcmVkL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbjpob3N0IHtcclxuICAgIGNvbG9yOiAkbGlnaHQ7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgIH1cclxufSIsIiR0dXJxdW9pc2U6ICMwMGI0OTI7XHJcbiRncmVlbjogIzkzZWEyMDtcclxuJGRhcmstZ3JlZW46ICMwMDQ1NTA7XHJcbiR0dXJxdW9pc2UtdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMTgwLCAxNDYsIDAuMik7XHJcblxyXG4kbGlnaHQ6ICNmOGY4Zjg7XHJcblxyXG5cclxuLy8gVXBkYXRlIEJ1bG1hJ3MgZ2xvYmFsIHZhcmlhYmxlc1xyXG4kZmFtaWx5LXNhbnMtc2VyaWY6IFwiTnVuaXRvXCIsIHNhbnMtc2VyaWY7XHJcbiRwcmltYXJ5OiAkZ3JlZW47XHJcbiRsaW5rOiAkdHVycXVvaXNlO1xyXG4kdGV4dC1zdHJvbmc6ICRkYXJrLWdyZWVuO1xyXG5cclxuXHJcbi8vIFVwZGF0ZSBzb21lIG9mIEJ1bG1hJ3MgY29tcG9uZW50IHZhcmlhYmxlc1xyXG4kcGFuZWwtaGVhZGluZy1iYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuJHBhbmVsLWhlYWRpbmctY29sb3I6ICRkYXJrLWdyZWVuOyIsIjpob3N0IHtcbiAgY29sb3I6ICNmOGY4Zjg7XG59XG46aG9zdCBhIHtcbiAgY29sb3I6ICM5M2VhMjA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/page-footer/page-footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/page-footer/page-footer.component.ts ***!
    \******************************************************/

  /*! exports provided: PageFooterComponent */

  /***/
  function srcAppPageFooterPageFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function () {
      return PageFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageFooterComponent = /*#__PURE__*/function () {
      function PageFooterComponent() {
        _classCallCheck(this, PageFooterComponent);
      }

      _createClass(PageFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageFooterComponent;
    }();

    PageFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page-footer/page-footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-footer.component.scss */
      "./src/app/page-footer/page-footer.component.scss"))["default"]]
    })], PageFooterComponent);
    /***/
  },

  /***/
  "./src/app/services/calculator.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/calculator.service.ts ***!
    \************************************************/

  /*! exports provided: CalculatorService */

  /***/
  function srcAppServicesCalculatorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculatorService", function () {
      return CalculatorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var CalculatorService = /*#__PURE__*/function () {
      function CalculatorService(http) {
        _classCallCheck(this, CalculatorService);

        this.http = http;
      }

      _createClass(CalculatorService, [{
        key: "sendFormData",
        value: function sendFormData(formData) {
          var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "/sendFormData");
          return this.http.post(url, formData);
        }
      }, {
        key: "getCurrentIndices",
        value: function getCurrentIndices() {
          var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "/getCurrentIndices");
          return this.http.get(url);
        }
      }, {
        key: "setCustomIndices",
        value: function setCustomIndices(indices) {
          var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "/setCustomIndices");
          return this.http.put(url, indices);
        }
      }, {
        key: "resetCustomIndex",
        value: function resetCustomIndex(key) {
          var keyValuePair = {
            keyName: key
          };
          var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "/resetCustomIndex");
          return this.http.put(url, keyValuePair);
        }
      }, {
        key: "resetAllIndices",
        value: function resetAllIndices() {
          var url = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl, "/resetAllIndices");
          return this.http.get(url);
        }
      }]);

      return CalculatorService;
    }();

    CalculatorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CalculatorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CalculatorService);
    /***/
  },

  /***/
  "./src/app/services/loader.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/loader.service.ts ***!
    \********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcAppServicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LoaderService = /*#__PURE__*/function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
      }

      _createClass(LoaderService, [{
        key: "startLoading",
        value: function startLoading() {
          this.loading$.next(true);
        }
      }, {
        key: "stopLoading",
        value: function stopLoading() {
          this.loading$.next(false);
        }
      }]);

      return LoaderService;
    }();

    LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoaderService);
    /***/
  },

  /***/
  "./src/app/services/request.interceptor.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/request.interceptor.ts ***!
    \*************************************************/

  /*! exports provided: RequestInterceptor */

  /***/
  function srcAppServicesRequestInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function () {
      return RequestInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loader.service */
    "./src/app/services/loader.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var RequestInterceptor = /*#__PURE__*/function () {
      function RequestInterceptor(loader) {
        _classCallCheck(this, RequestInterceptor);

        this.loader = loader;
      }

      _createClass(RequestInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          this.loader.startLoading();
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          request = request.clone({
            headers: httpHeaders,
            withCredentials: false
          });
          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            return _this3.loader.stopLoading();
          }));
          ;
        }
      }]);

      return RequestInterceptor;
    }();

    RequestInterceptor.ctorParameters = function () {
      return [{
        type: _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]
      }];
    };

    RequestInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RequestInterceptor);
    /***/
  },

  /***/
  "./src/app/settings/settings.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/settings/settings.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  height: 100%;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  padding: 5%;\n  height: 100%;\n}\n\nform .form-field {\n  display: flex;\n}\n\nform .form-field .button {\n  align-self: flex-end;\n  margin-bottom: 0.5em;\n  margin-left: 15px;\n}\n\nform .buttons-block {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 5%;\n}\n\nform .buttons-block .button:not(:last-child) {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3MvQzpcXFVzZXJzXFxrdGlraG9ub1xcRGVza3RvcFxcYXZlcmFnZS1zYWxhcnktY2FsY3VsYXRvclxcY2xpZW50L3NyY1xcYXBwXFxzZXR0aW5nc1xcc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURDRTtFQUNFLGFBQUE7QUNDSjs7QURDSTtFQUNFLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0NOOztBREdFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREdJO0VBQ0Usa0JBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5idXR0b25zLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcblxyXG4gICAgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDUlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5mb3JtIC5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbmZvcm0gLmZvcm0tZmllbGQgLmJ1dHRvbiB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5mb3JtIC5idXR0b25zLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5mb3JtIC5idXR0b25zLWJsb2NrIC5idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/settings/settings.component.ts":
  /*!************************************************!*\
    !*** ./src/app/settings/settings.component.ts ***!
    \************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/helper */
    "./src/app/models/helper.ts");
    /* harmony import */


    var _services_calculator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/calculator.service */
    "./src/app/services/calculator.service.ts");
    /* harmony import */


    var _models_indices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/indices */
    "./src/app/models/indices.ts");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(calculatorService, detector) {
        _classCallCheck(this, SettingsComponent);

        this.calculatorService = calculatorService;
        this.detector = detector;
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          x1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_helper__WEBPACK_IMPORTED_MODULE_3__["onlyNumbersRegExp"])]),
          x2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_helper__WEBPACK_IMPORTED_MODULE_3__["onlyNumbersRegExp"])]),
          x3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_helper__WEBPACK_IMPORTED_MODULE_3__["onlyNumbersRegExp"])]),
          x4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_helper__WEBPACK_IMPORTED_MODULE_3__["onlyNumbersRegExp"])]),
          x5: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_models_helper__WEBPACK_IMPORTED_MODULE_3__["onlyNumbersRegExp"])]) // non-integral numbers?

        });
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCurrentIndexValue();
        }
      }, {
        key: "getCurrentIndexValue",
        value: function getCurrentIndexValue() {
          var _this4 = this;

          this.calculatorService.getCurrentIndices().subscribe(function (value) {
            _this4.setNewIndicesValue(value);
          });
        }
      }, {
        key: "onFormSubmit",
        value: function onFormSubmit() {
          var _this5 = this;

          this.calculatorService.setCustomIndices(this.formData.value).subscribe(function (value) {
            _this5.setNewIndicesValue(value);
          }); // todo: add error handling
        }
      }, {
        key: "onResetClick",
        value: function onResetClick(key) {
          var _this6 = this;

          this.calculatorService.resetCustomIndex(key).subscribe(function (value) {
            _this6.setNewIndicesValue(value);
          });
        }
      }, {
        key: "onResetAllClick",
        value: function onResetAllClick() {
          var _this7 = this;

          this.calculatorService.resetAllIndices().subscribe(function (value) {
            _this7.setNewIndicesValue(value);
          });
        }
      }, {
        key: "setNewIndicesValue",
        value: function setNewIndicesValue(value) {
          this.indices = new _models_indices__WEBPACK_IMPORTED_MODULE_5__["Indices"](value);
          this.formData.reset(this.indices);
          this.detector.markForCheck();
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_4__["CalculatorService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/settings/settings.component.scss"))["default"]]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/shared/loader/loader.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/shared/loader/loader.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader-wrapper {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 998;\n}\n.loader-wrapper .loader,\n.loader-wrapper .loader:after {\n  border-radius: 50%;\n  width: 10em;\n  height: 10em;\n}\n.loader-wrapper .loader {\n  margin: 60px auto;\n  font-size: 10px;\n  position: absolute;\n  text-indent: -9999em;\n  border-top: 1.1em solid rgba(0, 180, 146, 0.2);\n  border-right: 1.1em solid rgba(0, 180, 146, 0.2);\n  border-bottom: 1.1em solid rgba(0, 180, 146, 0.2);\n  border-left: 1.1em solid #00b492;\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 1.1s infinite linear;\n}\n@-webkit-keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes load8 {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9DOlxcVXNlcnNcXGt0aWtob25vXFxEZXNrdG9wXFxhdmVyYWdlLXNhbGFyeS1jYWxjdWxhdG9yXFxjbGllbnQvc3JjXFxhcHBcXHNoYXJlZFxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7QUNERjtBREdFOztFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjtBREdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpREFBQTtFQUNBLGdDQUFBO0VBR0Esd0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHFDQUFBO0FDREo7QURHRTtFQUNFO0lBRUUsdUJBQUE7RUNESjtFREdFO0lBRUUseUJBQUE7RUNESjtBQUNGO0FER0U7RUFDRTtJQUVFLHVCQUFBO0VDREo7RURHRTtJQUVFLHlCQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubG9hZGVyLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB6LWluZGV4OiA5OTg7XHJcblxyXG4gIC5sb2FkZXIsXHJcbiAgLmxvYWRlcjphZnRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMTBlbTtcclxuICAgIGhlaWdodDogMTBlbTtcclxuICB9XHJcbiAgLmxvYWRlciB7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gICAgYm9yZGVyLXRvcDogMS4xZW0gc29saWQgJHR1cnF1b2lzZS10cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgJHR1cnF1b2lzZS10cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuMWVtIHNvbGlkICR0dXJxdW9pc2UtdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItbGVmdDogMS4xZW0gc29saWQgJHR1cnF1b2lzZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsb2FkOCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmxvYWRlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHotaW5kZXg6IDk5ODtcbn1cbi5sb2FkZXItd3JhcHBlciAubG9hZGVyLFxuLmxvYWRlci13cmFwcGVyIC5sb2FkZXI6YWZ0ZXIge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG59XG4ubG9hZGVyLXdyYXBwZXIgLmxvYWRlciB7XG4gIG1hcmdpbjogNjBweCBhdXRvO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XG4gIGJvcmRlci10b3A6IDEuMWVtIHNvbGlkIHJnYmEoMCwgMTgwLCAxNDYsIDAuMik7XG4gIGJvcmRlci1yaWdodDogMS4xZW0gc29saWQgcmdiYSgwLCAxODAsIDE0NiwgMC4yKTtcbiAgYm9yZGVyLWJvdHRvbTogMS4xZW0gc29saWQgcmdiYSgwLCAxODAsIDE0NiwgMC4yKTtcbiAgYm9yZGVyLWxlZnQ6IDEuMWVtIHNvbGlkICMwMGI0OTI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/loader/loader.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/loader/loader.component.ts ***!
    \***************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppSharedLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderComponent = function LoaderComponent() {
      _classCallCheck(this, LoaderComponent);
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/loader/loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/shared/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/shared/loader/loader.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _config_default_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../config/default.js */
    "../config/default.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseUrl: _config_default_js__WEBPACK_IMPORTED_MODULE_1__["default"].baseUrl,
      locales: ['ru'],
      defaultLocale: 'ru'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ktikhono\Desktop\average-salary-calculator\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map