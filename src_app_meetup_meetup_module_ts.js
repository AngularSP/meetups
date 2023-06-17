"use strict";
(self["webpackChunkmeetups"] = self["webpackChunkmeetups"] || []).push([["src_app_meetup_meetup_module_ts"],{

/***/ 2060:
/*!***************************************************!*\
  !*** ./src/app/meetup/banner/banner.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BannerComponent: () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html-to-image */ 6977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7422);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5746);
/* harmony import */ var _utils_slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../utils/slugify */ 824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _meetup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meetup.service */ 3283);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);







const _c0 = ["banner"];
const _c1 = function (a0, a1, a2) {
  return {
    "linkedin-width": a0,
    "instagram-width": a1,
    "facebook-width": a2
  };
};
function BannerComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6, 7)(2, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 9)(5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 12)(8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "article")(15, "div", 13)(16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 16)(19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h1", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Por ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](12, _c1, ctx_r0.imageSize === "Linkedin", ctx_r0.imageSize === "Instagram", ctx_r0.imageSize === "Facebook"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r0.getBackGroundColor(data_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](16, _c1, ctx_r0.imageSize === "Linkedin", ctx_r0.imageSize === "Instagram", ctx_r0.imageSize === "Facebook"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("AngularSP #", data_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "assets/photos/", data_r1.talks[ctx_r0.talkIdx].photo, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.talks[ctx_r0.talkIdx].subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.talks[ctx_r0.talkIdx].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.talks[ctx_r0.talkIdx].speaker);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r1.talks[ctx_r0.talkIdx].description, " ");
  }
}
class BannerComponent {
  constructor(meetupService, router) {
    this.meetupService = meetupService;
    this.router = router;
    this.talkIdx = 0;
    this.imageSize = 'Linkedin';
  }
  ngOnInit() {
    const meetupId = this.router.snapshot.params.id;
    this.talkIdx = this.router.snapshot.params.talk - 1;
    this.data$ = this.meetupService.getEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(data => data.find(item => item.id === +meetupId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(item => {
      this.bannerName = (0,_utils_slugify__WEBPACK_IMPORTED_MODULE_1__.slugfy)(item?.talks[this.talkIdx]?.title);
    }));
  }
  getBackGroundColor(data) {
    return `linear-gradient(145deg,${data.primaryColor},${data.secondaryColor})`;
  }
  downloadImage(type) {
    switch (type) {
      case 'png':
        return this.savePng();
      case 'jpeg':
        return this.saveJpeg();
    }
  }
  selectImageSize(size) {
    this.imageSize = size;
  }
  savePng() {
    (0,html_to_image__WEBPACK_IMPORTED_MODULE_0__.toPng)(this.banner.nativeElement).then(dataUrl => {
      const link = document.createElement('a');
      link.download = `${this.bannerName}-${this.imageSize}.png`;
      link.href = dataUrl;
      link.click();
    }).catch(err => {
      console.log(err);
    });
  }
  saveJpeg() {
    (0,html_to_image__WEBPACK_IMPORTED_MODULE_0__.toJpeg)(this.banner.nativeElement, {
      quality: 0.95
    }).then(dataUrl => {
      const link = document.createElement('a');
      link.download = `${this.bannerName}-${this.imageSize}.jpeg`;
      link.href = dataUrl;
      link.click();
    }).catch(err => {
      console.log(err);
    });
  }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) {
  return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_meetup_service__WEBPACK_IMPORTED_MODULE_2__.MeetupService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute));
};
BannerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: BannerComponent,
  selectors: [["app-banner"]],
  viewQuery: function BannerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.banner = _t.first);
    }
  },
  decls: 20,
  vars: 3,
  consts: [[1, "container"], [1, "column"], ["class", "banner", 3, "ngClass", 4, "ngIf"], [1, "column", "actions"], [3, "click"], [1, "column", "save-image"], [1, "banner", 3, "ngClass"], ["banner", ""], [1, "background", 3, "ngClass"], [1, "intro"], [1, "intro__logo"], ["src", "assets/logo.svg", "alt", "AngularSP", "width", "300", "height", "300"], [1, "intro__info"], [1, "content"], [1, "content__photo"], ["alt", "spekar", 3, "src"], [1, "content__info"], [1, "info__talk"], [1, "info__title"], [1, "info__speaker"], [1, "info__description"]],
  template: function BannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, BannerComponent_div_2_Template, 29, 20, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "section", 3)(6, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Selecione o tamanho do Banner: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_8_listener() {
        return ctx.selectImageSize("Instagram");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Instagram");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_10_listener() {
        return ctx.selectImageSize("Linkedin");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Linkedin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_12_listener() {
        return ctx.selectImageSize("Facebook");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Salve a imagem: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_16_listener() {
        return ctx.downloadImage("png");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Download PNG");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_18_listener() {
        return ctx.downloadImage("jpeg");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Download JPEG");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.data$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.banner[_ngcontent-%COMP%] {\n  max-height: 1080px;\n  background-color: #fff;\n}\n.banner[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  position: absolute;\n  background: linear-gradient(145deg, #0d47a1, #42a5f5);\n  min-height: 350px;\n  z-index: 1;\n  transform: skewY(6deg);\n  transform-origin: 100%;\n}\n\n.linkedin-width[_ngcontent-%COMP%] {\n  width: 1200px;\n}\n\n.instagram-width[_ngcontent-%COMP%] {\n  width: 1080px;\n}\n\n.facebook-width[_ngcontent-%COMP%] {\n  width: 960px;\n}\n\n.banner[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 350px;\n}\n\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  width: 850px;\n  color: #fff;\n  z-index: 1;\n}\n\n.intro__info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.intro__info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 0.7em;\n}\n\n.intro__info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.7em;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.content__photo[_ngcontent-%COMP%] {\n  flex-basis: 30%;\n  display: flex;\n  justify-content: center;\n}\n\n.content__photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  display: inline-block;\n  height: 200px;\n  object-fit: cover;\n  padding: calc(0.25rem + 0.25vw);\n  width: 200px;\n}\n\n.content__info[_ngcontent-%COMP%] {\n  flex-basis: 70%;\n  letter-spacing: 0.03em;\n  padding-right: 2em;\n}\n\n.info__talk[_ngcontent-%COMP%] {\n  display: block;\n  color: #1976d2;\n  text-transform: uppercase;\n  margin-bottom: 0.5em;\n}\n\n.info__title[_ngcontent-%COMP%] {\n  color: #1976d2;\n  text-transform: uppercase;\n  margin-bottom: 1em;\n  font-size: 1.35em;\n}\n\n.info__speaker[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.info__description[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 200px;\n  background-color: #1976d2;\n  border: none;\n  color: white;\n  cursor: pointer;\n  padding: 15px 32px;\n  margin: 10px 0;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: -webkit-fill-available;\n  width: fill-available;\n  justify-content: center;\n  align-items: center;\n}\n\n.save-image[_ngcontent-%COMP%] {\n  padding-top: 3em;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVldHVwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0Usa0JBQUE7RUFDQSxxREFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSw2QkFBQTtFQUFBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmJhbm5lciB7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMGQ0N2ExLCAjNDJhNWY1KTtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zZm9ybTogc2tld1koNmRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJTtcbiAgfVxufVxuXG4ubGlua2VkaW4td2lkdGgge1xuICB3aWR0aDogMTIwMHB4O1xufVxuXG4uaW5zdGFncmFtLXdpZHRoIHtcbiAgd2lkdGg6IDEwODBweDtcbn1cblxuLmZhY2Vib29rLXdpZHRoIHtcbiAgd2lkdGg6IDk2MHB4O1xufVxuXG4uYmFubmVyIGhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzNTBweDtcbn1cblxuLmludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg1MHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTtcbn1cblxuLmludHJvX19pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbnRyb19faW5mbyBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43ZW07XG59XG5cbi5pbnRyb19faW5mbyBoMiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjdlbTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRfX3Bob3RvIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnRfX3Bob3RvIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcGFkZGluZzogY2FsYygwLjI1cmVtICsgMC4yNXZ3KTtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uY29udGVudF9faW5mbyB7XG4gIGZsZXgtYmFzaXM6IDcwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbiAgcGFkZGluZy1yaWdodDogMmVtO1xufVxuXG4uaW5mb19fdGFsayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5pbmZvX190aXRsZSB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMS4zNWVtO1xufVxuXG4uaW5mb19fc3BlYWtlciB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmluZm9fX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAyMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTVweCAzMnB4O1xuICBtYXJnaW46IDEwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNhdmUtaW1hZ2Uge1xuICBwYWRkaW5nLXRvcDogM2VtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 1888:
/*!*************************************************!*\
  !*** ./src/app/meetup/meetup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetupRoutingModule: () => (/* binding */ MeetupRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ 2060);
/* harmony import */ var _meetup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meetup.component */ 9066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _meetup_component__WEBPACK_IMPORTED_MODULE_1__.MeetupComponent
}, {
  path: ':id/banner/:talk',
  component: _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent
}];
class MeetupRoutingModule {}
MeetupRoutingModule.ɵfac = function MeetupRoutingModule_Factory(t) {
  return new (t || MeetupRoutingModule)();
};
MeetupRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: MeetupRoutingModule
});
MeetupRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MeetupRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 9066:
/*!********************************************!*\
  !*** ./src/app/meetup/meetup.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetupComponent: () => (/* binding */ MeetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _meetup_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meetup.service */ 3283);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




