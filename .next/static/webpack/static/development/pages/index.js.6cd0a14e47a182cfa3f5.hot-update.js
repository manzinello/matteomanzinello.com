webpackHotUpdate("static/development/pages/index.js",{

/***/ "../mailgo/dist/mailgo.min.js":
/*!************************************!*\
  !*** ../mailgo/dist/mailgo.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){function e(e,t){var o=0<arguments.length&&void 0!==e?e:j,C=1<arguments.length?t:void 0;if(o===j){if(C.href&&C.href.toLowerCase().startsWith(k)){S=decodeURIComponent(C.href.split("?")[0].split(k)[1].trim());var E=new URL(C.href).searchParams;_=E.get("cc"),M=E.get("bcc"),U=E.get("subject"),I=E.get("body")}else S=C.getAttribute("data-address")+"@"+C.getAttribute("data-domain"),new URL(k+encodeURIComponent(S)),_=C.getAttribute("data-cc-address")+"@"+C.getAttribute("data-cc-domain"),M=C.getAttribute("data-bcc-address")+"@"+C.getAttribute("data-bcc-domain"),U=C.getAttribute("data-subject"),I=C.getAttribute("data-body");if(!de(S.split(",")))return;_&&!de(_.split(","))&&(_=""),M&&!de(M.split(","))&&(M=""),a.innerHTML=S.split(",").join("<br/>"),_?(i.style.display="block",c.innerHTML=_.split(",").join("<br/>")):i.style.display="none",M?(d.style.display="block",s.innerHTML=M.split(",").join("<br/>")):d.style.display="none",U?(l.style.display="block",m.textContent=U):l.style.display="none",I?(r.style.display="block",p.textContent=I):r.style.display="none",u.addEventListener("click",W),b.addEventListener("click",H),R=te(S),f.addEventListener("click",D),w.addEventListener("click",(function(){return $(S)}))}o===A&&(C.href&&C.href.toLowerCase().startsWith(L)?T=decodeURIComponent(C.href.split("?")[0].split(L)[1].trim()):C.href&&C.href.toLowerCase().startsWith(z)?T=decodeURIComponent(C.href.split("?")[0].split(z)[1].trim()):C.hasAttribute("data-tel")&&(T=C.getAttribute("data-tel"),C.getAttribute("data-msg")),C.hasAttribute("data-telegram")&&(O=C.getAttribute("data-telegram")),C.hasAttribute("data-skype")&&(P=C.getAttribute("data-skype")),n.innerHTML=T,g.addEventListener("click",F),O&&(ne("m-tg","block"),h.addEventListener("click",B)),x.addEventListener("click",Z),v.addEventListener("click",G),y.addEventListener("click",(function(){return $(T)}))),J(o),document.addEventListener("keydown",q)}function t(e,t){var o=1<arguments.length&&void 0!==t?t:j,a=e.href;return o===j?a&&a.toLowerCase().startsWith(k)&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-address")&&(a&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")):o===A&&(a&&(a.toLowerCase().startsWith(L)||a.toLowerCase().startsWith(z))&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-tel")&&a&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo"))}function o(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}var a,n,i,d,l,r,c,s,m,p,u,b,f,h,g,x,v,w,y,C,k="mailto:",L="tel:",z="callto:",j="mail",A="tel",E="javascript:void(0);",N="span",S="",R="",_="",M="",U="",I="",T="",O="",P="",W=function(){var e="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(S);_&&(e=e.concat("&cc="+encodeURIComponent(_))),M&&(e=e.concat("&bcc="+encodeURIComponent(M))),U&&(e=e.concat("&subject="+U)),I&&(e=e.concat("&body="+I)),window.open(e,"_blank"),K()},H=function(){var e="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(S);U&&(e=e.concat("&subject="+U)),I&&(e=e.concat("&body="+I)),window.open(e,"_blank"),K()},D=function(){ee(R),K()},B=function(){var e="https://t.me/"+O;window.open(e,"_blank"),K()},Z=function(){var e="skype:"+(""!==P?P:T);window.open(e,"_blank"),K()},F=function(){var e="https://wa.me/"+T;window.open(e,"_blank"),K()},G=function(){var e="tel:"+T;window.open(e),K()},$=function(e){var t;le(e),(t=Q(j)?w:y).textContent="copied",setTimeout((function(){t.textContent="copy",K()}),999)},q=function(e){if(Q(j))switch(e.keyCode){case 27:K();break;case 71:W();break;case 79:H();break;case 32:case 13:D();break;case 67:$(S);break;default:return}else if(Q(A))switch(e.keyCode){case 27:K();break;case 84:B();break;case 87:F();break;case 32:case 13:G();break;case 67:$(T);break;default:return}},J=function(e){var t=0<arguments.length&&void 0!==e?e:j;t!==j?t!==A||ne("mailgo-tel","flex"):ne("mailgo","flex")},K=function(){ne("mailgo","none"),ne("mailgo-tel","none"),document.removeEventListener("keydown",q)},Q=function(e){var t=0<arguments.length&&void 0!==e?e:j;return t===j?"flex"===ae("mailgo"):t===A&&"flex"===ae("mailgo-tel")},V=function(){var e=X("a");return e.href="https://mailgo.js.org?ref=mailgo-modal",e.className="m-by",e.target="_blank",e.rel="noopener noreferrer",e.appendChild(Y("mailgo.js.org")),e},X=function(e){var t=0<arguments.length&&void 0!==e?e:"div";return document.createElement(t)},Y=function(e){return document.createTextNode(e)},ee=function(e){return window.location.href=k+atob(e)},te=function(e){return btoa(e)},oe=function(e){return document.getElementById(e)},ae=function(e){return oe(e).style.display},ne=function(e,t){return oe(e).style.display=t},ie=function(e){for(var t=[];e;){if(t.push(e),"HTML"===e.tagName)return t.push(document),t.push(window),t;e=e.parentElement}},de=function(e){return e.every(o)},le=function(e){var t=X("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t);var o=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);t.select(),document.execCommand("copy"),document.body.removeChild(t),o&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(o))};(C=X("style")).id="mailgo-style",C.type="text/css",C.appendChild(Y('.m-modal{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.m-modal a,.m-modal p,.m-modal span,.m-modal strong{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";text-rendering:optimizeLegibility}.m-modal strong{font-weight:700}.m-modal .m-modal-back{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:rgba(32,35,42,.75);opacity:.8}.m-modal .m-modal-content{position:relative;z-index:10002;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:.97;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;-webkit-box-shadow:0 3px 20px rgba(32,35,42,.5);-moz-box-shadow:0 3px 20px rgba(32,35,42,.5);box-shadow:0 3px 20px rgba(32,35,42,.5);color:#4a4a4a;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:auto;padding:20px;-webkit-transition:.5s -webkit-box-shadow;transition:.5s -webkit-box-shadow;-o-transition:.5s box-shadow;-moz-transition:.5s box-shadow,.5s -moz-box-shadow;transition:.5s box-shadow;transition:.5s box-shadow,.5s -webkit-box-shadow,.5s -moz-box-shadow}.m-modal .m-modal-content:hover{opacity:1;-webkit-box-shadow:0 7px 20px rgba(32,35,42,.85);-moz-box-shadow:0 7px 20px rgba(32,35,42,.85);box-shadow:0 7px 20px rgba(32,35,42,.85)}.m-modal .m-modal-content .m-title{margin-bottom:8px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.m-modal .m-modal-content .m-details{margin-bottom:10px}.m-modal .m-modal-content .m-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.m-modal .m-modal-content a{padding:10px;color:#4a4a4a;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;text-decoration:none}.m-modal .m-modal-content a.m-gmail{color:#d44638}.m-modal .m-modal-content a.m-gmail:hover{background-color:rgba(212,70,56,.08);color:#d44638}.m-modal .m-modal-content a.m-outlook{color:#0072c6}.m-modal .m-modal-content a.m-outlook:hover{background-color:rgba(0,114,198,.08);color:#0072c6}.m-modal .m-modal-content a.m-tg{color:#08c}.m-modal .m-modal-content a.m-tg:hover{background-color:rgba(0,114,198,.08);color:#08c}.m-modal .m-modal-content a.m-wa{color:#00bfa5}.m-modal .m-modal-content a.m-wa:hover{background-color:rgba(0,191,165,.08);color:#00bfa5}.m-modal .m-modal-content a.m-skype{color:#00aff0}.m-modal .m-modal-content a.m-skype:hover{background-color:rgba(0,175,240,.08);color:#00aff0}.m-modal .m-modal-content a.m-copy{padding:16px 10px;font-size:16px}.m-modal .m-modal-content a.m-copy:hover,.m-modal .m-modal-content a.m-default:hover{background-color:rgba(0,0,0,.08);color:#4a4a4a}.m-modal .m-modal-content a.m-by{font-size:8px;margin-top:.8rem;padding:5px;color:#4a4a4a;opacity:.5}.m-modal .m-modal-content a.m-by:hover{opacity:1}.m-modal .m-modal-content .w-500{font-weight:500}')),document.head.appendChild(C),document.addEventListener("DOMContentLoaded",(function(){var e=X();e.style.display="none",e.id="mailgo",e.classList.add("m-modal");var t=X();t.className="m-modal-back",e.appendChild(t);var o=X();o.className="m-modal-content",e.appendChild(o),(a=X("strong")).id="m-title",a.className="m-title",o.appendChild(a);var C=X();C.id="m-details",C.className="m-details",(i=X("p")).id="m-cc";var k=X(N);k.className="w-500",k.appendChild(Y("cc ")),(c=X(N)).id="m-cc-value",i.appendChild(k),i.appendChild(c),C.appendChild(i),(d=X("p")).id="m-bcc";var L=X(N);L.className="w-500",L.appendChild(Y("bcc ")),(s=X(N)).id="m-bcc-value",d.appendChild(L),d.appendChild(s),C.appendChild(d),(l=X("p")).id="m-subject";var z=X(N);z.className="w-500",z.appendChild(Y("subject ")),(m=X(N)).id="m-subject-value",l.appendChild(z),l.appendChild(m),C.appendChild(l),(r=X("p")).id="m-body";var j=X(N);j.className="w-500",j.appendChild(Y("body ")),(p=X(N)).id="m-body-value",r.appendChild(j),r.appendChild(p),C.appendChild(r),o.appendChild(C),(u=X("a")).id="m-gmail",u.href=E,u.classList.add("m-open"),u.classList.add("m-gmail"),u.appendChild(Y("open in "));var A=X(N);A.className="w-500",A.appendChild(Y("Gmail")),u.appendChild(A),o.appendChild(u),(b=X("a")).id="m-outlook",b.href=E,b.classList.add("m-open"),b.classList.add("m-outlook"),b.appendChild(Y("open in "));var S=X(N);S.className="w-500",S.appendChild(Y("Outlook")),b.appendChild(S),o.appendChild(b),(f=X("a")).id="m-open",f.href=E,f.classList.add("m-open"),f.classList.add("m-default");var R=X(N);R.className="w-500",R.appendChild(Y("open")),f.appendChild(R),f.appendChild(Y(" default")),o.appendChild(f),(w=X("a")).id="m-copy",w.href=E,w.classList.add("m-copy"),w.classList.add("w-500"),w.appendChild(Y("copy")),o.appendChild(w),o.appendChild(V()),document.body.appendChild(e),t.addEventListener("click",K);var _=X();_.style.display="none",_.id="mailgo-tel",_.classList.add("m-modal");var M=X();M.className="m-modal-back",_.appendChild(M);var U=X();U.className="m-modal-content",_.appendChild(U),(n=X("strong")).id="m-tel-title",n.className="m-title",U.appendChild(n),(h=X("a")).id="m-tg",h.href=E,h.classList.add("m-open"),h.classList.add("m-tg"),h.style.display="none",h.appendChild(Y("open in "));var I=X(N);I.className="w-500",I.appendChild(Y("Telegram")),h.appendChild(I),U.appendChild(h),(g=X("a")).id="m-wa",g.href=E,g.classList.add("m-open"),g.classList.add("m-wa"),g.appendChild(Y("open in "));var T=X(N);T.className="w-500",T.appendChild(Y("WhatsApp")),g.appendChild(T),U.appendChild(g),(x=X("a")).id="m-skype",x.href=E,x.classList.add("m-open"),x.classList.add("m-skype"),x.appendChild(Y("open in "));var O=X(N);O.className="w-500",O.appendChild(Y("Skype")),x.appendChild(O),U.appendChild(x),(v=X("a")).id="m-call",v.href=E,v.classList.add("m-open"),v.classList.add("m-default");var P=X(N);P.className="w-500",P.appendChild(Y("call")),v.appendChild(P),v.appendChild(Y(" as default")),U.appendChild(v),(y=X("a")).id="m-tel-copy",y.href=E,y.classList.add("m-copy"),y.classList.add("w-500"),y.appendChild(Y("copy")),U.appendChild(y),U.appendChild(V()),document.body.appendChild(_),M.addEventListener("click",K)})),document.addEventListener("click",(function(o){if(document.contains(oe("mailgo"))&&document.contains(oe("mailgo-tel"))&&!Q(j)&&!Q(A)){var a=o.composedPath&&o.composedPath()||ie(o.target);a&&a.forEach((function(a){if(!(a instanceof HTMLDocument||a instanceof Window))return t(a,j)?(o.preventDefault(),void e(j,a)):t(a,A)?(o.preventDefault(),void e(A,a)):void 0}))}}))};window&&"undefined"!=typeof window&&a();var n=a();t.default=n}])}));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _components_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Icons */ "./src/components/Icons.tsx");
/* harmony import */ var _mailgo_dist_mailgo_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mailgo/dist/mailgo.min.js */ "../mailgo/dist/mailgo.min.js");
/* harmony import */ var _mailgo_dist_mailgo_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mailgo_dist_mailgo_min_js__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/Users/matteo/git/matteomanzinello.com/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




 // my project
