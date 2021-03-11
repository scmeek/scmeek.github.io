(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sean/Documents/seanmeek.com/seanmeek.com/src/main.ts */"zUnb");


/***/ }),

/***/ "5QQN":
/*!*********************************************************************!*\
  !*** ./src/app/social-media-svg-definitions/social-media-svg-id.ts ***!
  \*********************************************************************/
/*! exports provided: SocialMediaSvgId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaSvgId", function() { return SocialMediaSvgId; });
var SocialMediaSvgId;
(function (SocialMediaSvgId) {
    SocialMediaSvgId["GITHUB"] = "sm_github";
    SocialMediaSvgId["LINKEDIN"] = "sm_linked_in";
    SocialMediaSvgId["TWITTER"] = "sm_twitter";
})(SocialMediaSvgId || (SocialMediaSvgId = {}));


/***/ }),

/***/ "7DxU":
/*!***********************************************************!*\
  !*** ./src/app/shared/code-block/code-block.component.ts ***!
  \***********************************************************/
/*! exports provided: CodeBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeBlockComponent", function() { return CodeBlockComponent; });
/* harmony import */ var src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/toast-message.service */ "YwD0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ctrl_ngx_numbered_codeblock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ctrl/ngx-numbered-codeblock */ "8D2E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CodeBlockComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeBlockComponent_div_3_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onCopyTap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.title, " ");
} }
function CodeBlockComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CodeBlockComponent_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onCopyTap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CodeBlockComponent {
    constructor(_toastMessageService) {
        this._toastMessageService = _toastMessageService;
        this.title = '';
        this.language = 'html';
        this.code = '';
        this.lineNumbers = true;
    }
    onCopyTap(data) {
        if (!this.code) {
            return;
        }
        this.copyText(this.code);
        this._toastMessageService.toastMessage('Copied to clipboard');
    }
    copyText(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    }
}
CodeBlockComponent.ɵfac = function CodeBlockComponent_Factory(t) { return new (t || CodeBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_0__["ToastMessageService"])); };
CodeBlockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CodeBlockComponent, selectors: [["sm-code-block"]], inputs: { title: "title", language: "language", code: "code", lineNumbers: "lineNumbers" }, decls: 5, vars: 5, consts: [[1, "mdl-card"], [1, "mdl-card__media"], [3, "languague", "code", "lineNumbers"], ["class", "mdl-card__actions mdl-card--border", 4, "ngIf"], ["class", "mdl-card__menu", 4, "ngIf"], [1, "mdl-card__actions", "mdl-card--border"], [1, "mdl-card__title"], [1, "mdl-layout-spacer"], [1, "mdl-button", "mdl-button--colored", "mdl-js-button", "mdl-js-ripple-effect", 3, "click"], [1, "material-icons"], [1, "mdl-card__menu"]], template: function CodeBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-numbered-codeblock", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CodeBlockComponent_div_3_Template, 7, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CodeBlockComponent_div_4_Template, 4, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("languague", ctx.language)("code", ctx.code)("lineNumbers", ctx.lineNumbers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.title);
    } }, directives: [_ctrl_ngx_numbered_codeblock__WEBPACK_IMPORTED_MODULE_2__["CodeblockComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["sm-code-block .mdl-card {\n  min-width: 330px;\n  width: unset;\n}\nsm-code-block .mdl-card__menu button {\n  opacity: 0.6;\n  transition: opacity 0.2s ease-out;\n}\nsm-code-block .mdl-card__menu button:hover {\n  opacity: 1;\n  transition: opacity 0.2s ease-out;\n}\nsm-code-block .mdl-card__media {\n  background-color: unset;\n}\nsm-code-block .mdl-card__actions {\n  border-color: rgba(255, 255, 255, 0.2);\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  -ms-flex-align: center;\n      align-items: center;\n}\nsm-code-block .mdl-card__title {\n  -ms-flex-align: start;\n      align-items: flex-start;\n  opacity: 0.65;\n  font-size: 85%;\n}\nsm-code-block .mdl-card__title h4 {\n  margin-top: 0;\n}\nsm-code-block code {\n  margin: 0.5rem 2rem 1rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvZGUtYmxvY2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUFBRjtBQUlFO0VBQ0MsWUFBQTtFQUNBLGlDQUFBO0FBRkg7QUFJRztFQUNDLFVBQUE7RUFDQSxpQ0FBQTtBQUZKO0FBT0M7RUFDQyx1QkFBQTtBQUxGO0FBUUM7RUFDQyxzQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtBQU5GO0FBU0M7RUFDQyxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFQRjtBQVNFO0VBQ0MsYUFBQTtBQVBIO0FBV0M7RUFDQyw2QkFBQTtBQVRGIiwiZmlsZSI6ImNvZGUtYmxvY2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzbS1jb2RlLWJsb2NrIHtcblx0Lm1kbC1jYXJkIHtcblx0XHRtaW4td2lkdGg6IDMzMHB4O1xuXHRcdHdpZHRoOiB1bnNldDtcblx0fVxuXG5cdC5tZGwtY2FyZF9fbWVudSB7XG5cdFx0YnV0dG9uIHtcblx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcblxuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdG9wYWNpdHk6IDE7XG5cdFx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLW91dDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQubWRsLWNhcmRfX21lZGlhIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcblx0fVxuXG5cdC5tZGwtY2FyZF9fYWN0aW9ucyB7XG5cdFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdH1cblxuXHQubWRsLWNhcmRfX3RpdGxlIHtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRvcGFjaXR5OiAwLjY1O1xuXHRcdGZvbnQtc2l6ZTogODUlO1xuXG5cdFx0aDQge1xuXHRcdFx0bWFyZ2luLXRvcDogMDtcblx0XHR9XG5cdH1cblxuXHRjb2RlIHtcblx0XHRtYXJnaW46IDAuNXJlbSAycmVtIDFyZW0gMXJlbTtcblx0fVxufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "9enj":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var src_app_portfolio_portfolio_bio_portfolio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio/portfolio-bio/portfolio-bio.component */ "fyt+");
/* harmony import */ var src_app_portfolio_portfolio_contact_portfolio_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/portfolio/portfolio-contact/portfolio-contact.component */ "b4QN");
/* harmony import */ var src_app_portfolio_portfolio_knowledge_portfolio_knowledge_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/portfolio/portfolio-knowledge/portfolio-knowledge.component */ "gS2R");
/* harmony import */ var src_app_portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/portfolio/portfolio-main/portfolio-main.component */ "v/TW");
/* harmony import */ var src_app_portfolio_portfolio_portrait_card_portfolio_portrait_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/portfolio/portfolio-portrait-card/portfolio-portrait-card.component */ "mk+d");
/* harmony import */ var src_app_portfolio_portfolio_technology_card_portfolio_technology_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/portfolio/portfolio-technology-card/portfolio-technology-card.component */ "rJuk");
/* harmony import */ var src_app_portfolio_portfolio_technology_svg_definitions_portfolio_technology_svg_definitions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/portfolio/portfolio-technology-svg-definitions/portfolio-technology-svg-definitions.component */ "EYRP");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class PortfolioModule {
}
PortfolioModule.ɵfac = function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); };
PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [src_app_portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioMainComponent"],
        src_app_portfolio_portfolio_bio_portfolio_bio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioBioComponent"],
        src_app_portfolio_portfolio_portrait_card_portfolio_portrait_card_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioPortraitCardComponent"],
        src_app_portfolio_portfolio_contact_portfolio_contact_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioContactComponent"],
        src_app_portfolio_portfolio_knowledge_portfolio_knowledge_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioKnowledgeComponent"],
        src_app_portfolio_portfolio_technology_card_portfolio_technology_card_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioTechnologyCardComponent"],
        src_app_portfolio_portfolio_technology_svg_definitions_portfolio_technology_svg_definitions_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioTechnologySvgDefinitionsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]], exports: [src_app_portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioMainComponent"]] }); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false
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

/***/ "EKKv":
/*!**********************************!*\
  !*** ./src/app/app-constants.ts ***!
  \**********************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
class AppConstants {
}
AppConstants.EMAIL = 'hello@seanmeek.com';
AppConstants.GITHUB_URL = 'https://github.com/scmeek';
AppConstants.LINKEDIN_URL = 'https://www.linkedin.com/in/seanmeek/';
AppConstants.TWITTER_URL = 'https://twitter.com/scmeek';


/***/ }),

/***/ "EYRP":
/*!******************************************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-technology-svg-definitions/portfolio-technology-svg-definitions.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: PortfolioTechnologySvgDefinitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioTechnologySvgDefinitionsComponent", function() { return PortfolioTechnologySvgDefinitionsComponent; });
/* harmony import */ var _technology_svg_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technology-svg-id */ "SBjt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PortfolioTechnologySvgDefinitionsComponent {
    constructor() {
        this.ID = _technology_svg_id__WEBPACK_IMPORTED_MODULE_0__["TechnologySvgId"];
    }
}
PortfolioTechnologySvgDefinitionsComponent.ɵfac = function PortfolioTechnologySvgDefinitionsComponent_Factory(t) { return new (t || PortfolioTechnologySvgDefinitionsComponent)(); };
PortfolioTechnologySvgDefinitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioTechnologySvgDefinitionsComponent, selectors: [["sm-portfolio-technology-svg-definitions"]], decls: 818, vars: 27, consts: [[1, "tech-svg-defs"], ["viewBox", "0 0 128 128", 3, "id"], ["fill", "#B3B3B3", "d", "M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"], ["fill", "#A6120D", "d", "M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"], ["fill", "#DD1B16", "d", "M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"], ["fill", "#F2F2F2", "d", "M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"], ["fill", "#B3B3B3", "d", "M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"], ["fill", "#5B4282", "d", "M75.701 65.603c-2.334-.768-5.694-.603-10.08-.603h-17.621v23h18.844c2.944 0 5.012-.315 6.203-.535 2.099-.376 3.854-1.104 5.264-1.982 1.409-.876 2.568-2.205 3.478-3.881.908-1.676 1.363-3.637 1.363-5.83 0-2.568-.658-4.54-1.975-6.436-1.316-1.896-3.141-2.965-5.476-3.733zM73.282 55.087c2.317-.688 4.064-1.89 5.239-3.487 1.176-1.598 1.763-3.631 1.763-6.044 0-2.286-.549-4.314-1.646-6.054s-2.662-2.413-4.699-3.056c-2.037-.641-5.53-.446-10.48-.446h-15.459v20h16.587c4.042 0 6.939-.38 8.695-.913zM126 18.625c0-9.182-7.443-16.625-16.625-16.625h-91.75c-9.182 0-16.625 7.443-16.625 16.625v91.75c0 9.182 7.443 16.625 16.625 16.625h91.75c9.182 0 16.625-7.443 16.625-16.625v-91.75zm-35.447 66.12c-1.362 2.773-3.047 4.911-5.052 6.415-2.006 1.504-4.521 2.78-7.544 3.548-3.022.769-6.728 1.292-11.113 1.292h-27.844v-69h27.42c5.264 0 9.485.609 12.665 2.002 3.181 1.395 5.671 3.497 7.474 6.395 1.801 2.898 2.702 5.907 2.702 9.071 0 2.945-.8 5.708-2.397 8.308-1.598 2.602-4.011 4.694-7.237 6.292 4.166 1.222 7.37 3.304 9.61 6.248 2.24 2.945 3.36 6.422 3.36 10.432 0 3.227-.681 6.225-2.044 8.997z"], ["viewBox", "0 0 256 288", 3, "id"], ["d", "M255.569,84.72 C255.567,79.89 254.534,75.622 252.445,71.959 C250.393,68.357 247.32,65.338 243.198,62.951 C209.173,43.332 175.115,23.773 141.101,4.134 C131.931,-1.16 123.04,-0.967 113.938,4.403 C100.395,12.39 32.59,51.237 12.385,62.94 C4.064,67.757 0.015,75.129 0.013,84.711 C0,124.166 0.013,163.62 0,203.076 C0.002,207.8 0.991,211.985 2.988,215.593 C5.041,219.304 8.157,222.406 12.374,224.847 C32.58,236.55 100.394,275.394 113.934,283.383 C123.04,288.756 131.931,288.948 141.104,283.652 C175.119,264.012 209.179,244.454 243.209,224.835 C247.426,222.395 250.542,219.291 252.595,215.583 C254.589,211.975 255.58,207.79 255.582,203.065 C255.582,203.065 255.582,124.176 255.569,84.72", "fill", "#5C8DBC"], ["d", "M128.182,143.509 L2.988,215.593 C5.041,219.304 8.157,222.406 12.374,224.847 C32.58,236.55 100.394,275.394 113.934,283.383 C123.04,288.756 131.931,288.948 141.104,283.652 C175.119,264.012 209.179,244.454 243.209,224.835 C247.426,222.395 250.542,219.291 252.595,215.583 L128.182,143.509", "fill", "#1A4674"], ["d", "M91.101,164.861 C98.386,177.579 112.081,186.157 127.791,186.157 C143.598,186.157 157.371,177.47 164.619,164.616 L128.182,143.509 L91.101,164.861", "fill", "#1A4674"], ["d", "M255.569,84.72 C255.567,79.89 254.534,75.622 252.445,71.959 L128.182,143.509 L252.595,215.583 C254.589,211.975 255.58,207.79 255.582,203.065 C255.582,203.065 255.582,124.176 255.569,84.72", "fill", "#1B598E"], ["d", "M248.728,148.661 L239.006,148.661 L239.006,158.385 L229.282,158.385 L229.282,148.661 L219.561,148.661 L219.561,138.94 L229.282,138.94 L229.282,129.218 L239.006,129.218 L239.006,138.94 L248.728,138.94 L248.728,148.661", "fill", "#FFFFFF"], ["d", "M213.253,148.661 L203.532,148.661 L203.532,158.385 L193.81,158.385 L193.81,148.661 L184.088,148.661 L184.088,138.94 L193.81,138.94 L193.81,129.218 L203.532,129.218 L203.532,138.94 L213.253,138.94 L213.253,148.661", "fill", "#FFFFFF"], ["d", "M164.619,164.616 C157.371,177.47 143.598,186.157 127.791,186.157 C112.081,186.157 98.386,177.579 91.101,164.861 C87.562,158.681 85.527,151.526 85.527,143.893 C85.527,120.552 104.45,101.63 127.791,101.63 C143.4,101.63 157.023,110.101 164.344,122.689 L201.285,101.417 C186.602,76.071 159.189,59.019 127.791,59.019 C80.915,59.019 42.916,97.019 42.916,143.893 C42.916,159.271 47.007,173.692 54.157,186.131 C68.803,211.611 96.294,228.768 127.791,228.768 C159.346,228.768 186.88,211.542 201.505,185.987 L164.619,164.616", "fill", "#FFFFFF"], ["fill", "#9B4F96", "d", "M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"], ["fill", "#68217A", "d", "M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"], ["fill", "#fff", "d", "M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1l1.2-6.2h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7h3.3zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"], ["fill", "#1572B6", "d", "M18.814 114.123l-10.054-112.771h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"], ["fill", "#33A9DC", "d", "M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"], ["fill", "#fff", "d", "M64.001 51.429h18.302l1.264-14.163h-19.566v-13.831h34.681999999999995l-.332 3.711-3.4 38.114h-30.95v-13.831z"], ["fill", "#EBEBEB", "d", "M64.083 87.349l-.061.018-15.403-4.159-.985-11.031h-13.882l1.937 21.717 28.331 7.863.063-.018v-14.39z"], ["fill", "#fff", "d", "M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881h-13.876z"], ["fill", "#EBEBEB", "d", "M64.048 23.435v13.831000000000001h-33.407999999999994l-.277-3.108-.63-7.012-.331-3.711h34.646zM64.001 51.431v13.831000000000001h-15.209l-.277-3.108-.631-7.012-.33-3.711h16.447z"], ["fill", "#1384C8", "d", "M40.335 78.188h-1.685v-9.65c0-.762.05-1.69.14-2.785h-.038c-.158.64-.303 1.104-.43 1.391l-4.902 11.044h-.821l-4.911-10.964c-.138-.306-.283-.799-.43-1.471h-.036c.052.576.081 1.509.081 2.804v9.631h-1.626v-14.371h2.225l4.409 10.021c.332.754.547 1.328.651 1.72h.069c.288-.785.517-1.375.688-1.762l4.505-9.979h2.11v14.371h.001zM45.523 78.188h-1.639v-10.263h1.639v10.263zm.283-13.942c0 .303-.106.555-.317.763-.207.208-.464.312-.764.312-.293 0-.548-.101-.757-.301-.209-.201-.313-.458-.313-.774 0-.296.104-.549.313-.754s.464-.305.757-.305c.3 0 .557.099.764.305.211.205.317.458.317.754"], ["fill", "#1384C8", "d", "M55.764 77.713c-.786.483-1.726.722-2.812.722-1.472 0-2.655-.488-3.561-1.464-.879-.947-1.321-2.169-1.321-3.667 0-1.681.48-3.042 1.45-4.077.964-1.036 2.261-1.553 3.892-1.553.892 0 1.683.174 2.375.521v1.687c-.766-.538-1.576-.805-2.445-.805-1.045 0-1.896.365-2.555 1.093-.687.745-1.034 1.742-1.034 2.985 0 1.194.317 2.14.948 2.837.633.694 1.476 1.042 2.538 1.042.897 0 1.738-.295 2.524-.882v1.561h.001zM63.604 69.59c-.289-.223-.706-.331-1.255-.331-.668 0-1.229.298-1.683.901-.516.673-.771 1.604-.771 2.795v5.232h-1.644v-10.262h1.644v2.116h.039c.241-.749.614-1.325 1.112-1.733.466-.373.992-.561 1.572-.561.438 0 .762.047.984.14l.002 1.703zM72.758 73.075c0-1.313-.296-2.317-.89-3.006-.575-.662-1.38-.992-2.416-.992-1.021 0-1.841.334-2.453 1.003-.647.715-.971 1.725-.971 3.035 0 1.228.308 2.192.93 2.879.618.692 1.45 1.039 2.494 1.039 1.08 0 1.907-.352 2.474-1.051.555-.684.832-1.652.832-2.907m1.685-.057c0 1.635-.462 2.949-1.382 3.934-.924.989-2.167 1.483-3.73 1.483-1.54 0-2.767-.494-3.665-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.5-3.162 1.503-4.139.929-.906 2.17-1.363 3.726-1.363 1.53 0 2.726.477 3.587 1.422.853.95 1.284 2.258 1.284 3.922M82.589 75.442c0 .84-.313 1.536-.942 2.091-.687.601-1.63.901-2.816.901-.971 0-1.822-.203-2.545-.618v-1.766c.804.654 1.692.983 2.667.983 1.301 0 1.952-.479 1.952-1.434 0-.401-.143-.734-.431-.991-.289-.262-.851-.576-1.685-.943-.859-.376-1.472-.762-1.833-1.163-.434-.476-.652-1.093-.652-1.854 0-.852.341-1.561 1.014-2.125.675-.567 1.542-.85 2.606-.85.815 0 1.546.159 2.194.481v1.654c-.677-.488-1.451-.732-2.329-.732-.544 0-.981.136-1.307.399-.329.27-.494.614-.494 1.034 0 .455.138.808.412 1.061.244.233.761.519 1.541.852.876.367 1.509.748 1.895 1.137.5.494.753 1.121.753 1.883M92.629 73.075c0-1.313-.297-2.317-.892-3.006-.575-.662-1.381-.992-2.415-.992-1.021 0-1.841.334-2.456 1.003-.646.715-.969 1.725-.969 3.035 0 1.228.309 2.192.924 2.879.626.692 1.459 1.039 2.501 1.039 1.082 0 1.906-.352 2.474-1.051.555-.684.833-1.652.833-2.907m1.688-.057c0 1.635-.466 2.949-1.388 3.934-.92.989-2.163 1.483-3.727 1.483-1.542 0-2.768-.494-3.667-1.483-.881-.953-1.323-2.211-1.323-3.776 0-1.786.504-3.162 1.502-4.139.928-.906 2.171-1.363 3.728-1.363 1.531 0 2.725.477 3.584 1.422.855.95 1.291 2.258 1.291 3.922"], ["fill", "#1384C8", "d", "M101.555 64.438c-.323-.179-.682-.27-1.091-.27-1.15 0-1.721.724-1.721 2.175v1.582h2.405v1.392h-2.405v8.871h-1.645v-8.871h-1.745v-1.392h1.745v-1.664c0-1.129.346-2.016 1.05-2.654.603-.555 1.34-.831 2.217-.831.508 0 .902.061 1.189.178v1.484zM108.039 78.085c-.388.222-.904.333-1.543.333-1.791 0-2.687-1.01-2.687-3.029v-6.07h-1.761v-1.394h1.761v-2.504l1.646-.533v3.037h2.583v1.394h-2.583v5.791c0 .688.112 1.18.348 1.465.237.295.625.439 1.173.439.409 0 .763-.109 1.063-.331v1.402zM19.237 118.242c0 .805-.286 1.5-.867 2.087-.577.585-1.278.88-2.102.88-.805 0-1.489-.295-2.05-.88-.562-.587-.841-1.283-.841-2.087 0-.827.279-1.525.841-2.103.561-.58 1.245-.867 2.05-.867.823 0 1.524.292 2.102.878.581.588.867 1.286.867 2.092"], ["fill", "#1384C8", "d", "M56.018 120.606h-5.358l-19.448-30.034c-.454-.723-.847-1.508-1.179-2.365h-.16c.139.804.209 2.531.209 5.175v27.224h-4.416v-37.68h5.732l18.865 29.56c.751 1.173 1.265 2.013 1.525 2.519h.104c-.175-1.083-.266-2.932-.266-5.54v-26.539h4.39v37.68h.002zM84.332 120.606h-19.971v-37.68h19.104v3.993h-14.69v12.534h13.612v3.995h-13.613v13.164h15.558v3.994zM114.623 86.919h-10.854v33.688h-4.415v-33.688h-10.875v-3.995h26.144v3.995z"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "#1384C8", "d", "M82.108 46.33c.479-1.232 1.022-2.445 1.427-3.701 2.288-7.097 4.554-14.2 6.805-21.309.865-2.731 1.813-5.42 3.515-7.767 2.692-3.709 6.442-5.652 10.88-6.331 1.741-.266 3.518-.389 5.28-.406 5.267-.05 10.536-.015 15.804-.01.28 0 .56.029.957.052-.129.304-.199.525-.311.724-1.955 3.494-3.872 7.009-5.885 10.468-3.505 6.022-7.016 12.042-10.631 17.998-2.319 3.819-4.834 7.52-7.687 10.974-2.105 2.548-4.321 4.984-7.146 6.77-1.925 1.217-3.981 1.929-6.315 1.917-8.278-.045-16.556-.012-24.834-.024-2.461-.004-4.568-.941-6.356-2.603-2.563-2.381-4.093-5.412-5.345-8.608-2.284-5.835-3.563-11.951-5.031-18.014-.688-2.838-1.47-5.654-2.215-8.478-.048-.183-.142-.354-.25-.617l-.577.542c-3.228 3.207-6.071 6.741-8.615 10.498-.693 1.024-.926 2.374-1.313 3.591-1.424 4.47-2.722 8.983-4.264 13.411-1.477 4.242-4.125 7.616-8.264 9.61-2.42 1.165-5.004 1.795-7.689 1.855-3.98.088-7.962.098-11.943.134-.952.009-.996-.069-.748-.99 1.707-6.338 3.87-12.514 6.58-18.492 2.794-6.167 6.085-12.048 10.231-17.419 2.823-3.657 5.941-7.031 9.843-9.582 1.979-1.293 4.083-2.315 6.477-2.584.394-.045.793-.073 1.189-.073 8.478-.004 16.956.082 25.433-.039 4.547-.065 7.839 1.855 10.304 5.515 1.533 2.276 2.63 4.761 3.553 7.328 1.861 5.178 3.018 10.547 4.325 15.878.748 3.051 1.581 6.081 2.379 9.12.06.228.157.446.238.668l.199-.006z"], ["d", "M40.53,77.82V50.74H42V55a5.57,5.57,0,0,0,.48-.6,7.28,7.28,0,0,1,6.64-4.12c3.35-.1,6.07,1.14,7.67,4.12a13.24,13.24,0,0,1,.32,12.14c-1.49,3.34-5.17,5-9.11,4.39a7.37,7.37,0,0,1-5.88-3.88V77.82ZM42,60.32c.13,1.32.18,2.26.33,3.18.58,3.62,2.72,5.77,6.08,6.16A6.91,6.91,0,0,0,56,65.27a11.77,11.77,0,0,0-.26-9.68,6.77,6.77,0,0,0-7.13-3.94,6.59,6.59,0,0,0-5.89,4.87A33.4,33.4,0,0,0,42,60.32Z"], ["d", "M88.41,64A7.92,7.92,0,0,1,80.67,71c-6.16.31-9.05-3.78-9.51-8.5A13.62,13.62,0,0,1,72.36,55a8.37,8.37,0,0,1,8.71-4.67,8,8,0,0,1,7.1,6.09,41.09,41.09,0,0,1,.69,4.5H72.67c-.3,4.28,2,7.72,5.26,8.55,4.06,1,7.53-.76,8.79-4.62C87,63.86,87.51,63.72,88.41,64ZM72.67,59.55H87.14c-.09-4.56-2.93-7.86-6.78-7.91C76,51.57,72.86,54.75,72.67,59.55Z"], ["d", "M91.39,64.1h1.42A5.69,5.69,0,0,0,96.15,69a8.73,8.73,0,0,0,7.58-.2,3.41,3.41,0,0,0,2-3.35,3.09,3.09,0,0,0-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25,35.25,0,0,1,94,59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21,10.21,0,0,1,9.76-.15,5.14,5.14,0,0,1,2.6,5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17,9.17,0,0,0-3,.91,3,3,0,0,0-1.74,3,3,3,0,0,0,2,2.82c1.54.56,3.15.92,4.73,1.36,1.27.35,2.59.58,3.82,1a4.51,4.51,0,0,1,3.1,4.07,4.81,4.81,0,0,1-2.59,5c-3.34,1.89-8.84,1.39-11.29-1A6.67,6.67,0,0,1,91.39,64.1Z"], ["d", "M125.21,56.61h-1.33c0-.18-.07-.34-.09-.49a4.35,4.35,0,0,0-3.54-4.18,8.73,8.73,0,0,0-5.61.27,3.41,3.41,0,0,0-2.47,3.25,3.14,3.14,0,0,0,2.4,3.16c2,.62,4.05,1,6.08,1.56a17,17,0,0,1,1.94.59,5,5,0,0,1,.27,9.31,11.13,11.13,0,0,1-9,.09,6.24,6.24,0,0,1-3.76-6.06l.56,0h.74a7.29,7.29,0,0,0,11.1,4.64,3.57,3.57,0,0,0,1.92-3.34,3.09,3.09,0,0,0-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43,35.43,0,0,1-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07,10.07,0,0,1,9.92-.11A5.23,5.23,0,0,1,125.21,56.61Z"], ["d", "M38.1,70.51a2.29,2.29,0,0,1-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06,2.76-4.12,5.41-6,8.16a2.2,2.2,0,0,1-2.7,1.06l7.73-10.37-7.19-9.37a2.39,2.39,0,0,1,2.85,1c1.67,2.44,3.52,4.77,5.36,7.24,1.85-2.45,3.68-4.79,5.39-7.21a2.15,2.15,0,0,1,2.68-1l-2.79,3.7c-1.25,1.65-2.48,3.31-3.78,4.92a1,1,0,0,0,0,1.49C33.29,64.07,35.66,67.25,38.1,70.51Z"], ["d", "M70.92,50.66v1.4a7.25,7.25,0,0,0-7.72,7.49q0,4.94,0,9.88c0,.35,0,.7,0,1.12H61.77V50.74h1.4V54.8C64.9,51.84,67.57,50.74,70.92,50.66Z"], ["d", "M2.13,60c.21-1,.34-2.09.63-3.11,1.73-6.15,8.78-8.71,13.63-4.9,2.84,2.23,3.55,5.39,3.41,8.95h-16C3.54,67.3,8.13,71.14,14,69.18a6.09,6.09,0,0,0,3.87-4.31c.31-1,.81-1.17,1.76-.88a8.12,8.12,0,0,1-3.88,5.93,9.4,9.4,0,0,1-10.95-1.4,9.85,9.85,0,0,1-2.46-5.78c0-.34-.13-.68-.2-1Q2.13,60.85,2.13,60Zm1.69-.43H18.29c-.09-4.61-3-7.88-6.88-7.91C7.09,51.6,4,54.8,3.81,59.55Z"], ["fill", "#F34F29", "d", "M124.737 58.378l-55.116-55.114c-3.172-3.174-8.32-3.174-11.497 0l-11.444 11.446 14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679-3.78 3.78-9.901 3.78-13.683 0-2.842-2.844-3.545-7.019-2.105-10.521l-13.048-13.048-.002 34.341c.922.455 1.791 1.063 2.559 1.828 3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683.934-.933 2.014-1.638 3.167-2.11v-34.659c-1.153-.472-2.231-1.172-3.167-2.111-2.862-2.86-3.551-7.06-2.083-10.576l-14.313-14.313-37.792 37.79c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.174-3.176 3.174-8.327-.001-11.501z"], ["fill", "#383838", "fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"], ["d", "M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"], ["fill", "#E44D26", "d", "M19.037 113.876l-10.005-112.215h109.936l-10.016 112.198-45.019 12.48z"], ["fill", "#F16529", "d", "M64 116.8l36.378-10.086 8.559-95.878h-44.937z"], ["fill", "#EBEBEB", "d", "M64 52.455h-18.212l-1.258-14.094h19.47v-13.762h-34.511l.33 3.692 3.382 37.927h30.799zM64 88.198l-.061.017-15.327-4.14-.979-10.975h-13.817l1.928 21.609 28.193 7.826.063-.017z"], ["fill", "#fff", "d", "M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zM63.952 24.599v13.762h33.244l.276-3.092.628-6.978.329-3.692z"], ["fill", "#F0DB4F", "d", "M1.408 1.408h125.184v125.185h-125.184z"], ["fill", "#323330", "d", "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"], ["viewBox", "0 0 256 283", 3, "id"], ["d", "M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z", "fill", "#C63D14"], ["d", "M246.399036,139.203 C246.399036,123.218 234.882036,109.88 219.711036,107.031 L256.000036,0 L84.4660355,0 L120.810036,107.248 C106.167036,110.507 95.1830355,123.593 95.1830355,139.203 C95.1830355,150.926 101.378036,161.223 110.663036,167.009 C106.197036,173.662 100.901036,179.923 94.8320355,185.648 C85.2080355,194.728 74.4850355,201.614 62.9250355,206.144 C51.2820355,198.83 46.3600355,185.038 51.4720355,173.022 L51.8720355,172.082 C52.1220355,171.494 52.3730355,170.904 52.6230355,170.314 C65.4110355,165.855 74.6160355,153.682 74.6160355,139.392 C74.6160355,121.337 59.9270355,106.649 41.8720355,106.649 C23.8170355,106.649 9.12903553,121.337 9.12903553,139.392 C9.12903553,148.505 12.8740355,156.757 18.9020355,162.699 C17.8090355,165.029 16.6600355,167.397 15.4790355,169.823 C9.96703553,181.144 3.72003553,193.976 1.35703553,208.225 C-3.33596447,236.524 4.23303553,259.146 22.6700355,271.924 C33.8580355,279.678 45.2190355,282.728 56.6520355,282.727 C78.1810355,282.726 99.9580355,271.911 121.258036,261.331 C136.599036,253.712 152.461036,245.833 168.130036,241.969 C173.960036,240.531 179.959036,239.666 186.310036,238.75 C198.904036,236.933 211.928036,235.055 223.464036,228.374 C236.835036,220.629 245.989036,207.637 248.577036,192.73 C250.799036,179.933 248.124036,167.117 241.602036,156.247 C244.643036,151.279 246.399036,145.443 246.399036,139.203 L246.399036,139.203 Z M233.545036,139.203 C233.545036,150.17 224.623036,159.093 213.655036,159.093 C202.689036,159.093 193.766036,150.17 193.766036,139.203 C193.766036,128.236 202.689036,119.314 213.655036,119.314 C224.623036,119.314 233.545036,128.236 233.545036,139.203 L233.545036,139.203 Z M238.069036,12.854 L206.024036,107.367 C204.635036,107.7 203.281036,108.12 201.966036,108.625 L170.310036,44.047 L138.562036,108.243 C137.190036,107.77 135.778036,107.381 134.330036,107.093 L102.395036,12.854 L238.069036,12.854 L238.069036,12.854 Z M127.926036,119.314 C138.893036,119.314 147.815036,128.236 147.815036,139.203 C147.815036,150.17 138.893036,159.093 127.926036,159.093 C116.960036,159.093 108.037036,150.17 108.037036,139.203 C108.037036,128.236 116.960036,119.314 127.926036,119.314 L127.926036,119.314 Z M41.8720355,119.503 C52.8400355,119.503 61.7620355,128.425 61.7620355,139.392 C61.7620355,150.359 52.8400355,159.282 41.8720355,159.282 C30.9060355,159.282 21.9830355,150.359 21.9830355,139.392 C21.9830355,128.425 30.9060355,119.503 41.8720355,119.503 L41.8720355,119.503 Z M235.912036,190.531 C233.977036,201.679 227.091036,211.418 217.021036,217.25 C207.634036,222.687 196.385036,224.31 184.475036,226.027 C178.095036,226.947 171.497036,227.899 165.052036,229.489 C148.010036,233.691 131.503036,241.89 115.540036,249.819 C83.5950355,265.686 56.0060355,279.388 29.9930355,261.359 C10.9380355,248.153 11.8180355,223.718 14.0380355,210.328 C16.0950355,197.923 21.6570355,186.498 27.0360355,175.449 C27.9670355,173.537 28.8710355,171.664 29.7580355,169.803 C32.4260355,170.87 35.2630355,171.597 38.2200355,171.927 C32.7450355,189.998 41.3560355,209.646 59.4290355,218.931 L61.9020355,220.202 L64.5220355,219.269 C78.8100355,214.181 91.9750355,206.015 103.653036,194.998 C111.202036,187.877 117.689036,179.998 123.023036,171.579 C124.623036,171.82 126.260036,171.947 127.926036,171.947 C145.981036,171.947 160.670036,157.259 160.670036,139.203 C160.670036,129.493 156.417036,120.761 149.681036,114.759 L170.259036,73.147 L191.046036,115.552 C184.809036,121.518 180.912036,129.911 180.912036,139.203 C180.912036,157.259 195.600036,171.947 213.655036,171.947 C220.592036,171.947 227.027036,169.773 232.327036,166.079 C236.007036,173.612 237.378036,182.088 235.912036,190.531 L235.912036,190.531 Z", "fill", "#FFFFFF"], ["fill", "#0868AC", "d", "M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"], ["fill", "url(#a)", "d", "M117.641 111.137c0 8.362-13.557 15.14-30.28 15.14-16.722 0-30.279-6.778-30.279-15.14s13.556-15.14 30.278-15.14c16.723.001 30.281 6.779 30.281 15.14z"], ["fill", "url(#b)", "d", "M72.546 110.974c0 8.362-13.921 15.14-31.094 15.14s-31.093-6.778-31.093-15.14c0-8.361 13.921-15.14 31.093-15.14 17.173 0 31.094 6.779 31.094 15.14z"], ["d", "M108.095 81.343c-1.534 6.324-9.322 19.527-13.459 25.338-4.138 5.835-3.626 11.089-11.275 9.043-7.625-2.045-9.763-1.673-17.644-1.208-7.833.464-6.137-.233-11.042 1.976-4.882 2.208-21.27-26.78-22.595-32.173-1.301-5.393-1.93-4.743 1.464-10.577 3.395-5.834 3.883-11.6 8.368-18.667 4.487-7.09 9.671-10.693 9.299-16.109-1.464-20.108-2.626-30.15 6.301-34.8 8.507-4.417 15.621-1.79 18.434-.279 1.208.651 3.673 1.906 5.509 4.115 1.836 2.162 3.487 5.44 4.417 9.577 1.906 8.299-.791 5.556 1.371 15.064 2.139 9.484 6.485 14.133 11.787 21.642 5.299 7.508 10.832 19.898 9.065 27.058z"], ["fill", "#666", "d", "M57.644 32.088c1.394-.558 1.16-.632 2.089-2.655.744-1.557 1.398-2.227 1.375-4.598 0-2.325-.722-3.115-1.814-4.626-1.045-1.441-2.719-1.511-3.765-1.325-.604.093-1.395.86-1.93 2-.348.767-.628 1.744-.651 2.766-.07 2.743.163 3.79.791 5.649.743 2.185 2.556 3.325 3.905 2.789z"], ["fill", "#6D6D6D", "d", "M57.644 32.08c1.385-.554 1.15-.631 2.074-2.641.739-1.547 1.392-2.215 1.379-4.573.009-2.309-.698-3.133-1.771-4.585-1.065-1.403-2.705-1.456-3.743-1.276-.619.091-1.406.829-1.95 1.927-.374.746-.65 1.728-.673 2.755-.068 2.724.176 3.775.794 5.624.732 2.173 2.55 3.3 3.89 2.769z"], ["fill", "#757575", "d", "M57.644 32.071c1.376-.551 1.141-.629 2.059-2.626.735-1.537 1.387-2.202 1.384-4.547.017-2.294-.676-3.15-1.731-4.544-1.082-1.364-2.688-1.401-3.719-1.227-.633.089-1.417.798-1.969 1.854-.401.725-.675 1.713-.698 2.745-.067 2.706.191 3.761.798 5.598.721 2.16 2.545 3.275 3.876 2.747z"], ["fill", "#7C7C7C", "d", "M57.644 32.063c1.367-.547 1.132-.628 2.044-2.611.729-1.528 1.381-2.191 1.389-4.522.026-2.278-.653-3.167-1.69-4.503-1.099-1.325-2.673-1.345-3.695-1.178-.648.088-1.429.769-1.989 1.783-.427.703-.697 1.697-.72 2.733-.066 2.687.205 3.747.802 5.573.707 2.147 2.537 3.248 3.859 2.725z"], ["fill", "#848484", "d", "M57.644 32.054c1.359-.544 1.123-.627 2.028-2.598.726-1.518 1.378-2.179 1.395-4.497.034-2.263-.629-3.185-1.649-4.462-1.117-1.287-2.658-1.29-3.672-1.129-.662.086-1.44.737-2.01 1.709-.453.683-.721 1.682-.744 2.723-.064 2.668.22 3.732.808 5.548.694 2.137 2.531 3.227 3.844 2.706z"], ["fill", "#8C8C8C", "d", "M57.644 32.046c1.35-.54 1.113-.626 2.013-2.583.721-1.507 1.373-2.167 1.4-4.472.043-2.248-.608-3.202-1.609-4.422-1.134-1.248-2.643-1.235-3.649-1.08-.676.085-1.45.707-2.029 1.637-.479.662-.744 1.667-.766 2.712-.063 2.65.233 3.718.81 5.522.683 2.125 2.526 3.203 3.83 2.686z"], ["fill", "#939393", "d", "M57.644 32.037c1.34-.536 1.104-.624 1.998-2.569.715-1.497 1.367-2.154 1.405-4.446.052-2.232-.584-3.22-1.567-4.381-1.152-1.209-2.625-1.18-3.625-1.032-.691.084-1.462.676-2.049 1.565-.505.641-.768 1.651-.791 2.702-.06 2.631.249 3.704.815 5.497.67 2.112 2.517 3.178 3.814 2.664z"], ["fill", "#9B9B9B", "d", "M57.644 32.028c1.333-.533 1.095-.624 1.983-2.554.71-1.488 1.361-2.143 1.41-4.421.061-2.217-.562-3.237-1.528-4.339-1.168-1.171-2.609-1.125-3.602-.983-.705.082-1.473.646-2.069 1.492-.531.619-.79 1.636-.813 2.691-.06 2.613.261 3.689.818 5.472.66 2.099 2.514 3.153 3.801 2.642z"], ["fill", "#A3A3A3", "d", "M57.644 32.02c1.323-.529 1.086-.622 1.968-2.54.706-1.478 1.356-2.13 1.415-4.396.069-2.202-.54-3.254-1.487-4.299-1.187-1.132-2.594-1.07-3.579-.934-.719.081-1.484.615-2.088 1.42-.557.598-.814 1.621-.836 2.681-.059 2.593.275 3.674.822 5.446.649 2.087 2.507 3.129 3.785 2.622z"], ["fill", "#aaa", "d", "M57.644 32.011c1.314-.525 1.077-.62 1.953-2.526.7-1.467 1.351-2.119 1.419-4.37.078-2.187-.516-3.272-1.445-4.258-1.205-1.094-2.58-1.015-3.556-.885-.733.079-1.496.584-2.109 1.347-.583.578-.837 1.606-.859 2.669-.057 2.576.289 3.661.826 5.422.638 2.075 2.5 3.105 3.771 2.601z"], ["fill", "#B2B2B2", "d", "M57.644 32.002c1.305-.522 1.067-.62 1.937-2.512.696-1.457 1.346-2.106 1.425-4.345.086-2.171-.493-3.29-1.404-4.217-1.223-1.055-2.563-.959-3.532-.836-.749.077-1.507.554-2.128 1.275-.61.556-.861 1.591-.883 2.659-.055 2.556.304 3.646.831 5.396.624 2.064 2.493 3.081 3.754 2.58z"], ["fill", "#BABABA", "d", "M57.644 31.994c1.296-.518 1.058-.618 1.922-2.497.692-1.448 1.341-2.095 1.43-4.32.096-2.156-.47-3.307-1.363-4.176-1.239-1.016-2.547-.903-3.508-.787-.763.075-1.518.522-2.148 1.202-.637.535-.885 1.576-.906 2.648-.054 2.538.317 3.632.834 5.371.611 2.051 2.486 3.055 3.739 2.559z"], ["fill", "#C1C1C1", "d", "M57.644 31.985c1.288-.515 1.049-.616 1.907-2.483.686-1.437 1.336-2.082 1.435-4.294.104-2.141-.448-3.324-1.322-4.135-1.257-.978-2.533-.849-3.486-.738-.776.074-1.529.492-2.168 1.13-.662.513-.907 1.56-.929 2.636-.052 2.519.333 3.618.839 5.346.599 2.039 2.481 3.031 3.724 2.538z"], ["fill", "#C9C9C9", "d", "M57.644 31.976c1.278-.511 1.04-.615 1.892-2.468.681-1.427 1.33-2.071 1.439-4.269.114-2.125-.424-3.342-1.281-4.094-1.274-.939-2.516-.794-3.462-.69-.79.072-1.54.462-2.188 1.058-.688.492-.931 1.544-.953 2.626-.05 2.5.346 3.603.843 5.32.588 2.027 2.475 3.007 3.71 2.517z"], ["fill", "#D1D1D1", "d", "M57.645 31.968c1.269-.508 1.029-.614 1.875-2.454.678-1.417 1.327-2.059 1.446-4.244.121-2.11-.402-3.359-1.241-4.053-1.292-.901-2.501-.739-3.438-.641-.806.07-1.552.431-2.208.985-.714.471-.955 1.529-.976 2.616-.049 2.481.36 3.588.847 5.295.575 2.014 2.467 2.983 3.695 2.496z"], ["fill", "#D8D8D8", "d", "M57.645 31.96c1.259-.504 1.02-.613 1.86-2.44.672-1.407 1.321-2.046 1.451-4.218.129-2.095-.38-3.376-1.199-4.013-1.311-.862-2.486-.683-3.416-.591-.819.069-1.563.399-2.228.913-.74.45-.978 1.514-.999 2.604-.048 2.463.374 3.575.851 5.27.565 2.001 2.462 2.957 3.68 2.475z"], ["fill", "#E0E0E0", "d", "M57.645 31.95c1.251-.5 1.011-.611 1.845-2.425.667-1.397 1.315-2.034 1.455-4.193.139-2.079-.356-3.395-1.159-3.972-1.327-.823-2.47-.628-3.392-.542-.833.067-1.573.369-2.247.841-.766.429-1.001 1.499-1.022 2.594-.047 2.445.389 3.561.855 5.245.553 1.988 2.455 2.932 3.665 2.452z"], ["fill", "#E8E8E8", "d", "M57.645 31.942c1.242-.497 1.002-.61 1.83-2.411.662-1.387 1.311-2.022 1.46-4.167.147-2.064-.334-3.412-1.118-3.931-1.345-.784-2.454-.573-3.369-.494-.848.065-1.584.338-2.268.768-.791.408-1.024 1.483-1.044 2.583-.045 2.426.403 3.546.858 5.219.541 1.978 2.45 2.909 3.651 2.433z"], ["fill", "#EFEFEF", "d", "M57.645 31.934c1.232-.494.992-.609 1.814-2.397.658-1.376 1.305-2.01 1.466-4.142.156-2.048-.312-3.429-1.077-3.89-1.362-.746-2.439-.518-3.345-.444-.862.064-1.596.308-2.287.695-.818.386-1.048 1.468-1.069 2.572-.044 2.408.417 3.532.863 5.194.528 1.965 2.442 2.884 3.635 2.412z"], ["fill", "#F7F7F7", "d", "M57.645 31.925c1.225-.49.984-.607 1.799-2.383.653-1.367 1.3-1.998 1.471-4.117.165-2.033-.289-3.447-1.036-3.849-1.38-.707-2.423-.462-3.322-.396-.876.063-1.607.277-2.308.623-.844.366-1.071 1.453-1.092 2.562-.042 2.388.431 3.518.868 5.168.516 1.954 2.436 2.861 3.62 2.392z"], ["fill", "#fff", "d", "M57.645 31.916c1.215-.486.974-.606 1.784-2.368.648-1.356 1.295-1.986 1.475-4.091.174-2.018-.266-3.464-.995-3.808-1.397-.669-2.407-.408-3.298-.348-.891.061-1.618.247-2.326.551-.871.344-1.095 1.438-1.116 2.551-.04 2.37.446 3.503.871 5.144.504 1.94 2.431 2.835 3.605 2.369z"], ["d", "M56.342 22.627c.698 0 1.581.465 1.999 1.092.442.628.767 1.511.767 2.511 0 1.488-.163 3.138-1.046 3.649-.279.163-.884.302-1.232.302-.79 0-.86-.512-1.604-1.279-.255-.279-1.023-1.627-1.023-2.743 0-.697-.163-1.697.441-2.581.42-.649.954-.951 1.698-.951zM56.156 23.874c.272-.421 1.363-.223 1.759.645.397.868.322 2.752.049 2.851-.718.223-.495-.818-1.115-1.76-.619-.892-.966-1.314-.693-1.736z"], ["fill", "#070707", "d", "M56.173 23.893c.269-.416 1.346-.22 1.737.636.392.856.318 2.717.049 2.814-.709.22-.489-.808-1.101-1.738-.611-.88-.954-1.296-.685-1.712z"], ["fill", "#0F0F0F", "d", "M56.191 23.91c.266-.411 1.329-.217 1.715.628.387.845.314 2.682.049 2.778-.701.217-.484-.797-1.088-1.715-.604-.869-.942-1.28-.676-1.691z"], ["fill", "#161616", "d", "M56.208 23.928c.263-.406 1.312-.215 1.692.62.382.834.311 2.647.048 2.742-.692.214-.477-.788-1.073-1.693-.595-.858-.929-1.263-.667-1.669z"], ["fill", "#1E1E1E", "d", "M56.226 23.945c.258-.399 1.293-.211 1.67.612.376.824.306 2.613.047 2.707-.683.211-.471-.776-1.059-1.67-.587-.848-.917-1.248-.658-1.649z"], ["fill", "#262626", "d", "M56.243 23.963c.255-.395 1.277-.208 1.648.604.371.812.301 2.577.046 2.67-.672.209-.464-.767-1.044-1.648-.58-.836-.905-1.231-.65-1.626z"], ["fill", "#2D2D2D", "d", "M56.26 23.981c.253-.39 1.26-.206 1.627.595.366.802.297 2.542.046 2.634-.665.206-.458-.756-1.031-1.627-.572-.823-.894-1.212-.642-1.602z"], ["fill", "#353535", "d", "M56.278 23.999c.249-.384 1.243-.203 1.604.587.361.791.293 2.507.046 2.598-.656.204-.452-.745-1.017-1.604-.565-.813-.882-1.197-.633-1.581z"], ["fill", "#3D3D3D", "d", "M56.295 24.017c.246-.378 1.226-.2 1.582.579.356.78.29 2.472.045 2.562-.646.201-.446-.735-1.002-1.581-.558-.802-.87-1.181-.625-1.56z"], ["fill", "#444", "d", "M56.313 24.034c.241-.373 1.208-.197 1.559.571.352.769.286 2.438.044 2.526-.637.198-.439-.725-.988-1.559-.549-.791-.857-1.164-.615-1.538z"], ["fill", "#4C4C4C", "d", "M56.33 24.052c.238-.368 1.19-.194 1.537.563.347.758.281 2.403.044 2.489-.628.195-.433-.714-.974-1.537-.543-.779-.845-1.147-.607-1.515z"], ["fill", "#545454", "d", "M56.347 24.07c.235-.362 1.174-.192 1.515.554.341.747.276 2.368.042 2.454-.619.191-.426-.705-.96-1.515-.533-.767-.831-1.13-.597-1.493z"], ["fill", "#5B5B5B", "d", "M56.365 24.088c.231-.357 1.157-.189 1.493.546.336.735.273 2.333.042 2.417-.609.189-.42-.694-.946-1.492-.526-.756-.82-1.114-.589-1.471z"], ["fill", "#636363", "d", "M56.383 24.106c.228-.352 1.139-.186 1.47.539.332.725.269 2.298.041 2.381-.6.187-.413-.684-.931-1.47-.518-.746-.808-1.098-.58-1.45z"], ["fill", "#6B6B6B", "d", "M56.4 24.124c.224-.347 1.122-.183 1.448.53.326.714.265 2.263.041 2.345-.591.184-.408-.673-.918-1.447-.51-.735-.795-1.082-.571-1.428z"], ["fill", "#727272", "d", "M56.417 24.141c.221-.341 1.104-.181 1.425.522.321.703.261 2.229.04 2.308-.582.181-.401-.663-.903-1.425-.502-.722-.783-1.064-.562-1.405z"], ["fill", "#7A7A7A", "d", "M56.434 24.159c.218-.336 1.087-.178 1.403.514.316.692.256 2.193.04 2.272-.574.178-.395-.653-.889-1.403-.494-.711-.771-1.047-.554-1.383z"], ["fill", "#828282", "d", "M56.452 24.177c.213-.331 1.07-.175 1.38.505.312.681.252 2.158.039 2.236-.564.175-.388-.642-.875-1.38-.486-.699-.758-1.031-.544-1.361z"], ["fill", "#898989", "d", "M56.47 24.194c.21-.325 1.053-.172 1.358.498.307.669.25 2.124.039 2.201-.555.172-.383-.632-.861-1.358-.479-.69-.746-1.015-.536-1.341z"], ["fill", "#919191", "d", "M56.487 24.212c.207-.32 1.035-.169 1.335.49.301.658.246 2.088.038 2.164-.546.17-.376-.621-.846-1.335-.471-.678-.734-.999-.527-1.319z"], ["fill", "#999", "d", "M56.504 24.23c.204-.314 1.018-.167 1.314.481.295.647.239 2.054.036 2.128-.536.167-.369-.611-.832-1.314-.462-.666-.721-.98-.518-1.295z"], ["fill", "#666", "d", "M72.056 32.391c3.487-.372 4.719-1.72 5.347-4.068.558-2.092.582-4.417-.976-7.137-1.465-2.603-2.301-3.022-4.417-3.185-3.254-.278-4.789 1.999-5.51 3.626-.767 1.767-.604 1.511-.558 3.743.047 2.348 1.37 3.002 2.185 4.467.813 1.442 3.534 2.577 3.929 2.554z"], ["fill", "#6D6D6D", "d", "M72.058 32.377c3.474-.365 4.719-1.729 5.332-4.058.549-2.106.576-4.419-.969-7.075-1.432-2.517-2.272-2.932-4.363-3.094-3.244-.278-4.824 1.896-5.547 3.511-.744 1.705-.606 1.523-.557 3.726.052 2.346 1.378 2.978 2.191 4.442.813 1.446 3.518 2.572 3.913 2.548z"], ["fill", "#757575", "d", "M72.059 32.364c3.461-.358 4.721-1.737 5.318-4.048.541-2.121.572-4.42-.962-7.013-1.398-2.431-2.243-2.842-4.308-3.002-3.235-.277-4.86 1.792-5.585 3.395-.719 1.643-.608 1.536-.556 3.708.057 2.346 1.385 2.953 2.196 4.419.813 1.449 3.503 2.565 3.897 2.541z"], ["fill", "#7C7C7C", "d", "M72.061 32.351c3.447-.352 4.721-1.745 5.303-4.038.532-2.136.567-4.423-.955-6.951-1.365-2.345-2.213-2.751-4.254-2.911-3.224-.275-4.894 1.69-5.622 3.28-.697 1.581-.611 1.548-.555 3.691.062 2.344 1.391 2.929 2.202 4.395.813 1.451 3.486 2.558 3.881 2.534z"], ["fill", "#848484", "d", "M72.063 32.337c3.434-.345 4.721-1.753 5.287-4.027.524-2.151.563-4.425-.947-6.889-1.333-2.259-2.186-2.661-4.201-2.819-3.214-.275-4.929 1.587-5.66 3.164-.672 1.518-.612 1.56-.554 3.674.068 2.343 1.399 2.904 2.209 4.37.815 1.455 3.471 2.552 3.866 2.527z"], ["fill", "#8C8C8C", "d", "M72.065 32.324c3.42-.338 4.721-1.762 5.272-4.018.516-2.165.558-4.426-.94-6.827-1.299-2.172-2.156-2.571-4.146-2.727-3.205-.273-4.964 1.484-5.697 3.048-.649 1.457-.615 1.573-.553 3.658.073 2.341 1.406 2.879 2.214 4.346.813 1.458 3.455 2.545 3.85 2.52z"], ["fill", "#939393", "d", "M72.066 32.311c3.407-.332 4.724-1.77 5.258-4.008.507-2.179.553-4.428-.934-6.765-1.266-2.086-2.125-2.48-4.09-2.636-3.194-.273-5 1.381-5.736 2.933-.625 1.394-.616 1.585-.552 3.64.078 2.34 1.413 2.855 2.221 4.322.813 1.461 3.439 2.538 3.833 2.514z"], ["fill", "#9B9B9B", "d", "M72.068 32.297c3.393-.326 4.723-1.778 5.243-3.998.498-2.194.547-4.43-.926-6.704-1.233-2-2.098-2.39-4.038-2.544-3.184-.271-5.034 1.277-5.773 2.817-.602 1.333-.619 1.598-.551 3.624.083 2.339 1.42 2.831 2.226 4.299.815 1.464 3.424 2.532 3.819 2.506z"], ["fill", "#A3A3A3", "d", "M72.069 32.284c3.381-.318 4.724-1.787 5.23-3.988.489-2.209.542-4.432-.921-6.641-1.2-1.914-2.068-2.301-3.982-2.453-3.174-.271-5.069 1.174-5.811 2.702-.579 1.269-.621 1.61-.551 3.606.089 2.337 1.427 2.805 2.233 4.274.815 1.468 3.408 2.525 3.802 2.5z"], ["fill", "#aaa", "d", "M72.072 32.27c3.366-.312 4.724-1.795 5.213-3.978.481-2.224.538-4.434-.912-6.58-1.167-1.828-2.04-2.209-3.929-2.361-3.164-.27-5.104 1.071-5.848 2.586-.555 1.208-.623 1.622-.549 3.589.093 2.336 1.433 2.781 2.239 4.25.814 1.473 3.39 2.52 3.786 2.494z"], ["fill", "#B2B2B2", "d", "M72.073 32.257c3.353-.305 4.725-1.803 5.199-3.967.472-2.238.533-4.436-.906-6.519-1.134-1.741-2.01-2.12-3.874-2.269-3.153-.269-5.138.968-5.886 2.47-.531 1.146-.625 1.635-.548 3.572.099 2.335 1.441 2.756 2.246 4.226.813 1.475 3.374 2.513 3.769 2.487z"], ["fill", "#BABABA", "d", "M72.075 32.243c3.34-.298 4.726-1.811 5.184-3.958.464-2.252.529-4.438-.898-6.456-1.101-1.656-1.981-2.03-3.82-2.178-3.144-.268-5.173.865-5.923 2.354-.507 1.084-.627 1.648-.547 3.555.104 2.334 1.448 2.732 2.251 4.202.813 1.48 3.358 2.508 3.753 2.481z"], ["fill", "#C1C1C1", "d", "M72.076 32.231c3.327-.292 4.727-1.82 5.17-3.948.455-2.268.524-4.439-.891-6.395-1.068-1.569-1.952-1.939-3.766-2.086-3.133-.267-5.21.761-5.962 2.239-.483 1.021-.627 1.66-.545 3.538.109 2.332 1.455 2.708 2.257 4.177.814 1.482 3.343 2.501 3.737 2.475z"], ["fill", "#C9C9C9", "d", "M72.078 32.217c3.313-.285 4.727-1.829 5.155-3.938.446-2.282.518-4.441-.884-6.332-1.035-1.483-1.922-1.849-3.711-1.995-3.124-.266-5.244.659-6 2.124-.46.959-.631 1.672-.545 3.521.115 2.331 1.461 2.682 2.263 4.153.814 1.485 3.327 2.494 3.722 2.467z"], ["fill", "#D1D1D1", "d", "M72.079 32.203c3.3-.278 4.728-1.836 5.141-3.928.438-2.296.513-4.443-.877-6.27-1.002-1.396-1.893-1.759-3.657-1.903-3.114-.265-5.279.555-6.037 2.008-.437.897-.633 1.685-.544 3.504.119 2.329 1.469 2.658 2.27 4.129.813 1.489 3.31 2.488 3.704 2.46z"], ["fill", "#D8D8D8", "d", "M72.081 32.19c3.286-.272 4.728-1.845 5.126-3.918.429-2.311.509-4.445-.87-6.208-.969-1.311-1.864-1.668-3.604-1.812-3.103-.263-5.314.453-6.074 1.893-.413.835-.634 1.697-.543 3.487.125 2.328 1.476 2.633 2.276 4.105.814 1.492 3.295 2.481 3.689 2.453z"], ["fill", "#E0E0E0", "d", "M72.083 32.176c3.273-.264 4.729-1.853 5.111-3.907.42-2.326.504-4.447-.863-6.147-.936-1.224-1.835-1.578-3.548-1.72-3.094-.262-5.349.349-6.112 1.776-.389.773-.637 1.709-.542 3.47.13 2.327 1.482 2.609 2.281 4.082.814 1.495 3.279 2.475 3.673 2.446z"], ["fill", "#E8E8E8", "d", "M72.085 32.164c3.259-.259 4.729-1.862 5.097-3.897.411-2.341.498-4.449-.856-6.084-.903-1.138-1.805-1.488-3.495-1.628-3.083-.262-5.384.246-6.149 1.661-.366.711-.639 1.722-.541 3.453.135 2.325 1.489 2.583 2.287 4.057.814 1.495 3.262 2.465 3.657 2.438z"], ["fill", "#EFEFEF", "d", "M72.086 32.149c3.247-.251 4.73-1.87 5.082-3.887.404-2.355.495-4.451-.848-6.022-.87-1.052-1.776-1.398-3.441-1.538-3.072-.26-5.418.143-6.187 1.545-.342.649-.641 1.734-.54 3.436.141 2.324 1.497 2.56 2.294 4.033.813 1.502 3.246 2.463 3.64 2.433z"], ["fill", "#F7F7F7", "d", "M72.088 32.136c3.233-.244 4.731-1.878 5.067-3.877.395-2.369.49-4.453-.841-5.96-.837-.965-1.748-1.308-3.386-1.445-3.062-.26-5.455.04-6.225 1.429-.318.587-.642 1.748-.539 3.419.146 2.323 1.504 2.535 2.3 4.009.813 1.504 3.23 2.455 3.624 2.425z"], ["fill", "#fff", "d", "M72.089 32.123c3.221-.238 4.732-1.887 5.053-3.868.386-2.384.485-4.455-.834-5.898-.803-.879-1.718-1.218-3.332-1.354-3.053-.258-5.488-.062-6.262 1.314-.295.524-.645 1.759-.538 3.402.151 2.321 1.511 2.51 2.306 3.985.813 1.507 3.213 2.448 3.607 2.419z"], ["d", "M71.778 22.534c1.743 0 2.766 1.558 3.114 3.557.14.907-.07 1.953-.627 2.674-.628.836-1.744 1.348-2.649 1.348-.86 0-1.837.14-2.348-.558-.511-.72-.628-2.325-.628-3.464 0-1.278.373-2.185 1.023-2.906.487-.535 1.37-.651 2.115-.651zM71.889 23.252c.316-.211.843 0 1.45.685.658.738.948 1.317.158 1.739-.606.316-.79-.633-1.16-1.028-.579-.632-1.08-.975-.448-1.396z"], ["fill", "#070707", "d", "M71.901 23.271c.311-.209.832 0 1.428.675.648.727.925 1.298.156 1.712-.593.316-.776-.623-1.139-1.012-.57-.622-1.063-.957-.445-1.375z"], ["fill", "#0F0F0F", "d", "M71.914 23.29c.303-.209.818 0 1.407.665.637.715.901 1.278.152 1.687-.581.314-.761-.614-1.118-.997-.56-.612-1.047-.941-.441-1.355z"], ["fill", "#161616", "d", "M71.927 23.308c.296-.207.806 0 1.385.655.629.705.878 1.258.151 1.661-.568.314-.748-.604-1.097-.981-.554-.601-1.032-.924-.439-1.335z"], ["fill", "#1E1E1E", "d", "M71.94 23.327c.291-.206.793 0 1.363.645.62.693.855 1.239.148 1.635-.555.313-.732-.595-1.076-.966-.544-.591-1.014-.906-.435-1.314z"], ["fill", "#262626", "d", "M71.953 23.346c.283-.204.78 0 1.341.634.61.684.833 1.219.147 1.609-.543.312-.719-.584-1.055-.951-.536-.579-.999-.887-.433-1.292z"], ["fill", "#2D2D2D", "d", "M71.966 23.365c.277-.203.769 0 1.32.624.6.672.808 1.2.144 1.584-.53.31-.704-.576-1.034-.936-.528-.57-.984-.871-.43-1.272z"], ["fill", "#353535", "d", "M71.979 23.384c.271-.202.755 0 1.298.614.589.661.785 1.18.142 1.558-.517.309-.688-.567-1.013-.921-.518-.56-.968-.854-.427-1.251z"], ["fill", "#3D3D3D", "d", "M71.992 23.403c.264-.201.743 0 1.276.603.581.651.763 1.162.14 1.533-.504.309-.674-.557-.992-.905-.511-.55-.952-.837-.424-1.231z"], ["fill", "#444", "d", "M72.004 23.422c.258-.199.731 0 1.256.594.571.639.738 1.141.137 1.506-.492.308-.66-.548-.971-.89-.502-.539-.936-.819-.422-1.21z"], ["fill", "#4C4C4C", "d", "M72.017 23.441c.251-.198.719 0 1.234.583.561.628.716 1.122.135 1.481-.479.306-.646-.539-.95-.875-.494-.529-.92-.802-.419-1.189z"], ["fill", "#545454", "d", "M72.03 23.46c.245-.197.706 0 1.213.573.55.617.691 1.103.132 1.455-.466.305-.631-.529-.929-.86-.485-.518-.904-.785-.416-1.168z"], ["fill", "#5B5B5B", "d", "M72.043 23.479c.238-.196.694 0 1.192.563.541.606.667 1.083.129 1.429-.454.305-.617-.52-.908-.844-.477-.509-.888-.768-.413-1.148z"], ["fill", "#636363", "d", "M72.056 23.498c.231-.195.681 0 1.169.553.532.595.646 1.063.128 1.404-.44.303-.602-.511-.887-.83-.468-.498-.872-.751-.41-1.127z"], ["fill", "#6B6B6B", "d", "M72.069 23.517c.224-.193.668 0 1.148.542.521.585.622 1.044.125 1.378-.428.303-.586-.501-.866-.814-.46-.488-.856-.733-.407-1.106z"], ["fill", "#727272", "d", "M72.082 23.535c.218-.191.656 0 1.127.533.512.574.599 1.024.123 1.352-.416.302-.573-.492-.846-.798-.451-.478-.84-.717-.404-1.087z"], ["fill", "#7A7A7A", "d", "M72.095 23.555c.211-.19.643 0 1.104.522.502.563.576 1.004.121 1.326-.403.301-.559-.482-.825-.783-.441-.468-.823-.7-.4-1.065z"], ["fill", "#828282", "d", "M72.108 23.574c.205-.189.63 0 1.083.512.493.551.552.985.119 1.299-.39.3-.544-.472-.804-.767-.434-.457-.808-.682-.398-1.044z"], ["fill", "#898989", "d", "M72.121 23.592c.198-.188.618 0 1.062.502.482.541.528.965.116 1.274-.378.299-.53-.463-.784-.752-.425-.447-.792-.664-.394-1.024z"], ["fill", "#919191", "d", "M72.133 23.611c.193-.187.606 0 1.041.492.473.53.505.946.114 1.249-.364.298-.515-.454-.761-.737-.418-.437-.777-.648-.394-1.004z"], ["fill", "#999", "d", "M72.147 23.631c.185-.186.592 0 1.018.481.464.519.482.926.112 1.223-.353.297-.501-.444-.742-.722-.407-.426-.759-.631-.388-.982z"], ["d", "M63.141 24.293c.546-.211.972-.223 1.817.334 1.022.674.551 1.694-.251 1.485-.693-.179-.78-.22-1.417-.351-1.002-.207-1.175-1.071-.149-1.468z"], ["fill", "#050505", "d", "M63.162 24.335c.536-.204.96-.212 1.793.331.99.648.534 1.618-.26 1.415-.688-.177-.757-.212-1.383-.34-.986-.205-1.157-1.025-.15-1.406z"], ["fill", "#0A0A0A", "d", "M63.184 24.376c.524-.195.947-.201 1.77.328.957.623.517 1.543-.269 1.343-.684-.174-.733-.203-1.349-.329-.971-.2-1.14-.977-.152-1.342z"], ["fill", "#0F0F0F", "d", "M63.205 24.417c.512-.187.934-.189 1.746.324.924.598.5 1.468-.277 1.271-.679-.171-.71-.195-1.315-.317-.956-.194-1.122-.928-.154-1.278z"], ["fill", "#141414", "d", "M63.226 24.457c.501-.178.922-.178 1.721.321.893.572.484 1.393-.284 1.2-.676-.168-.688-.187-1.281-.306-.941-.19-1.106-.879-.156-1.215z"], ["fill", "#191919", "d", "M63.247 24.499c.491-.171.91-.168 1.697.317.86.546.468 1.317-.292 1.129-.671-.166-.666-.179-1.247-.295-.926-.186-1.088-.831-.158-1.151z"], ["fill", "#1E1E1E", "d", "M63.269 24.539c.478-.163.896-.156 1.672.314.828.521.451 1.242-.299 1.058-.667-.163-.643-.171-1.213-.285-.912-.179-1.072-.782-.16-1.087z"], ["fill", "#232323", "d", "M63.29 24.58c.467-.154.884-.145 1.649.312.795.496.434 1.167-.308.986-.664-.16-.62-.163-1.18-.273-.896-.176-1.053-.735-.161-1.025z"], ["fill", "#282828", "d", "M63.311 24.621c.456-.146.872-.135 1.625.308.762.47.417 1.091-.316.916-.659-.157-.596-.155-1.145-.263-.882-.171-1.036-.686-.164-.961z"], ["fill", "#2D2D2D", "d", "M63.332 24.662c.445-.139.86-.124 1.602.304.731.445.401 1.016-.325.843-.654-.154-.572-.146-1.11-.25-.867-.165-1.02-.638-.167-.897z"], ["fill", "#333", "d", "M63.354 24.703c.433-.13.847-.112 1.577.301.698.418.384.94-.333.772-.65-.152-.55-.138-1.077-.24-.852-.16-1.001-.589-.167-.833z"], ["fill", "#383838", "d", "M63.375 24.743c.422-.122.834-.101 1.553.298.667.394.368.865-.34.701-.646-.148-.527-.13-1.043-.229-.838-.156-.984-.54-.17-.77z"], ["fill", "#3D3D3D", "d", "M63.396 24.784c.411-.113.822-.09 1.53.295.633.368.352.791-.349.63-.642-.146-.504-.122-1.008-.218-.824-.152-.967-.492-.173-.707z"], ["fill", "#424242", "d", "M63.418 24.826c.399-.106.81-.08 1.505.291.601.343.334.715-.357.558-.638-.143-.481-.114-.974-.207-.809-.146-.951-.444-.174-.642z"], ["fill", "#474747", "d", "M63.439 24.866c.388-.098.796-.068 1.481.288.569.317.318.64-.365.487-.634-.14-.457-.105-.94-.196-.794-.141-.933-.395-.176-.579z"], ["fill", "#4C4C4C", "d", "M63.46 24.908c.377-.089.785-.057 1.457.284.536.292.302.564-.373.416-.629-.138-.434-.097-.905-.185-.78-.136-.916-.347-.179-.515z"], ["fill", "#515151", "d", "M63.482 24.948c.365-.081.771-.046 1.432.281.504.266.285.489-.381.345-.625-.135-.411-.089-.871-.174-.764-.131-.898-.298-.18-.452z"], ["fill", "#565656", "d", "M63.503 24.989c.354-.073.758-.035 1.408.278.472.241.269.414-.389.273-.621-.132-.388-.081-.837-.162-.749-.127-.881-.251-.182-.389z"], ["fill", "#5B5B5B", "d", "M63.524 25.03c.343-.065.747-.023 1.385.275.438.215.25.338-.398.202-.617-.129-.364-.073-.803-.151-.734-.123-.863-.203-.184-.326z"], ["fill", "#606060", "d", "M63.545 25.071c.332-.057.734-.013 1.361.271.407.189.235.263-.406.13-.612-.126-.341-.064-.769-.14-.719-.117-.846-.153-.186-.261z"], ["fill", "#666", "d", "M63.567 25.111c.32-.049.72-.001 1.336.268.375.164.219.188-.414.059-.607-.124-.318-.056-.734-.129-.705-.111-.829-.104-.188-.198zM61.363 43.13c-3.022.117-7.811-8.345-7.927-4.834-.093 2.975.07 2.929.07 5.811 0 1.93-.883 2.069-2.79 4.975-.977 1.535-1.743 3.185-2.348 4.858-.372 1-.72 2.046-1 3.069l-.441 1.557c-.953 3.51-4.347 7.835-5.137 11.345-.792 3.487-1.72 5.718-1.604 10.391.117 4.673.163 3.324 1.581 4.487 1.395 1.163 2.836 2.255 5.044 4.208 2.325 2.022 7.16 5.556 7.811 6.648.697 1.116.674 3.627.255 4.44-.418.79-4.068 1.232-4.045 1.232-.023 0 3.185 4.416 3.813 5.043.604.604 3.208 3.511 13.808 1.535 5.975-1.116 10.6-4.463 13.948-7.695 4.323-4.208 2.138-5.416 2.696-7.532.814-3.045 3.464-4.184 4.068-7.625.07-.488.232-.86.674-1.58.674-1.023.512-3.046.512-4.905 0-4.835-.559-9.763-1.674-13.389-1.023-3.395-2.649-5.765-4.045-8.834-2.789-6.114-2.649-8.857-5.137-12.762-2.836-4.51-1.441-7.508-5.207-7.323-4.696.255-8.485 6.694-12.925 6.88z"], ["fill", "#6D6D6D", "d", "M61.357 43.481c-2.996.114-7.666-8.237-7.827-4.901-.102 2.827.032 2.802.01 5.568-.049 1.895-.954 2.143-2.818 4.998-.972 1.538-1.703 3.168-2.257 4.804-.313 1.05-.504 2.073-.785 3.075-.135.53-.484 1.029-.706 1.628-1.051 3.481-4.374 7.807-5.153 11.261-.796 3.49-1.734 5.713-1.602 10.377.118 4.52.127 3.286 1.541 4.46 1.383 1.168 2.854 2.282 5.056 4.23 2.319 2.017 7.18 5.559 7.827 6.647.694 1.112.688 3.654.273 4.463-.416.787-4.062 1.251-4.039 1.251-.023 0 3.168 4.38 3.796 5.007.604.604 3.196 3.49 13.779 1.519 5.98-1.115 10.694-4.44 13.908-7.702 4.128-4.12 1.972-5.415 2.527-7.519.811-3.041 3.64-4.186 4.243-7.621.07-.487.243-.857.683-1.575.676-1.034.504-3.05.511-4.903.021-4.852-.551-9.762-1.667-13.377-1.023-3.384-2.648-5.752-4.04-8.816-2.785-6.104-2.654-8.852-5.146-12.745-2.771-4.395-1.485-7.291-5.169-7.1-4.637.269-8.512 6.787-12.945 6.971z"], ["fill", "#757575", "d", "M61.351 43.831c-2.971.111-7.522-8.128-7.726-4.967-.112 2.678-.006 2.675-.051 5.325-.097 1.861-1.023 2.217-2.845 5.022-.969 1.542-1.662 3.151-2.167 4.748-.253 1.101-.288 2.101-.57 3.083-.152.549-.641 1.012-.969 1.698-1.147 3.451-4.398 7.781-5.169 11.178-.801 3.493-1.747 5.708-1.599 10.362.12 4.368.092 3.248 1.501 4.437 1.37 1.172 2.871 2.31 5.069 4.252 2.313 2.012 7.199 5.561 7.844 6.646.691 1.108.701 3.681.288 4.486-.41.784-4.054 1.27-4.03 1.27-.023 0 3.153 4.343 3.779 4.97.603.603 3.186 3.469 13.75 1.502 5.988-1.115 10.789-4.417 13.869-7.709 3.935-4.034 1.805-5.415 2.357-7.509.809-3.034 3.818-4.185 4.419-7.615.069-.484.254-.854.69-1.567.679-1.044.497-3.055.51-4.9.043-4.868-.543-9.76-1.658-13.365-1.025-3.375-2.647-5.74-4.037-8.798-2.779-6.095-2.657-8.846-5.15-12.728-2.708-4.28-1.53-7.074-5.131-6.877-4.588.277-8.548 6.875-12.974 7.056z"], ["fill", "#7C7C7C", "d", "M61.346 44.182c-2.946.108-7.378-8.02-7.627-5.033-.119 2.529-.042 2.548-.11 5.083-.146 1.827-1.094 2.291-2.873 5.045-.965 1.545-1.622 3.134-2.078 4.693-.193 1.15-.07 2.128-.354 3.089-.17.567-.799.995-1.233 1.769-1.245 3.421-4.424 7.754-5.185 11.094-.807 3.496-1.76 5.702-1.598 10.349.123 4.216.057 3.209 1.462 4.41 1.359 1.178 2.89 2.338 5.083 4.276 2.307 2.007 7.218 5.563 7.86 6.645.688 1.104.715 3.71.305 4.51-.406.78-4.047 1.288-4.024 1.288-.023 0 3.137 4.307 3.762 4.931.603.603 3.174 3.449 13.721 1.488 5.994-1.115 10.882-4.394 13.83-7.717 3.74-3.946 1.638-5.415 2.188-7.498.806-3.029 3.996-4.184 4.594-7.61.069-.483.265-.85.698-1.561.681-1.057.489-3.061.509-4.899.065-4.883-.535-9.757-1.649-13.352-1.025-3.366-2.646-5.728-4.032-8.78-2.774-6.085-2.663-8.841-5.156-12.71-2.646-4.166-1.575-6.857-5.095-6.655-4.534.289-8.58 6.966-12.998 7.145z"], ["fill", "#848484", "d", "M61.34 44.532c-2.919.107-7.234-7.911-7.526-5.099-.128 2.381-.08 2.421-.17 4.84-.194 1.792-1.163 2.365-2.9 5.069-.962 1.549-1.581 3.118-1.987 4.638-.134 1.202.147 2.156-.14 3.097-.188.586-.957.977-1.498 1.839-1.341 3.391-4.45 7.728-5.199 11.011-.813 3.5-1.774 5.696-1.596 10.334.125 4.064.022 3.17 1.423 4.385 1.347 1.184 2.907 2.365 5.095 4.298 2.302 2.002 7.238 5.566 7.876 6.643.685 1.101.729 3.738.322 4.534-.403.777-4.042 1.307-4.019 1.307-.023 0 3.122 4.271 3.746 4.895.601.601 3.164 3.427 13.692 1.472 6-1.114 10.977-4.372 13.791-7.725 3.544-3.859 1.471-5.414 2.017-7.486.805-3.025 4.173-4.185 4.77-7.606.07-.481.276-.847.707-1.554.683-1.067.481-3.065.509-4.897.086-4.898-.529-9.755-1.643-13.339-1.027-3.357-2.645-5.715-4.028-8.763-2.769-6.076-2.667-8.835-5.163-12.692-2.581-4.051-1.619-6.64-5.057-6.432-4.479.298-8.61 7.055-13.022 7.231z"], ["fill", "#8C8C8C", "d", "M61.335 44.882c-2.894.104-7.091-7.802-7.427-5.164-.138 2.232-.118 2.293-.23 4.596-.242 1.758-1.233 2.439-2.929 5.094-.958 1.552-1.539 3.101-1.896 4.583-.076 1.252.363 2.184.075 3.104-.206.604-1.114.959-1.761 1.909-1.438 3.362-4.476 7.702-5.215 10.928-.818 3.502-1.787 5.69-1.593 10.319.127 3.912-.014 3.132 1.383 4.36 1.334 1.188 2.924 2.392 5.105 4.32 2.298 1.998 7.259 5.569 7.894 6.643.681 1.097.742 3.765.338 4.557-.398.773-4.035 1.325-4.012 1.325-.023 0 3.106 4.234 3.73 4.857.601.6 3.153 3.407 13.664 1.456 6.007-1.113 11.07-4.348 13.75-7.732 3.35-3.772 1.305-5.413 1.847-7.475.802-3.019 4.35-4.184 4.945-7.601.069-.479.288-.843.714-1.547.687-1.078.474-3.069.508-4.894.107-4.915-.52-9.753-1.635-13.327-1.027-3.349-2.643-5.703-4.022-8.745-2.765-6.066-2.671-8.831-5.17-12.675-2.517-3.937-1.663-6.423-5.019-6.21-4.425.31-8.64 7.146-13.044 7.319z"], ["fill", "#939393", "d", "M61.329 45.232c-2.869.102-6.947-7.694-7.326-5.23-.147 2.083-.155 2.166-.291 4.353-.292 1.724-1.304 2.513-2.957 5.117-.955 1.556-1.499 3.084-1.806 4.527-.016 1.303.581 2.212.291 3.111-.224.623-1.272.942-2.025 1.979-1.536 3.332-4.501 7.675-5.231 10.844-.825 3.505-1.801 5.685-1.591 10.306.128 3.759-.049 3.094 1.343 4.334 1.322 1.193 2.942 2.419 5.119 4.343 2.292 1.992 7.277 5.571 7.91 6.641.678 1.094.756 3.793.355 4.581-.396.771-4.029 1.344-4.005 1.344-.023 0 3.09 4.197 3.712 4.82.6.599 3.141 3.386 13.635 1.44 6.013-1.113 11.164-4.325 13.711-7.74 3.155-3.685 1.137-5.413 1.676-7.463.8-3.013 4.528-4.184 5.121-7.596.069-.478.298-.84.722-1.542.689-1.089.467-3.074.507-4.892.128-4.931-.512-9.751-1.626-13.314-1.028-3.339-2.643-5.69-4.019-8.727-2.759-6.057-2.675-8.825-5.176-12.658-2.454-3.821-1.708-6.206-4.981-5.987-4.371.323-8.671 7.239-13.068 7.409z"], ["fill", "#9B9B9B", "d", "M61.323 45.583c-2.842.1-6.802-7.585-7.226-5.295-.156 1.935-.192 2.039-.351 4.11-.34 1.689-1.373 2.587-2.984 5.14-.952 1.56-1.458 3.068-1.716 4.473.044 1.354.798 2.239.506 3.118-.242.641-1.43.925-2.289 2.049-1.633 3.303-4.527 7.648-5.247 10.761-.83 3.509-1.814 5.679-1.589 10.292.131 3.607-.083 3.056 1.305 4.309 1.31 1.199 2.959 2.447 5.131 4.365 2.287 1.988 7.297 5.575 7.926 6.642.676 1.088.771 3.82.372 4.602-.391.768-4.021 1.363-3.999 1.363-.023 0 3.076 4.161 3.697 4.783.599.598 3.129 3.365 13.605 1.424 6.019-1.113 11.258-4.302 13.671-7.748 2.962-3.598.971-5.412 1.508-7.452.798-3.008 4.705-4.185 5.295-7.592.07-.475.31-.835.731-1.533.692-1.101.459-3.08.507-4.89.149-4.948-.506-9.749-1.619-13.302-1.029-3.33-2.641-5.678-4.015-8.709-2.754-6.047-2.68-8.819-5.184-12.64-2.389-3.707-1.751-5.988-4.943-5.765-4.316.331-8.702 7.327-13.092 7.495z"], ["fill", "#A3A3A3", "d", "M61.318 45.933c-2.818.098-6.658-7.476-7.126-5.361-.165 1.786-.229 1.911-.41 3.867-.388 1.654-1.443 2.661-3.012 5.164-.948 1.563-1.418 3.051-1.625 4.417.102 1.405 1.014 2.267.719 3.125-.259.66-1.588.908-2.553 2.119-1.729 3.273-4.552 7.622-5.262 10.678-.836 3.512-1.828 5.674-1.586 10.278.134 3.454-.119 3.016 1.265 4.283 1.298 1.205 2.977 2.475 5.144 4.389 2.28 1.982 7.316 5.576 7.941 6.639.673 1.086.785 3.849.389 4.627-.387.763-4.015 1.381-3.992 1.381-.022 0 3.06 4.124 3.68 4.745.598.598 3.119 3.345 13.576 1.409 6.026-1.113 11.352-4.279 13.632-7.755 2.767-3.511.804-5.412 1.338-7.441.795-3.003 4.882-4.184 5.47-7.586.07-.474.32-.833.739-1.527.694-1.111.451-3.084.506-4.888.172-4.963-.498-9.747-1.61-13.289-1.029-3.32-2.639-5.666-4.01-8.691-2.75-6.038-2.684-8.814-5.189-12.623-2.326-3.592-1.796-5.771-4.906-5.542-4.264.342-8.736 7.416-13.118 7.582z"], ["fill", "#aaa", "d", "M61.312 46.283c-2.791.095-6.514-7.367-7.025-5.427l-.471 3.624c-.437 1.621-1.513 2.735-3.04 5.188-.944 1.566-1.376 3.034-1.536 4.361.162 1.456 1.231 2.295.936 3.133-.277.677-1.746.89-2.817 2.189-1.827 3.244-4.579 7.595-5.278 10.594-.841 3.515-1.841 5.668-1.585 10.263.136 3.303-.153 2.979 1.226 4.258 1.286 1.209 2.995 2.502 5.156 4.41 2.275 1.978 7.336 5.579 7.958 6.638.668 1.083.798 3.877.405 4.65-.383.76-4.008 1.4-3.985 1.4-.023 0 3.044 4.087 3.664 4.708.598.596 3.107 3.324 13.547 1.393 6.033-1.112 11.446-4.256 13.594-7.763 2.571-3.423.637-5.411 1.167-7.43.792-2.998 5.059-4.183 5.645-7.581.07-.472.332-.83.748-1.521.697-1.123.444-3.09.505-4.885.194-4.98-.49-9.746-1.603-13.276-1.03-3.312-2.638-5.654-4.005-8.674-2.745-6.028-2.689-8.809-5.197-12.605-2.262-3.478-1.84-5.555-4.868-5.32-4.209.356-8.765 7.511-13.141 7.673z"], ["fill", "#B2B2B2", "d", "M61.306 46.633c-2.766.092-6.37-7.259-6.925-5.493l-.531 3.381c-.486 1.586-1.584 2.809-3.068 5.211-.941 1.57-1.336 3.017-1.446 4.306.222 1.506 1.449 2.323 1.15 3.139-.295.697-1.904.874-3.081 2.26-1.924 3.213-4.604 7.569-5.294 10.51-.847 3.52-1.855 5.664-1.582 10.25.137 3.15-.189 2.94 1.186 4.233 1.274 1.215 3.013 2.529 5.168 4.433 2.271 1.972 7.356 5.581 7.976 6.637.665 1.077.812 3.904.421 4.672-.378.757-4.001 1.419-3.978 1.419-.023 0 3.029 4.052 3.647 4.67.596.597 3.097 3.304 13.518 1.378 6.04-1.112 11.54-4.233 13.554-7.77 2.376-3.336.47-5.411.997-7.418.791-2.992 5.237-4.184 5.822-7.578.069-.47.342-.825.755-1.514.699-1.132.436-3.094.504-4.883.216-4.996-.482-9.743-1.594-13.263-1.032-3.302-2.636-5.641-4.001-8.657-2.739-6.019-2.692-8.803-5.202-12.587-2.199-3.363-1.885-5.337-4.831-5.097-4.154.368-8.796 7.601-13.165 7.761z"], ["fill", "#BABABA", "d", "M61.302 46.983c-2.741.09-6.226-7.15-6.826-5.558l-.59 3.137c-.535 1.553-1.653 2.884-3.096 5.236-.936 1.573-1.294 3-1.354 4.25.279 1.558 1.665 2.351 1.365 3.147-.313.715-2.061.856-3.345 2.33-2.021 3.184-4.629 7.542-5.309 10.427-.854 3.521-1.868 5.657-1.58 10.234.14 2.998-.224 2.901 1.147 4.208 1.262 1.219 3.03 2.557 5.18 4.455 2.265 1.967 7.375 5.584 7.991 6.636.663 1.074.826 3.932.439 4.696-.375.753-3.995 1.438-3.972 1.438-.023 0 3.012 4.015 3.63 4.633.596.596 3.085 3.283 13.488 1.362 6.046-1.112 11.635-4.21 13.515-7.778 2.182-3.25.304-5.41.829-7.406.788-2.986 5.414-4.184 5.996-7.572.069-.469.353-.823.763-1.508.702-1.144.429-3.099.504-4.881.237-5.011-.475-9.741-1.585-13.25-1.033-3.293-2.636-5.628-3.997-8.639-2.735-6.009-2.697-8.797-5.21-12.57-2.134-3.248-1.929-5.12-4.793-4.875-4.103.378-8.831 7.691-13.19 7.848z"], ["fill", "#C1C1C1", "d", "M61.295 47.334c-2.714.088-6.081-7.042-6.725-5.624-.199 1.19-.379 1.403-.65 2.895-.584 1.518-1.724 2.958-3.124 5.26-.933 1.577-1.254 2.983-1.265 4.195.339 1.607 1.882 2.378 1.581 3.154-.332.733-2.22.839-3.609 2.4-2.118 3.154-4.656 7.516-5.324 10.344-.859 3.524-1.882 5.651-1.578 10.221.141 2.845-.26 2.862 1.106 4.182 1.25 1.225 3.048 2.584 5.193 4.479 2.258 1.962 7.395 5.586 8.007 6.634.659 1.07.84 3.96.455 4.719-.371.75-3.988 1.457-3.965 1.457-.023 0 2.997 3.979 3.615 4.596.594.595 3.074 3.263 13.459 1.346 6.052-1.111 11.729-4.187 13.475-7.786 1.987-3.161.137-5.409.658-7.395.787-2.982 5.591-4.183 6.172-7.567.069-.466.364-.818.772-1.5.704-1.155.421-3.104.503-4.878.257-5.028-.468-9.74-1.579-13.239-1.033-3.284-2.634-5.616-3.992-8.621-2.73-6-2.702-8.793-5.216-12.553-2.071-3.133-1.974-4.903-4.756-4.652-4.047.386-8.859 7.777-13.213 7.933z"], ["fill", "#C9C9C9", "d", "M61.29 47.684c-2.689.085-5.938-6.933-6.626-5.689-.209 1.041-.417 1.275-.71 2.651-.632 1.483-1.794 3.032-3.152 5.284-.929 1.58-1.212 2.966-1.174 4.14.399 1.658 2.1 2.406 1.796 3.162-.349.751-2.377.821-3.873 2.47-2.214 3.124-4.682 7.489-5.34 10.261-.864 3.528-1.896 5.646-1.576 10.206.144 2.693-.295 2.825 1.068 4.158 1.239 1.229 3.065 2.611 5.205 4.5 2.253 1.957 7.415 5.589 8.024 6.633.656 1.067.854 3.989.472 4.743-.367.747-3.981 1.475-3.959 1.475-.022 0 2.981 3.942 3.598 4.558.595.594 3.063 3.243 13.431 1.331 6.06-1.111 11.822-4.164 13.435-7.793 1.793-3.074-.03-5.408.489-7.384.785-2.976 5.768-4.183 6.347-7.562.069-.465.375-.816.779-1.495.707-1.166.414-3.108.503-4.876.279-5.043-.46-9.737-1.571-13.225-1.034-3.275-2.631-5.604-3.988-8.604-2.725-5.99-2.705-8.787-5.222-12.535-2.007-3.019-2.019-4.686-4.718-4.43-3.994.397-8.891 7.868-13.238 8.021z"], ["fill", "#D1D1D1", "d", "M61.285 48.035c-2.664.083-5.793-6.825-6.525-5.755-.218.893-.453 1.148-.771 2.408-.681 1.449-1.863 3.106-3.178 5.307-.927 1.584-1.173 2.95-1.085 4.085.458 1.708 2.316 2.434 2.011 3.167-.367.771-2.535.805-4.136 2.541-2.312 3.095-4.708 7.462-5.356 10.177-.87 3.532-1.909 5.641-1.574 10.192.146 2.541-.332 2.786 1.029 4.131 1.226 1.234 3.083 2.64 5.216 4.522 2.249 1.953 7.435 5.593 8.041 6.632.653 1.063.867 4.017.489 4.767-.364.744-3.975 1.493-3.952 1.493-.023 0 2.966 3.905 3.582 4.521.591.593 3.05 3.222 13.401 1.315 6.065-1.11 11.917-4.14 13.396-7.801 1.598-2.987-.197-5.408.317-7.372.783-2.972 5.946-4.183 6.523-7.558.069-.463.386-.812.788-1.487.708-1.177.406-3.114.502-4.875.3-5.059-.452-9.734-1.563-13.211-1.035-3.267-2.63-5.592-3.982-8.586-2.722-5.98-2.711-8.782-5.23-12.518-1.943-2.904-2.062-4.469-4.679-4.207-3.943.411-8.926 7.961-13.264 8.112z"], ["fill", "#D8D8D8", "d", "M61.279 48.385c-2.638.081-5.649-6.715-6.425-5.821-.227.743-.491 1.021-.831 2.165-.729 1.415-1.933 3.18-3.207 5.331-.922 1.588-1.131 2.933-.994 4.029.518 1.76 2.534 2.462 2.227 3.175-.385.789-2.693.788-4.401 2.611-2.409 3.065-4.733 7.436-5.372 10.093-.875 3.534-1.922 5.636-1.571 10.178.148 2.389-.366 2.748.989 4.106 1.213 1.241 3.1 2.667 5.229 4.546 2.243 1.947 7.455 5.594 8.057 6.631.65 1.059.881 4.043.505 4.789-.359.741-3.968 1.513-3.945 1.513-.023 0 2.95 3.868 3.564 4.483.592.593 3.041 3.201 13.372 1.299 6.072-1.109 12.011-4.117 13.357-7.808 1.403-2.9-.364-5.407.147-7.361.78-2.966 6.124-4.183 6.698-7.553.069-.462.397-.808.796-1.48.711-1.189.399-3.119.501-4.873.322-5.075-.445-9.733-1.555-13.2-1.036-3.257-2.63-5.58-3.979-8.568-2.715-5.972-2.714-8.777-5.235-12.5-1.879-2.79-2.108-4.251-4.644-3.985-3.883.422-8.951 8.052-13.283 8.2z"], ["fill", "#E0E0E0", "d", "M61.273 48.735c-2.612.078-5.505-6.606-6.325-5.886-.235.595-.529.893-.89 1.922-.778 1.381-2.004 3.253-3.235 5.354-.919 1.591-1.091 2.916-.904 3.974.577 1.811 2.75 2.49 2.441 3.183-.403.808-2.85.77-4.664 2.681-2.506 3.036-4.758 7.41-5.387 10.011-.882 3.537-1.936 5.63-1.569 10.164.15 2.237-.402 2.708.949 4.081 1.201 1.245 3.117 2.694 5.241 4.567 2.239 1.941 7.474 5.598 8.074 6.629.646 1.055.895 4.071.521 4.813-.354.737-3.96 1.531-3.938 1.531-.022 0 2.935 3.832 3.547 4.446.592.591 3.03 3.18 13.344 1.284 6.079-1.109 12.105-4.095 13.316-7.815 1.208-2.814-.531-5.407-.021-7.35.777-2.96 6.3-4.183 6.874-7.549.068-.459.408-.805.804-1.473.713-1.2.391-3.124.5-4.871.343-5.091-.437-9.73-1.548-13.187-1.036-3.247-2.627-5.566-3.974-8.55-2.71-5.962-2.719-8.771-5.242-12.483-1.815-2.674-2.152-4.034-4.604-3.762-3.831.432-8.986 8.14-13.31 8.286z"], ["fill", "#E8E8E8", "d", "M61.267 49.086c-2.586.075-5.361-6.499-6.224-5.953-.245.446-.567.766-.951 1.679-.826 1.346-2.073 3.328-3.262 5.378-.915 1.595-1.05 2.899-.813 3.919.636 1.861 2.967 2.517 2.655 3.19-.42.826-3.009.752-4.929 2.751-2.603 3.006-4.784 7.383-5.402 9.927-.888 3.542-1.95 5.624-1.567 10.15.152 2.084-.437 2.67.91 4.055 1.19 1.25 3.136 2.722 5.254 4.592 2.232 1.937 7.492 5.599 8.09 6.627.643 1.052.909 4.1.538 4.837-.35.733-3.954 1.549-3.931 1.549-.023 0 2.918 3.796 3.531 4.409.59.59 3.019 3.159 13.315 1.267 6.084-1.109 12.199-4.07 13.277-7.822 1.014-2.727-.697-5.406-.191-7.338.775-2.955 6.478-4.182 7.048-7.543.069-.457.419-.802.812-1.467.716-1.21.384-3.128.5-4.868.365-5.108-.43-9.729-1.539-13.175-1.038-3.238-2.626-5.554-3.97-8.532-2.706-5.953-2.723-8.766-5.249-12.465-1.751-2.561-2.196-3.817-4.567-3.539-3.778.44-9.017 8.228-13.335 8.372z"], ["fill", "#EFEFEF", "d", "M61.262 49.436c-2.562.073-5.217-6.39-6.125-6.019-.253.297-.604.639-1.011 1.436-.874 1.312-2.144 3.401-3.29 5.402-.911 1.598-1.009 2.882-.723 3.863.694 1.911 3.184 2.545 2.87 3.197-.438.844-3.167.735-5.192 2.821-2.7 2.977-4.809 7.356-5.417 9.844-.894 3.544-1.963 5.618-1.565 10.136.155 1.932-.472 2.633.87 4.03 1.178 1.255 3.153 2.749 5.266 4.613 2.228 1.932 7.513 5.603 8.107 6.627.64 1.047.922 4.127.555 4.86-.347.729-3.948 1.567-3.925 1.567-.023 0 2.903 3.758 3.515 4.371.59.59 3.008 3.139 13.285 1.252 6.092-1.108 12.293-4.047 13.239-7.831.819-2.639-.864-5.405-.361-7.326.773-2.95 6.655-4.183 7.224-7.539.069-.456.43-.798.82-1.461.719-1.221.376-3.133.499-4.865.386-5.124-.422-9.727-1.531-13.163-1.038-3.229-2.625-5.541-3.964-8.514-2.702-5.943-2.729-8.761-5.256-12.449-1.688-2.445-2.24-3.599-4.529-3.316-3.728.456-9.05 8.323-13.361 8.464z"], ["fill", "#F7F7F7", "d", "M61.257 49.786c-2.536.07-5.074-6.281-6.025-6.083-.262.148-.641.511-1.069 1.192-.924 1.278-2.215 3.476-3.319 5.426-.908 1.602-.968 2.865-.633 3.809.754 1.961 3.401 2.573 3.087 3.204-.457.863-3.325.718-5.457 2.891-2.797 2.947-4.836 7.33-5.434 9.761-.899 3.546-1.976 5.613-1.562 10.122.156 1.781-.507 2.593.831 4.004 1.165 1.262 3.17 2.777 5.279 4.635 2.222 1.927 7.532 5.605 8.124 6.626.635 1.044.935 4.155.571 4.883-.343.728-3.941 1.587-3.918 1.587-.023 0 2.887 3.722 3.498 4.333.59.588 2.997 3.118 13.257 1.237 6.099-1.109 12.387-4.025 13.199-7.839.625-2.551-1.032-5.404-.531-7.314.771-2.944 6.832-4.183 7.398-7.534.069-.453.441-.794.83-1.454.72-1.232.369-3.137.498-4.863.408-5.14-.415-9.725-1.523-13.149-1.039-3.22-2.624-5.53-3.961-8.497-2.695-5.934-2.732-8.756-5.262-12.431-1.624-2.331-2.284-3.383-4.492-3.095-3.675.464-9.084 8.411-13.386 8.549z"], ["fill", "#fff", "d", "M61.25 50.137c-2.51.068-4.93-6.173-5.924-6.15-.271 0-.678.385-1.131.95-.972 1.244-2.282 3.55-3.345 5.45-.905 1.605-.927 2.849-.543 3.753.813 2.012 3.618 2.601 3.301 3.211-.475.882-3.482.701-5.721 2.962-2.894 2.917-4.861 7.303-5.449 9.677-.905 3.55-1.99 5.607-1.561 10.107.159 1.628-.543 2.555.792 3.98 1.153 1.266 3.188 2.804 5.291 4.657 2.216 1.922 7.552 5.608 8.14 6.626.633 1.04.949 4.182.587 4.906-.339.723-3.934 1.605-3.912 1.605-.022 0 2.872 3.685 3.482 4.296.587.588 2.984 3.098 13.229 1.221 6.104-1.108 12.48-4.002 13.158-7.846.43-2.464-1.198-5.403-.7-7.303.768-2.939 7.009-4.183 7.574-7.53.068-.451.452-.791.837-1.446.723-1.244.361-3.143.497-4.862.43-5.155-.407-9.722-1.515-13.137-1.04-3.211-2.623-5.517-3.957-8.479-2.691-5.924-2.736-8.75-5.269-12.413-1.56-2.216-2.328-3.166-4.454-2.872-3.616.474-9.11 8.501-13.407 8.637z"], ["fill", "#995900", "d", "M62.967 27.183c1.697-.209 4.021.209 5.091 1 .999.745 1.696 1.14 2.603 1.441 3.045 1 7.044 1.465 6.858 4.208-.209 3.277-1.162 4.742-3.882 5.602-2.185.674-6.09 4.463-9.112 4.463-1.348 0-3.231.07-4.324-.325-1.046-.372-2.511-2.139-4.231-3.557-1.721-1.395-3.324-2.882-3.37-4.835-.07-2.068 1.278-2.743 3.185-4.394 1-.883 2.813-2.348 4.068-2.999 1.161-.581 1.906-.465 3.114-.604z"], ["fill", "#9E5F00", "d", "M63.003 27.214c1.687-.208 3.998.208 5.062.994.993.74 1.688 1.134 2.589 1.433 3.026.994 7.015 1.462 6.832 4.188-.208 3.258-1.186 4.708-3.888 5.561-2.171.669-6.06 4.387-9.063 4.404-1.359.01-3.204.076-4.29-.315-1.038-.369-2.498-2.134-4.207-3.542-1.708-1.385-3.312-2.833-3.331-4.767-.049-2.018 1.263-2.715 3.155-4.354.992-.875 2.775-2.358 4.024-3.014 1.149-.582 1.914-.449 3.117-.588z"], ["fill", "#A36400", "d", "M63.038 27.244c1.677-.207 3.975.207 5.032.988.988.736 1.677 1.128 2.574 1.425 3.008.988 6.986 1.46 6.805 4.169-.204 3.237-1.206 4.673-3.893 5.519-2.157.664-6.029 4.311-9.014 4.344-1.369.021-3.178.082-4.255-.305-1.03-.366-2.486-2.129-4.184-3.526-1.697-1.376-3.3-2.784-3.292-4.699-.03-1.969 1.248-2.689 3.126-4.316.984-.867 2.737-2.368 3.98-3.028 1.139-.584 1.926-.433 3.121-.571z"], ["fill", "#A86A00", "d", "M63.073 27.274c1.668-.206 3.953.206 5.004.982.982.731 1.667 1.123 2.559 1.417 2.99.982 6.959 1.458 6.779 4.15-.203 3.219-1.229 4.639-3.898 5.479-2.142.659-5.998 4.235-8.964 4.284-1.381.031-3.151.087-4.222-.295-1.022-.362-2.473-2.124-4.161-3.511-1.684-1.368-3.289-2.734-3.251-4.631-.01-1.919 1.232-2.662 3.097-4.278.976-.859 2.699-2.378 3.936-3.042 1.125-.585 1.933-.418 3.121-.555z"], ["fill", "#AD7000", "d", "M63.109 27.304c1.657-.204 3.929.205 4.974.977.976.727 1.659 1.117 2.543 1.408 2.971.977 6.931 1.456 6.753 4.131-.199 3.198-1.25 4.604-3.904 5.437-2.126.654-5.966 4.159-8.915 4.225-1.392.041-3.125.093-4.188-.285-1.014-.359-2.461-2.118-4.138-3.495-1.672-1.358-3.276-2.685-3.21-4.564.01-1.869 1.216-2.634 3.065-4.239.969-.851 2.663-2.389 3.893-3.058 1.116-.584 1.945-.401 3.127-.537z"], ["fill", "#B27600", "d", "M63.143 27.335c1.649-.204 3.907.203 4.945.971.971.722 1.647 1.111 2.529 1.399 2.953.97 6.903 1.453 6.727 4.112-.198 3.178-1.272 4.57-3.909 5.395-2.113.649-5.936 4.083-8.867 4.165-1.401.052-3.097.099-4.152-.275-1.006-.356-2.449-2.113-4.115-3.48-1.66-1.349-3.264-2.635-3.17-4.496.03-1.819 1.201-2.607 3.037-4.201.96-.842 2.624-2.398 3.848-3.071 1.103-.584 1.954-.384 3.127-.519z"], ["fill", "#B77B00", "d", "M63.18 27.364c1.639-.203 3.882.202 4.915.965.965.718 1.639 1.105 2.514 1.391 2.934.965 6.875 1.451 6.702 4.093-.196 3.158-1.296 4.535-3.916 5.354-2.097.645-5.905 4.007-8.816 4.105-1.413.062-3.07.104-4.119-.265-.998-.353-2.437-2.108-4.092-3.465-1.648-1.34-3.252-2.585-3.13-4.427.05-1.769 1.185-2.58 3.007-4.161.953-.835 2.586-2.409 3.804-3.087 1.09-.585 1.963-.368 3.131-.503z"], ["fill", "#BC8100", "d", "M63.214 27.395c1.629-.201 3.86.201 4.886.96.96.713 1.629 1.1 2.499 1.383 2.915.959 6.847 1.449 6.675 4.074-.194 3.138-1.316 4.5-3.92 5.312-2.083.64-5.874 3.931-8.768 4.046-1.423.072-3.044.11-4.085-.255-.99-.35-2.424-2.103-4.067-3.449-1.637-1.332-3.241-2.536-3.091-4.36.071-1.719 1.169-2.553 2.978-4.123.945-.826 2.549-2.419 3.76-3.101 1.079-.588 1.974-.354 3.133-.487z"], ["fill", "#C18700", "d", "M63.249 27.425c1.62-.2 3.837.2 4.857.954.954.709 1.62 1.095 2.484 1.375 2.897.954 6.819 1.446 6.649 4.055-.191 3.119-1.339 4.467-3.926 5.271-2.067.635-5.843 3.855-8.718 3.987-1.433.082-3.017.116-4.051-.245-.982-.347-2.411-2.098-4.043-3.435-1.625-1.322-3.229-2.486-3.052-4.292.09-1.668 1.155-2.526 2.948-4.083.937-.818 2.511-2.429 3.716-3.116 1.068-.589 1.984-.338 3.136-.471z"], ["fill", "#C68D00", "d", "M63.285 27.455c1.609-.198 3.813.198 4.828.948.947.706 1.609 1.09 2.468 1.367 2.879.947 6.79 1.444 6.625 4.036-.19 3.098-1.362 4.432-3.932 5.229-2.054.63-5.812 3.778-8.669 3.926-1.445.093-2.99.122-4.017-.234-.973-.344-2.399-2.093-4.021-3.419-1.613-1.314-3.217-2.438-3.011-4.224.11-1.619 1.138-2.5 2.918-4.046.929-.81 2.473-2.439 3.672-3.13 1.055-.589 1.993-.321 3.139-.453z"], ["fill", "#CC9200", "d", "M63.32 27.485c1.6-.197 3.79.197 4.798.942.943.701 1.6 1.083 2.455 1.358 2.859.942 6.761 1.442 6.596 4.018-.187 3.079-1.383 4.397-3.936 5.187-2.039.625-5.782 3.703-8.62 3.868-1.455.103-2.963.127-3.982-.225-.966-.34-2.387-2.088-3.999-3.404-1.601-1.304-3.206-2.387-2.971-4.156.129-1.569 1.123-2.471 2.888-4.006.922-.802 2.435-2.45 3.629-3.146 1.044-.589 2.003-.305 3.142-.436z"], ["fill", "#D19800", "d", "M63.356 27.515c1.589-.196 3.767.196 4.769.937.936.696 1.589 1.078 2.439 1.35 2.841.936 6.733 1.439 6.57 3.998-.184 3.06-1.405 4.363-3.942 5.146-2.024.62-5.75 3.626-8.57 3.807-1.466.114-2.936.134-3.948-.214-.957-.337-2.374-2.083-3.975-3.389-1.589-1.295-3.193-2.338-2.932-4.088.151-1.52 1.108-2.444 2.859-3.968.914-.793 2.398-2.459 3.584-3.16 1.034-.59 2.013-.288 3.146-.419z"], ["fill", "#D69E00", "d", "M63.391 27.545c1.581-.194 3.744.195 4.74.931.93.692 1.58 1.073 2.423 1.342 2.823.931 6.706 1.438 6.545 3.979-.183 3.04-1.427 4.329-3.948 5.105-2.01.615-5.719 3.55-8.52 3.748-1.478.124-2.91.14-3.915-.205-.949-.333-2.362-2.077-3.951-3.372-1.577-1.287-3.182-2.289-2.891-4.021.169-1.469 1.092-2.418 2.829-3.929.906-.785 2.36-2.47 3.541-3.174 1.02-.592 2.022-.274 3.147-.404z"], ["fill", "#DBA300", "d", "M63.427 27.575c1.57-.193 3.72.194 4.71.925.925.688 1.57 1.067 2.409 1.333 2.804.925 6.678 1.436 6.519 3.96-.181 3.02-1.45 4.294-3.953 5.063-1.995.61-5.689 3.474-8.471 3.688-1.488.134-2.883.145-3.88-.194-.941-.331-2.349-2.072-3.928-3.358-1.565-1.277-3.169-2.239-2.851-3.952.189-1.419 1.076-2.391 2.799-3.891.898-.777 2.322-2.48 3.497-3.189 1.007-.591 2.03-.256 3.149-.385z"], ["fill", "#E0A900", "d", "M63.462 27.606c1.561-.192 3.698.192 4.681.919.919.684 1.561 1.062 2.394 1.325 2.786.919 6.649 1.433 6.493 3.94-.179 3-1.472 4.26-3.958 5.021-1.981.606-5.657 3.399-8.422 3.629-1.499.145-2.856.151-3.846-.184-.933-.328-2.337-2.067-3.905-3.342-1.553-1.269-3.157-2.189-2.811-3.885.209-1.369 1.061-2.363 2.771-3.852.89-.769 2.283-2.49 3.452-3.204.995-.591 2.039-.24 3.151-.367z"], ["fill", "#E5AF00", "d", "M63.498 27.635c1.551-.191 3.674.191 4.651.914.913.68 1.551 1.056 2.379 1.317 2.767.913 6.62 1.431 6.467 3.921-.176 2.979-1.494 4.225-3.964 4.979-1.966.601-5.627 3.323-8.373 3.57-1.51.154-2.83.156-3.812-.174-.925-.324-2.325-2.062-3.882-3.327-1.54-1.259-3.145-2.14-2.77-3.816.229-1.319 1.044-2.336 2.739-3.813.882-.761 2.246-2.5 3.409-3.218.985-.593 2.051-.225 3.156-.353z"], ["fill", "#EAB500", "d", "M63.533 27.666c1.541-.189 3.651.19 4.623.908.908.675 1.541 1.05 2.364 1.309 2.748.907 6.592 1.428 6.44 3.903-.174 2.958-1.516 4.19-3.97 4.938-1.951.596-5.595 3.247-8.323 3.509-1.521.165-2.802.163-3.778-.164-.916-.321-2.312-2.057-3.857-3.312-1.53-1.25-3.134-2.091-2.732-3.749.249-1.269 1.03-2.309 2.711-3.775.875-.752 2.208-2.51 3.364-3.232.973-.594 2.06-.208 3.158-.335z"], ["fill", "#EFBA00", "d", "M63.569 27.695c1.531-.188 3.627.189 4.592.902.902.671 1.532 1.045 2.349 1.3 2.73.902 6.564 1.426 6.415 3.884-.172 2.939-1.539 4.156-3.976 4.896-1.936.591-5.563 3.17-8.273 3.45-1.532.175-2.776.168-3.744-.154-.909-.318-2.3-2.052-3.835-3.296-1.517-1.241-3.121-2.041-2.691-3.681.271-1.22 1.014-2.282 2.682-3.736.867-.745 2.171-2.521 3.321-3.248.96-.593 2.069-.191 3.16-.317z"], ["fill", "#F4C000", "d", "M63.603 27.726c1.521-.187 3.606.188 4.564.896.896.667 1.521 1.04 2.334 1.292 2.711.896 6.536 1.424 6.389 3.864-.168 2.919-1.56 4.122-3.981 4.855-1.921.586-5.533 3.095-8.224 3.391-1.542.186-2.75.174-3.71-.144-.9-.315-2.287-2.047-3.811-3.281-1.505-1.232-3.109-1.992-2.651-3.613.29-1.17.999-2.255 2.651-3.698.859-.736 2.133-2.531 3.276-3.262.95-.594 2.08-.175 3.163-.3z"], ["fill", "#F9C600", "d", "M63.639 27.755c1.512-.186 3.583.187 4.535.891.891.663 1.512 1.035 2.32 1.284 2.692.89 6.507 1.421 6.361 3.845-.167 2.9-1.582 4.088-3.985 4.814-1.907.581-5.503 3.018-8.175 3.331-1.553.196-2.722.18-3.675-.133-.893-.312-2.276-2.042-3.788-3.266-1.493-1.223-3.098-1.942-2.611-3.545.309-1.119.983-2.228 2.621-3.659.853-.729 2.095-2.542 3.233-3.277.936-.595 2.088-.16 3.164-.285z"], ["fill", "#fc0", "d", "M63.675 27.786c1.5-.185 3.559.186 4.504.885.885.658 1.502 1.029 2.304 1.275 2.674.884 6.48 1.42 6.337 3.826-.165 2.879-1.604 4.053-3.992 4.772-1.892.576-5.472 2.942-8.125 3.271-1.564.206-2.696.185-3.642-.124-.884-.309-2.263-2.037-3.764-3.25-1.482-1.214-3.086-1.893-2.572-3.477.33-1.07.967-2.201 2.592-3.621.843-.72 2.057-2.551 3.188-3.292.927-.594 2.1-.142 3.17-.265zM63.943 28.718c.327.674 1.163.767 1.721 1.069.535.303.837.372 1.046.256.465-.256.117-1.093-.349-1.395-.441-.302-2.604-.372-2.418.07z"], ["fill", "#F9C600", "d", "M63.99 28.725c.316.657 1.133.748 1.677 1.043.521.294.815.362 1.02.249.452-.249.113-1.065-.34-1.359-.432-.296-2.539-.364-2.357.067z"], ["fill", "#F4C000", "d", "M64.035 28.731c.309.64 1.103.729 1.633 1.016.508.287.794.353.993.243.442-.243.11-1.037-.331-1.324-.419-.287-2.471-.353-2.295.065z"], ["fill", "#EFBA00", "d", "M64.081 28.739c.301.623 1.074.708 1.59.988.494.279.773.344.966.236.429-.236.108-1.01-.322-1.289-.408-.279-2.406-.343-2.234.065z"], ["fill", "#EAB500", "d", "M64.127 28.746c.292.605 1.044.689 1.545.961.481.271.752.334.941.229.417-.229.104-.982-.314-1.253-.396-.271-2.339-.335-2.172.063z"], ["fill", "#E5AF00", "d", "M64.173 28.752c.285.589 1.015.67 1.502.934.467.264.731.325.914.224.406-.224.101-.955-.304-1.219-.386-.263-2.274-.324-2.112.061z"], ["fill", "#E0A900", "d", "M64.219 28.759c.277.572.986.651 1.459.907.453.256.71.315.887.217.395-.217.099-.927-.296-1.183-.374-.256-2.207-.315-2.05.059z"], ["fill", "#DBA300", "d", "M64.265 28.767c.268.555.956.631 1.416.88.44.249.688.306.861.21.382-.21.095-.899-.287-1.148-.364-.249-2.142-.306-1.99.058z"], ["fill", "#D69E00", "d", "M64.311 28.773c.26.538.927.612 1.372.853.427.241.667.296.834.204.371-.204.093-.871-.277-1.111-.353-.242-2.078-.298-1.929.054z"], ["fill", "#D19800", "d", "M64.357 28.78c.25.521.897.592 1.329.826.412.233.646.287.807.197.358-.197.09-.843-.27-1.077-.34-.232-2.01-.287-1.866.054z"], ["fill", "#CC9200", "d", "M64.403 28.788c.244.503.869.573 1.286.799.398.226.625.277.78.19.347-.19.087-.816-.26-1.042-.33-.226-1.945-.277-1.806.053z"], ["fill", "#C68C00", "d", "M64.449 28.794c.235.486.839.553 1.241.771.385.218.604.269.754.184.335-.184.084-.788-.251-1.006-.319-.217-1.878-.267-1.744.051z"], ["fill", "#C18700", "d", "M64.495 28.801c.226.469.809.535 1.197.745.372.21.583.259.729.178.323-.178.081-.761-.243-.971-.308-.21-1.812-.259-1.683.048z"], ["fill", "#BC8100", "d", "M64.541 28.809c.218.452.779.514 1.153.717.359.203.562.249.703.171.312-.171.078-.733-.234-.935-.297-.203-1.747-.25-1.622.047z"], ["fill", "#B77B00", "d", "M64.587 28.815c.21.435.75.495 1.11.69.345.195.54.24.675.165.3-.165.076-.706-.225-.9-.285-.194-1.68-.24-1.56.045z"], ["fill", "#B27500", "d", "M64.634 28.822c.201.418.719.476 1.065.663.333.188.519.23.649.159.288-.159.073-.677-.216-.865-.274-.187-1.614-.231-1.498.043z"], ["fill", "#AD7000", "d", "M64.68 28.829c.193.401.69.456 1.022.636.317.18.497.221.622.152.276-.152.069-.649-.208-.83-.262-.178-1.547-.22-1.436.042z"], ["fill", "#A86A00", "d", "M64.725 28.836c.185.384.662.437.979.608.304.173.476.212.596.146.264-.146.066-.622-.199-.794-.251-.171-1.483-.211-1.376.04z"], ["fill", "#A36400", "d", "M64.771 28.843c.176.367.631.417.936.582.29.164.455.202.569.139.252-.139.062-.594-.19-.759-.24-.164-1.417-.202-1.315.038z"], ["fill", "#9E5E00", "d", "M64.817 28.85c.168.35.603.398.892.555.277.157.434.192.543.132.24-.132.061-.566-.182-.724-.228-.155-1.35-.192-1.253.037z"], ["fill", "#995900", "d", "M64.863 28.857c.161.333.573.378.848.528.264.148.413.183.517.125.229-.125.057-.539-.173-.688-.217-.148-1.284-.182-1.192.035z"], ["fill", "#fc0", "d", "M59.066 29.584c-.105.262.629.761.998.42.395-.341.867-.657 1.025-.762.708-.473.447-.814-.735-.604-1.183.21-1.183.682-1.288.946z"], ["fill", "#F9C600", "d", "M59.085 29.58c-.103.257.615.744.975.41.384-.333.846-.641 1.001-.744.692-.462.436-.795-.719-.59-1.155.205-1.155.667-1.257.924z"], ["fill", "#F4C000", "d", "M59.104 29.576c-.1.25.601.727.952.401.375-.325.826-.626.977-.727.676-.451.426-.776-.702-.576-1.127.201-1.127.652-1.227.902z"], ["fill", "#EFBA00", "d", "M59.123 29.573c-.098.245.586.708.929.391.366-.318.806-.611.953-.709.659-.439.415-.757-.684-.562-1.1.196-1.1.635-1.198.88z"], ["fill", "#EAB500", "d", "M59.142 29.57c-.096.238.572.691.905.381.358-.31.787-.596.93-.692.644-.428.405-.739-.667-.548-1.073.191-1.073.62-1.168.859z"], ["fill", "#E5AF00", "d", "M59.161 29.566c-.093.232.558.673.882.372.349-.302.767-.58.906-.673.628-.418.395-.72-.65-.535-1.046.186-1.045.604-1.138.836z"], ["fill", "#E0A900", "d", "M59.18 29.564c-.09.226.543.656.859.362.339-.294.747-.565.882-.656.611-.407.384-.702-.634-.52-1.017.18-1.017.587-1.107.814z"], ["fill", "#DBA300", "d", "M59.199 29.56c-.088.219.528.638.836.352.33-.286.727-.55.858-.638.594-.396.374-.683-.616-.506-.991.175-.991.571-1.078.792z"], ["fill", "#D69E00", "d", "M59.218 29.556c-.086.214.513.621.813.343.321-.278.707-.535.834-.621.578-.386.364-.664-.599-.492-.962.171-.962.556-1.048.77z"], ["fill", "#D19800", "d", "M59.237 29.553c-.083.208.499.604.791.333.311-.27.686-.52.81-.604.562-.374.354-.645-.582-.478-.936.167-.936.541-1.019.749z"], ["fill", "#CC9200", "d", "M59.256 29.55c-.081.202.484.586.766.323.304-.263.667-.505.789-.585.545-.363.342-.626-.566-.464-.909.16-.909.524-.989.726z"], ["fill", "#C68C00", "d", "M59.275 29.546c-.079.196.47.568.743.313.294-.254.647-.49.765-.568.528-.353.332-.607-.549-.45-.882.158-.882.509-.959.705z"], ["fill", "#C18700", "d", "M59.293 29.543c-.076.189.455.55.721.303.286-.247.626-.474.741-.55.512-.342.322-.588-.532-.437-.854.153-.854.494-.93.684z"], ["fill", "#BC8100", "d", "M59.312 29.54c-.074.184.44.532.698.294.275-.239.605-.459.716-.533.496-.33.312-.57-.515-.422-.825.147-.825.477-.899.661z"], ["fill", "#B77B00", "d", "M59.331 29.537c-.071.177.426.514.675.283.266-.23.585-.444.692-.515.479-.319.302-.55-.497-.408s-.799.462-.87.64z"], ["fill", "#B27500", "d", "M59.35 29.533c-.069.171.411.497.652.274.257-.222.565-.428.668-.497.463-.309.292-.532-.48-.395s-.771.447-.84.618z"], ["fill", "#AD7000", "d", "M59.369 29.53c-.066.166.397.48.627.265.249-.215.546-.414.646-.48.447-.297.28-.513-.463-.38-.744.132-.744.429-.81.595z"], ["fill", "#A86A00", "d", "M59.389 29.526c-.063.159.382.462.605.255.239-.207.525-.398.621-.462.43-.287.271-.494-.446-.366-.717.128-.717.414-.78.573z"], ["fill", "#A36400", "d", "M59.407 29.523c-.061.153.368.444.582.246.23-.2.506-.383.598-.445.414-.276.262-.475-.429-.352-.689.122-.689.398-.751.551z"], ["fill", "#9E5E00", "d", "M59.426 29.52c-.059.146.354.427.559.235.22-.191.486-.368.574-.427.397-.265.25-.457-.412-.338-.662.118-.662.383-.721.53z"], ["fill", "#995900", "d", "M59.445 29.517c-.056.141.339.409.536.226.211-.184.465-.353.55-.409.381-.255.24-.438-.396-.325-.633.113-.633.366-.69.508z"], ["fill", "#fc0", "d", "M60.381 36.556c-.074.923 2.049-1.384 2.178-1.587.276-.498 1.199-1.9 1.347-2.491.276-1.033.775-1.79.461-2.878-.111-.35-.885-.442-1.236-.221-.996.59-.848 1.31-.959 1.974-.37 1.882-1.661 3.782-1.791 5.203z"], ["fill", "#FFCC02", "d", "M60.469 36.412c-.072.899 1.994-1.352 2.12-1.55.269-.486 1.167-1.855 1.309-2.431.269-1.008.753-1.746.446-2.807-.109-.342-.864-.431-1.206-.214-.971.577-.825 1.278-.933 1.926-.356 1.835-1.613 3.69-1.736 5.076z"], ["fill", "#FFCC05", "d", "M60.555 36.268c-.068.877 1.942-1.32 2.063-1.514.263-.475 1.135-1.809 1.272-2.371.259-.982.731-1.702.43-2.736-.107-.333-.843-.418-1.176-.207-.945.564-.802 1.247-.906 1.878-.343 1.79-1.564 3.6-1.683 4.95z"], ["fill", "#FFCC07", "d", "M60.642 36.124c-.064.854 1.889-1.289 2.008-1.477.253-.462 1.101-1.764 1.234-2.311.251-.957.708-1.659.414-2.665-.105-.324-.821-.405-1.145-.199-.92.551-.779 1.216-.879 1.831-.333 1.742-1.519 3.506-1.632 4.821z"], ["fill", "#FFCD0A", "d", "M60.728 35.98c-.061.831 1.835-1.258 1.95-1.441.247-.45 1.069-1.718 1.198-2.25.243-.932.687-1.616.397-2.594-.101-.314-.799-.394-1.114-.192-.894.538-.756 1.184-.852 1.783-.319 1.696-1.471 3.414-1.579 4.694z"], ["fill", "#FFCD0C", "d", "M60.815 35.836c-.058.808 1.782-1.227 1.894-1.405.238-.438 1.035-1.672 1.16-2.19.234-.907.666-1.572.383-2.523-.1-.306-.778-.38-1.084-.185-.867.524-.733 1.153-.825 1.735-.309 1.65-1.425 3.323-1.528 4.568z"], ["fill", "#FFCD0F", "d", "M60.902 35.691c-.055.785 1.729-1.195 1.836-1.369.23-.426 1.002-1.626 1.124-2.129.226-.881.643-1.529.366-2.451-.097-.297-.756-.369-1.053-.177-.842.511-.709 1.122-.798 1.688-.296 1.602-1.378 3.229-1.475 4.438z"], ["fill", "#FFCD11", "d", "M60.989 35.547c-.052.762 1.675-1.163 1.78-1.332.223-.415.97-1.581 1.085-2.069.217-.855.621-1.485.351-2.38-.095-.289-.734-.356-1.022-.17-.816.498-.688 1.09-.771 1.639-.285 1.557-1.331 3.139-1.423 4.312z"], ["fill", "#FFCE14", "d", "M61.076 35.403c-.048.739 1.622-1.132 1.723-1.296.216-.402.936-1.535 1.048-2.009.208-.83.599-1.441.335-2.309-.093-.28-.715-.345-.992-.163-.79.484-.664 1.059-.744 1.591-.272 1.512-1.284 3.048-1.37 4.186z"], ["fill", "#FFCE16", "d", "M61.162 35.259c-.045.717 1.569-1.1 1.667-1.259.208-.39.904-1.489 1.011-1.949.201-.805.577-1.398.318-2.237-.09-.271-.693-.332-.961-.156-.765.471-.64 1.027-.718 1.543-.259 1.464-1.236 2.955-1.317 4.058z"], ["fill", "#FFCE19", "d", "M61.249 35.115c-.043.693 1.515-1.068 1.61-1.223.2-.377.871-1.443.974-1.888.191-.78.555-1.355.302-2.167-.088-.262-.671-.319-.93-.148-.739.458-.618.996-.691 1.496-.249 1.417-1.188 2.862-1.265 3.93z"], ["fill", "#FFCE1C", "d", "M61.336 34.971c-.039.67 1.462-1.037 1.553-1.187.193-.366.839-1.398.936-1.829.184-.754.533-1.311.288-2.095-.086-.252-.65-.308-.9-.141-.713.444-.595.964-.664 1.448-.237 1.372-1.143 2.771-1.213 3.804z"], ["fill", "#FFCF1E", "d", "M61.422 34.826c-.035.648 1.41-1.005 1.498-1.15.184-.354.806-1.353.898-1.769.176-.728.511-1.267.271-2.023-.084-.244-.628-.295-.869-.133-.688.432-.572.933-.637 1.4-.225 1.324-1.096 2.678-1.161 3.675z"], ["fill", "#FFCF21", "d", "M61.509 34.683c-.032.624 1.356-.975 1.44-1.114.176-.342.773-1.306.861-1.708.167-.703.489-1.224.256-1.953-.082-.235-.607-.282-.839-.126-.663.418-.548.902-.611 1.353-.212 1.277-1.047 2.585-1.107 3.548z"], ["fill", "#FFCF23", "d", "M61.596 34.539c-.028.601 1.304-.943 1.383-1.078.169-.33.741-1.261.824-1.648.159-.677.467-1.18.241-1.882-.08-.226-.586-.27-.81-.118-.636.404-.525.87-.583 1.304-.2 1.232-1 2.494-1.055 3.422z"], ["fill", "#FFCF26", "d", "M61.682 34.394c-.026.579 1.25-.911 1.326-1.041.162-.317.708-1.215.788-1.588.149-.652.444-1.137.224-1.81-.077-.217-.564-.257-.778-.111-.61.392-.502.839-.556 1.256-.189 1.185-.955 2.402-1.004 3.294z"], ["fill", "#FFD028", "d", "M61.769 34.25c-.022.556 1.196-.879 1.27-1.005.154-.306.675-1.169.75-1.527.142-.627.424-1.093.208-1.739-.075-.208-.542-.245-.748-.104-.584.378-.478.808-.529 1.208-.177 1.139-.907 2.311-.951 3.167z"], ["fill", "#FFD02B", "d", "M61.856 34.106c-.02.533 1.144-.848 1.212-.969.146-.293.643-1.124.712-1.467.134-.602.401-1.05.193-1.668-.073-.199-.521-.232-.718-.096-.558.364-.455.775-.502 1.161-.163 1.091-.859 2.218-.897 3.039z"], ["fill", "#FFD02D", "d", "M61.943 33.962c-.016.51 1.089-.816 1.155-.932.14-.282.61-1.079.676-1.407.125-.576.378-1.006.177-1.597-.07-.19-.499-.22-.687-.088-.533.351-.432.744-.475 1.112-.153 1.046-.813 2.126-.846 2.912z"], ["fill", "#FFD030", "d", "M62.03 33.817c-.013.487 1.037-.785 1.099-.895.131-.27.577-1.033.638-1.347.117-.55.357-.962.162-1.526-.068-.181-.478-.208-.657-.082-.507.338-.409.713-.448 1.065-.142 1-.766 2.035-.794 2.785z"], ["fill", "#FFD133", "d", "M62.116 33.673c-.009.464.985-.753 1.043-.859.124-.257.544-.987.601-1.287.108-.525.334-.919.145-1.455-.066-.173-.456-.196-.626-.074-.481.325-.385.681-.421 1.017-.13.954-.719 1.944-.742 2.658z"], ["fill", "#fc0", "d", "M67.709 32.716c-1.022 1.116-1.743 2.185-2.324 2.906-.605.744-2.093 1.627-1.349 2.487.627.767 3.208-.627 5.208-2.115 1.975-1.488 5.067-2.813 3.557-4.509-.791-.86-2.651-.675-3.371-.209-.559.348-.884.534-1.721 1.44z"], ["fill", "#FFCC02", "d", "M67.753 32.766c-1.007 1.091-1.715 2.14-2.287 2.844-.595.726-2.059 1.597-1.334 2.432.611.746 3.139-.627 5.1-2.088 1.937-1.461 4.966-2.769 3.493-4.417-.77-.835-2.589-.645-3.296-.188-.546.341-.861.538-1.676 1.417z"], ["fill", "#FFCC05", "d", "M67.797 32.815c-.99 1.066-1.688 2.095-2.25 2.783-.585.708-2.026 1.566-1.319 2.377.595.725 3.071-.627 4.993-2.062 1.899-1.434 4.863-2.724 3.43-4.325-.75-.811-2.53-.616-3.222-.168-.536.338-.839.544-1.632 1.395z"], ["fill", "#FFCC07", "d", "M67.841 32.865c-.975 1.04-1.66 2.049-2.214 2.721-.575.69-1.991 1.535-1.304 2.323.579.703 3.004-.627 4.886-2.035 1.86-1.407 4.761-2.679 3.366-4.232-.729-.787-2.469-.587-3.146-.147-.524.33-.816.547-1.588 1.37z"], ["fill", "#FFCD0A", "d", "M67.885 32.915c-.958 1.014-1.63 2.003-2.177 2.659-.565.672-1.957 1.504-1.29 2.268.563.681 2.935-.627 4.778-2.008 1.822-1.381 4.659-2.635 3.303-4.141-.71-.762-2.41-.557-3.073-.127-.511.326-.791.554-1.541 1.349z"], ["fill", "#FFCD0C", "d", "M67.929 32.964c-.942.99-1.603 1.959-2.141 2.598-.555.654-1.923 1.473-1.275 2.213.547.66 2.867-.627 4.671-1.981 1.783-1.354 4.558-2.591 3.239-4.048-.689-.738-2.349-.528-2.998-.105-.498.318-.768.556-1.496 1.323z"], ["fill", "#FFCD0F", "d", "M67.973 33.014c-.927.964-1.576 1.913-2.104 2.537-.545.636-1.89 1.442-1.26 2.158.531.639 2.798-.627 4.563-1.955 1.744-1.327 4.456-2.546 3.176-3.955-.67-.714-2.29-.5-2.924-.085-.487.312-.745.56-1.451 1.3z"], ["fill", "#FFCD11", "d", "M68.017 33.063c-.911.939-1.548 1.868-2.068 2.476-.535.618-1.856 1.412-1.245 2.102.514.617 2.729-.626 4.456-1.927 1.707-1.301 4.354-2.502 3.113-3.863-.65-.689-2.229-.47-2.848-.064-.476.306-.723.565-1.408 1.276z"], ["fill", "#FFCE14", "d", "M68.061 33.112c-.895.914-1.519 1.823-2.031 2.414-.525.6-1.822 1.381-1.231 2.047.498.596 2.662-.626 4.349-1.9 1.668-1.273 4.252-2.458 3.048-3.771-.628-.665-2.167-.44-2.773-.043-.464.301-.699.57-1.362 1.253z"], ["fill", "#FFCE16", "d", "M68.105 33.162c-.879.888-1.491 1.777-1.994 2.353-.515.583-1.788 1.35-1.216 1.993.481.574 2.593-.625 4.241-1.874 1.628-1.247 4.149-2.414 2.986-3.679-.61-.641-2.109-.412-2.699-.023-.452.295-.677.575-1.318 1.23z"], ["fill", "#FFCE19", "d", "M68.149 33.212c-.863.863-1.462 1.732-1.958 2.291-.504.564-1.754 1.319-1.202 1.938.465.553 2.525-.625 4.134-1.847 1.591-1.22 4.048-2.369 2.922-3.586-.589-.616-2.048-.382-2.625-.002-.439.288-.652.578-1.271 1.206z"], ["fill", "#FFCE1C", "d", "M68.193 33.261c-.846.838-1.435 1.687-1.921 2.229-.495.546-1.72 1.289-1.187 1.882.449.531 2.457-.625 4.027-1.82 1.552-1.193 3.946-2.325 2.859-3.494-.57-.591-1.988-.353-2.551.019-.427.284-.629.584-1.227 1.184z"], ["fill", "#FFCF1E", "d", "M68.237 33.311c-.831.813-1.407 1.642-1.884 2.168-.485.529-1.687 1.258-1.172 1.828.433.51 2.388-.625 3.919-1.792 1.514-1.167 3.843-2.28 2.795-3.402-.549-.566-1.927-.324-2.476.039-.416.276-.606.587-1.182 1.159z"], ["fill", "#FFCF21", "d", "M68.281 33.36c-.814.788-1.378 1.597-1.847 2.106-.475.511-1.654 1.227-1.158 1.773.416.489 2.32-.624 3.812-1.766 1.475-1.14 3.741-2.236 2.732-3.31-.529-.542-1.867-.295-2.402.06-.404.272-.583.593-1.137 1.137z"], ["fill", "#FFCF23", "d", "M68.326 33.41c-.8.763-1.352 1.551-1.811 2.045-.465.493-1.62 1.196-1.143 1.717.4.468 2.251-.624 3.704-1.739 1.437-1.113 3.64-2.191 2.669-3.217-.509-.519-1.808-.266-2.327.081-.394.266-.561.597-1.092 1.113z"], ["fill", "#FFCF26", "d", "M68.369 33.459c-.783.737-1.324 1.505-1.774 1.983-.456.475-1.586 1.166-1.129 1.663.384.446 2.184-.624 3.598-1.712 1.398-1.086 3.538-2.147 2.605-3.125-.489-.493-1.748-.236-2.252.101-.382.26-.537.602-1.048 1.09z"], ["fill", "#FFD028", "d", "M68.412 33.509c-.766.711-1.294 1.46-1.736 1.921-.446.457-1.553 1.135-1.114 1.607.368.425 2.115-.624 3.49-1.685 1.36-1.061 3.436-2.104 2.543-3.033-.469-.47-1.688-.208-2.178.122-.371.255-.515.607-1.005 1.068z"], ["fill", "#FFD02B", "d", "M68.456 33.559c-.75.687-1.265 1.415-1.699 1.86-.436.439-1.519 1.104-1.1 1.553.353.403 2.047-.623 3.383-1.658 1.321-1.033 3.334-2.058 2.479-2.94-.448-.445-1.627-.178-2.103.143-.359.247-.492.609-.96 1.042z"], ["fill", "#FFD02D", "d", "M68.501 33.608c-.735.661-1.238 1.37-1.664 1.799-.426.421-1.485 1.073-1.084 1.498.335.381 1.978-.624 3.275-1.632 1.284-1.006 3.232-2.014 2.416-2.848-.429-.42-1.566-.149-2.029.163-.347.242-.468.615-.914 1.02z"], ["fill", "#FFD030", "d", "M68.545 33.657c-.719.636-1.21 1.324-1.627 1.737-.415.403-1.451 1.043-1.069 1.443.318.36 1.91-.623 3.168-1.605 1.243-.979 3.129-1.97 2.352-2.756-.41-.396-1.507-.12-1.955.184-.335.238-.445.621-.869.997z"], ["fill", "#FFD133", "d", "M68.589 33.707c-.704.611-1.183 1.278-1.591 1.676-.405.385-1.417 1.012-1.055 1.388.302.338 1.841-.623 3.061-1.578 1.206-.953 3.028-1.926 2.289-2.664-.388-.372-1.446-.091-1.879.205l-.825.973z"], ["fill", "#fff", "d", "M69.894 56.148c.278-.907 9.322-3.045 10.81-2.348 1.464.697 8.484 10.903 7.23 11.461-1.255.535-3.953-3.395-7.881-5.208-3.929-1.813-10.438-2.975-10.159-3.905z"], ["fill", "#F9F9F9", "d", "M70.161 56.167c.273-.892 9.087-2.931 10.554-2.26 1.445.671 8.319 10.622 7.084 11.168-1.234.525-3.863-3.34-7.729-5.125-3.867-1.783-10.183-2.869-9.909-3.783z"], ["fill", "#F4F4F4", "d", "M70.427 56.186c.268-.876 8.853-2.816 10.299-2.17 1.426.645 8.155 10.339 6.94 10.875-1.214.515-3.774-3.287-7.579-5.043-3.804-1.756-9.929-2.765-9.66-3.662z"], ["fill", "#EFEFEF", "d", "M70.693 56.204c.264-.861 8.618-2.701 10.044-2.082 1.407.619 7.989 10.059 6.796 10.583-1.193.505-3.686-3.233-7.428-4.96-3.742-1.727-9.675-2.66-9.412-3.541z"], ["fill", "#EAEAEA", "d", "M70.959 56.222c.258-.847 8.382-2.585 9.79-1.993 1.387.593 7.824 9.778 6.651 10.291-1.173.495-3.597-3.179-7.277-4.878-3.681-1.699-9.422-2.556-9.164-3.42z"], ["fill", "#E5E5E5", "d", "M71.226 56.24c.252-.831 8.148-2.47 9.534-1.903 1.368.566 7.659 9.497 6.507 9.998-1.153.484-3.509-3.125-7.127-4.796-3.618-1.67-9.168-2.451-8.914-3.299z"], ["fill", "#E0E0E0", "d", "M71.491 56.258c.249-.816 7.914-2.355 9.28-1.815 1.349.541 7.495 9.216 6.363 9.707-1.132.474-3.42-3.073-6.977-4.714-3.556-1.642-8.914-2.345-8.666-3.178z"], ["fill", "#DBDBDB", "d", "M71.758 56.277c.243-.801 7.678-2.241 9.024-1.727 1.33.515 7.33 8.934 6.218 9.414-1.11.464-3.331-3.019-6.825-4.631s-8.66-2.24-8.417-3.056z"], ["fill", "#D6D6D6", "d", "M72.024 56.295c.237-.786 7.444-2.126 8.769-1.638 1.312.489 7.164 8.653 6.074 9.122-1.09.454-3.242-2.965-6.675-4.549-3.432-1.584-8.406-2.135-8.168-2.935z"], ["fill", "#D1D1D1", "d", "M72.29 56.313c.233-.77 7.209-2.011 8.514-1.548 1.292.462 6.999 8.372 5.93 8.829-1.07.445-3.154-2.911-6.523-4.466-3.371-1.556-8.153-2.031-7.921-2.815z"], ["fill", "#ccc", "d", "M72.556 56.331c.228-.755 6.976-1.896 8.259-1.459 1.273.436 6.835 8.091 5.786 8.537-1.05.434-3.066-2.858-6.374-4.385-3.307-1.527-7.898-1.925-7.671-2.693z"], ["fill", "#C6C6C6", "d", "M72.823 56.35c.222-.74 6.74-1.781 8.004-1.371 1.253.41 6.669 7.809 5.64 8.244-1.028.424-2.977-2.805-6.222-4.302-3.246-1.498-7.644-1.82-7.422-2.571z"], ["fill", "#C1C1C1", "d", "M73.089 56.369c.217-.726 6.505-1.667 7.749-1.283 1.233.384 6.503 7.528 5.496 7.952-1.008.415-2.887-2.75-6.071-4.221-3.185-1.469-7.391-1.714-7.174-2.448z"], ["fill", "#BCBCBC", "d", "M73.355 56.387c.21-.71 6.27-1.552 7.494-1.194 1.215.358 6.338 7.248 5.352 7.66-.987.404-2.799-2.697-5.92-4.137-3.122-1.442-7.137-1.61-6.926-2.329z"], ["fill", "#B7B7B7", "d", "M73.621 56.406c.208-.695 6.035-1.437 7.239-1.105 1.196.332 6.174 6.965 5.208 7.367-.967.394-2.711-2.643-5.771-4.056-3.06-1.412-6.882-1.505-6.676-2.206z"], ["fill", "#B2B2B2", "d", "M73.887 56.423c.202-.679 5.801-1.321 6.984-1.016 1.177.305 6.008 6.685 5.063 7.075-.946.385-2.622-2.589-5.62-3.973-2.997-1.383-6.627-1.4-6.427-2.086z"], ["fill", "#ADADAD", "d", "M74.154 56.442c.196-.665 5.565-1.207 6.728-.928 1.159.28 5.844 6.404 4.919 6.783-.925.373-2.533-2.536-5.469-3.892-2.935-1.354-6.374-1.294-6.178-1.963z"], ["fill", "#A8A8A8", "d", "M74.42 56.46c.19-.649 5.331-1.092 6.474-.839 1.137.253 5.678 6.123 4.774 6.491-.905.364-2.445-2.482-5.319-3.809-2.873-1.326-6.12-1.19-5.929-1.843z"], ["fill", "#A3A3A3", "d", "M74.685 56.479c.186-.634 5.097-.977 6.219-.75 1.12.228 5.514 5.842 4.629 6.198-.883.354-2.355-2.429-5.167-3.727-2.81-1.298-5.865-1.084-5.681-1.721z"], ["fill", "#9E9E9E", "d", "M74.952 56.497c.181-.62 4.862-.862 5.963-.661 1.1.201 5.348 5.56 4.486 5.905-.863.344-2.267-2.375-5.017-3.644-2.748-1.269-5.612-.979-5.432-1.6z"], ["fill", "#999", "d", "M75.219 56.515c.174-.604 4.627-.747 5.708-.572 1.082.175 5.184 5.279 4.341 5.613s-2.178-2.321-4.866-3.562c-2.687-1.241-5.358-.874-5.183-1.479z"], ["fill", "#fff", "d", "M58.503 70.05c.93.046.047 5.253.047 10.624 0 5.37.72 7.252.047 7.926-.674.675-1.836-1.743-1.836-7.113-.001-5.37.813-11.484 1.742-11.437z"], ["fill", "#F9F9F9", "d", "M58.494 70.176c.898.052.035 5.182.031 10.467-.003 5.284.707 7.17.054 7.825-.652.656-1.796-1.738-1.791-7.023.004-5.284.808-11.321 1.706-11.269z"], ["fill", "#F4F4F4", "d", "M58.484 70.302c.868.058.025 5.111.017 10.31-.008 5.199.691 7.087.06 7.725-.63.635-1.755-1.732-1.745-6.933.008-5.199.802-11.16 1.668-11.102z"], ["fill", "#EFEFEF", "d", "M58.475 70.428c.835.064.013 5.042.001 10.154-.011 5.112.677 7.004.066 7.622-.609.616-1.714-1.728-1.699-6.843.012-5.112.797-10.996 1.632-10.933z"], ["fill", "#EAEAEA", "d", "M58.465 70.555c.804.069.003 4.97-.013 9.996-.016 5.028.663 6.923.072 7.522-.587.597-1.673-1.723-1.654-6.753.017-5.027.792-10.835 1.595-10.765z"], ["fill", "#E5E5E5", "d", "M58.456 70.681c.772.074-.009 4.898-.029 9.84-.02 4.942.648 6.839.079 7.42-.565.577-1.632-1.718-1.608-6.663.02-4.942.785-10.672 1.558-10.597z"], ["fill", "#E0E0E0", "d", "M58.447 70.807c.742.08-.02 4.827-.045 9.682-.024 4.856.634 6.757.086 7.319-.544.558-1.591-1.711-1.562-6.572.024-4.856.779-10.509 1.521-10.429z"], ["fill", "#DBDBDB", "d", "M58.437 70.933c.709.086-.031 4.756-.059 9.527-.028 4.77.618 6.673.091 7.217-.521.538-1.55-1.707-1.516-6.483.028-4.77.774-10.347 1.484-10.261z"], ["fill", "#D6D6D6", "d", "M58.428 71.059c.679.091-.042 4.685-.074 9.37-.032 4.685.604 6.591.098 7.116-.5.519-1.509-1.702-1.471-6.393.033-4.684.768-10.184 1.447-10.093z"], ["fill", "#D1D1D1", "d", "M58.418 71.186c.648.097-.053 4.614-.089 9.212-.036 4.6.59 6.507.104 7.014-.477.5-1.468-1.695-1.425-6.302.036-4.598.763-10.022 1.41-9.924z"], ["fill", "#ccc", "d", "M58.409 71.312c.617.103-.063 4.542-.103 9.056s.574 6.425.111 6.914c-.457.479-1.428-1.691-1.38-6.213.039-4.513.756-9.86 1.372-9.757z"], ["fill", "#C6C6C6", "d", "M58.399 71.439c.585.107-.075 4.472-.119 8.899-.044 4.427.56 6.342.117 6.811-.434.462-1.386-1.684-1.333-6.122.044-4.427.751-9.697 1.335-9.588z"], ["fill", "#C1C1C1", "d", "M58.389 71.564c.554.114-.086 4.4-.134 8.743-.047 4.342.546 6.259.124 6.71-.412.441-1.345-1.68-1.288-6.033.048-4.341.746-9.534 1.298-9.42z"], ["fill", "#BCBCBC", "d", "M58.38 71.691c.522.119-.098 4.33-.148 8.586-.052 4.257.531 6.177.13 6.609-.392.422-1.305-1.675-1.243-5.942.052-4.257.74-9.374 1.261-9.253z"], ["fill", "#B7B7B7", "d", "M58.37 71.817c.491.125-.108 4.258-.164 8.429-.056 4.171.517 6.094.137 6.507-.37.403-1.264-1.669-1.197-5.851.056-4.171.735-9.211 1.224-9.085z"], ["fill", "#B2B2B2", "d", "M58.362 71.944c.459.13-.12 4.187-.179 8.271-.061 4.085.502 6.011.142 6.407-.347.383-1.223-1.665-1.15-5.762.059-4.085.727-9.047 1.187-8.916z"], ["fill", "#ADADAD", "d", "M58.351 72.069c.428.136-.13 4.116-.193 8.116-.064 4 .487 5.928.148 6.305-.325.363-1.182-1.66-1.104-5.672.064-3.999.722-8.885 1.149-8.749z"], ["fill", "#A8A8A8", "d", "M58.343 72.196c.396.142-.142 4.044-.208 7.959-.068 3.914.472 5.845.154 6.203-.303.344-1.14-1.654-1.059-5.582.068-3.914.716-8.722 1.113-8.58z"], ["fill", "#A3A3A3", "d", "M58.332 72.322c.365.148-.152 3.974-.223 7.802-.072 3.829.458 5.763.162 6.102-.282.325-1.1-1.648-1.014-5.492.071-3.827.711-8.561 1.075-8.412z"], ["fill", "#9E9E9E", "d", "M58.324 72.448c.333.154-.164 3.903-.24 7.646-.076 3.743.444 5.679.169 6-.261.306-1.059-1.644-.968-5.401.075-3.743.705-8.399 1.039-8.245z"], ["fill", "#999", "d", "M58.314 72.574c.302.159-.175 3.831-.254 7.489-.08 3.657.429 5.597.175 5.899-.238.286-1.018-1.638-.922-5.311.078-3.657.699-8.236 1.001-8.077z"], ["fill", "#fff", "d", "M60.538 55.693c.56.062 4.015-.716 4.14-.405.125.249-2.148.935-2.895 1.712-.249.25-.902.84-1.308.778-.311-.031-.498-.685-.965-1.183-1.121-1.121-1.836-1.027-1.619-1.463.188-.341 1.682.468 2.647.561z"], ["fill", "#FBFBFB", "d", "M60.552 55.707c.549.061 3.932-.701 4.053-.396.122.244-2.103.914-2.834 1.676-.244.244-.883.823-1.279.762-.304-.03-.488-.67-.945-1.157-1.098-1.097-1.798-1.006-1.585-1.433.183-.336 1.646.456 2.59.548z"], ["fill", "#F8F8F8", "d", "M60.567 55.719c.537.06 3.847-.686 3.966-.388.12.239-2.057.896-2.773 1.641-.239.239-.864.806-1.252.746-.298-.029-.477-.656-.924-1.133-1.074-1.073-1.759-.984-1.551-1.401.179-.329 1.61.446 2.534.535z"], ["fill", "#F5F5F5", "d", "M60.582 55.732c.525.058 3.762-.67 3.879-.379.116.234-2.012.875-2.712 1.604-.233.233-.845.787-1.225.729-.291-.029-.467-.642-.905-1.108-1.05-1.05-1.721-.962-1.516-1.371.175-.32 1.575.438 2.479.525z"], ["fill", "#F2F2F2", "d", "M60.596 55.746c.514.057 3.678-.656 3.792-.371.114.228-1.967.855-2.651 1.567-.228.229-.828.77-1.198.713-.284-.028-.456-.627-.884-1.083-1.026-1.026-1.681-.941-1.482-1.34.171-.314 1.54.428 2.423.514z"], ["fill", "#EFEFEF", "d", "M60.611 55.758c.502.056 3.594-.641 3.705-.362.112.223-1.921.836-2.59 1.532-.223.223-.808.752-1.169.697-.279-.028-.446-.613-.864-1.059-1.003-1.002-1.644-.919-1.448-1.31.165-.306 1.502.418 2.366.502z"], ["fill", "#EBEBEB", "d", "M60.625 55.772c.49.054 3.51-.626 3.618-.354.109.218-1.877.816-2.529 1.497-.218.217-.79.734-1.143.68-.271-.027-.435-.599-.843-1.034-.979-.979-1.605-.897-1.414-1.278.162-.301 1.469.406 2.311.489z"], ["fill", "#E8E8E8", "d", "M60.64 55.784c.478.053 3.425-.611 3.53-.345.107.211-1.831.796-2.468 1.46-.212.212-.771.717-1.115.663-.265-.026-.425-.583-.823-1.008-.956-.956-1.567-.876-1.38-1.248.159-.292 1.433.398 2.256.478z"], ["fill", "#E5E5E5", "d", "M60.655 55.797c.466.052 3.34-.596 3.444-.337.103.207-1.786.777-2.408 1.424-.208.207-.75.699-1.088.647-.258-.026-.414-.57-.802-.984-.932-.932-1.528-.854-1.346-1.217.154-.284 1.397.389 2.2.467z"], ["fill", "#E2E2E2", "d", "M60.669 55.81c.455.051 3.256-.58 3.357-.328.101.202-1.741.757-2.347 1.388-.202.202-.732.682-1.06.631-.252-.025-.404-.555-.783-.959-.908-.908-1.489-.833-1.312-1.186.152-.278 1.362.377 2.145.454z"], ["fill", "#DFDFDF", "d", "M60.683 55.822c.442.049 3.171-.565 3.27-.319.099.197-1.696.737-2.286 1.352-.196.197-.713.664-1.032.614-.245-.024-.393-.541-.762-.934-.885-.885-1.45-.811-1.278-1.155.147-.27 1.326.369 2.088.442z"], ["fill", "#DBDBDB", "d", "M60.698 55.835c.432.048 3.087-.551 3.184-.311.095.19-1.652.717-2.227 1.315-.19.191-.693.646-1.005.599-.239-.024-.382-.526-.742-.91-.861-.861-1.412-.79-1.244-1.125.143-.261 1.292.36 2.034.432z"], ["fill", "#D8D8D8", "d", "M60.713 55.849c.419.046 3.002-.535 3.095-.303.093.186-1.605.698-2.164 1.28-.186.186-.675.629-.977.582-.233-.023-.373-.512-.722-.885-.838-.837-1.373-.768-1.209-1.094.138-.255 1.255.349 1.977.42z"], ["fill", "#D5D5D5", "d", "M60.727 55.861c.407.045 2.918-.52 3.008-.294.091.181-1.561.679-2.104 1.244-.181.181-.656.611-.95.566-.226-.023-.361-.498-.7-.86-.814-.813-1.335-.746-1.177-1.062.136-.249 1.222.338 1.923.406z"], ["fill", "#D2D2D2", "d", "M60.742 55.874c.396.044 2.833-.505 2.922-.285.088.175-1.516.659-2.042 1.208-.176.175-.637.593-.922.549-.221-.022-.352-.483-.682-.834-.79-.791-1.295-.725-1.142-1.032.13-.243 1.185.328 1.866.394z"], ["fill", "#CFCFCF", "d", "M60.757 55.887c.384.043 2.749-.49 2.834-.277.086.17-1.47.64-1.982 1.172-.169.171-.618.575-.895.533-.213-.021-.34-.469-.66-.81-.768-.768-1.258-.704-1.109-1.002.128-.233 1.151.32 1.812.384z"], ["fill", "#ccc", "d", "M60.771 55.9c.372.042 2.665-.475 2.748-.268.082.165-1.426.62-1.921 1.135-.166.166-.599.558-.869.517-.207-.021-.33-.454-.64-.785-.743-.744-1.218-.682-1.074-.971.125-.227 1.116.31 1.756.372z"], ["fill", "#C8C8C8", "d", "M60.785 55.913c.36.04 2.581-.46 2.661-.26.08.16-1.38.6-1.86 1.1-.16.16-.58.54-.84.5-.2-.02-.32-.44-.621-.76-.72-.72-1.18-.66-1.039-.94.12-.221 1.08.3 1.699.36z"], ["fill", "#C5C5C5", "d", "M60.801 55.926c.348.038 2.496-.445 2.573-.252.077.154-1.335.581-1.799 1.064-.155.155-.562.522-.813.483-.194-.02-.31-.425-.599-.735-.698-.696-1.142-.639-1.007-.91.116-.211 1.045.292 1.645.35z"], ["fill", "#C2C2C2", "d", "M60.815 55.939c.336.038 2.411-.43 2.486-.243.075.15-1.289.561-1.738 1.028-.15.149-.543.505-.785.467-.187-.019-.3-.411-.58-.71-.672-.673-1.103-.618-.972-.879.112-.205 1.01.28 1.589.337z"], ["fill", "#BFBFBF", "d", "M60.829 55.951c.325.036 2.327-.415 2.4-.235.072.145-1.245.542-1.678.993-.145.144-.523.487-.758.451-.181-.018-.288-.396-.559-.685-.65-.649-1.064-.596-.938-.849.108-.198.974.271 1.533.325z"], ["d", "M72.425 5.573c-.394.849-1.23 7.494-.08 6.745 1.161-.756 4.381-1.715 6.42-2.265 2.261-.608-5.548-6.283-6.34-4.48z"], ["fill", "#060606", "d", "M72.5 5.696c-.391.838-1.196 7.186-.076 6.459 1.128-.73 4.222-1.646 6.147-2.189 2.128-.614-5.306-6.008-6.071-4.27z"], ["fill", "#0C0C0C", "d", "M72.575 5.821c-.386.826-1.161 6.875-.071 6.174 1.095-.706 4.063-1.578 5.874-2.115 1.994-.621-5.064-5.733-5.803-4.059z"], ["fill", "#131313", "d", "M72.65 5.945c-.383.814-1.125 6.566-.067 5.889 1.062-.679 3.905-1.51 5.602-2.041 1.86-.627-4.822-5.458-5.535-3.848z"], ["fill", "#191919", "d", "M72.724 6.069c-.38.802-1.09 6.257-.062 5.603s3.745-1.441 5.328-1.966c1.727-.633-4.579-5.182-5.266-3.637z"], ["fill", "#1F1F1F", "d", "M72.8 6.193c-.375.79-1.056 5.947-.058 5.318.996-.629 3.585-1.373 5.056-1.892 1.592-.638-4.337-4.907-4.998-3.426z"], ["fill", "#262626", "d", "M72.874 6.317c-.372.778-1.021 5.638-.053 5.033.963-.604 3.427-1.305 4.782-1.817 1.459-.645-4.093-4.632-4.729-3.216z"], ["fill", "#2C2C2C", "d", "M72.95 6.441c-.369.766-.987 5.328-.05 4.747.931-.578 3.269-1.235 4.51-1.742 1.326-.651-3.852-4.356-4.46-3.005z"], ["fill", "#333", "d", "M73.025 6.565c-.365.754-.951 5.018-.045 4.461.897-.553 3.108-1.167 4.235-1.668 1.193-.655-3.607-4.08-4.19-2.793z"], ["fill", "#393939", "d", "M73.1 6.69c-.361.742-.916 4.708-.041 4.176.865-.528 2.951-1.099 3.963-1.594 1.058-.662-3.366-3.805-3.922-2.582z"], ["fill", "#3F3F3F", "d", "M73.175 6.814c-.357.73-.881 4.399-.036 3.89.831-.502 2.791-1.03 3.689-1.52.925-.667-3.124-3.529-3.653-2.37z"], ["fill", "#464646", "d", "M73.249 6.938c-.354.718-.846 4.089-.032 3.605.799-.478 2.632-.962 3.417-1.445.792-.673-2.881-3.254-3.385-2.16z"], ["fill", "#4C4C4C", "d", "M73.325 7.063c-.351.706-.812 3.779-.027 3.319.767-.452 2.473-.895 3.144-1.37.657-.68-2.639-2.979-3.117-1.949z"], ["fill", "#525252", "d", "M73.399 7.187c-.346.694-.776 3.47-.023 3.034.733-.427 2.314-.826 2.871-1.295.524-.687-2.396-2.704-2.848-1.739z"], ["fill", "#595959", "d", "M73.474 7.311c-.342.682-.741 3.161-.018 2.749.701-.402 2.156-.757 2.598-1.222.39-.691-2.154-2.428-2.58-1.527z"], ["fill", "#5F5F5F", "d", "M73.549 7.435c-.338.671-.706 2.851-.014 2.462.667-.376 1.997-.688 2.324-1.147.258-.696-1.91-2.151-2.31-1.315z"], ["fill", "#666", "d", "M73.624 7.559c-.334.659-.671 2.541-.009 2.177.636-.351 1.837-.62 2.052-1.072.122-.703-1.669-1.877-2.043-1.105z"], ["fill", "#6C6C6C", "d", "M73.699 7.683c-.331.647-.637 2.231-.005 1.892.603-.325 1.678-.551 1.778-.997-.009-.71-1.425-1.602-1.773-.895z"], ["fill", "#727272", "d", "M73.773 7.807c-.328.635-.601 1.922-.001 1.606.571-.3 1.52-.483 1.506-.923-.143-.714-1.182-1.325-1.505-.683z"], ["fill", "#797979", "d", "M73.849 7.931c-.325.623-.567 1.612.003 1.321.537-.275 1.361-.415 1.232-.849-.277-.72-.939-1.05-1.235-.472z"], ["fill", "#7F7F7F", "d", "M73.924 8.055c-.321.611-.532 1.303.007 1.035.505-.25 1.202-.346.96-.774-.411-.726-.697-.774-.967-.261z"], ["d", "M56.039 16.7c-.232.697 2.813 1.65 3.488 2.255.906.813.976 2.417 2.045 1.767.697-.418.163-1.348-1.117-2.766-1.882-2.094-4.206-1.838-4.416-1.256z"], ["fill", "#050505", "d", "M56.197 16.763c-.23.669 2.672 1.583 3.338 2.177.886.793.956 2.34 1.984 1.715.677-.405.145-1.315-1.08-2.673-1.799-2.003-4.032-1.778-4.242-1.219z"], ["fill", "#0A0A0A", "d", "M56.355 16.826c-.229.642 2.532 1.514 3.188 2.098.865.773.935 2.263 1.923 1.664.654-.391.126-1.281-1.043-2.581-1.717-1.912-3.859-1.717-4.068-1.181z"], ["fill", "#0F0F0F", "d", "M56.513 16.89c-.227.613 2.39 1.445 3.039 2.02.845.752.915 2.185 1.861 1.612.635-.378.111-1.248-1.005-2.488-1.635-1.824-3.686-1.659-3.895-1.144z"], ["fill", "#141414", "d", "M56.67 16.954c-.226.585 2.25 1.376 2.889 1.94.825.731.895 2.108 1.799 1.561.613-.365.093-1.214-.968-2.395-1.551-1.733-3.51-1.599-3.72-1.106z"], ["fill", "#191919", "d", "M56.827 17.017c-.224.557 2.109 1.308 2.739 1.862.805.711.875 2.031 1.739 1.51.592-.351.075-1.18-.931-2.302-1.469-1.645-3.337-1.54-3.547-1.07z"], ["fill", "#1E1E1E", "d", "M56.985 17.08c-.222.53 1.968 1.24 2.59 1.784.784.691.854 1.954 1.676 1.458.571-.338.058-1.147-.894-2.209-1.386-1.554-3.162-1.48-3.372-1.033z"], ["fill", "#232323", "d", "M57.143 17.144c-.222.501 1.827 1.172 2.441 1.706.764.67.833 1.877 1.615 1.407.55-.324.04-1.114-.856-2.117-1.305-1.465-2.99-1.421-3.2-.996z"], ["fill", "#282828", "d", "M57.301 17.208c-.22.473 1.686 1.103 2.291 1.627.744.65.814 1.799 1.555 1.355.528-.311.022-1.08-.82-2.024-1.223-1.375-2.816-1.362-3.026-.958z"], ["fill", "#2D2D2D", "d", "M57.459 17.272c-.22.445 1.544 1.034 2.141 1.548.724.629.792 1.722 1.492 1.304.508-.297.005-1.046-.783-1.931-1.138-1.286-2.64-1.303-2.85-.921z"], ["fill", "#333", "d", "M57.616 17.335c-.217.417 1.404.965 1.992 1.469.704.609.772 1.645 1.431 1.253.486-.284-.013-1.013-.747-1.838-1.055-1.196-2.466-1.243-2.676-.884z"], ["fill", "#383838", "d", "M57.774 17.398c-.216.389 1.263.897 1.842 1.391.683.589.752 1.568 1.369 1.202.465-.27-.03-.979-.709-1.746-.972-1.106-2.292-1.183-2.502-.847z"], ["fill", "#3D3D3D", "d", "M57.931 17.461c-.214.361 1.123.829 1.692 1.313.663.568.732 1.49 1.308 1.149.444-.256-.048-.945-.672-1.652-.89-1.017-2.117-1.124-2.328-.81z"], ["fill", "#424242", "d", "M58.089 17.525c-.212.333.982.76 1.542 1.234.642.547.712 1.413 1.247 1.098.423-.243-.065-.912-.636-1.56-.807-.926-1.942-1.064-2.153-.772z"], ["fill", "#474747", "d", "M58.248 17.589c-.211.305.84.691 1.392 1.155.622.527.691 1.336 1.186 1.047.401-.229-.083-.878-.599-1.466-.725-.838-1.77-1.006-1.979-.736z"], ["fill", "#4C4C4C", "d", "M58.406 17.652c-.21.278.698.624 1.242 1.078.602.506.671 1.258 1.124.995.381-.216-.1-.845-.561-1.374-.643-.748-1.596-.946-1.805-.699z"], ["fill", "#515151", "d", "M58.563 17.715c-.208.25.558.555 1.093.999.582.486.652 1.181 1.063.944.359-.202-.118-.811-.525-1.281-.559-.658-1.42-.887-1.631-.662z"], ["fill", "#565656", "d", "M58.72 17.779c-.206.221.418.486.944.92.562.465.63 1.104 1.001.893.338-.189-.135-.777-.487-1.188-.477-.569-1.247-.828-1.458-.625z"], ["fill", "#5B5B5B", "d", "M58.877 17.843c-.204.193.277.417.794.841.542.445.611 1.027.94.841.317-.176-.152-.744-.45-1.095-.394-.479-1.072-.768-1.284-.587z"], ["fill", "#606060", "d", "M59.036 17.906c-.204.166.136.349.644.763.521.425.591.95.878.791.296-.162-.17-.71-.413-1.002-.312-.391-.899-.71-1.109-.552z"], ["fill", "#666", "d", "M59.194 17.969c-.202.137-.006.281.494.685.501.404.571.872.816.739.275-.149-.188-.677-.376-.91-.228-.3-.724-.65-.934-.514z"], ["d", "M72.173 16.444c-.024.349.953.558 1.581.791.628.209 1.859 1.046 2.441 1.697.581.627 1.836 2.487 2.116 1.999.278-.441-.651-1.72-.907-2.255-.255-.535-1.045-1.697-2.301-2.092-1.094-.326-2.907-.419-2.93-.14z"], ["fill", "#060606", "d", "M72.273 16.469c-.023.338.926.543 1.536.771.611.204 1.807 1.021 2.372 1.654.564.611 1.786 2.419 2.058 1.946.271-.429-.625-1.67-.884-2.194-.257-.524-1.025-1.644-2.244-2.034-1.061-.322-2.815-.415-2.838-.143z"], ["fill", "#0C0C0C", "d", "M72.372 16.494c-.023.33.899.529 1.491.751.593.199 1.755.995 2.302 1.61.547.595 1.738 2.351 2.002 1.893.262-.416-.599-1.62-.862-2.133-.26-.513-1.004-1.59-2.188-1.977-1.026-.318-2.723-.408-2.745-.144z"], ["fill", "#131313", "d", "M72.472 16.518c-.023.32.873.516 1.446.732.576.194 1.702.968 2.233 1.567.53.578 1.688 2.283 1.944 1.839.254-.403-.573-1.571-.84-2.072-.264-.502-.983-1.537-2.13-1.918-.992-.314-2.631-.404-2.653-.148z"], ["fill", "#191919", "d", "M72.572 16.543c-.023.31.845.502 1.402.712.558.19 1.649.943 2.164 1.524.512.562 1.639 2.215 1.887 1.786.248-.39-.547-1.521-.817-2.011-.266-.491-.961-1.483-2.074-1.861-.96-.31-2.54-.399-2.562-.15z"], ["fill", "#1F1F1F", "d", "M72.672 16.568c-.023.3.817.487 1.358.692.54.185 1.596.918 2.093 1.481.494.545 1.589 2.146 1.831 1.732.237-.376-.522-1.471-.796-1.95-.269-.479-.94-1.43-2.017-1.803-.926-.305-2.447-.393-2.469-.152z"], ["fill", "#262626", "d", "M72.77 16.592c-.022.291.792.474 1.314.673.523.18 1.545.893 2.025 1.438.477.529 1.54 2.079 1.772 1.679.231-.364-.495-1.421-.773-1.89-.271-.468-.919-1.376-1.96-1.745-.891-.301-2.356-.387-2.378-.155z"], ["fill", "#2C2C2C", "d", "M72.87 16.617c-.021.282.765.46 1.27.654.504.175 1.492.867 1.955 1.394.46.512 1.49 2.011 1.716 1.626.222-.351-.47-1.372-.751-1.829-.273-.457-.898-1.323-1.904-1.687-.859-.298-2.264-.383-2.286-.158z"], ["fill", "#333", "d", "M72.97 16.642c-.022.272.737.446 1.226.634.487.17 1.439.841 1.886 1.351.442.496 1.44 1.942 1.658 1.573.214-.338-.445-1.322-.729-1.768-.276-.446-.878-1.27-1.846-1.629-.827-.294-2.173-.378-2.195-.161z"], ["fill", "#393939", "d", "M73.07 16.667c-.021.263.712.432 1.181.615.47.166 1.387.815 1.817 1.308.425.479 1.39 1.875 1.601 1.519.207-.324-.418-1.271-.706-1.707-.279-.436-.856-1.216-1.789-1.571-.794-.291-2.083-.374-2.104-.164z"], ["fill", "#3F3F3F", "d", "M73.17 16.691c-.022.253.684.418 1.136.595.453.161 1.335.79 1.747 1.265.408.463 1.342 1.806 1.545 1.466.197-.312-.393-1.222-.685-1.646-.281-.424-.834-1.162-1.731-1.513-.761-.287-1.991-.369-2.012-.167z"], ["fill", "#464646", "d", "M73.269 16.716c-.021.243.658.404 1.092.576.435.155 1.282.764 1.678 1.221.391.447 1.292 1.738 1.488 1.413.189-.299-.367-1.172-.663-1.585-.284-.414-.814-1.109-1.676-1.455-.726-.283-1.899-.364-1.919-.17z"], ["fill", "#4C4C4C", "d", "M73.369 16.741c-.021.234.629.39 1.047.557.417.15 1.229.738 1.608 1.178.373.43 1.243 1.67 1.43 1.359.182-.286-.341-1.122-.64-1.525-.287-.402-.792-1.055-1.619-1.397-.691-.279-1.806-.359-1.826-.172z"], ["fill", "#525252", "d", "M73.469 16.766c-.021.223.604.375 1.002.536.4.146 1.178.713 1.54 1.135.356.414 1.194 1.602 1.375 1.306.172-.273-.315-1.072-.618-1.464-.29-.391-.772-1.002-1.563-1.339-.66-.274-1.716-.353-1.736-.174z"], ["fill", "#595959", "d", "M73.569 16.791c-.021.214.576.362.958.517.382.141 1.125.687 1.47 1.091.338.397 1.144 1.534 1.316 1.253.166-.26-.29-1.022-.596-1.403-.291-.38-.75-.949-1.504-1.282-.627-.27-1.624-.348-1.644-.176z"], ["fill", "#5F5F5F", "d", "M73.669 16.815c-.021.205.549.348.913.498.365.135 1.072.662 1.401 1.049.32.38 1.094 1.465 1.258 1.199.158-.247-.262-.973-.573-1.342-.294-.368-.73-.895-1.448-1.223-.592-.267-1.532-.344-1.551-.181z"], ["fill", "#666", "d", "M73.768 16.84c-.02.194.522.333.869.478.347.131 1.019.636 1.332 1.005.303.364 1.043 1.397 1.201 1.146.15-.234-.237-.922-.551-1.281-.296-.358-.708-.841-1.391-1.166-.559-.263-1.441-.338-1.46-.182z"], ["fill", "#6C6C6C", "d", "M73.868 16.865c-.021.185.495.32.825.458.329.126.967.61 1.261.961.286.348.995 1.329 1.146 1.093.141-.221-.211-.873-.529-1.22-.299-.347-.688-.788-1.334-1.108-.528-.258-1.35-.333-1.369-.184z"], ["fill", "#727272", "d", "M73.968 16.889c-.021.176.468.306.779.439.312.122.914.584 1.192.919.27.331.946 1.261 1.088 1.039.133-.208-.186-.823-.506-1.16-.302-.335-.667-.734-1.277-1.05-.494-.254-1.258-.327-1.276-.187z"], ["fill", "#797979", "d", "M74.068 16.914c-.021.167.441.292.735.419.294.117.861.559 1.123.876.251.315.896 1.193 1.031.986.124-.194-.161-.773-.484-1.098-.305-.324-.646-.681-1.221-.992-.46-.251-1.166-.324-1.184-.191z"], ["fill", "#7F7F7F", "d", "M74.167 16.939c-.02.157.415.278.691.4.277.111.809.533 1.054.832.234.298.846 1.125.974.933.117-.182-.135-.724-.462-1.038-.308-.313-.625-.628-1.164-.934-.427-.247-1.075-.318-1.093-.193z"], ["fill", "#995900", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.462 3.742-10.042 6.183-4.511 3.091-6.067 4.464-7.532 5.927-2.278 2.279-4.44 3.045-7.904 3.045s-5.021-.72-6.09-1.674c-1.07-.93-2.254-3.301-2.139-6.834.093-3.511 1.208-6.719 1.744-12.182.232-2.348.208-5.253.208-7.833 0-3.255.047-6.021.745-6.439 1.255-.79 1.534-.836 3.021-.836s2.162.092 2.65.581c.464.464.279 1.534.116 3.045-.14 1.511.582 1.999 1.302 2.627.721.604 1.372 1.372 3.65 1.558 2.278.162 3.114-.209 4.184-.884 1.07-.674 2.58-1.882 3.139-2.58.534-.674 1.859-2.999 2.115-2.999.232 0 1.767-.534 2.627.721z"], ["fill", "#9E5E00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.496 3.73-10.093 6.136-4.483 3.025-6.104 4.372-7.594 5.78-2.231 2.176-4.331 2.933-7.721 2.912-3.361-.016-4.881-.704-5.945-1.653-1.064-.925-2.237-3.218-2.135-6.644.066-3.503 1.194-6.678 1.696-12.036.216-2.382.132-5.263.109-7.87-.025-3.25-.024-6.014.673-6.432 1.255-.789 1.534-.837 3.021-.837s2.164.094 2.65.581c.481.481.248 1.578.066 3.037-.204 1.504.471 2.094 1.226 2.779.755.665 1.449 1.443 3.723 1.621 2.335.156 3.234-.269 4.315-1.002 1.066-.713 2.509-1.905 3.071-2.637.53-.689 1.849-3.031 2.105-3.031.232.001 1.767-.533 2.627.722z"], ["fill", "#A36400", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.53 3.719-10.143 6.09-4.456 2.958-6.14 4.279-7.657 5.632-2.186 2.074-4.221 2.82-7.54 2.778-3.258-.03-4.74-.688-5.8-1.632-1.06-.92-2.219-3.134-2.131-6.453.04-3.496 1.18-6.637 1.65-11.891.198-2.417.053-5.275.007-7.906-.049-3.248-.093-6.007.602-6.425 1.255-.788 1.535-.837 3.021-.837 1.488 0 2.165.095 2.65.581.498.498.217 1.621.017 3.029-.268 1.497.36 2.189 1.147 2.931.791.726 1.528 1.516 3.799 1.686 2.392.149 3.352-.328 4.445-1.123 1.062-.75 2.438-1.929 3.003-2.694.526-.703 1.839-3.062 2.094-3.062.235.001 1.77-.533 2.63.722z"], ["fill", "#A86A00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.563 3.707-10.193 6.043-4.43 2.894-6.175 4.188-7.72 5.485-2.139 1.971-4.112 2.707-7.356 2.644-3.157-.045-4.599-.671-5.655-1.611-1.056-.916-2.203-3.049-2.128-6.262.012-3.489 1.167-6.596 1.604-11.745.18-2.453-.024-5.285-.094-7.942-.074-3.244-.163-6 .531-6.418 1.255-.787 1.534-.836 3.021-.836s2.166.096 2.65.581c.513.515.185 1.664-.034 3.021-.332 1.49.25 2.285 1.072 3.083.825.786 1.604 1.588 3.873 1.75 2.449.142 3.471-.388 4.574-1.243 1.059-.79 2.368-1.953 2.936-2.751.521-.716 1.828-3.092 2.084-3.092.234-.002 1.769-.536 2.629.719z"], ["fill", "#AD7000", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.597 3.695-10.243 5.997-4.403 2.827-6.211 4.096-7.783 5.337-2.092 1.869-4.002 2.594-7.174 2.511-3.054-.061-4.458-.656-5.508-1.59-1.051-.912-2.186-2.966-2.125-6.072-.013-3.483 1.153-6.556 1.558-11.601.163-2.487-.102-5.295-.194-7.979-.098-3.24-.233-5.993.46-6.411 1.255-.786 1.534-.836 3.021-.836s2.167.097 2.65.58c.53.531.154 1.707-.083 3.013-.396 1.483.14 2.38.995 3.235.86.847 1.683 1.661 3.947 1.813 2.507.135 3.59-.446 4.706-1.362 1.056-.827 2.296-1.976 2.869-2.808.516-.729 1.817-3.124 2.074-3.124.229.002 1.764-.532 2.624.723z"], ["fill", "#B27500", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.631 3.684-10.292 5.951-4.376 2.761-6.247 4.004-7.846 5.19-2.046 1.767-3.894 2.481-6.991 2.376-2.952-.075-4.318-.639-5.364-1.568-1.045-.907-2.167-2.883-2.121-5.881-.041-3.477 1.139-6.516 1.511-11.456.145-2.522-.181-5.306-.296-8.014-.123-3.238-.303-5.986.389-6.405 1.255-.784 1.534-.836 3.021-.836s2.167.099 2.65.581c.546.547.122 1.75-.133 3.005-.459 1.476.029 2.476.918 3.388.895.907 1.76 1.731 4.021 1.877 2.562.128 3.708-.505 4.835-1.482 1.053-.866 2.227-1.999 2.801-2.865.512-.744 1.808-3.155 2.063-3.155.233-.001 1.768-.535 2.628.72z"], ["fill", "#B77B00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.665 3.673-10.342 5.904-4.35 2.695-6.283 3.913-7.909 5.042-1.999 1.665-3.785 2.369-6.809 2.243-2.849-.091-4.178-.623-5.218-1.548-1.042-.902-2.15-2.799-2.119-5.69-.067-3.468 1.125-6.475 1.465-11.31.128-2.557-.258-5.316-.397-8.05-.147-3.233-.373-5.979.317-6.397 1.256-.783 1.535-.836 3.022-.836 1.487 0 2.168.1 2.649.581.563.563.091 1.793-.184 2.997-.523 1.469-.081 2.571.842 3.541.929.967 1.838 1.803 4.096 1.941 2.621.121 3.827-.565 4.966-1.602 1.049-.904 2.155-2.022 2.734-2.922.506-.758 1.796-3.187 2.052-3.187.234-.002 1.769-.536 2.629.719z"], ["fill", "#BC8100", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.699 3.661-10.392 5.858-4.323 2.628-6.32 3.821-7.972 4.895-1.953 1.562-3.675 2.256-6.626 2.11-2.748-.106-4.037-.607-5.074-1.528-1.037-.897-2.132-2.715-2.114-5.5-.094-3.461 1.111-6.434 1.419-11.165.11-2.592-.336-5.326-.499-8.086-.171-3.23-.442-5.972.248-6.391 1.255-.782 1.534-.837 3.021-.837s2.17.102 2.65.581c.579.579.059 1.836-.233 2.988-.587 1.462-.192 2.667.765 3.693.964 1.028 1.917 1.876 4.17 2.005 2.676.114 3.944-.625 5.095-1.722 1.045-.942 2.083-2.045 2.667-2.979.502-.772 1.786-3.218 2.042-3.218.232.001 1.767-.533 2.627.722z"], ["fill", "#C18700", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.733 3.649-10.442 5.811-4.296 2.563-6.356 3.729-8.035 4.748-1.906 1.46-3.565 2.144-6.443 1.976-2.646-.121-3.896-.59-4.929-1.507-1.032-.892-2.116-2.63-2.111-5.309-.121-3.454 1.097-6.393 1.372-11.018.093-2.627-.414-5.338-.6-8.123-.196-3.227-.512-5.965.176-6.383 1.256-.781 1.535-.837 3.022-.837 1.487 0 2.171.103 2.649.581.596.596.029 1.878-.283 2.98-.651 1.455-.302 2.761.688 3.845.999 1.088 1.994 1.948 4.244 2.069 2.734.107 4.063-.684 5.226-1.841 1.042-.981 2.013-2.069 2.599-3.036.498-.786 1.776-3.25 2.032-3.25.234-.001 1.769-.535 2.629.72z"], ["fill", "#C68C00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.766 3.637-10.492 5.764-4.269 2.496-6.392 3.638-8.097 4.6-1.86 1.357-3.457 2.03-6.261 1.843-2.544-.137-3.756-.575-4.783-1.486-1.028-.888-2.098-2.548-2.107-5.12-.147-3.447 1.083-6.352 1.325-10.873.076-2.662-.491-5.347-.701-8.158-.22-3.223-.581-5.958.106-6.376 1.255-.78 1.534-.836 3.021-.836s2.172.103 2.65.58c.612.612-.004 1.921-.333 2.972-.716 1.448-.413 2.857.612 3.998 1.034 1.148 2.071 2.02 4.319 2.132 2.79.1 4.181-.742 5.356-1.961 1.038-1.019 1.942-2.092 2.532-3.093.492-.8 1.765-3.281 2.021-3.281.231 0 1.766-.534 2.626.721z"], ["fill", "#CC9200", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.8 3.626-10.542 5.718-4.243 2.43-6.428 3.545-8.16 4.452-1.813 1.255-3.347 1.917-6.078 1.708-2.441-.151-3.615-.558-4.637-1.464-1.023-.883-2.081-2.465-2.105-4.929-.173-3.44 1.07-6.312 1.278-10.728.059-2.697-.569-5.358-.801-8.194-.245-3.22-.65-5.952.035-6.37 1.255-.779 1.534-.836 3.021-.836s2.173.104 2.65.58c.628.628-.035 1.964-.384 2.964-.779 1.441-.523 2.952.535 4.15 1.07 1.209 2.15 2.092 4.394 2.197 2.847.093 4.3-.802 5.485-2.081 1.035-1.057 1.871-2.116 2.465-3.149.488-.814 1.754-3.313 2.011-3.313.232 0 1.767-.534 2.627.721z"], ["fill", "#D19800", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.833 3.614-10.593 5.671-4.215 2.363-6.463 3.454-8.222 4.305-1.767 1.153-3.238 1.805-5.896 1.575-2.338-.167-3.474-.542-4.492-1.444-1.019-.879-2.064-2.381-2.101-4.738-.202-3.433 1.056-6.271 1.231-10.583.041-2.731-.647-5.368-.902-8.229-.27-3.216-.721-5.944-.037-6.363 1.255-.777 1.535-.836 3.021-.836 1.488 0 2.176.105 2.65.581.645.644-.066 2.008-.434 2.957-.842 1.434-.632 3.047.459 4.301 1.104 1.27 2.228 2.164 4.468 2.26 2.905.086 4.419-.861 5.617-2.2 1.031-1.096 1.8-2.138 2.397-3.207.483-.828 1.744-3.344 2-3.344.233-.001 1.768-.535 2.628.72z"], ["fill", "#D69E00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.868 3.603-10.642 5.625-4.189 2.297-6.5 3.362-8.286 4.157-1.719 1.051-3.128 1.692-5.713 1.441-2.236-.181-3.334-.525-4.348-1.422-1.013-.874-2.045-2.296-2.097-4.547-.228-3.426 1.042-6.229 1.187-10.438.023-2.766-.725-5.379-1.005-8.267-.292-3.212-.79-5.937-.106-6.355 1.255-.776 1.534-.836 3.021-.836s2.177.106 2.65.581c.66.66-.098 2.051-.484 2.948-.906 1.428-.743 3.143.381 4.454 1.14 1.33 2.306 2.236 4.542 2.325 2.962.079 4.538-.921 5.747-2.32 1.027-1.135 1.729-2.162 2.329-3.263.478-.842 1.733-3.376 1.99-3.376.233-.002 1.768-.536 2.628.719z"], ["fill", "#DBA300", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.9 3.591-10.691 5.578-4.164 2.231-6.537 3.27-8.348 4.01-1.675.948-3.02 1.579-5.533 1.307-2.134-.196-3.192-.509-4.201-1.402-1.009-.869-2.028-2.213-2.093-4.356-.255-3.42 1.027-6.189 1.139-10.293.006-2.801-.803-5.39-1.105-8.302-.317-3.209-.86-5.93-.179-6.349 1.256-.775 1.535-.836 3.022-.836 1.487 0 2.177.107 2.649.581.677.677-.128 2.094-.533 2.94-.971 1.42-.854 3.238.304 4.606 1.174 1.39 2.384 2.308 4.617 2.388 3.019.072 4.656-.979 5.876-2.44 1.024-1.173 1.659-2.186 2.263-3.321.474-.855 1.723-3.406 1.979-3.406.233 0 1.768-.534 2.628.721z"], ["fill", "#E0A900", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.935 3.58-10.743 5.532-4.135 2.165-6.571 3.178-8.41 3.862-1.627.846-2.91 1.467-5.349 1.174-2.032-.211-3.052-.493-4.056-1.381-1.005-.865-2.011-2.129-2.09-4.166-.282-3.413 1.015-6.149 1.093-10.147-.011-2.835-.881-5.4-1.206-8.338-.342-3.205-.93-5.923-.25-6.342 1.255-.774 1.535-.837 3.021-.837 1.488 0 2.179.109 2.65.581.693.693-.161 2.136-.583 2.932-1.034 1.413-.964 3.333.229 4.758 1.208 1.451 2.461 2.381 4.69 2.453 3.076.066 4.775-1.039 6.008-2.559 1.02-1.211 1.587-2.209 2.194-3.379.469-.869 1.712-3.437 1.969-3.437.232-.001 1.767-.535 2.627.72z"], ["fill", "#E5AF00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-6.968 3.568-10.792 5.485-4.108 2.098-6.607 3.086-8.473 3.714-1.581.744-2.801 1.353-5.167 1.04-1.93-.227-2.912-.477-3.911-1.36-1-.86-1.994-2.046-2.087-3.976-.307-3.405 1-6.107 1.046-10.001-.029-2.871-.959-5.411-1.307-8.375-.366-3.202-1-5.916-.32-6.334 1.256-.773 1.535-.836 3.022-.836 1.487 0 2.18.11 2.649.581.709.709-.191 2.18-.632 2.924-1.099 1.406-1.076 3.428.15 4.911 1.244 1.511 2.54 2.453 4.765 2.516 3.133.058 4.894-1.098 6.137-2.679 1.017-1.25 1.517-2.232 2.128-3.435.465-.883 1.702-3.47 1.958-3.47.233 0 1.768-.534 2.628.721z"], ["fill", "#EAB500", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-7.002 3.557-10.842 5.439-4.083 2.032-6.643 2.994-8.536 3.566-1.534.642-2.691 1.241-4.985.907-1.826-.242-2.77-.46-3.765-1.339-.995-.855-1.976-1.962-2.083-3.785-.335-3.398.986-6.067.999-9.856-.046-2.906-1.036-5.422-1.408-8.411-.391-3.199-1.07-5.91-.391-6.328 1.256-.772 1.535-.837 3.022-.837 1.487 0 2.181.112 2.649.581.726.726-.222 2.223-.684 2.915-1.162 1.399-1.185 3.524.075 5.063 1.278 1.572 2.617 2.525 4.84 2.581 3.189.051 5.012-1.158 6.267-2.798 1.014-1.289 1.446-2.255 2.06-3.492.46-.898 1.692-3.501 1.948-3.501.233 0 1.768-.534 2.628.721z"], ["fill", "#EFBA00", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-7.035 3.544-10.892 5.393-4.056 1.965-6.68 2.902-8.598 3.418-1.488.54-2.583 1.129-4.802.773-1.725-.256-2.63-.444-3.622-1.318-.989-.85-1.958-1.878-2.079-3.593-.361-3.392.972-6.027.953-9.711-.064-2.941-1.115-5.432-1.51-8.447-.414-3.195-1.139-5.902-.462-6.32 1.256-.77 1.535-.837 3.022-.837 1.487 0 2.182.113 2.649.581.743.742-.254 2.266-.732 2.907-1.227 1.394-1.296 3.62-.003 5.216 1.313 1.632 2.696 2.597 4.915 2.644 3.246.045 5.13-1.216 6.397-2.918 1.01-1.326 1.374-2.278 1.992-3.548.455-.912 1.682-3.533 1.937-3.533.234-.002 1.769-.536 2.629.719z"], ["fill", "#F4C000", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-7.069 3.533-10.942 5.347-4.029 1.899-6.716 2.81-8.662 3.271-1.441.437-2.473 1.016-4.619.639-1.623-.272-2.49-.428-3.476-1.297-.986-.847-1.941-1.794-2.076-3.404-.389-3.384.957-5.985.907-9.565-.082-2.976-1.194-5.442-1.612-8.482-.439-3.192-1.208-5.896-.533-6.314 1.256-.769 1.535-.836 3.022-.836 1.487 0 2.183.114 2.649.581.759.758-.285 2.308-.782 2.899-1.291 1.386-1.407 3.714-.08 5.368 1.348 1.692 2.773 2.669 4.988 2.708 3.303.037 5.249-1.276 6.527-3.039 1.007-1.364 1.305-2.301 1.925-3.605.451-.925 1.671-3.563 1.927-3.563.236-.003 1.771-.537 2.631.718z"], ["fill", "#F9C600", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-7.103 3.521-10.992 5.299-4.001 1.833-6.752 2.719-8.725 3.124-1.394.335-2.364.904-4.436.505-1.521-.287-2.349-.411-3.33-1.276-.981-.842-1.924-1.711-2.072-3.213-.415-3.377.944-5.945.86-9.42-.099-3.011-1.27-5.453-1.711-8.519-.464-3.188-1.279-5.888-.604-6.307 1.255-.768 1.534-.836 3.021-.836s2.185.115 2.65.581c.773.774-.317 2.351-.833 2.891-1.354 1.378-1.517 3.81-.156 5.52 1.383 1.753 2.851 2.741 5.062 2.771 3.361.031 5.368-1.335 6.658-3.157 1.003-1.403 1.233-2.324 1.857-3.663.447-.939 1.662-3.595 1.917-3.595.233 0 1.768-.534 2.628.721z"], ["fill", "#fc0", "d", "M107.74 86.485c1.441 2.092-.047 4.812 1 6.486 1.72 2.743 5.184 5.508 6.509 6.276.953.581 2.301 1.139 2.254 2.836-.07 1.93-1.023 2.44-1.557 2.976-1.07 1.069-7.137 3.51-11.042 5.253-3.976 1.767-6.788 2.627-8.788 2.976-1.348.233-2.254.79-4.254.372-1.418-.302-2.208-.396-3.184-1.255-.976-.836-1.906-1.627-2.069-3.022-.442-3.371.93-5.905.813-9.275-.116-3.045-1.348-5.463-1.813-8.554-.488-3.185-1.348-5.882-.673-6.3 1.255-.767 1.534-.836 3.021-.836s2.186.116 2.65.58c.791.791-.349 2.395-.883 2.883-1.418 1.372-1.628 3.905-.233 5.671 1.418 1.814 2.929 2.813 5.138 2.837 3.417.023 5.485-1.395 6.787-3.278 1-1.442 1.164-2.348 1.791-3.72.442-.953 1.65-3.625 1.906-3.625.232-.002 1.767-.536 2.627.719zM85.989 90.758c-.229-.084-1.27-4.911-.708-5.244 1.082-.645 1.373-.749 2.704-.749 1.333 0 1.956.104 2.372.52.687.687-.374 2.164-.79 2.581-1.206 1.185-3.349 2.974-3.578 2.892z"], ["fill", "#FFCC02", "d", "M86.063 90.604c-.249-.106-1.324-4.752-.764-5.083 1.08-.643 1.381-.713 2.686-.713 1.333 0 1.93.087 2.352.518.679.689-.361 2.121-.774 2.535-1.204 1.181-3.256 2.843-3.5 2.743z"], ["fill", "#FFCC05", "d", "M86.137 90.449c-.268-.126-1.379-4.593-.822-4.922 1.078-.64 1.39-.678 2.669-.678 1.333 0 1.904.069 2.331.514.673.693-.348 2.08-.758 2.491-1.201 1.178-3.16 2.714-3.42 2.595z"], ["fill", "#FFCC07", "d", "M86.211 90.296c-.289-.149-1.435-4.436-.879-4.762 1.076-.639 1.398-.644 2.651-.644 1.333 0 1.877.052 2.31.511.667.696-.333 2.039-.741 2.445-1.197 1.177-3.066 2.586-3.341 2.45z"], ["fill", "#FFCD0A", "d", "M86.285 90.142c-.309-.171-1.49-4.278-.936-4.603 1.074-.637 1.406-.608 2.633-.608 1.332 0 1.851.034 2.29.507.661.7-.321 1.998-.725 2.402-1.195 1.173-2.971 2.456-3.262 2.302z"], ["fill", "#FFCD0C", "d", "M86.358 89.987c-.327-.193-1.545-4.119-.993-4.442 1.071-.635 1.414-.572 2.615-.572 1.333 0 1.825.016 2.268.504.655.703-.307 1.956-.707 2.357-1.191 1.17-2.876 2.326-3.183 2.153z"], ["fill", "#FFCD0F", "d", "M86.432 89.834c-.347-.214-1.6-3.962-1.051-4.282 1.07-.632 1.423-.537 2.599-.537 1.332 0 1.799-.002 2.247.501.649.706-.292 1.915-.691 2.311-1.188 1.167-2.782 2.196-3.104 2.007z"], ["fill", "#FFCD11", "d", "M86.506 89.679c-.368-.236-1.656-3.802-1.108-4.122 1.067-.63 1.431-.501 2.581-.501 1.332 0 1.773-.02 2.227.498.643.708-.281 1.873-.675 2.267-1.185 1.164-2.687 2.065-3.025 1.858z"], ["fill", "#FFCE14", "d", "M86.58 89.526c-.386-.259-1.71-3.646-1.165-3.962 1.064-.629 1.44-.466 2.562-.466 1.331 0 1.748-.037 2.206.495.637.711-.267 1.831-.658 2.223-1.181 1.161-2.591 1.935-2.945 1.71z"], ["fill", "#FFCE16", "d", "M86.654 89.372c-.407-.279-1.765-3.487-1.223-3.801 1.064-.626 1.448-.431 2.546-.431 1.331 0 1.722-.055 2.185.492.631.714-.252 1.789-.641 2.177-1.179 1.158-2.498 1.806-2.867 1.563z"], ["fill", "#FFCE19", "d", "M86.727 89.218c-.426-.302-1.82-3.329-1.279-3.641 1.061-.625 1.456-.396 2.528-.396 1.331 0 1.695-.073 2.164.489.625.718-.239 1.748-.624 2.133-1.176 1.155-2.403 1.675-2.789 1.415z"], ["fill", "#FFCE1C", "d", "M86.802 89.064c-.446-.323-1.876-3.171-1.337-3.48 1.059-.622 1.465-.36 2.511-.36 1.331 0 1.669-.09 2.143.486.618.721-.226 1.707-.608 2.088-1.173 1.15-2.31 1.544-2.709 1.266z"], ["fill", "#FFCF1E", "d", "M86.875 88.91c-.466-.344-1.931-3.012-1.393-3.32 1.056-.621 1.473-.325 2.492-.325 1.332 0 1.644-.108 2.123.482.612.725-.212 1.665-.591 2.043-1.17 1.149-2.215 1.416-2.631 1.12z"], ["fill", "#FFCF21", "d", "M86.949 88.756c-.486-.367-1.986-2.854-1.451-3.161 1.055-.618 1.481-.289 2.475-.289 1.331 0 1.618-.126 2.102.48.605.727-.2 1.622-.575 1.998-1.167 1.146-2.119 1.285-2.551.972z"], ["fill", "#FFCF23", "d", "M87.023 88.602c-.505-.389-2.041-2.697-1.508-3 1.053-.616 1.489-.254 2.457-.254 1.331 0 1.592-.144 2.081.477.599.73-.186 1.582-.558 1.955-1.164 1.14-2.025 1.153-2.472.822z"], ["fill", "#FFCF26", "d", "M87.097 88.448c-.525-.411-2.096-2.538-1.565-2.839 1.051-.614 1.498-.219 2.44-.219 1.331 0 1.565-.161 2.06.473.593.733-.171 1.54-.541 1.909-1.162 1.139-1.931 1.025-2.394.676z"], ["fill", "#FFD028", "d", "M87.171 88.294c-.545-.433-2.152-2.381-1.623-2.681 1.049-.612 1.506-.182 2.422-.182 1.331 0 1.54-.18 2.039.47.587.735-.158 1.498-.524 1.863-1.158 1.137-1.836.896-2.314.53z"], ["fill", "#FFD02B", "d", "M87.244 88.14c-.565-.455-2.207-2.222-1.68-2.52 1.046-.609 1.514-.147 2.404-.147 1.331 0 1.513-.197 2.018.468.58.739-.145 1.455-.508 1.818-1.153 1.134-1.739.764-2.234.381z"], ["fill", "#FFD02D", "d", "M87.318 87.985c-.584-.476-2.261-2.062-1.737-2.359 1.045-.607 1.523-.112 2.387-.112 1.331 0 1.487-.215 1.997.464.575.743-.131 1.414-.491 1.774-1.151 1.132-1.646.635-2.156.233z"], ["fill", "#FFD030", "d", "M87.392 87.832c-.604-.498-2.317-1.905-1.794-2.199 1.042-.606 1.531-.077 2.368-.077 1.332 0 1.462-.232 1.977.461.568.746-.117 1.372-.475 1.729-1.147 1.128-1.551.506-2.076.086z"], ["fill", "#FFD133", "d", "M87.466 87.678c-.624-.52-2.372-1.748-1.851-2.039 1.04-.603 1.54-.042 2.351-.042 1.331 0 1.435-.25 1.956.458.561.749-.104 1.331-.458 1.685-1.145 1.125-1.457.375-1.998-.062z"], ["fill", "#fc0", "d", "M107.461 86.758c1.208 1.763-.02 4.12.853 5.526-2.199-2.021-3.209-2.852-6.24.119.833-1.208 1.011-2.021 1.526-3.169.356-.792 1.406-3.09 1.624-3.09.198 0 1.525-.436 2.237.614z"], ["fill", "#FFCC02", "d", "M107.449 86.77c1.181 1.722.012 4.068.833 5.4-2.153-1.969-3.141-2.798-6.105.104.781-1.139.977-1.968 1.487-3.097.362-.795 1.37-3.003 1.599-3.006.202-.003 1.49-.426 2.186.599z"], ["fill", "#FFCC05", "d", "M107.436 86.782c1.152 1.682.042 4.016.812 5.273-2.106-1.917-3.074-2.745-5.971.089.732-1.069.944-1.916 1.449-3.025.368-.797 1.334-2.917 1.574-2.923.208-.005 1.456-.415 2.136.586z"], ["fill", "#FFCC07", "d", "M107.424 86.794c1.124 1.643.074 3.966.793 5.146-2.062-1.865-3.005-2.69-5.835.075.681-1.001.91-1.863 1.41-2.954.375-.799 1.298-2.829 1.549-2.839.211-.006 1.419-.404 2.083.572z"], ["fill", "#FFCD0A", "d", "M107.411 86.806c1.096 1.602.104 3.915.773 5.021-2.016-1.814-2.939-2.636-5.702.061.632-.933.877-1.812 1.373-2.883.379-.801 1.263-2.743 1.523-2.755.216-.01 1.386-.395 2.033.556z"], ["fill", "#FFCD0C", "d", "M107.399 86.818c1.067 1.562.136 3.863.754 4.894-1.971-1.763-2.871-2.583-5.567.046.581-.863.843-1.76 1.334-2.812.385-.803 1.227-2.655 1.497-2.671.221-.011 1.35-.384 1.982.543z"], ["fill", "#FFCD0F", "d", "M107.386 86.83c1.04 1.521.167 3.812.735 4.767-1.926-1.711-2.804-2.528-5.434.032.531-.794.811-1.708 1.296-2.74.391-.806 1.19-2.569 1.472-2.588.226-.013 1.317-.373 1.931.529z"], ["fill", "#FFCD11", "d", "M107.374 86.843c1.011 1.48.197 3.759.715 4.639-1.88-1.658-2.736-2.473-5.299.017.481-.725.776-1.654 1.257-2.668.397-.808 1.154-2.482 1.446-2.504.231-.015 1.282-.362 1.881.516z"], ["fill", "#FFCE14", "d", "M107.361 86.855c.983 1.44.229 3.708.695 4.513-1.834-1.607-2.667-2.419-5.164.003.431-.656.744-1.603 1.221-2.597.402-.811 1.118-2.395 1.42-2.421.235-.017 1.246-.351 1.828.502z"], ["fill", "#FFCE16", "d", "M107.348 86.867c.955 1.399.26 3.657.676 4.387-1.788-1.555-2.601-2.365-5.029-.012.38-.587.709-1.551 1.181-2.526.409-.812 1.083-2.308 1.395-2.336.24-.02 1.212-.341 1.777.487z"], ["fill", "#FFCE19", "d", "M107.336 86.879c.926 1.359.292 3.605.657 4.26-1.743-1.503-2.533-2.311-4.896-.026.33-.518.678-1.498 1.144-2.454.414-.815 1.047-2.222 1.37-2.253.244-.022 1.175-.332 1.725.473z"], ["fill", "#FFCE1C", "d", "M107.324 86.891c.897 1.319.321 3.554.637 4.133-1.697-1.452-2.465-2.257-4.761-.041.28-.449.644-1.446 1.105-2.383.421-.817 1.011-2.134 1.345-2.168.248-.024 1.14-.32 1.674.459z"], ["fill", "#FFCF1E", "d", "M107.311 86.904c.869 1.277.352 3.502.618 4.006-1.653-1.4-2.398-2.204-4.627-.056.229-.379.61-1.393 1.068-2.31.425-.819.974-2.048 1.319-2.087.252-.024 1.105-.309 1.622.447z"], ["fill", "#FFCF21", "d", "M107.298 86.915c.841 1.238.384 3.451.599 3.88-1.606-1.349-2.33-2.148-4.494-.07.18-.31.577-1.342 1.03-2.239.432-.821.938-1.96 1.294-2.002.258-.027 1.071-.299 1.571.431z"], ["fill", "#FFCF23", "d", "M107.286 86.927c.813 1.198.415 3.401.578 3.754-1.561-1.298-2.262-2.095-4.358-.084.129-.243.544-1.29.99-2.168.438-.824.903-1.875 1.27-1.919.261-.029 1.035-.289 1.52.417z"], ["fill", "#FFCF26", "d", "M107.273 86.939c.786 1.157.446 3.349.559 3.628-1.515-1.245-2.195-2.042-4.225-.099.079-.173.51-1.237.953-2.096.443-.826.867-1.787 1.244-1.835.267-.034 1.001-.279 1.469.402z"], ["fill", "#FFD028", "d", "M107.261 86.952c.756 1.117.476 3.297.539 3.501-1.47-1.194-2.127-1.987-4.089-.114.029-.104.477-1.185.914-2.024.449-.828.831-1.701 1.217-1.751.272-.035.967-.269 1.419.388z"], ["fill", "#FFD02B", "d", "M107.248 86.963c.729 1.077.508 3.246.52 3.375-1.425-1.142-2.06-1.933-3.956-.127-.021-.036.443-1.133.876-1.954.455-.83.795-1.613 1.192-1.668.277-.037.933-.257 1.368.374z"], ["fill", "#FFD02D", "d", "M107.235 86.976c.702 1.036.54 3.194.501 3.248-1.379-1.091-1.992-1.879-3.821-.142-.072.033.41-1.082.838-1.883.46-.833.758-1.526 1.167-1.583.281-.04.897-.248 1.315.36z"], ["fill", "#FFD030", "d", "M107.223 86.987c.671.996.571 3.144.481 3.122-1.334-1.039-1.925-1.825-3.688-.157-.122.103.377-1.03.8-1.81.466-.835.723-1.44 1.142-1.501.286-.041.862-.236 1.265.346z"], ["fill", "#FFD133", "d", "M107.21 87c.645.956.602 3.092.462 2.996-1.289-.988-1.857-1.771-3.554-.171-.172.171.344-.978.762-1.74.472-.837.688-1.352 1.117-1.417.291-.044.827-.227 1.213.332z"], ["fill", "#fc0", "d", "M108.46 93.25c1.93 2.534 5.51 5.253 6.788 5.998.929.535 2.278 1.162 2.254 2.836-.047 1.906-1.023 2.44-1.557 2.976-1.07 1.069-7.161 3.533-11.042 5.253-3.952 1.743-6.812 2.65-8.788 2.976-1.325.209-2.278.767-4.254.372-1.395-.279-2.231-.418-3.184-1.255-.953-.813-1.93-1.674-2.069-3.022-.396-3.348 1.186-5.462 2.719-8.369 1.255-2.325 3.789-2.79 5.37-2.58 5.672.767 5.3-2.79 6.857-4.347 1.443-1.443 5.558-2.606 6.906-.838z"], ["fill", "#FFCC02", "d", "M108.443 93.272c1.925 2.529 5.497 5.242 6.772 5.983.928.534 2.272 1.16 2.25 2.83-.047 1.902-1.021 2.435-1.555 2.969-1.066 1.066-7.212 3.549-11.054 5.194-3.958 1.671-6.666 2.542-8.654 2.893-1.316.221-2.311.773-4.28.38-1.39-.276-2.186-.398-3.134-1.231-.949-.811-1.858-1.602-1.997-2.944-.391-3.338 1.087-5.378 2.598-8.282 1.255-2.381 3.806-2.723 5.38-2.51 5.655.779 5.233-2.893 6.787-4.447 1.437-1.436 5.542-2.597 6.887-.835z"], ["fill", "#FFCC05", "d", "M108.428 93.297c1.92 2.522 5.482 5.229 6.756 5.969.925.532 2.267 1.157 2.244 2.823-.047 1.897-1.019 2.43-1.551 2.962-1.064 1.064-7.266 3.565-11.068 5.135-3.964 1.599-6.521 2.435-8.519 2.809-1.309.233-2.343.779-4.308.388-1.383-.273-2.137-.377-3.083-1.206-.944-.807-1.788-1.53-1.924-2.866-.387-3.329.987-5.293 2.474-8.194 1.256-2.438 3.825-2.657 5.392-2.442 5.636.792 5.164-2.996 6.714-4.545 1.435-1.435 5.529-2.592 6.873-.833z"], ["fill", "#FFCC07", "d", "M108.41 93.321c1.916 2.515 5.47 5.216 6.74 5.955.923.531 2.263 1.154 2.239 2.816-.046 1.893-1.015 2.424-1.546 2.954-1.062 1.062-7.319 3.582-11.081 5.078-3.971 1.525-6.378 2.325-8.386 2.725-1.299.244-2.376.785-4.334.396-1.379-.27-2.089-.355-3.033-1.18-.94-.804-1.717-1.459-1.852-2.787-.382-3.321.888-5.209 2.352-8.107 1.256-2.495 3.842-2.59 5.402-2.373 5.618.805 5.097-3.1 6.643-4.646 1.432-1.431 5.517-2.586 6.856-.831z"], ["fill", "#FFCD0A", "d", "M108.393 93.344c1.911 2.51 5.458 5.205 6.724 5.941.921.53 2.256 1.151 2.233 2.81-.046 1.887-1.013 2.417-1.543 2.947-1.059 1.06-7.372 3.598-11.093 5.018-3.977 1.453-6.234 2.218-8.253 2.642-1.29.256-2.408.791-4.361.404-1.372-.268-2.042-.334-2.982-1.155-.935-.801-1.646-1.388-1.779-2.71-.378-3.312.79-5.124 2.229-8.02 1.256-2.551 3.86-2.524 5.413-2.304 5.602.817 5.029-3.202 6.571-4.745 1.43-1.427 5.505-2.578 6.841-.828z"], ["fill", "#FFCD0C", "d", "M108.376 93.368c1.907 2.504 5.445 5.192 6.708 5.927.919.528 2.251 1.148 2.228 2.802-.046 1.884-1.011 2.413-1.54 2.941-1.057 1.056-7.425 3.613-11.106 4.959-3.983 1.379-6.088 2.109-8.119 2.558-1.281.268-2.44.797-4.387.412-1.367-.264-1.995-.313-2.931-1.13-.931-.798-1.575-1.315-1.707-2.632-.374-3.302.689-5.038 2.106-7.932 1.257-2.607 3.878-2.458 5.423-2.234 5.583.83 4.961-3.304 6.5-4.844 1.427-1.424 5.493-2.573 6.825-.827z"], ["fill", "#FFCD0F", "d", "M108.36 93.391c1.903 2.498 5.432 5.179 6.693 5.913.916.527 2.247 1.146 2.223 2.796-.045 1.879-1.008 2.406-1.535 2.934-1.055 1.054-7.479 3.63-11.119 4.9-3.99 1.308-5.945 2.002-7.985 2.476-1.273.278-2.472.802-4.414.42-1.362-.262-1.947-.293-2.881-1.105-.926-.795-1.503-1.245-1.635-2.554-.369-3.294.591-4.954 1.984-7.845 1.258-2.664 3.896-2.392 5.435-2.166 5.564.843 4.892-3.408 6.429-4.944 1.419-1.421 5.475-2.566 6.805-.825z"], ["fill", "#FFCD11", "d", "M108.344 93.415c1.897 2.492 5.418 5.167 6.676 5.899.914.525 2.24 1.143 2.217 2.789-.046 1.875-1.006 2.4-1.532 2.926-1.052 1.053-7.53 3.646-11.132 4.842-3.996 1.234-5.8 1.893-7.852 2.392-1.264.29-2.504.808-4.44.427-1.355-.259-1.9-.272-2.829-1.08-.922-.792-1.433-1.173-1.562-2.476-.366-3.285.491-4.869 1.86-7.758 1.258-2.72 3.913-2.325 5.445-2.096 5.547.855 4.825-3.511 6.356-5.043 1.419-1.417 5.466-2.56 6.793-.822z"], ["fill", "#FFCE14", "d", "M108.326 93.438c1.893 2.486 5.406 5.155 6.66 5.885.912.524 2.235 1.14 2.212 2.783-.046 1.87-1.003 2.395-1.528 2.92-1.05 1.049-7.584 3.662-11.145 4.783-4.003 1.161-5.656 1.784-7.718 2.307-1.256.303-2.537.815-4.467.436-1.351-.255-1.853-.25-2.779-1.054-.917-.79-1.362-1.102-1.49-2.398-.36-3.276.394-4.784 1.738-7.671 1.259-2.778 3.931-2.259 5.456-2.026 5.529.867 4.757-3.615 6.285-5.144 1.416-1.414 5.453-2.554 6.776-.821z"], ["fill", "#FFCE16", "d", "M108.31 93.462c1.889 2.48 5.393 5.143 6.644 5.871.91.523 2.23 1.138 2.208 2.776-.046 1.866-1.001 2.389-1.525 2.912-1.047 1.047-7.636 3.679-11.158 4.724-4.008 1.089-5.511 1.677-7.584 2.225-1.247.315-2.57.821-4.494.444-1.345-.253-1.805-.23-2.729-1.029-.912-.786-1.29-1.03-1.417-2.32-.356-3.267.293-4.699 1.616-7.583 1.258-2.833 3.949-2.192 5.466-1.958 5.512.881 4.689-3.717 6.214-5.242 1.411-1.412 5.439-2.55 6.759-.82z"], ["fill", "#FFCE19", "d", "M108.293 93.485c1.884 2.475 5.38 5.13 6.628 5.857.908.522 2.226 1.135 2.202 2.77-.045 1.861-.998 2.383-1.52 2.905-1.045 1.044-7.69 3.694-11.17 4.665-4.015 1.016-5.367 1.568-7.451 2.141-1.239.327-2.603.828-4.521.453-1.339-.25-1.758-.209-2.678-1.005-.909-.783-1.219-.958-1.345-2.242-.352-3.258.195-4.615 1.494-7.497 1.258-2.89 3.965-2.125 5.476-1.888 5.495.893 4.621-3.821 6.142-5.342 1.408-1.407 5.426-2.541 6.743-.817z"], ["fill", "#FFCE1C", "d", "M108.276 93.509c1.88 2.469 5.367 5.118 6.613 5.842.905.521 2.219 1.133 2.196 2.764-.046 1.856-.997 2.377-1.517 2.898-1.042 1.042-7.743 3.71-11.184 4.607-4.021.942-5.222 1.46-7.316 2.057-1.23.338-2.635.833-4.547.46-1.334-.248-1.711-.188-2.627-.979-.904-.78-1.148-.888-1.272-2.165-.348-3.249.095-4.529 1.37-7.409 1.26-2.947 3.984-2.059 5.488-1.819 5.477.905 4.554-3.923 6.071-5.441 1.403-1.404 5.411-2.535 6.725-.815z"], ["fill", "#FFCF1E", "d", "M108.26 93.532c1.875 2.462 5.354 5.106 6.597 5.829.904.52 2.213 1.129 2.191 2.756-.045 1.853-.994 2.372-1.514 2.892-1.039 1.039-7.794 3.726-11.196 4.547-4.026.87-5.077 1.352-7.184 1.974-1.221.351-2.665.839-4.572.468-1.328-.245-1.664-.167-2.577-.954-.899-.777-1.078-.816-1.2-2.086-.344-3.239-.005-4.445 1.248-7.322 1.259-3.004 4-1.993 5.498-1.75 5.458.918 4.487-4.028 6-5.541 1.4-1.399 5.398-2.529 6.709-.813z"], ["fill", "#FFCF21", "d", "M108.243 93.556c1.87 2.457 5.341 5.094 6.58 5.814.902.518 2.208 1.127 2.187 2.75-.045 1.849-.992 2.367-1.51 2.885-1.037 1.037-7.849 3.742-11.209 4.488-4.033.797-4.934 1.245-7.05 1.891-1.213.361-2.698.844-4.599.476-1.323-.241-1.617-.146-2.526-.929-.895-.774-1.007-.744-1.128-2.008-.34-3.231-.103-4.36 1.125-7.234 1.26-3.061 4.019-1.927 5.508-1.682 5.442.931 4.418-4.129 5.928-5.64 1.398-1.397 5.386-2.524 6.694-.811z"], ["fill", "#FFCF23", "d", "M108.226 93.58c1.866 2.451 5.328 5.081 6.564 5.8.9.517 2.203 1.125 2.181 2.743-.045 1.843-.99 2.361-1.507 2.877-1.034 1.034-7.901 3.759-11.222 4.431-4.04.725-4.788 1.136-6.917 1.808-1.204.373-2.73.85-4.625.484-1.318-.239-1.57-.126-2.476-.904-.891-.771-.935-.672-1.055-1.93-.335-3.222-.202-4.275 1.002-7.148 1.261-3.116 4.038-1.86 5.519-1.611 5.424.943 4.351-4.233 5.858-5.74 1.395-1.395 5.374-2.519 6.678-.81z"], ["fill", "#FFCF26", "d", "M108.21 93.604c1.861 2.445 5.315 5.069 6.548 5.786.897.516 2.198 1.122 2.175 2.736-.044 1.839-.986 2.354-1.502 2.871-1.032 1.031-7.955 3.774-11.235 4.37-4.045.652-4.644 1.029-6.783 1.724-1.196.385-2.763.857-4.652.493-1.312-.236-1.522-.105-2.425-.88-.886-.767-.865-.601-.982-1.851-.332-3.213-.302-4.19.879-7.06 1.26-3.174 4.055-1.794 5.529-1.543 5.406.956 4.283-4.336 5.785-5.838 1.392-1.391 5.362-2.514 6.663-.808z"], ["fill", "#FFD028", "d", "M108.192 93.628c1.858 2.438 5.303 5.055 6.534 5.772.894.514 2.192 1.118 2.17 2.729-.045 1.835-.985 2.349-1.499 2.863-1.03 1.03-8.007 3.791-11.249 4.312-4.052.579-4.499.92-6.648 1.641-1.188.396-2.796.862-4.68.499-1.307-.232-1.474-.083-2.374-.854-.882-.765-.793-.529-.91-1.774-.327-3.204-.401-4.105.758-6.973 1.26-3.23 4.071-1.728 5.54-1.473 5.388.968 4.215-4.44 5.714-5.938 1.387-1.387 5.347-2.506 6.644-.804z"], ["fill", "#FFD02B", "d", "M108.176 93.651c1.852 2.433 5.289 5.043 6.516 5.758.894.513 2.188 1.116 2.165 2.723-.044 1.831-.981 2.344-1.495 2.857-1.027 1.026-8.061 3.807-11.261 4.253-4.058.506-4.354.812-6.515 1.557-1.178.408-2.828.868-4.706.508-1.301-.23-1.427-.063-2.323-.829-.877-.762-.722-.458-.837-1.696-.324-3.195-.5-4.02.633-6.886 1.262-3.286 4.09-1.661 5.551-1.404 5.371.982 4.147-4.542 5.642-6.038 1.385-1.384 5.336-2.5 6.63-.803z"], ["fill", "#FFD02D", "d", "M108.159 93.675c1.848 2.426 5.276 5.031 6.501 5.743.89.513 2.182 1.114 2.159 2.717-.044 1.826-.979 2.338-1.491 2.85-1.025 1.024-8.114 3.823-11.273 4.194-4.064.434-4.21.704-6.382 1.474-1.169.42-2.86.875-4.732.517-1.296-.228-1.38-.042-2.273-.805-.872-.759-.652-.386-.764-1.618-.319-3.186-.599-3.936.511-6.799 1.262-3.343 4.107-1.595 5.562-1.335 5.353.994 4.08-4.646 5.571-6.137 1.379-1.38 5.32-2.494 6.611-.801z"], ["fill", "#FFD030", "d", "M108.143 93.698c1.843 2.421 5.263 5.02 6.485 5.73.888.511 2.176 1.11 2.154 2.709-.045 1.822-.978 2.332-1.488 2.843-1.022 1.022-8.167 3.839-11.287 4.136-4.069.361-4.065.596-6.248 1.391-1.161.431-2.892.88-4.759.524-1.29-.225-1.332-.021-2.221-.779-.868-.756-.581-.314-.693-1.54-.314-3.177-.698-3.851.389-6.711 1.262-3.399 4.125-1.529 5.572-1.266 5.335 1.006 4.011-4.749 5.5-6.236 1.376-1.378 5.307-2.489 6.596-.801z"], ["fill", "#FFD133", "d", "M108.125 93.722c1.839 2.414 5.251 5.007 6.47 5.715.886.51 2.171 1.108 2.148 2.703-.044 1.817-.975 2.326-1.484 2.836-1.019 1.019-8.22 3.855-11.299 4.076-4.077.288-3.921.487-6.114 1.308-1.153.443-2.925.886-4.785.531-1.285-.221-1.285 0-2.171-.753-.864-.754-.51-.244-.621-1.462-.311-3.168-.797-3.766.266-6.624 1.263-3.457 4.143-1.462 5.583-1.197 5.317 1.019 3.944-4.852 5.429-6.336 1.372-1.373 5.294-2.481 6.578-.797z"], ["fill", "#995900", "d", "M26.657 90.065c-2.093 1.511-7.393 1.371-8.741 3.138-1.325 1.767.047 4.324.023 9.066 0 2.023-.348 3.558-.581 4.789-.325 1.558-.535 2.651.116 3.766 1.187 1.977 3.091 2.465 13.995 4.743 5.834 1.208 11.344 4.347 15.04 4.649 3.696.279 4.487-.953 6.742-2.952 2.231-1.999 2.952-1.372 2.882-5.765-.069-4.37-2.882-5.672-6.067-10.717-3.185-5.044-3.695-5.974-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.046-2.976.977-4.162 2.186-1.186 1.208-2.651 4.276-4.742 5.787z"], ["fill", "#9E5E00", "d", "M26.689 90.158c-2.065 1.518-7.256 1.223-8.737 3.071-1.341 1.749.074 4.287.032 9.026-.008 2.011-.372 3.513-.625 4.803-.335 1.573-.542 2.647.113 3.751 1.222 1.99 3.129 2.3 14.03 4.574 5.832 1.207 11.153 4.296 14.963 4.557 3.611.255 4.379-.913 6.607-2.893 2.226-2 2.913-1.381 2.859-5.62-.024-4.365-2.682-5.602-5.866-10.646-3.185-5.043-3.696-5.974-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.046-2.975.977-4.162 2.186-1.184 1.209-2.631 4.351-4.708 5.881z"], ["fill", "#A36400", "d", "M26.723 90.251c-2.038 1.525-7.12 1.075-8.733 3.004-1.357 1.729.101 4.249.04 8.985-.016 2.001-.395 3.47-.669 4.818-.343 1.588-.549 2.646.11 3.736 1.259 2.003 3.168 2.136 14.065 4.407 5.828 1.205 10.961 4.245 14.885 4.464 3.527.232 4.272-.874 6.472-2.834 2.223-2.001 2.876-1.39 2.839-5.475.02-4.361-2.48-5.531-5.666-10.575-3.185-5.043-3.695-5.974-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.046-2.976.977-4.162 2.186s-2.616 4.426-4.676 5.974z"], ["fill", "#A86A00", "d", "M26.757 90.344c-2.012 1.532-6.984.925-8.73 2.936-1.374 1.711.127 4.212.048 8.944-.025 1.991-.419 3.428-.714 4.834-.354 1.603-.556 2.644.106 3.721 1.297 2.018 3.207 1.972 14.103 4.24 5.824 1.202 10.769 4.193 14.807 4.371 3.441.209 4.166-.835 6.337-2.775 2.217-2.002 2.837-1.399 2.816-5.329.066-4.356-2.28-5.46-5.464-10.504-3.185-5.043-3.696-5.974-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.046-2.975.977-4.162 2.186-1.185 1.208-2.597 4.499-4.641 6.066z"], ["fill", "#AD7000", "d", "M26.791 90.437c-1.985 1.539-6.849.777-8.727 2.869-1.39 1.693.154 4.175.056 8.904-.033 1.981-.441 3.384-.757 4.849-.362 1.618-.563 2.642.102 3.707 1.334 2.031 3.245 1.808 14.138 4.072 5.821 1.2 10.577 4.142 14.729 4.277 3.357.186 4.059-.795 6.203-2.715 2.212-2.003 2.798-1.409 2.793-5.183.112-4.353-2.079-5.389-5.263-10.434-3.185-5.044-3.696-5.975-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.047-2.975.976-4.162 2.185-1.184 1.208-2.579 4.573-4.606 6.159z"], ["fill", "#B27500", "d", "M26.825 90.53c-1.959 1.545-6.713.627-8.724 2.802-1.406 1.673.181 4.137.064 8.861-.041 1.971-.465 3.342-.802 4.864-.371 1.634-.569 2.639.1 3.691 1.372 2.046 3.283 1.645 14.174 3.905 5.818 1.197 10.385 4.092 14.651 4.185 3.272.162 3.952-.756 6.067-2.657 2.208-2.005 2.76-1.418 2.772-5.039.157-4.347-1.877-5.318-5.062-10.362-3.186-5.043-3.696-5.974-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.046-2.975.977-4.162 2.186-1.184 1.21-2.561 4.649-4.572 6.254z"], ["fill", "#B77B00", "d", "M26.859 90.622c-1.932 1.554-6.577.479-8.72 2.734-1.423 1.655.207 4.1.072 8.822-.049 1.959-.488 3.299-.846 4.879-.381 1.648-.576 2.637.095 3.676 1.409 2.06 3.322 1.481 14.211 3.737 5.814 1.196 10.193 4.042 14.573 4.092 3.188.14 3.845-.716 5.933-2.596 2.204-2.007 2.723-1.428 2.75-4.894.203-4.342-1.676-5.247-4.861-10.292-3.186-5.043-3.696-5.974-5.812-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.906-.046-2.976.977-4.162 2.186-1.185 1.21-2.545 4.725-4.539 6.346z"], ["fill", "#BC8100", "d", "M26.892 90.716c-1.905 1.56-6.441.33-8.716 2.667-1.439 1.636.233 4.063.08 8.782-.057 1.948-.511 3.254-.89 4.893-.39 1.664-.583 2.634.092 3.661 1.446 2.074 3.36 1.317 14.247 3.57 5.811 1.193 10.002 3.989 14.495 3.998 3.103.117 3.738-.676 5.798-2.537 2.199-2.007 2.684-1.436 2.728-4.748.248-4.338-1.475-5.175-4.66-10.22s-3.696-5.975-5.812-9.322c-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.047-2.975.976-4.162 2.185-1.185 1.209-2.527 4.797-4.506 6.439z"], ["fill", "#C18700", "d", "M26.926 90.808c-1.878 1.567-6.304.182-8.713 2.6-1.455 1.618.261 4.026.089 8.74-.065 1.939-.535 3.212-.935 4.909-.399 1.679-.59 2.632.089 3.646 1.483 2.087 3.398 1.153 14.282 3.403 5.806 1.19 9.81 3.938 14.417 3.905 3.018.093 3.631-.636 5.664-2.478 2.194-2.008 2.645-1.446 2.705-4.603.292-4.333-1.274-5.105-4.458-10.149-3.186-5.044-3.696-5.975-5.812-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.906-.047-2.976.976-4.162 2.186-1.186 1.208-2.51 4.872-4.472 6.531z"], ["fill", "#C68C00", "d", "M26.959 90.901c-1.85 1.574-6.167.033-8.709 2.531-1.471 1.6.288 3.989.097 8.7-.074 1.929-.558 3.169-.979 4.924-.409 1.694-.598 2.63.085 3.63 1.521 2.102 3.438.99 14.319 3.236 5.804 1.188 9.618 3.887 14.339 3.813 2.933.07 3.524-.599 5.528-2.419 2.189-2.009 2.606-1.455 2.684-4.458.338-4.328-1.073-5.034-4.258-10.079-3.185-5.044-3.695-5.975-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.047-2.976.976-4.162 2.186-1.185 1.21-2.493 4.948-4.439 6.626z"], ["fill", "#CC9200", "d", "M26.993 90.994c-1.825 1.581-6.032-.116-8.706 2.465-1.488 1.581.313 3.952.104 8.659-.082 1.917-.582 3.127-1.023 4.939-.419 1.708-.604 2.628.081 3.615 1.558 2.115 3.476.825 14.355 3.068 5.8 1.186 9.426 3.836 14.262 3.719 2.847.046 3.417-.558 5.393-2.359 2.186-2.011 2.569-1.464 2.662-4.312.384-4.324-.871-4.963-4.057-10.007-3.185-5.044-3.695-5.975-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.047-2.976.976-4.162 2.185s-2.474 5.022-4.404 6.718z"], ["fill", "#D19800", "d", "M27.027 91.088c-1.798 1.588-5.896-.264-8.702 2.397-1.504 1.562.34 3.914.113 8.618-.089 1.907-.604 3.083-1.067 4.955-.428 1.724-.611 2.625.078 3.6 1.595 2.131 3.514.662 14.39 2.901 5.797 1.184 9.235 3.785 14.184 3.626 2.763.023 3.311-.518 5.259-2.299 2.181-2.013 2.53-1.475 2.64-4.167.429-4.32-.67-4.893-3.856-9.938-3.185-5.043-3.695-5.974-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.046-2.976.977-4.162 2.186s-2.458 5.096-4.372 6.811z"], ["fill", "#D69E00", "d", "M27.06 91.181c-1.771 1.595-5.76-.414-8.698 2.329-1.521 1.544.367 3.877.12 8.578-.097 1.897-.626 3.04-1.111 4.97-.437 1.74-.618 2.623.075 3.585 1.631 2.145 3.551.498 14.426 2.734 5.793 1.181 9.043 3.733 14.106 3.533 2.678 0 3.204-.479 5.123-2.241 2.177-2.013 2.493-1.483 2.618-4.021.475-4.314-.469-4.821-3.654-9.866-3.185-5.044-3.695-5.975-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.047-2.976.976-4.162 2.185s-2.441 5.169-4.338 6.904z"], ["fill", "#DBA300", "d", "M27.095 91.273c-1.745 1.603-5.625-.562-8.696 2.262-1.536 1.525.395 3.84.129 8.537-.104 1.886-.65 2.997-1.154 4.984-.447 1.755-.626 2.62.071 3.57 1.668 2.157 3.59.333 14.463 2.566 5.789 1.178 8.851 3.682 14.028 3.44 2.592-.023 3.097-.439 4.988-2.182 2.172-2.015 2.454-1.493 2.596-3.876.519-4.311-.27-4.751-3.454-9.796-3.185-5.044-3.696-5.975-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.047-2.975.976-4.162 2.186-1.185 1.211-2.423 5.247-4.303 6.999z"], ["fill", "#E0A900", "d", "M27.128 91.366c-1.718 1.609-5.488-.711-8.692 2.195-1.553 1.507.42 3.803.137 8.496-.114 1.876-.673 2.955-1.199 5-.455 1.77-.632 2.618.068 3.555 1.706 2.171 3.628.17 14.499 2.399 5.786 1.177 8.659 3.632 13.95 3.348 2.509-.047 2.99-.399 4.854-2.122 2.167-2.016 2.415-1.502 2.573-3.732.565-4.305-.067-4.68-3.253-9.724-3.185-5.043-3.695-5.974-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.046-2.976.977-4.162 2.186-1.185 1.209-2.405 5.318-4.27 7.089z"], ["fill", "#E5AF00", "d", "M27.162 91.459c-1.691 1.616-5.353-.859-8.689 2.128-1.569 1.488.447 3.766.146 8.455-.123 1.865-.697 2.912-1.244 5.015-.465 1.785-.639 2.616.063 3.541 1.744 2.184 3.667.005 14.535 2.231 5.783 1.174 8.468 3.58 13.873 3.254 2.423-.07 2.882-.361 4.718-2.063 2.162-2.017 2.377-1.512 2.552-3.586.609-4.3.132-4.609-3.052-9.653-3.185-5.043-3.696-5.974-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.046-2.975.977-4.162 2.186-1.183 1.209-2.386 5.393-4.234 7.182z"], ["fill", "#EAB500", "d", "M27.196 91.553c-1.665 1.622-5.217-1.009-8.685 2.06-1.585 1.469.474 3.728.154 8.415-.131 1.855-.72 2.868-1.288 5.03-.474 1.8-.647 2.614.061 3.524 1.78 2.2 3.706-.158 14.571 2.064 5.779 1.172 8.276 3.529 13.794 3.162 2.338-.093 2.775-.32 4.584-2.004 2.157-2.018 2.338-1.52 2.529-3.44.656-4.296.334-4.539-2.85-9.583-3.185-5.043-3.696-5.974-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.046-2.975.977-4.161 2.186-1.186 1.209-2.372 5.467-4.203 7.276z"], ["fill", "#EFBA00", "d", "M27.229 91.646c-1.638 1.63-5.081-1.157-8.682 1.992-1.602 1.451.502 3.692.162 8.375-.138 1.845-.744 2.826-1.331 5.045-.484 1.815-.654 2.611.057 3.509 1.817 2.213 3.743-.321 14.607 1.896 5.775 1.17 8.083 3.478 13.715 3.069 2.254-.116 2.669-.281 4.45-1.944 2.153-2.02 2.301-1.53 2.508-3.296.701-4.291.535-4.466-2.649-9.511-3.185-5.044-3.696-5.975-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.047-2.975.976-4.162 2.185-1.185 1.21-2.354 5.543-4.169 7.37z"], ["fill", "#F4C000", "d", "M27.263 91.739c-1.61 1.635-4.944-1.307-8.678 1.924-1.618 1.433.528 3.654.169 8.334-.146 1.834-.768 2.782-1.376 5.061-.493 1.83-.661 2.609.053 3.494 1.855 2.227 3.782-.486 14.644 1.729 5.772 1.167 7.892 3.427 13.639 2.976 2.168-.14 2.562-.242 4.314-1.885 2.147-2.02 2.262-1.54 2.485-3.15.747-4.287.736-4.396-2.448-9.441-3.185-5.043-3.696-5.974-5.812-9.322-2.115-3.301-6.299-9.298-8.694-9.368-1.906-.046-2.975.977-4.162 2.186-1.184 1.209-2.335 5.616-4.134 7.462z"], ["fill", "#F9C600", "d", "M27.296 91.831c-1.584 1.644-4.808-1.455-8.674 1.857-1.633 1.413.555 3.618.179 8.294-.156 1.823-.791 2.739-1.421 5.075-.502 1.845-.667 2.606.05 3.479 1.892 2.241 3.821-.65 14.68 1.562 5.768 1.165 7.7 3.375 13.56 2.884 2.085-.163 2.456-.203 4.18-1.826 2.144-2.022 2.224-1.548 2.463-3.006.792-4.281.938-4.325-2.247-9.37-3.185-5.043-3.695-5.974-5.811-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.907-.046-2.976.977-4.162 2.186-1.186 1.21-2.32 5.691-4.103 7.555z"], ["fill", "#fc0", "d", "M27.33 91.924c-1.557 1.65-4.672-1.604-8.67 1.79-1.65 1.394.581 3.58.186 8.252-.163 1.813-.813 2.697-1.464 5.091-.512 1.86-.675 2.604.046 3.464 1.93 2.255 3.859-.813 14.715 1.395 5.765 1.162 7.508 3.324 13.483 2.79 1.999-.186 2.347-.162 4.045-1.767 2.138-2.022 2.184-1.558 2.441-2.859.836-4.277 1.139-4.254-2.046-9.298-3.186-5.044-3.696-5.975-5.812-9.322-2.116-3.301-6.3-9.298-8.694-9.368-1.906-.047-2.976.976-4.162 2.185-1.185 1.209-2.301 5.765-4.068 7.647zM28.337 93.74c-1.381 1.466-5.902-.439-8.036 1.173-1.528 1.13.774 2.553.46 6.739-.125 1.59-1.234 1.883-.774 4.081.356 1.653.733 1.611 1.361 2.365 1.715 2.009 1.318.544 11.092 2.511 5.169 1.047 6.76 2.993 12.139 2.512 1.799-.167 2.135-.146 3.642-1.59 1.925-1.8.942-1.424 1.15-2.574.733-3.83.147-4.5-2.721-9.042-2.867-4.542-2.616-4.793-4.499-7.785-1.884-2.952-4.479-8.33-6.635-8.372-1.694-.042-2.679.879-3.746 1.967-1.068 1.089-1.863 6.342-3.433 8.015z"], ["fill", "#FFCC02", "d", "M28.432 93.771c-1.441 1.518-6.006-.386-8.091 1.196-1.518 1.134.832 2.599.519 6.677-.129 1.58-1.205 1.897-.793 4.079.318 1.644.76 1.594 1.399 2.324 1.836 1.98 1.509.59 11.016 2.5 5.139 1.037 6.72 2.976 12.066 2.497 1.789-.166 2.092-.149 3.602-1.565 1.893-1.746.923-1.384 1.102-2.602.667-3.805.143-4.514-2.644-8.926-2.851-4.515-2.629-4.745-4.501-7.721-1.872-2.933-4.423-8.332-6.566-8.373-1.685-.042-2.663.873-3.723 1.955-1.063 1.082-1.824 6.297-3.386 7.959z"], ["fill", "#FFCC05", "d", "M28.528 93.799c-1.5 1.571-6.112-.333-8.146 1.221-1.507 1.138.891 2.645.579 6.615-.134 1.57-1.176 1.91-.813 4.076.281 1.636.791 1.578 1.438 2.286 1.956 1.949 1.7.635 10.94 2.488 5.109 1.027 6.681 2.957 11.993 2.481 1.778-.164 2.048-.152 3.562-1.54 1.862-1.691.905-1.346 1.053-2.628.602-3.783.14-4.529-2.567-8.814-2.835-4.488-2.642-4.699-4.503-7.656-1.86-2.916-4.368-8.334-6.498-8.375-1.675-.041-2.647.868-3.702 1.944-1.055 1.077-1.782 6.254-3.336 7.902z"], ["fill", "#FFCC07", "d", "M28.622 93.829c-1.559 1.624-6.216-.279-8.2 1.245-1.498 1.143.949 2.69.638 6.552-.137 1.562-1.146 1.925-.832 4.075.244 1.626.819 1.561 1.477 2.245 2.076 1.92 1.89.681 10.864 2.478 5.079 1.016 6.641 2.939 11.922 2.466 1.768-.162 2.005-.155 3.521-1.515 1.83-1.638.886-1.307 1.003-2.656.537-3.758.136-4.543-2.49-8.7-2.818-4.46-2.655-4.651-4.505-7.591-1.849-2.898-4.313-8.335-6.43-8.376-1.665-.041-2.63.863-3.679 1.932s-1.742 6.209-3.289 7.845z"], ["fill", "#FFCD0A", "d", "M28.717 93.859c-1.618 1.676-6.321-.226-8.254 1.269-1.488 1.148 1.007 2.736.697 6.491-.142 1.553-1.117 1.938-.853 4.072.208 1.618.848 1.543 1.516 2.205 2.195 1.891 2.08.727 10.788 2.467 5.049 1.007 6.602 2.921 11.849 2.452 1.756-.16 1.962-.158 3.481-1.491 1.798-1.583.868-1.267.954-2.681.472-3.736.131-4.559-2.413-8.586-2.802-4.434-2.667-4.605-4.507-7.526-1.838-2.881-4.258-8.337-6.362-8.379-1.654-.041-2.615.859-3.656 1.92-1.042 1.061-1.7 6.162-3.24 7.787z"], ["fill", "#FFCD0C", "d", "M28.813 93.888c-1.676 1.729-6.427-.173-8.309 1.293-1.478 1.151 1.063 2.781.755 6.427-.145 1.543-1.088 1.952-.871 4.07.169 1.609.876 1.527 1.555 2.166 2.315 1.861 2.269.772 10.71 2.455 5.021.997 6.563 2.904 11.778 2.437 1.745-.158 1.919-.161 3.441-1.465 1.766-1.529.849-1.229.904-2.71.407-3.711.129-4.572-2.334-8.472-2.787-4.406-2.682-4.558-4.509-7.461-1.828-2.863-4.203-8.34-6.294-8.381-1.646-.04-2.6.854-3.635 1.909s-1.659 6.121-3.191 7.732z"], ["fill", "#FFCD0F", "d", "M28.908 93.917c-1.736 1.783-6.531-.119-8.363 1.319-1.467 1.156 1.123 2.827.814 6.365-.148 1.533-1.058 1.965-.89 4.067.133 1.6.905 1.51 1.594 2.126 2.435 1.833 2.461.817 10.635 2.443 4.99.987 6.523 2.886 11.705 2.422 1.735-.156 1.876-.164 3.401-1.44 1.735-1.475.83-1.189.855-2.737.341-3.687.125-4.587-2.258-8.358-2.77-4.379-2.694-4.51-4.511-7.396-1.816-2.845-4.147-8.341-6.226-8.381-1.633-.041-2.583.847-3.611 1.897-1.032 1.049-1.622 6.075-3.145 7.673z"], ["fill", "#FFCD11", "d", "M29.002 93.946c-1.795 1.836-6.637-.066-8.417 1.342-1.458 1.161 1.181 2.873.874 6.303-.153 1.524-1.029 1.979-.91 4.066.096 1.59.935 1.492 1.633 2.085 2.554 1.802 2.651.863 10.558 2.432 4.96.977 6.485 2.868 11.632 2.407 1.725-.155 1.833-.167 3.361-1.415 1.703-1.421.812-1.151.806-2.764.276-3.664.121-4.603-2.182-8.245-2.754-4.352-2.707-4.464-4.513-7.332-1.804-2.828-4.091-8.343-6.157-8.383-1.625-.041-2.566.842-3.589 1.885-1.023 1.046-1.579 6.034-3.096 7.619z"], ["fill", "#FFCE14", "d", "M29.097 93.975c-1.854 1.89-6.741-.013-8.473 1.367-1.447 1.165 1.239 2.918.933 6.241-.157 1.515-.999 1.993-.929 4.063.059 1.582.963 1.476 1.672 2.046 2.673 1.773 2.841.908 10.482 2.421 4.931.967 6.446 2.85 11.56 2.392 1.714-.152 1.79-.168 3.321-1.389 1.671-1.368.793-1.112.756-2.792.211-3.64.118-4.616-2.105-8.131-2.737-4.324-2.72-4.416-4.513-7.266-1.793-2.81-4.037-8.346-6.089-8.386-1.614-.04-2.551.837-3.568 1.873-1.016 1.038-1.537 5.989-3.047 7.561z"], ["fill", "#FFCE16", "d", "M29.192 94.005c-1.913 1.943-6.846.041-8.526 1.391-1.438 1.169 1.297 2.964.991 6.179-.16 1.505-.969 2.006-.948 4.061.021 1.574.992 1.459 1.71 2.006 2.793 1.744 3.032.955 10.406 2.411 4.9.957 6.405 2.832 11.487 2.376 1.703-.15 1.746-.172 3.28-1.364 1.64-1.313.775-1.073.708-2.818.146-3.616.115-4.632-2.026-8.017-2.723-4.298-2.733-4.37-4.516-7.202-1.782-2.792-3.982-8.348-6.021-8.388-1.604-.039-2.535.832-3.545 1.862-1.011 1.03-1.498 5.944-3 7.503z"], ["fill", "#FFCE19", "d", "M29.287 94.034c-1.972 1.996-6.951.094-8.58 1.416-1.428 1.174 1.354 3.01 1.051 6.117-.165 1.496-.94 2.02-.968 4.059-.016 1.564 1.021 1.441 1.75 1.966 2.913 1.713 3.221 1 10.33 2.398 4.87.947 6.367 2.814 11.415 2.361 1.693-.148 1.704-.174 3.24-1.339 1.608-1.258.757-1.035.658-2.845.081-3.593.111-4.646-1.95-7.904-2.706-4.271-2.747-4.322-4.517-7.136-1.771-2.776-3.927-8.349-5.954-8.389-1.594-.04-2.519.827-3.523 1.85-1.004 1.024-1.457 5.9-2.952 7.446z"], ["fill", "#FFCE1C", "d", "M29.383 94.064c-2.032 2.048-7.056.147-8.636 1.439-1.417 1.178 1.414 3.056 1.11 6.055-.167 1.485-.91 2.033-.987 4.056-.053 1.556 1.05 1.425 1.788 1.926 3.034 1.685 3.412 1.046 10.254 2.388 4.841.937 6.327 2.796 11.342 2.347 1.683-.146 1.661-.177 3.2-1.314 1.577-1.205.739-.995.61-2.872.016-3.569.106-4.662-1.873-7.79-2.689-4.243-2.759-4.275-4.52-7.072-1.759-2.757-3.87-8.351-5.885-8.391-1.584-.039-2.503.822-3.501 1.839-.996 1.017-1.416 5.854-2.902 7.389z"], ["fill", "#FFCF1E", "d", "M29.477 94.092c-2.089 2.102-7.161.201-8.69 1.464-1.407 1.183 1.472 3.101 1.168 5.992-.171 1.478-.881 2.048-1.006 4.056-.09 1.545 1.078 1.407 1.827 1.886 3.153 1.655 3.602 1.092 10.177 2.375 4.81.928 6.287 2.779 11.271 2.333 1.67-.145 1.617-.181 3.159-1.29 1.545-1.151.72-.957.561-2.899-.051-3.544.102-4.675-1.797-7.675-2.672-4.217-2.771-4.229-4.521-7.009-1.749-2.739-3.815-8.353-5.817-8.392-1.574-.039-2.488.816-3.478 1.827-.989 1.012-1.375 5.811-2.854 7.332z"], ["fill", "#FFCF21", "d", "M29.572 94.122c-2.148 2.155-7.266.253-8.744 1.489-1.397 1.187 1.529 3.146 1.228 5.93-.176 1.467-.851 2.062-1.026 4.053-.128 1.537 1.106 1.39 1.866 1.846 3.272 1.626 3.792 1.137 10.101 2.365 4.781.917 6.248 2.761 11.199 2.317 1.659-.142 1.574-.183 3.119-1.264 1.513-1.097.701-.918.511-2.926-.116-3.521.099-4.69-1.72-7.562-2.657-4.19-2.785-4.181-4.522-6.942-1.737-2.723-3.76-8.356-5.749-8.395-1.564-.038-2.471.811-3.456 1.815-.985 1.003-1.335 5.765-2.807 7.274z"], ["fill", "#FFCF23", "d", "M29.667 94.151c-2.208 2.208-7.371.307-8.798 1.514-1.388 1.19 1.586 3.192 1.286 5.867-.181 1.458-.822 2.074-1.046 4.05-.164 1.527 1.137 1.374 1.905 1.806 3.393 1.597 3.983 1.183 10.025 2.354 4.751.908 6.209 2.743 11.126 2.301 1.65-.14 1.531-.186 3.08-1.238 1.481-1.042.683-.879.462-2.954-.181-3.498.096-4.704-1.643-7.447-2.64-4.163-2.797-4.135-4.524-6.878-1.727-2.704-3.705-8.357-5.68-8.396-1.555-.039-2.456.806-3.434 1.803-.977.998-1.294 5.723-2.759 7.218z"], ["fill", "#FFCF26", "d", "M29.763 94.181c-2.268 2.261-7.477.36-8.854 1.538-1.377 1.195 1.646 3.237 1.346 5.805-.184 1.448-.793 2.088-1.065 4.047-.202 1.52 1.165 1.357 1.944 1.768 3.512 1.566 4.173 1.227 9.948 2.342 4.721.897 6.169 2.726 11.054 2.288 1.639-.139 1.487-.189 3.039-1.214 1.45-.988.665-.839.412-2.979-.246-3.475.092-4.72-1.564-7.334-2.625-4.136-2.812-4.087-4.527-6.813-1.715-2.687-3.649-8.359-5.612-8.398-1.544-.038-2.44.801-3.412 1.792-.971.988-1.252 5.675-2.709 7.158z"], ["fill", "#FFD028", "d", "M29.858 94.21c-2.326 2.314-7.582.414-8.908 1.562-1.367 1.2 1.704 3.283 1.405 5.743-.188 1.438-.764 2.102-1.085 4.046-.237 1.511 1.195 1.339 1.984 1.726 3.632 1.538 4.363 1.274 9.872 2.332 4.691.886 6.13 2.707 10.981 2.271 1.628-.136 1.445-.191 3-1.188 1.418-.936.646-.801.363-3.008-.312-3.45.088-4.734-1.488-7.22-2.609-4.109-2.824-4.042-4.528-6.749-1.704-2.67-3.594-8.361-5.544-8.399-1.534-.038-2.424.795-3.389 1.78-.967.984-1.215 5.634-2.663 7.104z"], ["fill", "#FFD02B", "d", "M29.952 94.239c-2.385 2.367-7.686.467-8.961 1.586-1.358 1.204 1.761 3.329 1.463 5.68-.191 1.43-.733 2.116-1.103 4.043-.275 1.502 1.223 1.323 2.022 1.688 3.751 1.508 4.553 1.319 9.795 2.319 4.661.878 6.09 2.69 10.909 2.257 1.618-.135 1.401-.195 2.959-1.164 1.386-.881.627-.762.313-3.034-.375-3.427.086-4.749-1.41-7.107-2.593-4.081-2.837-3.994-4.53-6.683-1.693-2.652-3.54-8.363-5.477-8.401-1.524-.038-2.408.79-3.367 1.768-.957.979-1.171 5.591-2.613 7.048z"], ["fill", "#FFD02D", "d", "M30.047 94.269c-2.444 2.419-7.791.52-9.015 1.61-1.348 1.208 1.819 3.374 1.522 5.618-.195 1.419-.705 2.129-1.123 4.042-.312 1.492 1.251 1.306 2.061 1.646 3.871 1.479 4.744 1.366 9.72 2.309 4.631.867 6.051 2.671 10.836 2.242 1.607-.133 1.358-.197 2.919-1.138 1.354-.828.609-.723.265-3.061-.441-3.402.081-4.764-1.334-6.993-2.576-4.054-2.849-3.946-4.532-6.617-1.681-2.636-3.483-8.366-5.408-8.404-1.514-.037-2.392.786-3.344 1.756-.953.972-1.132 5.544-2.567 6.99z"], ["fill", "#FFD030", "d", "M30.142 94.298c-2.502 2.472-7.895.573-9.07 1.635-1.337 1.212 1.877 3.421 1.582 5.556-.199 1.41-.675 2.143-1.142 4.039-.35 1.484 1.279 1.289 2.099 1.607 3.992 1.449 4.935 1.411 9.644 2.296 4.602.858 6.012 2.655 10.765 2.228 1.596-.131 1.314-.201 2.879-1.113 1.322-.773.59-.684.214-3.088-.506-3.379.078-4.778-1.256-6.879-2.561-4.027-2.863-3.899-4.533-6.553-1.671-2.617-3.429-8.368-5.34-8.404-1.503-.038-2.375.78-3.322 1.744-.948.965-1.093 5.5-2.52 6.932z"], ["fill", "#FFD133", "d", "M30.238 94.327c-2.563 2.526-8 .627-9.125 1.659-1.327 1.217 1.935 3.466 1.64 5.494-.201 1.4-.645 2.156-1.161 4.037-.387 1.474 1.309 1.272 2.139 1.567 4.11 1.419 5.125 1.456 9.567 2.286 4.571.848 5.973 2.636 10.691 2.212 1.585-.129 1.272-.203 2.839-1.088 1.291-.718.572-.645.166-3.115-.572-3.356.074-4.793-1.179-6.766-2.544-4.001-2.876-3.853-4.535-6.489-1.66-2.6-3.374-8.37-5.272-8.406-1.494-.037-2.36.774-3.3 1.733-.94.961-1.051 5.456-2.47 6.876z"], ["d", "M38.372 72.328c-.302.673-.558 6.462.953 8.717 1.511 2.231 1.07 3.51-.604 1.813-1.744-1.65-2.883-4.138-2.906-5.858 0-.999.768-5.114 1.07-5.556.324-.465 1.719.372 1.487.884z"], ["fill", "#030303", "d", "M38.343 72.441c-.292.755-.535 6.359.972 8.609 1.506 2.229 1.029 3.387-.594 1.73-1.689-1.614-2.779-4.026-2.822-5.743-.014-1.005.721-4.978 1.011-5.421.311-.449 1.656.32 1.433.825z"], ["fill", "#070707", "d", "M38.314 72.554c-.282.836-.511 6.258.99 8.503 1.502 2.225.988 3.264-.584 1.646-1.633-1.576-2.675-3.914-2.738-5.627-.028-1.011.677-4.843.954-5.287.294-.435 1.59.267 1.378.765z"], ["fill", "#0B0B0B", "d", "M38.285 72.666c-.271.918-.488 6.156 1.009 8.396 1.497 2.222.947 3.141-.573 1.563-1.58-1.54-2.573-3.803-2.656-5.514-.042-1.017.632-4.706.895-5.151.282-.419 1.526.215 1.325.706z"], ["fill", "#0F0F0F", "d", "M38.256 72.779c-.26 1-.465 6.053 1.028 8.29 1.492 2.217.907 3.017-.562 1.479-1.525-1.501-2.469-3.692-2.571-5.398-.056-1.023.585-4.569.836-5.016.264-.405 1.46.161 1.269.645z"], ["fill", "#131313", "d", "M38.227 72.891c-.25 1.082-.442 5.952 1.046 8.183 1.488 2.214.866 2.895-.552 1.395-1.471-1.463-2.366-3.58-2.488-5.282-.07-1.029.541-4.435.78-4.882.25-.39 1.394.11 1.214.586z"], ["fill", "#161616", "d", "M38.198 73.004c-.239 1.163-.418 5.849 1.065 8.076 1.483 2.211.825 2.771-.542 1.311-1.417-1.427-2.263-3.468-2.404-5.167-.084-1.034.495-4.298.721-4.747.235-.374 1.329.058 1.16.527z"], ["fill", "#1A1A1A", "d", "M38.169 73.117c-.229 1.244-.396 5.747 1.083 7.969 1.478 2.207.784 2.647-.532 1.227-1.361-1.39-2.158-3.357-2.32-5.052-.098-1.04.451-4.163.663-4.612.22-.359 1.265.005 1.106.468z"], ["fill", "#1E1E1E", "d", "M38.139 73.23c-.219 1.326-.371 5.645 1.102 7.862 1.474 2.204.745 2.525-.52 1.144-1.307-1.353-2.056-3.245-2.238-4.938-.11-1.046.405-4.026.605-4.477.205-.344 1.201-.047 1.051.409z"], ["fill", "#222", "d", "M38.111 73.343c-.208 1.406-.349 5.542 1.121 7.755 1.469 2.201.704 2.401-.51 1.06-1.252-1.315-1.952-3.134-2.153-4.823-.125-1.052.358-3.89.546-4.342.189-.329 1.134-.099.996.35z"], ["fill", "#262626", "d", "M38.081 73.455c-.197 1.488-.325 5.44 1.139 7.647 1.465 2.197.664 2.278-.499.977-1.198-1.279-1.849-3.021-2.07-4.707-.139-1.058.314-3.755.489-4.208.175-.313 1.069-.15.941.291z"], ["fill", "#2A2A2A", "d", "M38.053 73.568c-.187 1.569-.302 5.337 1.158 7.541 1.46 2.193.622 2.155-.489.893-1.143-1.242-1.745-2.911-1.985-4.593-.153-1.063.268-3.618.429-4.073.159-.298 1.004-.203.887.232z"], ["fill", "#2D2D2D", "d", "M38.024 73.681c-.177 1.65-.279 5.234 1.177 7.434 1.455 2.19.581 2.032-.479.809-1.088-1.204-1.642-2.799-1.902-4.477-.167-1.069.224-3.482.372-3.938.143-.284.939-.256.832.172z"], ["fill", "#313131", "d", "M37.995 73.794c-.167 1.731-.257 5.133 1.194 7.326 1.451 2.187.541 1.909-.468.726-1.034-1.167-1.538-2.688-1.818-4.362-.182-1.075.178-3.346.314-3.804.129-.268.874-.307.778.114z"], ["fill", "#353535", "d", "M37.966 73.906c-.155 1.813-.232 5.03 1.213 7.22 1.447 2.183.501 1.786-.457.643-.979-1.131-1.434-2.576-1.735-4.248-.194-1.081.133-3.21.256-3.668.113-.254.809-.36.723.053z"], ["fill", "#393939", "d", "M37.937 74.019c-.146 1.895-.209 4.929 1.231 7.114 1.441 2.179.459 1.662-.448.558-.923-1.093-1.33-2.464-1.65-4.132-.208-1.087.088-3.074.199-3.534.098-.238.743-.413.668-.006z"], ["fill", "#3D3D3D", "d", "M37.908 74.132c-.136 1.976-.187 4.825 1.25 7.005 1.436 2.176.418 1.54-.437.475-.87-1.056-1.228-2.353-1.567-4.017-.224-1.092.041-2.938.139-3.398.084-.223.68-.465.615-.065z"], ["fill", "#414141", "d", "M37.878 74.245c-.124 2.057-.163 4.724 1.27 6.899 1.432 2.172.377 1.416-.427.391-.814-1.018-1.124-2.241-1.483-3.902-.237-1.099-.004-2.802.081-3.264.069-.208.614-.517.559-.124z"], ["fill", "#444", "d", "M37.849 74.357c-.114 2.138-.14 4.621 1.289 6.792 1.427 2.17.336 1.293-.416.307-.761-.981-1.021-2.128-1.4-3.786-.25-1.104-.048-2.667.023-3.129.053-.193.549-.569.504-.184z"], ["fill", "#484848", "d", "M37.82 74.47c-.104 2.22-.116 4.52 1.306 6.686 1.423 2.166.296 1.169-.405.223-.707-.944-.918-2.018-1.316-3.672-.265-1.11-.094-2.53-.035-2.994.039-.178.484-.622.45-.243z"], ["fill", "#4C4C4C", "d", "M37.791 74.583c-.093 2.301-.093 4.416 1.325 6.579 1.418 2.162.255 1.046-.395.14-.652-.907-.814-1.906-1.233-3.557-.278-1.116-.14-2.394-.093-2.859.024-.164.419-.676.396-.303z"], ["d", "M38.372 72.328c1.395-3.046 2.163-6.324 4.162-9.508 1.976-3.161 1.186-4.394-.279-2.79-1.465 1.604-3.068 4.999-3.068 4.999s-1.883 2.975-2.301 6.416c-.072.58 1.253 1.371 1.486.883z"], ["fill", "#020202", "d", "M38.432 72.13c1.382-3.066 2.136-6.213 4.063-9.299 1.906-3.063 1.166-4.287-.247-2.735-1.421 1.565-3.002 4.919-3.024 4.966 0 0-1.819 2.904-2.221 6.211-.066.572 1.202 1.339 1.429.857z"], ["fill", "#050505", "d", "M38.492 71.933c1.368-3.088 2.11-6.104 3.966-9.09 1.835-2.965 1.146-4.181-.213-2.681-1.379 1.525-2.938 4.84-2.981 4.934 0 0-1.757 2.831-2.14 6.007-.065.563 1.147 1.305 1.368.83z"], ["fill", "#070707", "d", "M38.552 71.736c1.356-3.111 2.083-5.997 3.868-8.882 1.765-2.866 1.125-4.075-.182-2.626-1.335 1.486-2.872 4.761-2.937 4.902 0 0-1.693 2.757-2.058 5.802-.062.554 1.093 1.272 1.309.804z"], ["fill", "#0A0A0A", "d", "M38.612 71.54c1.342-3.132 2.058-5.888 3.771-8.674 1.693-2.768 1.104-3.968-.15-2.571-1.292 1.447-2.806 4.682-2.892 4.87 0 0-1.632 2.685-1.978 5.597-.061.543 1.039 1.239 1.249.778z"], ["fill", "#0C0C0C", "d", "M38.671 71.342c1.33-3.154 2.032-5.778 3.672-8.465 1.624-2.67 1.086-3.862-.116-2.517-1.25 1.408-2.741 4.604-2.848 4.838 0 0-1.568 2.613-1.897 5.393-.057.534.986 1.205 1.189.751z"], ["fill", "#0F0F0F", "d", "M38.731 71.145c1.316-3.175 2.006-5.669 3.575-8.256 1.554-2.571 1.064-3.756-.084-2.463-1.207 1.369-2.675 4.524-2.804 4.807 0 0-1.506 2.54-1.816 5.188-.055.524.931 1.171 1.129.724z"], ["fill", "#111", "d", "M38.791 70.948c1.303-3.197 1.979-5.561 3.478-8.048 1.483-2.472 1.044-3.649-.052-2.408-1.164 1.33-2.61 4.446-2.76 4.774 0 0-1.443 2.468-1.735 4.985-.054.514.876 1.137 1.069.697z"], ["fill", "#141414", "d", "M38.851 70.75c1.291-3.219 1.953-5.452 3.38-7.839 1.412-2.374 1.024-3.543-.019-2.354-1.122 1.291-2.545 4.367-2.718 4.742 0 0-1.379 2.395-1.653 4.78-.05.506.823 1.105 1.01.671z"], ["fill", "#161616", "d", "M38.911 70.553c1.276-3.24 1.928-5.343 3.282-7.631 1.342-2.276 1.004-3.437.014-2.3-1.079 1.252-2.479 4.289-2.673 4.711 0 0-1.317 2.323-1.574 4.576-.047.495.769 1.071.951.644z"], ["fill", "#191919", "d", "M38.971 70.356c1.265-3.262 1.902-5.233 3.185-7.422 1.271-2.178.984-3.331.047-2.246-1.036 1.212-2.414 4.21-2.629 4.679 0 0-1.254 2.25-1.493 4.372-.046.485.714 1.037.89.617z"], ["fill", "#1C1C1C", "d", "M39.03 70.159c1.251-3.285 1.876-5.125 3.087-7.215 1.202-2.079.964-3.224.079-2.19-.992 1.173-2.348 4.13-2.584 4.646 0 0-1.192 2.178-1.412 4.167-.043.476.661 1.005.83.592z"], ["fill", "#1E1E1E", "d", "M39.09 69.961c1.238-3.306 1.85-5.016 2.991-7.006 1.129-1.98.943-3.118.111-2.136-.949 1.134-2.283 4.052-2.541 4.615 0 0-1.128 2.106-1.331 3.962-.041.468.607.972.77.565z"], ["fill", "#212121", "d", "M39.149 69.764c1.226-3.328 1.824-4.907 2.892-6.797 1.061-1.881.923-3.011.144-2.082-.906 1.095-2.217 3.973-2.497 4.583 0 0-1.066 2.032-1.25 3.758-.037.459.554.938.711.538z"], ["fill", "#232323", "d", "M39.209 69.567c1.212-3.349 1.798-4.798 2.794-6.588.99-1.783.903-2.906.177-2.027-.863 1.055-2.151 3.894-2.453 4.551 0 0-1.003 1.96-1.17 3.553-.034.447.5.904.652.511z"], ["fill", "#262626", "d", "M39.269 69.37c1.198-3.371 1.772-4.689 2.696-6.38.92-1.685.883-2.799.209-1.973-.82 1.017-2.087 3.815-2.409 4.52 0 0-.941 1.888-1.088 3.349-.032.437.445.87.592.484z"], ["fill", "#282828", "d", "M39.329 69.173c1.187-3.393 1.747-4.581 2.6-6.171.848-1.587.862-2.693.242-1.918-.778.977-2.022 3.736-2.366 4.487 0 0-.876 1.815-1.007 3.144-.031.428.39.837.531.458z"], ["fill", "#2B2B2B", "d", "M39.388 68.975c1.173-3.414 1.72-4.471 2.502-5.963.779-1.488.842-2.586.273-1.864-.734.938-1.956 3.657-2.321 4.456 0 0-.814 1.742-.927 2.94-.026.419.339.804.473.431z"], ["fill", "#2D2D2D", "d", "M39.449 68.778c1.16-3.437 1.694-4.363 2.404-5.754.708-1.39.822-2.48.306-1.81-.692.9-1.89 3.579-2.278 4.424 0 0-.75 1.67-.845 2.735-.025.41.284.771.413.405z"], ["fill", "#303030", "d", "M39.509 68.581c1.146-3.458 1.667-4.253 2.306-5.546.638-1.29.802-2.374.339-1.755-.648.86-1.824 3.5-2.233 4.392 0 0-.688 1.597-.765 2.531-.023.4.23.736.353.378z"], ["fill", "#333", "d", "M39.568 68.383c1.134-3.479 1.643-4.144 2.209-5.337.567-1.193.783-2.268.372-1.701-.606.821-1.759 3.421-2.188 4.359 0 0-.627 1.526-.686 2.327-.02.392.176.704.293.352z"], ["d", "M97.859 74.559c.675-1.906.605-6.764-1.116-9.902-.604-1.14-1.186-2.464-1.534-2.535-.372-.069-1.047.675-.977.791.094.186 3.232 4.604 2.581 10.601-.046.488.884 1.488 1.046 1.045z"], ["fill", "#030303", "d", "M97.829 74.314c.654-1.847.566-6.58-1.08-9.577-.586-1.1-1.142-2.381-1.484-2.451-.362-.069-1.009.653-.944.764.084.181 3.101 4.449 2.496 10.252-.041.48.855 1.438 1.012 1.012z"], ["fill", "#070707", "d", "M97.799 74.067c.635-1.786.529-6.396-1.042-9.252-.569-1.061-1.098-2.297-1.434-2.367-.352-.067-.971.632-.911.739.073.177 2.971 4.293 2.41 9.903-.038.472.825 1.39.977.977z"], ["fill", "#0B0B0B", "d", "M97.768 73.821c.615-1.727.49-6.21-1.006-8.925-.551-1.022-1.054-2.214-1.382-2.284-.343-.068-.935.61-.881.712.064.172 2.841 4.139 2.326 9.554-.033.465.797 1.341.943.943z"], ["fill", "#0F0F0F", "d", "M97.738 73.574c.595-1.667.451-6.025-.969-8.599-.533-.983-1.011-2.13-1.333-2.201-.332-.067-.897.589-.848.687.054.167 2.711 3.984 2.241 9.205-.029.458.767 1.292.909.908z"], ["fill", "#131313", "d", "M97.708 73.328c.574-1.606.412-5.841-.933-8.273-.515-.944-.967-2.047-1.282-2.117-.323-.066-.86.566-.815.66.044.163 2.581 3.83 2.156 8.856-.026.45.737 1.243.874.874z"], ["fill", "#161616", "d", "M97.677 73.082c.556-1.547.375-5.656-.895-7.948-.497-.905-.923-1.963-1.231-2.034-.313-.066-.823.546-.783.634.034.159 2.45 3.675 2.071 8.508-.022.442.707 1.194.838.84z"], ["fill", "#1A1A1A", "d", "M97.646 72.836c.536-1.487.337-5.472-.858-7.623-.479-.866-.879-1.88-1.181-1.951-.303-.065-.786.525-.75.609.024.154 2.319 3.52 1.986 8.159-.018.434.678 1.145.803.806z"], ["fill", "#1E1E1E", "d", "M97.616 72.589c.516-1.427.298-5.287-.822-7.297-.462-.826-.835-1.796-1.131-1.866-.292-.063-.749.502-.719.583.014.149 2.189 3.365 1.901 7.81-.013.426.651 1.096.771.77z"], ["fill", "#222", "d", "M97.585 72.343c.496-1.367.261-5.102-.785-6.97-.443-.788-.792-1.713-1.081-1.784-.283-.063-.711.482-.687.557.005.145 2.06 3.211 1.816 7.462-.006.417.622 1.045.737.735z"], ["fill", "#262626", "d", "M97.555 72.096c.476-1.307.223-4.917-.75-6.645-.424-.748-.748-1.629-1.029-1.7-.273-.062-.673.46-.655.53-.005.141 1.93 3.057 1.731 7.113-.003.412.593.998.703.702z"], ["fill", "#2A2A2A", "d", "M97.524 71.85c.456-1.247.185-4.732-.713-6.319-.407-.709-.703-1.546-.979-1.617-.263-.062-.637.439-.623.504-.015.136 1.8 2.902 1.646 6.764.002.404.565.95.669.668z"], ["fill", "#2D2D2D", "d", "M97.493 71.604c.437-1.188.147-4.547-.674-5.994-.39-.67-.661-1.462-.929-1.533-.253-.061-.6.417-.591.479-.024.132 1.669 2.747 1.562 6.415.005.396.534.9.632.633z"], ["fill", "#313131", "d", "M97.463 71.357c.416-1.127.108-4.362-.639-5.667-.372-.631-.617-1.38-.878-1.451-.243-.061-.562.396-.559.452-.034.127 1.54 2.593 1.477 6.067.01.39.505.852.599.599z"], ["fill", "#353535", "d", "M97.432 71.112c.397-1.068.07-4.178-.602-5.342-.353-.592-.572-1.296-.827-1.367-.234-.06-.525.375-.527.426-.044.123 1.409 2.438 1.392 5.718.015.38.477.803.564.565z"], ["fill", "#393939", "d", "M97.402 70.865c.377-1.007.031-3.993-.565-5.016-.335-.554-.529-1.213-.778-1.284-.223-.059-.487.354-.494.401-.054.118 1.279 2.284 1.307 5.369.018.373.448.753.53.53z"], ["fill", "#3D3D3D", "d", "M97.371 70.619c.357-.948-.007-3.808-.529-4.69-.317-.514-.485-1.128-.727-1.2-.214-.058-.451.333-.462.375-.064.114 1.148 2.128 1.221 5.02.024.364.421.704.497.495z"], ["fill", "#414141", "d", "M97.342 70.373c.338-.888-.045-3.624-.492-4.364-.3-.475-.441-1.045-.676-1.117-.206-.058-.414.31-.43.348-.074.109 1.018 1.974 1.136 4.672.028.356.39.654.462.461z"], ["fill", "#444", "d", "M97.31 70.127c.318-.828-.083-3.439-.455-4.039-.282-.436-.397-.962-.625-1.033-.195-.058-.376.289-.398.322-.083.104.888 1.82 1.053 4.324.03.348.358.605.425.426z"], ["fill", "#484848", "d", "M97.281 69.88c.297-.767-.122-3.253-.419-3.713-.264-.396-.354-.878-.575-.95-.185-.057-.339.268-.366.296-.093.1.759 1.665.967 3.974.035.342.331.558.393.393z"], ["fill", "#4C4C4C", "d", "M97.25 69.633c.277-.708-.16-3.068-.382-3.386-.247-.357-.311-.795-.525-.866-.175-.056-.301.246-.333.27-.103.096.628 1.511.882 3.625.039.333.302.508.358.357z"], ["d", "M95.21 62.122c-3.301-4.509-7.578-5.974-7.137-4.556 0 0 3.278 1.86 6.16 5.346.558.675 1.488-.092.977-.79z"], ["fill", "#030303", "d", "M95.064 61.998c-3.205-4.356-7.392-5.783-6.954-4.423.005.004 3.196 1.812 6.007 5.189.543.651 1.443-.093.947-.766z"], ["fill", "#070707", "d", "M94.919 61.873c-3.107-4.205-7.206-5.592-6.772-4.29.012.007 3.116 1.765 5.856 5.031.526.627 1.397-.091.916-.741z"], ["fill", "#0B0B0B", "d", "M94.774 61.748c-3.011-4.052-7.019-5.4-6.59-4.156.018.011 3.036 1.717 5.705 4.873.509.604 1.35-.091.885-.717z"], ["fill", "#0F0F0F", "d", "M94.628 61.623c-2.913-3.899-6.832-5.209-6.408-4.023.023.015 2.955 1.67 5.552 4.715.495.581 1.306-.09.856-.692z"], ["fill", "#131313", "d", "M94.482 61.499c-2.816-3.746-6.645-5.018-6.224-3.89.028.018 2.873 1.623 5.401 4.557.477.556 1.258-.09.823-.667z"], ["fill", "#161616", "d", "M94.338 61.373c-2.719-3.593-6.459-4.825-6.042-3.756.034.022 2.792 1.576 5.248 4.398.46.534 1.213-.087.794-.642z"], ["fill", "#1A1A1A", "d", "M94.192 61.249c-2.623-3.441-6.272-4.635-5.86-3.624.04.025 2.711 1.528 5.096 4.242.446.51 1.168-.088.764-.618z"], ["fill", "#1E1E1E", "d", "M94.047 61.124c-2.527-3.289-6.086-4.443-5.679-3.491.047.029 2.632 1.481 4.945 4.083.43.488 1.122-.086.734-.592z"], ["fill", "#222", "d", "M93.902 60.999c-2.429-3.135-5.9-4.252-5.496-3.357.051.032 2.551 1.433 4.793 3.925.412.464 1.076-.086.703-.568z"], ["fill", "#262626", "d", "M93.756 60.874c-2.332-2.982-5.713-4.061-5.312-3.224.057.036 2.47 1.386 4.64 3.767.396.441 1.03-.084.672-.543z"], ["fill", "#2A2A2A", "d", "M93.611 60.75c-2.235-2.83-5.526-3.87-5.131-3.091.062.04 2.389 1.339 4.489 3.609.381.417.985-.084.642-.518z"], ["fill", "#2D2D2D", "d", "M93.466 60.625c-2.139-2.678-5.34-3.679-4.949-2.958.069.043 2.308 1.292 4.337 3.451.364.394.939-.082.612-.493z"], ["fill", "#313131", "d", "M93.32 60.5c-2.041-2.524-5.153-3.487-4.766-2.824.074.046 2.228 1.244 4.185 3.294.348.369.893-.083.581-.47z"], ["fill", "#353535", "d", "M93.175 60.375c-1.945-2.372-4.967-3.296-4.584-2.691.08.05 2.146 1.196 4.034 3.135.33.347.847-.081.55-.444z"], ["fill", "#393939", "d", "M93.03 60.25c-1.847-2.219-4.78-3.104-4.402-2.558.085.054 2.065 1.149 3.881 2.978.316.324.802-.081.521-.42z"], ["fill", "#3D3D3D", "d", "M92.885 60.126c-1.751-2.067-4.594-2.913-4.22-2.425.091.058 1.985 1.102 3.729 2.819.299.3.757-.08.491-.394z"], ["fill", "#414141", "d", "M92.739 60.001c-1.655-1.914-4.407-2.722-4.038-2.292.098.061 1.904 1.055 3.578 2.662.283.277.711-.079.46-.37z"], ["fill", "#444", "d", "M92.593 59.876c-1.557-1.762-4.221-2.53-3.855-2.158.103.064 1.824 1.007 3.425 2.504.268.253.666-.079.43-.346z"], ["fill", "#484848", "d", "M92.449 59.751c-1.461-1.608-4.035-2.339-3.673-2.025.109.068 1.742.96 3.273 2.346.251.229.62-.077.4-.321z"], ["fill", "#4C4C4C", "d", "M92.303 59.626c-1.363-1.456-3.848-2.147-3.491-1.892.114.072 1.662.913 3.122 2.188.235.206.574-.076.369-.296z"], ["d", "M97.859 74.559c.047 2.023-1.859 7.183-2.58 6.998-.814-.187.163-1.697.906-4.254.302-1.07.535-3.696.628-3.789.303-.303 1.046.557 1.046 1.045z"], ["fill", "#050505", "d", "M97.801 74.728c.033 1.964-1.82 6.972-2.518 6.786-.781-.183.177-1.661.909-4.174.29-1.026.515-3.534.609-3.632.295-.299 1.015.493 1 1.02z"], ["fill", "#0A0A0A", "d", "M97.741 74.897c.021 1.906-1.78 6.761-2.454 6.575-.75-.18.191-1.626.91-4.095.279-.981.496-3.372.592-3.474.286-.297.985.428.952.994z"], ["fill", "#0F0F0F", "d", "M97.682 75.065c.006 1.847-1.742 6.549-2.391 6.364-.719-.178.205-1.591.913-4.015.265-.938.475-3.211.572-3.317.279-.294.955.364.906.968z"], ["fill", "#141414", "d", "M97.622 75.233c-.006 1.788-1.701 6.338-2.328 6.153-.686-.175.22-1.555.916-3.935.253-.894.455-3.049.554-3.159.271-.29.924.298.858.941z"], ["fill", "#191919", "d", "M97.563 75.401c-.021 1.73-1.661 6.127-2.265 5.942-.655-.172.233-1.52.918-3.854.242-.851.436-2.887.535-3.002.264-.288.894.233.812.914z"], ["fill", "#1E1E1E", "d", "M97.503 75.57c-.033 1.672-1.621 5.916-2.202 5.731-.622-.169.248-1.485.92-3.775.229-.808.416-2.726.517-2.845.256-.285.864.169.765.889z"], ["fill", "#232323", "d", "M97.443 75.738c-.046 1.614-1.582 5.705-2.138 5.52-.591-.167.262-1.448.921-3.694.217-.764.397-2.565.499-2.688.249-.283.835.104.718.862z"], ["fill", "#282828", "d", "M97.385 75.907c-.06 1.555-1.542 5.493-2.076 5.309-.559-.164.276-1.413.924-3.614.205-.721.377-2.403.48-2.53.241-.281.804.037.672.835z"], ["fill", "#2D2D2D", "d", "M97.325 76.075c-.073 1.497-1.502 5.282-2.011 5.097-.527-.16.288-1.376.925-3.534l.463-2.373c.232-.277.772-.026.623.81z"], ["fill", "#333", "d", "M97.265 76.243c-.086 1.438-1.463 5.071-1.949 4.888-.495-.158.303-1.342.928-3.455.18-.634.337-2.081.443-2.216.227-.274.744-.091.578.783z"], ["fill", "#383838", "d", "M97.206 76.412c-.099 1.38-1.422 4.859-1.885 4.676-.464-.155.317-1.307.929-3.375.169-.59.318-1.918.426-2.059.218-.271.713-.155.53.758z"], ["fill", "#3D3D3D", "d", "M97.147 76.58c-.113 1.322-1.383 4.648-1.822 4.465-.432-.152.332-1.271.931-3.295.157-.546.298-1.756.407-1.9.211-.269.683-.222.484.73z"], ["fill", "#424242", "d", "M97.087 76.749c-.125 1.264-1.343 4.437-1.759 4.254-.399-.15.347-1.235.934-3.216.145-.501.279-1.594.389-1.743.202-.266.652-.286.436.705z"], ["fill", "#474747", "d", "M97.028 76.918c-.14 1.205-1.304 4.225-1.696 4.042-.369-.146.36-1.199.936-3.135.132-.458.259-1.433.37-1.586.195-.263.622-.351.39.679z"], ["fill", "#4C4C4C", "d", "M96.968 77.085c-.152 1.147-1.264 4.015-1.633 3.833-.335-.145.374-1.165.939-3.056.121-.416.239-1.272.351-1.429.189-.26.592-.416.343.652z"], ["fill", "#515151", "d", "M96.91 77.254c-.166 1.088-1.225 3.803-1.57 3.621-.304-.142.387-1.129.94-2.976.109-.372.22-1.111.333-1.272.181-.256.561-.48.297.627z"], ["fill", "#565656", "d", "M96.849 77.422c-.179 1.03-1.185 3.591-1.507 3.41-.272-.139.403-1.093.943-2.896.096-.328.2-.949.315-1.114.174-.254.531-.545.249.6z"], ["fill", "#5B5B5B", "d", "M96.791 77.59c-.193.972-1.146 3.381-1.444 3.199-.24-.136.416-1.058.945-2.816.083-.284.18-.787.296-.957.165-.251.5-.61.203.574z"], ["fill", "#606060", "d", "M96.731 77.759c-.206.913-1.106 3.169-1.38 2.987-.208-.132.43-1.022.947-2.735.072-.242.161-.626.278-.8.157-.248.469-.675.155.548z"], ["fill", "#666", "d", "M96.672 77.928c-.219.854-1.066 2.958-1.318 2.776-.176-.129.445-.986.949-2.656.06-.197.141-.464.261-.642.149-.246.438-.739.108.522z"], ["d", "M90.769 62.378c-.496.523-.938 3.226.303 4.163 1.24.91 3.419-.772 3.419-1.736-.028-2.179-3.225-2.978-3.722-2.427z"], ["fill", "#010101", "d", "M90.814 62.424c-.504.52-.929 3.171.277 4.09 1.204.893 3.341-.734 3.353-1.705-.016-2.123-3.126-2.932-3.63-2.385z"], ["fill", "#030303", "d", "M90.858 62.469c-.511.517-.92 3.117.25 4.016 1.17.875 3.264-.695 3.286-1.671-.003-2.068-3.025-2.888-3.536-2.345z"], ["fill", "#050505", "d", "M90.902 62.515c-.518.513-.911 3.062.224 3.942 1.134.856 3.187-.658 3.22-1.64.01-2.011-2.925-2.841-3.444-2.302z"], ["fill", "#070707", "d", "M90.946 62.56c-.525.51-.902 3.008.198 3.87 1.097.839 3.109-.619 3.153-1.607.023-1.958-2.825-2.798-3.351-2.263z"], ["fill", "#090909", "d", "M90.991 62.605c-.532.507-.894 2.954.171 3.797 1.061.821 3.032-.582 3.087-1.574.035-1.903-2.725-2.753-3.258-2.223z"], ["fill", "#0B0B0B", "d", "M91.035 62.65c-.539.502-.885 2.898.144 3.723 1.026.804 2.954-.543 3.022-1.542.047-1.846-2.626-2.707-3.166-2.181z"], ["fill", "#0D0D0D", "d", "M91.078 62.696c-.547.499-.876 2.844.118 3.649.989.787 2.876-.505 2.955-1.509.061-1.792-2.525-2.662-3.073-2.14z"], ["fill", "#0F0F0F", "d", "M91.123 62.741c-.554.496-.868 2.791.091 3.576.953.769 2.799-.467 2.889-1.476.073-1.737-2.425-2.617-2.98-2.1z"], ["fill", "#111", "d", "M91.167 62.787c-.561.492-.859 2.734.064 3.502.919.75 2.722-.43 2.823-1.443.086-1.682-2.325-2.573-2.887-2.059z"], ["fill", "#131313", "d", "M91.211 62.832c-.568.489-.85 2.681.038 3.429.881.733 2.644-.392 2.756-1.411.099-1.627-2.224-2.527-2.794-2.018z"], ["fill", "#151515", "d", "M91.255 62.877c-.575.486-.841 2.625.012 3.354.846.716 2.567-.353 2.69-1.377.111-1.571-2.125-2.482-2.702-1.977z"], ["fill", "#161616", "d", "M91.3 62.922c-.583.481-.833 2.572-.015 3.281.81.699 2.489-.314 2.624-1.345.124-1.515-2.025-2.437-2.609-1.936z"], ["fill", "#181818", "d", "M91.344 62.968c-.59.479-.824 2.518-.042 3.208.774.68 2.412-.277 2.558-1.313.136-1.461-1.924-2.392-2.516-1.895z"], ["fill", "#1A1A1A", "d", "M91.388 63.013c-.598.475-.815 2.462-.068 3.135.738.663 2.334-.24 2.492-1.28.148-1.406-1.825-2.347-2.424-1.855z"], ["fill", "#1C1C1C", "d", "M91.432 63.058c-.604.471-.807 2.408-.094 3.061.703.646 2.256-.2 2.425-1.248.162-1.348-1.725-2.301-2.331-1.813z"], ["fill", "#1E1E1E", "d", "M91.477 63.104c-.613.467-.798 2.353-.122 2.987.667.627 2.18-.163 2.36-1.214.174-1.295-1.626-2.257-2.238-1.773z"], ["fill", "#202020", "d", "M91.52 63.149c-.619.464-.789 2.3-.147 2.914.631.61 2.102-.124 2.293-1.182.187-1.239-1.525-2.212-2.146-1.732z"], ["fill", "#222", "d", "M91.564 63.194c-.625.46-.78 2.245-.173 2.841.595.592 2.025-.086 2.226-1.15.2-1.184-1.424-2.166-2.053-1.691z"], ["fill", "#242424", "d", "M91.608 63.24c-.632.457-.771 2.19-.2 2.768.559.573 1.947-.049 2.16-1.117.213-1.13-1.324-2.122-1.96-1.651z"], ["fill", "#262626", "d", "M91.653 63.285c-.641.454-.763 2.136-.228 2.694.523.557 1.87-.01 2.094-1.084.226-1.074-1.223-2.077-1.866-1.61z"], ["d", "M90.653 84.603c.488.488.907-.721 1.396-1.117.488-.395 1.278-1.255 2.859-1.255s1.464-.046 1.394-.651c-.046-.581-.511-.535-1.906-.326-1.394.186-2.324.907-2.882 1.557-.535.628-1.14 1.512-.861 1.792z"], ["fill", "#050505", "d", "M90.761 84.484c.471.468.872-.685 1.357-1.068s1.269-1.205 2.789-1.205c1.521 0 1.426-.042 1.359-.626-.045-.562-.498-.515-1.856-.316-1.358.175-2.269.873-2.812 1.5-.522.607-1.11 1.445-.837 1.715z"], ["fill", "#0A0A0A", "d", "M90.869 84.364c.453.449.839-.648 1.319-1.019.482-.371 1.26-1.155 2.72-1.155 1.46 0 1.386-.036 1.322-.601-.042-.545-.484-.495-1.805-.307-1.322.164-2.214.838-2.743 1.443-.509.585-1.081 1.38-.813 1.639z"], ["fill", "#0F0F0F", "d", "M90.976 84.245c.437.429.805-.611 1.283-.97.478-.359 1.25-1.105 2.649-1.105 1.4 0 1.347-.03 1.286-.576-.04-.526-.471-.474-1.755-.298-1.284.155-2.158.805-2.673 1.388-.495.562-1.052 1.311-.79 1.561z"], ["fill", "#141414", "d", "M91.083 84.127c.42.409.771-.576 1.246-.922.475-.348 1.24-1.055 2.58-1.056 1.34 0 1.308-.025 1.251-.552-.039-.508-.458-.453-1.707-.29-1.249.144-2.104.771-2.604 1.332-.48.543-1.021 1.247-.766 1.488z"], ["fill", "#191919", "d", "M91.19 84.009c.403.387.738-.54 1.209-.875.47-.335 1.23-1.004 2.51-1.005 1.279-.001 1.269-.02 1.214-.527-.037-.491-.445-.433-1.655-.28-1.211.134-2.049.736-2.534 1.274-.467.521-.992 1.18-.744 1.413z"], ["fill", "#1E1E1E", "d", "M91.298 83.89c.386.368.705-.504 1.171-.826.467-.323 1.222-.954 2.441-.955 1.218-.001 1.229-.014 1.178-.502-.034-.472-.431-.412-1.606-.27-1.174.122-1.993.701-2.464 1.217-.454.499-.962 1.114-.72 1.336z"], ["fill", "#232323", "d", "M91.406 83.771c.37.349.67-.467 1.135-.778.464-.311 1.211-.903 2.37-.903 1.159-.002 1.189-.009 1.143-.478-.033-.454-.418-.393-1.556-.263-1.138.113-1.938.668-2.394 1.161-.443.478-.936 1.048-.698 1.261z"], ["fill", "#282828", "d", "M91.514 83.652c.352.329.637-.431 1.097-.729.46-.299 1.202-.853 2.3-.854 1.099-.002 1.151-.004 1.106-.454-.03-.436-.404-.372-1.505-.252-1.101.101-1.882.633-2.324 1.104-.429.457-.906.981-.674 1.185z"], ["fill", "#2D2D2D", "d", "M91.62 83.533c.335.308.603-.395 1.06-.681.457-.286 1.193-.802 2.23-.803 1.039-.002 1.112.002 1.07-.428-.028-.418-.391-.352-1.455-.244-1.064.091-1.827.6-2.254 1.047-.414.434-.875.915-.651 1.109z"], ["fill", "#333", "d", "M91.728 83.415c.318.288.568-.358 1.022-.633.453-.275 1.183-.752 2.161-.754s1.072.007 1.034-.403c-.026-.399-.378-.331-1.406-.234-1.027.081-1.771.565-2.184.99-.401.413-.846.85-.627 1.034z"], ["fill", "#383838", "d", "M91.836 83.296c.301.268.535-.322.985-.584.45-.263 1.174-.702 2.092-.704s1.033.013.997-.379c-.024-.38-.364-.31-1.355-.224-.99.07-1.715.531-2.114.934-.389.391-.819.782-.605.957z"], ["fill", "#3D3D3D", "d", "M91.943 83.177c.284.249.502-.286.949-.536.446-.25 1.164-.653 2.021-.654.857-.003.994.018.962-.354-.022-.363-.351-.29-1.306-.217-.953.06-1.661.497-2.045.877-.375.372-.788.719-.581.884z"], ["fill", "#424242", "d", "M92.051 83.059c.267.229.467-.25.911-.487.443-.239 1.154-.603 1.951-.604.797-.002.954.024.926-.329-.021-.345-.338-.27-1.255-.207-.918.049-1.606.462-1.975.82-.362.349-.76.651-.558.807z"], ["fill", "#474747", "d", "M92.158 82.94c.25.208.434-.213.874-.44.44-.226 1.145-.551 1.882-.553.737-.003.915.029.889-.304-.019-.327-.324-.25-1.206-.198-.88.039-1.55.429-1.905.764-.347.327-.729.584-.534.731z"], ["fill", "#4C4C4C", "d", "M92.265 82.821c.233.188.4-.178.836-.391.437-.215 1.136-.501 1.812-.504.677-.003.876.035.854-.279-.016-.308-.312-.229-1.155-.188-.844.028-1.495.395-1.836.707-.333.305-.7.518-.511.655z"], ["fill", "#515151", "d", "M92.373 82.702c.215.168.366-.14.799-.343.433-.201 1.125-.45 1.742-.452.617-.004.836.039.817-.255-.015-.29-.298-.208-1.105-.179-.807.017-1.439.36-1.766.65-.321.284-.67.452-.487.579z"], ["fill", "#565656", "d", "M92.481 82.584c.198.148.332-.104.761-.294.43-.19 1.117-.4 1.672-.403.556-.003.797.045.782-.23-.013-.272-.285-.188-1.056-.17-.771.007-1.384.326-1.695.593-.308.262-.642.386-.464.504z"], ["fill", "#5B5B5B", "d", "M92.587 82.465c.183.128.299-.068.726-.247.425-.178 1.106-.35 1.602-.353.496-.003.758.05.746-.206-.01-.253-.271-.168-1.005-.161-.733-.003-1.329.292-1.625.536-.297.244-.614.322-.444.431z"], ["fill", "#606060", "d", "M92.695 82.346c.165.108.266-.033.688-.198.423-.166 1.097-.3 1.533-.303s.719.057.708-.181c-.008-.234-.257-.146-.955-.152-.696-.014-1.273.258-1.556.479-.281.221-.582.256-.418.355z"], ["fill", "#666", "d", "M92.803 82.228c.147.088.23.003.649-.15.42-.154 1.088-.249 1.463-.252.375-.003.68.062.673-.155-.006-.217-.245-.127-.905-.143-.66-.024-1.217.224-1.486.423-.267.197-.554.187-.394.277z"], ["d", "M96.953 81.557c0 .744 1.511 1 2.952 1.208 1.418.209 2.558.489 2.626 1.977.07 1.464-.301 2.51.35 2.395 1.395-.256 1.906-1.768 1.883-2.465 0-.698-1.023-1.953-2.859-2.65-1.348-.512-2.325-.744-3.511-.791-1.58-.069-1.441.326-1.441.326z"], ["fill", "#030303", "d", "M96.994 81.569c.003.723 1.499.959 2.921 1.174 1.405.218 2.503.488 2.619 1.938.112 1.426-.275 2.427.367 2.321 1.338-.238 1.836-1.679 1.811-2.367-.005-.694-1.007-1.908-2.82-2.595-1.333-.504-2.295-.742-3.468-.792-1.535-.069-1.433.308-1.43.321z"], ["fill", "#070707", "d", "M97.034 81.582c.008.702 1.487.918 2.891 1.14 1.392.226 2.447.487 2.61 1.901.153 1.386-.249 2.341.384 2.248 1.281-.222 1.768-1.592 1.738-2.271-.009-.693-.991-1.864-2.78-2.541-1.317-.498-2.268-.74-3.425-.793-1.488-.071-1.424.289-1.418.316z"], ["fill", "#0B0B0B", "d", "M97.075 81.593c.012.681 1.475.878 2.86 1.107 1.379.235 2.392.487 2.603 1.862.194 1.348-.222 2.256.402 2.174 1.226-.206 1.698-1.504 1.666-2.173-.014-.69-.974-1.82-2.74-2.486-1.302-.491-2.238-.738-3.383-.794-1.444-.071-1.416.27-1.408.31z"], ["fill", "#0F0F0F", "d", "M97.116 81.606c.015.66 1.463.838 2.829 1.073 1.366.244 2.338.486 2.596 1.824.233 1.309-.197 2.173.419 2.102 1.168-.189 1.627-1.417 1.594-2.078-.019-.687-.959-1.774-2.702-2.431-1.287-.485-2.208-.736-3.34-.795-1.398-.072-1.407.252-1.396.305z"], ["fill", "#131313", "d", "M97.157 81.619c.019.639 1.451.797 2.798 1.04 1.353.252 2.283.485 2.587 1.786.276 1.27-.17 2.087.438 2.029 1.112-.173 1.557-1.33 1.521-1.981-.024-.684-.943-1.73-2.662-2.376-1.272-.479-2.181-.733-3.298-.797-1.351-.074-1.399.232-1.384.299z"], ["fill", "#161616", "d", "M97.197 81.631c.023.618 1.44.757 2.768 1.006 1.34.26 2.229.484 2.58 1.747.316 1.231-.143 2.002.455 1.956 1.056-.155 1.488-1.242 1.449-1.885-.028-.682-.927-1.686-2.623-2.322-1.257-.471-2.151-.731-3.255-.797-1.307-.073-1.391.215-1.374.295z"], ["fill", "#1A1A1A", "d", "M97.238 81.644c.027.597 1.428.716 2.736.972 1.328.269 2.174.484 2.573 1.71.357 1.191-.117 1.918.472 1.882 1-.14 1.419-1.156 1.377-1.788-.034-.679-.911-1.641-2.583-2.268-1.243-.465-2.124-.729-3.212-.799-1.26-.073-1.383.197-1.363.291z"], ["fill", "#1E1E1E", "d", "M97.279 81.656c.03.575 1.416.675 2.707.938 1.313.277 2.118.483 2.562 1.671.399 1.152-.09 1.833.491 1.809.943-.123 1.349-1.067 1.305-1.691-.038-.676-.896-1.597-2.544-2.213-1.227-.458-2.094-.727-3.169-.8-1.216-.073-1.375.179-1.352.286z"], ["fill", "#222", "d", "M97.32 81.668c.034.555 1.404.636 2.674.905 1.301.286 2.064.482 2.556 1.633.44 1.113-.063 1.749.508 1.736.887-.106 1.279-.98 1.232-1.595-.043-.674-.879-1.552-2.505-2.158-1.211-.452-2.064-.726-3.126-.802-1.169-.073-1.365.161-1.339.281z"], ["fill", "#262626", "d", "M97.36 81.68c.038.533 1.391.595 2.644.87 1.289.295 2.01.481 2.548 1.596.482 1.074-.037 1.664.526 1.663.831-.09 1.209-.893 1.161-1.499-.048-.671-.863-1.508-2.465-2.104-1.196-.446-2.037-.723-3.084-.803-1.124-.073-1.359.144-1.33.277z"], ["fill", "#2A2A2A", "d", "M97.4 81.692c.042.513 1.38.555 2.614.836 1.275.303 1.955.481 2.54 1.558.523 1.036-.011 1.58.544 1.59.773-.074 1.14-.805 1.088-1.402-.053-.669-.847-1.463-2.426-2.049-1.18-.439-2.007-.721-3.042-.805-1.077-.073-1.349.127-1.318.272z"], ["fill", "#2D2D2D", "d", "M97.441 81.706c.046.491 1.368.513 2.583.801 1.263.312 1.9.481 2.532 1.52.564.996.016 1.495.562 1.517.716-.057 1.07-.718 1.015-1.305-.057-.666-.83-1.419-2.386-1.995-1.166-.432-1.978-.718-2.999-.805-1.032-.075-1.34.107-1.307.267z"], ["fill", "#313131", "d", "M97.482 81.717c.049.47 1.356.473 2.552.769 1.248.32 1.845.48 2.523 1.482.605.957.043 1.41.579 1.443.661-.04 1.001-.63.943-1.208-.062-.664-.814-1.375-2.346-1.94-1.151-.425-1.95-.716-2.957-.807-.985-.074-1.332.089-1.294.261z"], ["fill", "#353535", "d", "M97.523 81.73c.053.449 1.343.433 2.521.734 1.236.329 1.791.479 2.516 1.444.647.918.069 1.325.597 1.37.604-.024.931-.543.871-1.111-.067-.661-.799-1.331-2.307-1.885-1.136-.419-1.92-.715-2.914-.809-.94-.075-1.325.071-1.284.257z"], ["fill", "#393939", "d", "M97.563 81.742c.057.428 1.333.393 2.491.701 1.222.337 1.735.478 2.509 1.406.687.879.095 1.241.613 1.297.548-.007.861-.456.798-1.016-.072-.658-.783-1.285-2.267-1.83-1.121-.413-1.892-.713-2.872-.811-.894-.074-1.315.054-1.272.253z"], ["fill", "#3D3D3D", "d", "M97.604 81.754c.061.407 1.32.352 2.459.667 1.21.346 1.682.478 2.501 1.368.729.84.122 1.155.631 1.223.492.01.792-.368.727-.918-.076-.655-.766-1.241-2.229-1.775-1.104-.406-1.862-.712-2.828-.812-.848-.075-1.307.035-1.261.247z"], ["fill", "#414141", "d", "M97.645 81.767c.064.386 1.308.312 2.428.633 1.198.354 1.627.477 2.493 1.331.769.8.148 1.069.649 1.149.435.026.722-.28.654-.821-.081-.653-.75-1.198-2.188-1.722-1.09-.399-1.834-.708-2.786-.812-.803-.076-1.299.016-1.25.242z"], ["fill", "#444", "d", "M97.686 81.78c.068.364 1.296.27 2.397.599 1.185.363 1.572.477 2.485 1.292.81.761.174.986.667 1.077.378.043.652-.193.582-.726-.086-.65-.736-1.151-2.15-1.666-1.075-.393-1.805-.707-2.744-.814-.756-.076-1.289-.002-1.237.238z"], ["fill", "#484848", "d", "M97.725 81.792c.073.344 1.286.231 2.367.565 1.172.372 1.518.476 2.477 1.254.852.723.202.901.686 1.003.322.06.582-.106.509-.628-.091-.648-.719-1.108-2.109-1.611-1.06-.387-1.776-.705-2.702-.816-.71-.076-1.281-.02-1.228.233z"], ["fill", "#4C4C4C", "d", "M97.766 81.804c.076.323 1.272.189 2.336.531 1.159.381 1.462.475 2.469 1.216.893.684.228.817.703.931.265.075.513-.019.437-.532-.095-.645-.703-1.063-2.07-1.557-1.045-.38-1.747-.703-2.659-.816-.665-.078-1.272-.039-1.216.227zM102.553 83.361c.531.324.437.665.778.894.171.114.456.114.286-.323-.229-.513-.418-.798-1.596-1.273-.759-.304-.608.018.532.702z"], ["fill", "#505050", "d", "M102.567 83.366c.518.314.426.648.759.87.167.111.445.111.278-.315-.223-.5-.408-.778-1.557-1.242-.74-.296-.592.019.52.687z"], ["fill", "#545454", "d", "M102.58 83.369c.506.307.416.631.741.849.163.108.434.108.271-.308-.217-.487-.397-.758-1.518-1.21-.722-.288-.577.019.506.669z"], ["fill", "#575757", "d", "M102.595 83.373c.493.298.405.616.722.827.159.105.423.105.263-.299-.21-.475-.387-.739-1.478-1.179-.704-.282-.563.017.493.651z"], ["fill", "#5B5B5B", "d", "M102.61 83.377c.479.292.393.599.701.805.155.103.411.103.258-.291-.206-.462-.377-.72-1.439-1.148-.686-.275-.548.017.48.634z"], ["fill", "#5F5F5F", "d", "M102.622 83.38c.467.284.384.584.684.784.15.1.4.1.25-.283-.201-.45-.367-.701-1.4-1.117-.666-.266-.533.017.466.616z"], ["fill", "#636363", "d", "M102.638 83.384c.453.276.372.568.664.762.146.097.389.097.244-.275-.195-.438-.356-.681-1.361-1.086-.649-.259-.52.017.453.599z"], ["fill", "#676767", "d", "M102.651 83.389c.44.267.362.551.645.739.142.094.378.094.236-.267-.188-.425-.346-.661-1.322-1.055-.628-.252-.503.016.441.583z"], ["fill", "#6B6B6B", "d", "M102.665 83.393c.428.259.351.534.627.717.137.091.366.091.229-.259-.184-.412-.336-.642-1.284-1.023-.61-.244-.488.015.428.565z"], ["fill", "#6E6E6E", "d", "M102.68 83.397c.414.251.341.518.606.696.134.088.356.088.223-.251-.178-.399-.325-.622-1.245-.992-.591-.238-.473.013.416.547z"], ["fill", "#727272", "d", "M102.693 83.4c.401.244.331.501.589.674.129.085.343.085.215-.244-.172-.387-.315-.602-1.205-.961-.573-.229-.459.015.401.531z"], ["fill", "#767676", "d", "M102.707 83.404c.388.236.319.486.57.653.125.083.332.083.208-.236-.167-.375-.305-.583-1.166-.93-.555-.222-.444.014.388.513z"], ["fill", "#7A7A7A", "d", "M102.722 83.408c.376.228.308.469.55.63.121.081.322.081.201-.228-.161-.362-.295-.563-1.126-.898-.537-.215-.43.013.375.496z"], ["fill", "#7E7E7E", "d", "M102.736 83.412c.362.22.297.453.53.608.117.078.312.078.195-.22-.155-.35-.285-.543-1.087-.867-.518-.206-.415.013.362.479z"], ["fill", "#828282", "d", "M102.75 83.416c.349.212.287.437.512.586.112.075.299.075.187-.212-.149-.336-.274-.524-1.048-.835-.5-.201-.399.012.349.461z"], ["fill", "#858585", "d", "M102.764 83.42c.336.204.275.419.492.564.108.072.289.072.181-.204-.145-.325-.265-.505-1.009-.805-.481-.192-.384.013.336.445z"], ["fill", "#898989", "d", "M102.778 83.424c.323.197.266.404.473.543.104.069.277.069.173-.197-.139-.311-.254-.485-.97-.773-.461-.185-.368.011.324.427z"], ["fill", "#8D8D8D", "d", "M102.792 83.428c.31.189.255.388.454.521.1.066.265.066.167-.188-.133-.299-.245-.466-.931-.743-.443-.177-.354.011.31.41z"], ["fill", "#919191", "d", "M102.806 83.432c.297.181.245.372.435.5.096.063.256.063.16-.181-.127-.286-.233-.446-.892-.711-.424-.171-.34.01.297.392z"], ["fill", "#959595", "d", "M102.821 83.435c.283.172.232.356.416.478.091.061.243.061.152-.173-.122-.274-.224-.426-.854-.68-.404-.163-.324.011.286.375z"], ["fill", "#999", "d", "M102.834 83.439c.271.165.223.339.397.455.088.058.232.058.146-.164-.117-.262-.213-.407-.814-.65-.387-.154-.31.011.271.359z"], ["d", "M81.472 36.408c-.239.292.186 2.701 1.748 4.289 1.562 1.562 2.516 1.562 3.151.874 1.217-1.297.237-2.515-.503-3.362-.743-.847-1.695-.556-2.569-1.403s-1.482-.796-1.827-.398z"], ["fill", "#050505", "d", "M81.495 36.429c-.236.289.184 2.68 1.733 4.256 1.551 1.55 2.496 1.55 3.126.867 1.208-1.287.236-2.495-.499-3.336s-1.682-.552-2.549-1.392c-.865-.841-1.469-.789-1.811-.395z"], ["fill", "#0A0A0A", "d", "M81.518 36.451c-.234.286.183 2.659 1.72 4.223 1.538 1.538 2.476 1.538 3.102.86 1.199-1.277.235-2.477-.495-3.311-.73-.834-1.669-.547-2.529-1.381-.86-.834-1.459-.782-1.798-.391z"], ["fill", "#0F0F0F", "d", "M81.54 36.473c-.232.284.182 2.638 1.708 4.189 1.526 1.525 2.456 1.525 3.078.853 1.189-1.267.232-2.457-.492-3.284-.724-.828-1.654-.543-2.509-1.37-.853-.828-1.448-.776-1.785-.388z"], ["fill", "#141414", "d", "M81.563 36.495c-.23.282.18 2.616 1.693 4.155 1.514 1.514 2.437 1.514 3.053.847 1.18-1.257.23-2.438-.488-3.258-.718-.821-1.642-.539-2.488-1.36-.846-.821-1.437-.77-1.77-.384z"], ["fill", "#191919", "d", "M81.586 36.516c-.229.28.179 2.596 1.68 4.123 1.5 1.501 2.418 1.501 3.028.84 1.171-1.247.229-2.418-.484-3.232-.712-.813-1.628-.534-2.468-1.348-.84-.815-1.426-.765-1.756-.383z"], ["fill", "#1E1E1E", "d", "M81.609 36.537c-.228.278.177 2.575 1.666 4.09 1.49 1.489 2.399 1.489 3.004.833 1.162-1.237.228-2.398-.48-3.206-.706-.808-1.615-.53-2.448-1.338-.834-.808-1.414-.757-1.742-.379z"], ["fill", "#232323", "d", "M81.631 36.559c-.225.275.176 2.554 1.652 4.056 1.477 1.477 2.379 1.477 2.98.826 1.151-1.227.226-2.378-.476-3.179-.701-.801-1.602-.526-2.428-1.327-.826-.801-1.403-.751-1.728-.376z"], ["fill", "#282828", "d", "M81.654 36.581c-.223.273.173 2.533 1.64 4.023 1.465 1.464 2.359 1.464 2.955.819 1.142-1.217.223-2.359-.472-3.154-.696-.794-1.589-.521-2.409-1.315-.82-.795-1.391-.746-1.714-.373z"], ["fill", "#2D2D2D", "d", "M81.677 36.602c-.222.271.172 2.512 1.625 3.989 1.453 1.453 2.339 1.453 2.93.812 1.132-1.207.221-2.34-.468-3.127-.689-.788-1.576-.517-2.388-1.305-.813-.787-1.379-.738-1.699-.369z"], ["fill", "#333", "d", "M81.7 36.624c-.221.269.17 2.491 1.612 3.957 1.441 1.44 2.32 1.44 2.906.806 1.123-1.196.22-2.32-.464-3.101-.685-.781-1.564-.513-2.369-1.294-.807-.783-1.368-.735-1.685-.368z"], ["fill", "#383838", "d", "M81.722 36.645c-.218.267.169 2.47 1.599 3.923 1.429 1.429 2.3 1.429 2.881.799 1.115-1.187.219-2.3-.46-3.076-.678-.774-1.55-.508-2.348-1.283-.8-.774-1.357-.726-1.672-.363z"], ["fill", "#3D3D3D", "d", "M81.745 36.667c-.216.264.168 2.449 1.584 3.89 1.417 1.417 2.28 1.417 2.857.792 1.104-1.176.216-2.281-.456-3.048-.673-.769-1.537-.504-2.33-1.272-.791-.77-1.343-.722-1.655-.362z"], ["fill", "#424242", "d", "M81.768 36.689c-.214.262.167 2.428 1.571 3.856 1.405 1.404 2.261 1.404 2.832.785 1.096-1.167.214-2.262-.452-3.023-.666-.762-1.523-.5-2.308-1.261-.786-.762-1.334-.715-1.643-.357z"], ["fill", "#474747", "d", "M81.791 36.71c-.212.26.165 2.407 1.557 3.823 1.393 1.392 2.242 1.392 2.808.778 1.086-1.157.213-2.242-.448-2.997s-1.511-.495-2.29-1.25c-.778-.755-1.321-.708-1.627-.354z"], ["fill", "#4C4C4C", "d", "M81.814 36.732c-.21.257.164 2.386 1.544 3.789 1.38 1.38 2.221 1.38 2.783.772 1.076-1.146.209-2.222-.445-2.971s-1.497-.491-2.268-1.24c-.773-.747-1.311-.701-1.614-.35z"], ["fill", "#515151", "d", "M81.836 36.753c-.208.255.163 2.365 1.531 3.756 1.367 1.368 2.203 1.368 2.758.765 1.067-1.136.208-2.202-.44-2.944-.649-.742-1.484-.487-2.25-1.229-.764-.742-1.298-.695-1.599-.348z"], ["fill", "#565656", "d", "M81.859 36.775c-.207.253.161 2.344 1.517 3.723 1.355 1.356 2.184 1.356 2.734.758 1.057-1.126.207-2.183-.436-2.918-.644-.735-1.472-.482-2.23-1.218-.758-.735-1.287-.689-1.585-.345z"], ["fill", "#5B5B5B", "d", "M81.882 36.797c-.206.25.159 2.323 1.503 3.689 1.343 1.343 2.164 1.343 2.71.751 1.047-1.116.205-2.164-.433-2.893s-1.457-.478-2.209-1.207c-.752-.727-1.276-.682-1.571-.34z"], ["fill", "#606060", "d", "M81.905 36.818c-.204.249.158 2.302 1.489 3.656 1.333 1.331 2.145 1.331 2.686.745 1.038-1.106.203-2.144-.429-2.866-.632-.723-1.444-.474-2.188-1.196s-1.266-.677-1.558-.339z"], ["fill", "#666", "d", "M81.927 36.84c-.201.246.157 2.281 1.476 3.623 1.319 1.318 2.125 1.318 2.661.737 1.029-1.096.201-2.124-.425-2.84-.626-.716-1.431-.47-2.17-1.186-.737-.714-1.252-.67-1.542-.334z"], ["fill", "#fc0", "d", "M57.6 18.004c.639.441.656.519 1.598 1.135 1.498 1.216 4.16 1.49 5.464 1.533 2.98.474 8.31-2.312 10.419-3.587 1.063-.795 3.029-2.438 3.765-2.466.453.479-.213.579-1.158 1.219-1.262.897-2.341 1.665-4.253 2.75-2.046 1.07-5.19 2.839-9.217 2.601-2.113-.31-2.12-.331-3.424-.997-.776-.56-2.552-1.488-3.194-2.188z"], ["fill", "url(#c)", "d", "M57.585 17.999c.622.411.699.53 1.641 1.147 1.491 1.206 4.105 1.49 5.423 1.538 3.024.469 8.411-2.354 10.447-3.603 1.084-.809 3.017-2.42 3.743-2.455.441.476-.235.571-1.19 1.231-1.255.889-2.298 1.636-4.188 2.707-2.031 1.062-5.191 2.84-9.213 2.616-2.119-.305-2.212-.345-3.474-.994-.798-.567-2.543-1.481-3.189-2.187z"], ["fill", "url(#d)", "d", "M57.569 17.992c.605.382.742.542 1.684 1.161 1.483 1.195 4.052 1.491 5.382 1.542 3.067.464 8.513-2.398 10.475-3.619 1.105-.823 3.004-2.403 3.722-2.444.428.47-.257.563-1.224 1.245-1.25.879-2.256 1.605-4.124 2.663-2.016 1.055-5.191 2.84-9.209 2.633-2.124-.3-2.303-.361-3.522-.992-.818-.575-2.534-1.474-3.184-2.189z"], ["fill", "url(#e)", "d", "M57.553 17.986c.59.353.786.553 1.729 1.174 1.475 1.183 3.997 1.49 5.341 1.545 3.109.46 8.613-2.441 10.501-3.633 1.128-.838 2.994-2.387 3.702-2.434.415.466-.279.555-1.256 1.257-1.244.872-2.215 1.577-4.058 2.622-2.001 1.046-5.191 2.84-9.206 2.649-2.132-.296-2.395-.376-3.572-.99-.841-.582-2.527-1.468-3.181-2.19z"], ["fill", "url(#f)", "d", "M57.537 17.98c.573.323.83.566 1.772 1.187 1.467 1.172 3.942 1.49 5.301 1.55 3.153.455 8.713-2.484 10.527-3.648 1.148-.852 2.983-2.37 3.679-2.423.403.46-.299.546-1.288 1.269-1.238.863-2.173 1.547-3.993 2.579-1.985 1.039-5.191 2.841-9.202 2.665-2.138-.292-2.487-.391-3.62-.988-.861-.59-2.518-1.462-3.176-2.191z"], ["fill", "url(#g)", "d", "M57.523 17.974c.557.293.872.577 1.815 1.2 1.46 1.162 3.888 1.49 5.26 1.554 3.195.45 8.814-2.527 10.555-3.664 1.169-.866 2.97-2.353 3.658-2.413.39.456-.321.539-1.321 1.282-1.231.854-2.13 1.517-3.929 2.536-1.97 1.031-5.19 2.841-9.198 2.681-2.144-.287-2.579-.405-3.668-.985-.884-.597-2.512-1.455-3.172-2.191z"], ["fill", "url(#h)", "d", "M57.506 17.968c.54.264.916.589 1.859 1.213 1.452 1.15 3.834 1.49 5.219 1.559 3.238.445 8.916-2.571 10.582-3.68 1.191-.88 2.959-2.335 3.638-2.402.377.451-.342.531-1.354 1.295-1.225.845-2.088 1.488-3.864 2.493-1.955 1.023-5.191 2.842-9.195 2.697-2.15-.282-2.67-.421-3.716-.984-.906-.604-2.503-1.447-3.169-2.191z"], ["fill", "url(#i)", "d", "M57.491 17.962c.523.234.959.601 1.902 1.226 1.445 1.14 3.779 1.49 5.178 1.562 3.281.44 9.017-2.614 10.609-3.696 1.213-.893 2.948-2.317 3.616-2.39.365.446-.364.522-1.386 1.307-1.22.837-2.047 1.458-3.799 2.45-1.939 1.015-5.191 2.843-9.191 2.713-2.156-.277-2.761-.436-3.766-.981-.927-.611-2.494-1.44-3.163-2.191z"], ["fill", "url(#j)", "d", "M57.475 17.957c.507.205 1.003.612 1.946 1.239 1.436 1.128 3.724 1.489 5.137 1.566 3.324.436 9.118-2.657 10.636-3.711 1.234-.908 2.936-2.301 3.596-2.38.352.441-.386.515-1.419 1.32-1.213.828-2.005 1.429-3.734 2.408-1.923 1.006-5.191 2.843-9.187 2.729-2.162-.272-2.853-.451-3.814-.979-.951-.62-2.488-1.435-3.161-2.192z"], ["fill", "url(#k)", "d", "M57.46 17.95c.491.175 1.047.624 1.989 1.252 1.43 1.117 3.67 1.49 5.097 1.571 3.367.431 9.22-2.7 10.663-3.726 1.257-.922 2.925-2.284 3.574-2.37.34.437-.407.506-1.451 1.332-1.208.819-1.962 1.4-3.669 2.365-1.908.999-5.19 2.843-9.183 2.746-2.167-.268-2.944-.466-3.863-.977-.974-.626-2.481-1.427-3.157-2.193z"], ["fill", "url(#l)", "d", "M57.443 17.944c.475.146 1.091.636 2.033 1.266 1.422 1.106 3.617 1.489 5.058 1.575 3.409.425 9.32-2.744 10.69-3.742 1.277-.936 2.912-2.267 3.552-2.359.327.432-.429.499-1.484 1.345-1.202.811-1.921 1.37-3.605 2.322-1.892.991-5.19 2.844-9.179 2.761-2.173-.263-3.037-.48-3.912-.975-.994-.633-2.472-1.42-3.153-2.193z"], ["fill", "url(#m)", "d", "M57.428 17.938c.458.116 1.134.647 2.077 1.278 1.414 1.095 3.562 1.489 5.016 1.579 3.452.421 9.421-2.786 10.717-3.757 1.299-.95 2.901-2.25 3.532-2.349.314.427-.45.491-1.517 1.357-1.196.802-1.878 1.34-3.54 2.28-1.877.982-5.19 2.844-9.175 2.778-2.18-.259-3.128-.496-3.961-.973-1.017-.64-2.464-1.412-3.149-2.193z"], ["fill", "url(#n)", "d", "M57.413 17.932c.442.086 1.176.659 2.12 1.291 1.407 1.084 3.507 1.49 4.976 1.583 3.495.416 9.522-2.829 10.744-3.773 1.321-.964 2.889-2.231 3.51-2.337.302.422-.471.483-1.549 1.371-1.189.793-1.836 1.311-3.475 2.237-1.862.974-5.19 2.844-9.171 2.794-2.186-.255-3.22-.511-4.009-.971-1.041-.648-2.458-1.407-3.146-2.195z"], ["fill", "url(#o)", "d", "M57.397 17.926c.426.057 1.221.67 2.164 1.305 1.399 1.073 3.454 1.489 4.935 1.587 3.538.412 9.623-2.873 10.772-3.788 1.342-.979 2.877-2.215 3.488-2.327.289.417-.493.475-1.582 1.383-1.184.785-1.794 1.281-3.41 2.194-1.847.966-5.191 2.845-9.168 2.81-2.194-.25-3.312-.525-4.059-.968-1.061-.657-2.448-1.401-3.14-2.196z"], ["fill", "url(#p)", "d", "M57.381 17.92c.409.027 1.263.682 2.207 1.318 1.392 1.062 3.399 1.489 4.894 1.592 3.581.406 9.725-2.916 10.798-3.804 1.364-.992 2.866-2.198 3.468-2.316.275.413-.516.467-1.615 1.396-1.177.776-1.752 1.252-3.345 2.151-1.832.959-5.191 2.846-9.164 2.826-2.2-.245-3.403-.541-4.106-.966-1.083-.664-2.441-1.394-3.137-2.197z"], ["fill", "url(#q)", "d", "M57.366 17.914c.393-.002 1.306.694 2.25 1.331 1.384 1.051 3.345 1.489 4.853 1.596 3.624.402 9.826-2.958 10.826-3.819 1.385-1.006 2.855-2.181 3.447-2.306.262.408-.537.458-1.647 1.408-1.172.768-1.71 1.222-3.28 2.109-1.816.95-5.19 2.845-9.16 2.842-2.204-.241-3.495-.556-4.155-.964-1.106-.671-2.435-1.386-3.134-2.197z"], ["fill", "url(#r)", "d", "M57.351 17.908c.376-.032 1.349.706 2.293 1.344 1.376 1.04 3.29 1.489 4.812 1.6 3.666.397 9.926-3.002 10.853-3.834 1.406-1.021 2.842-2.163 3.424-2.295.25.403-.558.451-1.68 1.421-1.166.759-1.668 1.193-3.215 2.066-1.8.942-5.19 2.846-9.156 2.858-2.211-.235-3.586-.571-4.204-.962-1.126-.679-2.425-1.38-3.127-2.198z"], ["fill", "url(#s)", "d", "M57.335 17.901c.36-.061 1.393.718 2.337 1.357 1.368 1.029 3.235 1.489 4.772 1.604 3.709.392 10.027-3.045 10.879-3.851 1.428-1.034 2.831-2.146 3.404-2.284.238.398-.58.443-1.712 1.434-1.16.75-1.626 1.163-3.15 2.023-1.785.935-5.191 2.847-9.153 2.875-2.217-.231-3.679-.586-4.253-.959-1.148-.685-2.417-1.373-3.124-2.199z"], ["fill", "url(#t)", "d", "M57.319 17.896c.343-.091 1.437.729 2.381 1.37 1.361 1.018 3.181 1.489 4.731 1.608 3.752.387 10.128-3.089 10.907-3.866 1.45-1.048 2.819-2.128 3.383-2.273.225.393-.601.435-1.745 1.446-1.153.742-1.584 1.134-3.086 1.98-1.769.926-5.19 2.847-9.149 2.891-2.223-.227-3.769-.602-4.301-.958-1.171-.693-2.41-1.365-3.121-2.198z"], ["fill", "url(#u)", "d", "M57.303 17.89c.327-.12 1.481.74 2.425 1.383 1.354 1.006 3.126 1.488 4.69 1.612 3.795.382 10.229-3.132 10.934-3.881 1.471-1.062 2.807-2.112 3.361-2.263.212.389-.623.427-1.777 1.459-1.149.732-1.542 1.104-3.021 1.938-1.755.918-5.191 2.847-9.145 2.906-2.23-.222-3.862-.616-4.351-.956-1.192-.699-2.401-1.358-3.116-2.198z"], ["fill", "url(#v)", "d", "M57.288 17.884c.311-.15 1.523.752 2.468 1.396 1.345.996 3.073 1.489 4.649 1.617 3.838.377 10.331-3.175 10.961-3.896 1.493-1.076 2.796-2.095 3.34-2.252.2.384-.645.419-1.809 1.472-1.143.724-1.501 1.075-2.957 1.895-1.738.91-5.19 2.848-9.141 2.922-2.236-.217-3.953-.631-4.399-.953-1.215-.709-2.394-1.354-3.112-2.201z"], ["viewBox", "0 0 256 256", 3, "id"], ["d", "M237.248313,18.7516875 C249.288646,30.7920202 255.539209,45.8744355 255.995734,63.9989335 L255.995734,192.001067 C255.539209,210.121298 249.288646,225.207981 237.248313,237.248313 C225.207981,249.288646 210.121298,255.539209 191.9968,256 L63.9989335,256 C45.8744355,255.539209 30.7920202,249.288646 18.7516875,237.248313 C6.71135482,225.207981 0.460792321,210.121298 0,192.001067 L0,63.9989335 C0.460792321,45.8744355 6.71135482,30.7920202 18.7516875,18.7516875 C30.7920202,6.71135482 45.8744355,0.460792321 63.9989335,0 L191.9968,0 C210.121298,0.460792321 225.207981,6.71135482 237.248313,18.7516875 L237.248313,18.7516875 L237.248313,18.7516875 Z M219.59314,121.751571 C215.569741,117.749505 213.479109,112.727722 213.312712,106.686222 L213.312712,63.9989335 C213.184714,57.9574341 211.111148,52.927118 207.092015,48.907985 C203.072883,44.8845853 198.038299,42.8152865 191.9968,42.6872886 L170.685155,42.6872886 L170.685155,149.313778 L85.3148448,42.6872886 L63.9989335,42.6872886 C57.9574341,42.8152865 52.927118,44.8845853 48.907985,48.907985 C44.8845853,52.927118 42.8152865,57.9574341 42.6872886,63.9989335 L42.6872886,106.686222 C42.5208914,112.727722 40.4302595,117.749505 36.40686,121.751571 C32.3877269,125.749371 27.3574107,127.831469 21.3159115,127.997867 C27.3574107,128.168531 32.3877269,130.250629 36.40686,134.248429 C40.4302595,138.250496 42.5208914,143.272279 42.6872886,149.313778 L42.6872886,192.001067 C42.8152865,198.038299 44.8845853,203.072883 48.907985,207.092015 C52.927118,211.111148 57.9574341,213.184714 63.9989335,213.312712 L85.3148448,213.312712 L85.3148448,106.686222 L170.685155,213.312712 L191.9968,213.312712 C198.038299,213.184714 203.072883,211.111148 207.092015,207.092015 C211.111148,203.072883 213.184714,198.038299 213.312712,192.001067 L213.312712,149.313778 C213.479109,143.272279 215.569741,138.250496 219.59314,134.248429 C223.612274,130.250629 228.642589,128.168531 234.684089,127.997867 C228.642589,127.831469 223.612274,125.749371 219.59314,121.751571 L219.59314,121.751571 L219.59314,121.751571 Z", "fill", "#3C5AFD"], ["viewBox", "0 0 1333.3333 1333.3333", 3, "id"], ["transform", "matrix(1.3333333,0,0,-1.3333333,0,1333.3333)", "id", "g10"], ["transform", "translate(499.9814,989)", "id", "g12"], ["id", "path14", "d", "M 0,0 -455.981,-158.62 -390.562,-764.863 0,-978.147 Z", 2, "fill", "#412846", "fill-opacity", "1", "fill-rule", "evenodd", "stroke", "none"], ["transform", "translate(499.9814,989)", "id", "g16"], ["id", "path18", "d", "M 0,0 455.981,-158.62 390.562,-764.863 0,-978.147 Z", 2, "fill", "#4b314f", "fill-opacity", "1", "fill-rule", "evenodd", "stroke", "none"], ["id", "g20"], ["clip-path", "url(#clipPath26)", "id", "g22"], ["transform", "translate(567,665)", "id", "g28"], ["id", "path30", "d", "M 0,0 C 7.18,0 13,5.82 13,13 13,20.18 7.18,26 0,26 -7.18,26 -13,20.18 -13,13 -13,5.82 -7.18,0 0,0 m 160.748,-10.712 -0.082,0.259 c 20.865,-23.223 31.583,-50.798 32.152,-82.726 0.57,-31.927 -10.148,-65.607 -32.399,-100.934 16.63,12.926 35.835,40.832 57.552,83.392 9.382,-86.253 -25.475,-151.768 -104.894,-196.637 25.357,2.338 59.022,19.032 100.776,50.139 -44.558,-107.273 -126.485,-163.873 -245.782,-169.797 -115.292,0.032 -189.981,69.316 -189.922,69.272 -47.4,36.89 -80.013,83.388 -97.728,139.283 -28.35,30.959 -28.632,34.279 -31.557,46.65 -2.924,12.372 1.847,15.828 10.152,27.933 5.537,8.07 6.841,19.68 3.997,34.62 -7.058,9.788 -11.122,25.117 -12.193,45.988 0,10.086 6.731,20.728 20.194,31.925 13.462,11.198 21.721,19.809 24.714,25.738 2.282,3.233 3.164,17.246 2.645,42.041 -0.139,24.352 13.382,37.602 40.565,39.748 40.773,3.218 63.768,33.883 76.578,47.829 8.541,9.297 21.179,13.816 37.121,13.903 22.443,1.052 42.863,-7.551 60.454,-25.305 43.815,2.266 88.696,-9.55 134.172,-35.148 64.624,-38.389 99.892,-79.961 105.805,-124.508 -6.926,-58.625 -85.679,-57.093 -235.91,4.612 -78.617,-22.269 -117.267,-70.525 -115.984,-144.768 -0.053,-68.129 32.92,-117.635 98.694,-148.468 -32.058,31.474 -45.711,57.927 -41.114,79.835 66.68,-78.967 142.633,-108.481 227.727,-88.551 -37.516,-1.31 -67.233,10.762 -89.597,36.397 57.516,1.397 111.814,28.097 162.944,80.372 -29.516,-23.487 -60.4,-32.381 -93.101,-26.787 88.568,69.632 119.908,150.862 94.021,243.693", 2, "fill", "#ba2bd2", "fill-opacity", "1", "fill-rule", "evenodd", "stroke", "none"], ["fill", "#83CD29", "d", "M114.325 80.749c-.29 0-.578-.076-.832-.224l-2.65-1.568c-.396-.221-.203-.3-.072-.345.528-.184.635-.227 1.198-.545.059-.033.136-.021.197.015l2.035 1.209c.074.041.179.041.246 0l7.937-4.581c.075-.042.122-.127.122-.215v-9.16c0-.09-.047-.173-.123-.219l-7.934-4.577c-.074-.042-.171-.042-.245 0l-7.933 4.578c-.076.045-.125.131-.125.218v9.16c0 .088.049.171.125.212l2.174 1.257c1.18.589 1.903-.105 1.903-.803v-9.045c0-.127.103-.228.23-.228h1.007c.125 0 .229.101.229.228v9.045c0 1.574-.857 2.477-2.35 2.477-.459 0-.82 0-1.828-.496l-2.081-1.198c-.515-.298-.832-.854-.832-1.448v-9.16c0-.595.317-1.15.832-1.446l7.937-4.587c.502-.283 1.169-.283 1.667 0l7.937 4.587c.514.297.833.852.833 1.446v9.16c0 .595-.319 1.148-.833 1.448l-7.937 4.582c-.252.147-.539.223-.834.223M116.778 74.438c-3.475 0-4.202-1.595-4.202-2.932 0-.126.103-.229.23-.229h1.026c.115 0 .21.082.228.194.154 1.045.617 1.572 2.718 1.572 1.671 0 2.383-.378 2.383-1.266 0-.512-.202-.891-2.8-1.146-2.172-.215-3.515-.694-3.515-2.433 0-1.601 1.35-2.557 3.612-2.557 2.543 0 3.801.883 3.96 2.777.006.064-.017.127-.06.176-.044.045-.104.073-.168.073h-1.031c-.107 0-.201-.075-.223-.179-.248-1.1-.848-1.451-2.479-1.451-1.825 0-2.037.637-2.037 1.112 0 .577.25.745 2.715 1.071 2.439.323 3.598.779 3.598 2.494.001 1.733-1.441 2.724-3.955 2.724"], ["fill", "#404137", "d", "M97.982 68.43c.313-.183.506-.517.506-.88v-2.354c0-.362-.192-.696-.506-.879l-8.364-4.856c-.315-.183-.703-.184-1.019-.002l-8.416 4.859c-.314.182-.508.517-.508.88v9.716c0 .365.196.703.514.884l8.363 4.765c.308.177.686.178.997.006l5.058-2.812c.161-.09.261-.258.262-.44.001-.184-.097-.354-.256-.445l-8.468-4.86c-.159-.091-.256-.259-.256-.44v-3.046c0-.182.097-.349.254-.439l2.637-1.52c.156-.091.35-.091.507 0l2.637 1.52c.158.091.255.258.255.439v2.396c0 .183.097.351.254.441.158.091.352.091.51-.001l5.039-2.932"], ["fill", "#83CD29", "d", "M88.984 67.974c.061-.034.135-.034.195 0l1.615.933c.06.035.097.1.097.169v1.865c0 .07-.037.134-.097.169l-1.615.932c-.06.035-.135.035-.195 0l-1.614-.932c-.061-.035-.098-.099-.098-.169v-1.865c0-.069.037-.134.098-.169l1.614-.933"], ["fill", "#404137", "d", "M67.083 71.854c0 .09-.048.174-.127.22l-2.89 1.666c-.079.046-.176.046-.254 0l-2.89-1.666c-.079-.046-.127-.13-.127-.22v-3.338c0-.09.049-.175.127-.221l2.89-1.668c.079-.047.176-.047.255 0l2.891 1.668c.078.046.126.131.126.221v3.338zm.781-24.716c-.157-.087-.349-.085-.505.006-.155.092-.251.258-.251.438v12.915c0 .126-.068.244-.177.308-.11.063-.246.063-.356 0l-2.108-1.215c-.314-.181-.701-.181-1.015 0l-8.418 4.858c-.315.182-.509.518-.509.881v9.719c0 .363.194.698.508.881l8.418 4.861c.314.182.702.182 1.017 0l8.42-4.861c.314-.183.508-.518.508-.881v-24.227c0-.368-.2-.708-.521-.888l-5.011-2.795"], ["fill", "#83CD29", "d", "M38.238 59.407c.314-.182.702-.182 1.016 0l8.418 4.857c.314.182.508.518.508.881v9.722c0 .363-.194.699-.508.881l-8.417 4.861c-.314.181-.702.181-1.017 0l-8.415-4.861c-.314-.182-.508-.518-.508-.881v-9.723c0-.362.194-.698.508-.88l8.415-4.857"], ["fill", "#404137", "d", "M22.93 65.064c0-.366-.192-.702-.508-.883l-8.415-4.843c-.144-.084-.303-.127-.464-.133h-.087c-.16.006-.32.049-.464.133l-8.416 4.843c-.313.181-.509.517-.509.883l.018 13.04c0 .182.095.351.254.439.156.094.349.094.505 0l5-2.864c.316-.188.509-.519.509-.882v-6.092c0-.364.192-.699.507-.881l2.13-1.226c.158-.093.332-.137.508-.137.174 0 .352.044.507.137l2.128 1.226c.315.182.509.517.509.881v6.092c0 .363.195.696.509.882l5 2.864c.157.094.353.094.508 0 .155-.089.252-.258.252-.439l.019-13.04"], ["fill", "#386b96", "d", "M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"], ["fill", "#FFD845", "d", "M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"], ["viewBox", "0 0 32 32", 3, "id"], ["d", "M15 3.77a.951.951 0 1 1 1.902 0 .951.951 0 0 1-1.902 0m-11.346 8.61a.951.951 0 1 1 1.902 0 .951.951 0 0 1-1.902 0m22.692.044a.951.951 0 0 1 1.902 0 .951.951 0 0 1-1.902 0M6.406 13.73a.87.87 0 0 0 .441-1.146l-.422-.954h1.66v7.48H4.736a11.71 11.71 0 0 1-.379-4.47zm6.942.184v-2.205H17.3c.204 0 1.44.236 1.44 1.16 0 .768-.95 1.044-1.73 1.044zM7.952 25.785a.951.951 0 1 1 1.902 0 .951.951 0 0 1-1.902 0m14.093.044a.951.951 0 0 1 1.902 0 .951.951 0 0 1-1.902 0m.294-2.157c-.47-.1-.93.198-1.03.667l-.477 2.228a11.71 11.71 0 0 1-9.765-.047l-.477-2.228c-.1-.47-.56-.768-1.03-.667l-1.967.422a11.71 11.71 0 0 1-1.017-1.199h9.57c.108 0 .18-.02.18-.118v-3.385c0-.1-.072-.118-.18-.118h-2.8v-2.146h3.027c.276 0 1.477.08 1.862 1.614l.565 2.5c.18.55.913 1.653 1.693 1.653h4.94a11.71 11.71 0 0 1-1.085 1.255zm5.314-8.938a11.71 11.71 0 0 1 .025 2.033h-1.2c-.12 0-.17.08-.17.197v.552c0 1.3-.732 1.58-1.374 1.653-.61.07-1.29-.256-1.372-.63-.36-2.028-.96-2.46-1.9-3.21 1.177-.748 2.402-1.85 2.402-3.327 0-1.594-1.093-2.598-1.838-3.09-1.045-.69-2.202-.827-2.514-.827H7.277a11.71 11.71 0 0 1 6.551-3.697l1.465 1.537c.33.347.88.36 1.226.028l1.64-1.567a11.71 11.71 0 0 1 8.017 5.709l-1.122 2.534a.87.87 0 0 0 .441 1.146zm2.798.04l-.038-.392 1.156-1.078c.235-.22.147-.66-.153-.772l-1.477-.552-.116-.38.92-1.28c.188-.26.015-.675-.3-.727l-1.558-.253-.187-.35.655-1.437c.134-.293-.115-.667-.437-.655l-1.58.055-.25-.303.363-1.54c.073-.313-.244-.63-.557-.557l-1.54.363-.304-.25.055-1.58c.012-.32-.362-.57-.654-.437l-1.436.655-.35-.188-.254-1.558c-.05-.316-.467-.488-.727-.3l-1.28.92-.38-.115-.552-1.477c-.112-.3-.553-.388-.772-.154l-1.078 1.156-.392-.038-.832-1.345c-.168-.272-.62-.272-.787 0l-.832 1.345-.392.038L13.305.43c-.22-.234-.66-.147-.772.154l-.552 1.477-.38.115-1.28-.92c-.26-.188-.676-.015-.727.3l-.254 1.558-.35.188-1.436-.655c-.292-.133-.667.117-.654.437l.055 1.58-.304.25-1.54-.363c-.313-.073-.63.244-.557.557l.363 1.54-.25.303-1.58-.055c-.32-.01-.57.362-.437.655l.655 1.437-.188.35-1.558.253c-.316.05-.488.467-.3.727l.92 1.28-.116.38-1.477.552c-.3.112-.388.553-.153.772l1.156 1.078-.038.392-1.345.832c-.272.168-.272.62 0 .787l1.345.832.038.392L.43 18.697c-.234.22-.147.66.153.772l1.477.552.116.38-.92 1.28c-.187.26-.015.676.3.727l1.557.253.188.35-.655 1.436c-.133.292.118.667.437.655l1.58-.055.25.304-.363 1.54c-.073.312.244.63.557.556l1.54-.363.304.25-.055 1.58c-.012.32.362.57.654.437l1.436-.655.35.188.254 1.557c.05.317.467.488.727.302l1.28-.922.38.116.552 1.477c.112.3.553.388.772.153l1.078-1.156.392.04.832 1.345c.168.27.618.272.787 0l.832-1.345.392-.04 1.078 1.156c.22.235.66.147.772-.153l.552-1.477.38-.116 1.28.922c.26.187.676.015.727-.302l.254-1.557.35-.188 1.436.655c.292.133.666-.116.654-.437l-.055-1.58.303-.25 1.54.363c.313.073.63-.244.557-.556l-.363-1.54.25-.304 1.58.055c.32.013.57-.363.437-.655l-.655-1.436.187-.35 1.558-.253c.317-.05.49-.466.3-.727l-.92-1.28.116-.38 1.477-.552c.3-.113.388-.553.153-.772l-1.156-1.078.038-.392 1.345-.832c.272-.168.273-.618 0-.787z"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "fill", "#CB6699", "d", "M1.219 56.156c0 .703.207 1.167.323 1.618.756 2.933 2.381 5.45 4.309 7.746 2.746 3.272 6.109 5.906 9.554 8.383 2.988 2.148 6.037 4.248 9.037 6.38.515.366 1.002.787 1.561 1.236-.481.26-.881.489-1.297.7-3.959 2.008-7.768 4.259-11.279 6.986-2.116 1.644-4.162 3.391-5.607 5.674-2.325 3.672-3.148 7.584-1.415 11.761.506 1.22 1.278 2.274 2.367 3.053.353.252.749.502 1.162.6 1.058.249 2.136.412 3.207.609l3.033-.002c3.354-.299 6.407-1.448 9.166-3.352 4.312-2.976 7.217-6.966 8.466-12.087.908-3.722.945-7.448-.125-11.153-.099-.344-.224-.681-.354-1.014-.13-.333-.283-.657-.463-1.072l6.876-3.954.103.088c-.125.409-.258.817-.371 1.23-.817 2.984-1.36 6.02-1.165 9.117.208 3.3 1.129 6.389 3.061 9.146 1.562 2.23 5.284 2.313 6.944.075.589-.795 1.16-1.626 1.589-2.513 1.121-2.315 2.159-4.671 3.23-7.011l.187-.428c-.077 1.108-.167 2.081-.208 3.055-.064 1.521.025 3.033.545 4.48.445 1.238 1.202 2.163 2.62 2.326.97.111 1.743-.333 2.456-.896 1.114-.879 2.019-1.965 2.691-3.199 1.901-3.491 3.853-6.961 5.576-10.54 1.864-3.871 3.494-7.855 5.225-11.792l.286-.698c.409 1.607.694 3.181 1.219 4.671.61 1.729 1.365 3.417 2.187 5.058.389.775.344 1.278-.195 1.928-2.256 2.72-4.473 5.473-6.692 8.223-.491.607-.98 1.225-1.389 1.888-.247.403-.411.894-.48 1.364-.133.898.422 1.764 1.383 1.971.878.189 1.813.259 2.708.193 3.097-.228 5.909-1.315 8.395-3.157 3.221-2.386 4.255-5.642 3.475-9.501-.211-1.047-.584-2.065-.947-3.074-.163-.455-.174-.774.123-1.198 2.575-3.677 4.775-7.578 6.821-11.569.081-.157.164-.314.306-.482.663 3.45 1.661 6.775 3.449 9.792-.912.879-1.815 1.676-2.632 2.554-1.799 1.934-3.359 4.034-4.173 6.595-.35 1.104-.619 2.226-.463 3.405.242 1.831 1.742 3.021 3.543 2.604 3.854-.892 7.181-2.708 9.612-5.925 1.636-2.166 1.785-4.582 1.1-7.113-.188-.688-.411-1.365-.651-2.154.951-.295 1.878-.649 2.837-.868 4.979-1.136 9.904-.938 14.702.86 2.801 1.05 5.064 2.807 6.406 5.571 1.639 3.379.733 6.585-2.452 8.721-.297.199-.637.356-.883.605-.151.153-.242.459-.205.67.021.123.346.277.533.275 1.047-.008 1.896-.557 2.711-1.121 2.042-1.413 3.532-3.314 3.853-5.817l.063-.188-.077-1.63c-.031-.094.023-.187.016-.258-.434-3.645-2.381-6.472-5.213-8.688-3.28-2.565-7.153-3.621-11.249-3.788-3.338-.136-6.619.36-9.765 1.503-.897.325-1.786.71-2.688 1.073-.121-.219-.251-.429-.358-.646-.926-1.896-2.048-3.708-2.296-5.882-.176-1.544-.392-3.086-.025-4.613.353-1.469.813-2.913 1.246-4.362.223-.746.066-1.164-.646-1.5-.248-.117-.518-.219-.786-.258-1.75-.254-3.476-.109-5.171.384-.6.175-1.036.511-1.169 1.175-.076.381-.231.746-.339 1.122-.443 1.563-.757 3.156-1.473 4.645-1.794 3.735-3.842 7.329-5.938 10.897-.227.385-.466.763-.752 1.23-.736-1.54-1.521-2.922-1.759-4.542-.269-1.832-.481-3.661-.025-5.479.339-1.356.782-2.687 1.19-4.025.193-.636.104-.97-.472-1.305-.291-.169-.62-.319-.948-.368-1.815-.269-3.603-.128-5.354.438-.543.176-.828.527-.994 1.087-.488 1.652-.904 3.344-1.589 4.915-2.774 6.36-5.628 12.687-8.479 19.013-.595 1.321-1.292 2.596-1.963 3.882-.17.326-.418.613-.63.919-.17-.201-.236-.339-.235-.477.005-.813-.092-1.65.063-2.436.469-2.378 1.009-4.743 1.578-7.099.47-1.946 1.017-3.874 1.538-5.807.175-.647.178-1.252-.287-1.796-.781-.911-2.413-1.111-3.381-.409l-.428.242.083-.69c.204-1.479.245-2.953-.161-4.41-.506-1.816-1.802-2.861-3.686-2.803-.878.027-1.8.177-2.613.497-3.419 1.34-6.048 3.713-8.286 6.568-.203.259-.471.495-.757.654-2.893 1.604-5.795 3.188-8.696 4.778l-3.229 1.769c-.866-.826-1.653-1.683-2.546-2.41-2.727-2.224-5.498-4.393-8.244-6.592-2.434-1.949-4.792-3.979-6.596-6.56-1.342-1.92-2.207-4.021-2.29-6.395-.105-3.025.753-5.789 2.293-8.362 1.97-3.292 4.657-5.934 7.611-8.327 3.125-2.53 6.505-4.678 10.008-6.639 4.901-2.743 9.942-5.171 15.347-6.774 5.542-1.644 11.165-2.585 16.965-1.929 2.28.258 4.494.78 6.527 1.895 1.557.853 2.834 1.97 3.428 3.716.586 1.718.568 3.459.162 5.204-.825 3.534-2.76 6.447-5.195 9.05-3.994 4.267-8.866 7.172-14.351 9.091-3.165 1.107-6.421 1.802-9.765 2.083-2.729.229-5.401-.013-7.985-.962-1.711-.629-3.201-1.591-4.399-2.987-.214-.25-.488-.521-.887-.287-.391.23-.46.602-.329.979.219.626.421 1.278.762 1.838.857 1.405 2.107 2.424 3.483 3.298 2.643 1.681 5.597 2.246 8.66 2.377 4.648.201 9.183-.493 13.654-1.74 6.383-1.78 11.933-4.924 16.384-9.884 3.706-4.13 6.353-8.791 6.92-14.419.277-2.747-.018-5.438-1.304-7.944-1.395-2.715-3.613-4.734-6.265-6.125-3.862-2.025-8.03-3.204-12.332-3.204h-4.31c-5.21 0-10.247 1.493-15.143 3.274-3.706 1.349-7.34 2.941-10.868 4.703-7.683 3.839-14.838 8.468-20.715 14.833-2.928 3.171-5.407 6.67-6.833 10.79-.417 1.206-.813 2.499-1.111 3.746m27.839 36.013c-.333 4.459-2.354 8.074-5.657 11.002-1.858 1.646-3.989 2.818-6.471 3.23-.9.149-1.821.185-2.694-.188-1.245-.532-1.524-1.637-1.548-2.814-.037-1.876.62-3.572 1.521-5.186 1.176-2.104 2.9-3.708 4.741-5.206 2.9-2.361 6.046-4.359 9.268-6.245l.243-.1c.498 1.84.735 3.657.597 5.507zm25.158-19.379c-.235 1.424-.529 2.849-.945 4.229-1.438 4.777-3.285 9.406-5.282 13.973-.369.845-.906 1.616-1.373 2.417-.072.124-.179.231-.283.334-.578.571-1.126.541-1.418-.206-.34-.868-.549-1.797-.729-2.716-.121-.617-.092-1.265-.13-1.897.039-4.494 1.41-8.578 3.736-12.38.959-1.568 2.003-3.062 3.598-4.054.49-.305 1.04-.55 1.595-.706.85-.239 1.372.154 1.231 1.006zm17.164 21.868l6.169-7.203c.257 2.675-4.29 8.015-6.169 7.203zm19.703-4.847c-.436.25-.911.43-1.358.661-.409.212-.544-.002-.556-.354-.008-.239.027-.489.093-.721.833-2.938 2.366-5.446 4.647-7.486l.16-.082c1.085 3.035-.169 6.368-2.986 7.982z"], ["viewBox", "-11 0 82 82", 3, "id"], ["d", "M32.708 39.7c-.208-.416-.625-.623-.833-1.04-.417-.208-.833-.416-1.25-.416-.625 0-1.042.208-1.458.416s-.625.623-1.042.83l-.625 1.247c-.208.416-.208 1.04-.208 1.662 0 .83 0 1.454.208 1.87.208.623.417 1.04.625 1.247.2.416.625.623 1.042.623.417.208.833.208 1.25.208s.833 0 1.04-.208c.417-.208.625-.416 1.042-.83l.625-1.247c.208-.415.208-1.04.208-1.87 0-.623 0-1.04-.208-1.662l-.417-.83zM30 0C13.333 0 0 5.6 0 11.844v56.104C0 74.182 13.54 80 30 80c16.666 0 30-5.6 30-11.844V12.052C60.206 5.818 46.665 0 30 0zm-8.96 46.96c0 .416-.208.83-.417 1.247s-.417.83-.833 1.04c-.417.416-.833.623-1.25.83s-1.042.416-1.875.624c-.625.208-1.458.208-2.5.208h-1.458c-.417 0-.833 0-1.25-.208-.417 0-.833-.208-1.042-.208-.417 0-.625-.208-.833-.416v-4.364c.208.208.625.416 1.042.624s.625.416 1.04.623.834.208 1.25.416.833.208 1.25.208.625 0 .833-.208c.208 0 .417-.208.417-.208.208 0 .208-.208.208-.416v-.416c0-.208 0-.416-.208-.623S15.208 45.3 15 45.3c-.208-.208-.417-.208-.833-.416s-.625-.208-1.042-.416c-.625-.208-1.25-.623-1.875-1.04-.417-.416-.833-.623-1.25-1.04s-.625-.83-.625-1.247c-.2-.415-.2-1.04-.2-1.454 0-.83.2-1.455.417-2.078.417-.623.833-1.247 1.25-1.663.625-.415 1.25-.83 2.083-1.04s1.667-.416 2.708-.416h1.458c.417 0 .833 0 1.25.208.416 0 .625.208 1.042.208s.625.208.833.208v4.156c-.2-.208-.417-.208-.833-.415-.208-.208-.625-.208-1.042-.416s-.625-.208-1.042-.208h-1.25c-.625 0-1.042 0-1.25.208-.417.208-.417.416-.417.83 0 .208 0 .416.208.416 0 .208.208.208.417.416s.417.208.625.416.625.208 1.042.416c.625.208 1.25.623 1.875.83.625.416 1.04.624 1.458 1.04s.625.83 1.042 1.247c.208.416.417 1.04.417 1.87a1.59 1.59 0 0 0-.417 1.04zm12.3 7.896l-3.54-3.74c-1.042 0-2.083-.415-2.917-.623-.833-.416-1.666-1.04-2.3-1.662a7.48 7.48 0 0 1-1.667-2.494c-.417-1.04-.625-2.078-.625-3.325s.208-2.493.625-3.532 1.042-1.87 1.667-2.7 1.666-1.247 2.5-1.662c1.042-.416 2.083-.623 3.333-.623s2.3.208 3.125.624c1.042.416 1.875 1.04 2.5 1.662s1.25 1.662 1.666 2.493c.417 1.04.625 2.078.625 3.533 0 .83 0 1.87-.416 2.493-.208.83-.625 1.455-1.042 2.078s-.833 1.247-1.458 1.662-1.04.83-1.875 1.247l5.416 4.57h-5.625zM51.248 50.7H40.832v-16h4.8v12.26h5.625v3.74zM30 17.455c-11.875 0-21.457-2.9-21.457-6.442S18.124 4.57 30 4.57 51.458 7.48 51.458 11 41.874 17.455 30 17.455z", "fill", "#0078d7"], ["fill", "#257ac4", "d", "M1.5,63.91v62.5h125V1.41H1.5Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1,23,23,0,0,1-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.23,58.93ZM72.89,64.15l0,5.12H56.66V115.5H45.15V69.26H28.88v-5A49.19,49.19,0,0,1,29,59.09C29.08,59,39,59,51,59L72.83,59Z"], ["viewBox", "0 0 256 263", 3, "id"], ["fill", "#222C37"], ["d", "M166.872326,131.23686 L212.781118,51.9623472 L234.965569,131.23686 L212.781118,210.493243 L166.872326,131.23686 L166.872326,131.23686 Z M144.495923,144.110517 L190.412179,223.373299 L110.445569,202.886567 L52.6751399,144.110517 L144.495923,144.110517 L144.495923,144.110517 Z M190.401515,39.0780261 L144.495923,118.352539 L52.6751399,118.352539 L110.445569,59.5732891 L190.401515,39.0780261 L190.401515,39.0780261 Z M255.940714,104.258913 L227.932619,0.0603519323 L123.392808,27.9852677 L107.918186,55.1924919 L76.5167858,54.9674802 L0,131.244325 L76.5167858,207.50304 L76.519985,207.50304 L107.907522,207.270564 L123.404539,234.477788 L227.932619,262.398438 L255.940714,158.219072 L240.035264,131.23686 L255.940714,104.258913 L255.940714,104.258913 Z"], ["fill", "#651f78", "d", "M95 2.3l30.5 12.3v98.7L94.8 125.7 45.8 77l-31 24.1L2.5 94.9V33.1l12.3-5.9 31 24.3ZM14.8 45.7V83.2l18.5-19Zm48.1 18.5L94.8 89.3V39Z"], ["viewBox", "0 0 612 612", 3, "id"], ["d", "m376 0c0 1.08 0 2.16 0 3.3 0 38.76-31.42 70.17-70.17 70.17-38.76 0-70.17-31.42-70.17-70.17l0 0c0-1.14 0-2.22 0-3.3L0 0l0 612 612 0 0-612z", "fill", "#654ff0"], ["d", "m142.16 329.81 40.56 0 27.69 147.47 0.5 0 33.28-147.47 37.94 0 30.06 149.28 0.59 0 31.56-149.28 39.78 0-51.69 216.69-40.25 0-29.81-147.47-0.78 0-31.91 147.47-41 0zm287.69 0 63.94 0 63.5 216.69-41.84 0-13.81-48.22-72.84 0-10.66 48.22-40.75 0zm24.34 53.41-17.69 79.5 55.06 0-20.31-79.5z", "fill", "#fff"], ["fill", "#96d8fa", "d", "M117.29,98.1,66.24,127V104.49L98,87,117.29,98.1Zm3.5-3.16V34.55L102.11,45.35V84.16l18.67,10.77ZM10.71,98.1l51,28.88V104.49L29.94,87Zm-3.5-3.16V34.55L25.89,45.35V84.16Zm2.19-64.3L61.76,1V22.76L28.21,41.21l-.27.15Zm109.18,0L66.24,1V22.76L99.79,41.2l.27.15,18.54-10.71Z"], ["fill", "#307bbe", "d", "M61.76,99.37,30.37,82.1V47.92L61.76,66Zm4.48,0L97.63,82.12V47.92L66.24,66ZM32.5,44,64,26.66,95.5,44,64,62.16,32.5,44Z"], ["viewBox", "0 0 256 228", 3, "id"], ["d", "M73.8663206,0 C66.952309,0.0146617449 60.184271,3.93931348 56.7037125,9.9265042 L2.56976851,103.963223 C-0.856589505,109.966444 -0.856589505,117.813085 2.56976851,123.816305 L56.7037125,217.853023 C60.1846366,223.840262 66.952309,227.765965 73.8663206,227.779527 L182.133826,227.779527 C189.047838,227.764865 195.815506,223.840262 199.296431,217.853023 L253.430366,123.816305 C256.856721,117.813085 256.856368,109.966444 253.430366,103.963223 L199.296431,9.9265042 C195.815506,3.93931348 189.047838,0.0135621543 182.133826,0 L73.8663206,0 L73.8663206,0 Z M74.8488536,55.0126186 C74.9975819,54.9979569 75.1535758,54.9979569 75.3027674,55.0126186 L93.9772836,55.0126186 C94.8039203,55.0297239 95.6057607,55.5074519 96.018567,56.2249969 L127.69764,112.677374 C127.857095,112.956484 127.95984,113.267458 127.998827,113.586646 C128.037837,113.267385 128.140483,112.956386 128.300014,112.677374 L159.903262,56.2249969 C160.329167,55.4857038 161.168569,55.0053365 162.020021,55.0126186 L180.694546,55.0126186 C182.348195,55.0272804 183.586572,57.1101012 182.811656,58.5740505 L151.889065,113.889776 L182.811656,169.129724 C183.659919,170.602081 182.39107,172.781473 180.694546,172.766909 L162.020021,172.766909 C161.153689,172.759578 160.309324,172.245978 159.903262,171.478754 L128.300014,115.026377 C128.140556,114.747267 128.037813,114.436267 127.998827,114.117106 C127.959816,114.43634 127.857168,114.74739 127.69764,115.026377 L96.018567,171.478754 C95.624559,172.224278 94.8184519,172.732966 93.9772836,172.766909 L75.3027674,172.766909 C73.6062411,172.78157 72.3377353,170.602081 73.1859985,169.129724 L104.10858,113.889776 L73.1859985,58.5740505 C72.4447465,57.2383669 73.3491119,55.297716 74.8488536,55.0126186 L74.8488536,55.0126186 L74.8488536,55.0126186 Z", "fill", "#3498DB"]], template: function PortfolioTechnologySvgDefinitionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "symbol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "symbol", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "path", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "path", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "path", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "path", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "path", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "path", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "path", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "path", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "path", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "path", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "path", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "path", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "path", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "path", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "path", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "path", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "path", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "path", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "path", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "path", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "path", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "path", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "path", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "path", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "path", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "path", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "path", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "path", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "path", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "path", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "path", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "path", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "path", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "path", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "path", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](116, "path", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "path", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "path", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "path", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "path", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "path", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "path", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "path", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "path", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "path", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "path", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "path", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "path", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "path", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "path", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "path", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "path", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "path", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "path", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "path", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "path", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "path", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "path", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "path", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "path", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "path", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "path", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "path", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "path", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "path", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "path", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "path", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "path", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "path", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "path", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "path", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "path", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "path", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "path", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "path", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "path", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "path", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "path", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "path", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "path", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "path", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "path", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "path", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "path", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "path", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "path", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "path", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "path", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "path", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](180, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "path", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "path", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "path", 170);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "path", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "path", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "path", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "path", 174);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "path", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "path", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "path", 177);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "path", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "path", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "path", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "path", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "path", 182);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "path", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "path", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "path", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "path", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](200, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "path", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "path", 190);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "path", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "path", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "path", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "path", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "path", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](209, "path", 196);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](210, "path", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "path", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](212, "path", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "path", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](214, "path", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "path", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "path", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](217, "path", 204);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "path", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "path", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](220, "path", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](221, "path", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "path", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "path", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "path", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](225, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "path", 213);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "path", 214);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "path", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "path", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "path", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "path", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "path", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "path", 220);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](234, "path", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "path", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](236, "path", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "path", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "path", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "path", 226);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "path", 227);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "path", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "path", 229);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "path", 230);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](244, "path", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "path", 233);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](247, "path", 234);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](248, "path", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "path", 236);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](250, "path", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "path", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "path", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "path", 240);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](254, "path", 241);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "path", 242);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "path", 243);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "path", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "path", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "path", 246);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "path", 247);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "path", 248);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "path", 249);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "path", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "path", 252);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "path", 253);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "path", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](269, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "path", 257);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "path", 258);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "path", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "path", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "path", 261);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "path", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "path", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "path", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](278, "path", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](279, "path", 266);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "path", 267);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](281, "path", 268);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "path", 269);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "path", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "path", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](285, "path", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "path", 273);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "path", 274);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "path", 275);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](289, "path", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "path", 277);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "path", 278);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "path", 281);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "path", 282);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](297, "path", 284);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](298, "path", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "path", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "path", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](301, "path", 288);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "path", 289);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "path", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](304, "path", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](305, "path", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](306, "path", 293);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "path", 294);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](308, "path", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](309, "path", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](310, "path", 297);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "path", 298);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "path", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "path", 300);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](314, "path", 301);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "path", 302);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "path", 303);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](317, "path", 304);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "path", 305);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](319, "path", 306);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "path", 307);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](321, "path", 308);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "path", 309);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](323, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "path", 311);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](325, "path", 312);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "path", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](327, "path", 314);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "path", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "path", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "path", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](331, "path", 318);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](332, "path", 319);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "path", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "path", 321);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "path", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](336, "path", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](337, "path", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](338, "path", 325);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](339, "path", 326);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "path", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "path", 328);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](342, "path", 329);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "path", 330);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](344, "path", 331);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "path", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "path", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](347, "path", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](348, "path", 335);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "path", 336);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "path", 337);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](351, "path", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](352, "path", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "path", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](354, "path", 341);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "path", 342);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](356, "path", 343);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "path", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](358, "path", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](359, "path", 346);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](360, "path", 347);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "path", 348);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "path", 349);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "path", 350);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](364, "path", 351);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "path", 352);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "path", 353);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](367, "path", 354);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "path", 355);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "path", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](370, "path", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](371, "path", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](372, "path", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "path", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "path", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "path", 362);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](376, "path", 363);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "path", 364);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](378, "path", 365);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "path", 366);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](380, "path", 367);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](381, "path", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "path", 369);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "path", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "path", 371);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](385, "path", 372);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](386, "path", 373);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](387, "path", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](388, "path", 375);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "path", 376);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](390, "path", 377);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](391, "path", 378);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](392, "path", 379);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](393, "path", 380);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](394, "path", 381);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](395, "path", 382);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](396, "path", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](397, "path", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](398, "path", 385);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](399, "path", 386);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](400, "path", 387);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](401, "path", 388);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](402, "path", 389);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "path", 390);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](404, "path", 391);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "path", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](406, "path", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](407, "path", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "path", 395);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "path", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](410, "path", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "path", 398);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "path", 399);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](413, "path", 400);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "path", 401);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "path", 402);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](416, "path", 403);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](417, "path", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](418, "path", 405);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](419, "path", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](420, "path", 407);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](421, "path", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](422, "path", 409);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](423, "path", 410);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](424, "path", 411);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](425, "path", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "path", 413);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](427, "path", 414);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](428, "path", 415);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](429, "path", 416);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "path", 417);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](431, "path", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "path", 419);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](433, "path", 420);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "path", 421);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](435, "path", 422);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "path", 423);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](437, "path", 424);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "path", 425);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](439, "path", 426);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](440, "path", 427);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](441, "path", 428);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](442, "path", 429);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "path", 430);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "path", 431);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](445, "path", 432);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](446, "path", 433);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](447, "path", 434);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](448, "path", 435);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](449, "path", 436);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](450, "path", 437);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](451, "path", 438);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](452, "path", 439);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](453, "path", 440);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](454, "path", 441);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](455, "path", 442);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](456, "path", 443);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](457, "path", 444);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](458, "path", 445);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](459, "path", 446);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "path", 447);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](461, "path", 448);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](462, "path", 449);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](463, "path", 450);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "path", 451);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "path", 452);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](466, "path", 453);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](467, "path", 454);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "path", 455);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](469, "path", 456);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](470, "path", 457);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](471, "path", 458);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](472, "path", 459);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](473, "path", 460);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "path", 461);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "path", 462);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](476, "path", 463);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](477, "path", 464);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](478, "path", 465);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](479, "path", 466);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](480, "path", 467);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](481, "path", 468);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](482, "path", 469);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](483, "path", 470);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](484, "path", 471);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](485, "path", 472);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](486, "path", 473);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](487, "path", 474);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](488, "path", 475);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "path", 476);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](490, "path", 477);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](491, "path", 478);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](492, "path", 479);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](493, "path", 480);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](494, "path", 481);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](495, "path", 482);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](496, "path", 483);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](497, "path", 484);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](498, "path", 485);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](499, "path", 486);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](500, "path", 487);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](501, "path", 488);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](502, "path", 489);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](503, "path", 490);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](504, "path", 491);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](505, "path", 492);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](506, "path", 493);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](507, "path", 494);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](508, "path", 495);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](509, "path", 496);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](510, "path", 497);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](511, "path", 498);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](512, "path", 499);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](513, "path", 500);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](514, "path", 501);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](515, "path", 502);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](516, "path", 503);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](517, "path", 504);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](518, "path", 505);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](519, "path", 506);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](520, "path", 507);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](521, "path", 508);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](522, "path", 509);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](523, "path", 510);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](524, "path", 511);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](525, "path", 512);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](526, "path", 513);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](527, "path", 514);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](528, "path", 515);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](529, "path", 516);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](530, "path", 517);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](531, "path", 518);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](532, "path", 519);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](533, "path", 520);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](534, "path", 521);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](535, "path", 522);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](536, "path", 523);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](537, "path", 524);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](538, "path", 525);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](539, "path", 526);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](540, "path", 527);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](541, "path", 528);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](542, "path", 529);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](543, "path", 530);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "path", 531);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](545, "path", 532);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](546, "path", 533);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](547, "path", 534);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](548, "path", 535);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](549, "path", 536);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](550, "path", 537);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](551, "path", 538);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](552, "path", 539);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](553, "path", 540);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "path", 541);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](555, "path", 542);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](556, "path", 543);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](557, "path", 544);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](558, "path", 545);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](559, "path", 546);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](560, "path", 547);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "path", 548);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](562, "path", 549);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](563, "path", 550);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](564, "path", 551);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](565, "path", 552);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](566, "path", 553);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](567, "path", 554);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](568, "path", 555);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](569, "path", 556);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](570, "path", 557);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](571, "path", 558);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](572, "path", 559);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "path", 560);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](574, "path", 561);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](575, "path", 562);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](576, "path", 563);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](577, "path", 564);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](578, "path", 565);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](579, "path", 566);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](580, "path", 567);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](581, "path", 568);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "path", 569);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](583, "path", 570);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](584, "path", 571);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](585, "path", 572);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](586, "path", 573);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](587, "path", 574);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](588, "path", 575);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](589, "path", 576);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](590, "path", 577);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](591, "path", 578);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](592, "path", 579);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](593, "path", 580);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](594, "path", 581);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](595, "path", 582);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](596, "path", 583);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](597, "path", 584);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](598, "path", 585);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](599, "path", 586);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](600, "path", 587);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](601, "path", 588);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](602, "path", 589);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](603, "path", 590);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](604, "path", 591);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](605, "path", 592);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](606, "path", 593);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](607, "path", 594);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](608, "path", 595);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](609, "path", 596);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](610, "path", 597);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](611, "path", 598);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](612, "path", 599);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](613, "path", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](614, "path", 601);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](615, "path", 602);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](616, "path", 603);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](617, "path", 604);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](618, "path", 605);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](619, "path", 606);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](620, "path", 607);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](621, "path", 608);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](622, "path", 609);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](623, "path", 610);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](624, "path", 611);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](625, "path", 612);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](626, "path", 613);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](627, "path", 614);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](628, "path", 615);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](629, "path", 616);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](630, "path", 617);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](631, "path", 618);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](632, "path", 619);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](633, "path", 620);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](634, "path", 621);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](635, "path", 622);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](636, "path", 623);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](637, "path", 624);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](638, "path", 625);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](639, "path", 626);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](640, "path", 627);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](641, "path", 628);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](642, "path", 629);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](643, "path", 630);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](644, "path", 631);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](645, "path", 632);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](646, "path", 633);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](647, "path", 634);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](648, "path", 635);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](649, "path", 636);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](650, "path", 637);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](651, "path", 638);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](652, "path", 639);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](653, "path", 640);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](654, "path", 641);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](655, "path", 642);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](656, "path", 643);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](657, "path", 644);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](658, "path", 645);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](659, "path", 646);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](660, "path", 647);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](661, "path", 648);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](662, "path", 649);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](663, "path", 650);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](664, "path", 651);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](665, "path", 652);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](666, "path", 653);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](667, "path", 654);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](668, "path", 655);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](669, "path", 656);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](670, "path", 657);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](671, "path", 658);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](672, "path", 659);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](673, "path", 660);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](674, "path", 661);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](675, "path", 662);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](676, "path", 663);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](677, "path", 664);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](678, "path", 665);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](679, "path", 666);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](680, "path", 667);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](681, "path", 668);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](682, "path", 669);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](683, "path", 670);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](684, "path", 671);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](685, "path", 672);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](686, "path", 673);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](687, "path", 674);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](688, "path", 675);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](689, "path", 676);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](690, "path", 677);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](691, "path", 678);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](692, "path", 679);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](693, "path", 680);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](694, "path", 681);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](695, "path", 682);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](696, "path", 683);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](697, "path", 684);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](698, "path", 685);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](699, "path", 686);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](700, "path", 687);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](701, "path", 688);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](702, "path", 689);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](703, "path", 690);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](704, "path", 691);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](705, "path", 692);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](706, "path", 693);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](707, "path", 694);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](708, "path", 695);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](709, "path", 696);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](710, "path", 697);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](711, "path", 698);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](712, "path", 699);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](713, "path", 700);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](714, "path", 701);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](715, "path", 702);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](716, "path", 703);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](717, "path", 704);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](718, "path", 705);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](719, "path", 706);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](720, "path", 707);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](721, "path", 708);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](722, "path", 709);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](723, "path", 710);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](724, "path", 711);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](725, "path", 712);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](726, "path", 713);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](727, "path", 714);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](728, "path", 715);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](729, "path", 716);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](730, "path", 717);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](731, "path", 718);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](732, "path", 719);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](733, "path", 720);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](734, "path", 721);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](735, "path", 722);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](736, "path", 723);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](737, "path", 724);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](738, "path", 725);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](739, "path", 726);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](740, "path", 727);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](741, "path", 728);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](742, "path", 729);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](743, "path", 730);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](744, "path", 731);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](745, "path", 732);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](746, "path", 733);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](747, "path", 734);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](748, "path", 735);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](749, "path", 736);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](750, "path", 737);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](751, "path", 738);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](752, "path", 739);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](753, "path", 740);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](754, "path", 741);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](755, "path", 742);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](756, "path", 743);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](757, "path", 744);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](758, "path", 745);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](759, "path", 746);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](760, "path", 747);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](761, "path", 748);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](762, "path", 749);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](763, "path", 750);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](764, "path", 751);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](765, "path", 752);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](766, "path", 753);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](767, "path", 754);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](768, "path", 755);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](769, "path", 756);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](770, "path", 757);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](771, "path", 758);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](772, "path", 759);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](773, "path", 760);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](774, "path", 761);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](775, "symbol", 762);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](776, "path", 763);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](777, "symbol", 764);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](778, "g", 765);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](779, "g", 766);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](780, "path", 767);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](781, "g", 768);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](782, "path", 769);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](783, "g", 770);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](784, "g", 771);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](785, "g", 772);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](786, "path", 773);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](787, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](788, "path", 774);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](789, "path", 775);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](790, "path", 776);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](791, "path", 777);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](792, "path", 778);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](793, "path", 779);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](794, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](795, "path", 780);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](796, "path", 781);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](797, "symbol", 782);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](798, "path", 783);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](799, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](800, "path", 784);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](801, "symbol", 785);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](802, "path", 786);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](803, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](804, "path", 787);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](805, "symbol", 788);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](806, "g", 789);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](807, "path", 790);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](808, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](809, "path", 791);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](810, "symbol", 792);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](811, "path", 793);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](812, "path", 794);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](813, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](814, "path", 795);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](815, "path", 796);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](816, "symbol", 797);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](817, "path", 798);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.ANGULAR);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.BOOTSTRAP);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.C_PLUS_PLUS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.C_SHARP);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.CSS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.DOTNET);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.EXPRESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.GIT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.GITHUB);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.HTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.JAVASCRIPT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.JEST);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.JQUERY);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.LINUX);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](713);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.NATIVESCRIPT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.NGRX);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.NODE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.PYTHON);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.RUST);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.SASS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.SQL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.TYPESCRIPT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.UNITY);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.VISUAL_STUDIO);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.WASM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.WEBPACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.XAMARIN);
    } }, styles: [".tech-svg-defs[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 0;\n  width: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby10ZWNobm9sb2d5LXN2Zy1kZWZpbml0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBQUQiLCJmaWxlIjoicG9ydGZvbGlvLXRlY2hub2xvZ3ktc3ZnLWRlZmluaXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBwcmV2ZW50cyB0aGUgZGVmaW5pdGlvbnMgY29tcG9uZW50IGZyb20gaW1wYWN0aW5nIGxheW91dC5cbi50ZWNoLXN2Zy1kZWZzIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRoZWlnaHQ6IDA7XG5cdHdpZHRoOiAwO1xuXHR6LWluZGV4OiAtMTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Hs/C":
/*!******************************************************************!*\
  !*** ./src/app/navigation-layout/navigation-layout.component.ts ***!
  \******************************************************************/
/*! exports provided: NavigationLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationLayoutComponent", function() { return NavigationLayoutComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio/portfolio-main/portfolio-main.component */ "v/TW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");


//import { PGP_URL } from 'src/app/pgp/pgp.component';




const _c0 = ["mdlLayout"];
function NavigationLayoutComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavigationLayoutComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.toggleDrawer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", link_r2.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](link_r2.name);
} }
const _c1 = function (a0) { return { "mdl-layout--fixed-header": a0 }; };
const _c2 = ["*"];
class NavigationLayoutComponent {
    constructor() {
        this.title = 'Sean Meek';
        this.links = [
            { name: 'About', target: src_app_portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_2__["PORTFOLIO_URL"] },
        ];
    }
    ngOnInit() {
        const isSmallScreen = () => document.body.offsetWidth < 1024;
        const screenSizeChanged$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(isSmallScreen));
        this.viewInMobile$ = screenSizeChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(isSmallScreen()));
    }
    toggleDrawer() {
        this.mdlLayout.nativeElement.MaterialLayout.toggleDrawer();
    }
}
NavigationLayoutComponent.ɵfac = function NavigationLayoutComponent_Factory(t) { return new (t || NavigationLayoutComponent)(); };
NavigationLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavigationLayoutComponent, selectors: [["sm-navigation-layout"]], viewQuery: function NavigationLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mdlLayout = _t.first);
    } }, ngContentSelectors: _c2, decls: 14, vars: 7, consts: [[1, "mdl-layout", "mdl-js-layout", 3, "ngClass"], ["mdlLayout", ""], [1, "mdl-layout__header"], [1, "mdl-layout__header-row", "header-row"], [1, "mdl-layout-spacer"], [1, "mdl-navigation", "mdl-layout--large-screen-only"], [1, "mdl-layout__drawer"], [1, "mdl-layout-title"], [1, "mdl-navigation"], ["class", "mdl-navigation__link", 3, "routerLink", "click", 4, "ngFor", "ngForOf"], [1, "mdl-layout__content"], [1, "mdl-navigation__link", 3, "routerLink", "click"]], template: function NavigationLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, NavigationLayoutComponent_a_11_Template, 2, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, ctx.viewInMobile$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".mdl-layout__header[_ngcontent-%COMP%] {\n  box-shadow: initial;\n  min-height: 3rem;\n}\n\n.mdl-layout__header-row[_ngcontent-%COMP%] {\n  height: 3rem;\n}\n\n.mdl-layout__drawer[_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n\n  .mdl-layout__drawer-button {\n  height: 2rem;\n  width: 2rem;\n  margin: 0.5rem 1rem;\n}\n\n  .mdl-layout__drawer-button i {\n  height: 2rem;\n  width: 2rem;\n  line-height: 2rem;\n  display: block;\n}\n\n.header-row[_ngcontent-%COMP%] {\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.sub-header-row[_ngcontent-%COMP%] {\n  height: 3.5rem;\n}\n\n.mdl-navigation__link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.89) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmlnYXRpb24tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQUREOztBQUlBO0VBQ0MsWUFBQTtBQUREOztBQUlBO0VBQ0MsZ0JBQUE7QUFERDs7QUFJQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFERDs7QUFHQztFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBS0E7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBRkQ7O0FBS0E7RUFDQyxjQUFBO0FBRkQ7O0FBS0E7RUFDQyxxQ0FBQTtBQUZEIiwiZmlsZSI6Im5hdmlnYXRpb24tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLm1kbC1sYXlvdXRfX2hlYWRlciB7XG5cdGJveC1zaGFkb3c6IGluaXRpYWw7XG5cdG1pbi1oZWlnaHQ6IDNyZW07XG59XG5cbi5tZGwtbGF5b3V0X19oZWFkZXItcm93IHtcblx0aGVpZ2h0OiAzcmVtO1xufVxuXG4ubWRsLWxheW91dF9fZHJhd2VyIHtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpuZy1kZWVwIC5tZGwtbGF5b3V0X19kcmF3ZXItYnV0dG9uIHtcblx0aGVpZ2h0OiAycmVtO1xuXHR3aWR0aDogMnJlbTtcblx0bWFyZ2luOiAwLjVyZW0gMXJlbTtcblxuXHRpIHtcblx0XHRoZWlnaHQ6IDJyZW07XG5cdFx0d2lkdGg6IDJyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDJyZW07XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cbn1cblxuLmhlYWRlci1yb3cge1xuXHRwYWRkaW5nLWxlZnQ6IDQwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5zdWItaGVhZGVyLXJvdyB7XG5cdGhlaWdodDogMy41cmVtO1xufVxuXG4ubWRsLW5hdmlnYXRpb25fX2xpbmsge1xuXHRjb2xvcjogJHRleHQtY29sb3IgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "M3U8":
/*!*******************************************************!*\
  !*** ./src/app/shared/svg-icon/svg-icon.component.ts ***!
  \*******************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SvgIconComponent {
    constructor() { }
    get absUrl() {
        return window.location.href;
    }
}
SvgIconComponent.ɵfac = function SvgIconComponent_Factory(t) { return new (t || SvgIconComponent)(); };
SvgIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgIconComponent, selectors: [["sm-shared-svg-icon"]], inputs: { id: "id" }, decls: 2, vars: 1, template: function SvgIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", ctx.absUrl + "#" + ctx.id, null, "xlink");
    } }, encapsulation: 2 });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ctrl_ngx_numbered_codeblock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ctrl/ngx-numbered-codeblock */ "8D2E");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "wZee");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_code_block_code_block_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/code-block/code-block.component */ "7DxU");
/* harmony import */ var src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/svg-icon/svg-icon.component */ "M3U8");
/* harmony import */ var src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/toast-message.service */ "YwD0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_5__["ToastMessageService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _ctrl_ngx_numbered_codeblock__WEBPACK_IMPORTED_MODULE_1__["NumberedCodeblockModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__["SvgIconComponent"],
        src_app_shared_code_block_code_block_component__WEBPACK_IMPORTED_MODULE_3__["CodeBlockComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _ctrl_ngx_numbered_codeblock__WEBPACK_IMPORTED_MODULE_1__["NumberedCodeblockModule"]], exports: [src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__["SvgIconComponent"],
        src_app_shared_code_block_code_block_component__WEBPACK_IMPORTED_MODULE_3__["CodeBlockComponent"]] }); })();


/***/ }),

/***/ "SBjt":
/*!*************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-technology-svg-definitions/technology-svg-id.ts ***!
  \*************************************************************************************/
/*! exports provided: TechnologySvgId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologySvgId", function() { return TechnologySvgId; });
var TechnologySvgId;
(function (TechnologySvgId) {
    TechnologySvgId["ANGULAR"] = "tech_angular";
    TechnologySvgId["BOOTSTRAP"] = "tech_bootstrap";
    TechnologySvgId["C_PLUS_PLUS"] = "tech_cplusplus_lang";
    TechnologySvgId["C_SHARP"] = "tech_csharp_lang";
    TechnologySvgId["CSS"] = "tech_css";
    TechnologySvgId["DOTNET"] = "tech_dotnet";
    TechnologySvgId["EXPRESS"] = "tech_express";
    TechnologySvgId["GIT"] = "tech_git";
    TechnologySvgId["GITHUB"] = "tech_github";
    TechnologySvgId["HTML"] = "tech_html";
    TechnologySvgId["JEST"] = "tech_jest";
    TechnologySvgId["JAVASCRIPT"] = "tech_javascript_lang";
    TechnologySvgId["JQUERY"] = "tech_jquery";
    TechnologySvgId["LINUX"] = "tech_linux";
    TechnologySvgId["NATIVESCRIPT"] = "tech_nativescript";
    TechnologySvgId["NGRX"] = "tech_ngrx";
    TechnologySvgId["NODE"] = "tech_node";
    TechnologySvgId["PYTHON"] = "tech_python_lang";
    TechnologySvgId["RUST"] = "tech_rust_lang";
    TechnologySvgId["SASS"] = "tech_sass";
    TechnologySvgId["SQL"] = "tech_sql";
    TechnologySvgId["TYPESCRIPT"] = "tech_typescript_lang";
    TechnologySvgId["UNITY"] = "tech_unity";
    TechnologySvgId["VISUAL_STUDIO"] = "tech_visual_studio";
    TechnologySvgId["WASM"] = "tech_web_assembly";
    TechnologySvgId["WEBPACK"] = "tech_webpack";
    TechnologySvgId["XAMARIN"] = "tech_xamarin";
})(TechnologySvgId || (TechnologySvgId = {}));


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/toast-message.service */ "YwD0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/navigation-layout/navigation-layout.component */ "Hs/C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/footer/footer.component */ "fp1T");








class AppComponent {
    constructor(_titleService, _toastMessageService) {
        this._titleService = _titleService;
        this._toastMessageService = _toastMessageService;
        this.snackbarActionText = 'OK';
        this._appPageTitle = 'Sean Meek - Software Engineer';
    }
    ngOnInit() {
        this._titleService.setTitle(this._appPageTitle);
        this._toastMessageSubscription = this._toastMessageService.message$.subscribe(message => this.showToastMessage(message));
    }
    ngOnDestroy() {
        if (this._toastMessageSubscription) {
            this._toastMessageSubscription.unsubscribe();
            this._toastMessageSubscription = undefined;
        }
    }
    showToastMessage(message) {
        if (!message) {
            return;
        }
        if (!this.snackbarContainer) {
            this.snackbarContainer = document.querySelector('#sm-snackbar');
        }
        const data = {
            message,
            timeout: 875,
            actionHandler: () => { },
            actionText: this.snackbarActionText
        };
        this.snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_1__["ToastMessageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["sm-app-root"]], decls: 8, vars: 0, consts: [[1, "main-content-container"], [1, "main-content"], ["id", "sm-snackbar", 1, "mdl-js-snackbar", "mdl-snackbar"], [1, "mdl-snackbar__text"], ["type", "button", 1, "mdl-snackbar__action"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "sm-navigation-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "sm-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [src_app_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_3__["NavigationLayoutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".main-content-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  max-width: 56rem;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 1rem;\n  margin-bottom: 2rem;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: table-cell;\n  width: 100%;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n#sm-snackbar[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-family: \"lato-light\", Lato, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n#sm-snackbar[_ngcontent-%COMP%]   .mdl-snackbar__text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#sm-snackbar[_ngcontent-%COMP%]   .mdl-snackbar__action[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO01BQUEsbUJBQUE7RUFDQSxxQkFBQTtNQUFBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUREOztBQUlBO0VBQ0MsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUREOztBQUlBO0VBQ0MsWUFBQTtFQUNBLCtFQ2J3QjtBRFl6Qjs7QUFHQztFQUNDLFVBQUE7QUFERjs7QUFJQztFQUNDLFVBQUE7QUFGRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4ubWFpbi1jb250ZW50LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDU2cmVtO1xuXHRtYXJnaW4tbGVmdDogYXV0bztcblx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRtYXJnaW4tdG9wOiAxcmVtO1xuXHRtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWFpbi1jb250ZW50IHtcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1sZWZ0OiAxcmVtO1xuXHRtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbiNzbS1zbmFja2JhciB7XG5cdG9wYWNpdHk6IDAuODtcblx0Zm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xuXG5cdC5tZGwtc25hY2tiYXJfX3RleHQge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblxuXHQubWRsLXNuYWNrYmFyX19hY3Rpb24ge1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbn1cbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuJGJhY2tncm91bmQtY29sb3ItYWx0OiAjZjJmMmYyO1xuJHRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44OSk7XG4kdGV4dC1jb2xvci1saWdodDogcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiR0ZXh0LWNvbG9yLWFsdDogcmdiYSgzMSwgMTEsIDExLCAwLjg5KTtcbiR0ZXh0LWNvbG9yLWFsdC1saWdodDogcmdiYSgzMSwgMTEsIDExLCAwLjA4KTtcbiRoaWdobGlnaHQ6ICNmZmIxYjE7XG4kaGlnaGxpZ2h0LWFsdDogIzdjYmRkNjtcbiRzb2NpYWwtbWVkaWEtaWNvbi1iYWNrZ3JvdW5kOiAjZDhkOWQ4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwibGF0by1saWdodFwiLCBMYXRvLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsXG5cdHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBcImZpcmEtcmVnXCIsIG1vbm9zcGFjZTtcbiRib3JkZXItcmFkaXVzOiAxcHg7XG4iXX0= */"] });


/***/ }),

/***/ "YwD0":
/*!******************************************!*\
  !*** ./src/app/toast-message.service.ts ***!
  \******************************************/
/*! exports provided: ToastMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastMessageService", function() { return ToastMessageService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToastMessageService {
    constructor() {
        this._message = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.message$ = this._message.asObservable();
    }
    toastMessage(message) {
        if (!message) {
            return;
        }
        this._message.next(message);
    }
}
ToastMessageService.ɵfac = function ToastMessageService_Factory(t) { return new (t || ToastMessageService)(); };
ToastMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastMessageService, factory: ToastMessageService.ɵfac });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-routing.module */ "vY5A");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/footer/footer.component */ "fp1T");
/* harmony import */ var src_app_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/navigation-layout/navigation-layout.component */ "Hs/C");
/* harmony import */ var src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/not-found/not-found.component */ "nod/");
/* harmony import */ var src_app_pgp_pgp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pgp/pgp.component */ "u1/E");
/* harmony import */ var src_app_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/portfolio/portfolio.module */ "9enj");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");
/* harmony import */ var src_app_social_media_svg_definitions_social_media_svg_definitions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/social-media-svg-definitions/social-media-svg-definitions.component */ "ba67");
/* harmony import */ var src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/toast-message.service */ "YwD0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [src_app_toast_message_service__WEBPACK_IMPORTED_MODULE_11__["ToastMessageService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            src_app_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        src_app_navigation_layout_navigation_layout_component__WEBPACK_IMPORTED_MODULE_5__["NavigationLayoutComponent"],
        src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
        src_app_pgp_pgp_component__WEBPACK_IMPORTED_MODULE_7__["PgpComponent"],
        src_app_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        src_app_social_media_svg_definitions_social_media_svg_definitions_component__WEBPACK_IMPORTED_MODULE_10__["SocialMediaSvgDefinitionsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        src_app_portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]] }); })();


/***/ }),

/***/ "b4QN":
/*!****************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-contact/portfolio-contact.component.ts ***!
  \****************************************************************************/
/*! exports provided: PortfolioContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioContactComponent", function() { return PortfolioContactComponent; });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-constants */ "EKKv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PortfolioContactComponent {
    constructor() {
        this.twitterUrl = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstants"].TWITTER_URL;
        this.emailAddress = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstants"].EMAIL;
        this.emailSubject = 'Hey, Sean!';
        this.emailBody = '';
    }
    get mailToLink() {
        return `mailto:${this.emailAddress}?subject=${this.emailSubject}&body=${this.emailBody}`;
    }
}
PortfolioContactComponent.ɵfac = function PortfolioContactComponent_Factory(t) { return new (t || PortfolioContactComponent)(); };
PortfolioContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioContactComponent, selectors: [["sm-portfolio-contact"]], decls: 9, vars: 2, consts: [[2, "display", "flex", "justify-content", "center"], [1, "sm-text-link", 3, "href"]], template: function PortfolioContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "I'd love to hear from you. Reach out via ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.twitterUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.mailToLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8tY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "ba67":
/*!****************************************************************************************!*\
  !*** ./src/app/social-media-svg-definitions/social-media-svg-definitions.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SocialMediaSvgDefinitionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialMediaSvgDefinitionsComponent", function() { return SocialMediaSvgDefinitionsComponent; });
/* harmony import */ var _social_media_svg_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-media-svg-id */ "5QQN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SocialMediaSvgDefinitionsComponent {
    constructor() {
        this.ID = _social_media_svg_id__WEBPACK_IMPORTED_MODULE_0__["SocialMediaSvgId"];
    }
}
SocialMediaSvgDefinitionsComponent.ɵfac = function SocialMediaSvgDefinitionsComponent_Factory(t) { return new (t || SocialMediaSvgDefinitionsComponent)(); };
SocialMediaSvgDefinitionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SocialMediaSvgDefinitionsComponent, selectors: [["sm-social-media-svg-definitions"]], decls: 9, vars: 3, consts: [[1, "social-media-svg-defs"], ["viewBox", "0 0 67 67", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 67 67", 3, "id"], ["d", "M21.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.513c-0.654,0.488-1.44,1.415-1.549,2.486c-0.823,0.522-2.478,0.695-3.764,0.297  c-1.803-0.56-2.493-4.067-5.192-3.567c-0.584,0.108-0.468,0.486,0.037,0.809c0.823,0.522,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.982,4.473,2.982c1.21,0,2.058-0.144,2.058-0.144s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.232,0.557,0.255,1.004,0.255c0.884,0,2.723-0.726,2.723-1.998c0-1.011,0.017-4.411,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.941-0.169,7.872c-0.302,1.094-0.847,0.938-0.847,1.427c0,0.726,2.214,0.178,2.948-1.416c0.567-1.24,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.122,3.342,0.77,4.222c0.586,0.578,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.12  c0.645,0.222,2.025,0.281,2.09-0.091c0.065-0.373-1.662-0.927-1.678-2.085c-0.01-0.706,0.032-1.118,0.032-4.186  c0-3.068-0.419-4.202-1.88-5.105c4.508-0.456,7.299-1.552,8.658-4.487c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.972c-0.008-4.209-2.058-5.698-2.451-6.397c0.58-3.187-0.098-4.638-0.412-5.135  c-1.162-0.406-4.041,1.044-5.615,2.066c-2.564-0.736-7.986-0.666-10.019,0.19c-3.751-2.64-5.736-2.235-5.736-2.235  s-1.283,2.26-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C20.906,31.83,21.102,33.292,21.543,34.568z M33.5,1l28.146,16.25  v32.5L33.5,66L5.354,49.75v-32.5L33.5,1z"], ["d", "M50.837,46.137V34.425c0-6.274-3.35-9.194-7.816-9.194  c-3.604,0-5.219,1.982-6.119,3.373V25.71h-6.79c0.09,1.917,0,20.428,0,20.428h6.79V34.729c0-0.61,0.044-1.22,0.224-1.657  c0.49-1.219,1.607-2.482,3.482-2.482c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,22.922c2.367,0,3.842-1.569,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.525-3.841,3.528c0,1.962,1.474,3.531,3.753,3.531H22.959z M26.354,46.137V25.71  h-6.789v20.427H26.354z M33.5,1l28.146,16.25v32.5L33.5,66L5.354,49.75v-32.5L33.5,1z"], ["d", "M37.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.102  l0.063,1.038l-1.048-0.128c-3.813-0.486-7.145-2.14-9.974-4.914l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.66,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.17-0.943-0.297-0.985-0.233c-0.146,0.148,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.098,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.466  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.975-3.646,1.525-5.616,1.568  C19.775,43.256,19,43.341,19,43.404c0,0.212,2.557,1.398,4.044,1.864c4.463,1.377,9.765,0.784,13.746-1.567  c2.829-1.674,5.657-5,6.978-8.22c0.713-1.716,1.425-4.852,1.425-6.355c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.679,1.341-1.42,1.467-1.632c0.21-0.402,0.188-0.402-0.88-0.042c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.268c0-0.063-0.314,0.043-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.721l-1.131,0.36  l-1.027-0.699c-0.566-0.382-1.361-0.806-1.781-0.933C39.766,21.901,38.131,21.944,37.167,22.283z M33.5,1l28.146,16.25v32.5L33.5,66  L5.354,49.75v-32.5L33.5,1z"]], template: function SocialMediaSvgDefinitionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.GITHUB);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.LINKEDIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.ID.TWITTER);
    } }, styles: [".social-media-svg-defs[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 0;\n  width: 0;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvY2lhbC1tZWRpYS1zdmctZGVmaW5pdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUFEIiwiZmlsZSI6InNvY2lhbC1tZWRpYS1zdmctZGVmaW5pdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIHByZXZlbnRzIHRoZSBkZWZpbml0aW9ucyBjb21wb25lbnQgZnJvbSBpbXBhY3RpbmcgbGF5b3V0LlxuLnNvY2lhbC1tZWRpYS1zdmctZGVmcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0aGVpZ2h0OiAwO1xuXHR3aWR0aDogMDtcblx0ei1pbmRleDogLTE7XG59XG4iXX0= */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-constants */ "EKKv");
/* harmony import */ var src_app_social_media_svg_definitions_social_media_svg_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/social-media-svg-definitions/social-media-svg-id */ "5QQN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_social_media_svg_definitions_social_media_svg_definitions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/social-media-svg-definitions/social-media-svg-definitions.component */ "ba67");
/* harmony import */ var src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/svg-icon/svg-icon.component */ "M3U8");





class FooterComponent {
    constructor() {
        this.SOCIAL_MEDIA_SVG_ID = src_app_social_media_svg_definitions_social_media_svg_id__WEBPACK_IMPORTED_MODULE_1__["SocialMediaSvgId"];
        this.currentYear = (new Date()).getFullYear();
        this.gitHubUrl = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstants"].GITHUB_URL;
        this.linkedInUrl = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstants"].LINKEDIN_URL;
        this.twitterUrl = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__["AppConstants"].TWITTER_URL;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["sm-footer"]], decls: 17, vars: 7, consts: [[1, "mdl-mini-footer", "sm-mini-footer"], [1, "mdl-mini-footer__left-section"], ["target", "_blank", 1, "sm-social-media-link", 3, "href"], [3, "id"], [1, "mdl-layout-spacer"], [1, "mdl-mini-footer__middle-section"], [1, "mdl-mini-footer__right-section"], [1, "mdl-logo"], ["href", "https://seanmeek.com", 1, "sm-text-link", "sm-change-text-color", "sm-inline-link"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "sm-social-media-svg-definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "sm-shared-svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "sm-shared-svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "sm-shared-svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Sean Meek");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.gitHubUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.SOCIAL_MEDIA_SVG_ID.GITHUB);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.linkedInUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.SOCIAL_MEDIA_SVG_ID.LINKEDIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.twitterUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.SOCIAL_MEDIA_SVG_ID.TWITTER);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.currentYear, " ");
    } }, directives: [src_app_social_media_svg_definitions_social_media_svg_definitions_component__WEBPACK_IMPORTED_MODULE_3__["SocialMediaSvgDefinitionsComponent"], src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__["SvgIconComponent"]], styles: [".sm-mini-footer {\n  padding: 0.5rem 1rem;\n  margin: 0;\n  height: 2.5rem;\n}\n\n.mdl-mini-footer__right-section {\n  height: 100%;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n}\n\na.sm-inline-link {\n  color: white;\n  font-weight: 400;\n  font-size: 1rem;\n  height: 2rem;\n}\n\na.sm-inline-link::after {\n  margin-top: -0.4rem;\n}\n\n.sm-social-media-link {\n  display: inline-block;\n  height: 2.5rem;\n  width: 2.5rem;\n  margin-left: 0.2rem;\n  margin-right: 0.2rem;\n}\n\n.sm-social-media-link svg {\n  fill: #d8d9d8;\n}\n\n.sm-social-media-link svg:hover {\n  fill: #ffb1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFERDs7QUFJQTtFQUNDLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxzQkFBQTtNQUFBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUREOztBQUdDO0VBQ0MsbUJBQUE7QUFERjs7QUFLQTtFQUNDLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRkQ7O0FBSUM7RUFDQyxhQ3pCNkI7QUR1Qi9COztBQUlFO0VBQ0MsYUM5QlM7QUQ0QloiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLnNtLW1pbmktZm9vdGVyIHtcblx0cGFkZGluZzogMC41cmVtIDFyZW07XG5cdG1hcmdpbjogMDtcblx0aGVpZ2h0OiAyLjVyZW07XG59XG5cbi5tZGwtbWluaS1mb290ZXJfX3JpZ2h0LXNlY3Rpb24ge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEuc20taW5saW5lLWxpbmsge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0aGVpZ2h0OiAycmVtO1xuXG5cdCY6OmFmdGVyIHtcblx0XHRtYXJnaW4tdG9wOiAtMC40cmVtO1xuXHR9XG59XG5cbi5zbS1zb2NpYWwtbWVkaWEtbGluayB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAyLjVyZW07XG5cdHdpZHRoOiAyLjVyZW07XG5cdG1hcmdpbi1sZWZ0OiAwLjJyZW07XG5cdG1hcmdpbi1yaWdodDogMC4ycmVtO1xuXG5cdHN2ZyB7XG5cdFx0ZmlsbDogJHNvY2lhbC1tZWRpYS1pY29uLWJhY2tncm91bmQ7XG5cblx0XHQmOmhvdmVyIHtcblx0XHRcdGZpbGw6ICRoaWdobGlnaHQ7XG5cdFx0fVxuXHR9XG59XG4iLCIkYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiRiYWNrZ3JvdW5kLWNvbG9yLWFsdDogI2YyZjJmMjtcbiR0ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xuJHRleHQtY29sb3ItbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4kdGV4dC1jb2xvci1hbHQ6IHJnYmEoMzEsIDExLCAxMSwgMC44OSk7XG4kdGV4dC1jb2xvci1hbHQtbGlnaHQ6IHJnYmEoMzEsIDExLCAxMSwgMC4wOCk7XG4kaGlnaGxpZ2h0OiAjZmZiMWIxO1xuJGhpZ2hsaWdodC1hbHQ6ICM3Y2JkZDY7XG4kc29jaWFsLW1lZGlhLWljb24tYmFja2dyb3VuZDogI2Q4ZDlkODtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcImxhdG8tbGlnaHRcIiwgTGF0bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxuXHRzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogXCJmaXJhLXJlZ1wiLCBtb25vc3BhY2U7XG4kYm9yZGVyLXJhZGl1czogMXB4O1xuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ "fyt+":
/*!********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-bio/portfolio-bio.component.ts ***!
  \********************************************************************/
/*! exports provided: PortfolioBioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioBioComponent", function() { return PortfolioBioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_portfolio_portfolio_portrait_card_portfolio_portrait_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio/portfolio-portrait-card/portfolio-portrait-card.component */ "mk+d");


class PortfolioBioComponent {
    constructor() {
        this.bio = `I'm a professional software engineer in the Greater Denver Area with `
            + `a passion for secure web, mobile, and server-side applications. I am `
            + `also currently seeking a Master of Science degree in the field of `
            + `Cybersecurity from The University of Denver.`;
    }
}
PortfolioBioComponent.ɵfac = function PortfolioBioComponent_Factory(t) { return new (t || PortfolioBioComponent)(); };
PortfolioBioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioBioComponent, selectors: [["sm-portfolio-bio"]], decls: 9, vars: 1, consts: [[1, "content-container"], [1, "bio-header"], [1, "center-contents"], [1, "bio-portrait-description-container"], ["imageFileName", "portrait.png", 1, "bio-portrait-description"], [1, "bio-portrait-description", "bio-description"]], template: function PortfolioBioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hey there, I'm Sean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "sm-portfolio-portrait-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bio);
    } }, directives: [src_app_portfolio_portfolio_portrait_card_portfolio_portrait_card_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioPortraitCardComponent"]], styles: [".bio-header[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.bio-portrait-description-container[_ngcontent-%COMP%] {\n  max-width: 45rem;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n}\n\n.bio-description[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  -ms-flex-align: center;\n      align-items: center;\n  max-width: 25rem;\n}\n\n@media screen and (max-width: 515px) {\n  .bio-portrait-description-container[_ngcontent-%COMP%] {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n  }\n\n  .bio-portrait-description[_ngcontent-%COMP%]:first-child {\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1iaW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEOztBQUVBO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx1QkFBQTtNQUFBLG1CQUFBO0VBQ0Esc0JBQUE7TUFBQSw4QkFBQTtFQUNBLG9CQUFBO01BQUEsWUFBQTtBQUNEOztBQUVBO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7TUFBQSxZQUFBO0VBQ0Esc0JBQUE7TUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Q7O0FBRUE7RUFDQztJQUNDLG1CQUFBO1FBQUEsZUFBQTtFQUNBOztFQUNEO0lBQ0MsNkJBQUE7UUFBQSxnQkFBQTtFQUVBO0FBQ0YiLCJmaWxlIjoicG9ydGZvbGlvLWJpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaW8taGVhZGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmlvLXBvcnRyYWl0LWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogNDVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC1ncm93OiAxO1xufVxuXG4uYmlvLWRlc2NyaXB0aW9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1ncm93OiAxO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXgtd2lkdGg6IDI1cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MTVweCkge1xuXHQuYmlvLXBvcnRyYWl0LWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHR9XG5cdC5iaW8tcG9ydHJhaXQtZGVzY3JpcHRpb246Zmlyc3QtY2hpbGQge1xuXHRcdGZsZXgtYmFzaXM6IDEwMCU7XG5cdH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "gS2R":
/*!********************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-knowledge/portfolio-knowledge.component.ts ***!
  \********************************************************************************/
/*! exports provided: PortfolioKnowledgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioKnowledgeComponent", function() { return PortfolioKnowledgeComponent; });
/* harmony import */ var src_app_portfolio_portfolio_technology_svg_definitions_technology_svg_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/portfolio/portfolio-technology-svg-definitions/technology-svg-id */ "SBjt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_portfolio_portfolio_technology_card_portfolio_technology_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio/portfolio-technology-card/portfolio-technology-card.component */ "rJuk");



class PortfolioKnowledgeComponent {
    constructor() {
        this.TECHNOLOGY_SVG_ID = src_app_portfolio_portfolio_technology_svg_definitions_technology_svg_id__WEBPACK_IMPORTED_MODULE_0__["TechnologySvgId"];
    }
}
PortfolioKnowledgeComponent.ɵfac = function PortfolioKnowledgeComponent_Factory(t) { return new (t || PortfolioKnowledgeComponent)(); };
PortfolioKnowledgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioKnowledgeComponent, selectors: [["sm-portfolio-knowledge"]], decls: 29, vars: 22, consts: [[1, "portfolio-knowledge-container"], [1, "tech-card-header"], [1, "tech-card-container"], ["name", "C#", 3, "technologySvgId"], ["name", "TYPESCRIPT", 3, "technologySvgId"], ["name", "JAVASCRIPT", 3, "technologySvgId"], ["name", "C++", 3, "technologySvgId"], ["name", "RUST", 3, "technologySvgId"], ["name", "PYTHON", 3, "technologySvgId"], ["name", "SQL", 3, "technologySvgId"], ["name", ".NET", 3, "technologySvgId"], ["name", "XAMARIN", 3, "technologySvgId"], ["name", "ANGULAR", 3, "technologySvgId"], ["name", "NGRX", 3, "technologySvgId"], ["name", "NATIVESCRIPT", 3, "technologySvgId"], ["name", "JEST", 3, "technologySvgId"], ["name", "NODE", 3, "technologySvgId"], ["name", "WEBPACK", 3, "technologySvgId"], ["name", "SASS", 3, "technologySvgId"], ["name", "CSS", 3, "technologySvgId"], ["name", "BOOTSTRAP", 3, "technologySvgId"], ["name", "WEB ASSEMBLY", 3, "technologySvgId"], ["name", "UNITY", 3, "technologySvgId"], ["name", "GIT", 3, "technologySvgId"], ["name", "GITHUB", 3, "technologySvgId"]], template: function PortfolioKnowledgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "sm-portfolio-technology-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "sm-portfolio-technology-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "sm-portfolio-technology-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "sm-portfolio-technology-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "sm-portfolio-technology-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "sm-portfolio-technology-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "sm-portfolio-technology-card", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Technologies, Frameworks, & Libraries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "sm-portfolio-technology-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "sm-portfolio-technology-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "sm-portfolio-technology-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "sm-portfolio-technology-card", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "sm-portfolio-technology-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "sm-portfolio-technology-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "sm-portfolio-technology-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "sm-portfolio-technology-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "sm-portfolio-technology-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "sm-portfolio-technology-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "sm-portfolio-technology-card", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "sm-portfolio-technology-card", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "sm-portfolio-technology-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "sm-portfolio-technology-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "sm-portfolio-technology-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.C_SHARP);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.TYPESCRIPT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.JAVASCRIPT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.C_PLUS_PLUS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.RUST);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.PYTHON);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.SQL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.DOTNET);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.XAMARIN);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.ANGULAR);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.NGRX);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.NATIVESCRIPT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.JEST);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.NODE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.WEBPACK);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.SASS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.CSS);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.BOOTSTRAP);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.WASM);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.UNITY);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.GIT);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("technologySvgId", ctx.TECHNOLOGY_SVG_ID.GITHUB);
    } }, directives: [src_app_portfolio_portfolio_technology_card_portfolio_technology_card_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioTechnologyCardComponent"]], styles: [".portfolio-knowledge-container[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n.portfolio-knowledge-container[_ngcontent-%COMP%]   .tech-card-header[_ngcontent-%COMP%] {\n  font-weight: 350;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  line-height: 1.25rem;\n  font-size: 1.35rem;\n}\n.portfolio-knowledge-container[_ngcontent-%COMP%]   .tech-card-container[_ngcontent-%COMP%] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1rbm93bGVkZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Q7QUFDQztFQUNDLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVDO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7TUFBQSxlQUFBO0FBQUYiLCJmaWxlIjoicG9ydGZvbGlvLWtub3dsZWRnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb3J0Zm9saW8ta25vd2xlZGdlLWNvbnRhaW5lciB7XG5cdG1hcmdpbi10b3A6IDI0cHg7XG5cdG1hcmdpbi1ib3R0b206IDI0cHg7XG5cblx0LnRlY2gtY2FyZC1oZWFkZXIge1xuXHRcdGZvbnQtd2VpZ2h0OiAzNTA7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuXHRcdGZvbnQtc2l6ZTogMS4zNXJlbTtcblx0fVxuXG5cdC50ZWNoLWNhcmQtY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtd3JhcDogd3JhcDtcblx0fVxufVxuIl19 */"] });


/***/ }),

/***/ "mk+d":
/*!****************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-portrait-card/portfolio-portrait-card.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PortfolioPortraitCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPortraitCardComponent", function() { return PortfolioPortraitCardComponent; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PortfolioPortraitCardComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    getBackground() {
        if (this.imageFileName) {
            return this.sanitizer.bypassSecurityTrustStyle(`url('assets/img/${this.imageFileName}') center / cover`);
        }
        else {
            return '';
        }
    }
}
PortfolioPortraitCardComponent.ɵfac = function PortfolioPortraitCardComponent_Factory(t) { return new (t || PortfolioPortraitCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"])); };
PortfolioPortraitCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioPortraitCardComponent, selectors: [["sm-portfolio-portrait-card"]], inputs: { imageFileName: "imageFileName" }, decls: 1, vars: 2, consts: [[1, "portrait-card-image", "mdl-card"]], template: function PortfolioPortraitCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.getBackground());
    } }, styles: [".portrait-card-image[_ngcontent-%COMP%] {\n  width: 258px;\n  height: 258px;\n  padding: unset;\n  margin: 16px;\n  border-radius: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby1wb3J0cmFpdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQ0tlO0FETmhCIiwiZmlsZSI6InBvcnRmb2xpby1wb3J0cmFpdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuLnBvcnRyYWl0LWNhcmQtaW1hZ2Uge1xuXHR3aWR0aDogMjU4cHg7XG5cdGhlaWdodDogMjU4cHg7XG5cdHBhZGRpbmc6IHVuc2V0O1xuXHRtYXJnaW46IDE2cHg7XG5cdGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xufVxuIiwiJGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4kYmFja2dyb3VuZC1jb2xvci1hbHQ6ICNmMmYyZjI7XG4kdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg5KTtcbiR0ZXh0LWNvbG9yLWxpZ2h0OiByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuJHRleHQtY29sb3ItYWx0OiByZ2JhKDMxLCAxMSwgMTEsIDAuODkpO1xuJHRleHQtY29sb3ItYWx0LWxpZ2h0OiByZ2JhKDMxLCAxMSwgMTEsIDAuMDgpO1xuJGhpZ2hsaWdodDogI2ZmYjFiMTtcbiRoaWdobGlnaHQtYWx0OiAjN2NiZGQ2O1xuJHNvY2lhbC1tZWRpYS1pY29uLWJhY2tncm91bmQ6ICNkOGQ5ZDg7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJsYXRvLWxpZ2h0XCIsIExhdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCxcblx0c2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFwiZmlyYS1yZWdcIiwgbW9ub3NwYWNlO1xuJGJvcmRlci1yYWRpdXM6IDFweDtcbiJdfQ== */"] });


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NOTFOUND_URL, NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOTFOUND_URL", function() { return NOTFOUND_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const NOTFOUND_URL = '404';
class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["sm-not-found"]], decls: 13, vars: 0, consts: [[1, "header"], [1, "title"], [1, "material-icons", "error-icon"], [1, "title-text"], [1, "main-text"], ["routerLink", "", 1, "sm-text-link"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goshdagnabbet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404 Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " We messed something up or you've got a bad link. Perhaps you'd like to go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " instead.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: italic;\n}\n\n.title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.error-icon[_ngcontent-%COMP%] {\n  font-size: 5.4rem;\n  vertical-align: middle;\n  padding-right: 1rem;\n}\n\n.title-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  border: 2px solid black;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  font-family: \"fira-reg\", monospace;\n}\n\n.main-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QUFERDs7QUFJQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtBQUREOztBQUlBO0VBQ0MsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBREQ7O0FBSUE7RUFDQyxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NDYnVCO0FEWXhCOztBQUlBO0VBQ0Msa0JBQUE7QUFERCIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uaGVhZGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50aXRsZSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1pY29uIHtcblx0Zm9udC1zaXplOiA1LjRyZW07XG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cdHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi50aXRsZS10ZXh0IHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcblx0cGFkZGluZy1sZWZ0OiAxcmVtO1xuXHRwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuXHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTtcbn1cblxuLm1haW4tdGV4dCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIiRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuJGJhY2tncm91bmQtY29sb3ItYWx0OiAjZjJmMmYyO1xuJHRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44OSk7XG4kdGV4dC1jb2xvci1saWdodDogcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiR0ZXh0LWNvbG9yLWFsdDogcmdiYSgzMSwgMTEsIDExLCAwLjg5KTtcbiR0ZXh0LWNvbG9yLWFsdC1saWdodDogcmdiYSgzMSwgMTEsIDExLCAwLjA4KTtcbiRoaWdobGlnaHQ6ICNmZmIxYjE7XG4kaGlnaGxpZ2h0LWFsdDogIzdjYmRkNjtcbiRzb2NpYWwtbWVkaWEtaWNvbi1iYWNrZ3JvdW5kOiAjZDhkOWQ4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwibGF0by1saWdodFwiLCBMYXRvLCBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsXG5cdHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBcImZpcmEtcmVnXCIsIG1vbm9zcGFjZTtcbiRib3JkZXItcmFkaXVzOiAxcHg7XG4iXX0= */"] });


/***/ }),

/***/ "rJuk":
/*!********************************************************************************************!*\
  !*** ./src/app/portfolio/portfolio-technology-card/portfolio-technology-card.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PortfolioTechnologyCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioTechnologyCardComponent", function() { return PortfolioTechnologyCardComponent; });
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-device-detector */ "9YtQ");
/* harmony import */ var src_app_portfolio_portfolio_technology_svg_definitions_technology_svg_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio/portfolio-technology-svg-definitions/technology-svg-id */ "SBjt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/svg-icon/svg-icon.component */ "M3U8");





class PortfolioTechnologyCardComponent {
    constructor(_deviceService) {
        this._deviceService = _deviceService;
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this._deviceService.isMobile();
    }
}
PortfolioTechnologyCardComponent.ɵfac = function PortfolioTechnologyCardComponent_Factory(t) { return new (t || PortfolioTechnologyCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_0__["DeviceDetectorService"])); };
PortfolioTechnologyCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioTechnologyCardComponent, selectors: [["sm-portfolio-technology-card"]], inputs: { technologySvgId: "technologySvgId", name: "name" }, decls: 7, vars: 4, consts: [[1, "tech-card-image-container"], [1, "tech-card-image", "mdl-card"], [1, "mdl-card__title", "mdl-card--expand"], [3, "id"], [1, "mdl-card__actions"], [1, "tech-card-name"]], template: function PortfolioTechnologyCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "sm-shared-svg-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.technologySvgId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [src_app_shared_svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]], styles: [".tech-card-image-container.mobile[_ngcontent-%COMP%] {\n  height: 110px;\n  width: 110px;\n}\n.tech-card-image-container.mobile[_ngcontent-%COMP%]   .tech-card-image[_ngcontent-%COMP%] {\n  height: 110px;\n  width: 110px;\n  min-height: 110px;\n}\n.tech-card-image-container.mobile[_ngcontent-%COMP%]   .mdl-card__actions[_ngcontent-%COMP%] {\n  display: none;\n}\n.tech-card-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 198px;\n  width: 198px;\n  margin: 16px;\n}\n.tech-card-image-container[_ngcontent-%COMP%]   .mdl-card[_ngcontent-%COMP%] {\n  height: 198px;\n  width: 198px;\n  border: 1px solid rgba(0, 0, 0, 0.08);\n}\n.tech-card-image-container[_ngcontent-%COMP%]   .tech-card-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 198px;\n  background-color: #f2f2f2;\n  transition: width 0.1s ease-out, left 0.1s ease-out, top 0.1s ease-out, height 0.1s ease-out;\n}\n.tech-card-image-container[_ngcontent-%COMP%]   .tech-card-image[_ngcontent-%COMP%]   sm-shared-svg-icon[_ngcontent-%COMP%] {\n  width: 86%;\n  height: 86%;\n  position: absolute;\n  top: 7%;\n  left: 7%;\n  z-index: -1;\n}\n.tech-card-image-container[_ngcontent-%COMP%]   .tech-card-image[_ngcontent-%COMP%]    > .mdl-card__actions[_ngcontent-%COMP%] {\n  height: 52px;\n  padding: 16px;\n  background: rgba(0, 0, 0, 0.2);\n}\n.tech-card-image-container[_ngcontent-%COMP%]   .tech-card-image[_ngcontent-%COMP%]   .tech-card-name[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.tech-card-image-container[_ngcontent-%COMP%]   .tech-card-image[_ngcontent-%COMP%]:hover {\n  z-index: 2;\n  left: -2.5%;\n  top: -2.5%;\n  width: 105%;\n  height: 105%;\n  transition: width 0.05s ease-out, left 0.05s ease-out, top 0.05s ease-out, height 0.05s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby10ZWNobm9sb2d5LWNhcmQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDQyxhQUh1QjtFQUl2QixZQUp1QjtBQUF4QjtBQU1DO0VBQ0MsYUFQc0I7RUFRdEIsWUFSc0I7RUFTdEIsaUJBVHNCO0FBS3hCO0FBT0M7RUFDQyxhQUFBO0FBTEY7QUFTQTtFQUNDLGtCQUFBO0VBQ0EsYUFwQmdCO0VBcUJoQixZQXJCZ0I7RUFzQmhCLFlBQUE7QUFORDtBQVFDO0VBQ0MsYUF6QmU7RUEwQmYsWUExQmU7RUEyQmYscUNBQUE7QUFORjtBQVNDO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGFBbENlO0VBbUNmLHlCQ3BDcUI7RURxQ3JCLDRGQUFBO0FBUEY7QUFVRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUFSSDtBQVdFO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQVRIO0FBWUU7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVkg7QUFhRTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0dBQUE7QUFYSCIsImZpbGUiOiJwb3J0Zm9saW8tdGVjaG5vbG9neS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcblxuJGNhcmQtc2lkZS1zaXplOiAxOThweDtcbiRjYXJkLXNpZGUtc2l6ZS1tb2JpbGU6IDExMHB4O1xuXG4udGVjaC1jYXJkLWltYWdlLWNvbnRhaW5lci5tb2JpbGUge1xuXHRoZWlnaHQ6ICRjYXJkLXNpZGUtc2l6ZS1tb2JpbGU7XG5cdHdpZHRoOiAkY2FyZC1zaWRlLXNpemUtbW9iaWxlO1xuXG5cdC50ZWNoLWNhcmQtaW1hZ2Uge1xuXHRcdGhlaWdodDogJGNhcmQtc2lkZS1zaXplLW1vYmlsZTtcblx0XHR3aWR0aDogJGNhcmQtc2lkZS1zaXplLW1vYmlsZTtcblx0XHRtaW4taGVpZ2h0OiAkY2FyZC1zaWRlLXNpemUtbW9iaWxlO1xuXHR9XG5cblx0Lm1kbC1jYXJkX19hY3Rpb25zIHtcblx0XHRkaXNwbGF5OiBub25lO1xuXHR9XG59XG5cbi50ZWNoLWNhcmQtaW1hZ2UtY29udGFpbmVyIHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRoZWlnaHQ6ICRjYXJkLXNpZGUtc2l6ZTtcblx0d2lkdGg6ICRjYXJkLXNpZGUtc2l6ZTtcblx0bWFyZ2luOiAxNnB4O1xuXG5cdC5tZGwtY2FyZCB7XG5cdFx0aGVpZ2h0OiAkY2FyZC1zaWRlLXNpemU7XG5cdFx0d2lkdGg6ICRjYXJkLXNpZGUtc2l6ZTtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAkdGV4dC1jb2xvci1saWdodDtcblx0fVxuXG5cdC50ZWNoLWNhcmQtaW1hZ2Uge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHRoZWlnaHQ6ICRjYXJkLXNpZGUtc2l6ZTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvci1hbHQ7XG5cdFx0dHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlLW91dCwgbGVmdCAwLjFzIGVhc2Utb3V0LCB0b3AgMC4xcyBlYXNlLW91dCxcblx0XHRcdGhlaWdodCAwLjFzIGVhc2Utb3V0O1xuXG5cdFx0c20tc2hhcmVkLXN2Zy1pY29uIHtcblx0XHRcdHdpZHRoOiA4NiU7XG5cdFx0XHRoZWlnaHQ6IDg2JTtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogNyU7XG5cdFx0XHRsZWZ0OiA3JTtcblx0XHRcdHotaW5kZXg6IC0xO1xuXHRcdH1cblxuXHRcdD4gLm1kbC1jYXJkX19hY3Rpb25zIHtcblx0XHRcdGhlaWdodDogNTJweDtcblx0XHRcdHBhZGRpbmc6IDE2cHg7XG5cdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdFx0fVxuXG5cdFx0LnRlY2gtY2FyZC1uYW1lIHtcblx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0fVxuXG5cdFx0Jjpob3ZlciB7XG5cdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0bGVmdDogLTIuNSU7XG5cdFx0XHR0b3A6IC0yLjUlO1xuXHRcdFx0d2lkdGg6IDEwNSU7XG5cdFx0XHRoZWlnaHQ6IDEwNSU7XG5cdFx0XHR0cmFuc2l0aW9uOiB3aWR0aCAwLjA1cyBlYXNlLW91dCwgbGVmdCAwLjA1cyBlYXNlLW91dCwgdG9wIDAuMDVzIGVhc2Utb3V0LFxuXHRcdFx0XHRoZWlnaHQgMC4wNXMgZWFzZS1vdXQ7XG5cdFx0fVxuXHR9XG59XG4iLCIkYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiRiYWNrZ3JvdW5kLWNvbG9yLWFsdDogI2YyZjJmMjtcbiR0ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODkpO1xuJHRleHQtY29sb3ItbGlnaHQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4kdGV4dC1jb2xvci1hbHQ6IHJnYmEoMzEsIDExLCAxMSwgMC44OSk7XG4kdGV4dC1jb2xvci1hbHQtbGlnaHQ6IHJnYmEoMzEsIDExLCAxMSwgMC4wOCk7XG4kaGlnaGxpZ2h0OiAjZmZiMWIxO1xuJGhpZ2hsaWdodC1hbHQ6ICM3Y2JkZDY7XG4kc29jaWFsLW1lZGlhLWljb24tYmFja2dyb3VuZDogI2Q4ZDlkODtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcImxhdG8tbGlnaHRcIiwgTGF0bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLFxuXHRzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogXCJmaXJhLXJlZ1wiLCBtb25vc3BhY2U7XG4kYm9yZGVyLXJhZGl1czogMXB4O1xuIl19 */"] });


/***/ }),

/***/ "u1/E":
/*!**************************************!*\
  !*** ./src/app/pgp/pgp.component.ts ***!
  \**************************************/
/*! exports provided: PGP_URL, PgpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PGP_URL", function() { return PGP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PgpComponent", function() { return PgpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_code_block_code_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/code-block/code-block.component */ "7DxU");


const PGP_URL = 'pgp';
class PgpComponent {
    constructor() {
        this.publicKey = '-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n' +
            'mQENBF7h1ckBCADbloooe2iedbLrNYwqWikuYc/LkbQZC8Zvi3Knw/GbKODprJAd\n' +
            'zMZPFMhJYxqSljZ9P3JKSuBAbt7P+YOJrQiCufRgQlcBWm1f1oaJCFXup//T8Zfk\n' +
            'zNwp8YQUg8UuxDSSZngmuP7qpdoXUCbo4E6c27gRPKPsKPtCsS/nR+kU3G3ONwDe\n' +
            'hxLrktSBEcaUKCZ5aOlr6O3QK8xyHB9px1tA8XykIbBbZGJxr+6fe7NC5kHI0V1m\n' +
            'qv7Kmg+Mc/8CTwYtffPZtnqDNPd/9VgdrFRR0g6JOwdirwH+lAvusC3eeovHn/kN\n' +
            'Legnx03YvZt868U1d45X5vB/YPHGhEKaq92lABEBAAG0HVNlYW4gTWVlayA8c2Vh\n' +
            'bkBzZWFubWVlay5jb20+iQFUBBMBCAA+FiEEp0nmABUsqPSe66ltzb0vXGEyBTAF\n' +
            'Al7h1ckCGwMFCQPCZwAFCwkIBwIGFQoJCAsCBBYCAwECHgECF4AACgkQzb0vXGEy\n' +
            'BTABzggAyLufFOMTzgf4ojllpAQr64ecGZr9LYpREws5rvFFH2YV8eYGeHotmaji\n' +
            '841XXXcbEx9uUb8bUfGm3BKaPmEr8jrVs3oZuXmQBC8jdm2bY3P7rxHznsmb3odf\n' +
            'F+kRWnduABR8DmlDWK8in/QKDweK/tD4KnESPveL8KR4gsF9oYeBxy36E6mg/7P4\n' +
            'jxCe6L0TPk0bGX5g3pqivPsaQPtvDu5sZlDZDIwMM4cekC2ntWDUU1xN4wRGaiW1\n' +
            'fWhRWNwOimnovwniZsNFHJzIChKNdfGlOksciScqPGrjcgkdMoK8FPCREQugi6EV\n' +
            'b9sH526dLdaiLn33RfdeE7buMjwcQbkBDQRe4dXJAQgAzfZoupJFvm6r6RXTk3bX\n' +
            'ntZQ9pV0tQNpvP81jpuQBpnabazUCgB865XFqiG1LMVGkmyZYnS4CNeagY+u6CUx\n' +
            '06aB+s7N3PZ84MqgGbj43pi8HN/irS3JiXe1nSaimTZHLqSPE5mqJ1Z58Z6RnAm9\n' +
            'fNIVP9lRjFKyp/DcYbt3ZodrCAos1AAfbGOuVcLTK862fjHmdpBrB1aGLbfdwXUf\n' +
            'yfc5+LOBJjRcgvZ48at8lZBB1I8IwQoQSCKDhMSZvmhqiHi2hZYhSj+WoJ2R1xw3\n' +
            'iUkAxaZqDatmWlc6Uuk1xoI8H4+2PvZY/wBgPR1Myq/vOq2BS4nrE+/VyBodbrqN\n' +
            'qQARAQABiQE8BBgBCAAmFiEEp0nmABUsqPSe66ltzb0vXGEyBTAFAl7h1ckCGwwF\n' +
            'CQPCZwAACgkQzb0vXGEyBTAlYQgAzT83wxSsH7BzHyG+t+feWx/5LjMJSkQHSkme\n' +
            'lUxU8h1kL2sSB1I4cTJPABtNqWsUt5O5WPX0KLDXGBmpN5ERLgDio1uWsrE3pguz\n' +
            'WMy3Zx5XHL4koU5lCCebYC5TxpFOGLwgRNl8OgXUSC7u92qMD0qQrDfZ+3bltO8b\n' +
            'El3ip4wMU2ulDCc5qGUbEnwBCX8vb+LBtj0QUbpOr5wAtmiNSpPilSFanv/tEFx+\n' +
            'Xy3DN20k4biG6PejoF2bMiu91CIj+tH+QDVM3yPadVkwdwtZkiLEu5ZXcZwN0jOt\n' +
            'e2/mJ16Y9TWbJWLu462DLtDfXStvkx55OfYOXte4g/EyWSLxiQ==\n' +
            '=Rpm0\n' +
            '-----END PGP PUBLIC KEY BLOCK-----';
    }
}
PgpComponent.ɵfac = function PgpComponent_Factory(t) { return new (t || PgpComponent)(); };
PgpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PgpComponent, selectors: [["sm-pgp"]], decls: 2, vars: 1, consts: [[1, "content-container"], ["title", "PGP Key", 1, "center-contents", 3, "code"]], template: function PgpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sm-code-block", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("code", ctx.publicKey);
    } }, directives: [src_app_shared_code_block_code_block_component__WEBPACK_IMPORTED_MODULE_1__["CodeBlockComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZ3AuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "v/TW":
/*!**********************************************************************!*\
  !*** ./src/app/portfolio/portfolio-main/portfolio-main.component.ts ***!
  \**********************************************************************/
/*! exports provided: PORTFOLIO_URL, PortfolioMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIO_URL", function() { return PORTFOLIO_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioMainComponent", function() { return PortfolioMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_portfolio_portfolio_technology_svg_definitions_portfolio_technology_svg_definitions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/portfolio/portfolio-technology-svg-definitions/portfolio-technology-svg-definitions.component */ "EYRP");
/* harmony import */ var src_app_portfolio_portfolio_bio_portfolio_bio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/portfolio/portfolio-bio/portfolio-bio.component */ "fyt+");
/* harmony import */ var src_app_portfolio_portfolio_knowledge_portfolio_knowledge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/portfolio/portfolio-knowledge/portfolio-knowledge.component */ "gS2R");
/* harmony import */ var src_app_portfolio_portfolio_contact_portfolio_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/portfolio/portfolio-contact/portfolio-contact.component */ "b4QN");





const PORTFOLIO_URL = 'portfolio';
class PortfolioMainComponent {
}
PortfolioMainComponent.ɵfac = function PortfolioMainComponent_Factory(t) { return new (t || PortfolioMainComponent)(); };
PortfolioMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioMainComponent, selectors: [["sm-portfolio-main"]], decls: 4, vars: 0, template: function PortfolioMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sm-portfolio-technology-svg-definitions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "sm-portfolio-bio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sm-portfolio-knowledge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "sm-portfolio-contact");
    } }, directives: [src_app_portfolio_portfolio_technology_svg_definitions_portfolio_technology_svg_definitions_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioTechnologySvgDefinitionsComponent"], src_app_portfolio_portfolio_bio_portfolio_bio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioBioComponent"], src_app_portfolio_portfolio_knowledge_portfolio_knowledge_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioKnowledgeComponent"], src_app_portfolio_portfolio_contact_portfolio_contact_component__WEBPACK_IMPORTED_MODULE_4__["PortfolioContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8tbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_pgp_pgp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pgp/pgp.component */ "u1/E");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/portfolio-main/portfolio-main.component */ "v/TW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: _portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_3__["PORTFOLIO_URL"], component: _portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioMainComponent"] },
    { path: src_app_pgp_pgp_component__WEBPACK_IMPORTED_MODULE_1__["PGP_URL"], component: src_app_pgp_pgp_component__WEBPACK_IMPORTED_MODULE_1__["PgpComponent"] },
    { path: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NOTFOUND_URL"], component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
    {
        path: '', redirectTo: _portfolio_portfolio_main_portfolio_main_component__WEBPACK_IMPORTED_MODULE_3__["PORTFOLIO_URL"],
        pathMatch: 'full'
    },
    {
        path: '**', redirectTo: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NOTFOUND_URL"],
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map