const _c0 = function (a0, a2) {
  return [a0, "banner", a2];
};
function MeetupComponent_li_4_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const event_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c0, event_r1.id, i_r4 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Talk ", i_r4 + 1, "");
  }
}
function MeetupComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MeetupComponent_li_4_li_4_Template, 3, 5, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Meetup ", event_r1 == null ? null : event_r1.id, " - ", event_r1 == null ? null : event_r1.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", event_r1.talks);
  }
}
class MeetupComponent {
  constructor(meetupService) {
    this.meetupService = meetupService;
  }
  ngOnInit() {
    this.events$ = this.meetupService.getEvents();
  }
}
MeetupComponent.ɵfac = function MeetupComponent_Factory(t) {
  return new (t || MeetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_meetup_service__WEBPACK_IMPORTED_MODULE_0__.MeetupService));
};
MeetupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: MeetupComponent,
  selectors: [["app-meetup"]],
  decls: 6,
  vars: 3,
  consts: [[1, "container"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
  template: function MeetupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Meetups AngularSP");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MeetupComponent_li_4_Template, 5, 3, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.events$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: [".container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 700px;\n}\n\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  line-height: 3em;\n}\n\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n\n.container[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVldHVwL21lZXR1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDcwMHB4O1xufVxuXG4uY29udGFpbmVyIGgxIHtcbiAgbGluZS1oZWlnaHQ6IDNlbTtcbn1cblxuLmNvbnRhaW5lciB1bCB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG59XG5cbi5jb250YWluZXIgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jb250YWluZXIgdWwgbGkgdWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGFpbmVyIHVsIGxpIHVsIGxpIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 4516:
/*!*****************************************!*\
  !*** ./src/app/meetup/meetup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetupModule: () => (/* binding */ MeetupModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ 2060);