// import "mailgo";
// working on mailgo for nextjs...
// also this one, but it is not good as mailgo
// import "@fab-ulous/github";
// working on fab-ulous for nextjs...

var Index = function Index() {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _mailgo_dist_mailgo_min_js__WEBPACK_IMPORTED_MODULE_4___default()();
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "manzinello-app",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    size: 150,
    src: "/images/matteomanzinello.jpg",
    className: "manzinello-avatar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "manzinello-matteo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "matteo ", __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 18
    }
  }, "manzinello")), __jsx("p", {
    className: "manzinello-description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "27, a ", __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "creative"), ", a ", __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 38
    }
  }, "computer engineer"), ", a", " ", __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "freelance developer")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }),
    href: "mailto:matteo@manzinello.dev",
    target: "_blank",
    shape: "round",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "matteo@manzinello.dev"), __jsx(_components_Icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    href: "https://manzinello.dev",
    type: "link",
    target: "_blank",
    shape: "round",
    size: "small",
    className: "manzinello-dev",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CodeOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }),
    ghost: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, " manzinello.dev")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
    status: "processing",
    text: "Monza e Brianza, Italia",
    className: "manzinello-place-badge",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "manzinello-piva",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Tag"], {
    color: "#424855",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, "P.IVA 10310610968"))),  false && false);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.6cd0a14e47a182cfa3f5.hot-update.js.map