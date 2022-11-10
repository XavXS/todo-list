(()=>{"use strict";class t{constructor(t,e,n,r,a){this._title=t,this._desc=e,this._due=n,this._prio=r,this._finished=a}get title(){return this._title}set title(t){this._title=t}get desc(){return this._desc}set desc(t){this._desc=t}get due(){return this._due}set due(t){this._due=t}get prio(){return this._prio}set prio(t){this._prio=t}get finished(){return this._finished}set finished(t){this._finished=t}}class e{_tasks=[];constructor(t,e){this._title=t,this._desc=e,this._tasks=[]}get title(){return this._title}set title(t){this._title=t}get desc(){return this._desc}set desc(t){this._desc=t}createTask(){let e=new t("New Task","Enter Description",new Date,1,!1);return this._tasks.push(e),e}getTasks(){return this._tasks}}class n{constructor(t,e,n){this._title=t,this._desc=e,this._color=n}static defaultColor="#d6d68d";get title(){return this._title}set title(t){this._title=t}get desc(){return this._desc}set desc(t){this._desc=t}get color(){return this._color}set color(t){this._color=t}}Math.pow(10,8);var r=36e5;function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(t,e){var n;a(1,arguments);var r=i(null!==(n=null==e?void 0:e.additionalDigits)&&void 0!==n?n:2);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var o,u=d(t);if(u.date){var s=h(u.date,r);o=f(s.restDateString,s.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var l,c=o.getTime(),m=0;if(u.time&&(m=g(u.time),isNaN(m)))return new Date(NaN);if(!u.timezone){var v=new Date(c+m),w=new Date(0);return w.setFullYear(v.getUTCFullYear(),v.getUTCMonth(),v.getUTCDate()),w.setHours(v.getUTCHours(),v.getUTCMinutes(),v.getUTCSeconds(),v.getUTCMilliseconds()),w}return l=p(u.timezone),isNaN(l)?new Date(NaN):new Date(c+m+l)}var u={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},s=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function d(t){var e,n={},r=t.split(u.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],u.timeZoneDelimiter.test(n.date)&&(n.date=t.split(u.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var a=u.timezone.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}function h(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function f(t,e){if(null===e)return new Date(NaN);var n=t.match(s);if(!n)return new Date(NaN);var r=!!n[4],a=m(n[1]),i=m(n[2])-1,o=m(n[3]),u=m(n[4]),l=m(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,l)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,u,l):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(w[e]||(b(t)?29:28))}(e,i,o)&&function(t,e){return e>=1&&e<=(b(t)?366:365)}(e,a)?(c.setUTCFullYear(e,i,Math.max(a,o)),c):new Date(NaN)}function m(t){return t?parseInt(t):1}function g(t){var e=t.match(l);if(!e)return NaN;var n=v(e[1]),a=v(e[2]),i=v(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,a,i)?n*r+6e4*a+1e3*i:NaN}function v(t){return t&&parseFloat(t.replace(",","."))||0}function p(t){if("Z"===t)return 0;var e=t.match(c);if(!e)return 0;var n="+"===e[1]?-1:1,a=parseInt(e[2]),i=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,i)?n*(a*r+6e4*i):NaN}var w=[31,null,31,30,31,30,31,31,30,31,30,31];function b(t){return t%400==0||t%4==0&&t%100!=0}let y=[],k=[],T=[];function C(){localStorage.setItem("projects",JSON.stringify(y))}function S(){localStorage.setItem("tasks",JSON.stringify(k))}function D(){localStorage.setItem("notes",JSON.stringify(T))}function x(){return k}function M(){return y}function E(){return T}function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function U(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===N(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function L(t){a(1,arguments);var e=U(t);return e.setHours(0,0,0,0),e}function q(t,e){a(2,arguments);var n=L(t),r=L(e);return n.getTime()===r.getTime()}var Y={};function P(){return Y}function _(t,e){var n,r,o,u,s,l,c,d;a(1,arguments);var h=P(),f=i(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.weekStartsOn)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==r?r:null===(c=h.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=U(t),g=m.getDay(),v=(g<f?7:0)+g-f;return m.setDate(m.getDate()-v),m.setHours(0,0,0,0),m}function W(t,e,n){a(2,arguments);var r=_(t,n),i=_(e,n);return r.getTime()===i.getTime()}function O(t,e){a(2,arguments);var n=U(t),r=U(e);return n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()}function H(t,e){a(2,arguments);var n=U(t),r=U(e);return n.getFullYear()===r.getFullYear()}function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function j(t){return a(1,arguments),t instanceof Date||"object"===F(t)&&"[object Date]"===Object.prototype.toString.call(t)}function z(t){if(a(1,arguments),!j(t)&&"number"!=typeof t)return!1;var e=U(t);return!isNaN(Number(e))}function A(t,e){a(2,arguments);var n=U(t).getTime(),r=i(e);return new Date(n+r)}function I(t,e){a(2,arguments);var n=i(e);return A(t,-n)}var G=864e5;function Q(t){a(1,arguments);var e=1,n=U(t),r=n.getUTCDay(),i=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-i),n.setUTCHours(0,0,0,0),n}function R(t){a(1,arguments);var e=U(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=Q(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var u=Q(o);return e.getTime()>=i.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function J(t){a(1,arguments);var e=R(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=Q(n);return r}var X=6048e5;function B(t,e){var n,r,o,u,s,l,c,d;a(1,arguments);var h=P(),f=i(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.weekStartsOn)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==o?o:h.weekStartsOn)&&void 0!==r?r:null===(c=h.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=U(t),g=m.getUTCDay(),v=(g<f?7:0)+g-f;return m.setUTCDate(m.getUTCDate()-v),m.setUTCHours(0,0,0,0),m}function Z(t,e){var n,r,o,u,s,l,c,d;a(1,arguments);var h=U(t),f=h.getUTCFullYear(),m=P(),g=i(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:m.firstWeekContainsDate)&&void 0!==r?r:null===(c=m.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(g>=1&&g<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var v=new Date(0);v.setUTCFullYear(f+1,0,g),v.setUTCHours(0,0,0,0);var p=B(v,e),w=new Date(0);w.setUTCFullYear(f,0,g),w.setUTCHours(0,0,0,0);var b=B(w,e);return h.getTime()>=p.getTime()?f+1:h.getTime()>=b.getTime()?f:f-1}function $(t,e){var n,r,o,u,s,l,c,d;a(1,arguments);var h=P(),f=i(null!==(n=null!==(r=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==o?o:h.firstWeekContainsDate)&&void 0!==r?r:null===(c=h.locale)||void 0===c||null===(d=c.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),m=Z(t,e),g=new Date(0);g.setUTCFullYear(m,0,f),g.setUTCHours(0,0,0,0);var v=B(g,e);return v}var V=6048e5;function K(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const tt=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return K("yy"===e?r%100:r,e.length)},et=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):K(n+1,2)},nt=function(t,e){return K(t.getUTCDate(),e.length)},rt=function(t,e){return K(t.getUTCHours()%12||12,e.length)},at=function(t,e){return K(t.getUTCHours(),e.length)},it=function(t,e){return K(t.getUTCMinutes(),e.length)},ot=function(t,e){return K(t.getUTCSeconds(),e.length)},ut=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return K(Math.floor(r*Math.pow(10,n-3)),e.length)};function st(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=e||"";return n+String(a)+o+K(i,2)}function lt(t,e){return t%60==0?(t>0?"-":"+")+K(Math.abs(t)/60,2):ct(t,e)}function ct(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+K(Math.floor(a/60),2)+n+K(a%60,2)}const dt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return tt(t,e)},Y:function(t,e,n,r){var a=Z(t,r),i=a>0?a:1-a;return"YY"===e?K(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):K(i,e.length)},R:function(t,e){return K(R(t),e.length)},u:function(t,e){return K(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return K(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return K(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return et(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return K(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){a(1,arguments);var n=U(t),r=B(n,e).getTime()-$(n,e).getTime();return Math.round(r/V)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):K(i,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=U(t),n=Q(e).getTime()-J(e).getTime();return Math.round(n/X)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):K(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):nt(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=U(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),i=n-r;return Math.floor(i/G)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):K(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return K(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return K(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return K(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return rt(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):at(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):K(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):K(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):it(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):ot(t,e)},S:function(t,e){return ut(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return lt(a);case"XXXX":case"XX":return ct(a);default:return ct(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return lt(a);case"xxxx":case"xx":return ct(a);default:return ct(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+st(a,":");default:return"GMT"+ct(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+st(a,":");default:return"GMT"+ct(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return K(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return K((r._originalDate||t).getTime(),e.length)}};var ht=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},ft=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},mt={p:ft,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return ht(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",ht(a,e)).replace("{{time}}",ft(i,e))}};const gt=mt;function vt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var pt=["D","DD"],wt=["YY","YYYY"];function bt(t){return-1!==pt.indexOf(t)}function yt(t){return-1!==wt.indexOf(t)}function kt(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Tt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Ct(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var St,Dt={date:Ct({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Ct({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Ct({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Mt(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=t.formattingValues[i]||t.formattingValues[a]}else{var o=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[o]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function Et(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(a);if(!i)return null;var o,u=i[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(s)?Ut(s,(function(t){return t.test(u)})):Nt(s,(function(t){return t.test(u)}));o=t.valueCallback?t.valueCallback(l):l,o=n.valueCallback?n.valueCallback(o):o;var c=e.slice(u.length);return{value:o,rest:c}}}function Nt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Ut(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const Lt={code:"en-US",formatDistance:function(t,e,n){var r,a=Tt[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Dt,formatRelative:function(t,e,n,r){return xt[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Mt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Mt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:Mt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Mt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Mt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(St={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(St.matchPattern);if(!n)return null;var r=n[0],a=t.match(St.parsePattern);if(!a)return null;var i=St.valueCallback?St.valueCallback(a[0]):a[0];i=e.valueCallback?e.valueCallback(i):i;var o=t.slice(r.length);return{value:i,rest:o}}),era:Et({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Et({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Et({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Et({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Et({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var qt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Yt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Pt=/^'([^]*?)'?$/,_t=/''/g,Wt=/[a-zA-Z]/;function Ot(t){var e=t.match(Pt);return e?e[1].replace(_t,"'"):t}let Ht,Ft,jt,zt,At,It,Gt,Qt;function Rt(){let t=document.querySelector("#content");t.textContent="",t.appendChild(Ht),t.appendChild(Ft),Jt(zt||document.querySelector("#day"))}function Jt(t){document.querySelectorAll(".time").forEach((t=>t.classList.remove("active"))),zt=t,t.classList.add("active"),function(t){let e=x(),n=M(),r=e;switch(n.forEach((t=>{r=r.concat(t.getTasks())})),Ft.textContent="",t){case"day":r=r.filter((t=>function(t){return a(1,arguments),q(t,Date.now())}(t.due)));break;case"week":r=r.filter((t=>function(t,e){return a(1,arguments),W(t,Date.now(),e)}(t.due)));break;case"month":r=r.filter((t=>function(t){return a(1,arguments),O(Date.now(),t)}(t.due)));break;case"year":r=r.filter((t=>function(t){return a(1,arguments),H(t,Date.now())}(t.due)))}r.sort(((t,e)=>t.due-e.due)),r.forEach((t=>Ft.appendChild(Xt(t)))),Ft.appendChild(jt)}(t.id)}function Xt(t){let e=document.createElement("div");e.classList.add("task"),e.innerHTML="<div class='basic'><input type='text' class='title'><div class='actions'><span>Due: <input type='date' class='due'></span><label class='expand-label'><input type='checkbox' class='expand'><span></span></label><label class='finished-label'><input type='checkbox' class='finished'><span></span></label></div><button class='remove'>✖</button></div><div class='details'><div class='priorities'><button class='priority p1'>1</button><button class='priority p2'>2</button><button class='priority p3'>3</button><button class='priority p4'>4</button><button class='priority p5'>5</button></div><textarea class='description'></textarea></div>";let n=e.querySelector(".title");n.value=t.title,n.addEventListener("change",(e=>{t.title=e.target.value,S(),C()}));let r=e.querySelector(".due");r.value=function(t,e,n){var r,o,u,s,l,c,d,h,f,m,g,v,p,w,b,y,k,T;a(2,arguments);var C=String(e),S=P(),D=null!==(r=null!==(o=null==n?void 0:n.locale)&&void 0!==o?o:S.locale)&&void 0!==r?r:Lt,x=i(null!==(u=null!==(s=null!==(l=null!==(c=null==n?void 0:n.firstWeekContainsDate)&&void 0!==c?c:null==n||null===(d=n.locale)||void 0===d||null===(h=d.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==l?l:S.firstWeekContainsDate)&&void 0!==s?s:null===(f=S.locale)||void 0===f||null===(m=f.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:1);if(!(x>=1&&x<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var M=i(null!==(g=null!==(v=null!==(p=null!==(w=null==n?void 0:n.weekStartsOn)&&void 0!==w?w:null==n||null===(b=n.locale)||void 0===b||null===(y=b.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==p?p:S.weekStartsOn)&&void 0!==v?v:null===(k=S.locale)||void 0===k||null===(T=k.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==g?g:0);if(!(M>=0&&M<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!D.localize)throw new RangeError("locale must contain localize property");if(!D.formatLong)throw new RangeError("locale must contain formatLong property");var E=U(t);if(!z(E))throw new RangeError("Invalid time value");var N=vt(E),L=I(E,N),q={firstWeekContainsDate:x,weekStartsOn:M,locale:D,_originalDate:E};return C.match(Yt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,gt[e])(t,D.formatLong):t})).join("").match(qt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return Ot(r);var i=dt[a];if(i)return null!=n&&n.useAdditionalWeekYearTokens||!yt(r)||kt(r,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!bt(r)||kt(r,e,String(t)),i(L,r,D.localize,q);if(a.match(Wt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("")}(t.due,"yyyy-MM-dd"),r.addEventListener("change",(e=>{let n=o(e.target.value);isNaN(n)||(t.due=n,S(),C())})),e.querySelector(".expand").addEventListener("change",(n=>{n.target.checked?(e.classList.add("expanded"),e.style=""):(e.classList.remove("expanded"),e.style.backgroundColor="var(--p"+t.prio+"-color)")}));let u=e.querySelector(".finished");u.checked=t.finished,t.finished&&e.classList.add("done"),u.addEventListener("change",(n=>{n.target.checked?(t.finished=!0,e.classList.add("done")):(t.finished=!1,e.classList.remove("done")),S(),C()})),e.querySelector(".remove").addEventListener("click",(n=>{e.remove(),function(t){const e=k.indexOf(t);if(e>-1)return k.splice(e,1),void S();for(let e=0;e<y.length;++e){let n=y[e].getTasks(),r=n.indexOf(t);if(r>-1)return n.splice(r,1),void C()}}(t)}));let s=e.querySelector(".description");s.value=t.desc,s.addEventListener("change",(e=>{t.desc=s.value,S(),C()}));let l=e.querySelectorAll(".priority");return l.forEach((n=>{n.addEventListener("click",(n=>{e.querySelectorAll(".priority").forEach((t=>t.classList.remove("active"))),n.target.classList.add("active"),t.prio=parseInt(n.target.textContent),S(),C()}))})),l[t.prio-1].classList.add("active"),e.style.backgroundColor="var(--p"+t.prio+"-color)",e}function Bt(t){let e=document.createElement("div");e.classList.add("project"),e.innerHTML="<div class='basic'><input type='text' class='title'><label class='expand-label'><input type='checkbox' class='expand'><span></span></label><button class='remove'>✖</button></div><div class='details'><textarea class='description'></textarea><h3>Tasks</h3><div class='task-list'><button class='task-add-btn'>+</button></div></div>";let n=e.querySelector(".title");n.value=t.title,n.addEventListener("change",(e=>{t.title=e.target.value,C()})),e.querySelector(".expand").addEventListener("change",(t=>{t.target.checked?e.classList.add("expanded"):e.classList.remove("expanded")})),e.querySelector(".remove").addEventListener("click",(()=>{e.remove(),function(t){const e=y.indexOf(t);e>-1&&y.splice(e,1),C()}(t)}));let r=e.querySelector(".description");r.value=t.desc,r.addEventListener("change",(e=>{t.desc=e.target.value,C()}));let a=e.querySelector(".task-list");t.getTasks().forEach((t=>a.appendChild(Xt(t))));let i=e.querySelector(".task-add-btn");return i.addEventListener("click",(()=>{let e=t.createTask();a.appendChild(Xt(e)),a.appendChild(i),C()})),a.appendChild(i),e}function Zt(t){let e=document.createElement("div");e.classList.add("note"),e.innerHTML="<div class='basic'><input type='text' class='title'><label class='color-label'><input type='color' class='color'></label></div><button class='remove'>✖</button><textarea class='description'></textarea>";let n=e.querySelector(".title");n.value=t.title,n.addEventListener("change",(e=>{t.title=e.target.value,D()})),e.querySelector(".remove").addEventListener("click",(()=>{e.remove(),function(t){const e=T.indexOf(t);e>-1&&T.splice(e,1),D()}(t)}));let r=e.querySelector(".description");r.value=t.desc,r.addEventListener("change",(e=>{t.desc=e.target.value,D()}));let a=e.querySelector(".color");return a.value=t.color,e.style.backgroundColor=t.color,r.style.backgroundColor=t.color,a.addEventListener("change",(n=>{t.color=n.target.value,e.style.backgroundColor=n.target.value,r.style.backgroundColor=n.target.value,D()})),e}function $t(t){document.querySelectorAll(".tab").forEach((t=>{t.classList.remove("active")})),t.classList.add("active")}localStorage.getItem("visited")||(localStorage.setItem("visited",1),0)?(function(){let n=JSON.parse(localStorage.getItem("projects"));n&&n.forEach((n=>{let r=new e(n._title,n._desc);n._tasks.forEach((e=>{r.getTasks().push(new t(e._title,e._desc,o(e._due),e._prio,e._finished))})),y.push(r)}))}(),function(){let e=JSON.parse(localStorage.getItem("tasks"));e&&e.forEach((e=>{k.push(new t(e._title,e._desc,o(e._due),e._prio,e._finished))}))}(),function(){let t=JSON.parse(localStorage.getItem("notes"));t&&t.forEach((t=>{T.push(new n(t._title,t._desc,t._color))}))}()):function(){let r=new e("Goal: Learn to edit title and date",'Have you finished the tutorial in "Tasks" tab?'),a=r.getTasks(),i=new Date;i.setHours(0,0,0,0);let o=new Date;o.setHours(0,0,0,0);let u=new Date;u.setHours(0,0,0,0);let s=new Date;s.setHours(0,0,0,0);let l=new Date;l.setHours(0,0,0,0),a.push(new t("Click to edit title!","Click the numbers ↑↑ above ↑↑ to set priority\n\n.. You can also click this text to edit description!",i,1,!1)),a.push(new t("..same for the date    → → →","Click the numbers ↑↑ above ↑↑ to set priority\n\n.. You can also click this text to edit description!",o,2,!1));let c=new e("Next Mission: Learn to edit details",'Have you finished the tutorial in "Tasks" tab?');c.getTasks().push(new t("Try clicking the triangle?","Click the numbers ↑↑ above ↑↑ to set priority\n\n.. You can also click this text to edit description!",u,3,!1));let d=new e("My final challenge - Mastering tasks",'Have you finished the tutorial in "Tasks" tab?'),h=d.getTasks();h.push(new t("Guess what the circle does!","Click the numbers ↑↑ above ↑↑ to set priority\n\n.. You can also click this text to edit description!",s,4,!0)),h.push(new t("Challenge: delete this task (hint: x)","Click the numbers ↑↑ above ↑↑ to set priority\n\n.. You can also click this text to edit description!",l,5,!1)),y.push(r),y.push(c),y.push(d);let f=new n("Click me to edit title",'Have you finished the tutorial in "Tasks" tab?\n\nHave you?\n\nYou have, right?\n.\n.\n.\nlorem ipsum',n.defaultColor),m=new n("Another little tip","You can also change colors!\n\nJust click on the palette (top right)","#d58fd6");T.push(f),T.push(m),C(),D()}(),document.querySelector("#tasks-tab").addEventListener("click",(t=>{$t(t.target),Rt()})),document.querySelector("#projects-tab").addEventListener("click",(t=>{$t(t.target),function(){let t=document.querySelector("#content");t.textContent="",t.appendChild(At),function(){let t=M();At.textContent="",t.forEach((t=>{At.appendChild(Bt(t))})),At.appendChild(It)}()}()})),document.querySelector("#notes-tab").addEventListener("click",(t=>{$t(t.target),function(){let t=document.querySelector("#content");t.textContent="",t.appendChild(Qt),function(){let t=E();Qt.textContent="",t.forEach((t=>{Qt.appendChild(Zt(t))})),Qt.appendChild(Gt)}()}()})),$t(document.querySelector("#tasks-tab")),function(){let t=document.createElement("div");t.id="times",t.innerHTML="<button id='day' class='time'>Day</button><button id='week' class='time'>Week</button><button id='month' class='time'>Month</button><button id='year' class='time'>Year</button><button id='all' class='time'>All</button>",t.querySelector("#day").addEventListener("click",(t=>Jt(t.target))),t.querySelector("#week").addEventListener("click",(t=>Jt(t.target))),t.querySelector("#month").addEventListener("click",(t=>Jt(t.target))),t.querySelector("#year").addEventListener("click",(t=>Jt(t.target))),t.querySelector("#all").addEventListener("click",(t=>Jt(t.target))),Ht=t}(),function(){let t=document.createElement("div");t.id="task-list",Ft=t}(),function(){let e=document.createElement("button");e.id="add-btn",e.textContent="+",e.addEventListener("click",(()=>{let e=function(){let e=new Date;e.setHours(0,0,0,1);let n=new t("New Task","Enter Description",e,1,!1);return k.push(n),S(),n}();Ft.appendChild(Xt(e)),Ft.appendChild(jt)})),jt=e}(),function(){let t=document.createElement("div");t.id="project-list",At=t}(),function(){let t=document.createElement("button");t.id="add-btn",t.textContent="+",t.addEventListener("click",(()=>{let t=function(){let t=new e("New Project","Enter Description");return y.push(t),C(),t}();At.appendChild(Bt(t)),At.appendChild(It)})),It=t}(),function(){let t=document.createElement("button");t.id="add-btn",t.textContent="+",t.addEventListener("click",(()=>{let e=function(){let t=new n("New Note","Enter Details",n.defaultColor);return T.push(t),D(),t}();Qt.appendChild(Zt(e)),Qt.appendChild(t)})),Gt=t}(),function(){let t=document.createElement("div");t.id="note-list",Qt=t}(),Rt()})();