/* harmony import */ var _meetup_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meetup-routing.module */ 1888);
/* harmony import */ var _meetup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./meetup.component */ 9066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class MeetupModule {}
MeetupModule.ɵfac = function MeetupModule_Factory(t) {
  return new (t || MeetupModule)();
};
MeetupModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: MeetupModule
});
MeetupModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _meetup_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetupRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MeetupModule, {
    declarations: [_meetup_component__WEBPACK_IMPORTED_MODULE_2__.MeetupComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _meetup_routing_module__WEBPACK_IMPORTED_MODULE_1__.MeetupRoutingModule]
  });
})();

/***/ }),

/***/ 3283:
/*!******************************************!*\
  !*** ./src/app/meetup/meetup.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MeetupService: () => (/* binding */ MeetupService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class MeetupService {
  constructor(http) {
    this.http = http;
  }
  getEvents() {
    return this.http.get('assets/events.json');
  }
}
MeetupService.ɵfac = function MeetupService_Factory(t) {
  return new (t || MeetupService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
MeetupService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MeetupService,
  factory: MeetupService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 824:
/*!**********************************!*\
  !*** ./src/app/utils/slugify.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   slugfy: () => (/* binding */ slugfy)
/* harmony export */ });
const slugfy = str => {
  str = str.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();
  let from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  let to = 'aaaaeeeeiiiioooouuuunc------';
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
  return str;
};

/***/ }),

/***/ 9410:
/*!****************************************************************!*\
  !*** ./node_modules/html-to-image/es/applyStyleWithOptions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyStyleWithOptions: () => (/* binding */ applyStyleWithOptions)
/* harmony export */ });
function applyStyleWithOptions(node, options) {
  const {
    style
  } = node;
  if (options.backgroundColor) {
    style.backgroundColor = options.backgroundColor;
  }
  if (options.width) {
    style.width = `${options.width}px`;
  }
  if (options.height) {
    style.height = `${options.height}px`;
  }
  const manual = options.style;
  if (manual != null) {
    Object.keys(manual).forEach(key => {
      style[key] = manual[key];
    });
  }
  return node;
}

/***/ }),

/***/ 4788:
/*!****************************************************!*\
  !*** ./node_modules/html-to-image/es/cloneNode.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneNode: () => (/* binding */ cloneNode)
/* harmony export */ });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ 8986);
/* harmony import */ var _clonePseudoElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clonePseudoElements */ 335);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 5791);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
};



function cloneCanvasElement(node) {
  return __awaiter(this, void 0, void 0, function* () {
    const dataURL = node.toDataURL();
    if (dataURL === 'data:,') {
      return Promise.resolve(node.cloneNode(false));
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_2__.createImage)(dataURL);
  });
}
function cloneVideoElement(node, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return Promise.resolve(node.poster).then(url => (0,_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__.getBlobFromURL)(url, options)).then(data => (0,_util__WEBPACK_IMPORTED_MODULE_2__.makeDataUrl)(data.blob, (0,_util__WEBPACK_IMPORTED_MODULE_2__.getMimeType)(node.poster) || data.contentType)).then(dataURL => (0,_util__WEBPACK_IMPORTED_MODULE_2__.createImage)(dataURL));
  });
}
function cloneSingleNode(node, options) {
  return __awaiter(this, void 0, void 0, function* () {
    if (node instanceof HTMLCanvasElement) {
      return cloneCanvasElement(node);
    }
    if (node instanceof HTMLVideoElement && node.poster) {
      return cloneVideoElement(node, options);
    }
    return Promise.resolve(node.cloneNode(false));
  });
}
const isSlotElement = node => node.tagName != null && node.tagName.toUpperCase() === 'SLOT';
function cloneChildren(nativeNode, clonedNode, options) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    const children = isSlotElement(nativeNode) && nativeNode.assignedNodes ? (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(nativeNode.assignedNodes()) : (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(((_a = nativeNode.shadowRoot) !== null && _a !== void 0 ? _a : nativeNode).childNodes);
    if (children.length === 0 || nativeNode instanceof HTMLVideoElement) {
      return Promise.resolve(clonedNode);
    }
    return children.reduce((deferred, child) => deferred
    // eslint-disable-next-line no-use-before-define
    .then(() => cloneNode(child, options)).then(clonedChild => {
      // eslint-disable-next-line promise/always-return
      if (clonedChild) {
        clonedNode.appendChild(clonedChild);
      }
    }), Promise.resolve()).then(() => clonedNode);
  });
}
function cloneCSSStyle(nativeNode, clonedNode) {
  const source = window.getComputedStyle(nativeNode);
  const target = clonedNode.style;
  if (!target) {
    return;
  }
  if (source.cssText) {
    target.cssText = source.cssText;
  } else {
    (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(source).forEach(name => {
      target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
    });
  }
}
function cloneInputValue(nativeNode, clonedNode) {
  if (nativeNode instanceof HTMLTextAreaElement) {
    clonedNode.innerHTML = nativeNode.value;
  }
  if (nativeNode instanceof HTMLInputElement) {
    clonedNode.setAttribute('value', nativeNode.value);
  }
}
function decorate(nativeNode, clonedNode) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!(clonedNode instanceof Element)) {
      return Promise.resolve(clonedNode);
    }
    return Promise.resolve().then(() => cloneCSSStyle(nativeNode, clonedNode)).then(() => (0,_clonePseudoElements__WEBPACK_IMPORTED_MODULE_1__.clonePseudoElements)(nativeNode, clonedNode)).then(() => cloneInputValue(nativeNode, clonedNode)).then(() => clonedNode);
  });
}
function cloneNode(node, options, isRoot) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!isRoot && options.filter && !options.filter(node)) {
      return Promise.resolve(null);
    }
    return Promise.resolve(node).then(clonedNode => cloneSingleNode(clonedNode, options)).then(clonedNode => cloneChildren(node, clonedNode, options)).then(clonedNode => decorate(node, clonedNode));
  });
}

