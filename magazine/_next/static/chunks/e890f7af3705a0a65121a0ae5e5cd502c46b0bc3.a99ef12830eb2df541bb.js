(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/tWa":function(t,e,r){"use strict";var n=r("KI45");r("hfKm")(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("/HRN")),u=n(r("WaGi")),o=r("T89o"),l=n(r("Bk/R")),i=/https?:\/\//,s=/\/$/,c=/\/(\w{2}[-|_]\w{2}|\w{2}\/?)$/,f=/\/(\w{2}[-|_]\w{2}|\w{2})\/([\w\d_\-.]+)(\/.*)?/,p=/(www\.ferrari\.com)\/([\w\d_-]+)(\/.*)?/,d=function(){function t(){(0,a.default)(this,t)}return(0,u.default)(t,null,[{key:"stripProtocol",value:function(t){return t.replace(i,"").replace(s,"")}},{key:"stripLocale",value:function(e){var r=t.stripProtocol(e);return f.test(r)?r.replace(f,"/$2$3").replace(s,""):c.test(r)?r.replace(c,"/").replace(s,""):r}},{key:"getApplication",value:function(e){var r=t.stripLocale(e);return p.test(r)?r.replace(p,"$1/$2").replace(s,""):r}},{key:"getStripHost",value:function(e){var r=l.default.host(e);return t.stripProtocol(r)}},{key:"getLinkValue",value:function(t,e){return(0,o.get)(t,e,"-1")}},{key:"getLinkUrl",value:function(e,r){var n=t.getLinkValue(e,r);return t.stripLocale(n)}},{key:"urlContainsOrigin",value:function(t,e){return!(!t||!e||"-1"===t)&&(t===e||-1!==e.indexOf(t))}},{key:"findTree",value:function(e,r){var n=t.stripLocale(r),a=t.getApplication(r),u="";return e.some((function(e,r){return(0,o.get)(e,"menuItems",[]).forEach((function(e,a){var l=t.getLinkUrl(e,"content.link.url");"list-of-links"===e.template?(0,o.get)(e,"content.menuItems",[]).forEach((function(e,l){var i=t.getLinkUrl(e,"link.url");t.urlContainsOrigin(i,n)&&(u="".concat(r,"-").concat(a,"-").concat(l)),(0,o.get)(e,"menuItems.length",0)>0&&e.menuItems.forEach((function(e,o){var i=t.getLinkUrl(e,"link.url");t.urlContainsOrigin(i,n)&&(u="".concat(r,"-").concat(a,"-").concat(l,"-").concat(o))}))})):t.urlContainsOrigin(l,n)&&(u="".concat(r,"-").concat(a))}))})),""===u&&e.some((function(e,r){return(0,o.get)(e,"menuItems",[]).some((function(e,n){var l=t.getLinkUrl(e,"content.link.url"),i=t.getApplication(l);return"list-of-links"===e.template?(0,o.get)(e,"content.menuItems",[]).forEach((function(e,n){var o=t.getLinkUrl(e,"link.url"),l=t.getApplication(o);return!!t.urlContainsOrigin(l,a)&&(u="".concat(r),!0)})):!!t.urlContainsOrigin(i,a)&&(u="".concat(r),!0)}))})),""===u&&e.some((function(e,n){var o=t.stripLocale(r),l=t.getLinkUrl(e,"link.url"),i=t.getApplication(l);return!(!t.urlContainsOrigin(l,o)&&!t.urlContainsOrigin(i,a))&&(u="".concat(n),!0)})),""===u&&e.some((function(e,n){var a=t.getStripHost(r);return t.getStripHost(t.getLinkValue(e,"link.url"))===a&&(u="".concat(n),!0)})),u}}]),t}();e.default=d},Y0NT:function(t,e,r){"use strict";var n=r("KI45"),a=r("Jo+v"),u=r("hfKm"),o=r("G4HQ"),l=r("pbKT");u(e,"__esModule",{value:!0}),e.default=void 0;var i=n(r("ln6h")),s=n(r("eVuF")),c=n(r("/HRN")),f=n(r("WaGi")),p=n(r("N9n2")),d=n(r("ZDA2")),h=n(r("/+P4")),v=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var r=S(e);if(r&&r.has(t))return r.get(t);var n={},o=u&&a;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var i=o?a(t,l):null;i&&(i.get||i.set)?u(n,l,i):n[l]=t[l]}n.default=t,r&&r.set(t,n);return n}(r("q1tI")),g=r("ANjH"),k=n(r("SbWC")),m=n(r("8Kt/")),y=n(r("kQFM")),w=n(r("SHU5")),E=(n(r("+JqG")),n(r("hzb8"))),C=r("8ANe"),b=n(r("DDmF")),L=n(r("WZaA")),O=r("T89o"),I=n(r("qyhG")),M=n(r("9qRu")),N=r("gGHL"),P=r("mJQZ");r("3Eu1");function S(t){if("function"!==typeof o)return null;var e=new o,r=new o;return(S=function(t){return t?r:e})(t)}var A=v.default.createElement;function U(t){var e=function(){if("undefined"===typeof Reflect||!l)return!1;if(l.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(l(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,h.default)(t);if(e){var a=(0,h.default)(this).constructor;r=l(n,arguments,a)}else r=n.apply(this,arguments);return(0,d.default)(this,r)}}var H=r("pY8v"),_=function(t){(0,p.default)(r,t);var e=U(r);function r(t){var n;return(0,c.default)(this,r),(n=e.call(this,t)).state={splash:!0},n}return(0,f.default)(r,null,[{key:"getInitialProps",value:function(t){var e,r,n,a,u,o,l,c,f,p,d;return i.default.async((function(h){for(;;)switch(h.prev=h.next){case 0:return t.req,e=t.res,r=t.err,n=t.store,a=t.isServer,u=[],o=e?e.statusCode:r?r.statusCode:null,l=window.location.href.split("/"),c=l[1].split("?")[0],f=(0,O.get)(H,c,!1),a&&f&&(u.push(I.default.superheader(c).then((function(t){return t.data.results})).then((function(t){var e=t.content;n.dispatch((0,N.setPillars)(e.pillars))})).catch((function(t){return(0,M.default)(t)}))),u.push(I.default.superfooter(c).then((function(t){return t.data.results})).then((function(t){var e=t.content;n.dispatch((0,P.setFooterData)(e))})).catch((function(t){return(0,M.default)(t)})))),h.next=9,i.default.awrap(s.default.all(u));case 9:p=h.sent,d=r;try{d=JSON.parse(r.message),e.status(d.status)}catch(v){}return h.abrupt("return",{statusCode:(0,O.get)(d,"status",!1)?d.status:o,localeUrl:c,pageData:p[0],error:{stack:(0,O.get)(r,"stack",!1),message:(0,O.get)(d,"message",!1)}});case 13:case"end":return h.stop()}}),null,null,null,s.default)}}]),(0,f.default)(r,[{key:"componentDidMount",value:function(){var t=this;setTimeout((function(){t.hideSplash()}),1e3)}},{key:"hideSplash",value:function(){this.setState({splash:!1})}},{key:"render",value:function(){var t,e=this.props,r=e.statusCode,n=e.localeUrl,a=this.state.splash;return t=this.errorStatus?{where:"SERVER:",statusCode:this.errorStatus,errorMessage:'An error "'.concat(this.errorMessage,'" occurred on server')}:{where:"CLIENT:",statusCode:r||"Unknown Status Code.",errorMessage:'An error "'.concat(r,'" occurred on client')},console.log("[\x1b[31m ERROR \x1b[0m]",t.where,t.errorMessage),this.stack&&console.error(this.stack),A("div",null,A(m.default,null),A(w.default,null),A(C.Menu,null),A(E.default,{visible:a}),A("div",{className:"page-menu-hook"},A(b.default,{error:t,localeUrl:n}),A(C.Footer,null)))}},{key:"errorMessage",get:function(){return(0,O.get)(this.props,"error.message",!1)}},{key:"errorStatus",get:function(){return(0,O.get)(this.props,"error.errorStatus",!1)}},{key:"stack",get:function(){return(0,O.get)(this.props,"error.stack",!1)}},{key:"error",get:function(){return(0,O.get)(this.props,"error",!1)}}]),r}(v.Component),R=(0,k.default)(y.default,(function(t){return{}}),(function(t){return(0,g.bindActionCreators)({},t)}))((0,L.default)(_));e.default=R},"s+xg":function(t,e,r){"use strict";var n=r("KI45"),a=r("hfKm"),u=r("2Eek"),o=r("XoMD"),l=r("Jo+v"),i=r("4mXO"),s=r("pLtp"),c=r("pbKT");a(e,"__esModule",{value:!0}),e.default=function(t){var e=function(e){(0,v.default)(n,e);var r=function(t){var e=function(){if("undefined"===typeof Reflect||!c)return!1;if(c.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(c(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=(0,k.default)(t);if(e){var a=(0,k.default)(this).constructor;r=c(n,arguments,a)}else r=n.apply(this,arguments);return(0,g.default)(this,r)}}(n);function n(){return(0,d.default)(this,n),r.apply(this,arguments)}return(0,h.default)(n,[{key:"render",value:function(){var e=this.props,r=this.hasError,n=e.localeUrl;return r?C(w.default,{error:e.pageError,localeUrl:n}):C(t,this.props)}},{key:"hasError",get:function(){return null!==this.props.pageError}}],[{key:"getInitialProps",value:function(e){var r,n,a;return p.default.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(r=window.location.href.split("/"),n=r[1].split("?")[0]||"en-EN",a={},!t.getInitialProps){u.next=7;break}return u.next=6,p.default.awrap(t.getInitialProps(e));case 6:a=u.sent;case 7:return u.abrupt("return",L({},a,{localeUrl:n}));case 8:case"end":return u.stop()}}),null,null,null,f.default)}}]),n}(y.default.Component);(0,m.default)(e,"defaultProps",{pageError:null});return(0,E.connect)((function(t){return{pageError:t.error.error}}),null)(e)};var f=n(r("eVuF")),p=n(r("ln6h")),d=n(r("/HRN")),h=n(r("WaGi")),v=n(r("N9n2")),g=n(r("ZDA2")),k=n(r("/+P4")),m=n(r("xHqa")),y=n(r("q1tI")),w=n(r("Y0NT")),E=(r("ANjH"),r("/MKj")),C=y.default.createElement;function b(t,e){var r=s(t);if(i){var n=i(t);e&&(n=n.filter((function(e){return l(t,e).enumerable}))),r.push.apply(r,n)}return r}function L(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){(0,m.default)(t,e,r[e])})):o?u(t,o(r)):b(Object(r)).forEach((function(e){a(t,e,l(r,e))}))}return t}},t3G4:function(t,e,r){"use strict";var n=r("KI45");r("hfKm")(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("8+Nu")),u=n(r("LR/J")),o=r("T89o"),l={setOrganismsMultiNaming:function(t,e){return(0,u.default)(e).forEach((function(e){var r=(0,a.default)(e,2),n=r[0],u=r[1];t[n]=u,t[(0,o.camelCase)(n)]=u,t[(0,o.kebabCase)(n)]=u})),t},setEditorialNaming:function(t,e){return["Media","Audio","Gallery","Groups","Image","Video","Data"].forEach((function(r){t["Editorial".concat(r)]=e})),t},pageTemplate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t){case"WithSidebar":return e.ContactPage;case"HiddenFooter":return e.HiddenFooterPage;default:return e.DefaultPage}}};e.default=l}}]);