/***/ }),

/***/ 335:
/*!**************************************************************!*\
  !*** ./node_modules/html-to-image/es/clonePseudoElements.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clonePseudoElements: () => (/* binding */ clonePseudoElements)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 5791);

function formatCSSText(style) {
  const content = style.getPropertyValue('content');
  return `${style.cssText} content: '${content.replace(/'|"/g, '')}';`;
}
function formatCSSProperties(style) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(style).map(name => {
    const value = style.getPropertyValue(name);
    const priority = style.getPropertyPriority(name);
    return `${name}: ${value}${priority ? ' !important' : ''};`;
  }).join(' ');
}
function getPseudoElementStyle(className, pseudo, style) {
  const selector = `.${className}:${pseudo}`;
  const cssText = style.cssText ? formatCSSText(style) : formatCSSProperties(style);
  return document.createTextNode(`${selector}{${cssText}}`);
}
function clonePseudoElement(nativeNode, clonedNode, pseudo) {
  const style = window.getComputedStyle(nativeNode, pseudo);
  const content = style.getPropertyValue('content');
  if (content === '' || content === 'none') {
    return;
  }
  const className = (0,_util__WEBPACK_IMPORTED_MODULE_0__.uuid)();
  try {
    clonedNode.className = `${clonedNode.className} ${className}`;
  } catch (err) {
    return;
  }
  const styleElement = document.createElement('style');
  styleElement.appendChild(getPseudoElementStyle(className, pseudo, style));
  clonedNode.appendChild(styleElement);
}
function clonePseudoElements(nativeNode, clonedNode) {
  clonePseudoElement(nativeNode, clonedNode, ':before');
  clonePseudoElement(nativeNode, clonedNode, ':after');
}

/***/ }),

/***/ 3012:
/*!******************************************************!*\
  !*** ./node_modules/html-to-image/es/embedImages.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   embedImages: () => (/* binding */ embedImages)
/* harmony export */ });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ 8986);
/* harmony import */ var _embedResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedResources */ 6682);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ 5791);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
};



function embedBackground(clonedNode, options) {
  var _a;
  return __awaiter(this, void 0, void 0, function* () {
    const background = (_a = clonedNode.style) === null || _a === void 0 ? void 0 : _a.getPropertyValue('background');
    if (!background) {
      return Promise.resolve(clonedNode);
    }
    return Promise.resolve(background).then(cssString => (0,_embedResources__WEBPACK_IMPORTED_MODULE_1__.embedResources)(cssString, null, options)).then(cssString => {
      clonedNode.style.setProperty('background', cssString, clonedNode.style.getPropertyPriority('background'));
      return clonedNode;
    });
  });
}
function embedImageNode(clonedNode, options) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!(clonedNode instanceof HTMLImageElement && !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isDataUrl)(clonedNode.src)) && !(clonedNode instanceof SVGImageElement && !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isDataUrl)(clonedNode.href.baseVal))) {
      return Promise.resolve(clonedNode);
    }
    const src = clonedNode instanceof HTMLImageElement ? clonedNode.src : clonedNode.href.baseVal;
    return Promise.resolve(src).then(url => (0,_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__.getBlobFromURL)(url, options)).then(data => (0,_util__WEBPACK_IMPORTED_MODULE_2__.makeDataUrl)(data.blob, (0,_util__WEBPACK_IMPORTED_MODULE_2__.getMimeType)(src) || data.contentType)).then(dataURL => new Promise((resolve, reject) => {
      clonedNode.onload = resolve;
      clonedNode.onerror = reject;
      if (clonedNode instanceof HTMLImageElement) {
        clonedNode.srcset = '';
        clonedNode.src = dataURL;
      } else {
        clonedNode.href.baseVal = dataURL;
      }
    })).then(() => clonedNode, () => clonedNode);
  });
}
function embedChildren(clonedNode, options) {
  return __awaiter(this, void 0, void 0, function* () {
    const children = (0,_util__WEBPACK_IMPORTED_MODULE_2__.toArray)(clonedNode.childNodes);
    // eslint-disable-next-line no-use-before-define
    const deferreds = children.map(child => embedImages(child, options));
    return Promise.all(deferreds).then(() => clonedNode);
  });
}
function embedImages(clonedNode, options) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!(clonedNode instanceof Element)) {
      return Promise.resolve(clonedNode);
    }
    return Promise.resolve(clonedNode).then(node => embedBackground(node, options)).then(node => embedImageNode(node, options)).then(node => embedChildren(node, options));
  });
}

/***/ }),

/***/ 6682:
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/embedResources.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   embed: () => (/* binding */ embed),
/* harmony export */   embedResources: () => (/* binding */ embedResources),
/* harmony export */   parseURLs: () => (/* binding */ parseURLs),
/* harmony export */   shouldEmbed: () => (/* binding */ shouldEmbed),
/* harmony export */   toRegex: () => (/* binding */ toRegex)
/* harmony export */ });
/* harmony import */ var _getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlobFromURL */ 8986);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 5791);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
};


const URL_REGEX = /url\((['"]?)([^'"]+?)\1\)/g;
const URL_WITH_FORMAT_REGEX = /url\([^)]+\)\s*format\((["'])([^"']+)\1\)/g;
const FONT_SRC_REGEX = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function toRegex(url) {
  // eslint-disable-next-line no-useless-escape
  const escaped = url.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
  return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`, 'g');
}
function parseURLs(cssText) {
  const result = [];
  cssText.replace(URL_REGEX, (raw, quotation, url) => {
    result.push(url);
    return raw;
  });
  return result.filter(url => !(0,_util__WEBPACK_IMPORTED_MODULE_1__.isDataUrl)(url));
}
function embed(cssText, resourceURL, baseURL, options, get) {
  const resolvedURL = baseURL ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.resolveUrl)(resourceURL, baseURL) : resourceURL;
  return Promise.resolve(resolvedURL).then(url => get ? get(url) : (0,_getBlobFromURL__WEBPACK_IMPORTED_MODULE_0__.getBlobFromURL)(url, options)).then(data => {
    if (typeof data === 'string') {
      return (0,_util__WEBPACK_IMPORTED_MODULE_1__.makeDataUrl)(data, (0,_util__WEBPACK_IMPORTED_MODULE_1__.getMimeType)(resourceURL));
    }
    return (0,_util__WEBPACK_IMPORTED_MODULE_1__.makeDataUrl)(data.blob, (0,_util__WEBPACK_IMPORTED_MODULE_1__.getMimeType)(resourceURL) || data.contentType);
  }).then(dataURL => cssText.replace(toRegex(resourceURL), `$1${dataURL}$3`)).then(content => content, () => resolvedURL);
}
function filterPreferredFontFormat(str, {
  preferredFontFormat
}) {
  return !preferredFontFormat ? str : str.replace(FONT_SRC_REGEX, match => {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const [src,, format] = URL_WITH_FORMAT_REGEX.exec(match) || [];
      if (!format) {
        return '';
      }
      if (format === preferredFontFormat) {
        return `src: ${src};`;
      }
    }
  });
}
function shouldEmbed(url) {
  return url.search(URL_REGEX) !== -1;
}
function embedResources(cssText, baseUrl, options) {
  return __awaiter(this, void 0, void 0, function* () {
    if (!shouldEmbed(cssText)) {
      return Promise.resolve(cssText);
    }
    const filteredCSSText = filterPreferredFontFormat(cssText, options);
    return Promise.resolve(filteredCSSText).then(parseURLs).then(urls => urls.reduce((deferred, url) =>
    // eslint-disable-next-line promise/no-nesting
    deferred.then(css => embed(css, url, baseUrl, options)), Promise.resolve(filteredCSSText)));
  });
}

/***/ }),

/***/ 5140:
/*!********************************************************!*\
  !*** ./node_modules/html-to-image/es/embedWebFonts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   embedWebFonts: () => (/* binding */ embedWebFonts),
/* harmony export */   getWebFontCSS: () => (/* binding */ getWebFontCSS)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 5791);
/* harmony import */ var _embedResources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedResources */ 6682);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
};


const cssFetchCache = {};
function fetchCSS(url) {
  const cache = cssFetchCache[url];
  if (cache != null) {
    return cache;
  }
  const deferred = window.fetch(url).then(res => ({
    url,
    cssText: res.text()
  }));
  cssFetchCache[url] = deferred;
  return deferred;
}
function embedFonts(meta) {
  return __awaiter(this, void 0, void 0, function* () {
    return meta.cssText.then(raw => {
      let cssText = raw;
      const regexUrl = /url\(["']?([^"')]+)["']?\)/g;
      const fontLocs = cssText.match(/url\([^)]+\)/g) || [];
      const loadFonts = fontLocs.map(location => {
        let url = location.replace(regexUrl, '$1');
        if (!url.startsWith('https://')) {
          url = new URL(url, meta.url).href;
        }
        // eslint-disable-next-line promise/no-nesting
        return window.fetch(url).then(res => res.blob()).then(blob => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            // Side Effect
            cssText = cssText.replace(location, `url(${reader.result})`);
            resolve([location, reader.result]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        }));
      });
      // eslint-disable-next-line promise/no-nesting
      return Promise.all(loadFonts).then(() => cssText);
    });
  });
}
function parseCSS(source) {
  if (source == null) {
    return [];
  }
  const result = [];
  const commentsRegex = /(\/\*[\s\S]*?\*\/)/gi;
  // strip out comments
  let cssText = source.replace(commentsRegex, '');
  const keyframesRegex = new RegExp('((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})', 'gi');
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const matches = keyframesRegex.exec(cssText);
    if (matches === null) {
      break;
    }
    result.push(matches[0]);
  }
  cssText = cssText.replace(keyframesRegex, '');
  const importRegex = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi;
  // to match css & media queries together
  const combinedCSSRegex = '((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]' + '*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})';
  // unified regex
  const unifiedRegex = new RegExp(combinedCSSRegex, 'gi');
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let matches = importRegex.exec(cssText);
    if (matches === null) {
      matches = unifiedRegex.exec(cssText);
      if (matches === null) {
        break;
      } else {
        importRegex.lastIndex = unifiedRegex.lastIndex;
      }
    } else {
      unifiedRegex.lastIndex = importRegex.lastIndex;
    }
    result.push(matches[0]);
  }
  return result;
}
function getCSSRules(styleSheets) {
  return __awaiter(this, void 0, void 0, function* () {
    const ret = [];
    const deferreds = [];
    // First loop inlines imports
    styleSheets.forEach(sheet => {
      if ('cssRules' in sheet) {
        try {
          (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(sheet.cssRules).forEach((item, index) => {
            if (item.type === CSSRule.IMPORT_RULE) {
              let importIndex = index + 1;
              const url = item.href;
              const deferred = fetchCSS(url).then(metadata => metadata ? embedFonts(metadata) : '').then(cssText => parseCSS(cssText).forEach(rule => {
                try {
                  sheet.insertRule(rule, rule.startsWith('@import') ? importIndex += 1 : sheet.cssRules.length);
                } catch (error) {
                  console.error('Error inserting rule from remote css', {
                    rule,
                    error
                  });
                }
              })).catch(e => {
                console.error('Error loading remote css', e.toString());
              });
              deferreds.push(deferred);
            }
          });
        } catch (e) {
          const inline = styleSheets.find(a => a.href == null) || document.styleSheets[0];
          if (sheet.href != null) {
            deferreds.push(fetchCSS(sheet.href).then(metadata => metadata ? embedFonts(metadata) : '').then(cssText => parseCSS(cssText).forEach(rule => {
              inline.insertRule(rule, sheet.cssRules.length);
            })).catch(err => {
              console.error('Error loading remote stylesheet', err.toString());
            }));
          }
          console.error('Error inlining remote css file', e.toString());
        }
      }
    });
    return Promise.all(deferreds).then(() => {
      // Second loop parses rules
      styleSheets.forEach(sheet => {
        if ('cssRules' in sheet) {
          try {
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(sheet.cssRules).forEach(item => {
              ret.push(item);
            });
          } catch (e) {
            console.error(`Error while reading CSS rules from ${sheet.href}`, e.toString());
          }
        }
      });
      return ret;
    });
  });
}
function getWebFontRules(cssRules) {
  return cssRules.filter(rule => rule.type === CSSRule.FONT_FACE_RULE).filter(rule => (0,_embedResources__WEBPACK_IMPORTED_MODULE_1__.shouldEmbed)(rule.style.getPropertyValue('src')));
}
function parseWebFontRules(node) {
  return __awaiter(this, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
      if (node.ownerDocument == null) {
        reject(new Error('Provided element is not within a Document'));
      }
      resolve((0,_util__WEBPACK_IMPORTED_MODULE_0__.toArray)(node.ownerDocument.styleSheets));
    }).then(styleSheets => getCSSRules(styleSheets)).then(getWebFontRules);
  });
}
function getWebFontCSS(node, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return parseWebFontRules(node).then(rules => Promise.all(rules.map(rule => {
      const baseUrl = rule.parentStyleSheet ? rule.parentStyleSheet.href : null;
      return (0,_embedResources__WEBPACK_IMPORTED_MODULE_1__.embedResources)(rule.cssText, baseUrl, options);
    }))).then(cssTexts => cssTexts.join('\n'));
  });
}
function embedWebFonts(clonedNode, options) {
  return __awaiter(this, void 0, void 0, function* () {
    return (options.fontEmbedCSS != null ? Promise.resolve(options.fontEmbedCSS) : getWebFontCSS(clonedNode, options)).then(cssText => {
      const styleNode = document.createElement('style');
      const sytleContent = document.createTextNode(cssText);
      styleNode.appendChild(sytleContent);
      if (clonedNode.firstChild) {
        clonedNode.insertBefore(styleNode, clonedNode.firstChild);
      } else {
        clonedNode.appendChild(styleNode);
      }
      return clonedNode;
    });
  });
}

/***/ }),

/***/ 8986:
/*!*********************************************************!*\
  !*** ./node_modules/html-to-image/es/getBlobFromURL.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlobFromURL: () => (/* binding */ getBlobFromURL)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ 5791);

const cache = {};
function getCacheKey(url) {
  let key = url.replace(/\?.*/, '');
  // font resourse
  if (/ttf|otf|eot|woff2?/i.test(key)) {
    key = key.replace(/.*\//, '');
  }
  return key;
}
function getBlobFromURL(url, options) {
  const cacheKey = getCacheKey(url);
  if (cache[cacheKey] != null) {
    return cache[cacheKey];
  }
  // cache bypass so we dont have CORS issues with cached images
  // ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
  if (options.cacheBust) {
    // eslint-disable-next-line no-param-reassign
    url += (/\?/.test(url) ? '&' : '?') + new Date().getTime();
  }
  const failed = reason => {
    let placeholder = '';
    if (options.imagePlaceholder) {
      const parts = options.imagePlaceholder.split(/,/);
      if (parts && parts[1]) {
        placeholder = parts[1];
      }
    }
    let msg = `Failed to fetch resource: ${url}`;
    if (reason) {
      msg = typeof reason === 'string' ? reason : reason.message;
    }
    if (msg) {
      console.error(msg);
    }
    return {
      blob: placeholder,
      contentType: ''
    };
  };
  const deferred = window.fetch(url).then(res =>
  // eslint-disable-next-line promise/no-nesting
  res.blob().then(blob => ({
    blob,
    contentType: res.headers.get('Content-Type') || ''
  }))).then(({
    blob,
    contentType
  }) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve({
      contentType,
      blob: reader.result
    });
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  })).then(({
    blob,
    contentType
  }) => ({
    contentType,
    blob: (0,_util__WEBPACK_IMPORTED_MODULE_0__.parseDataUrlContent)(blob)
  }))
  // on failed
  .catch(failed);
  // cache result
  cache[cacheKey] = deferred;
  return deferred;
}

/***/ }),

/***/ 6977:
/*!************************************************!*\
  !*** ./node_modules/html-to-image/es/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFontEmbedCSS: () => (/* binding */ getFontEmbedCSS),
/* harmony export */   toBlob: () => (/* binding */ toBlob),
/* harmony export */   toCanvas: () => (/* binding */ toCanvas),
/* harmony export */   toJpeg: () => (/* binding */ toJpeg),
/* harmony export */   toPixelData: () => (/* binding */ toPixelData),
/* harmony export */   toPng: () => (/* binding */ toPng),
/* harmony export */   toSvg: () => (/* binding */ toSvg)
/* harmony export */ });
/* harmony import */ var _cloneNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cloneNode */ 4788);
/* harmony import */ var _embedImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedImages */ 3012);
/* harmony import */ var _applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./applyStyleWithOptions */ 9410);
/* harmony import */ var _embedWebFonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embedWebFonts */ 5140);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ 5791);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
};





function getImageSize(node, options = {}) {
  const width = options.width || (0,_util__WEBPACK_IMPORTED_MODULE_4__.getNodeWidth)(node);
  const height = options.height || (0,_util__WEBPACK_IMPORTED_MODULE_4__.getNodeHeight)(node);
  return {
    width,
    height
  };
}
function toSvg(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      width,
      height
    } = getImageSize(node, options);
    return Promise.resolve(node).then(nativeNode => (0,_cloneNode__WEBPACK_IMPORTED_MODULE_0__.cloneNode)(nativeNode, options, true)).then(clonedNode => (0,_embedWebFonts__WEBPACK_IMPORTED_MODULE_3__.embedWebFonts)(clonedNode, options)).then(clonedNode => (0,_embedImages__WEBPACK_IMPORTED_MODULE_1__.embedImages)(clonedNode, options)).then(clonedNode => (0,_applyStyleWithOptions__WEBPACK_IMPORTED_MODULE_2__.applyStyleWithOptions)(clonedNode, options)).then(clonedNode => (0,_util__WEBPACK_IMPORTED_MODULE_4__.nodeToDataURL)(clonedNode, width, height));
  });
}
const dimensionCanvasLimit = 16384; // as per https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#maximum_canvas_size
function checkCanvasDimensions(canvas) {
  if (canvas.width > dimensionCanvasLimit || canvas.height > dimensionCanvasLimit) {
    if (canvas.width > dimensionCanvasLimit && canvas.height > dimensionCanvasLimit) {
      if (canvas.width > canvas.height) {
        canvas.height *= dimensionCanvasLimit / canvas.width;
        canvas.width = dimensionCanvasLimit;
      } else {
        canvas.width *= dimensionCanvasLimit / canvas.height;
        canvas.height = dimensionCanvasLimit;
      }
    } else if (canvas.width > dimensionCanvasLimit) {
      canvas.height *= dimensionCanvasLimit / canvas.width;
      canvas.width = dimensionCanvasLimit;
    } else {
      canvas.width *= dimensionCanvasLimit / canvas.height;
      canvas.height = dimensionCanvasLimit;
    }
  }
}
function toCanvas(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    return toSvg(node, options).then(_util__WEBPACK_IMPORTED_MODULE_4__.createImage).then(img => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const ratio = options.pixelRatio || (0,_util__WEBPACK_IMPORTED_MODULE_4__.getPixelRatio)();
      const {
        width,
        height
      } = getImageSize(node, options);
      const canvasWidth = options.canvasWidth || width;
      const canvasHeight = options.canvasHeight || height;
      canvas.width = canvasWidth * ratio;
      canvas.height = canvasHeight * ratio;
      if (!options.skipAutoScale) {
        checkCanvasDimensions(canvas);
      }
      canvas.style.width = `${canvasWidth}`;
      canvas.style.height = `${canvasHeight}`;
      if (options.backgroundColor) {
        context.fillStyle = options.backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      return canvas;
    });
  });
}
function toPixelData(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      width,
      height
    } = getImageSize(node, options);
    return toCanvas(node, options).then(canvas => {
      const ctx = canvas.getContext('2d');
      return ctx.getImageData(0, 0, width, height).data;
    });
  });
}
function toPng(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    return toCanvas(node, options).then(canvas => canvas.toDataURL());
  });
}
function toJpeg(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    return toCanvas(node, options).then(canvas => canvas.toDataURL('image/jpeg', options.quality || 1));
  });
}
function toBlob(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    return toCanvas(node, options).then(_util__WEBPACK_IMPORTED_MODULE_4__.canvasToBlob);
  });
}
function getFontEmbedCSS(node, options = {}) {
  return __awaiter(this, void 0, void 0, function* () {
    return (0,_embedWebFonts__WEBPACK_IMPORTED_MODULE_3__.getWebFontCSS)(node, options);
  });
}

/***/ }),

/***/ 5791:
/*!***********************************************!*\
  !*** ./node_modules/html-to-image/es/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canvasToBlob: () => (/* binding */ canvasToBlob),
/* harmony export */   createImage: () => (/* binding */ createImage),
/* harmony export */   delay: () => (/* binding */ delay),
/* harmony export */   getExtension: () => (/* binding */ getExtension),
/* harmony export */   getMimeType: () => (/* binding */ getMimeType),
/* harmony export */   getNodeHeight: () => (/* binding */ getNodeHeight),
/* harmony export */   getNodeWidth: () => (/* binding */ getNodeWidth),
/* harmony export */   getPixelRatio: () => (/* binding */ getPixelRatio),
/* harmony export */   isDataUrl: () => (/* binding */ isDataUrl),
/* harmony export */   makeDataUrl: () => (/* binding */ makeDataUrl),
/* harmony export */   nodeToDataURL: () => (/* binding */ nodeToDataURL),
/* harmony export */   parseDataUrlContent: () => (/* binding */ parseDataUrlContent),
/* harmony export */   resolveUrl: () => (/* binding */ resolveUrl),
/* harmony export */   svgToDataURL: () => (/* binding */ svgToDataURL),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   uuid: () => (/* binding */ uuid)
/* harmony export */ });
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
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
};
const WOFF = 'application/font-woff';
const JPEG = 'image/jpeg';
const mimes = {
  woff: WOFF,
  woff2: WOFF,
  ttf: 'application/font-truetype',
  eot: 'application/vnd.ms-fontobject',
  png: 'image/png',
  jpg: JPEG,
  jpeg: JPEG,
  gif: 'image/gif',
  tiff: 'image/tiff',
  svg: 'image/svg+xml'
};
function getExtension(url) {
  const match = /\.([^./]*?)$/g.exec(url);
  return match ? match[1] : '';
}
function getMimeType(url) {
  const extension = getExtension(url).toLowerCase();
  return mimes[extension] || '';
}
function resolveUrl(url, baseUrl) {
  // url is absolute already
  if (url.match(/^[a-z]+:\/\//i)) {
    return url;
  }
  // url is absolute already, without protocol
  if (url.match(/^\/\//)) {
    return window.location.protocol + url;
  }
  // dataURI, mailto:, tel:, etc.
  if (url.match(/^[a-z]+:/i)) {
    return url;
  }
  const doc = document.implementation.createHTMLDocument();
  const base = doc.createElement('base');
  const a = doc.createElement('a');
  doc.head.appendChild(base);
  doc.body.appendChild(a);
  if (baseUrl) {
    base.href = baseUrl;
  }
  a.href = url;
  return a.href;
}
function isDataUrl(url) {
  return url.search(/^(data:)/) !== -1;
}
function makeDataUrl(content, mimeType) {
  return `data:${mimeType};base64,${content}`;
}
function parseDataUrlContent(dataURL) {
  return dataURL.split(/,/)[1];
}
const uuid = function uuid() {
  // generate uuid for className of pseudo elements.
  // We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
  let counter = 0;
  // ref: http://stackoverflow.com/a/6248722/2519373
  const random = () =>
  // eslint-disable-next-line no-bitwise
  `0000${(Math.random() * Math.pow(36, 4) << 0).toString(36)}`.slice(-4);
  return () => {
    counter += 1;
    return `u${random()}${counter}`;
  };
}();
const delay = ms => args => new Promise(resolve => setTimeout(() => resolve(args), ms));
function toArray(arrayLike) {
  const arr = [];
  for (let i = 0, l = arrayLike.length; i < l; i += 1) {
    arr.push(arrayLike[i]);
  }
  return arr;
}
function px(node, styleProperty) {
  const val = window.getComputedStyle(node).getPropertyValue(styleProperty);
  return parseFloat(val.replace('px', ''));
}
function getNodeWidth(node) {
  const leftBorder = px(node, 'border-left-width');
  const rightBorder = px(node, 'border-right-width');
  return node.clientWidth + leftBorder + rightBorder;
}
function getNodeHeight(node) {
  const topBorder = px(node, 'border-top-width');
  const bottomBorder = px(node, 'border-bottom-width');
  return node.clientHeight + topBorder + bottomBorder;
}
function getPixelRatio() {
  let ratio;
  let FINAL_PROCESS;
  try {
    FINAL_PROCESS = process;
  } catch (e) {
    // pass
  }
  const val = FINAL_PROCESS && FINAL_PROCESS.env ? FINAL_PROCESS.env.devicePixelRatio : null;
  if (val) {
    ratio = parseInt(val, 10);
    if (Number.isNaN(ratio)) {
      ratio = 1;
    }
  }
  return ratio || window.devicePixelRatio || 1;
}
function canvasToBlob(canvas) {
  if (canvas.toBlob) {
    return new Promise(resolve => canvas.toBlob(resolve));
  }
  return new Promise(resolve => {
    const binaryString = window.atob(canvas.toDataURL().split(',')[1]);
    const len = binaryString.length;
    const binaryArray = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
      binaryArray[i] = binaryString.charCodeAt(i);
    }
    resolve(new Blob([binaryArray], {
      type: 'image/png'
    }));
  });
}
function createImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.crossOrigin = 'anonymous';
    img.decoding = 'sync';
    img.src = url;
  });
}
function svgToDataURL(svg) {
  return __awaiter(this, void 0, void 0, function* () {
    return Promise.resolve().then(() => new XMLSerializer().serializeToString(svg)).then(encodeURIComponent).then(html => `data:image/svg+xml;charset=utf-8,${html}`);
  });
}
function nodeToDataURL(node, width, height) {
  return __awaiter(this, void 0, void 0, function* () {
    const xmlns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(xmlns, 'svg');
    const foreignObject = document.createElementNS(xmlns, 'foreignObject');
    svg.setAttribute('width', `${width}`);
    svg.setAttribute('height', `${height}`);
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');
    foreignObject.setAttribute('x', '0');
    foreignObject.setAttribute('y', '0');
    foreignObject.setAttribute('externalResourcesRequired', 'true');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(node);
    return svgToDataURL(svg);
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_meetup_meetup_module_ts.js.map