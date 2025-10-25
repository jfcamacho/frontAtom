import{$a as sl,$b as Qe,Aa as Ke,Ab as uo,Ac as Cl,Bb as v,Bc as wl,C as mt,Ca as na,Cb as y,Cc as D,Da as Zs,Db as fe,Dc as $e,E as no,Ea as ia,Eb as Nt,Ec as Ne,F as Et,Fa as Xs,Fb as Pt,Fc as ue,Ga as dr,Gb as Ie,Gc as Rt,H as Xi,Ha as ao,Hb as ke,I as Eo,Ia as To,Ib as pl,Ic as _l,J as Ao,Ja as Qs,Jb as Xe,K as Lt,Ka as Js,Kb as ge,L as Qi,La as el,Lb as re,Lc as pa,M as zs,Ma as tl,Mb as _,Mc as _n,N as js,Na as ol,Nb as At,O as Hs,Oa as rl,Ob as Tt,Oc as Dn,P as Oe,Pa as nl,Q as Ws,Qa as so,Qb as se,Qc as Sn,R as _e,Rb as Vt,Rc as kn,S as F,Sb as G,T as Be,Ta as il,Tb as q,Tc as xn,U as m,Ub as da,V as H,Va as C,Vb as fl,W as Gs,Wa as lo,Wb as hl,X as I,Xa as pr,Xb as ne,Y as Ji,Ya as al,Yb as Ut,Z as E,Za as Ze,_ as d,_a as A,a as Bs,aa as io,ab as Ro,ac as Je,b as Ls,ba as qs,bb as aa,bc as et,c as $s,ca as $t,cb as ll,cc as K,d as Yi,da as Ye,db as Cn,e as Ki,eb as J,ec as ve,f as oe,fa as De,fb as W,fc as Mo,g as qe,ga as V,gb as $,ha as U,hb as wn,ia as vn,ib as N,ic as gl,jb as cl,jc as ml,k as xt,ka as R,kb as B,la as ea,lb as sa,ma as it,mb as Io,na as ta,nb as ul,o as be,ob as fr,p as x,pa as yn,pb as la,q as cr,qb as ca,r as Ns,ra as z,rb as O,rc as Fo,s as Ps,sa as Le,sb as b,t as P,ta as oa,tb as dl,u as bn,ua as bt,ub as at,uc as bl,v as Te,va as Re,vb as st,w as ur,wa as Se,wb as Ce,wc as vl,x as Vs,xa as Ys,xb as vt,y as Zi,ya as ra,yb as ua,yc as lt,z as Us,za as Ks,zb as co,zc as yl}from"./chunk-3UEQM5TB.js";import{a as f,b as T}from"./chunk-QWWW7GFA.js";var Y=new I("");var kl=null;function tt(){return kl}function fa(e){kl??=e}var hr=class{},gr=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>d(xl),providedIn:"platform"})}return e})(),ha=new I(""),xl=(()=>{class e extends gr{_location;_history;_doc=d(Y);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return tt().getBaseHref(this._doc)}onPopState(t){let o=tt().getGlobalEventTarget(this._doc,"window");return o.addEventListener("popstate",t,!1),()=>o.removeEventListener("popstate",t)}onHashChange(t){let o=tt().getGlobalEventTarget(this._doc,"window");return o.addEventListener("hashchange",t,!1),()=>o.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,o,n){this._history.pushState(t,o,n)}replaceState(t,o,n){this._history.replaceState(t,o,n)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>new e,providedIn:"platform"})}return e})();function En(e,r){return e?r?e.endsWith("/")?r.startsWith("/")?e+r.slice(1):e+r:r.startsWith("/")?e+r:`${e}/${r}`:e:r}function Dl(e){let r=e.search(/#|\?|$/);return e[r-1]==="/"?e.slice(0,r-1)+e.slice(r):e}function ct(e){return e&&e[0]!=="?"?`?${e}`:e}var ot=(()=>{class e{historyGo(t){throw new Error("")}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>d(Tn),providedIn:"root"})}return e})(),An=new I(""),Tn=(()=>{class e extends ot{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,o){super(),this._platformLocation=t,this._baseHref=o??this._platformLocation.getBaseHrefFromDOM()??d(Y).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return En(this._baseHref,t)}path(t=!1){let o=this._platformLocation.pathname+ct(this._platformLocation.search),n=this._platformLocation.hash;return n&&t?`${o}${n}`:o}pushState(t,o,n,i){let a=this.prepareExternalUrl(n+ct(i));this._platformLocation.pushState(t,o,a)}replaceState(t,o,n,i){let a=this.prepareExternalUrl(n+ct(i));this._platformLocation.replaceState(t,o,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(o){return new(o||e)(E(gr),E(An,8))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),zt=(()=>{class e{_subject=new oe;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let o=this._locationStrategy.getBaseHref();this._basePath=Pf(Dl(Sl(o))),this._locationStrategy.onPopState(n=>{this._subject.next({url:this.path(!0),pop:!0,state:n.state,type:n.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,o=""){return this.path()==this.normalize(t+ct(o))}normalize(t){return e.stripTrailingSlash(Nf(this._basePath,Sl(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,o="",n=null){this._locationStrategy.pushState(n,"",t,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ct(o)),n)}replaceState(t,o="",n=null){this._locationStrategy.replaceState(n,"",t,o),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+ct(o)),n)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(o=>{this._notifyUrlChangeListeners(o.url,o.state)}),()=>{let o=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(o,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",o){this._urlChangeListeners.forEach(n=>n(t,o))}subscribe(t,o,n){return this._subject.subscribe({next:t,error:o??void 0,complete:n??void 0})}static normalizeQueryParams=ct;static joinWithSlash=En;static stripTrailingSlash=Dl;static \u0275fac=function(o){return new(o||e)(E(ot))};static \u0275prov=m({token:e,factory:()=>$f(),providedIn:"root"})}return e})();function $f(){return new zt(E(ot))}function Nf(e,r){if(!e||!r.startsWith(e))return r;let t=r.substring(e.length);return t===""||["/",";","?","#"].includes(t[0])?t:r}function Sl(e){return e.replace(/\/index.html$/,"")}function Pf(e){if(new RegExp("^(https?:)?//").test(e)){let[,t]=e.split(/\/\/[^\/]+/);return t}return e}var Nn=(()=>{class e extends ot{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,o){super(),this._platformLocation=t,o!=null&&(this._baseHref=o)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let o=this._platformLocation.hash??"#";return o.length>0?o.substring(1):o}prepareExternalUrl(t){let o=En(this._baseHref,t);return o.length>0?"#"+o:o}pushState(t,o,n,i){let a=this.prepareExternalUrl(n+ct(i))||this._platformLocation.pathname;this._platformLocation.pushState(t,o,a)}replaceState(t,o,n,i){let a=this.prepareExternalUrl(n+ct(i))||this._platformLocation.pathname;this._platformLocation.replaceState(t,o,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(o){return new(o||e)(E(gr),E(An,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var xe=function(e){return e[e.Format=0]="Format",e[e.Standalone=1]="Standalone",e}(xe||{}),Z=function(e){return e[e.Narrow=0]="Narrow",e[e.Abbreviated=1]="Abbreviated",e[e.Wide=2]="Wide",e[e.Short=3]="Short",e}(Z||{}),Me=function(e){return e[e.Short=0]="Short",e[e.Medium=1]="Medium",e[e.Long=2]="Long",e[e.Full=3]="Full",e}(Me||{}),Mt={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Il(e){return Xe(e)[ge.LocaleId]}function Ml(e,r,t){let o=Xe(e),n=[o[ge.DayPeriodsFormat],o[ge.DayPeriodsStandalone]],i=rt(n,r);return rt(i,t)}function Fl(e,r,t){let o=Xe(e),n=[o[ge.DaysFormat],o[ge.DaysStandalone]],i=rt(n,r);return rt(i,t)}function Ol(e,r,t){let o=Xe(e),n=[o[ge.MonthsFormat],o[ge.MonthsStandalone]],i=rt(n,r);return rt(i,t)}function Bl(e,r){let o=Xe(e)[ge.Eras];return rt(o,r)}function mr(e,r){let t=Xe(e);return rt(t[ge.DateFormat],r)}function br(e,r){let t=Xe(e);return rt(t[ge.TimeFormat],r)}function vr(e,r){let o=Xe(e)[ge.DateTimeFormat];return rt(o,r)}function yr(e,r){let t=Xe(e),o=t[ge.NumberSymbols][r];if(typeof o>"u"){if(r===Mt.CurrencyDecimal)return t[ge.NumberSymbols][Mt.Decimal];if(r===Mt.CurrencyGroup)return t[ge.NumberSymbols][Mt.Group]}return o}function Ll(e){if(!e[ge.ExtraData])throw new Error(`Missing extra locale data for the locale "${e[ge.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)}function $l(e){let r=Xe(e);return Ll(r),(r[ge.ExtraData][2]||[]).map(o=>typeof o=="string"?ga(o):[ga(o[0]),ga(o[1])])}function Nl(e,r,t){let o=Xe(e);Ll(o);let n=[o[ge.ExtraData][0],o[ge.ExtraData][1]],i=rt(n,r)||[];return rt(i,t)||[]}function rt(e,r){for(let t=r;t>-1;t--)if(typeof e[t]<"u")return e[t];throw new Error("Locale data API: locale data undefined")}function ga(e){let[r,t]=e.split(":");return{hours:+r,minutes:+t}}var Vf=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,Rn={},Uf=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Pl(e,r,t,o){let n=Zf(e);r=It(t,r)||r;let a=[],s;for(;r;)if(s=Uf.exec(r),s){a=a.concat(s.slice(1));let u=a.pop();if(!u)break;r=u}else{a.push(r);break}let l=n.getTimezoneOffset();o&&(l=Ul(o,l),n=Kf(n,o));let c="";return a.forEach(u=>{let p=qf(u);c+=p?p(n,t,l):u==="''"?"'":u.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),c}function Bn(e,r,t){let o=new Date(0);return o.setFullYear(e,r,t),o.setHours(0,0,0),o}function It(e,r){let t=Il(e);if(Rn[t]??={},Rn[t][r])return Rn[t][r];let o="";switch(r){case"shortDate":o=mr(e,Me.Short);break;case"mediumDate":o=mr(e,Me.Medium);break;case"longDate":o=mr(e,Me.Long);break;case"fullDate":o=mr(e,Me.Full);break;case"shortTime":o=br(e,Me.Short);break;case"mediumTime":o=br(e,Me.Medium);break;case"longTime":o=br(e,Me.Long);break;case"fullTime":o=br(e,Me.Full);break;case"short":let n=It(e,"shortTime"),i=It(e,"shortDate");o=In(vr(e,Me.Short),[n,i]);break;case"medium":let a=It(e,"mediumTime"),s=It(e,"mediumDate");o=In(vr(e,Me.Medium),[a,s]);break;case"long":let l=It(e,"longTime"),c=It(e,"longDate");o=In(vr(e,Me.Long),[l,c]);break;case"full":let u=It(e,"fullTime"),p=It(e,"fullDate");o=In(vr(e,Me.Full),[u,p]);break}return o&&(Rn[t][r]=o),o}function In(e,r){return r&&(e=e.replace(/\{([^}]+)}/g,function(t,o){return r!=null&&o in r?r[o]:t})),e}function ut(e,r,t="-",o,n){let i="";(e<0||n&&e<=0)&&(n?e=-e+1:(e=-e,i=t));let a=String(e);for(;a.length<r;)a="0"+a;return o&&(a=a.slice(a.length-r)),i+a}function zf(e,r){return ut(e,3).substring(0,r)}function me(e,r,t=0,o=!1,n=!1){return function(i,a){let s=jf(e,i);if((t>0||s>-t)&&(s+=t),e===3)s===0&&t===-12&&(s=12);else if(e===6)return zf(s,r);let l=yr(a,Mt.MinusSign);return ut(s,r,l,o,n)}}function jf(e,r){switch(e){case 0:return r.getFullYear();case 1:return r.getMonth();case 2:return r.getDate();case 3:return r.getHours();case 4:return r.getMinutes();case 5:return r.getSeconds();case 6:return r.getMilliseconds();case 7:return r.getDay();default:throw new Error(`Unknown DateType value "${e}".`)}}function ie(e,r,t=xe.Format,o=!1){return function(n,i){return Hf(n,i,e,r,t,o)}}function Hf(e,r,t,o,n,i){switch(t){case 2:return Ol(r,n,o)[e.getMonth()];case 1:return Fl(r,n,o)[e.getDay()];case 0:let a=e.getHours(),s=e.getMinutes();if(i){let c=$l(r),u=Nl(r,n,o),p=c.findIndex(h=>{if(Array.isArray(h)){let[g,S]=h,w=a>=g.hours&&s>=g.minutes,k=a<S.hours||a===S.hours&&s<S.minutes;if(g.hours<S.hours){if(w&&k)return!0}else if(w||k)return!0}else if(h.hours===a&&h.minutes===s)return!0;return!1});if(p!==-1)return u[p]}return Ml(r,n,o)[a<12?0:1];case 3:return Bl(r,o)[e.getFullYear()<=0?0:1];default:let l=t;throw new Error(`unexpected translation type ${l}`)}}function Mn(e){return function(r,t,o){let n=-1*o,i=yr(t,Mt.MinusSign),a=n>0?Math.floor(n/60):Math.ceil(n/60);switch(e){case 0:return(n>=0?"+":"")+ut(a,2,i)+ut(Math.abs(n%60),2,i);case 1:return"GMT"+(n>=0?"+":"")+ut(a,1,i);case 2:return"GMT"+(n>=0?"+":"")+ut(a,2,i)+":"+ut(Math.abs(n%60),2,i);case 3:return o===0?"Z":(n>=0?"+":"")+ut(a,2,i)+":"+ut(Math.abs(n%60),2,i);default:throw new Error(`Unknown zone width "${e}"`)}}}var Wf=0,On=4;function Gf(e){let r=Bn(e,Wf,1).getDay();return Bn(e,0,1+(r<=On?On:On+7)-r)}function Vl(e){let r=e.getDay(),t=r===0?-3:On-r;return Bn(e.getFullYear(),e.getMonth(),e.getDate()+t)}function ma(e,r=!1){return function(t,o){let n;if(r){let i=new Date(t.getFullYear(),t.getMonth(),1).getDay()-1,a=t.getDate();n=1+Math.floor((a+i)/7)}else{let i=Vl(t),a=Gf(i.getFullYear()),s=i.getTime()-a.getTime();n=1+Math.round(s/6048e5)}return ut(n,e,yr(o,Mt.MinusSign))}}function Fn(e,r=!1){return function(t,o){let i=Vl(t).getFullYear();return ut(i,e,yr(o,Mt.MinusSign),r)}}var ba={};function qf(e){if(ba[e])return ba[e];let r;switch(e){case"G":case"GG":case"GGG":r=ie(3,Z.Abbreviated);break;case"GGGG":r=ie(3,Z.Wide);break;case"GGGGG":r=ie(3,Z.Narrow);break;case"y":r=me(0,1,0,!1,!0);break;case"yy":r=me(0,2,0,!0,!0);break;case"yyy":r=me(0,3,0,!1,!0);break;case"yyyy":r=me(0,4,0,!1,!0);break;case"Y":r=Fn(1);break;case"YY":r=Fn(2,!0);break;case"YYY":r=Fn(3);break;case"YYYY":r=Fn(4);break;case"M":case"L":r=me(1,1,1);break;case"MM":case"LL":r=me(1,2,1);break;case"MMM":r=ie(2,Z.Abbreviated);break;case"MMMM":r=ie(2,Z.Wide);break;case"MMMMM":r=ie(2,Z.Narrow);break;case"LLL":r=ie(2,Z.Abbreviated,xe.Standalone);break;case"LLLL":r=ie(2,Z.Wide,xe.Standalone);break;case"LLLLL":r=ie(2,Z.Narrow,xe.Standalone);break;case"w":r=ma(1);break;case"ww":r=ma(2);break;case"W":r=ma(1,!0);break;case"d":r=me(2,1);break;case"dd":r=me(2,2);break;case"c":case"cc":r=me(7,1);break;case"ccc":r=ie(1,Z.Abbreviated,xe.Standalone);break;case"cccc":r=ie(1,Z.Wide,xe.Standalone);break;case"ccccc":r=ie(1,Z.Narrow,xe.Standalone);break;case"cccccc":r=ie(1,Z.Short,xe.Standalone);break;case"E":case"EE":case"EEE":r=ie(1,Z.Abbreviated);break;case"EEEE":r=ie(1,Z.Wide);break;case"EEEEE":r=ie(1,Z.Narrow);break;case"EEEEEE":r=ie(1,Z.Short);break;case"a":case"aa":case"aaa":r=ie(0,Z.Abbreviated);break;case"aaaa":r=ie(0,Z.Wide);break;case"aaaaa":r=ie(0,Z.Narrow);break;case"b":case"bb":case"bbb":r=ie(0,Z.Abbreviated,xe.Standalone,!0);break;case"bbbb":r=ie(0,Z.Wide,xe.Standalone,!0);break;case"bbbbb":r=ie(0,Z.Narrow,xe.Standalone,!0);break;case"B":case"BB":case"BBB":r=ie(0,Z.Abbreviated,xe.Format,!0);break;case"BBBB":r=ie(0,Z.Wide,xe.Format,!0);break;case"BBBBB":r=ie(0,Z.Narrow,xe.Format,!0);break;case"h":r=me(3,1,-12);break;case"hh":r=me(3,2,-12);break;case"H":r=me(3,1);break;case"HH":r=me(3,2);break;case"m":r=me(4,1);break;case"mm":r=me(4,2);break;case"s":r=me(5,1);break;case"ss":r=me(5,2);break;case"S":r=me(6,1);break;case"SS":r=me(6,2);break;case"SSS":r=me(6,3);break;case"Z":case"ZZ":case"ZZZ":r=Mn(0);break;case"ZZZZZ":r=Mn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":r=Mn(1);break;case"OOOO":case"ZZZZ":case"zzzz":r=Mn(2);break;default:return null}return ba[e]=r,r}function Ul(e,r){e=e.replace(/:/g,"");let t=Date.parse("Jan 01, 1970 00:00:00 "+e)/6e4;return isNaN(t)?r:t}function Yf(e,r){return e=new Date(e.getTime()),e.setMinutes(e.getMinutes()+r),e}function Kf(e,r,t){let n=e.getTimezoneOffset(),i=Ul(r,n);return Yf(e,-1*(i-n))}function Zf(e){if(El(e))return e;if(typeof e=="number"&&!isNaN(e))return new Date(e);if(typeof e=="string"){if(e=e.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(e)){let[n,i=1,a=1]=e.split("-").map(s=>+s);return Bn(n,i-1,a)}let t=parseFloat(e);if(!isNaN(e-t))return new Date(t);let o;if(o=e.match(Vf))return Xf(o)}let r=new Date(e);if(!El(r))throw new Error(`Unable to convert "${e}" into a date`);return r}function Xf(e){let r=new Date(0),t=0,o=0,n=e[8]?r.setUTCFullYear:r.setFullYear,i=e[8]?r.setUTCHours:r.setHours;e[9]&&(t=Number(e[9]+e[10]),o=Number(e[9]+e[11])),n.call(r,Number(e[1]),Number(e[2])-1,Number(e[3]));let a=Number(e[4]||0)-t,s=Number(e[5]||0)-o,l=Number(e[6]||0),c=Math.floor(parseFloat("0."+(e[7]||0))*1e3);return i.call(r,a,s,l,c),r}function El(e){return e instanceof Date&&!isNaN(e.valueOf())}var va=/\s+/,Al=[],Pe=(()=>{class e{_ngEl;_renderer;initialClasses=Al;rawClass;stateMap=new Map;constructor(t,o){this._ngEl=t,this._renderer=o}set klass(t){this.initialClasses=t!=null?t.trim().split(va):Al}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(va):t}ngDoCheck(){for(let o of this.initialClasses)this._updateState(o,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let o of t)this._updateState(o,!0);else if(t!=null)for(let o of Object.keys(t))this._updateState(o,!!t[o]);this._applyStateDiff()}_updateState(t,o){let n=this.stateMap.get(t);n!==void 0?(n.enabled!==o&&(n.changed=!0,n.enabled=o),n.touched=!0):this.stateMap.set(t,{enabled:o,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let o=t[0],n=t[1];n.changed?(this._toggleClass(o,n.enabled),n.changed=!1):n.touched||(n.enabled&&this._toggleClass(o,!1),this.stateMap.delete(o)),n.touched=!1}}_toggleClass(t,o){t=t.trim(),t.length>0&&t.split(va).forEach(n=>{o?this._renderer.addClass(this._ngEl.nativeElement,n):this._renderer.removeClass(this._ngEl.nativeElement,n)})}static \u0275fac=function(o){return new(o||e)(A(Re),A(Ze))};static \u0275dir=$({type:e,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return e})();var Ln=class{$implicit;ngForOf;index;count;constructor(r,t,o,n){this.$implicit=r,this.ngForOf=t,this.index=o,this.count=n}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},zl=(()=>{class e{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,o,n){this._viewContainer=t,this._template=o,this._differs=n}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let o=this._viewContainer;t.forEachOperation((n,i,a)=>{if(n.previousIndex==null)o.createEmbeddedView(this._template,new Ln(n.item,this._ngForOf,-1,-1),a===null?void 0:a);else if(a==null)o.remove(i===null?void 0:i);else if(i!==null){let s=o.get(i);o.move(s,a),Tl(s,n)}});for(let n=0,i=o.length;n<i;n++){let s=o.get(n).context;s.index=n,s.count=i,s.ngForOf=this._ngForOf}t.forEachIdentityChange(n=>{let i=o.get(n.currentIndex);Tl(i,n)})}static ngTemplateContextGuard(t,o){return!0}static \u0275fac=function(o){return new(o||e)(A(Ro),A(pr),A(yl))};static \u0275dir=$({type:e,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return e})();function Tl(e,r){e.context.$implicit=r.item}var po=(()=>{class e{_viewContainer;_context=new $n;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(t,o){this._viewContainer=t,this._thenTemplateRef=o}set ngIf(t){this._context.$implicit=this._context.ngIf=t,this._updateView()}set ngIfThen(t){Rl(t,!1),this._thenTemplateRef=t,this._thenViewRef=null,this._updateView()}set ngIfElse(t){Rl(t,!1),this._elseTemplateRef=t,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(t,o){return!0}static \u0275fac=function(o){return new(o||e)(A(Ro),A(pr))};static \u0275dir=$({type:e,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return e})(),$n=class{$implicit=null;ngIf=null};function Rl(e,r){if(e&&!e.createEmbeddedView)throw new F(2020,!1)}var Ft=(()=>{class e{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(t,o,n){this._ngEl=t,this._differs=o,this._renderer=n}set ngStyle(t){this._ngStyle=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}ngDoCheck(){if(this._differ){let t=this._differ.diff(this._ngStyle);t&&this._applyChanges(t)}}_setStyle(t,o){let[n,i]=t.split("."),a=n.indexOf("-")===-1?void 0:lo.DashCase;o!=null?this._renderer.setStyle(this._ngEl.nativeElement,n,i?`${o}${i}`:o,a):this._renderer.removeStyle(this._ngEl.nativeElement,n,a)}_applyChanges(t){t.forEachRemovedItem(o=>this._setStyle(o.key,null)),t.forEachAddedItem(o=>this._setStyle(o.key,o.currentValue)),t.forEachChangedItem(o=>this._setStyle(o.key,o.currentValue))}static \u0275fac=function(o){return new(o||e)(A(Re),A(Cl),A(Ze))};static \u0275dir=$({type:e,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return e})(),dt=(()=>{class e{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(t){this._viewContainerRef=t}ngOnChanges(t){if(this._shouldRecreateView(t)){let o=this._viewContainerRef;if(this._viewRef&&o.remove(o.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let n=this._createContextForwardProxy();this._viewRef=o.createEmbeddedView(this.ngTemplateOutlet,n,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(t){return!!t.ngTemplateOutlet||!!t.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(t,o,n)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,o,n):!1,get:(t,o,n)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,o,n)}})}static \u0275fac=function(o){return new(o||e)(A(Ro))};static \u0275dir=$({type:e,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[De]})}return e})();function wa(e,r){return new F(2100,!1)}var ya=class{createSubscription(r,t){return Ne(()=>r.subscribe({next:t,error:o=>{throw o}}))}dispose(r){Ne(()=>r.unsubscribe())}},Ca=class{createSubscription(r,t){return r.then(o=>t?.(o),o=>{throw o}),{unsubscribe:()=>{t=null}}}dispose(r){r.unsubscribe()}},Qf=new Ca,Jf=new ya,eh=(()=>{class e{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,o=>this._updateLatestValue(t,o))}_selectStrategy(t){if(Io(t))return Qf;if(ul(t))return Jf;throw wa(e,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,o){t===this._obj&&(this._latestValue=o,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(o){return new(o||e)(A(lt,16))};static \u0275pipe=wn({name:"async",type:e,pure:!1})}return e})();var th="mediumDate",jl=new I(""),Hl=new I(""),oh=(()=>{class e{locale;defaultTimezone;defaultOptions;constructor(t,o,n){this.locale=t,this.defaultTimezone=o,this.defaultOptions=n}transform(t,o,n,i){if(t==null||t===""||t!==t)return null;try{let a=o??this.defaultOptions?.dateFormat??th,s=n??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Pl(t,a,i||this.locale,s)}catch(a){throw wa(e,a.message)}}static \u0275fac=function(o){return new(o||e)(A(vl,16),A(jl,24),A(Hl,24))};static \u0275pipe=wn({name:"date",type:e,pure:!0})}return e})();var rh=(()=>{class e{transform(t,o,n){if(t==null)return null;if(!(typeof t=="string"||Array.isArray(t)))throw wa(e,t);return t.slice(o,n)}static \u0275fac=function(o){return new(o||e)};static \u0275pipe=wn({name:"slice",type:e,pure:!1})}return e})();var he=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({})}return e})();function Cr(e,r){r=encodeURIComponent(r);for(let t of e.split(";")){let o=t.indexOf("="),[n,i]=o==-1?[t,""]:[t.slice(0,o),t.slice(o+1)];if(n.trim()===r)return decodeURIComponent(i)}return null}var Pn="browser",Wl="server";function wr(e){return e===Pn}function Oo(e){return e===Wl}var fo=class{};var Da=(()=>{class e{static \u0275prov=m({token:e,providedIn:"root",factory:()=>new _a(d(Y),window)})}return e})(),_a=class{document;window;offset=()=>[0,0];constructor(r,t){this.document=r,this.window=t}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r){this.window.scrollTo(r[0],r[1])}scrollToAnchor(r){let t=ah(this.document,r);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(r){this.window.history.scrollRestoration=r}scrollToElement(r){let t=r.getBoundingClientRect(),o=t.left+this.window.pageXOffset,n=t.top+this.window.pageYOffset,i=this.offset();this.window.scrollTo(o-i[0],n-i[1])}};function ah(e,r){let t=e.getElementById(r)||e.getElementsByName(r)[0];if(t)return t;if(typeof e.createTreeWalker=="function"&&e.body&&typeof e.body.attachShadow=="function"){let o=e.createTreeWalker(e.body,NodeFilter.SHOW_ELEMENT),n=o.currentNode;for(;n;){let i=n.shadowRoot;if(i){let a=i.getElementById(r)||i.querySelector(`[name="${r}"]`);if(a)return a}n=o.nextNode()}}return null}var zn=new I(""),Ea=(()=>{class e{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,o){this._zone=o,t.forEach(n=>{n.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,o,n,i){return this._findPluginFor(o).addEventListener(t,o,n,i)}getZone(){return this._zone}_findPluginFor(t){let o=this._eventNameToPlugin.get(t);if(o)return o;if(o=this._plugins.find(i=>i.supports(t)),!o)throw new F(5101,!1);return this._eventNameToPlugin.set(t,o),o}static \u0275fac=function(o){return new(o||e)(E(zn),E(Le))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),_r=class{_doc;constructor(r){this._doc=r}manager},Vn="ng-app-id";function ql(e){for(let r of e)r.remove()}function Yl(e,r){let t=r.createElement("style");return t.textContent=e,t}function sh(e,r,t,o){let n=e.head?.querySelectorAll(`style[${Vn}="${r}"],link[${Vn}="${r}"]`);if(n)for(let i of n)i.removeAttribute(Vn),i instanceof HTMLLinkElement?o.set(i.href.slice(i.href.lastIndexOf("/")+1),{usage:0,elements:[i]}):i.textContent&&t.set(i.textContent,{usage:0,elements:[i]})}function ka(e,r){let t=r.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",e),t}var Aa=(()=>{class e{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,o,n,i={}){this.doc=t,this.appId=o,this.nonce=n,this.isServer=Oo(i),sh(t,o,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,o){for(let n of t)this.addUsage(n,this.inline,Yl);o?.forEach(n=>this.addUsage(n,this.external,ka))}removeStyles(t,o){for(let n of t)this.removeUsage(n,this.inline);o?.forEach(n=>this.removeUsage(n,this.external))}addUsage(t,o,n){let i=o.get(t);i?i.usage++:o.set(t,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,n(t,this.doc)))})}removeUsage(t,o){let n=o.get(t);n&&(n.usage--,n.usage<=0&&(ql(n.elements),o.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ql(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[o,{elements:n}]of this.inline)n.push(this.addElement(t,Yl(o,this.doc)));for(let[o,{elements:n}]of this.external)n.push(this.addElement(t,ka(o,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,o){return this.nonce&&o.setAttribute("nonce",this.nonce),this.isServer&&o.setAttribute(Vn,this.appId),t.appendChild(o)}static \u0275fac=function(o){return new(o||e)(E(Y),E(ra),E(na,8),E(Ke))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Sa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Ta=/%COMP%/g;var Zl="%COMP%",lh=`_nghost-${Zl}`,ch=`_ngcontent-${Zl}`,uh=!0,dh=new I("",{providedIn:"root",factory:()=>uh});function ph(e){return ch.replace(Ta,e)}function fh(e){return lh.replace(Ta,e)}function Xl(e,r){return r.map(t=>t.replace(Ta,e))}var Ra=(()=>{class e{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,o,n,i,a,s,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=o,this.appId=n,this.removeStylesOnCompDestroy=i,this.doc=a,this.platformId=s,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=Oo(s),this.defaultRenderer=new Dr(t,a,l,this.platformIsServer,this.tracingService)}createRenderer(t,o){if(!t||!o)return this.defaultRenderer;this.platformIsServer&&o.encapsulation===dr.ShadowDom&&(o=T(f({},o),{encapsulation:dr.Emulated}));let n=this.getOrCreateRenderer(t,o);return n instanceof Un?n.applyToHost(t):n instanceof Sr&&n.applyStyles(),n}getOrCreateRenderer(t,o){let n=this.rendererByCompId,i=n.get(o.id);if(!i){let a=this.doc,s=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,p=this.platformIsServer,h=this.tracingService;switch(o.encapsulation){case dr.Emulated:i=new Un(l,c,o,this.appId,u,a,s,p,h);break;case dr.ShadowDom:return new xa(l,c,t,o,a,s,this.nonce,p,h);default:i=new Sr(l,c,o,u,a,s,p,h);break}n.set(o.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(o){return new(o||e)(E(Ea),E(Aa),E(ra),E(dh),E(Y),E(Ke),E(Le),E(na),E(Zs,8))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Dr=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(r,t,o,n,i){this.eventManager=r,this.doc=t,this.ngZone=o,this.platformIsServer=n,this.tracingService=i}destroy(){}destroyNode=null;createElement(r,t){return t?this.doc.createElementNS(Sa[t]||t,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,t){(Kl(r)?r.content:r).appendChild(t)}insertBefore(r,t,o){r&&(Kl(r)?r.content:r).insertBefore(t,o)}removeChild(r,t){t.remove()}selectRootElement(r,t){let o=typeof r=="string"?this.doc.querySelector(r):r;if(!o)throw new F(-5104,!1);return t||(o.textContent=""),o}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,t,o,n){if(n){t=n+":"+t;let i=Sa[n];i?r.setAttributeNS(i,t,o):r.setAttribute(t,o)}else r.setAttribute(t,o)}removeAttribute(r,t,o){if(o){let n=Sa[o];n?r.removeAttributeNS(n,t):r.removeAttribute(`${o}:${t}`)}else r.removeAttribute(t)}addClass(r,t){r.classList.add(t)}removeClass(r,t){r.classList.remove(t)}setStyle(r,t,o,n){n&(lo.DashCase|lo.Important)?r.style.setProperty(t,o,n&lo.Important?"important":""):r.style[t]=o}removeStyle(r,t,o){o&lo.DashCase?r.style.removeProperty(t):r.style[t]=""}setProperty(r,t,o){r!=null&&(r[t]=o)}setValue(r,t){r.nodeValue=t}listen(r,t,o,n){if(typeof r=="string"&&(r=tt().getGlobalEventTarget(this.doc,r),!r))throw new F(5102,!1);let i=this.decoratePreventDefault(o);return this.tracingService?.wrapEventListener&&(i=this.tracingService.wrapEventListener(r,t,i)),this.eventManager.addEventListener(r,t,i,n)}decoratePreventDefault(r){return t=>{if(t==="__ngUnwrap__")return r;(this.platformIsServer?this.ngZone.runGuarded(()=>r(t)):r(t))===!1&&t.preventDefault()}}};function Kl(e){return e.tagName==="TEMPLATE"&&e.content!==void 0}var xa=class extends Dr{sharedStylesHost;hostEl;shadowRoot;constructor(r,t,o,n,i,a,s,l,c){super(r,i,a,l,c),this.sharedStylesHost=t,this.hostEl=o,this.shadowRoot=o.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=n.styles;u=Xl(n.id,u);for(let h of u){let g=document.createElement("style");s&&g.setAttribute("nonce",s),g.textContent=h,this.shadowRoot.appendChild(g)}let p=n.getExternalStyles?.();if(p)for(let h of p){let g=ka(h,i);s&&g.setAttribute("nonce",s),this.shadowRoot.appendChild(g)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,t){return super.appendChild(this.nodeOrShadowRoot(r),t)}insertBefore(r,t,o){return super.insertBefore(this.nodeOrShadowRoot(r),t,o)}removeChild(r,t){return super.removeChild(null,t)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Sr=class extends Dr{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(r,t,o,n,i,a,s,l,c){super(r,i,a,s,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=n;let u=o.styles;this.styles=c?Xl(c,u):u,this.styleUrls=o.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Un=class extends Sr{contentAttr;hostAttr;constructor(r,t,o,n,i,a,s,l,c){let u=n+"-"+o.id;super(r,t,o,i,a,s,l,c,u),this.contentAttr=ph(u),this.hostAttr=fh(u)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,t){let o=super.createElement(r,t);return super.setAttribute(o,this.contentAttr,""),o}};var jn=class e extends hr{supportsDOMEvents=!0;static makeCurrent(){fa(new e)}onAndCancel(r,t,o,n){return r.addEventListener(t,o,n),()=>{r.removeEventListener(t,o,n)}}dispatchEvent(r,t){r.dispatchEvent(t)}remove(r){r.remove()}createElement(r,t){return t=t||this.getDefaultDocument(),t.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,t){return t==="window"?window:t==="document"?r:t==="body"?r.body:null}getBaseHref(r){let t=gh();return t==null?null:mh(t)}resetBaseElement(){kr=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Cr(document.cookie,r)}},kr=null;function gh(){return kr=kr||document.head.querySelector("base"),kr?kr.getAttribute("href"):null}function mh(e){return new URL(e,document.baseURI).pathname}var bh=(()=>{class e{build(){return new XMLHttpRequest}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Jl=(()=>{class e extends _r{constructor(t){super(t)}supports(t){return!0}addEventListener(t,o,n,i){return t.addEventListener(o,n,i),()=>this.removeEventListener(t,o,n,i)}removeEventListener(t,o,n,i){return t.removeEventListener(o,n,i)}static \u0275fac=function(o){return new(o||e)(E(Y))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),Ql=["alt","control","meta","shift"],vh={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yh={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey},ec=(()=>{class e extends _r{constructor(t){super(t)}supports(t){return e.parseEventName(t)!=null}addEventListener(t,o,n,i){let a=e.parseEventName(o),s=e.eventCallback(a.fullKey,n,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>tt().onAndCancel(t,a.domEventName,s,i))}static parseEventName(t){let o=t.toLowerCase().split("."),n=o.shift();if(o.length===0||!(n==="keydown"||n==="keyup"))return null;let i=e._normalizeKey(o.pop()),a="",s=o.indexOf("code");if(s>-1&&(o.splice(s,1),a="code."),Ql.forEach(c=>{let u=o.indexOf(c);u>-1&&(o.splice(u,1),a+=c+".")}),a+=i,o.length!=0||i.length===0)return null;let l={};return l.domEventName=n,l.fullKey=a,l}static matchEventFullKeyCode(t,o){let n=vh[t.key]||t.key,i="";return o.indexOf("code.")>-1&&(n=t.code,i="code."),n==null||!n?!1:(n=n.toLowerCase(),n===" "?n="space":n==="."&&(n="dot"),Ql.forEach(a=>{if(a!==n){let s=yh[a];s(t)&&(i+=a+".")}}),i+=n,i===o)}static eventCallback(t,o,n){return i=>{e.matchEventFullKeyCode(i,t)&&n.runGuarded(()=>o(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(o){return new(o||e)(E(Y))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function Ch(e,r){return wl(f({rootComponent:e},wh(r)))}function wh(e){return{appProviders:[...xh,...e?.providers??[]],platformProviders:kh}}function _h(){jn.makeCurrent()}function Dh(){return new oa}function Sh(){return Ys(document),document}var kh=[{provide:Ke,useValue:Pn},{provide:Ks,useValue:_h,multi:!0},{provide:Y,useFactory:Sh}];var xh=[{provide:qs,useValue:"root"},{provide:oa,useFactory:Dh},{provide:zn,useClass:Jl,multi:!0,deps:[Y]},{provide:zn,useClass:ec,multi:!0,deps:[Y]},Ra,Aa,Ea,{provide:al,useExisting:Ra},{provide:fo,useClass:bh},[]];var Lo=class{},xr=class{},Ht=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(r){r?typeof r=="string"?this.lazyInit=()=>{this.headers=new Map,r.split(`
`).forEach(t=>{let o=t.indexOf(":");if(o>0){let n=t.slice(0,o),i=t.slice(o+1).trim();this.addHeaderEntry(n,i)}})}:typeof Headers<"u"&&r instanceof Headers?(this.headers=new Map,r.forEach((t,o)=>{this.addHeaderEntry(o,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(r).forEach(([t,o])=>{this.setHeaderEntries(t,o)})}:this.headers=new Map}has(r){return this.init(),this.headers.has(r.toLowerCase())}get(r){this.init();let t=this.headers.get(r.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(r){return this.init(),this.headers.get(r.toLowerCase())||null}append(r,t){return this.clone({name:r,value:t,op:"a"})}set(r,t){return this.clone({name:r,value:t,op:"s"})}delete(r,t){return this.clone({name:r,value:t,op:"d"})}maybeSetNormalizedName(r,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,r)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(r=>this.applyUpdate(r)),this.lazyUpdate=null))}copyFrom(r){r.init(),Array.from(r.headers.keys()).forEach(t=>{this.headers.set(t,r.headers.get(t)),this.normalizedNames.set(t,r.normalizedNames.get(t))})}clone(r){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([r]),t}applyUpdate(r){let t=r.name.toLowerCase();switch(r.op){case"a":case"s":let o=r.value;if(typeof o=="string"&&(o=[o]),o.length===0)return;this.maybeSetNormalizedName(r.name,t);let n=(r.op==="a"?this.headers.get(t):void 0)||[];n.push(...o),this.headers.set(t,n);break;case"d":let i=r.value;if(!i)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(s=>i.indexOf(s)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}addHeaderEntry(r,t){let o=r.toLowerCase();this.maybeSetNormalizedName(r,o),this.headers.has(o)?this.headers.get(o).push(t):this.headers.set(o,[t])}setHeaderEntries(r,t){let o=(Array.isArray(t)?t:[t]).map(i=>i.toString()),n=r.toLowerCase();this.headers.set(n,o),this.maybeSetNormalizedName(r,n)}forEach(r){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>r(this.normalizedNames.get(t),this.headers.get(t)))}};var Wn=class{encodeKey(r){return tc(r)}encodeValue(r){return tc(r)}decodeKey(r){return decodeURIComponent(r)}decodeValue(r){return decodeURIComponent(r)}};function Eh(e,r){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(n=>{let i=n.indexOf("="),[a,s]=i==-1?[r.decodeKey(n),""]:[r.decodeKey(n.slice(0,i)),r.decodeValue(n.slice(i+1))],l=t.get(a)||[];l.push(s),t.set(a,l)}),t}var Ah=/%(\d[a-f0-9])/gi,Th={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function tc(e){return encodeURIComponent(e).replace(Ah,(r,t)=>Th[t]??r)}function Hn(e){return`${e}`}var Ot=class e{map;encoder;updates=null;cloneFrom=null;constructor(r={}){if(this.encoder=r.encoder||new Wn,r.fromString){if(r.fromObject)throw new F(2805,!1);this.map=Eh(r.fromString,this.encoder)}else r.fromObject?(this.map=new Map,Object.keys(r.fromObject).forEach(t=>{let o=r.fromObject[t],n=Array.isArray(o)?o.map(Hn):[Hn(o)];this.map.set(t,n)})):this.map=null}has(r){return this.init(),this.map.has(r)}get(r){this.init();let t=this.map.get(r);return t?t[0]:null}getAll(r){return this.init(),this.map.get(r)||null}keys(){return this.init(),Array.from(this.map.keys())}append(r,t){return this.clone({param:r,value:t,op:"a"})}appendAll(r){let t=[];return Object.keys(r).forEach(o=>{let n=r[o];Array.isArray(n)?n.forEach(i=>{t.push({param:o,value:i,op:"a"})}):t.push({param:o,value:n,op:"a"})}),this.clone(t)}set(r,t){return this.clone({param:r,value:t,op:"s"})}delete(r,t){return this.clone({param:r,value:t,op:"d"})}toString(){return this.init(),this.keys().map(r=>{let t=this.encoder.encodeKey(r);return this.map.get(r).map(o=>t+"="+this.encoder.encodeValue(o)).join("&")}).filter(r=>r!=="").join("&")}clone(r){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(r),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(r=>this.map.set(r,this.cloneFrom.map.get(r))),this.updates.forEach(r=>{switch(r.op){case"a":case"s":let t=(r.op==="a"?this.map.get(r.param):void 0)||[];t.push(Hn(r.value)),this.map.set(r.param,t);break;case"d":if(r.value!==void 0){let o=this.map.get(r.param)||[],n=o.indexOf(Hn(r.value));n!==-1&&o.splice(n,1),o.length>0?this.map.set(r.param,o):this.map.delete(r.param)}else{this.map.delete(r.param);break}}}),this.cloneFrom=this.updates=null)}};var Gn=class{map=new Map;set(r,t){return this.map.set(r,t),this}get(r){return this.map.has(r)||this.map.set(r,r.defaultValue()),this.map.get(r)}delete(r){return this.map.delete(r),this}has(r){return this.map.has(r)}keys(){return this.map.keys()}};function Rh(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function oc(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function rc(e){return typeof Blob<"u"&&e instanceof Blob}function nc(e){return typeof FormData<"u"&&e instanceof FormData}function Ih(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var ic="Content-Type",ac="Accept",sc="X-Request-URL",lc="text/plain",cc="application/json",Mh=`${cc}, ${lc}, */*`,Bo=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(r,t,o,n){this.url=t,this.method=r.toUpperCase();let i;if(Rh(this.method)||n?(this.body=o!==void 0?o:null,i=n):i=o,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new Ht,this.context??=new Gn,!this.params)this.params=new Ot,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let s=t.indexOf("?"),l=s===-1?"?":s<t.length-1?"&":"";this.urlWithParams=t+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||oc(this.body)||rc(this.body)||nc(this.body)||Ih(this.body)?this.body:this.body instanceof Ot?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||nc(this.body)?null:rc(this.body)?this.body.type||null:oc(this.body)?null:typeof this.body=="string"?lc:this.body instanceof Ot?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?cc:null}clone(r={}){let t=r.method||this.method,o=r.url||this.url,n=r.responseType||this.responseType,i=r.transferCache??this.transferCache,a=r.body!==void 0?r.body:this.body,s=r.withCredentials??this.withCredentials,l=r.reportProgress??this.reportProgress,c=r.headers||this.headers,u=r.params||this.params,p=r.context??this.context;return r.setHeaders!==void 0&&(c=Object.keys(r.setHeaders).reduce((h,g)=>h.set(g,r.setHeaders[g]),c)),r.setParams&&(u=Object.keys(r.setParams).reduce((h,g)=>h.set(g,r.setParams[g]),u)),new e(t,o,a,{params:u,headers:c,context:p,reportProgress:l,responseType:n,withCredentials:s,transferCache:i})}},ho=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(ho||{}),$o=class{headers;status;statusText;url;ok;type;constructor(r,t=200,o="OK"){this.headers=r.headers||new Ht,this.status=r.status!==void 0?r.status:t,this.statusText=r.statusText||o,this.url=r.url||null,this.ok=this.status>=200&&this.status<300}},qn=class e extends $o{constructor(r={}){super(r)}type=ho.ResponseHeader;clone(r={}){return new e({headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Er=class e extends $o{body;constructor(r={}){super(r),this.body=r.body!==void 0?r.body:null}type=ho.Response;clone(r={}){return new e({body:r.body!==void 0?r.body:this.body,headers:r.headers||this.headers,status:r.status!==void 0?r.status:this.status,statusText:r.statusText||this.statusText,url:r.url||this.url||void 0})}},Ar=class extends $o{name="HttpErrorResponse";message;error;ok=!1;constructor(r){super(r,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${r.url||"(unknown url)"}`:this.message=`Http failure response for ${r.url||"(unknown url)"}: ${r.status} ${r.statusText}`,this.error=r.error||null}},Fh=200,Oh=204;function Ia(e,r){return{body:r,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var uc=(()=>{class e{handler;constructor(t){this.handler=t}request(t,o,n={}){let i;if(t instanceof Bo)i=t;else{let l;n.headers instanceof Ht?l=n.headers:l=new Ht(n.headers);let c;n.params&&(n.params instanceof Ot?c=n.params:c=new Ot({fromObject:n.params})),i=new Bo(t,o,n.body!==void 0?n.body:null,{headers:l,context:n.context,params:c,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials,transferCache:n.transferCache})}let a=x(i).pipe(Et(l=>this.handler.handle(l)));if(t instanceof Bo||n.observe==="events")return a;let s=a.pipe(mt(l=>l instanceof Er));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return s.pipe(P(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new F(2806,!1);return l.body}));case"blob":return s.pipe(P(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new F(2807,!1);return l.body}));case"text":return s.pipe(P(l=>{if(l.body!==null&&typeof l.body!="string")throw new F(2808,!1);return l.body}));case"json":default:return s.pipe(P(l=>l.body))}case"response":return s;default:throw new F(2809,!1)}}delete(t,o={}){return this.request("DELETE",t,o)}get(t,o={}){return this.request("GET",t,o)}head(t,o={}){return this.request("HEAD",t,o)}jsonp(t,o){return this.request("JSONP",t,{params:new Ot().append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,o={}){return this.request("OPTIONS",t,o)}patch(t,o,n={}){return this.request("PATCH",t,Ia(n,o))}post(t,o,n={}){return this.request("POST",t,Ia(n,o))}put(t,o,n={}){return this.request("PUT",t,Ia(n,o))}static \u0275fac=function(o){return new(o||e)(E(Lo))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Bh=new I("");function Lh(e,r){return r(e)}function $h(e,r,t){return(o,n)=>Ye(t,()=>r(o,i=>e(i,n)))}var Fa=new I(""),dc=new I(""),pc=new I("",{providedIn:"root",factory:()=>!0});var Yn=(()=>{class e extends Lo{backend;injector;chain=null;pendingTasks=d(yn);contributeToStability=d(pc);constructor(t,o){super(),this.backend=t,this.injector=o}handle(t){if(this.chain===null){let o=Array.from(new Set([...this.injector.get(Fa),...this.injector.get(dc,[])]));this.chain=o.reduceRight((n,i)=>$h(n,i,this.injector),Lh)}if(this.contributeToStability){let o=this.pendingTasks.add();return this.chain(t,n=>this.backend.handle(n)).pipe(Ao(()=>this.pendingTasks.remove(o)))}else return this.chain(t,o=>this.backend.handle(o))}static \u0275fac=function(o){return new(o||e)(E(xr),E($t))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Nh=/^\)\]\}',?\n/,Ph=RegExp(`^${sc}:`,"m");function Vh(e){return"responseURL"in e&&e.responseURL?e.responseURL:Ph.test(e.getAllResponseHeaders())?e.getResponseHeader(sc):null}var Ma=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new F(-2800,!1);let o=this.xhrFactory;return(o.\u0275loadImpl?be(o.\u0275loadImpl()):x(null)).pipe(Oe(()=>new $s(i=>{let a=o.build();if(a.open(t.method,t.urlWithParams),t.withCredentials&&(a.withCredentials=!0),t.headers.forEach((w,k)=>a.setRequestHeader(w,k.join(","))),t.headers.has(ac)||a.setRequestHeader(ac,Mh),!t.headers.has(ic)){let w=t.detectContentTypeHeader();w!==null&&a.setRequestHeader(ic,w)}if(t.responseType){let w=t.responseType.toLowerCase();a.responseType=w!=="json"?w:"text"}let s=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let w=a.statusText||"OK",k=new Ht(a.getAllResponseHeaders()),ae=Vh(a)||t.url;return l=new qn({headers:k,status:a.status,statusText:w,url:ae}),l},u=()=>{let{headers:w,status:k,statusText:ae,url:pe}=c(),Q=null;k!==Oh&&(Q=typeof a.response>"u"?a.responseText:a.response),k===0&&(k=Q?Fh:0);let Ee=k>=200&&k<300;if(t.responseType==="json"&&typeof Q=="string"){let ko=Q;Q=Q.replace(Nh,"");try{Q=Q!==""?JSON.parse(Q):null}catch(xo){Q=ko,Ee&&(Ee=!1,Q={error:xo,text:Q})}}Ee?(i.next(new Er({body:Q,headers:w,status:k,statusText:ae,url:pe||void 0})),i.complete()):i.error(new Ar({error:Q,headers:w,status:k,statusText:ae,url:pe||void 0}))},p=w=>{let{url:k}=c(),ae=new Ar({error:w,status:a.status||0,statusText:a.statusText||"Unknown Error",url:k||void 0});i.error(ae)},h=!1,g=w=>{h||(i.next(c()),h=!0);let k={type:ho.DownloadProgress,loaded:w.loaded};w.lengthComputable&&(k.total=w.total),t.responseType==="text"&&a.responseText&&(k.partialText=a.responseText),i.next(k)},S=w=>{let k={type:ho.UploadProgress,loaded:w.loaded};w.lengthComputable&&(k.total=w.total),i.next(k)};return a.addEventListener("load",u),a.addEventListener("error",p),a.addEventListener("timeout",p),a.addEventListener("abort",p),t.reportProgress&&(a.addEventListener("progress",g),s!==null&&a.upload&&a.upload.addEventListener("progress",S)),a.send(s),i.next({type:ho.Sent}),()=>{a.removeEventListener("error",p),a.removeEventListener("abort",p),a.removeEventListener("load",u),a.removeEventListener("timeout",p),t.reportProgress&&(a.removeEventListener("progress",g),s!==null&&a.upload&&a.upload.removeEventListener("progress",S)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(o){return new(o||e)(E(fo))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),fc=new I(""),Uh="XSRF-TOKEN",zh=new I("",{providedIn:"root",factory:()=>Uh}),jh="X-XSRF-TOKEN",Hh=new I("",{providedIn:"root",factory:()=>jh}),Tr=class{},Wh=(()=>{class e{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,o){this.doc=t,this.cookieName=o}getToken(){let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Cr(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(o){return new(o||e)(E(Y),E(zh))};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function Gh(e,r){let t=e.url.toLowerCase();if(!d(fc)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return r(e);let o=d(Tr).getToken(),n=d(Hh);return o!=null&&!e.headers.has(n)&&(e=e.clone({headers:e.headers.set(n,o)})),r(e)}var Oa=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Oa||{});function qh(e,r){return{\u0275kind:e,\u0275providers:r}}function Yh(...e){let r=[uc,Ma,Yn,{provide:Lo,useExisting:Yn},{provide:xr,useFactory:()=>d(Bh,{optional:!0})??d(Ma)},{provide:Fa,useValue:Gh,multi:!0},{provide:fc,useValue:!0},{provide:Tr,useClass:Wh}];for(let t of e)r.push(...t.\u0275providers);return io(r)}function Kh(e){return qh(Oa.Interceptors,e.map(r=>({provide:Fa,useValue:r,multi:!0})))}var hc=(()=>{class e{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(o){return new(o||e)(E(Y))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Xh=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:function(o){let n=null;return o?n=new(o||e):n=E(Qh),n},providedIn:"root"})}return e})(),Qh=(()=>{class e extends Xh{_doc;constructor(t){super(),this._doc=t}sanitize(t,o){if(o==null)return null;switch(t){case so.NONE:return o;case so.HTML:return To(o,"HTML")?ao(o):nl(this._doc,String(o)).toString();case so.STYLE:return To(o,"Style")?ao(o):o;case so.SCRIPT:if(To(o,"Script"))return ao(o);throw new F(5200,!1);case so.URL:return To(o,"URL")?ao(o):rl(String(o));case so.RESOURCE_URL:if(To(o,"ResourceURL"))return ao(o);throw new F(5201,!1);default:throw new F(5202,!1)}}bypassSecurityTrustHtml(t){return Qs(t)}bypassSecurityTrustStyle(t){return Js(t)}bypassSecurityTrustScript(t){return el(t)}bypassSecurityTrustUrl(t){return tl(t)}bypassSecurityTrustResourceUrl(t){return ol(t)}static \u0275fac=function(o){return new(o||e)(E(Y))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var M="primary",zr=Symbol("RouteTitle"),Pa=class{params;constructor(r){this.params=r||{}}has(r){return Object.prototype.hasOwnProperty.call(this.params,r)}get(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t[0]:t}return null}getAll(r){if(this.has(r)){let t=this.params[r];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function bo(e){return new Pa(e)}function _c(e,r,t){let o=t.path.split("/");if(o.length>e.length||t.pathMatch==="full"&&(r.hasChildren()||o.length<e.length))return null;let n={};for(let i=0;i<o.length;i++){let a=o[i],s=e[i];if(a[0]===":")n[a.substring(1)]=s;else if(a!==s.path)return null}return{consumed:e.slice(0,o.length),posParams:n}}function eg(e,r){if(e.length!==r.length)return!1;for(let t=0;t<e.length;++t)if(!yt(e[t],r[t]))return!1;return!0}function yt(e,r){let t=e?Va(e):void 0,o=r?Va(r):void 0;if(!t||!o||t.length!=o.length)return!1;let n;for(let i=0;i<t.length;i++)if(n=t[i],!Dc(e[n],r[n]))return!1;return!0}function Va(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Dc(e,r){if(Array.isArray(e)&&Array.isArray(r)){if(e.length!==r.length)return!1;let t=[...e].sort(),o=[...r].sort();return t.every((n,i)=>o[i]===n)}else return e===r}function Sc(e){return e.length>0?e[e.length-1]:null}function Kt(e){return Ns(e)?e:Io(e)?be(Promise.resolve(e)):x(e)}var tg={exact:xc,subset:Ec},kc={exact:og,subset:rg,ignored:()=>!0};function gc(e,r,t){return tg[t.paths](e.root,r.root,t.matrixParams)&&kc[t.queryParams](e.queryParams,r.queryParams)&&!(t.fragment==="exact"&&e.fragment!==r.fragment)}function og(e,r){return yt(e,r)}function xc(e,r,t){if(!go(e.segments,r.segments)||!Xn(e.segments,r.segments,t)||e.numberOfChildren!==r.numberOfChildren)return!1;for(let o in r.children)if(!e.children[o]||!xc(e.children[o],r.children[o],t))return!1;return!0}function rg(e,r){return Object.keys(r).length<=Object.keys(e).length&&Object.keys(r).every(t=>Dc(e[t],r[t]))}function Ec(e,r,t){return Ac(e,r,r.segments,t)}function Ac(e,r,t,o){if(e.segments.length>t.length){let n=e.segments.slice(0,t.length);return!(!go(n,t)||r.hasChildren()||!Xn(n,t,o))}else if(e.segments.length===t.length){if(!go(e.segments,t)||!Xn(e.segments,t,o))return!1;for(let n in r.children)if(!e.children[n]||!Ec(e.children[n],r.children[n],o))return!1;return!0}else{let n=t.slice(0,e.segments.length),i=t.slice(e.segments.length);return!go(e.segments,n)||!Xn(e.segments,n,o)||!e.children[M]?!1:Ac(e.children[M],r,i,o)}}function Xn(e,r,t){return r.every((o,n)=>kc[t](e[n].parameters,o.parameters))}var wt=class{root;queryParams;fragment;_queryParamMap;constructor(r=new j([],{}),t={},o=null){this.root=r,this.queryParams=t,this.fragment=o}get queryParamMap(){return this._queryParamMap??=bo(this.queryParams),this._queryParamMap}toString(){return ag.serialize(this)}},j=class{segments;children;parent=null;constructor(r,t){this.segments=r,this.children=t,Object.values(t).forEach(o=>o.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Qn(this)}},Wt=class{path;parameters;_parameterMap;constructor(r,t){this.path=r,this.parameters=t}get parameterMap(){return this._parameterMap??=bo(this.parameters),this._parameterMap}toString(){return Rc(this)}};function ng(e,r){return go(e,r)&&e.every((t,o)=>yt(t.parameters,r[o].parameters))}function go(e,r){return e.length!==r.length?!1:e.every((t,o)=>t.path===r[o].path)}function ig(e,r){let t=[];return Object.entries(e.children).forEach(([o,n])=>{o===M&&(t=t.concat(r(n,o)))}),Object.entries(e.children).forEach(([o,n])=>{o!==M&&(t=t.concat(r(n,o)))}),t}var Zt=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>new Gt,providedIn:"root"})}return e})(),Gt=class{parse(r){let t=new za(r);return new wt(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(r){let t=`/${Rr(r.root,!0)}`,o=cg(r.queryParams),n=typeof r.fragment=="string"?`#${sg(r.fragment)}`:"";return`${t}${o}${n}`}},ag=new Gt;function Qn(e){return e.segments.map(r=>Rc(r)).join("/")}function Rr(e,r){if(!e.hasChildren())return Qn(e);if(r){let t=e.children[M]?Rr(e.children[M],!1):"",o=[];return Object.entries(e.children).forEach(([n,i])=>{n!==M&&o.push(`${n}:${Rr(i,!1)}`)}),o.length>0?`${t}(${o.join("//")})`:t}else{let t=ig(e,(o,n)=>n===M?[Rr(e.children[M],!1)]:[`${n}:${Rr(o,!1)}`]);return Object.keys(e.children).length===1&&e.children[M]!=null?`${Qn(e)}/${t[0]}`:`${Qn(e)}/(${t.join("//")})`}}function Tc(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Kn(e){return Tc(e).replace(/%3B/gi,";")}function sg(e){return encodeURI(e)}function Ua(e){return Tc(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Jn(e){return decodeURIComponent(e)}function mc(e){return Jn(e.replace(/\+/g,"%20"))}function Rc(e){return`${Ua(e.path)}${lg(e.parameters)}`}function lg(e){return Object.entries(e).map(([r,t])=>`;${Ua(r)}=${Ua(t)}`).join("")}function cg(e){let r=Object.entries(e).map(([t,o])=>Array.isArray(o)?o.map(n=>`${Kn(t)}=${Kn(n)}`).join("&"):`${Kn(t)}=${Kn(o)}`).filter(t=>t);return r.length?`?${r.join("&")}`:""}var ug=/^[^\/()?;#]+/;function Ba(e){let r=e.match(ug);return r?r[0]:""}var dg=/^[^\/()?;=#]+/;function pg(e){let r=e.match(dg);return r?r[0]:""}var fg=/^[^=?&#]+/;function hg(e){let r=e.match(fg);return r?r[0]:""}var gg=/^[^&#]+/;function mg(e){let r=e.match(gg);return r?r[0]:""}var za=class{url;remaining;constructor(r){this.url=r,this.remaining=r}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new j([],{}):new j([],this.parseChildren())}parseQueryParams(){let r={};if(this.consumeOptional("?"))do this.parseQueryParam(r);while(this.consumeOptional("&"));return r}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let r=[];for(this.peekStartsWith("(")||r.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),r.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let o={};return this.peekStartsWith("(")&&(o=this.parseParens(!1)),(r.length>0||Object.keys(t).length>0)&&(o[M]=new j(r,t)),o}parseSegment(){let r=Ba(this.remaining);if(r===""&&this.peekStartsWith(";"))throw new F(4009,!1);return this.capture(r),new Wt(Jn(r),this.parseMatrixParams())}parseMatrixParams(){let r={};for(;this.consumeOptional(";");)this.parseParam(r);return r}parseParam(r){let t=pg(this.remaining);if(!t)return;this.capture(t);let o="";if(this.consumeOptional("=")){let n=Ba(this.remaining);n&&(o=n,this.capture(o))}r[Jn(t)]=Jn(o)}parseQueryParam(r){let t=hg(this.remaining);if(!t)return;this.capture(t);let o="";if(this.consumeOptional("=")){let a=mg(this.remaining);a&&(o=a,this.capture(o))}let n=mc(t),i=mc(o);if(r.hasOwnProperty(n)){let a=r[n];Array.isArray(a)||(a=[a],r[n]=a),a.push(i)}else r[n]=i}parseParens(r){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let o=Ba(this.remaining),n=this.remaining[o.length];if(n!=="/"&&n!==")"&&n!==";")throw new F(4010,!1);let i;o.indexOf(":")>-1?(i=o.slice(0,o.indexOf(":")),this.capture(i),this.capture(":")):r&&(i=M);let a=this.parseChildren();t[i]=Object.keys(a).length===1?a[M]:new j([],a),this.consumeOptional("//")}return t}peekStartsWith(r){return this.remaining.startsWith(r)}consumeOptional(r){return this.peekStartsWith(r)?(this.remaining=this.remaining.substring(r.length),!0):!1}capture(r){if(!this.consumeOptional(r))throw new F(4011,!1)}};function Ic(e){return e.segments.length>0?new j([],{[M]:e}):e}function Mc(e){let r={};for(let[o,n]of Object.entries(e.children)){let i=Mc(n);if(o===M&&i.segments.length===0&&i.hasChildren())for(let[a,s]of Object.entries(i.children))r[a]=s;else(i.segments.length>0||i.hasChildren())&&(r[o]=i)}let t=new j(e.segments,r);return bg(t)}function bg(e){if(e.numberOfChildren===1&&e.children[M]){let r=e.children[M];return new j(e.segments.concat(r.segments),r.children)}return e}function qt(e){return e instanceof wt}function Fc(e,r,t=null,o=null){let n=Oc(e);return Bc(n,r,t,o)}function Oc(e){let r;function t(i){let a={};for(let l of i.children){let c=t(l);a[l.outlet]=c}let s=new j(i.url,a);return i===e&&(r=s),s}let o=t(e.root),n=Ic(o);return r??n}function Bc(e,r,t,o){let n=e;for(;n.parent;)n=n.parent;if(r.length===0)return La(n,n,n,t,o);let i=vg(r);if(i.toRoot())return La(n,n,new j([],{}),t,o);let a=yg(i,n,e),s=a.processChildren?Mr(a.segmentGroup,a.index,i.commands):$c(a.segmentGroup,a.index,i.commands);return La(n,a.segmentGroup,s,t,o)}function ti(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Or(e){return typeof e=="object"&&e!=null&&e.outlets}function La(e,r,t,o,n){let i={};o&&Object.entries(o).forEach(([l,c])=>{i[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let a;e===r?a=t:a=Lc(e,r,t);let s=Ic(Mc(a));return new wt(s,i,n)}function Lc(e,r,t){let o={};return Object.entries(e.children).forEach(([n,i])=>{i===r?o[n]=t:o[n]=Lc(i,r,t)}),new j(e.segments,o)}var oi=class{isAbsolute;numberOfDoubleDots;commands;constructor(r,t,o){if(this.isAbsolute=r,this.numberOfDoubleDots=t,this.commands=o,r&&o.length>0&&ti(o[0]))throw new F(4003,!1);let n=o.find(Or);if(n&&n!==Sc(o))throw new F(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vg(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new oi(!0,0,e);let r=0,t=!1,o=e.reduce((n,i,a)=>{if(typeof i=="object"&&i!=null){if(i.outlets){let s={};return Object.entries(i.outlets).forEach(([l,c])=>{s[l]=typeof c=="string"?c.split("/"):c}),[...n,{outlets:s}]}if(i.segmentPath)return[...n,i.segmentPath]}return typeof i!="string"?[...n,i]:a===0?(i.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?t=!0:s===".."?r++:s!=""&&n.push(s))}),n):[...n,i]},[]);return new oi(t,r,o)}var Vo=class{segmentGroup;processChildren;index;constructor(r,t,o){this.segmentGroup=r,this.processChildren=t,this.index=o}};function yg(e,r,t){if(e.isAbsolute)return new Vo(r,!0,0);if(!t)return new Vo(r,!1,NaN);if(t.parent===null)return new Vo(t,!0,0);let o=ti(e.commands[0])?0:1,n=t.segments.length-1+o;return Cg(t,n,e.numberOfDoubleDots)}function Cg(e,r,t){let o=e,n=r,i=t;for(;i>n;){if(i-=n,o=o.parent,!o)throw new F(4005,!1);n=o.segments.length}return new Vo(o,!1,n-i)}function wg(e){return Or(e[0])?e[0].outlets:{[M]:e}}function $c(e,r,t){if(e??=new j([],{}),e.segments.length===0&&e.hasChildren())return Mr(e,r,t);let o=_g(e,r,t),n=t.slice(o.commandIndex);if(o.match&&o.pathIndex<e.segments.length){let i=new j(e.segments.slice(0,o.pathIndex),{});return i.children[M]=new j(e.segments.slice(o.pathIndex),e.children),Mr(i,0,n)}else return o.match&&n.length===0?new j(e.segments,{}):o.match&&!e.hasChildren()?ja(e,r,t):o.match?Mr(e,0,n):ja(e,r,t)}function Mr(e,r,t){if(t.length===0)return new j(e.segments,{});{let o=wg(t),n={};if(Object.keys(o).some(i=>i!==M)&&e.children[M]&&e.numberOfChildren===1&&e.children[M].segments.length===0){let i=Mr(e.children[M],r,t);return new j(e.segments,i.children)}return Object.entries(o).forEach(([i,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(n[i]=$c(e.children[i],r,a))}),Object.entries(e.children).forEach(([i,a])=>{o[i]===void 0&&(n[i]=a)}),new j(e.segments,n)}}function _g(e,r,t){let o=0,n=r,i={match:!1,pathIndex:0,commandIndex:0};for(;n<e.segments.length;){if(o>=t.length)return i;let a=e.segments[n],s=t[o];if(Or(s))break;let l=`${s}`,c=o<t.length-1?t[o+1]:null;if(n>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!vc(l,c,a))return i;o+=2}else{if(!vc(l,{},a))return i;o++}n++}return{match:!0,pathIndex:n,commandIndex:o}}function ja(e,r,t){let o=e.segments.slice(0,r),n=0;for(;n<t.length;){let i=t[n];if(Or(i)){let l=Dg(i.outlets);return new j(o,l)}if(n===0&&ti(t[0])){let l=e.segments[r];o.push(new Wt(l.path,bc(t[0]))),n++;continue}let a=Or(i)?i.outlets[M]:`${i}`,s=n<t.length-1?t[n+1]:null;a&&s&&ti(s)?(o.push(new Wt(a,bc(s))),n+=2):(o.push(new Wt(a,{})),n++)}return new j(o,{})}function Dg(e){let r={};return Object.entries(e).forEach(([t,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[t]=ja(new j([],{}),0,o))}),r}function bc(e){let r={};return Object.entries(e).forEach(([t,o])=>r[t]=`${o}`),r}function vc(e,r,t){return e==t.path&&yt(r,t.parameters)}var ei="imperative",ye=function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e}(ye||{}),Ue=class{id;url;constructor(r,t){this.id=r,this.url=t}},Yt=class extends Ue{type=ye.NavigationStart;navigationTrigger;restoredState;constructor(r,t,o="imperative",n=null){super(r,t),this.navigationTrigger=o,this.restoredState=n}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ze=class extends Ue{urlAfterRedirects;type=ye.NavigationEnd;constructor(r,t,o){super(r,t),this.urlAfterRedirects=o}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Fe=function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e}(Fe||{}),zo=function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e}(zo||{}),Ct=class extends Ue{reason;code;type=ye.NavigationCancel;constructor(r,t,o,n){super(r,t),this.reason=o,this.code=n}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},_t=class extends Ue{reason;code;type=ye.NavigationSkipped;constructor(r,t,o,n){super(r,t),this.reason=o,this.code=n}},jo=class extends Ue{error;target;type=ye.NavigationError;constructor(r,t,o,n){super(r,t),this.error=o,this.target=n}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Br=class extends Ue{urlAfterRedirects;state;type=ye.RoutesRecognized;constructor(r,t,o,n){super(r,t),this.urlAfterRedirects=o,this.state=n}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ri=class extends Ue{urlAfterRedirects;state;type=ye.GuardsCheckStart;constructor(r,t,o,n){super(r,t),this.urlAfterRedirects=o,this.state=n}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ni=class extends Ue{urlAfterRedirects;state;shouldActivate;type=ye.GuardsCheckEnd;constructor(r,t,o,n,i){super(r,t),this.urlAfterRedirects=o,this.state=n,this.shouldActivate=i}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ii=class extends Ue{urlAfterRedirects;state;type=ye.ResolveStart;constructor(r,t,o,n){super(r,t),this.urlAfterRedirects=o,this.state=n}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ai=class extends Ue{urlAfterRedirects;state;type=ye.ResolveEnd;constructor(r,t,o,n){super(r,t),this.urlAfterRedirects=o,this.state=n}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},si=class{route;type=ye.RouteConfigLoadStart;constructor(r){this.route=r}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},li=class{route;type=ye.RouteConfigLoadEnd;constructor(r){this.route=r}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ci=class{snapshot;type=ye.ChildActivationStart;constructor(r){this.snapshot=r}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ui=class{snapshot;type=ye.ChildActivationEnd;constructor(r){this.snapshot=r}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},di=class{snapshot;type=ye.ActivationStart;constructor(r){this.snapshot=r}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pi=class{snapshot;type=ye.ActivationEnd;constructor(r){this.snapshot=r}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ho=class{routerEvent;position;anchor;type=ye.Scroll;constructor(r,t,o){this.routerEvent=r,this.position=t,this.anchor=o}toString(){let r=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${r}')`}},Lr=class{},Wo=class{url;navigationBehaviorOptions;constructor(r,t){this.url=r,this.navigationBehaviorOptions=t}};function Sg(e,r){return e.providers&&!e._injector&&(e._injector=Cn(e.providers,r,`Route: ${e.path}`)),e._injector??r}function pt(e){return e.outlet||M}function kg(e,r){let t=e.filter(o=>pt(o)===r);return t.push(...e.filter(o=>pt(o)!==r)),t}function jr(e){if(!e)return null;if(e.routeConfig?._injector)return e.routeConfig._injector;for(let r=e.parent;r;r=r.parent){let t=r.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var fi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return jr(this.route?.snapshot)??this.rootInjector}constructor(r){this.rootInjector=r,this.children=new vo(this.rootInjector)}},vo=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,o){let n=this.getOrCreateContext(t);n.outlet=o,this.contexts.set(t,n)}onChildOutletDestroyed(t){let o=this.getContext(t);o&&(o.outlet=null,o.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let o=this.getContext(t);return o||(o=new fi(this.rootInjector),this.contexts.set(t,o)),o}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(o){return new(o||e)(E($t))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),hi=class{_root;constructor(r){this._root=r}get root(){return this._root.value}parent(r){let t=this.pathFromRoot(r);return t.length>1?t[t.length-2]:null}children(r){let t=Ha(r,this._root);return t?t.children.map(o=>o.value):[]}firstChild(r){let t=Ha(r,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(r){let t=Wa(r,this._root);return t.length<2?[]:t[t.length-2].children.map(n=>n.value).filter(n=>n!==r)}pathFromRoot(r){return Wa(r,this._root).map(t=>t.value)}};function Ha(e,r){if(e===r.value)return r;for(let t of r.children){let o=Ha(e,t);if(o)return o}return null}function Wa(e,r){if(e===r.value)return[r];for(let t of r.children){let o=Wa(e,t);if(o.length)return o.unshift(r),o}return[]}var Ve=class{value;children;constructor(r,t){this.value=r,this.children=t}toString(){return`TreeNode(${this.value})`}};function Po(e){let r={};return e&&e.children.forEach(t=>r[t.value.outlet]=t),r}var $r=class extends hi{snapshot;constructor(r,t){super(r),this.snapshot=t,Ja(this,r)}toString(){return this.snapshot.toString()}};function Nc(e){let r=xg(e),t=new qe([new Wt("",{})]),o=new qe({}),n=new qe({}),i=new qe({}),a=new qe(""),s=new Dt(t,o,i,a,n,M,e,r.root);return s.snapshot=r.root,new $r(new Ve(s,[]),r)}function xg(e){let r={},t={},o={},n="",i=new mo([],r,o,n,t,M,e,null,{});return new Nr("",new Ve(i,[]))}var Dt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(r,t,o,n,i,a,s,l){this.urlSubject=r,this.paramsSubject=t,this.queryParamsSubject=o,this.fragmentSubject=n,this.dataSubject=i,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(P(c=>c[zr]))??x(void 0),this.url=r,this.params=t,this.queryParams=o,this.fragment=n,this.data=i}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(P(r=>bo(r))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(P(r=>bo(r))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function gi(e,r,t="emptyOnly"){let o,{routeConfig:n}=e;return r!==null&&(t==="always"||n?.path===""||!r.component&&!r.routeConfig?.loadComponent)?o={params:f(f({},r.params),e.params),data:f(f({},r.data),e.data),resolve:f(f(f(f({},e.data),r.data),n?.data),e._resolvedData)}:o={params:f({},e.params),data:f({},e.data),resolve:f(f({},e.data),e._resolvedData??{})},n&&Vc(n)&&(o.resolve[zr]=n.title),o}var mo=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[zr]}constructor(r,t,o,n,i,a,s,l,c){this.url=r,this.params=t,this.queryParams=o,this.fragment=n,this.data=i,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=bo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=bo(this.queryParams),this._queryParamMap}toString(){let r=this.url.map(o=>o.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${r}', path:'${t}')`}},Nr=class extends hi{url;constructor(r,t){super(t),this.url=r,Ja(this,t)}toString(){return Pc(this._root)}};function Ja(e,r){r.value._routerState=e,r.children.forEach(t=>Ja(e,t))}function Pc(e){let r=e.children.length>0?` { ${e.children.map(Pc).join(", ")} } `:"";return`${e.value}${r}`}function $a(e){if(e.snapshot){let r=e.snapshot,t=e._futureSnapshot;e.snapshot=t,yt(r.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),r.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),yt(r.params,t.params)||e.paramsSubject.next(t.params),eg(r.url,t.url)||e.urlSubject.next(t.url),yt(r.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function Ga(e,r){let t=yt(e.params,r.params)&&ng(e.url,r.url),o=!e.parent!=!r.parent;return t&&!o&&(!e.parent||Ga(e.parent,r.parent))}function Vc(e){return typeof e.title=="string"||e.title===null}var Uc=new I(""),es=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=M;activateEvents=new z;deactivateEvents=new z;attachEvents=new z;detachEvents=new z;routerOutletData=bt(void 0);parentContexts=d(vo);location=d(Ro);changeDetector=d(lt);inputBinder=d(Hr,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:o,previousValue:n}=t.name;if(o)return;this.isTrackedInParentContexts(n)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(n)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new F(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new F(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new F(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,o){this.activated=t,this._activatedRoute=o,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,o){if(this.isActivated)throw new F(4013,!1);this._activatedRoute=t;let n=this.location,a=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new qa(t,s,n.injector,this.routerOutletData);this.activated=n.createComponent(a,{index:n.length,injector:l,environmentInjector:o}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[De]})}return e})(),qa=class{route;childContexts;parent;outletData;constructor(r,t,o,n){this.route=r,this.childContexts=t,this.parent=o,this.outletData=n}get(r,t){return r===Dt?this.route:r===vo?this.childContexts:r===Uc?this.outletData:this.parent.get(r,t)}},Hr=new I(""),ts=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:o}=t,n=bn([o.queryParams,o.params,o.data]).pipe(Oe(([i,a,s],l)=>(s=f(f(f({},i),a),s),l===0?x(s):Promise.resolve(s)))).subscribe(i=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==o||o.component===null){this.unsubscribeFromRouteData(t);return}let a=_l(o.component);if(!a){this.unsubscribeFromRouteData(t);return}for(let{templateName:s}of a.inputs)t.activatedComponentRef.setInput(s,i[s])});this.outletDataSubscriptions.set(t,n)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),os=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=J({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(o,n){o&1&&fe(0,"router-outlet")},dependencies:[es],encapsulation:2})}return e})();function rs(e){let r=e.children&&e.children.map(rs),t=r?T(f({},e),{children:r}):f({},e);return!t.component&&!t.loadComponent&&(r||t.loadChildren)&&t.outlet&&t.outlet!==M&&(t.component=os),t}function Eg(e,r,t){let o=Pr(e,r._root,t?t._root:void 0);return new $r(o,r)}function Pr(e,r,t){if(t&&e.shouldReuseRoute(r.value,t.value.snapshot)){let o=t.value;o._futureSnapshot=r.value;let n=Ag(e,r,t);return new Ve(o,n)}else{if(e.shouldAttach(r.value)){let i=e.retrieve(r.value);if(i!==null){let a=i.route;return a.value._futureSnapshot=r.value,a.children=r.children.map(s=>Pr(e,s)),a}}let o=Tg(r.value),n=r.children.map(i=>Pr(e,i));return new Ve(o,n)}}function Ag(e,r,t){return r.children.map(o=>{for(let n of t.children)if(e.shouldReuseRoute(o.value,n.value.snapshot))return Pr(e,o,n);return Pr(e,o)})}function Tg(e){return new Dt(new qe(e.url),new qe(e.params),new qe(e.queryParams),new qe(e.fragment),new qe(e.data),e.outlet,e.component,e)}var Go=class{redirectTo;navigationBehaviorOptions;constructor(r,t){this.redirectTo=r,this.navigationBehaviorOptions=t}},zc="ngNavigationCancelingError";function mi(e,r){let{redirectTo:t,navigationBehaviorOptions:o}=qt(r)?{redirectTo:r,navigationBehaviorOptions:void 0}:r,n=jc(!1,Fe.Redirect);return n.url=t,n.navigationBehaviorOptions=o,n}function jc(e,r){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[zc]=!0,t.cancellationCode=r,t}function Rg(e){return Hc(e)&&qt(e.url)}function Hc(e){return!!e&&e[zc]}var Ig=(e,r,t,o)=>P(n=>(new Ya(r,n.targetRouterState,n.currentRouterState,t,o).activate(e),n)),Ya=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(r,t,o,n,i){this.routeReuseStrategy=r,this.futureState=t,this.currState=o,this.forwardEvent=n,this.inputBindingEnabled=i}activate(r){let t=this.futureState._root,o=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,o,r),$a(this.futureState.root),this.activateChildRoutes(t,o,r)}deactivateChildRoutes(r,t,o){let n=Po(t);r.children.forEach(i=>{let a=i.value.outlet;this.deactivateRoutes(i,n[a],o),delete n[a]}),Object.values(n).forEach(i=>{this.deactivateRouteAndItsChildren(i,o)})}deactivateRoutes(r,t,o){let n=r.value,i=t?t.value:null;if(n===i)if(n.component){let a=o.getContext(n.outlet);a&&this.deactivateChildRoutes(r,t,a.children)}else this.deactivateChildRoutes(r,t,o);else i&&this.deactivateRouteAndItsChildren(t,o)}deactivateRouteAndItsChildren(r,t){r.value.component&&this.routeReuseStrategy.shouldDetach(r.value.snapshot)?this.detachAndStoreRouteSubtree(r,t):this.deactivateRouteAndOutlet(r,t)}detachAndStoreRouteSubtree(r,t){let o=t.getContext(r.value.outlet),n=o&&r.value.component?o.children:t,i=Po(r);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,n);if(o&&o.outlet){let a=o.outlet.detach(),s=o.children.onOutletDeactivated();this.routeReuseStrategy.store(r.value.snapshot,{componentRef:a,route:r,contexts:s})}}deactivateRouteAndOutlet(r,t){let o=t.getContext(r.value.outlet),n=o&&r.value.component?o.children:t,i=Po(r);for(let a of Object.values(i))this.deactivateRouteAndItsChildren(a,n);o&&(o.outlet&&(o.outlet.deactivate(),o.children.onOutletDeactivated()),o.attachRef=null,o.route=null)}activateChildRoutes(r,t,o){let n=Po(t);r.children.forEach(i=>{this.activateRoutes(i,n[i.value.outlet],o),this.forwardEvent(new pi(i.value.snapshot))}),r.children.length&&this.forwardEvent(new ui(r.value.snapshot))}activateRoutes(r,t,o){let n=r.value,i=t?t.value:null;if($a(n),n===i)if(n.component){let a=o.getOrCreateContext(n.outlet);this.activateChildRoutes(r,t,a.children)}else this.activateChildRoutes(r,t,o);else if(n.component){let a=o.getOrCreateContext(n.outlet);if(this.routeReuseStrategy.shouldAttach(n.snapshot)){let s=this.routeReuseStrategy.retrieve(n.snapshot);this.routeReuseStrategy.store(n.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),$a(s.route.value),this.activateChildRoutes(r,null,a.children)}else a.attachRef=null,a.route=n,a.outlet&&a.outlet.activateWith(n,a.injector),this.activateChildRoutes(r,null,a.children)}else this.activateChildRoutes(r,null,o)}},bi=class{path;route;constructor(r){this.path=r,this.route=this.path[this.path.length-1]}},Uo=class{component;route;constructor(r,t){this.component=r,this.route=t}};function Mg(e,r,t){let o=e._root,n=r?r._root:null;return Ir(o,n,t,[o.value])}function Fg(e){let r=e.routeConfig?e.routeConfig.canActivateChild:null;return!r||r.length===0?null:{node:e,guards:r}}function Yo(e,r){let t=Symbol(),o=r.get(e,t);return o===t?typeof e=="function"&&!Gs(e)?e:r.get(e):o}function Ir(e,r,t,o,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=Po(r);return e.children.forEach(a=>{Og(a,i[a.value.outlet],t,o.concat([a.value]),n),delete i[a.value.outlet]}),Object.entries(i).forEach(([a,s])=>Fr(s,t.getContext(a),n)),n}function Og(e,r,t,o,n={canDeactivateChecks:[],canActivateChecks:[]}){let i=e.value,a=r?r.value:null,s=t?t.getContext(e.value.outlet):null;if(a&&i.routeConfig===a.routeConfig){let l=Bg(a,i,i.routeConfig.runGuardsAndResolvers);l?n.canActivateChecks.push(new bi(o)):(i.data=a.data,i._resolvedData=a._resolvedData),i.component?Ir(e,r,s?s.children:null,o,n):Ir(e,r,t,o,n),l&&s&&s.outlet&&s.outlet.isActivated&&n.canDeactivateChecks.push(new Uo(s.outlet.component,a))}else a&&Fr(r,s,n),n.canActivateChecks.push(new bi(o)),i.component?Ir(e,null,s?s.children:null,o,n):Ir(e,null,t,o,n);return n}function Bg(e,r,t){if(typeof t=="function")return t(e,r);switch(t){case"pathParamsChange":return!go(e.url,r.url);case"pathParamsOrQueryParamsChange":return!go(e.url,r.url)||!yt(e.queryParams,r.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Ga(e,r)||!yt(e.queryParams,r.queryParams);case"paramsChange":default:return!Ga(e,r)}}function Fr(e,r,t){let o=Po(e),n=e.value;Object.entries(o).forEach(([i,a])=>{n.component?r?Fr(a,r.children.getContext(i),t):Fr(a,null,t):Fr(a,r,t)}),n.component?r&&r.outlet&&r.outlet.isActivated?t.canDeactivateChecks.push(new Uo(r.outlet.component,n)):t.canDeactivateChecks.push(new Uo(null,n)):t.canDeactivateChecks.push(new Uo(null,n))}function Wr(e){return typeof e=="function"}function Lg(e){return typeof e=="boolean"}function $g(e){return e&&Wr(e.canLoad)}function Ng(e){return e&&Wr(e.canActivate)}function Pg(e){return e&&Wr(e.canActivateChild)}function Vg(e){return e&&Wr(e.canDeactivate)}function Ug(e){return e&&Wr(e.canMatch)}function Wc(e){return e instanceof Ps||e?.name==="EmptyError"}var Zn=Symbol("INITIAL_VALUE");function qo(){return Oe(e=>bn(e.map(r=>r.pipe(Eo(1),Hs(Zn)))).pipe(P(r=>{for(let t of r)if(t!==!0){if(t===Zn)return Zn;if(t===!1||zg(t))return t}return!0}),mt(r=>r!==Zn),Eo(1)))}function zg(e){return qt(e)||e instanceof Go}function jg(e,r){return Te(t=>{let{targetSnapshot:o,currentSnapshot:n,guards:{canActivateChecks:i,canDeactivateChecks:a}}=t;return a.length===0&&i.length===0?x(T(f({},t),{guardsResult:!0})):Hg(a,o,n,e).pipe(Te(s=>s&&Lg(s)?Wg(o,i,e,r):x(s)),P(s=>T(f({},t),{guardsResult:s})))})}function Hg(e,r,t,o){return be(e).pipe(Te(n=>Zg(n.component,n.route,t,r,o)),Lt(n=>n!==!0,!0))}function Wg(e,r,t,o){return be(r).pipe(Et(n=>Vs(qg(n.route.parent,o),Gg(n.route,o),Kg(e,n.path,t),Yg(e,n.route,t))),Lt(n=>n!==!0,!0))}function Gg(e,r){return e!==null&&r&&r(new di(e)),x(!0)}function qg(e,r){return e!==null&&r&&r(new ci(e)),x(!0)}function Yg(e,r,t){let o=r.routeConfig?r.routeConfig.canActivate:null;if(!o||o.length===0)return x(!0);let n=o.map(i=>Zi(()=>{let a=jr(r)??t,s=Yo(i,a),l=Ng(s)?s.canActivate(r,e):Ye(a,()=>s(r,e));return Kt(l).pipe(Lt())}));return x(n).pipe(qo())}function Kg(e,r,t){let o=r[r.length-1],i=r.slice(0,r.length-1).reverse().map(a=>Fg(a)).filter(a=>a!==null).map(a=>Zi(()=>{let s=a.guards.map(l=>{let c=jr(a.node)??t,u=Yo(l,c),p=Pg(u)?u.canActivateChild(o,e):Ye(c,()=>u(o,e));return Kt(p).pipe(Lt())});return x(s).pipe(qo())}));return x(i).pipe(qo())}function Zg(e,r,t,o,n){let i=r&&r.routeConfig?r.routeConfig.canDeactivate:null;if(!i||i.length===0)return x(!0);let a=i.map(s=>{let l=jr(r)??n,c=Yo(s,l),u=Vg(c)?c.canDeactivate(e,r,t,o):Ye(l,()=>c(e,r,t,o));return Kt(u).pipe(Lt())});return x(a).pipe(qo())}function Xg(e,r,t,o){let n=r.canLoad;if(n===void 0||n.length===0)return x(!0);let i=n.map(a=>{let s=Yo(a,e),l=$g(s)?s.canLoad(r,t):Ye(e,()=>s(r,t));return Kt(l)});return x(i).pipe(qo(),Gc(o))}function Gc(e){return Ls(_e(r=>{if(typeof r!="boolean")throw mi(e,r)}),P(r=>r===!0))}function Qg(e,r,t,o){let n=r.canMatch;if(!n||n.length===0)return x(!0);let i=n.map(a=>{let s=Yo(a,e),l=Ug(s)?s.canMatch(r,t):Ye(e,()=>s(r,t));return Kt(l)});return x(i).pipe(qo(),Gc(o))}var Vr=class{segmentGroup;constructor(r){this.segmentGroup=r||null}},Ur=class extends Error{urlTree;constructor(r){super(),this.urlTree=r}};function No(e){return cr(new Vr(e))}function Jg(e){return cr(new F(4e3,!1))}function em(e){return cr(jc(!1,Fe.GuardRejected))}var Ka=class{urlSerializer;urlTree;constructor(r,t){this.urlSerializer=r,this.urlTree=t}lineralizeSegments(r,t){let o=[],n=t.root;for(;;){if(o=o.concat(n.segments),n.numberOfChildren===0)return x(o);if(n.numberOfChildren>1||!n.children[M])return Jg(`${r.redirectTo}`);n=n.children[M]}}applyRedirectCommands(r,t,o,n,i){if(typeof t!="string"){let s=t,{queryParams:l,fragment:c,routeConfig:u,url:p,outlet:h,params:g,data:S,title:w}=n,k=Ye(i,()=>s({params:g,data:S,queryParams:l,fragment:c,routeConfig:u,url:p,outlet:h,title:w}));if(k instanceof wt)throw new Ur(k);t=k}let a=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),r,o);if(t[0]==="/")throw new Ur(a);return a}applyRedirectCreateUrlTree(r,t,o,n){let i=this.createSegmentGroup(r,t.root,o,n);return new wt(i,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(r,t){let o={};return Object.entries(r).forEach(([n,i])=>{if(typeof i=="string"&&i[0]===":"){let s=i.substring(1);o[n]=t[s]}else o[n]=i}),o}createSegmentGroup(r,t,o,n){let i=this.createSegments(r,t.segments,o,n),a={};return Object.entries(t.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(r,l,o,n)}),new j(i,a)}createSegments(r,t,o,n){return t.map(i=>i.path[0]===":"?this.findPosParam(r,i,n):this.findOrReturn(i,o))}findPosParam(r,t,o){let n=o[t.path.substring(1)];if(!n)throw new F(4001,!1);return n}findOrReturn(r,t){let o=0;for(let n of t){if(n.path===r.path)return t.splice(o),n;o++}return r}},Za={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function tm(e,r,t,o,n){let i=qc(e,r,t);return i.matched?(o=Sg(r,o),Qg(o,r,t,n).pipe(P(a=>a===!0?i:f({},Za)))):x(i)}function qc(e,r,t){if(r.path==="**")return om(t);if(r.path==="")return r.pathMatch==="full"&&(e.hasChildren()||t.length>0)?f({},Za):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let n=(r.matcher||_c)(t,e,r);if(!n)return f({},Za);let i={};Object.entries(n.posParams??{}).forEach(([s,l])=>{i[s]=l.path});let a=n.consumed.length>0?f(f({},i),n.consumed[n.consumed.length-1].parameters):i;return{matched:!0,consumedSegments:n.consumed,remainingSegments:t.slice(n.consumed.length),parameters:a,positionalParamSegments:n.posParams??{}}}function om(e){return{matched:!0,parameters:e.length>0?Sc(e).parameters:{},consumedSegments:e,remainingSegments:[],positionalParamSegments:{}}}function yc(e,r,t,o){return t.length>0&&im(e,t,o)?{segmentGroup:new j(r,nm(o,new j(t,e.children))),slicedSegments:[]}:t.length===0&&am(e,t,o)?{segmentGroup:new j(e.segments,rm(e,t,o,e.children)),slicedSegments:t}:{segmentGroup:new j(e.segments,e.children),slicedSegments:t}}function rm(e,r,t,o){let n={};for(let i of t)if(yi(e,r,i)&&!o[pt(i)]){let a=new j([],{});n[pt(i)]=a}return f(f({},o),n)}function nm(e,r){let t={};t[M]=r;for(let o of e)if(o.path===""&&pt(o)!==M){let n=new j([],{});t[pt(o)]=n}return t}function im(e,r,t){return t.some(o=>yi(e,r,o)&&pt(o)!==M)}function am(e,r,t){return t.some(o=>yi(e,r,o))}function yi(e,r,t){return(e.hasChildren()||r.length>0)&&t.pathMatch==="full"?!1:t.path===""}function sm(e,r,t){return r.length===0&&!e.children[t]}var Xa=class{};function lm(e,r,t,o,n,i,a="emptyOnly"){return new Qa(e,r,t,o,n,a,i).recognize()}var cm=31,Qa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(r,t,o,n,i,a,s){this.injector=r,this.configLoader=t,this.rootComponentType=o,this.config=n,this.urlTree=i,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.applyRedirects=new Ka(this.urlSerializer,this.urlTree)}noMatchError(r){return new F(4002,`'${r.segmentGroup}'`)}recognize(){let r=yc(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(r).pipe(P(({children:t,rootSnapshot:o})=>{let n=new Ve(o,t),i=new Nr("",n),a=Fc(o,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,i.url=this.urlSerializer.serialize(a),{state:i,tree:a}}))}match(r){let t=new mo([],Object.freeze({}),Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),M,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,r,M,t).pipe(P(o=>({children:o,rootSnapshot:t})),no(o=>{if(o instanceof Ur)return this.urlTree=o.urlTree,this.match(o.urlTree.root);throw o instanceof Vr?this.noMatchError(o):o}))}processSegmentGroup(r,t,o,n,i){return o.segments.length===0&&o.hasChildren()?this.processChildren(r,t,o,i):this.processSegment(r,t,o,o.segments,n,!0,i).pipe(P(a=>a instanceof Ve?[a]:[]))}processChildren(r,t,o,n){let i=[];for(let a of Object.keys(o.children))a==="primary"?i.unshift(a):i.push(a);return be(i).pipe(Et(a=>{let s=o.children[a],l=kg(t,a);return this.processSegmentGroup(r,l,s,a,n)}),js((a,s)=>(a.push(...s),a)),Xi(null),zs(),Te(a=>{if(a===null)return No(o);let s=Yc(a);return um(s),x(s)}))}processSegment(r,t,o,n,i,a,s){return be(t).pipe(Et(l=>this.processSegmentAgainstRoute(l._injector??r,t,l,o,n,i,a,s).pipe(no(c=>{if(c instanceof Vr)return x(null);throw c}))),Lt(l=>!!l),no(l=>{if(Wc(l))return sm(o,n,i)?x(new Xa):No(o);throw l}))}processSegmentAgainstRoute(r,t,o,n,i,a,s,l){return pt(o)!==a&&(a===M||!yi(n,i,o))?No(n):o.redirectTo===void 0?this.matchSegmentAgainstRoute(r,n,o,i,a,l):this.allowRedirects&&s?this.expandSegmentAgainstRouteUsingRedirect(r,n,t,o,i,a,l):No(n)}expandSegmentAgainstRouteUsingRedirect(r,t,o,n,i,a,s){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:p,remainingSegments:h}=qc(t,n,i);if(!l)return No(t);typeof n.redirectTo=="string"&&n.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>cm&&(this.allowRedirects=!1));let g=new mo(i,c,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Cc(n),pt(n),n.component??n._loadedComponent??null,n,wc(n)),S=gi(g,s,this.paramsInheritanceStrategy);g.params=Object.freeze(S.params),g.data=Object.freeze(S.data);let w=this.applyRedirects.applyRedirectCommands(u,n.redirectTo,p,g,r);return this.applyRedirects.lineralizeSegments(n,w).pipe(Te(k=>this.processSegment(r,o,t,k.concat(h),a,!1,s)))}matchSegmentAgainstRoute(r,t,o,n,i,a){let s=tm(t,o,n,r,this.urlSerializer);return o.path==="**"&&(t.children={}),s.pipe(Oe(l=>l.matched?(r=o._injector??r,this.getChildConfig(r,o,n).pipe(Oe(({routes:c})=>{let u=o._loadedInjector??r,{parameters:p,consumedSegments:h,remainingSegments:g}=l,S=new mo(h,p,Object.freeze(f({},this.urlTree.queryParams)),this.urlTree.fragment,Cc(o),pt(o),o.component??o._loadedComponent??null,o,wc(o)),w=gi(S,a,this.paramsInheritanceStrategy);S.params=Object.freeze(w.params),S.data=Object.freeze(w.data);let{segmentGroup:k,slicedSegments:ae}=yc(t,h,g,c);if(ae.length===0&&k.hasChildren())return this.processChildren(u,c,k,S).pipe(P(Q=>new Ve(S,Q)));if(c.length===0&&ae.length===0)return x(new Ve(S,[]));let pe=pt(o)===i;return this.processSegment(u,c,k,ae,pe?M:i,!0,S).pipe(P(Q=>new Ve(S,Q instanceof Ve?[Q]:[])))}))):No(t)))}getChildConfig(r,t,o){return t.children?x({routes:t.children,injector:r}):t.loadChildren?t._loadedRoutes!==void 0?x({routes:t._loadedRoutes,injector:t._loadedInjector}):Xg(r,t,o,this.urlSerializer).pipe(Te(n=>n?this.configLoader.loadChildren(r,t).pipe(_e(i=>{t._loadedRoutes=i.routes,t._loadedInjector=i.injector})):em(t))):x({routes:[],injector:r})}};function um(e){e.sort((r,t)=>r.value.outlet===M?-1:t.value.outlet===M?1:r.value.outlet.localeCompare(t.value.outlet))}function dm(e){let r=e.value.routeConfig;return r&&r.path===""}function Yc(e){let r=[],t=new Set;for(let o of e){if(!dm(o)){r.push(o);continue}let n=r.find(i=>o.value.routeConfig===i.value.routeConfig);n!==void 0?(n.children.push(...o.children),t.add(n)):r.push(o)}for(let o of t){let n=Yc(o.children);r.push(new Ve(o.value,n))}return r.filter(o=>!t.has(o))}function Cc(e){return e.data||{}}function wc(e){return e.resolve||{}}function pm(e,r,t,o,n,i){return Te(a=>lm(e,r,t,o,a.extractedUrl,n,i).pipe(P(({state:s,tree:l})=>T(f({},a),{targetSnapshot:s,urlAfterRedirects:l}))))}function fm(e,r){return Te(t=>{let{targetSnapshot:o,guards:{canActivateChecks:n}}=t;if(!n.length)return x(t);let i=new Set(n.map(l=>l.route)),a=new Set;for(let l of i)if(!a.has(l))for(let c of Kc(l))a.add(c);let s=0;return be(a).pipe(Et(l=>i.has(l)?hm(l,o,e,r):(l.data=gi(l,l.parent,e).resolve,x(void 0))),_e(()=>s++),Qi(1),Te(l=>s===a.size?x(t):xt))})}function Kc(e){let r=e.children.map(t=>Kc(t)).flat();return[e,...r]}function hm(e,r,t,o){let n=e.routeConfig,i=e._resolve;return n?.title!==void 0&&!Vc(n)&&(i[zr]=n.title),gm(i,e,r,o).pipe(P(a=>(e._resolvedData=a,e.data=gi(e,e.parent,t).resolve,null)))}function gm(e,r,t,o){let n=Va(e);if(n.length===0)return x({});let i={};return be(n).pipe(Te(a=>mm(e[a],r,t,o).pipe(Lt(),_e(s=>{if(s instanceof Go)throw mi(new Gt,s);i[a]=s}))),Qi(1),P(()=>i),no(a=>Wc(a)?xt:cr(a)))}function mm(e,r,t,o){let n=jr(r)??o,i=Yo(e,n),a=i.resolve?i.resolve(r,t):Ye(n,()=>i(r,t));return Kt(a)}function Na(e){return Oe(r=>{let t=e(r);return t?be(t).pipe(P(()=>r)):x(r)})}var ns=(()=>{class e{buildTitle(t){let o,n=t.root;for(;n!==void 0;)o=this.getResolvedTitleForRoute(n)??o,n=n.children.find(i=>i.outlet===M);return o}getResolvedTitleForRoute(t){return t.data[zr]}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>d(Zc),providedIn:"root"})}return e})(),Zc=(()=>{class e extends ns{title;constructor(t){super(),this.title=t}updateTitle(t){let o=this.buildTitle(t);o!==void 0&&this.title.setTitle(o)}static \u0275fac=function(o){return new(o||e)(E(hc))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),yo=new I("",{providedIn:"root",factory:()=>({})}),Co=new I(""),Ci=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=d(bl);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return x(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let o=Kt(t.loadComponent()).pipe(P(Qc),_e(i=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=i}),Ao(()=>{this.componentLoaders.delete(t)})),n=new Ki(o,()=>new oe).pipe(Yi());return this.componentLoaders.set(t,n),n}loadChildren(t,o){if(this.childrenLoaders.get(o))return this.childrenLoaders.get(o);if(o._loadedRoutes)return x({routes:o._loadedRoutes,injector:o._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(o);let i=Xc(o,this.compiler,t,this.onLoadEndListener).pipe(Ao(()=>{this.childrenLoaders.delete(o)})),a=new Ki(i,()=>new oe).pipe(Yi());return this.childrenLoaders.set(o,a),a}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Xc(e,r,t,o){return Kt(e.loadChildren()).pipe(P(Qc),Te(n=>n instanceof ll||Array.isArray(n)?x(n):be(r.compileModuleAsync(n))),P(n=>{o&&o(e);let i,a,s=!1;return Array.isArray(n)?(a=n,s=!0):(i=n.create(t).injector,a=i.get(Co,[],{optional:!0,self:!0}).flat()),{routes:a.map(rs),injector:i}}))}function bm(e){return e&&typeof e=="object"&&"default"in e}function Qc(e){return bm(e)?e.default:e}var wi=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>d(vm),providedIn:"root"})}return e})(),vm=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,o){return t}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),is=new I(""),as=new I("");function Jc(e,r,t){let o=e.get(as),n=e.get(Y);return e.get(Le).runOutsideAngular(()=>{if(!n.startViewTransition||o.skipNextTransition)return o.skipNextTransition=!1,new Promise(c=>setTimeout(c));let i,a=new Promise(c=>{i=c}),s=n.startViewTransition(()=>(i(),ym(e))),{onViewTransitionCreated:l}=o;return l&&Ye(e,()=>l({transition:s,from:r,to:t})),a})}function ym(e){return new Promise(r=>{Xs({read:()=>setTimeout(r)},{injector:e})})}var ss=new I(""),Gr=(()=>{class e{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new oe;transitionAbortSubject=new oe;configLoader=d(Ci);environmentInjector=d($t);destroyRef=d(ta);urlSerializer=d(Zt);rootContexts=d(vo);location=d(zt);inputBindingEnabled=d(Hr,{optional:!0})!==null;titleStrategy=d(ns);options=d(yo,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=d(wi);createViewTransition=d(is,{optional:!0});navigationErrorHandler=d(ss,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>x(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=n=>this.events.next(new si(n)),o=n=>this.events.next(new li(n));this.configLoader.onLoadEndListener=o,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let o=++this.navigationId;this.transitions?.next(T(f({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:o}))}setupNavigations(t){return this.transitions=new qe(null),this.transitions.pipe(mt(o=>o!==null),Oe(o=>{let n=!1,i=!1;return x(o).pipe(Oe(a=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",Fe.SupersededByNewNavigation),xt;this.currentTransition=o,this.currentNavigation={id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:this.lastSuccessfulNavigation?T(f({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let s=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),l=a.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!s&&l!=="reload"){let c="";return this.events.next(new _t(a.id,this.urlSerializer.serialize(a.rawUrl),c,zo.IgnoredSameUrlNavigation)),a.resolve(!1),xt}if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return x(a).pipe(Oe(c=>(this.events.next(new Yt(c.id,this.urlSerializer.serialize(c.extractedUrl),c.source,c.restoredState)),c.id!==this.navigationId?xt:Promise.resolve(c))),pm(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),_e(c=>{o.targetSnapshot=c.targetSnapshot,o.urlAfterRedirects=c.urlAfterRedirects,this.currentNavigation=T(f({},this.currentNavigation),{finalUrl:c.urlAfterRedirects});let u=new Br(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}));if(s&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:c,extractedUrl:u,source:p,restoredState:h,extras:g}=a,S=new Yt(c,this.urlSerializer.serialize(u),p,h);this.events.next(S);let w=Nc(this.rootComponentType).snapshot;return this.currentTransition=o=T(f({},a),{targetSnapshot:w,urlAfterRedirects:u,extras:T(f({},g),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=u,x(o)}else{let c="";return this.events.next(new _t(a.id,this.urlSerializer.serialize(a.extractedUrl),c,zo.IgnoredByUrlHandlingStrategy)),a.resolve(!1),xt}}),_e(a=>{let s=new ri(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(s)}),P(a=>(this.currentTransition=o=T(f({},a),{guards:Mg(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),o)),jg(this.environmentInjector,a=>this.events.next(a)),_e(a=>{if(o.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw mi(this.urlSerializer,a.guardsResult);let s=new ni(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);this.events.next(s)}),mt(a=>a.guardsResult?!0:(this.cancelNavigationTransition(a,"",Fe.GuardRejected),!1)),Na(a=>{if(a.guards.canActivateChecks.length!==0)return x(a).pipe(_e(s=>{let l=new ii(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(l)}),Oe(s=>{let l=!1;return x(s).pipe(fm(this.paramsInheritanceStrategy,this.environmentInjector),_e({next:()=>l=!0,complete:()=>{l||this.cancelNavigationTransition(s,"",Fe.NoDataFromResolver)}}))}),_e(s=>{let l=new ai(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(l)}))}),Na(a=>{let s=l=>{let c=[];l.routeConfig?.loadComponent&&!l.routeConfig._loadedComponent&&c.push(this.configLoader.loadComponent(l.routeConfig).pipe(_e(u=>{l.component=u}),P(()=>{})));for(let u of l.children)c.push(...s(u));return c};return bn(s(a.targetSnapshot.root)).pipe(Xi(null),Eo(1))}),Na(()=>this.afterPreactivation()),Oe(()=>{let{currentSnapshot:a,targetSnapshot:s}=o,l=this.createViewTransition?.(this.environmentInjector,a.root,s.root);return l?be(l).pipe(P(()=>o)):x(o)}),P(a=>{let s=Eg(t.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);return this.currentTransition=o=T(f({},a),{targetRouterState:s}),this.currentNavigation.targetRouterState=s,o}),_e(()=>{this.events.next(new Lr)}),Ig(this.rootContexts,t.routeReuseStrategy,a=>this.events.next(a),this.inputBindingEnabled),Eo(1),_e({next:a=>{n=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ze(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0)},complete:()=>{n=!0}}),Ws(this.transitionAbortSubject.pipe(_e(a=>{throw a}))),Ao(()=>{!n&&!i&&this.cancelNavigationTransition(o,"",Fe.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),no(a=>{if(this.destroyed)return o.resolve(!1),xt;if(i=!0,Hc(a))this.events.next(new Ct(o.id,this.urlSerializer.serialize(o.extractedUrl),a.message,a.cancellationCode)),Rg(a)?this.events.next(new Wo(a.url,a.navigationBehaviorOptions)):o.resolve(!1);else{let s=new jo(o.id,this.urlSerializer.serialize(o.extractedUrl),a,o.targetSnapshot??void 0);try{let l=Ye(this.environmentInjector,()=>this.navigationErrorHandler?.(s));if(l instanceof Go){let{message:c,cancellationCode:u}=mi(this.urlSerializer,l);this.events.next(new Ct(o.id,this.urlSerializer.serialize(o.extractedUrl),c,u)),this.events.next(new Wo(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(s),a}catch(l){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(l)}}return xt}))}))}cancelNavigationTransition(t,o,n){let i=new Ct(t.id,this.urlSerializer.serialize(t.extractedUrl),o,n);this.events.next(i),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),o=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==o?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Cm(e){return e!==ei}var eu=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>d(wm),providedIn:"root"})}return e})(),vi=class{shouldDetach(r){return!1}store(r,t){}shouldAttach(r){return!1}retrieve(r){return null}shouldReuseRoute(r,t){return r.routeConfig===t.routeConfig}},wm=(()=>{class e extends vi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),tu=(()=>{class e{urlSerializer=d(Zt);options=d(yo,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=d(zt);urlHandlingStrategy=d(wi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new wt;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:o,targetBrowserUrl:n}){let i=t!==void 0?this.urlHandlingStrategy.merge(t,o):o,a=n??i;return a instanceof wt?this.urlSerializer.serialize(a):a}commitTransition({targetRouterState:t,finalUrl:o,initialUrl:n}){o&&t?(this.currentUrlTree=o,this.rawUrlTree=this.urlHandlingStrategy.merge(o,n),this.routerState=t):this.rawUrlTree=n}routerState=Nc(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:()=>d(_m),providedIn:"root"})}return e})(),_m=(()=>{class e extends tu{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(o=>{o.type==="popstate"&&setTimeout(()=>{t(o.url,o.state,"popstate")})})}handleRouterEvent(t,o){t instanceof Yt?this.updateStateMemento():t instanceof _t?this.commitTransition(o):t instanceof Br?this.urlUpdateStrategy==="eager"&&(o.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(o),o)):t instanceof Lr?(this.commitTransition(o),this.urlUpdateStrategy==="deferred"&&!o.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(o),o)):t instanceof Ct&&(t.code===Fe.GuardRejected||t.code===Fe.NoDataFromResolver)?this.restoreHistory(o):t instanceof jo?this.restoreHistory(o,!0):t instanceof ze&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:o,id:n}){let{replaceUrl:i,state:a}=o;if(this.location.isCurrentPathEqualTo(t)||i){let s=this.browserPageId,l=f(f({},a),this.generateNgRouterState(n,s));this.location.replaceState(t,"",l)}else{let s=f(f({},a),this.generateNgRouterState(n,this.browserPageId+1));this.location.go(t,"",s)}}restoreHistory(t,o=!1){if(this.canceledNavigationResolution==="computed"){let n=this.browserPageId,i=this.currentPageId-n;i!==0?this.location.historyGo(i):this.getCurrentUrlTree()===t.finalUrl&&i===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(o&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,o){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:o}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function _i(e,r){e.events.pipe(mt(t=>t instanceof ze||t instanceof Ct||t instanceof jo||t instanceof _t),P(t=>t instanceof ze||t instanceof _t?0:(t instanceof Ct?t.code===Fe.Redirect||t.code===Fe.SupersededByNewNavigation:!1)?2:1),mt(t=>t!==2),Eo(1)).subscribe(()=>{r()})}var Dm={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sm={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},je=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=d(sa);stateManager=d(tu);options=d(yo,{optional:!0})||{};pendingTasks=d(yn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=d(Gr);urlSerializer=d(Zt);location=d(zt);urlHandlingStrategy=d(wi);_events=new oe;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=d(eu);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=d(Co,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!d(Hr,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Bs;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(o=>{try{let n=this.navigationTransitions.currentTransition,i=this.navigationTransitions.currentNavigation;if(n!==null&&i!==null){if(this.stateManager.handleRouterEvent(o,i),o instanceof Ct&&o.code!==Fe.Redirect&&o.code!==Fe.SupersededByNewNavigation)this.navigated=!0;else if(o instanceof ze)this.navigated=!0;else if(o instanceof Wo){let a=o.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(o.url,n.currentRawUrl),l=f({browserUrl:n.extras.browserUrl,info:n.extras.info,skipLocationChange:n.extras.skipLocationChange,replaceUrl:n.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Cm(n.source)},a);this.scheduleNavigation(s,ei,null,l,{resolve:n.resolve,reject:n.reject,promise:n.promise})}}xm(o)&&this._events.next(o)}catch(n){this.navigationTransitions.transitionAbortSubject.next(n)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ei,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,o,n)=>{this.navigateToSyncWithBrowser(t,n,o)})}navigateToSyncWithBrowser(t,o,n){let i={replaceUrl:!0},a=n?.navigationId?n:null;if(n){let l=f({},n);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(i.state=l)}let s=this.parseUrl(t);this.scheduleNavigation(s,o,a,i)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(rs),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,o={}){let{relativeTo:n,queryParams:i,fragment:a,queryParamsHandling:s,preserveFragment:l}=o,c=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=f(f({},this.currentUrlTree.queryParams),i);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=i||null}u!==null&&(u=this.removeEmptyProps(u));let p;try{let h=n?n.snapshot:this.routerState.snapshot.root;p=Oc(h)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return Bc(p,t,u,c??null)}navigateByUrl(t,o={skipLocationChange:!1}){let n=qt(t)?t:this.parseUrl(t),i=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(i,ei,null,o)}navigate(t,o={skipLocationChange:!1}){return km(t),this.navigateByUrl(this.createUrlTree(t,o),o)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,o){let n;if(o===!0?n=f({},Dm):o===!1?n=f({},Sm):n=o,qt(t))return gc(this.currentUrlTree,t,n);let i=this.parseUrl(t);return gc(this.currentUrlTree,i,n)}removeEmptyProps(t){return Object.entries(t).reduce((o,[n,i])=>(i!=null&&(o[n]=i),o),{})}scheduleNavigation(t,o,n,i,a){if(this.disposed)return Promise.resolve(!1);let s,l,c;a?(s=a.resolve,l=a.reject,c=a.promise):c=new Promise((p,h)=>{s=p,l=h});let u=this.pendingTasks.add();return _i(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:o,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:i,resolve:s,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(p=>Promise.reject(p))}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function km(e){for(let r=0;r<e.length;r++)if(e[r]==null)throw new F(4008,!1)}function xm(e){return!(e instanceof Lr)&&!(e instanceof Wo)}var Di=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new oe;constructor(t,o,n,i,a,s){this.router=t,this.route=o,this.tabIndexAttribute=n,this.renderer=i,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=t.events.subscribe(c=>{c instanceof ze&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(qt(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,o,n,i,a){let s=this.urlTree;if(s===null||this.isAnchorElement&&(t!==0||o||n||i||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let o=this.href===null?null:il(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",o)}applyAttributeValue(t,o){let n=this.renderer,i=this.el.nativeElement;o!==null?n.setAttribute(i,t,o):n.removeAttribute(i,t)}get urlTree(){return this.routerLinkInput===null?null:qt(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(o){return new(o||e)(A(je),A(Dt),ea("tabindex"),A(Ze),A(Re),A(ot))};static \u0275dir=$({type:e,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(o,n){o&1&&re("click",function(a){return n.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),o&2&&O("target",n.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",D],skipLocationChange:[2,"skipLocationChange","skipLocationChange",D],replaceUrl:[2,"replaceUrl","replaceUrl",D],routerLink:"routerLink"},features:[De]})}return e})(),Em=(()=>{class e{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new z;constructor(t,o,n,i,a){this.router=t,this.element=o,this.renderer=n,this.cdr=i,this.link=a,this.routerEventsSubscription=t.events.subscribe(s=>{s instanceof ze&&this.update()})}ngAfterContentInit(){x(this.links.changes,x(null)).pipe(ur()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(o=>!!o).map(o=>o.onChanges);this.linkInputChangesSubscription=be(t).pipe(ur()).subscribe(o=>{this._isActive!==this.isLinkActive(this.router)(o)&&this.update()})}set routerLinkActive(t){let o=Array.isArray(t)?t:t.split(" ");this.classes=o.filter(n=>!!n)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(o=>{t?this.renderer.addClass(this.element.nativeElement,o):this.renderer.removeClass(this.element.nativeElement,o)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let o=Am(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return n=>{let i=n.urlTree;return i?t.isActive(i,o):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(o){return new(o||e)(A(je),A(Re),A(Ze),A(lt),A(Di,8))};static \u0275dir=$({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(o,n,i){if(o&1&&se(i,Di,5),o&2){let a;G(a=q())&&(n.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[De]})}return e})();function Am(e){return!!e.paths}var qr=class{};var ou=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,o,n,i){this.router=t,this.injector=o,this.preloadingStrategy=n,this.loader=i}setUpPreloading(){this.subscription=this.router.events.pipe(mt(t=>t instanceof ze),Et(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,o){let n=[];for(let i of o){i.providers&&!i._injector&&(i._injector=Cn(i.providers,t,`Route: ${i.path}`));let a=i._injector??t,s=i._loadedInjector??a;(i.loadChildren&&!i._loadedRoutes&&i.canLoad===void 0||i.loadComponent&&!i._loadedComponent)&&n.push(this.preloadConfig(a,i)),(i.children||i._loadedRoutes)&&n.push(this.processRoutes(s,i.children??i._loadedRoutes))}return be(n).pipe(ur())}preloadConfig(t,o){return this.preloadingStrategy.preload(o,()=>{let n;o.loadChildren&&o.canLoad===void 0?n=this.loader.loadChildren(t,o):n=x(null);let i=n.pipe(Te(a=>a===null?x(void 0):(o._loadedRoutes=a.routes,o._loadedInjector=a.injector,this.processRoutes(a.injector??t,a.routes))));if(o.loadComponent&&!o._loadedComponent){let a=this.loader.loadComponent(o);return be([i,a]).pipe(ur())}else return i})}static \u0275fac=function(o){return new(o||e)(E(je),E($t),E(qr),E(Ci))};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),cs=new I(""),ru=(()=>{class e{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,o,n,i,a={}){this.urlSerializer=t,this.transitions=o,this.viewportScroller=n,this.zone=i,this.options=a,a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Yt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof ze?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof _t&&t.code===zo.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Ho&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,o){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Ho(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,o))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(o){sl()};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();function Tm(e,...r){return io([{provide:Co,multi:!0,useValue:e},[],{provide:Dt,useFactory:nu,deps:[je]},{provide:la,multi:!0,useFactory:iu},r.map(t=>t.\u0275providers)])}function nu(e){return e.routerState.root}function wo(e,r){return{\u0275kind:e,\u0275providers:r}}function Rm(e={}){return wo(4,[{provide:cs,useFactory:()=>{let t=d(Da),o=d(Le),n=d(Gr),i=d(Zt);return new ru(i,n,t,o,e)}}])}function iu(){let e=d(it);return r=>{let t=e.get(ca);if(r!==t.components[0])return;let o=e.get(je),n=e.get(au);e.get(us)===1&&o.initialNavigation(),e.get(cu,null,Ji.Optional)?.setUpPreloading(),e.get(cs,null,Ji.Optional)?.init(),o.resetRootComponentType(t.componentTypes[0]),n.closed||(n.next(),n.complete(),n.unsubscribe())}}var au=new I("",{factory:()=>new oe}),us=new I("",{providedIn:"root",factory:()=>1});function su(){let e=[{provide:us,useValue:0},fr(()=>{let r=d(it);return r.get(ha,Promise.resolve()).then(()=>new Promise(o=>{let n=r.get(je),i=r.get(au);_i(n,()=>{o(!0)}),r.get(Gr).afterPreactivation=()=>(o(!0),i.closed?x(void 0):i),n.initialNavigation()}))})];return wo(2,e)}function lu(){let e=[fr(()=>{d(je).setUpLocationChangeListener()}),{provide:us,useValue:2}];return wo(3,e)}var cu=new I("");function uu(e){return wo(0,[{provide:cu,useExisting:ou},{provide:qr,useExisting:e}])}function Im(){return wo(6,[{provide:ot,useClass:Nn}])}function du(){return wo(8,[ts,{provide:Hr,useExisting:ts}])}function pu(e){ia("NgRouterViewTransitions");let r=[{provide:is,useValue:Jc},{provide:as,useValue:f({skipNextTransition:!!e?.skipInitialTransition},e)}];return wo(9,r)}var fu=[zt,{provide:Zt,useClass:Gt},je,vo,{provide:Dt,useFactory:nu,deps:[je]},Ci,[]],Mm=(()=>{class e{constructor(){}static forRoot(t,o){return{ngModule:e,providers:[fu,[],{provide:Co,multi:!0,useValue:t},[],o?.errorHandler?{provide:ss,useValue:o.errorHandler}:[],{provide:yo,useValue:o||{}},o?.useHash?Om():Bm(),Fm(),o?.preloadingStrategy?uu(o.preloadingStrategy).\u0275providers:[],o?.initialNavigation?Lm(o):[],o?.bindToComponentInputs?du().\u0275providers:[],o?.enableViewTransitions?pu().\u0275providers:[],$m()]}}static forChild(t){return{ngModule:e,providers:[{provide:Co,multi:!0,useValue:t}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({})}return e})();function Fm(){return{provide:cs,useFactory:()=>{let e=d(Da),r=d(Le),t=d(yo),o=d(Gr),n=d(Zt);return t.scrollOffset&&e.setOffset(t.scrollOffset),new ru(n,o,e,r,t)}}}function Om(){return{provide:ot,useClass:Nn}}function Bm(){return{provide:ot,useClass:Tn}}function Lm(e){return[e.initialNavigation==="disabled"?lu().\u0275providers:[],e.initialNavigation==="enabledBlocking"?su().\u0275providers:[]]}var ls=new I("");function $m(){return[{provide:ls,useFactory:iu},{provide:la,multi:!0,useExisting:ls}]}function hu(e,r){return e?e.classList?e.classList.contains(r):new RegExp("(^| )"+r+"( |$)","gi").test(e.className):!1}function ft(e,r){if(e&&r){let t=o=>{hu(e,o)||(e.classList?e.classList.add(o):e.className+=" "+o)};[r].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(t))}}function Nm(){return window.innerWidth-document.documentElement.offsetWidth}function Ko(e){for(let r of document?.styleSheets)try{for(let t of r?.cssRules)for(let o of t?.style)if(e.test(o))return{name:o,value:t.style.getPropertyValue(o).trim()}}catch{}return null}function gu(e="p-overflow-hidden"){let r=Ko(/-scrollbar-width$/);r?.name&&document.body.style.setProperty(r.name,Nm()+"px"),ft(document.body,e)}function _o(e,r){if(e&&r){let t=o=>{e.classList?e.classList.remove(o):e.className=e.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," ")};[r].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(t))}}function mu(e="p-overflow-hidden"){let r=Ko(/-scrollbar-width$/);r?.name&&document.body.style.removeProperty(r.name),_o(document.body,e)}function bu(e){let r={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",r.width=e.offsetWidth,r.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),r}function vu(){let e=window,r=document,t=r.documentElement,o=r.getElementsByTagName("body")[0],n=e.innerWidth||t.clientWidth||o.clientWidth,i=e.innerHeight||t.clientHeight||o.clientHeight;return{width:n,height:i}}function Pm(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Vm(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function A_(e,r,t=!0){var o,n,i,a;if(e){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:bu(e),l=s.height,c=s.width,u=r.offsetHeight,p=r.offsetWidth,h=r.getBoundingClientRect(),g=Vm(),S=Pm(),w=vu(),k,ae,pe="top";h.top+u+l>w.height?(k=h.top+g-l,pe="bottom",k<0&&(k=g)):k=u+h.top+g,h.left+c>w.width?ae=Math.max(0,h.left+S+p-c):ae=h.left+S,e.style.top=k+"px",e.style.left=ae+"px",e.style.transformOrigin=pe,t&&(e.style.marginTop=pe==="bottom"?`calc(${(n=(o=Ko(/-anchor-gutter$/))==null?void 0:o.value)!=null?n:"2px"} * -1)`:(a=(i=Ko(/-anchor-gutter$/))==null?void 0:i.value)!=null?a:"")}}function T_(e,r){e&&(typeof r=="string"?e.style.cssText=r:Object.entries(r||{}).forEach(([t,o])=>e.style[t]=o))}function yu(e,r){if(e instanceof HTMLElement){let t=e.offsetWidth;if(r){let o=getComputedStyle(e);t+=parseFloat(o.marginLeft)+parseFloat(o.marginRight)}return t}return 0}function R_(e,r,t=!0){var o,n,i,a;if(e){let s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:bu(e),l=r.offsetHeight,c=r.getBoundingClientRect(),u=vu(),p,h,g="top";c.top+l+s.height>u.height?(p=-1*s.height,g="bottom",c.top+p<0&&(p=-1*c.top)):p=l,s.width>u.width?h=c.left*-1:c.left+s.width>u.width?h=(c.left+s.width-u.width)*-1:h=0,e.style.top=p+"px",e.style.left=h+"px",e.style.transformOrigin=g,t&&(e.style.marginTop=g==="bottom"?`calc(${(n=(o=Ko(/-anchor-gutter$/))==null?void 0:o.value)!=null?n:"2px"} * -1)`:(a=(i=Ko(/-anchor-gutter$/))==null?void 0:i.value)!=null?a:"")}}function Yr(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function ds(e){let r=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?r=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?r=e.el.nativeElement:r=e.el)),Yr(r)?r:void 0}function Cu(e,r){let t=ds(e);if(t)t.appendChild(r);else throw new Error("Cannot append "+r+" to "+e)}function Si(e,r={}){if(Yr(e)){let t=(o,n)=>{var i,a;let s=(i=e?.$attrs)!=null&&i[o]?[(a=e?.$attrs)==null?void 0:a[o]]:[];return[n].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let p=Array.isArray(c)?t(o,c):Object.entries(c).map(([h,g])=>o==="style"&&(g||g===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?h:void 0);l=p.length?l.concat(p.filter(h=>!!h)):l}}return l},s)};Object.entries(r).forEach(([o,n])=>{if(n!=null){let i=o.match(/^on(.+)/);i?e.addEventListener(i[1].toLowerCase(),n):o==="p-bind"||o==="pBind"?Si(e,n):(n=o==="class"?[...new Set(t("class",n))].join(" ").trim():o==="style"?t("style",n).join(";").trim():n,(e.$attrs=e.$attrs||{})&&(e.$attrs[o]=n),e.setAttribute(o,n))}})}}function I_(e,r={},...t){if(e){let o=document.createElement(e);return Si(o,r),o.append(...t),o}}function M_(e,r){if(e){e.style.opacity="0";let t=+new Date,o="0",n=function(){o=`${+e.style.opacity+(new Date().getTime()-t)/r}`,e.style.opacity=o,t=+new Date,+o<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function Um(e,r){return Yr(e)?Array.from(e.querySelectorAll(r)):[]}function Zo(e,r){return Yr(e)?e.matches(r)?e:e.querySelector(r):null}function F_(e,r){e&&document.activeElement!==e&&e.focus(r)}function wu(e,r=""){let t=Um(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${r}`),o=[];for(let n of t)getComputedStyle(n).display!="none"&&getComputedStyle(n).visibility!="hidden"&&o.push(n);return o}function O_(e,r){let t=wu(e,r);return t.length>0?t[0]:null}function ps(e){if(e){let r=e.offsetHeight,t=getComputedStyle(e);return r-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),r}return 0}function _u(e){if(e){let r=e.parentNode;return r&&r instanceof ShadowRoot&&r.host&&(r=r.host),r}return null}function B_(e){var r;if(e){let t=(r=_u(e))==null?void 0:r.childNodes,o=0;if(t)for(let n=0;n<t.length;n++){if(t[n]===e)return o;t[n].nodeType===1&&o++}}return-1}function L_(e,r){let t=wu(e,r);return t.length>0?t[t.length-1]:null}function Du(e){if(e){let r=e.getBoundingClientRect();return{top:r.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function fs(e,r){if(e){let t=e.offsetHeight;if(r){let o=getComputedStyle(e);t+=parseFloat(o.marginTop)+parseFloat(o.marginBottom)}return t}return 0}function $_(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function zm(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&_u(e))}function N_(e,r){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return r?.nextElementSibling;case"@prev":return r?.previousElementSibling;case"@parent":return r?.parentElement;case"@grandparent":return(t=r?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let n=ds((i=>!!(i&&i.constructor&&i.call&&i.apply))(e)?e():e);return n?.nodeType===9||zm(n)?n:void 0}}function P_(){return navigator.userAgent}function hs(e){if(e){let r=e.offsetWidth,t=getComputedStyle(e);return r-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),r}return 0}function V_(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function U_(e){return!!(e&&e.offsetParent!=null)}function z_(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}function j_(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Su(e){var r;e&&("remove"in Element.prototype?e.remove():(r=e.parentNode)==null||r.removeChild(e))}function H_(e,r){let t=ds(e);if(t)t.removeChild(r);else throw new Error("Cannot remove "+r+" from "+e)}function W_(e,r){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),o=t?parseFloat(t):0,n=getComputedStyle(e).getPropertyValue("paddingTop"),i=n?parseFloat(n):0,a=e.getBoundingClientRect(),l=r.getBoundingClientRect().top+document.body.scrollTop-(a.top+document.body.scrollTop)-o-i,c=e.scrollTop,u=e.clientHeight,p=fs(r);l<0?e.scrollTop=c+l:l+p>u&&(e.scrollTop=c+l-u+p)}function ki(e,r="",t){Yr(e)&&t!==null&&t!==void 0&&e.setAttribute(r,t)}function ku(){let e=new Map;return{on(r,t){let o=e.get(r);return o?o.push(t):o=[t],e.set(r,o),this},off(r,t){let o=e.get(r);return o&&o.splice(o.indexOf(t)>>>0,1),this},emit(r,t){let o=e.get(r);o&&o.slice().map(n=>{n(t)})},clear(){e.clear()}}}var jm=Object.defineProperty,xu=Object.getOwnPropertySymbols,Hm=Object.prototype.hasOwnProperty,Wm=Object.prototype.propertyIsEnumerable,Eu=(e,r,t)=>r in e?jm(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,Gm=(e,r)=>{for(var t in r||(r={}))Hm.call(r,t)&&Eu(e,t,r[t]);if(xu)for(var t of xu(r))Wm.call(r,t)&&Eu(e,t,r[t]);return e};function Ae(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function gs(e,r,t=new WeakSet){if(e===r)return!0;if(!e||!r||typeof e!="object"||typeof r!="object"||t.has(e)||t.has(r))return!1;t.add(e).add(r);let o=Array.isArray(e),n=Array.isArray(r),i,a,s;if(o&&n){if(a=e.length,a!=r.length)return!1;for(i=a;i--!==0;)if(!gs(e[i],r[i],t))return!1;return!0}if(o!=n)return!1;let l=e instanceof Date,c=r instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==r.getTime();let u=e instanceof RegExp,p=r instanceof RegExp;if(u!=p)return!1;if(u&&p)return e.toString()==r.toString();let h=Object.keys(e);if(a=h.length,a!==Object.keys(r).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(r,h[i]))return!1;for(i=a;i--!==0;)if(s=h[i],!gs(e[s],r[s],t))return!1;return!0}function qm(e,r){return gs(e,r)}function Tu(e){return!!(e&&e.constructor&&e.call&&e.apply)}function te(e){return!Ae(e)}function Xt(e,r){if(!e||!r)return null;try{let t=e[r];if(te(t))return t}catch{}if(Object.keys(e).length){if(Tu(r))return r(e);if(r.indexOf(".")===-1)return e[r];{let t=r.split("."),o=e;for(let n=0,i=t.length;n<i;++n){if(o==null)return null;o=o[t[n]]}return o}}return null}function Qt(e,r,t){return t?Xt(e,t)===Xt(r,t):qm(e,r)}function K_(e,r){if(e!=null&&r&&r.length){for(let t of r)if(Qt(e,t))return!0}return!1}function Z_(e,r){let t=-1;if(r){for(let o=0;o<r.length;o++)if(r[o]===e){t=o;break}}return t}function X_(e,r){let t=-1;if(te(e))try{t=e.findLastIndex(r)}catch{t=e.lastIndexOf([...e].reverse().find(r))}return t}function ht(e,r=!0){return e instanceof Object&&e.constructor===Object&&(r||Object.keys(e).length!==0)}function nt(e,...r){return Tu(e)?e(...r):e}function Jt(e,r=!0){return typeof e=="string"&&(r||e!=="")}function Au(e){return Jt(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function xi(e,r="",t={}){let o=Au(r).split("."),n=o.shift();return n?ht(e)?xi(nt(e[Object.keys(e).find(i=>Au(i)===n)||""],t),o.join("."),t):void 0:nt(e,t)}function Ei(e,r=!0){return Array.isArray(e)&&(r||e.length!==0)}function Q_(e){return e instanceof Date&&e.constructor===Date}function Ru(e){return te(e)&&!isNaN(e)}function J_(e=""){return te(e)&&e.length===1&&!!e.match(/\S| /)}function He(e,r){if(r){let t=r.test(e);return r.lastIndex=0,t}return!1}function eo(...e){let r=(t={},o={})=>{let n=Gm({},t);return Object.keys(o).forEach(i=>{ht(o[i])&&i in t&&ht(t[i])?n[i]=r(t[i],o[i]):n[i]=o[i]}),n};return e.reduce((t,o,n)=>n===0?o:r(t,o),{})}function Do(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function We(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let o in t)e=e.replace(t[o],o)}return e}function Ai(e){return Jt(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(r,t)=>t===0?r:"-"+r.toLowerCase()).toLowerCase():e}function ms(e){return Jt(e)?e.replace(/[A-Z]/g,(r,t)=>t===0?r:"."+r.toLowerCase()).toLowerCase():e}var Ti={};function Kr(e="pui_id_"){return Ti.hasOwnProperty(e)||(Ti[e]=0),Ti[e]++,`${e}${Ti[e]}`}function Ym(){let e=[],r=(a,s,l=999)=>{let c=n(a,s,l),u=c.value+(c.key===a?0:l)+1;return e.push({key:a,value:u}),u},t=a=>{e=e.filter(s=>s.value!==a)},o=(a,s)=>n(a,s).value,n=(a,s,l=0)=>[...e].reverse().find(c=>s?!0:c.key===a)||{key:a,value:l},i=a=>a&&parseInt(a.style.zIndex,10)||0;return{get:i,set:(a,s,l)=>{s&&(s.style.zIndex=String(r(a,!0,l)))},clear:a=>{a&&(t(i(a)),a.style.zIndex="")},getCurrent:a=>o(a,!0)}}var o1=Ym();var Iu=["*"],Km=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(Km||{}),g1=(()=>{class e{requireConfirmationSource=new oe;acceptConfirmationSource=new oe;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var we=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),m1=(()=>{class e{static AND="and";static OR="or"}return e})(),b1=(()=>{class e{filter(t,o,n,i,a){let s=[];if(t)for(let l of t)for(let c of o){let u=Xt(l,c);if(this.filters[i](u,n,a)){s.push(l);break}}return s}filters={startsWith:(t,o,n)=>{if(o==null||o.trim()==="")return!0;if(t==null)return!1;let i=We(o.toString()).toLocaleLowerCase(n);return We(t.toString()).toLocaleLowerCase(n).slice(0,i.length)===i},contains:(t,o,n)=>{if(o==null||typeof o=="string"&&o.trim()==="")return!0;if(t==null)return!1;let i=We(o.toString()).toLocaleLowerCase(n);return We(t.toString()).toLocaleLowerCase(n).indexOf(i)!==-1},notContains:(t,o,n)=>{if(o==null||typeof o=="string"&&o.trim()==="")return!0;if(t==null)return!1;let i=We(o.toString()).toLocaleLowerCase(n);return We(t.toString()).toLocaleLowerCase(n).indexOf(i)===-1},endsWith:(t,o,n)=>{if(o==null||o.trim()==="")return!0;if(t==null)return!1;let i=We(o.toString()).toLocaleLowerCase(n),a=We(t.toString()).toLocaleLowerCase(n);return a.indexOf(i,a.length-i.length)!==-1},equals:(t,o,n)=>o==null||typeof o=="string"&&o.trim()===""?!0:t==null?!1:t.getTime&&o.getTime?t.getTime()===o.getTime():t==o?!0:We(t.toString()).toLocaleLowerCase(n)==We(o.toString()).toLocaleLowerCase(n),notEquals:(t,o,n)=>o==null||typeof o=="string"&&o.trim()===""?!1:t==null?!0:t.getTime&&o.getTime?t.getTime()!==o.getTime():t==o?!1:We(t.toString()).toLocaleLowerCase(n)!=We(o.toString()).toLocaleLowerCase(n),in:(t,o)=>{if(o==null||o.length===0)return!0;for(let n=0;n<o.length;n++)if(Qt(t,o[n]))return!0;return!1},between:(t,o)=>o==null||o[0]==null||o[1]==null?!0:t==null?!1:t.getTime?o[0].getTime()<=t.getTime()&&t.getTime()<=o[1].getTime():o[0]<=t&&t<=o[1],lt:(t,o,n)=>o==null?!0:t==null?!1:t.getTime&&o.getTime?t.getTime()<o.getTime():t<o,lte:(t,o,n)=>o==null?!0:t==null?!1:t.getTime&&o.getTime?t.getTime()<=o.getTime():t<=o,gt:(t,o,n)=>o==null?!0:t==null?!1:t.getTime&&o.getTime?t.getTime()>o.getTime():t>o,gte:(t,o,n)=>o==null?!0:t==null?!1:t.getTime&&o.getTime?t.getTime()>=o.getTime():t>=o,is:(t,o,n)=>this.filters.equals(t,o,n),isNot:(t,o,n)=>this.filters.notEquals(t,o,n),before:(t,o,n)=>this.filters.lt(t,o,n),after:(t,o,n)=>this.filters.gt(t,o,n),dateIs:(t,o)=>o==null?!0:t==null?!1:t.toDateString()===o.toDateString(),dateIsNot:(t,o)=>o==null?!0:t==null?!1:t.toDateString()!==o.toDateString(),dateBefore:(t,o)=>o==null?!0:t==null?!1:t.getTime()<o.getTime(),dateAfter:(t,o)=>o==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>o.getTime())};register(t,o){this.filters[t]=o}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),v1=(()=>{class e{messageSource=new oe;clearSource=new oe;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})(),y1=(()=>{class e{clickSource=new oe;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var C1=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=J({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Iu,decls:1,vars:0,template:function(o,n){o&1&&(At(),Tt(0))},encapsulation:2})}return e})(),w1=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275cmp=J({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Iu,decls:1,vars:0,template:function(o,n){o&1&&(At(),Tt(0))},encapsulation:2})}return e})(),St=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(o){return new(o||e)(A(pr))};static \u0275dir=$({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),X=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[he]})}return e})(),_1=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})();var Zm=Object.defineProperty,Xm=Object.defineProperties,Qm=Object.getOwnPropertyDescriptors,Ri=Object.getOwnPropertySymbols,Ou=Object.prototype.hasOwnProperty,Bu=Object.prototype.propertyIsEnumerable,Mu=(e,r,t)=>r in e?Zm(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,le=(e,r)=>{for(var t in r||(r={}))Ou.call(r,t)&&Mu(e,t,r[t]);if(Ri)for(var t of Ri(r))Bu.call(r,t)&&Mu(e,t,r[t]);return e},Qo=(e,r)=>Xm(e,Qm(r)),Bt=(e,r)=>{var t={};for(var o in e)Ou.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&Ri)for(var o of Ri(e))r.indexOf(o)<0&&Bu.call(e,o)&&(t[o]=e[o]);return t};function k1(...e){return eo(...e)}var Jm=ku(),Ge=Jm;function Fu(e,r){Ei(e)?e.push(...r||[]):ht(e)&&Object.assign(e,r)}function e0(e){return ht(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function t0(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function bs(e="",r=""){return t0(`${Jt(e,!1)&&Jt(r,!1)?`${e}-`:e}${r}`)}function Lu(e="",r=""){return`--${bs(e,r)}`}function o0(e=""){let r=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(r+t)%2!==0}function $u(e,r="",t="",o=[],n){if(Jt(e)){let i=/{([^}]*)}/g,a=e.trim();if(o0(a))return;if(He(a,i)){let s=a.replaceAll(i,u=>{let h=u.replace(/{|}/g,"").split(".").filter(g=>!o.some(S=>He(g,S)));return`var(${Lu(t,Ai(h.join("-")))}${te(n)?`, ${n}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return He(s.replace(c,"0"),l)?`calc(${s})`:s}return a}else if(Ru(e))return e}function r0(e,r,t){Jt(r,!1)&&e.push(`${r}:${t};`)}function Xo(e,r){return e?`${e}{${r}}`:""}var M1=e=>{var r;let t=L.getTheme(),o=vs(t,e,void 0,"variable"),n=(r=o?.match(/--[\w-]+/g))==null?void 0:r[0],i=vs(t,e,void 0,"value");return{name:n,variable:o,value:i}},Jo=(...e)=>vs(L.getTheme(),...e),vs=(e={},r,t,o)=>{if(r){let{variable:n,options:i}=L.defaults||{},{prefix:a,transform:s}=e?.options||i||{},c=He(r,/{([^}]*)}/g)?r:`{${r}}`;return o==="value"||Ae(o)&&s==="strict"?L.getTokenValue(r):$u(c,void 0,a,[n.excludedKeyRegex],t)}return""};var n0=(e={})=>{let{preset:r,options:t}=e;return{preset(o){return r=r?eo(r,o):o,this},options(o){return t=t?le(le({},t),o):o,this},primaryPalette(o){let{semantic:n}=r||{};return r=Qo(le({},r),{semantic:Qo(le({},n),{primary:o})}),this},surfacePalette(o){var n,i;let{semantic:a}=r||{},s=o?.hasOwnProperty("light")?o?.light:o,l=o?.hasOwnProperty("dark")?o?.dark:o,c={colorScheme:{light:le(le({},(n=a?.colorScheme)==null?void 0:n.light),!!s&&{surface:s}),dark:le(le({},(i=a?.colorScheme)==null?void 0:i.dark),!!l&&{surface:l})}};return r=Qo(le({},r),{semantic:le(le({},a),c)}),this},define({useDefaultPreset:o=!1,useDefaultOptions:n=!1}={}){return{preset:o?L.getPreset():r,options:n?L.getOptions():t}},update({mergePresets:o=!0,mergeOptions:n=!0}={}){let i={preset:o?eo(L.getPreset(),r):r,options:n?le(le({},L.getOptions()),t):t};return L.setTheme(i),i},use(o){let n=this.define(o);return L.setTheme(n),n}}};function i0(e,r={}){let t=L.defaults.variable,{prefix:o=t.prefix,selector:n=t.selector,excludedKeyRegex:i=t.excludedKeyRegex}=r,a=(c,u="")=>Object.entries(c).reduce((p,[h,g])=>{let S=He(h,i)?bs(u):bs(u,Ai(h)),w=e0(g);if(ht(w)){let{variables:k,tokens:ae}=a(w,S);Fu(p.tokens,ae),Fu(p.variables,k)}else p.tokens.push((o?S.replace(`${o}-`,""):S).replaceAll("-",".")),r0(p.variables,Lu(S),$u(w,S,o,[i]));return p},{variables:[],tokens:[]}),{variables:s,tokens:l}=a(e,o);return{value:s,tokens:l,declarations:s.join(""),css:Xo(n,s.join(""))}}var gt={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let r=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var o;return(o=r.map(n=>n.resolve(t)).find(n=>n.matched))!=null?o:this.rules.custom.resolve(t)})}},_toVariables(e,r){return i0(e,{prefix:r?.prefix})},getCommon({name:e="",theme:r={},params:t,set:o,defaults:n}){var i,a,s,l,c,u,p;let{preset:h,options:g}=r,S,w,k,ae,pe,Q,Ee;if(te(h)&&g.transform!=="strict"){let{primitive:ko,semantic:xo,extend:rn}=h,ar=xo||{},{colorScheme:nn}=ar,an=Bt(ar,["colorScheme"]),sn=rn||{},{colorScheme:ln}=sn,sr=Bt(sn,["colorScheme"]),lr=nn||{},{dark:cn}=lr,un=Bt(lr,["dark"]),dn=ln||{},{dark:pn}=dn,fn=Bt(dn,["dark"]),hn=te(ko)?this._toVariables({primitive:ko},g):{},gn=te(an)?this._toVariables({semantic:an},g):{},mn=te(un)?this._toVariables({light:un},g):{},Is=te(cn)?this._toVariables({dark:cn},g):{},Ms=te(sr)?this._toVariables({semantic:sr},g):{},Fs=te(fn)?this._toVariables({light:fn},g):{},Os=te(pn)?this._toVariables({dark:pn},g):{},[yf,Cf]=[(i=hn.declarations)!=null?i:"",hn.tokens],[wf,_f]=[(a=gn.declarations)!=null?a:"",gn.tokens||[]],[Df,Sf]=[(s=mn.declarations)!=null?s:"",mn.tokens||[]],[kf,xf]=[(l=Is.declarations)!=null?l:"",Is.tokens||[]],[Ef,Af]=[(c=Ms.declarations)!=null?c:"",Ms.tokens||[]],[Tf,Rf]=[(u=Fs.declarations)!=null?u:"",Fs.tokens||[]],[If,Mf]=[(p=Os.declarations)!=null?p:"",Os.tokens||[]];S=this.transformCSS(e,yf,"light","variable",g,o,n),w=Cf;let Ff=this.transformCSS(e,`${wf}${Df}`,"light","variable",g,o,n),Of=this.transformCSS(e,`${kf}`,"dark","variable",g,o,n);k=`${Ff}${Of}`,ae=[...new Set([..._f,...Sf,...xf])];let Bf=this.transformCSS(e,`${Ef}${Tf}color-scheme:light`,"light","variable",g,o,n),Lf=this.transformCSS(e,`${If}color-scheme:dark`,"dark","variable",g,o,n);pe=`${Bf}${Lf}`,Q=[...new Set([...Af,...Rf,...Mf])],Ee=nt(h.css,{dt:Jo})}return{primitive:{css:S,tokens:w},semantic:{css:k,tokens:ae},global:{css:pe,tokens:Q},style:Ee}},getPreset({name:e="",preset:r={},options:t,params:o,set:n,defaults:i,selector:a}){var s,l,c;let u,p,h;if(te(r)&&t.transform!=="strict"){let g=e.replace("-directive",""),S=r,{colorScheme:w,extend:k,css:ae}=S,pe=Bt(S,["colorScheme","extend","css"]),Q=k||{},{colorScheme:Ee}=Q,ko=Bt(Q,["colorScheme"]),xo=w||{},{dark:rn}=xo,ar=Bt(xo,["dark"]),nn=Ee||{},{dark:an}=nn,sn=Bt(nn,["dark"]),ln=te(pe)?this._toVariables({[g]:le(le({},pe),ko)},t):{},sr=te(ar)?this._toVariables({[g]:le(le({},ar),sn)},t):{},lr=te(rn)?this._toVariables({[g]:le(le({},rn),an)},t):{},[cn,un]=[(s=ln.declarations)!=null?s:"",ln.tokens||[]],[dn,pn]=[(l=sr.declarations)!=null?l:"",sr.tokens||[]],[fn,hn]=[(c=lr.declarations)!=null?c:"",lr.tokens||[]],gn=this.transformCSS(g,`${cn}${dn}`,"light","variable",t,n,i,a),mn=this.transformCSS(g,fn,"dark","variable",t,n,i,a);u=`${gn}${mn}`,p=[...new Set([...un,...pn,...hn])],h=nt(ae,{dt:Jo})}return{css:u,tokens:p,style:h}},getPresetC({name:e="",theme:r={},params:t,set:o,defaults:n}){var i;let{preset:a,options:s}=r,l=(i=a?.components)==null?void 0:i[e];return this.getPreset({name:e,preset:l,options:s,params:t,set:o,defaults:n})},getPresetD({name:e="",theme:r={},params:t,set:o,defaults:n}){var i;let a=e.replace("-directive",""),{preset:s,options:l}=r,c=(i=s?.directives)==null?void 0:i[a];return this.getPreset({name:a,preset:c,options:l,params:t,set:o,defaults:n})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,r){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?r.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:r.options.darkModeSelector):[]},getLayerOrder(e,r={},t,o){let{cssLayer:n}=r;return n?`@layer ${nt(n.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:r={},params:t,props:o={},set:n,defaults:i}){let a=this.getCommon({name:e,theme:r,params:t,set:n,defaults:i}),s=Object.entries(o).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(a||{}).reduce((l,[c,u])=>{if(u?.css){let p=Do(u?.css),h=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${h}" ${s}>${p}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:r={},params:t,props:o={},set:n,defaults:i}){var a;let s={name:e,theme:r,params:t,set:n,defaults:i},l=(a=e.includes("-directive")?this.getPresetD(s):this.getPresetC(s))==null?void 0:a.css,c=Object.entries(o).reduce((u,[p,h])=>u.push(`${p}="${h}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${Do(l)}</style>`:""},createTokens(e={},r,t="",o="",n={}){return Object.entries(e).forEach(([i,a])=>{let s=He(i,r.variable.excludedKeyRegex)?t:t?`${t}.${ms(i)}`:ms(i),l=o?`${o}.${i}`:i;ht(a)?this.createTokens(a,r,s,l,n):(n[s]||(n[s]={paths:[],computed(c,u={}){var p,h;return this.paths.length===1?(p=this.paths[0])==null?void 0:p.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(h=this.paths.find(g=>g.scheme===c))==null?void 0:h.computed(c,u.binding):this.paths.map(g=>g.computed(g.scheme,u[g.scheme]))}}),n[s].paths.push({path:l,value:a,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let p=/{([^}]*)}/g,h=a;if(u.name=this.path,u.binding||(u.binding={}),He(a,p)){let S=a.trim().replaceAll(p,ae=>{var pe;let Q=ae.replace(/{|}/g,""),Ee=(pe=n[Q])==null?void 0:pe.computed(c,u);return Ei(Ee)&&Ee.length===2?`light-dark(${Ee[0].value},${Ee[1].value})`:Ee?.value}),w=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,k=/var\([^)]+\)/g;h=He(S.replace(k,"0"),w)?`calc(${S})`:S}return Ae(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:h.includes("undefined")?void 0:h}}}))}),n},getTokenValue(e,r,t){var o;let i=(l=>l.split(".").filter(u=>!He(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(r),a=r.includes("colorScheme.light")?"light":r.includes("colorScheme.dark")?"dark":void 0,s=[(o=e[i])==null?void 0:o.computed(a)].flat().filter(l=>l);return s.length===1?s[0].value:s.reduce((l={},c)=>{let u=c,{colorScheme:p}=u,h=Bt(u,["colorScheme"]);return l[p]=h,l},void 0)},getSelectorRule(e,r,t,o){return t==="class"||t==="attr"?Xo(te(r)?`${e}${r},${e} ${r}`:e,o):Xo(e,te(r)?Xo(r,o):o)},transformCSS(e,r,t,o,n={},i,a,s){if(te(r)){let{cssLayer:l}=n;if(o!=="style"){let c=this.getColorSchemeOption(n,a);r=t==="dark"?c.reduce((u,{type:p,selector:h})=>(te(h)&&(u+=h.includes("[CSS]")?h.replace("[CSS]",r):this.getSelectorRule(h,s,p,r)),u),""):Xo(s??":root",r)}if(l){let c={name:"primeui",order:"primeui"};ht(l)&&(c.name=nt(l.name,{name:e,type:o})),te(c.name)&&(r=Xo(`@layer ${c.name}`,r),i?.layerNames(c.name))}return r}return""}},L={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:r}=e;r&&(this._theme=Qo(le({},r),{options:le(le({},this.defaults.options),r.options)}),this._tokens=gt.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),Ge.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=Qo(le({},this.theme),{preset:e}),this._tokens=gt.createTokens(e,this.defaults),this.clearLoadedStyleNames(),Ge.emit("preset:change",e),Ge.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=Qo(le({},this.theme),{options:e}),this.clearLoadedStyleNames(),Ge.emit("options:change",e),Ge.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return gt.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",r){return gt.getCommon({name:e,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",r){let t={name:e,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return gt.getPresetC(t)},getDirective(e="",r){let t={name:e,theme:this.theme,params:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return gt.getPresetD(t)},getCustomPreset(e="",r,t,o){let n={name:e,preset:r,options:this.options,selector:t,params:o,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return gt.getPreset(n)},getLayerOrderCSS(e=""){return gt.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",r,t="style",o){return gt.transformCSS(e,r,o,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",r,t={}){return gt.getCommonStyleSheet({name:e,theme:this.theme,params:r,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,r,t={}){return gt.getStyleSheet({name:e,theme:this.theme,params:r,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:r}){this._loadingStyles.size&&(this._loadingStyles.delete(r),Ge.emit(`theme:${r}:load`,e),!this._loadingStyles.size&&Ge.emit("theme:load"))}};function Nu(...e){let r=eo(L.getPreset(),...e);return L.setPreset(r),r}function Pu(e){return n0().surfacePalette(e).update().preset}var a0=0,Vu=(()=>{class e{document=d(Y);use(t,o={}){let n=!1,i=t,a=null,{immediate:s=!0,manual:l=!1,name:c=`style_${++a0}`,id:u=void 0,media:p=void 0,nonce:h=void 0,first:g=!1,props:S={}}=o;if(this.document){if(a=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!a.isConnected){i=t,Si(a,{type:"text/css",media:p,nonce:h});let w=this.document.head;g&&w.firstChild?w.insertBefore(a,w.firstChild):w.appendChild(a),ki(a,"data-primeng-style-id",c)}return a.textContent!==i&&(a.textContent=i),{id:u,name:c,el:a,css:i}}}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var er={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},s0=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-unselectable-text {
    user-select: none;
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,l0=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ce=(()=>{class e{name="base";useStyle=d(Vu);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,o={},n=i=>i)=>{let i=n(nt(t,{dt:Jo}));return i?this.useStyle.use(Do(i),f({name:this.name},o)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},o="")=>this.load(this.theme,t,(n="")=>L.transformCSS(t.name||this.name,`${n}${o}`));loadGlobalCSS=(t={})=>this.load(l0,t);loadGlobalTheme=(t={},o="")=>this.load(s0,t,(n="")=>L.transformCSS(t.name||this.name,`${n}${o}`));getCommonTheme=t=>L.getCommon(this.name,t);getComponentTheme=t=>L.getComponent(this.name,t);getDirectiveTheme=t=>L.getDirective(this.name,t);getPresetTheme=(t,o,n)=>L.getCustomPreset(this.name,t,o,n);getLayerOrderThemeCSS=()=>L.getLayerOrderCSS(this.name);getStyleSheet=(t="",o={})=>{if(this.css){let n=nt(this.css,{dt:Jo}),i=Do(`${n}${t}`),a=Object.entries(o).reduce((s,[l,c])=>s.push(`${l}="${c}"`)&&s,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${a}>${i}</style>`}return""};getCommonThemeStyleSheet=(t,o={})=>L.getCommonStyleSheet(this.name,t,o);getThemeStyleSheet=(t,o={})=>{let n=[L.getStyleSheet(this.name,t,o)];if(this.theme){let i=this.name==="base"?"global-style":`${this.name}-style`,a=nt(this.theme,{dt:Jo}),s=Do(L.transformCSS(i,a)),l=Object.entries(o).reduce((c,[u,p])=>c.push(`${u}="${p}"`)&&c,[]).join(" ");n.push(`<style type="text/css" data-primeng-style-id="${i}" ${l}>${s}</style>`)}return n.join("")};static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var c0=(()=>{class e{theme=Se(void 0);csp=Se({nonce:void 0});isThemeChanged=!1;document=d(Y);baseStyle=d(ce);constructor(){Rt(()=>{Ge.on("theme:change",t=>{Ne(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Rt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){L.clearLoadedStyleNames(),Ge.clear()}onThemeChange(t){L.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!L.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:n,style:i}=this.baseStyle.getCommonTheme?.()||{},a={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,f({name:"primitive-variables"},a)),this.baseStyle.load(o?.css,f({name:"semantic-variables"},a)),this.baseStyle.load(n?.css,f({name:"global-variables"},a)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},a),i),L.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:o,csp:n}=t||{};o&&this.theme.set(o),n&&this.csp.set(n)}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),tr=(()=>{class e extends c0{ripple=Se(!1);platformId=d(Ke);inputStyle=Se(null);inputVariant=Se(null);overlayOptions={};csp=Se({nonce:void 0});filterMatchModeOptions={text:[we.STARTS_WITH,we.CONTAINS,we.NOT_CONTAINS,we.ENDS_WITH,we.EQUALS,we.NOT_EQUALS],numeric:[we.EQUALS,we.NOT_EQUALS,we.LESS_THAN,we.LESS_THAN_OR_EQUAL_TO,we.GREATER_THAN,we.GREATER_THAN_OR_EQUAL_TO],date:[we.DATE_IS,we.DATE_IS_NOT,we.DATE_BEFORE,we.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new oe;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=f(f({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:o,ripple:n,inputStyle:i,inputVariant:a,theme:s,overlayOptions:l,translation:c,filterMatchModeOptions:u}=t||{};o&&this.csp.set(o),n&&this.ripple.set(n),i&&this.inputStyle.set(i),a&&this.inputVariant.set(a),l&&(this.overlayOptions=l),c&&this.setTranslation(c),u&&(this.filterMatchModeOptions=u),s&&this.setThemeConfig({theme:s,csp:o})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),u0=new I("PRIME_NG_CONFIG");function oD(...e){let r=e?.map(o=>({provide:u0,useValue:o,multi:!1})),t=fr(()=>{let o=d(tr);e?.forEach(n=>o.setConfig(n))});return io([...r,t])}var Uu=(()=>{class e extends ce{name="common";static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),de=(()=>{class e{document=d(Y);platformId=d(Ke);el=d(Re);injector=d(it);cd=d(lt);renderer=d(Ze);config=d(tr);baseComponentStyle=d(Uu);baseStyle=d(ce);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Kr("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,o="",n={}){return xi(t,o,n)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Oo(this.platformId)){let{dt:o}=t;o&&o.currentValue&&(this._loadScopedThemeStyles(o.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(o.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>Ge.off("theme:change",t))}_loadStyles(){let t=()=>{er.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),er.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!er.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),er.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!L.isStyleNameLoaded("common")){let{primitive:t,semantic:o,global:n,style:i}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,f({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(o?.css,f({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(n?.css,f({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(f({name:"global-style"},this.styleOptions),i),L.setLoadedStyleName("common")}if(!L.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:o}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,f({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(f({name:`${this.componentStyle?.name}-style`},this.styleOptions),o),L.setLoadedStyleName(this.componentStyle?.name)}if(!L.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,f({name:"layer-order",first:!0},this.styleOptions)),L.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:o}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},n=this.componentStyle?.load(o,f({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=n?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){er.clearLoadedStyleNames(),Ge.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,o){let n=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof n=="function"?n({instance:this}):typeof n=="string"?n:t}sx(t){let o=this.componentStyle?.inlineStyles?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:f({},o)}get parent(){return this.parentInstance}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$({type:e,inputs:{dt:"dt"},features:[K([Uu,ce]),De]})}return e})();var d0=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,p0={root:"p-ink"},zu=(()=>{class e extends ce{name="ripple";theme=d0;classes=p0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Ii=(()=>{class e extends de{zone=d(Le);_componentStyle=d(zu);animationListener;mouseDownListener;timeout;constructor(){super(),Rt(()=>{wr(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let o=this.getInk();if(!o||this.document.defaultView?.getComputedStyle(o,null).display==="none")return;if(_o(o,"p-ink-active"),!ps(o)&&!hs(o)){let s=Math.max(yu(this.el.nativeElement),fs(this.el.nativeElement));o.style.height=s+"px",o.style.width=s+"px"}let n=Du(this.el.nativeElement),i=t.pageX-n.left+this.document.body.scrollTop-hs(o)/2,a=t.pageY-n.top+this.document.body.scrollLeft-ps(o)/2;this.renderer.setStyle(o,"top",a+"px"),this.renderer.setStyle(o,"left",i+"px"),ft(o,"p-ink-active"),this.timeout=setTimeout(()=>{let s=this.getInk();s&&_o(s,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let o=0;o<t.length;o++)if(typeof t[o].className=="string"&&t[o].className.indexOf("p-ink")!==-1)return t[o];return null}resetInk(){let t=this.getInk();t&&_o(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),_o(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Su(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[K([zu]),N]})}return e})(),SD=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({})}return e})();var ys=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,o){t&&o&&(t.classList?t.classList.add(o):t.className+=" "+o)}static addMultipleClasses(t,o){if(t&&o)if(t.classList){let n=o.trim().split(" ");for(let i=0;i<n.length;i++)t.classList.add(n[i])}else{let n=o.split(" ");for(let i=0;i<n.length;i++)t.className+=" "+n[i]}}static removeClass(t,o){t&&o&&(t.classList?t.classList.remove(o):t.className=t.className.replace(new RegExp("(^|\\b)"+o.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,o){t&&o&&[o].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(i=>this.removeClass(t,i)))}static hasClass(t,o){return t&&o?t.classList?t.classList.contains(o):new RegExp("(^| )"+o+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(o){return o!==t})}static find(t,o){return Array.from(t.querySelectorAll(o))}static findSingle(t,o){return this.isElement(t)?t.querySelector(o):null}static index(t){let o=t.parentNode.childNodes,n=0;for(var i=0;i<o.length;i++){if(o[i]==t)return n;o[i].nodeType==1&&n++}return-1}static indexWithinGroup(t,o){let n=t.parentNode?t.parentNode.childNodes:[],i=0;for(var a=0;a<n.length;a++){if(n[a]==t)return i;n[a].attributes&&n[a].attributes[o]&&n[a].nodeType==1&&i++}return-1}static appendOverlay(t,o,n="self"){n!=="self"&&t&&o&&this.appendChild(t,o)}static alignOverlay(t,o,n="self",i=!0){t&&o&&(i&&(t.style.minWidth=`${e.getOuterWidth(o)}px`),n==="self"?this.relativePosition(t,o):this.absolutePosition(t,o))}static relativePosition(t,o,n=!0){let i=pe=>{if(pe)return getComputedStyle(pe).getPropertyValue("position")==="relative"?pe:i(pe.parentElement)},a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=o.offsetHeight,l=o.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),p=this.getViewport(),g=i(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},S,w;l.top+s+a.height>p.height?(S=l.top-g.top-a.height,t.style.transformOrigin="bottom",l.top+S<0&&(S=-1*l.top)):(S=s+l.top-g.top,t.style.transformOrigin="top");let k=l.left+a.width-p.width,ae=l.left-g.left;a.width>p.width?w=(l.left-g.left)*-1:k>0?w=ae-k:w=l.left-g.left,t.style.top=S+"px",t.style.left=w+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,o,n=!0){let i=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.height,s=i.width,l=o.offsetHeight,c=o.offsetWidth,u=o.getBoundingClientRect(),p=this.getWindowScrollTop(),h=this.getWindowScrollLeft(),g=this.getViewport(),S,w;u.top+l+a>g.height?(S=u.top+p-a,t.style.transformOrigin="bottom",S<0&&(S=p)):(S=l+u.top+p,t.style.transformOrigin="top"),u.left+s>g.width?w=Math.max(0,u.left+h+c-s):w=u.left+h,t.style.top=S+"px",t.style.left=w+"px",n&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,o=[]){return t.parentNode===null?o:this.getParents(t.parentNode,o.concat([t.parentNode]))}static getScrollableParents(t){let o=[];if(t){let n=this.getParents(t),i=/(auto|scroll)/,a=s=>{let l=window.getComputedStyle(s,null);return i.test(l.getPropertyValue("overflow"))||i.test(l.getPropertyValue("overflowX"))||i.test(l.getPropertyValue("overflowY"))};for(let s of n){let l=s.nodeType===1&&s.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let p=this.findSingle(s,u);p&&a(p)&&o.push(p)}}s.nodeType!==9&&a(s)&&o.push(s)}}return o}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let o=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",o}static getHiddenElementDimensions(t){let o={};return t.style.visibility="hidden",t.style.display="block",o.width=t.offsetWidth,o.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",o}static scrollInView(t,o){let n=getComputedStyle(t).getPropertyValue("borderTopWidth"),i=n?parseFloat(n):0,a=getComputedStyle(t).getPropertyValue("paddingTop"),s=a?parseFloat(a):0,l=t.getBoundingClientRect(),u=o.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-i-s,p=t.scrollTop,h=t.clientHeight,g=this.getOuterHeight(o);u<0?t.scrollTop=p+u:u+g>h&&(t.scrollTop=p+u-h+g)}static fadeIn(t,o){t.style.opacity=0;let n=+new Date,i=0,a=function(){i=+t.style.opacity.replace(",",".")+(new Date().getTime()-n)/o,t.style.opacity=i,n=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(a)||setTimeout(a,16))};a()}static fadeOut(t,o){var n=1,i=50,a=o,s=i/a;let l=setInterval(()=>{n=n-s,n<=0&&(n=0,clearInterval(l)),t.style.opacity=n},i)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,o){var n=Element.prototype,i=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||function(a){return[].indexOf.call(document.querySelectorAll(a),this)!==-1};return i.call(t,o)}static getOuterWidth(t,o){let n=t.offsetWidth;if(o){let i=getComputedStyle(t);n+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return n}static getHorizontalPadding(t){let o=getComputedStyle(t);return parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)}static getHorizontalMargin(t){let o=getComputedStyle(t);return parseFloat(o.marginLeft)+parseFloat(o.marginRight)}static innerWidth(t){let o=t.offsetWidth,n=getComputedStyle(t);return o+=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static width(t){let o=t.offsetWidth,n=getComputedStyle(t);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),o}static getInnerHeight(t){let o=t.offsetHeight,n=getComputedStyle(t);return o+=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom),o}static getOuterHeight(t,o){let n=t.offsetHeight;if(o){let i=getComputedStyle(t);n+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}static getHeight(t){let o=t.offsetHeight,n=getComputedStyle(t);return o-=parseFloat(n.paddingTop)+parseFloat(n.paddingBottom)+parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth),o}static getWidth(t){let o=t.offsetWidth,n=getComputedStyle(t);return o-=parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)+parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),o}static getViewport(){let t=window,o=document,n=o.documentElement,i=o.getElementsByTagName("body")[0],a=t.innerWidth||n.clientWidth||i.clientWidth,s=t.innerHeight||n.clientHeight||i.clientHeight;return{width:a,height:s}}static getOffset(t){var o=t.getBoundingClientRect();return{top:o.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:o.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,o){let n=t.parentNode;if(!n)throw"Can't replace element";return n.replaceChild(o,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,o=t.indexOf("MSIE ");if(o>0)return!0;var n=t.indexOf("Trident/");if(n>0){var i=t.indexOf("rv:");return!0}var a=t.indexOf("Edge/");return a>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,o){if(this.isElement(o))o.appendChild(t);else if(o&&o.el&&o.el.nativeElement)o.el.nativeElement.appendChild(t);else throw"Cannot append "+o+" to "+t}static removeChild(t,o){if(this.isElement(o))o.removeChild(t);else if(o.el&&o.el.nativeElement)o.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+o}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let o=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(o.borderLeftWidth)-parseFloat(o.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let o=document.createElement("div");o.className="p-scrollbar-measure",document.body.appendChild(o);let n=o.offsetWidth-o.clientWidth;return document.body.removeChild(o),this.calculatedScrollbarWidth=n,n}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let o=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=o,o}static invokeElementMethod(t,o,n){t[o].apply(t,n)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),o=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:o[1]||"",version:o[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,o){t&&document.activeElement!==t&&t.focus(o)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,o=""){let n=this.find(t,this.getFocusableSelectorString(o)),i=[];for(let a of n){let s=getComputedStyle(a);this.isVisible(a)&&s.display!="none"&&s.visibility!="hidden"&&i.push(a)}return i}static getFocusableElement(t,o=""){let n=this.findSingle(t,this.getFocusableSelectorString(o));if(n){let i=getComputedStyle(n);if(this.isVisible(n)&&i.display!="none"&&i.visibility!="hidden")return n}return null}static getFirstFocusableElement(t,o=""){let n=this.getFocusableElements(t,o);return n.length>0?n[0]:null}static getLastFocusableElement(t,o){let n=this.getFocusableElements(t,o);return n.length>0?n[n.length-1]:null}static getNextFocusableElement(t,o=!1){let n=e.getFocusableElements(t),i=0;if(n&&n.length>0){let a=n.indexOf(n[0].ownerDocument.activeElement);o?a==-1||a===0?i=n.length-1:i=a-1:a!=-1&&a!==n.length-1&&(i=a+1)}return n[i]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,o){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return o?.nextElementSibling;case"@prev":return o?.previousElementSibling;case"@parent":return o?.parentElement;case"@grandparent":return o?.parentElement.parentElement;default:let n=typeof t;if(n==="string")return document.querySelector(t);if(n==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let a=(s=>!!(s&&s.constructor&&s.call&&s.apply))(t)?t():t;return a&&a.nodeType===9||this.isExist(a)?a:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,o){if(t){let n=t.getAttribute(o);return isNaN(n)?n==="true"||n==="false"?n==="true":n:+n}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,o={},...n){if(t){let i=document.createElement(t);return this.setAttributes(i,o),i.append(...n),i}}static setAttribute(t,o="",n){this.isElement(t)&&n!==null&&n!==void 0&&t.setAttribute(o,n)}static setAttributes(t,o={}){if(this.isElement(t)){let n=(i,a)=>{let s=t?.$attrs?.[i]?[t?.$attrs?.[i]]:[];return[a].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let p=Array.isArray(c)?n(i,c):Object.entries(c).map(([h,g])=>i==="style"&&(g||g===0)?`${h.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${g}`:g?h:void 0);l=p.length?l.concat(p.filter(h=>!!h)):l}}return l},s)};Object.entries(o).forEach(([i,a])=>{if(a!=null){let s=i.match(/^on(.+)/);s?t.addEventListener(s[1].toLowerCase(),a):i==="pBind"?this.setAttributes(t,a):(a=i==="class"?[...new Set(n("class",a))].join(" ").trim():i==="style"?n("style",a).join(";").trim():a,(t.$attrs=t.$attrs||{})&&(t.$attrs[i]=a),t.setAttribute(i,a))}})}}static isFocusableElement(t,o=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${o}`):!1}}return e})(),ju=class{element;listener;scrollableParents;constructor(r,t=()=>{}){this.element=r,this.listener=t}bindScrollListener(){this.scrollableParents=ys.getScrollableParents(this.element);for(let r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let r=0;r<this.scrollableParents.length;r++)this.scrollableParents[r].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var or=(()=>{class e extends de{autofocus=!1;_autofocus=!1;focused=!1;platformId=d(Ke);document=d(Y);host=d(Re);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){wr(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=ys.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=$({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",D],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[N]})}return e})(),FD=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({})}return e})();var h0=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,g0={root:({props:e,instance:r})=>["p-badge p-component",{"p-badge-circle":te(e.value)&&String(e.value).length===1,"p-badge-dot":Ae(e.value)&&!r.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},Hu=(()=>{class e extends ce{name="badge";theme=h0;classes=g0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Cs=(()=>{class e extends de{styleClass=bt();style=bt();badgeSize=bt();size=bt();severity=bt();value=bt();badgeDisabled=bt(!1,{transform:D});_componentStyle=d(Hu);containerClass=ue(()=>{let t="p-badge p-component";return te(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Ae(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(o,n){o&2&&(st(n.style()),Ce(n.containerClass()),dl("display",n.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[K([Hu]),N],decls:1,vars:1,template:function(o,n){o&1&&ne(0),o&2&&Ut(n.value())},dependencies:[he,X],encapsulation:2,changeDetection:0})}return e})(),Wu=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[Cs,X,X]})}return e})();var b0=["*"],v0=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,y0=(()=>{class e extends ce{name="baseicon";inlineStyles=v0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Mi=(()=>{class e extends de{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=Ae(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",D],styleClass:"styleClass"},features:[K([y0]),N],ngContentSelectors:b0,decls:1,vars:0,template:function(o,n){o&1&&(At(),Tt(0))},encapsulation:2,changeDetection:0})}return e})();var Gu=(()=>{class e extends Mi{pathId;ngOnInit(){this.pathId="url(#"+Kr()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["SpinnerIcon"]],features:[N],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(o,n){o&1&&(vn(),v(0,"svg",0)(1,"g"),fe(2,"path",1),y(),v(3,"defs")(4,"clipPath",2),fe(5,"rect",3),y()()()),o&2&&(Ce(n.getClassNames()),O("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),C(),O("clip-path",n.pathId),C(3),b("id",n.pathId))},encapsulation:2})}return e})();var qu=(()=>{class e extends Mi{static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["TimesIcon"]],features:[N],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(o,n){o&1&&(vn(),v(0,"svg",0),fe(1,"path",1),y()),o&2&&(Ce(n.getClassNames()),O("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var C0=["content"],w0=["loadingicon"],_0=["icon"],D0=["*"],Zu=e=>({class:e});function S0(e,r){e&1&&Ie(0)}function k0(e,r){if(e&1&&fe(0,"span",8),e&2){let t=_(3);b("ngClass",t.iconClass()),O("aria-hidden",!0)("data-pc-section","loadingicon")}}function x0(e,r){if(e&1&&fe(0,"SpinnerIcon",9),e&2){let t=_(3);b("styleClass",t.spinnerIconClass())("spin",!0),O("aria-hidden",!0)("data-pc-section","loadingicon")}}function E0(e,r){if(e&1&&(Nt(0),B(1,k0,1,3,"span",6)(2,x0,1,4,"SpinnerIcon",7),Pt()),e&2){let t=_(2);C(),b("ngIf",t.loadingIcon),C(),b("ngIf",!t.loadingIcon)}}function A0(e,r){}function T0(e,r){if(e&1&&B(0,A0,0,0,"ng-template",10),e&2){let t=_(2);b("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function R0(e,r){if(e&1&&(Nt(0),B(1,E0,3,2,"ng-container",2)(2,T0,1,1,null,5),Pt()),e&2){let t=_();C(),b("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),C(),b("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",ve(3,Zu,t.iconClass()))}}function I0(e,r){if(e&1&&fe(0,"span",8),e&2){let t=_(2);Ce(t.icon),b("ngClass",t.iconClass()),O("data-pc-section","icon")}}function M0(e,r){}function F0(e,r){if(e&1&&B(0,M0,0,0,"ng-template",10),e&2){let t=_(2);b("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function O0(e,r){if(e&1&&(Nt(0),B(1,I0,1,4,"span",11)(2,F0,1,1,null,5),Pt()),e&2){let t=_();C(),b("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),C(),b("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",ve(3,Zu,t.iconClass()))}}function B0(e,r){if(e&1&&(v(0,"span",12),ne(1),y()),e&2){let t=_();O("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),C(),Ut(t.label)}}function L0(e,r){if(e&1&&fe(0,"p-badge",13),e&2){let t=_();b("value",t.badge)("severity",t.badgeSeverity)}}var $0=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-sm.p-button-icon-only {
    width: ${e("button.sm.icon.only.width")};
}

.p-button-sm.p-button-icon-only.p-button-rounded {
    height: ${e("button.sm.icon.only.width")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-lg.p-button-icon-only {
    width: ${e("button.lg.icon.only.width")};
}

.p-button-lg.p-button-icon-only.p-button-rounded {
    height: ${e("button.lg.icon.only.width")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,N0={root:({instance:e,props:r})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!r.label&&!r.badge,"p-button-vertical":(r.iconPos==="top"||r.iconPos==="bottom")&&r.label,"p-button-loading":r.loading,"p-button-link":r.link,[`p-button-${r.severity}`]:r.severity,"p-button-raised":r.raised,"p-button-rounded":r.rounded,"p-button-text":r.text,"p-button-outlined":r.outlined,"p-button-sm":r.size==="small","p-button-lg":r.size==="large","p-button-plain":r.plain,"p-button-fluid":r.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},oo=(()=>{class e extends ce{name="button";theme=$0;classes=N0;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var to={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Yu=(()=>{class e extends de{_componentStyle=d(oo);static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=$({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(o,n){o&2&&at("p-button-label",!0)},features:[K([oo]),N]})}return e})(),Ku=(()=>{class e extends de{_componentStyle=d(oo);static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=$({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(o,n){o&2&&at("p-button-icon",!0)},features:[K([oo]),N]})}return e})(),TS=(()=>{class e extends de{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=aa(Ku);labelSignal=aa(Yu);isIconOnly=ue(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([o,n])=>this[`_${o}`]!==n&&(this[`_${o}`]=n))}_severity;get severity(){return this._severity}set severity(t){this._severity=t,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(to);isTextButton=ue(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=d(oo);ngAfterViewInit(){super.ngAfterViewInit(),ft(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:o}=t;if(o){let n=o.currentValue;for(let i in n)this[i]=n[i]}}getStyleClass(){let t=[to.button,to.component];return this.icon&&!this.label&&Ae(this.htmlElement.textContent)&&t.push(to.iconOnly),this.loading&&(t.push(to.disabled,to.loading),!this.icon&&this.label&&t.push(to.labelOnly),this.icon&&!this.label&&!Ae(this.htmlElement.textContent)&&t.push(to.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return Ae(this.fluid)?!!o:this.fluid}setStyleClass(){let t=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}removeExistingSeverityClass(){let t=["success","info","warn","danger","help","primary","secondary","contrast"],o=this.htmlElement.classList.value.split(" ").find(n=>t.some(i=>n===`p-button-${i}`));o&&this.htmlElement.classList.remove(o)}createLabel(){if(!Zo(this.htmlElement,".p-button-label")&&this.label){let o=this.document.createElement("span");this.icon&&!this.label&&o.setAttribute("aria-hidden","true"),o.className="p-button-label",o.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(o)}}createIcon(){if(!Zo(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let o=this.document.createElement("span");o.className="p-button-icon",o.setAttribute("aria-hidden","true");let n=this.label?"p-button-icon-"+this.iconPos:null;n&&ft(o,n);let i=this.getIconClass();i&&ft(o,i),!this.loadingIcon&&this.loading&&(o.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(o,this.htmlElement.firstChild)}}updateLabel(){let t=Zo(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=Zo(this.htmlElement,".p-button-icon"),o=Zo(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(o?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=$({type:e,selectors:[["","pButton",""]],contentQueries:function(o,n,i){o&1&&(da(i,n.iconSignal,Ku,5),da(i,n.labelSignal,Yu,5)),o&2&&fl(2)},hostVars:4,hostBindings:function(o,n){o&2&&at("p-button-icon-only",n.isIconOnly())("p-button-text",n.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],outlined:[2,"outlined","outlined",D],size:"size",plain:[2,"plain","plain",D],fluid:[2,"fluid","fluid",D],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[K([oo]),N,De]})}return e})(),ws=(()=>{class e extends de{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new z;onFocus=new z;onBlur=new z;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([o,n])=>this[`_${o}`]!==n&&(this[`_${o}`]=n))}get hasFluid(){let o=this.el.nativeElement.closest("p-fluid");return Ae(this.fluid)?!!o:this.fluid}_componentStyle=d(oo);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"loadingicon":this._loadingIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:o}=t;if(o){let n=o.currentValue;for(let i in n)this[i]=n[i]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[o])=>t+` ${o}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-button"]],contentQueries:function(o,n,i){if(o&1&&(se(i,C0,5),se(i,w0,5),se(i,_0,5),se(i,St,4)),o&2){let a;G(a=q())&&(n.contentTemplate=a.first),G(a=q())&&(n.loadingIconTemplate=a.first),G(a=q())&&(n.iconTemplate=a.first),G(a=q())&&(n.templates=a)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",D],loading:[2,"loading","loading",D],loadingIcon:"loadingIcon",raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],plain:[2,"plain","plain",D],severity:"severity",outlined:[2,"outlined","outlined",D],link:[2,"link","link",D],tabindex:[2,"tabindex","tabindex",$e],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",D],fluid:[2,"fluid","fluid",D],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[K([oo]),N,De],ngContentSelectors:D0,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(o,n){o&1&&(At(),v(0,"button",0),re("click",function(a){return n.onClick.emit(a)})("focus",function(a){return n.onFocus.emit(a)})("blur",function(a){return n.onBlur.emit(a)}),Tt(1),B(2,S0,1,0,"ng-container",1)(3,R0,3,5,"ng-container",2)(4,O0,3,5,"ng-container",2)(5,B0,2,3,"span",3)(6,L0,1,2,"p-badge",4),y()),o&2&&(b("ngStyle",n.style)("disabled",n.disabled||n.loading)("ngClass",n.buttonClass)("pAutoFocus",n.autofocus),O("type",n.type)("aria-label",n.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",n.tabindex),C(2),b("ngTemplateOutlet",n.contentTemplate||n._contentTemplate),C(),b("ngIf",n.loading),C(),b("ngIf",!n.loading),C(),b("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.label),C(),b("ngIf",!n.contentTemplate&&!n._contentTemplate&&n.badge))},dependencies:[he,Pe,po,dt,Ft,Ii,or,Gu,Wu,Cs,X],encapsulation:2,changeDetection:0})}return e})(),RS=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[he,ws,X,X]})}return e})();var id=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,o){this._renderer=t,this._elementRef=o}setProperty(t,o){this._renderer.setProperty(this._elementRef.nativeElement,t,o)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(o){return new(o||e)(A(Ze),A(Re))};static \u0275dir=$({type:e})}return e})(),P0=(()=>{class e extends id{static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=$({type:e,features:[N]})}return e})(),kt=new I("");var V0={provide:kt,useExisting:Be(()=>ad),multi:!0};function U0(){let e=tt()?tt().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var z0=new I(""),ad=(()=>{class e extends id{_compositionMode;_composing=!1;constructor(t,o,n){super(t,o),this._compositionMode=n,this._compositionMode==null&&(this._compositionMode=!U0())}writeValue(t){let o=t??"";this.setProperty("value",o)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(o){return new(o||e)(A(Ze),A(Re),A(z0,8))};static \u0275dir=$({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(o,n){o&1&&re("input",function(a){return n._handleInput(a.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(a){return n._compositionEnd(a.target.value)})},standalone:!1,features:[K([V0]),N]})}return e})();function j0(e){return e==null||H0(e)===0}function H0(e){return e==null?null:Array.isArray(e)||typeof e=="string"?e.length:e instanceof Set?e.size:null}var ks=new I(""),sd=new I("");function W0(e){return j0(e.value)?{required:!0}:null}function Xu(e){return null}function ld(e){return e!=null}function cd(e){return Io(e)?be(e):e}function ud(e){let r={};return e.forEach(t=>{r=t!=null?f(f({},r),t):r}),Object.keys(r).length===0?null:r}function dd(e,r){return r.map(t=>t(e))}function G0(e){return!e.validate}function pd(e){return e.map(r=>G0(r)?r:t=>r.validate(t))}function q0(e){if(!e)return null;let r=e.filter(ld);return r.length==0?null:function(t){return ud(dd(t,r))}}function xs(e){return e!=null?q0(pd(e)):null}function Y0(e){if(!e)return null;let r=e.filter(ld);return r.length==0?null:function(t){let o=dd(t,r).map(cd);return Us(o).pipe(P(ud))}}function Es(e){return e!=null?Y0(pd(e)):null}function Qu(e,r){return e===null?[r]:Array.isArray(e)?[...e,r]:[e,r]}function K0(e){return e._rawValidators}function Z0(e){return e._rawAsyncValidators}function _s(e){return e?Array.isArray(e)?e:[e]:[]}function Oi(e,r){return Array.isArray(e)?e.includes(r):e===r}function Ju(e,r){let t=_s(r);return _s(e).forEach(n=>{Oi(t,n)||t.push(n)}),t}function ed(e,r){return _s(r).filter(t=>!Oi(e,t))}var Bi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(r){this._rawValidators=r||[],this._composedValidatorFn=xs(this._rawValidators)}_setAsyncValidators(r){this._rawAsyncValidators=r||[],this._composedAsyncValidatorFn=Es(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(r){this._onDestroyCallbacks.push(r)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(r=>r()),this._onDestroyCallbacks=[]}reset(r=void 0){this.control&&this.control.reset(r)}hasError(r,t){return this.control?this.control.hasError(r,t):!1}getError(r,t){return this.control?this.control.getError(r,t):null}},ir=class extends Bi{name;get formDirective(){return null}get path(){return null}},So=class extends Bi{_parent=null;name=null;valueAccessor=null},Li=class{_cd;constructor(r){this._cd=r}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},X0={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qS=T(f({},X0),{"[class.ng-submitted]":"isSubmitted"}),Vi=(()=>{class e extends Li{constructor(t){super(t)}static \u0275fac=function(o){return new(o||e)(A(So,2))};static \u0275dir=$({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(o,n){o&2&&at("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},standalone:!1,features:[N]})}return e})(),YS=(()=>{class e extends Li{constructor(t){super(t)}static \u0275fac=function(o){return new(o||e)(A(ir,10))};static \u0275dir=$({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(o,n){o&2&&at("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)("ng-submitted",n.isSubmitted)},standalone:!1,features:[N]})}return e})();var Zr="VALID",Fi="INVALID",rr="PENDING",Xr="DISABLED",ro=class{},$i=class extends ro{value;source;constructor(r,t){super(),this.value=r,this.source=t}},Jr=class extends ro{pristine;source;constructor(r,t){super(),this.pristine=r,this.source=t}},en=class extends ro{touched;source;constructor(r,t){super(),this.touched=r,this.source=t}},nr=class extends ro{status;source;constructor(r,t){super(),this.status=r,this.source=t}},Ds=class extends ro{source;constructor(r){super(),this.source=r}},Ss=class extends ro{source;constructor(r){super(),this.source=r}};function fd(e){return(Ui(e)?e.validators:e)||null}function Q0(e){return Array.isArray(e)?xs(e):e||null}function hd(e,r){return(Ui(r)?r.asyncValidators:e)||null}function J0(e){return Array.isArray(e)?Es(e):e||null}function Ui(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function eb(e,r,t){let o=e.controls;if(!(r?Object.keys(o):o).length)throw new F(1e3,"");if(!o[t])throw new F(1001,"")}function tb(e,r,t){e._forEachChild((o,n)=>{if(t[n]===void 0)throw new F(1002,"")})}var Ni=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(r,t){this._assignValidators(r),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(r){this._rawValidators=this._composedValidatorFn=r}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(r){this._rawAsyncValidators=this._composedAsyncValidatorFn=r}get parent(){return this._parent}get status(){return Ne(this.statusReactive)}set status(r){Ne(()=>this.statusReactive.set(r))}_status=ue(()=>this.statusReactive());statusReactive=Se(void 0);get valid(){return this.status===Zr}get invalid(){return this.status===Fi}get pending(){return this.status==rr}get disabled(){return this.status===Xr}get enabled(){return this.status!==Xr}errors;get pristine(){return Ne(this.pristineReactive)}set pristine(r){Ne(()=>this.pristineReactive.set(r))}_pristine=ue(()=>this.pristineReactive());pristineReactive=Se(!0);get dirty(){return!this.pristine}get touched(){return Ne(this.touchedReactive)}set touched(r){Ne(()=>this.touchedReactive.set(r))}_touched=ue(()=>this.touchedReactive());touchedReactive=Se(!1);get untouched(){return!this.touched}_events=new oe;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(r){this._assignValidators(r)}setAsyncValidators(r){this._assignAsyncValidators(r)}addValidators(r){this.setValidators(Ju(r,this._rawValidators))}addAsyncValidators(r){this.setAsyncValidators(Ju(r,this._rawAsyncValidators))}removeValidators(r){this.setValidators(ed(r,this._rawValidators))}removeAsyncValidators(r){this.setAsyncValidators(ed(r,this._rawAsyncValidators))}hasValidator(r){return Oi(this._rawValidators,r)}hasAsyncValidator(r){return Oi(this._rawAsyncValidators,r)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(r={}){let t=this.touched===!1;this.touched=!0;let o=r.sourceControl??this;this._parent&&!r.onlySelf&&this._parent.markAsTouched(T(f({},r),{sourceControl:o})),t&&r.emitEvent!==!1&&this._events.next(new en(!0,o))}markAllAsTouched(r={}){this.markAsTouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(r))}markAsUntouched(r={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let o=r.sourceControl??this;this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0,emitEvent:r.emitEvent,sourceControl:o})}),this._parent&&!r.onlySelf&&this._parent._updateTouched(r,o),t&&r.emitEvent!==!1&&this._events.next(new en(!1,o))}markAsDirty(r={}){let t=this.pristine===!0;this.pristine=!1;let o=r.sourceControl??this;this._parent&&!r.onlySelf&&this._parent.markAsDirty(T(f({},r),{sourceControl:o})),t&&r.emitEvent!==!1&&this._events.next(new Jr(!1,o))}markAsPristine(r={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let o=r.sourceControl??this;this._forEachChild(n=>{n.markAsPristine({onlySelf:!0,emitEvent:r.emitEvent})}),this._parent&&!r.onlySelf&&this._parent._updatePristine(r,o),t&&r.emitEvent!==!1&&this._events.next(new Jr(!0,o))}markAsPending(r={}){this.status=rr;let t=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new nr(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!r.onlySelf&&this._parent.markAsPending(T(f({},r),{sourceControl:t}))}disable(r={}){let t=this._parentMarkedDirty(r.onlySelf);this.status=Xr,this.errors=null,this._forEachChild(n=>{n.disable(T(f({},r),{onlySelf:!0}))}),this._updateValue();let o=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new $i(this.value,o)),this._events.next(new nr(this.status,o)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(T(f({},r),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!0))}enable(r={}){let t=this._parentMarkedDirty(r.onlySelf);this.status=Zr,this._forEachChild(o=>{o.enable(T(f({},r),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent}),this._updateAncestors(T(f({},r),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!1))}_updateAncestors(r,t){this._parent&&!r.onlySelf&&(this._parent.updateValueAndValidity(r),r.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(r){this._parent=r}getRawValue(){return this.value}updateValueAndValidity(r={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let o=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Zr||this.status===rr)&&this._runAsyncValidator(o,r.emitEvent)}let t=r.sourceControl??this;r.emitEvent!==!1&&(this._events.next(new $i(this.value,t)),this._events.next(new nr(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!r.onlySelf&&this._parent.updateValueAndValidity(T(f({},r),{sourceControl:t}))}_updateTreeValidity(r={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(r)),this.updateValueAndValidity({onlySelf:!0,emitEvent:r.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Xr:Zr}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(r,t){if(this.asyncValidator){this.status=rr,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let o=cd(this.asyncValidator(this));this._asyncValidationSubscription=o.subscribe(n=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(n,{emitEvent:t,shouldHaveEmitted:r})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let r=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,r}return!1}setErrors(r,t={}){this.errors=r,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(r){let t=r;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((o,n)=>o&&o._find(n),this)}getError(r,t){let o=t?this.get(t):this;return o&&o.errors?o.errors[r]:null}hasError(r,t){return!!this.getError(r,t)}get root(){let r=this;for(;r._parent;)r=r._parent;return r}_updateControlsErrors(r,t,o){this.status=this._calculateStatus(),r&&this.statusChanges.emit(this.status),(r||o)&&this._events.next(new nr(this.status,t)),this._parent&&this._parent._updateControlsErrors(r,t,o)}_initObservables(){this.valueChanges=new z,this.statusChanges=new z}_calculateStatus(){return this._allControlsDisabled()?Xr:this.errors?Fi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(rr)?rr:this._anyControlsHaveStatus(Fi)?Fi:Zr}_anyControlsHaveStatus(r){return this._anyControls(t=>t.status===r)}_anyControlsDirty(){return this._anyControls(r=>r.dirty)}_anyControlsTouched(){return this._anyControls(r=>r.touched)}_updatePristine(r,t){let o=!this._anyControlsDirty(),n=this.pristine!==o;this.pristine=o,this._parent&&!r.onlySelf&&this._parent._updatePristine(r,t),n&&this._events.next(new Jr(this.pristine,t))}_updateTouched(r={},t){this.touched=this._anyControlsTouched(),this._events.next(new en(this.touched,t)),this._parent&&!r.onlySelf&&this._parent._updateTouched(r,t)}_onDisabledChange=[];_registerOnCollectionChange(r){this._onCollectionChange=r}_setUpdateStrategy(r){Ui(r)&&r.updateOn!=null&&(this._updateOn=r.updateOn)}_parentMarkedDirty(r){let t=this._parent&&this._parent.dirty;return!r&&!!t&&!this._parent._anyControlsDirty()}_find(r){return null}_assignValidators(r){this._rawValidators=Array.isArray(r)?r.slice():r,this._composedValidatorFn=Q0(this._rawValidators)}_assignAsyncValidators(r){this._rawAsyncValidators=Array.isArray(r)?r.slice():r,this._composedAsyncValidatorFn=J0(this._rawAsyncValidators)}},Pi=class extends Ni{constructor(r,t,o){super(fd(t),hd(o,t)),this.controls=r,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(r,t){return this.controls[r]?this.controls[r]:(this.controls[r]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(r,t,o={}){this.registerControl(r,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}removeControl(r,t={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(r,t,o={}){this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),delete this.controls[r],t&&this.registerControl(r,t),this.updateValueAndValidity({emitEvent:o.emitEvent}),this._onCollectionChange()}contains(r){return this.controls.hasOwnProperty(r)&&this.controls[r].enabled}setValue(r,t={}){tb(this,!0,r),Object.keys(r).forEach(o=>{eb(this,!0,o),this.controls[o].setValue(r[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(r,t={}){r!=null&&(Object.keys(r).forEach(o=>{let n=this.controls[o];n&&n.patchValue(r[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(r={},t={}){this._forEachChild((o,n)=>{o.reset(r?r[n]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(r,t,o)=>(r[o]=t.getRawValue(),r))}_syncPendingControls(){let r=this._reduceChildren(!1,(t,o)=>o._syncPendingControls()?!0:t);return r&&this.updateValueAndValidity({onlySelf:!0}),r}_forEachChild(r){Object.keys(this.controls).forEach(t=>{let o=this.controls[t];o&&r(o,t)})}_setUpControls(){this._forEachChild(r=>{r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(r){for(let[t,o]of Object.entries(this.controls))if(this.contains(t)&&r(o))return!0;return!1}_reduceValue(){let r={};return this._reduceChildren(r,(t,o,n)=>((o.enabled||this.disabled)&&(t[n]=o.value),t))}_reduceChildren(r,t){let o=r;return this._forEachChild((n,i)=>{o=t(o,n,i)}),o}_allControlsDisabled(){for(let r of Object.keys(this.controls))if(this.controls[r].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(r){return this.controls.hasOwnProperty(r)?this.controls[r]:null}};var As=new I("",{providedIn:"root",factory:()=>Ts}),Ts="always";function ob(e,r){return[...r.path,e]}function gd(e,r,t=Ts){md(e,r),r.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&r.valueAccessor.setDisabledState?.(e.disabled),nb(e,r),ab(e,r),ib(e,r),rb(e,r)}function td(e,r){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(r)})}function rb(e,r){if(r.valueAccessor.setDisabledState){let t=o=>{r.valueAccessor.setDisabledState(o)};e.registerOnDisabledChange(t),r._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function md(e,r){let t=K0(e);r.validator!==null?e.setValidators(Qu(t,r.validator)):typeof t=="function"&&e.setValidators([t]);let o=Z0(e);r.asyncValidator!==null?e.setAsyncValidators(Qu(o,r.asyncValidator)):typeof o=="function"&&e.setAsyncValidators([o]);let n=()=>e.updateValueAndValidity();td(r._rawValidators,n),td(r._rawAsyncValidators,n)}function nb(e,r){r.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&bd(e,r)})}function ib(e,r){r.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&bd(e,r),e.updateOn!=="submit"&&e.markAsTouched()})}function bd(e,r){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),r.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function ab(e,r){let t=(o,n)=>{r.valueAccessor.writeValue(o),n&&r.viewToModelUpdate(o)};e.registerOnChange(t),r._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function sb(e,r){e==null,md(e,r)}function lb(e,r){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(r,t.currentValue)}function cb(e){return Object.getPrototypeOf(e.constructor)===P0}function ub(e,r){e._syncPendingControls(),r.forEach(t=>{let o=t.control;o.updateOn==="submit"&&o._pendingChange&&(t.viewToModelUpdate(o._pendingValue),o._pendingChange=!1)})}function db(e,r){if(!r)return null;Array.isArray(r);let t,o,n;return r.forEach(i=>{i.constructor===ad?t=i:cb(i)?o=i:n=i}),n||o||t||null}var pb={provide:ir,useExisting:Be(()=>fb)},Qr=Promise.resolve(),fb=(()=>{class e extends ir{callSetDisabledState;get submitted(){return Ne(this.submittedReactive)}_submitted=ue(()=>this.submittedReactive());submittedReactive=Se(!1);_directives=new Set;form;ngSubmit=new z;options;constructor(t,o,n){super(),this.callSetDisabledState=n,this.form=new Pi({},xs(t),Es(o))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){Qr.then(()=>{let o=this._findContainer(t.path);t.control=o.registerControl(t.name,t.control),gd(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){Qr.then(()=>{let o=this._findContainer(t.path);o&&o.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){Qr.then(()=>{let o=this._findContainer(t.path),n=new Pi({});sb(n,t),o.registerControl(t.name,n),n.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){Qr.then(()=>{let o=this._findContainer(t.path);o&&o.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,o){Qr.then(()=>{this.form.get(t.path).setValue(o)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),ub(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Ds(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1),this.form._events.next(new Ss(this.form))}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(o){return new(o||e)(A(ks,10),A(sd,10),A(As,8))};static \u0275dir=$({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(o,n){o&1&&re("submit",function(a){return n.onSubmit(a)})("reset",function(){return n.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[K([pb]),N]})}return e})();function od(e,r){let t=e.indexOf(r);t>-1&&e.splice(t,1)}function rd(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var hb=class extends Ni{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(r=null,t,o){super(fd(t),hd(o,t)),this._applyFormState(r),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Ui(t)&&(t.nonNullable||t.initialValueIsDefault)&&(rd(r)?this.defaultValue=r.value:this.defaultValue=r)}setValue(r,t={}){this.value=this._pendingValue=r,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(o=>o(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(r,t={}){this.setValue(r,t)}reset(r=this.defaultValue,t={}){this._applyFormState(r),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(r){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(r){this._onChange.push(r)}_unregisterOnChange(r){od(this._onChange,r)}registerOnDisabledChange(r){this._onDisabledChange.push(r)}_unregisterOnDisabledChange(r){od(this._onDisabledChange,r)}_forEachChild(r){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(r){rd(r)?(this.value=this._pendingValue=r.value,r.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=r}};var gb={provide:So,useExisting:Be(()=>tn)},nd=Promise.resolve(),tn=(()=>{class e extends So{_changeDetectorRef;callSetDisabledState;control=new hb;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new z;constructor(t,o,n,i,a,s){super(),this._changeDetectorRef=a,this.callSetDisabledState=s,this._parent=t,this._setValidators(o),this._setAsyncValidators(n),this.valueAccessor=db(this,i)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let o=t.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),lb(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){gd(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){nd.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let o=t.isDisabled.currentValue,n=o!==0&&D(o);nd.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ob(t,this._parent):[t]}static \u0275fac=function(o){return new(o||e)(A(ir,9),A(ks,10),A(sd,10),A(kt,10),A(lt,8),A(As,8))};static \u0275dir=$({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[K([gb]),N,De]})}return e})();var ZS=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275dir=$({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})();var mb=(()=>{class e{_validator=Xu;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let o=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(o),this._validator=this._enabled?this.createValidator(o):Xu,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(o){return new(o||e)};static \u0275dir=$({type:e,features:[De]})}return e})();var bb={provide:ks,useExisting:Be(()=>vb),multi:!0};var vb=(()=>{class e extends mb{required;inputName="required";normalizeInput=D;createValidator=t=>W0;enabled(t){return t}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275dir=$({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(o,n){o&2&&O("required",n._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[K([bb]),N]})}return e})();var yb=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({})}return e})();var zi=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:As,useValue:t.callSetDisabledState??Ts}]}}static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[yb]})}return e})();var yd={root:{transitionDuration:"{transition.duration}"},panel:{borderWidth:"0",borderColor:"{content.border.color}"},header:{color:"{text.color}",hoverColor:"{text.color}",activeColor:"{text.color}",padding:"1.25rem",fontWeight:"600",borderRadius:"0",borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",hoverBackground:"{content.hover.background}",activeBackground:"{content.background}",activeHoverBackground:"{content.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",activeColor:"{text.muted.color}",activeHoverColor:"{text.muted.color}"},first:{topBorderRadius:"{content.border.radius}",borderWidth:"0"},last:{bottomBorderRadius:"{content.border.radius}",activeBottomBorderRadius:"0"}},content:{borderWidth:"0",borderColor:"{content.border.color}",background:"{content.background}",color:"{text.color}",padding:"0 1.25rem 1.25rem 1.25rem"},css:({dt:e})=>`
.p-accordionpanel {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transition: margin ${e("accordion.transition.duration")};
}

.p-accordionpanel-active {
    margin: 1rem 0;
}

.p-accordionpanel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-accordionpanel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Cd={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},chip:{borderRadius:"{border.radius.sm}"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{chip:{focusBackground:"{surface.300}",focusColor:"{surface.950}"},dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.600}",focusColor:"{surface.0}"},dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"}}},css:({dt:e})=>`
.p-autocomplete-dropdown:focus-visible {
    background: ${e("autocomplete.dropdown.hover.background")}
    border-color: ${e("autocomplete.dropdown.hover.border.color")};
    color: ${e("autocomplete.dropdown.hover.color")};
}

.p-variant-filled.p-autocomplete-input-multiple {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("autocomplete.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {
    background: ${e("autocomplete.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {
    outline: 0 none;
    background: ${e("autocomplete.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.border.color")}, ${e("autocomplete.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.focus.border.color")}, ${e("autocomplete.focus.border.color")}), linear-gradient(to bottom, ${e("autocomplete.hover.border.color")}, ${e("autocomplete.hover.border.color")});
}

.p-autocomplete.p-invalid .p-autocomplete-input-multiple {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {
    background-image: linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")}), linear-gradient(to bottom, ${e("autocomplete.invalid.border.color")}, ${e("autocomplete.invalid.border.color")});
}

.p-autocomplete-option {
    transition: none;
}

.p-autocomplete:has(.p-variant-filled) .p-autocomplete-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var wd={root:{width:"2rem",height:"2rem",fontSize:"1rem",background:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},icon:{size:"1rem"},group:{borderColor:"{content.background}",offset:"-0.75rem"},lg:{width:"3rem",height:"3rem",fontSize:"1.5rem",icon:{size:"1.5rem"},group:{offset:"-1rem"}},xl:{width:"4rem",height:"4rem",fontSize:"2rem",icon:{size:"2rem"},group:{offset:"-1.5rem"}}};var _d={root:{borderRadius:"{border.radius.md}",padding:"0 0.5rem",fontSize:"0.75rem",fontWeight:"700",minWidth:"1.5rem",height:"1.5rem"},dot:{size:"0.5rem"},sm:{fontSize:"0.625rem",minWidth:"1.25rem",height:"1.25rem"},lg:{fontSize:"0.875rem",minWidth:"1.75rem",height:"1.75rem"},xl:{fontSize:"1rem",minWidth:"2rem",height:"2rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Dd={primitive:{borderRadius:{none:"0",xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px"},emerald:{50:"#E8F6F1",100:"#C5EBE1",200:"#9EDFCF",300:"#76D3BD",400:"#58C9AF",500:"#3BBFA1",600:"#35AF94",700:"#2D9B83",800:"#268873",900:"#1A6657",950:"#0d3329"},green:{50:"#E8F5E9",100:"#C8E6C9",200:"#A5D6A7",300:"#81C784",400:"#66BB6A",500:"#4CAF50",600:"#43A047",700:"#388E3C",800:"#2E7D32",900:"#1B5E20",950:"#0e2f10"},lime:{50:"#F9FBE7",100:"#F0F4C3",200:"#E6EE9C",300:"#DCE775",400:"#D4E157",500:"#CDDC39",600:"#C0CA33",700:"#AFB42B",800:"#9E9D24",900:"#827717",950:"#413c0c"},red:{50:"#FFEBEE",100:"#FFCDD2",200:"#EF9A9A",300:"#E57373",400:"#EF5350",500:"#F44336",600:"#E53935",700:"#D32F2F",800:"#C62828",900:"#B71C1C",950:"#5c0e0e"},orange:{50:"#FFF3E0",100:"#FFE0B2",200:"#FFCC80",300:"#FFB74D",400:"#FFA726",500:"#FF9800",600:"#FB8C00",700:"#F57C00",800:"#EF6C00",900:"#E65100",950:"#732900"},amber:{50:"#FFF8E1",100:"#FFECB3",200:"#FFE082",300:"#FFD54F",400:"#FFCA28",500:"#FFC107",600:"#FFB300",700:"#FFA000",800:"#FF8F00",900:"#FF6F00",950:"#803800"},yellow:{50:"#FFFDE7",100:"#FFF9C4",200:"#FFF59D",300:"#FFF176",400:"#FFEE58",500:"#FFEB3B",600:"#FDD835",700:"#FBC02D",800:"#F9A825",900:"#F57F17",950:"#7b400c"},teal:{50:"#E0F2F1",100:"#B2DFDB",200:"#80CBC4",300:"#4DB6AC",400:"#26A69A",500:"#009688",600:"#00897B",700:"#00796B",800:"#00695C",900:"#004D40",950:"#002720"},cyan:{50:"#E0F7FA",100:"#B2EBF2",200:"#80DEEA",300:"#4DD0E1",400:"#26C6DA",500:"#00BCD4",600:"#00ACC1",700:"#0097A7",800:"#00838F",900:"#006064",950:"#003032"},sky:{50:"#E1F5FE",100:"#B3E5FC",200:"#81D4FA",300:"#4FC3F7",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B",950:"#012c4e"},blue:{50:"#E3F2FD",100:"#BBDEFB",200:"#90CAF9",300:"#64B5F6",400:"#42A5F5",500:"#2196F3",600:"#1E88E5",700:"#1976D2",800:"#1565C0",900:"#0D47A1",950:"#072451"},indigo:{50:"#E8EAF6",100:"#C5CAE9",200:"#9FA8DA",300:"#7986CB",400:"#5C6BC0",500:"#3F51B5",600:"#3949AB",700:"#303F9F",800:"#283593",900:"#1A237E",950:"#0d123f"},violet:{50:"#EDE7F6",100:"#D1C4E9",200:"#B39DDB",300:"#9575CD",400:"#7E57C2",500:"#673AB7",600:"#5E35B1",700:"#512DA8",800:"#4527A0",900:"#311B92",950:"#190e49"},purple:{50:"#F3E5F5",100:"#E1BEE7",200:"#CE93D8",300:"#BA68C8",400:"#AB47BC",500:"#9C27B0",600:"#8E24AA",700:"#7B1FA2",800:"#6A1B9A",900:"#4A148C",950:"#250a46"},fuchsia:{50:"#FDE6F3",100:"#FBC1E3",200:"#F897D1",300:"#F56DBF",400:"#F34DB2",500:"#F12DA5",600:"#E0289D",700:"#CC2392",800:"#B81E88",900:"#951777",950:"#4b0c3c"},pink:{50:"#FCE4EC",100:"#F8BBD0",200:"#F48FB1",300:"#F06292",400:"#EC407A",500:"#E91E63",600:"#D81B60",700:"#C2185B",800:"#AD1457",900:"#880E4F",950:"#440728"},rose:{50:"#FFF0F0",100:"#FFD9D9",200:"#FFC0C0",300:"#FFA7A7",400:"#FF8E8E",500:"#FF7575",600:"#FF5252",700:"#FF3838",800:"#F71C1C",900:"#D50000",950:"#3E0000"},slate:{50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"},gray:{50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"},zinc:{50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"},neutral:{50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"},stone:{50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},semantic:{transitionDuration:"0.2s",focusRing:{width:"0",style:"none",color:"unset",offset:"0"},disabledOpacity:"0.38",iconSize:"1rem",anchorGutter:"0",primary:{50:"{emerald.50}",100:"{emerald.100}",200:"{emerald.200}",300:"{emerald.300}",400:"{emerald.400}",500:"{emerald.500}",600:"{emerald.600}",700:"{emerald.700}",800:"{emerald.800}",900:"{emerald.900}",950:"{emerald.950}"},formField:{paddingX:"0.75rem",paddingY:"0.75rem",sm:{fontSize:"0.875rem",paddingX:"0.625rem",paddingY:"0.625rem"},lg:{fontSize:"1.125rem",paddingX:"0.825rem",paddingY:"0.825rem"},borderRadius:"{border.radius.sm}",focusRing:{width:"2px",style:"solid",color:"{primary.color}",offset:"-2px",shadow:"none"},transitionDuration:"{transition.duration}"},list:{padding:"0.5rem 0",gap:"0",header:{padding:"0.75rem 1rem"},option:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}"},optionGroup:{padding:"0.75rem 1rem",fontWeight:"700"}},content:{borderRadius:"{border.radius.sm}"},mask:{transitionDuration:"0.15s"},navigation:{list:{padding:"0.5rem 0",gap:"0"},item:{padding:"0.75rem 1rem",borderRadius:"{border.radius.none}",gap:"0.5rem"},submenuLabel:{padding:"0.75rem 1rem",fontWeight:"700"},submenuIcon:{size:"0.875rem"}},overlay:{select:{borderRadius:"{border.radius.sm}",shadow:"0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12)"},popover:{borderRadius:"{border.radius.sm}",padding:"1rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},modal:{borderRadius:"{border.radius.sm}",padding:"1.5rem",shadow:"0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12)"},navigation:{shadow:"0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)"}},colorScheme:{light:{focusRing:{shadow:"0 0 1px 4px {surface.200}"},surface:{0:"#ffffff",50:"{slate.50}",100:"{slate.100}",200:"{slate.200}",300:"{slate.300}",400:"{slate.400}",500:"{slate.500}",600:"{slate.600}",700:"{slate.700}",800:"{slate.800}",900:"{slate.900}",950:"{slate.950}"},primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.400}",activeColor:"{primary.300}"},highlight:{background:"color-mix(in srgb, {primary.color}, transparent 88%)",focusBackground:"color-mix(in srgb, {primary.color}, transparent 76%)",color:"{primary.700}",focusColor:"{primary.800}"},mask:{background:"rgba(0,0,0,0.32)",color:"{surface.200}"},formField:{background:"{surface.0}",disabledBackground:"{surface.300}",filledBackground:"{surface.100}",filledHoverBackground:"{surface.200}",filledFocusBackground:"{surface.100}",borderColor:"{surface.400}",hoverBorderColor:"{surface.900}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.800}",color:"{surface.900}",disabledColor:"{surface.600}",placeholderColor:"{surface.600}",invalidPlaceholderColor:"{red.800}",floatLabelColor:"{surface.600}",floatLabelFocusColor:"{primary.600}",floatLabelActiveColor:"{surface.600}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.600}",shadow:"none"},text:{color:"{surface.900}",hoverColor:"{surface.900}",mutedColor:"{surface.600}",hoverMutedColor:"{surface.600}"},content:{background:"{surface.0}",hoverBackground:"{surface.100}",borderColor:"{surface.300}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},popover:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"},modal:{background:"{surface.0}",borderColor:"{surface.0}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.100}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}"}},optionGroup:{background:"transparent",color:"{text.color}"}},navigation:{item:{focusBackground:"{surface.100}",activeBackground:"{surface.200}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}},submenuLabel:{background:"transparent",color:"{text.color}"},submenuIcon:{color:"{surface.600}",focusColor:"{surface.600}",activeColor:"{surface.600}"}}},dark:{focusRing:{shadow:"0 0 1px 4px {surface.700}"},surface:{0:"#ffffff",50:"{zinc.50}",100:"{zinc.100}",200:"{zinc.200}",300:"{zinc.300}",400:"{zinc.400}",500:"{zinc.500}",600:"{zinc.600}",700:"{zinc.700}",800:"{zinc.800}",900:"{zinc.900}",950:"{zinc.950}"},primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"},mask:{background:"rgba(0,0,0,0.6)",color:"{surface.200}"},formField:{background:"{surface.950}",disabledBackground:"{surface.700}",filledBackground:"{surface.800}",filledHoverBackground:"{surface.700}",filledFocusBackground:"{surface.800}",borderColor:"{surface.600}",hoverBorderColor:"{surface.400}",focusBorderColor:"{primary.color}",invalidBorderColor:"{red.300}",color:"{surface.0}",disabledColor:"{surface.400}",placeholderColor:"{surface.400}",invalidPlaceholderColor:"{red.300}",floatLabelColor:"{surface.400}",floatLabelFocusColor:"{primary.color}",floatLabelActiveColor:"{surface.400}",floatLabelInvalidColor:"{form.field.invalid.placeholder.color}",iconColor:"{surface.400}",shadow:"none"},text:{color:"{surface.0}",hoverColor:"{surface.0}",mutedColor:"{surface.400}",hoverMutedColor:"{surface.400}"},content:{background:"{surface.900}",hoverBackground:"{surface.800}",borderColor:"{surface.700}",color:"{text.color}",hoverColor:"{text.hover.color}"},overlay:{select:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},popover:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"},modal:{background:"{surface.900}",borderColor:"{surface.900}",color:"{text.color}"}},list:{option:{focusBackground:"{surface.800}",selectedBackground:"{highlight.background}",selectedFocusBackground:"{highlight.focus.background}",color:"{text.color}",focusColor:"{text.hover.color}",selectedColor:"{highlight.color}",selectedFocusColor:"{highlight.focus.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}"}},optionGroup:{background:"transparent",color:"{text.muted.color}"}},navigation:{item:{focusBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{text.color}",focusColor:"{text.hover.color}",activeColor:"{text.hover.color}",icon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}},submenuLabel:{background:"transparent",color:"{text.muted.color}"},submenuIcon:{color:"{surface.400}",focusColor:"{surface.400}",activeColor:"{surface.400}"}}}}}};var Sd={root:{borderRadius:"{content.border.radius}"}};var kd={root:{padding:"1rem",background:"{content.background}",gap:"0.5rem",transitionDuration:"{transition.duration}"},item:{color:"{text.muted.color}",hoverColor:"{text.color}",borderRadius:"{content.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",hoverColor:"{navigation.item.icon.focus.color}"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},separator:{color:"{navigation.item.icon.color}"}};var xd={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",gap:"0.5rem",paddingX:"1rem",paddingY:"0.625rem",iconOnlyWidth:"3rem",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}",iconOnlyWidth:"2.5rem"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}",iconOnlyWidth:"3.5rem"},label:{fontWeight:"500"},raisedShadow:"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"},badgeSize:"1rem",transitionDuration:"{form.field.transition.duration}"},colorScheme:{light:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",borderColor:"{surface.100}",hoverBorderColor:"{surface.200}",activeBorderColor:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}",focusRing:{color:"{surface.600}",shadow:"none"}},info:{background:"{sky.500}",hoverBackground:"{sky.400}",activeBackground:"{sky.300}",borderColor:"{sky.500}",hoverBorderColor:"{sky.400}",activeBorderColor:"{sky.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{sky.500}",shadow:"none"}},success:{background:"{green.500}",hoverBackground:"{green.400}",activeBackground:"{green.300}",borderColor:"{green.500}",hoverBorderColor:"{green.400}",activeBorderColor:"{green.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{green.500}",shadow:"none"}},warn:{background:"{orange.500}",hoverBackground:"{orange.400}",activeBackground:"{orange.300}",borderColor:"{orange.500}",hoverBorderColor:"{orange.400}",activeBorderColor:"{orange.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{orange.500}",shadow:"none"}},help:{background:"{purple.500}",hoverBackground:"{purple.400}",activeBackground:"{purple.300}",borderColor:"{purple.500}",hoverBorderColor:"{purple.400}",activeBorderColor:"{purple.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{purple.500}",shadow:"none"}},danger:{background:"{red.500}",hoverBackground:"{red.400}",activeBackground:"{red.300}",borderColor:"{red.500}",hoverBorderColor:"{red.400}",activeBorderColor:"{red.300}",color:"#ffffff",hoverColor:"#ffffff",activeColor:"#ffffff",focusRing:{color:"{red.500}",shadow:"none"}},contrast:{background:"{surface.950}",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.950}",hoverBorderColor:"{surface.800}",activeBorderColor:"{surface.700}",color:"{surface.0}",hoverColor:"{surface.0}",activeColor:"{surface.0}",focusRing:{color:"{surface.950}",shadow:"none"}}},outlined:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",borderColor:"{primary.color}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.600}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",borderColor:"{green.500}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",borderColor:"{sky.500}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",borderColor:"{orange.500}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",borderColor:"{purple.500}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",borderColor:"{red.500}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.950}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",borderColor:"{surface.900}",color:"{surface.900}"}},text:{primary:{hoverBackground:"{primary.50}",activeBackground:"{primary.100}",color:"{primary.color}"},secondary:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.600}"},success:{hoverBackground:"{green.50}",activeBackground:"{green.100}",color:"{green.500}"},info:{hoverBackground:"{sky.50}",activeBackground:"{sky.100}",color:"{sky.500}"},warn:{hoverBackground:"{orange.50}",activeBackground:"{orange.100}",color:"{orange.500}"},help:{hoverBackground:"{purple.50}",activeBackground:"{purple.100}",color:"{purple.500}"},danger:{hoverBackground:"{red.50}",activeBackground:"{red.100}",color:"{red.500}"},contrast:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.950}"},plain:{hoverBackground:"{surface.50}",activeBackground:"{surface.100}",color:"{surface.900}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}},dark:{root:{primary:{background:"{primary.color}",hoverBackground:"{primary.hover.color}",activeBackground:"{primary.active.color}",borderColor:"{primary.color}",hoverBorderColor:"{primary.hover.color}",activeBorderColor:"{primary.active.color}",color:"{primary.contrast.color}",hoverColor:"{primary.contrast.color}",activeColor:"{primary.contrast.color}",focusRing:{color:"{primary.color}",shadow:"none"}},secondary:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",borderColor:"{surface.800}",hoverBorderColor:"{surface.700}",activeBorderColor:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}",focusRing:{color:"{surface.300}",shadow:"none"}},info:{background:"{sky.400}",hoverBackground:"{sky.300}",activeBackground:"{sky.200}",borderColor:"{sky.400}",hoverBorderColor:"{sky.300}",activeBorderColor:"{sky.200}",color:"{sky.950}",hoverColor:"{sky.950}",activeColor:"{sky.950}",focusRing:{color:"{sky.400}",shadow:"none"}},success:{background:"{green.400}",hoverBackground:"{green.300}",activeBackground:"{green.200}",borderColor:"{green.400}",hoverBorderColor:"{green.300}",activeBorderColor:"{green.200}",color:"{green.950}",hoverColor:"{green.950}",activeColor:"{green.950}",focusRing:{color:"{green.400}",shadow:"none"}},warn:{background:"{orange.400}",hoverBackground:"{orange.300}",activeBackground:"{orange.200}",borderColor:"{orange.400}",hoverBorderColor:"{orange.300}",activeBorderColor:"{orange.200}",color:"{orange.950}",hoverColor:"{orange.950}",activeColor:"{orange.950}",focusRing:{color:"{orange.400}",shadow:"none"}},help:{background:"{purple.400}",hoverBackground:"{purple.300}",activeBackground:"{purple.200}",borderColor:"{purple.400}",hoverBorderColor:"{purple.300}",activeBorderColor:"{purple.200}",color:"{purple.950}",hoverColor:"{purple.950}",activeColor:"{purple.950}",focusRing:{color:"{purple.400}",shadow:"none"}},danger:{background:"{red.400}",hoverBackground:"{red.300}",activeBackground:"{red.200}",borderColor:"{red.400}",hoverBorderColor:"{red.300}",activeBorderColor:"{red.200}",color:"{red.950}",hoverColor:"{red.950}",activeColor:"{red.950}",focusRing:{color:"{red.400}",shadow:"none"}},contrast:{background:"{surface.0}",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{surface.0}",hoverBorderColor:"{surface.100}",activeBorderColor:"{surface.200}",color:"{surface.950}",hoverColor:"{surface.950}",activeColor:"{surface.950}",focusRing:{color:"{surface.0}",shadow:"none"}}},outlined:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",borderColor:"{primary.700}",color:"{primary.color}"},secondary:{hoverBackground:"rgba(255,255,255,0.04)",activeBackground:"rgba(255,255,255,0.16)",borderColor:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",borderColor:"{green.700}",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",borderColor:"{sky.700}",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",borderColor:"{orange.700}",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",borderColor:"{purple.700}",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",borderColor:"{red.700}",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.500}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{surface.600}",color:"{surface.0}"}},text:{primary:{hoverBackground:"color-mix(in srgb, {primary.color}, transparent 96%)",activeBackground:"color-mix(in srgb, {primary.color}, transparent 84%)",color:"{primary.color}"},secondary:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.400}"},success:{hoverBackground:"color-mix(in srgb, {green.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {green.400}, transparent 84%)",color:"{green.400}"},info:{hoverBackground:"color-mix(in srgb, {sky.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {sky.400}, transparent 84%)",color:"{sky.400}"},warn:{hoverBackground:"color-mix(in srgb, {orange.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {orange.400}, transparent 84%)",color:"{orange.400}"},help:{hoverBackground:"color-mix(in srgb, {purple.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {purple.400}, transparent 84%)",color:"{purple.400}"},danger:{hoverBackground:"color-mix(in srgb, {red.400}, transparent 96%)",activeBackground:"color-mix(in srgb, {red.400}, transparent 84%)",color:"{red.400}"},contrast:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"},plain:{hoverBackground:"{surface.800}",activeBackground:"{surface.700}",color:"{surface.0}"}},link:{color:"{primary.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"}}},css:({dt:e})=>`
.p-button:focus-visible {
    background: ${e("button.primary.active.background")};
    border-color: ${e("button.primary.active.background")};
}

.p-button-secondary:focus-visible {
    background: ${e("button.secondary.active.background")};
    border-color: ${e("button.secondary.active.background")};
}

.p-button-success:focus-visible {
    background: ${e("button.success.active.background")};
    border-color: ${e("button.success.active.background")};
}

.p-button-info:focus-visible {
    background: ${e("button.info.active.background")};
    border-color: ${e("button.info.active.background")};
}

.p-button-warn:focus-visible {
    background: ${e("button.warn.active.background")};
    border-color: ${e("button.warn.active.background")};
}

.p-button-help:focus-visible {
    background: ${e("button.help.active.background")};
    border-color: ${e("button.help.active.background")};
}

.p-button-danger:focus-visible {
    background: ${e("button.danger.active.background")};
    border-color: ${e("button.danger.active.background")};
}

.p-button-contrast:focus-visible {
    background: ${e("button.contrast.active.background")};
    border-color: ${e("button.contrast.active.background")};
}

.p-button-link:focus-visible {
    background: color-mix(in srgb, ${e("primary.color")}, transparent 84%);
    border-color: transparent;
}

.p-button-text:focus-visible {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
}

.p-button-secondary.p-button-text:focus-visible {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
}

.p-button-success.p-button-text:focus-visible {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
}

.p-button-info.p-button-text:focus-visible {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
}

.p-button-warn.p-button-text:focus-visible {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
}

.p-button-help.p-button-text:focus-visible {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
}

.p-button-danger.p-button-text:focus-visible {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
}

.p-button-contrast.p-button-text:focus-visible {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
}

.p-button-plain.p-button-text:focus-visible {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
}

.p-button-outlined:focus-visible {
    background: ${e("button.outlined.primary.active.background")};
}

.p-button-secondary.p-button-outlined:focus-visible {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
}

.p-button-success.p-button-outlined:focus-visible {
    background: ${e("button.outlined.success.active.background")};
}

.p-button-info.p-button-outlined:focus-visible {
    background: ${e("button.outlined.info.active.background")};
}

.p-button-warn.p-button-outlined:focus-visible {
    background: ${e("button.outlined.warn.active.background")};
}

.p-button-help.p-button-outlined:focus-visible {
    background: ${e("button.outlined.help.active.background")};
}

.p-button-danger.p-button-outlined:focus-visible {
    background: ${e("button.outlined.danger.active.background")};
}

.p-button-contrast.p-button-outlined:focus-visible {
    background: ${e("button.outlined.contrast.active.background")};
}

.p-button-plain.p-button-outlined:focus-visible {
    background: ${e("button.outlined.plain.active.background")};
}
`};var Ed={root:{background:"{content.background}",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"},body:{padding:"1.5rem",gap:"0.75rem"},caption:{gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"500"},subtitle:{color:"{text.muted.color}"}};var Ad={root:{transitionDuration:"{transition.duration}"},content:{gap:"0.25rem"},indicatorList:{padding:"1rem",gap:"1rem"},indicator:{width:"1.25rem",height:"1.25rem",borderRadius:"50%",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},colorScheme:{light:{indicator:{background:"{surface.200}",hoverBackground:"{surface.300}",activeBackground:"{primary.color}"}},dark:{indicator:{background:"{surface.700}",hoverBackground:"{surface.600}",activeBackground:"{primary.color}"}}},css:({dt:e})=>`
.p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%)
}

.p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 92%);
}

.p-carousel-indicator-active .p-carousel-indicator-button:focus-visible {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("carousel.indicator.active.background")}, transparent 84%);
}
`};var Td={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",mobileIndent:"1rem"},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",icon:{color:"{list.option.icon.color}",focusColor:"{list.option.icon.focus.color}",size:"0.875rem"}},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-cascadeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("cascadeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("cascadeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.border.color")}, ${e("cascadeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-cascadeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.focus.border.color")}, ${e("cascadeselect.focus.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.hover.border.color")}, ${e("cascadeselect.hover.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("cascadeselect.invalid.border.color")}, ${e("cascadeselect.invalid.border.color")});
}

.p-cascadeselect-option {
    transition: none;
}
`};var Rd={root:{borderRadius:"{border.radius.xs}",width:"18px",height:"18px",background:"{form.field.background}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"14px",height:"14px"},lg:{width:"22px",height:"22px"}},icon:{size:"0.875rem",color:"{form.field.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"0.75rem"},lg:{size:"1rem"}},css:({dt:e})=>`
.p-checkbox {
    border-radius: 50%;
    transition: box-shadow ${e("checkbox.transition.duration")};
}

.p-checkbox-box {
    border-width: 2px;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 92%);
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("checkbox.checked.background")}, transparent 84%);
}

.p-checkbox-checked .p-checkbox-box:before  {
    content: "";
    position: absolute;
    top: var(--p-md-check-icon-t);
    left: 2px;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transform: rotate(45deg);
    transform-origin: 0% 100%;
    animation: p-md-check 125ms 50ms linear forwards;
}

.p-checkbox-checked .p-checkbox-icon {
    display: none;
}

.p-checkbox {
    --p-md-check-icon-t: 10px;
    --p-md-check-icon-w: 6px;
    --p-md-check-icon-h: 12px;
}

.p-checkbox-sm {
    --p-md-check-icon-t: 8px;
    --p-md-check-icon-w: 4px;
    --p-md-check-icon-h: 10px;
}

.p-checkbox-lg {
    --p-md-check-icon-t: 12px;
    --p-md-check-icon-w: 8px;
    --p-md-check-icon-h: 16px;
}

@keyframes p-md-check {
    0%{
      width: 0;
      height: 0;
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,0,0) rotate(45deg);
    }
    33%{
      width: var(--p-md-check-icon-w);
      height: 0;
      transform: translate3d(0,0,0) rotate(45deg);
    }
    100%{
      width: var(--p-md-check-icon-w);
      height: var(--p-md-check-icon-h);
      border-color: ${e("checkbox.icon.checked.color")};
      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);
    }
}
`};var Id={root:{borderRadius:"2rem",paddingX:"0.75rem",paddingY:"0.75rem",gap:"0.5rem",transitionDuration:"{transition.duration}"},image:{width:"2.25rem",height:"2.25rem"},icon:{size:"1rem"},removeIcon:{size:"1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}"}},colorScheme:{light:{root:{background:"{surface.200}",color:"{surface.900}"},icon:{color:"{surface.600}"},removeIcon:{color:"{surface.600}",focusRing:{shadow:"0 0 1px 4px {surface.300}"}}},dark:{root:{background:"{surface.700}",color:"{surface.0}"},icon:{color:"{surface.0}"},removeIcon:{color:"{surface.0}",focusRing:{shadow:"0 0 1px 4px {surface.600}"}}}}};var Md={root:{transitionDuration:"{transition.duration}"},preview:{width:"2rem",height:"2rem",borderRadius:"{form.field.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},panel:{shadow:"{overlay.popover.shadow}",borderRadius:"{overlay.popover.borderRadius}"},colorScheme:{light:{panel:{background:"{surface.800}",borderColor:"{surface.900}"},handle:{color:"{surface.0}"}},dark:{panel:{background:"{surface.900}",borderColor:"{surface.700}"},handle:{color:"{surface.0}"}}}};var Fd={icon:{size:"2rem",color:"{overlay.modal.color}"},content:{gap:"1rem"}};var Od={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"1rem"},icon:{size:"1.5rem",color:"{overlay.popover.color}"},footer:{gap:"0.5rem",padding:"0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"}};var Bd={root:{background:"{content.background}",borderColor:"transparent",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"}};var Ld={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{datatable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{datatable.border.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},footerCell:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{datatable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",sm:{padding:"0.375rem 0.5rem"},lg:{padding:"1rem 1.25rem"}},dropPoint:{color:"{primary.color}"},columnResizer:{width:"0.5rem"},resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},rowToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},filter:{inlineGap:"0.5rem",overlaySelect:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},overlayPopover:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",shadow:"{overlay.popover.shadow}",padding:"{overlay.popover.padding}",gap:"0.5rem"},rule:{borderColor:"{content.border.color}"},constraintList:{padding:"{list.padding}",gap:"{list.gap}"},constraint:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",separator:{borderColor:"{content.border.color}"},padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"}},paginatorTop:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{datatable.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},row:{stripedBackground:"{surface.50}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},row:{stripedBackground:"{surface.950}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-datatable-header-cell,
.p-datatable-tbody > tr {
    transition: none
}
`};var $d={root:{borderColor:"transparent",borderWidth:"0",borderRadius:"0",padding:"0"},header:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem",borderRadius:"0"},content:{background:"{content.background}",color:"{content.color}",borderColor:"transparent",borderWidth:"0",padding:"0",borderRadius:"0"},footer:{background:"{content.background}",color:"{content.color}",borderColor:"{content.border.color}",borderWidth:"1px 0 0 0",padding:"0.75rem 1rem",borderRadius:"0"},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"1px 0 0 0"}};var Nd={root:{transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.popover.shadow}",padding:"0.5rem"},header:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",padding:"0 0 0.5rem 0"},title:{gap:"0.5rem",fontWeight:"700"},dropdown:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"},borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",borderRadius:"{form.field.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"n\u0131ne"}},inputIcon:{color:"{form.field.icon.color}"},selectMonth:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},selectYear:{hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",padding:"0.5rem 0.75rem",borderRadius:"{content.border.radius}"},group:{borderColor:"{content.border.color}",gap:"{overlay.popover.padding}"},dayView:{margin:"0.5rem 0 0 0"},weekDay:{padding:"0.5rem",fontWeight:"700",color:"{content.color}"},date:{hoverBackground:"{content.hover.background}",selectedBackground:"{primary.color}",rangeSelectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{primary.contrast.color}",rangeSelectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",padding:"0.125rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},monthView:{margin:"0.5rem 0 0 0"},month:{padding:"0.625rem",borderRadius:"{content.border.radius}"},yearView:{margin:"0.5rem 0 0 0"},year:{padding:"0.625rem",borderRadius:"{content.border.radius}"},buttonbar:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}"},timePicker:{padding:"0.5rem 0 0 0",borderColor:"{content.border.color}",gap:"0.5rem",buttonGap:"0.25rem"},colorScheme:{light:{dropdown:{background:"{surface.100}",hoverBackground:"{surface.200}",activeBackground:"{surface.300}",color:"{surface.600}",hoverColor:"{surface.700}",activeColor:"{surface.800}"},today:{background:"{surface.200}",color:"{surface.900}"}},dark:{dropdown:{background:"{surface.800}",hoverBackground:"{surface.700}",activeBackground:"{surface.600}",color:"{surface.300}",hoverColor:"{surface.200}",activeColor:"{surface.100}"},today:{background:"{surface.700}",color:"{surface.0}"}}},css:({dt:e})=>`
.p-datepicker-header {
    justify-content: start
}

.p-datepicker-title {
    order: 1;
}

.p-datepicker-prev-button {
    order: 2;
    margin-inline-start: auto;
}

.p-datepicker-next-button {
    order: 2;
    margin-inline-start: 0.5rem;
}

.p-datepicker-select-month:focus-visible {
    background: ${e("datepicker.select.month.hover.background")};
    color: ${e("datepicker.select.month.hover.color")};
    outline: 0 none;
}

.p-datepicker-select-year:focus-visible {
    background: ${e("datepicker.select.year.hover.background")};
    color: ${e("datepicker.select.year.hover.color")};
    outline: 0 none;
}

.p-datepicker-dropdown:focus-visible {
    outline: 0 none;
    background: ${e("datepicker.dropdown.hover.background")};
    border-color: ${e("datepicker.dropdown.hover.border.color")};
    color: ${e("datepicker.dropdown.hover.color")};
}

.p-datepicker:has(.p-variant-filled) .p-datepicker-dropdown {
    border-top-color: transparent;
    border-right-color: transparent;
}
`};var Pd={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",borderRadius:"{overlay.modal.border.radius}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}",gap:"0.5rem"},title:{fontSize:"1.25rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",gap:"0.5rem"}};var Vd={root:{borderColor:"{content.border.color}"},content:{background:"{content.background}",color:"{text.color}"},horizontal:{margin:"1rem 0",padding:"0 1rem",content:{padding:"0 0.5rem"}},vertical:{margin:"0 1rem",padding:"0.5rem 0",content:{padding:"0.5rem 0"}}};var Ud={root:{background:"rgba(255, 255, 255, 0.1)",borderColor:"rgba(255, 255, 255, 0.2)",padding:"0.5rem",borderRadius:"{border.radius.xl}"},item:{borderRadius:"{content.border.radius}",padding:"0.5rem",size:"3rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var zd={root:{background:"{overlay.modal.background}",borderColor:"{overlay.modal.border.color}",color:"{overlay.modal.color}",shadow:"{overlay.modal.shadow}"},header:{padding:"{overlay.modal.padding}"},title:{fontSize:"1.5rem",fontWeight:"600"},content:{padding:"0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"},footer:{padding:"{overlay.modal.padding}"}};var jd={toolbar:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}"},toolbarItem:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}",padding:"{list.padding}"},overlayOption:{focusBackground:"{list.option.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},content:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},css:({dt:e})=>`
.p-editor .p-editor-toolbar {
    padding: 0.75rem
}
`};var Hd={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",padding:"0 1.25rem 1.25rem 1.25rem",transitionDuration:"{transition.duration}"},legend:{background:"{content.background}",hoverBackground:"{content.hover.background}",color:"{content.color}",hoverColor:"{content.hover.color}",borderRadius:"{content.border.radius}",borderWidth:"1px",borderColor:"transparent",padding:"0.75rem 1rem",gap:"0.5rem",fontWeight:"600",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},toggleIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}"},content:{padding:"0"},css:({dt:e})=>`
.p-fieldset-toggle-button:focus-visible {
    background: ${e("navigation.item.active.background")}

}
`};var Wd={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"unset",borderWidth:"0",borderRadius:"0",gap:"0.5rem"},content:{highlightBorderColor:"{primary.color}",padding:"0 1.25rem 1.25rem 1.25rem",gap:"1rem"},file:{padding:"1rem",gap:"1rem",borderColor:"{content.border.color}",info:{gap:"0.5rem"}},fileList:{gap:"0.5rem"},progressbar:{height:"0.25rem"},basic:{gap:"0.5rem"}};var Gd={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",activeColor:"{form.field.float.label.active.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",positionY:"{form.field.padding.y}",fontWeight:"500",active:{fontSize:"0.75rem",fontWeight:"400"}},over:{active:{top:"-1.25rem"}},in:{input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"},active:{top:"0.5rem"}},on:{borderRadius:"{border.radius.xs}",active:{background:"{form.field.background}",padding:"0 0.125rem"}}};var qd={root:{borderWidth:"1px",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",transitionDuration:"{transition.duration}"},navButton:{background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.100}",hoverColor:"{surface.0}",size:"3rem",gutter:"0.5rem",prev:{borderRadius:"50%"},next:{borderRadius:"50%"},focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},navIcon:{size:"1.5rem"},thumbnailsContent:{background:"{content.background}",padding:"1rem 0.25rem"},thumbnailNavButton:{size:"2rem",borderRadius:"50%",gutter:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},thumbnailNavButtonIcon:{size:"1rem"},caption:{background:"rgba(0, 0, 0, 0.5)",color:"{surface.100}",padding:"1rem"},indicatorList:{gap:"0.5rem",padding:"1rem"},indicatorButton:{width:"1rem",height:"1rem",activeBackground:"{primary.color}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},insetIndicatorList:{background:"rgba(0, 0, 0, 0.5)"},insetIndicatorButton:{background:"rgba(255, 255, 255, 0.4)",hoverBackground:"rgba(255, 255, 255, 0.6)",activeBackground:"rgba(255, 255, 255, 0.9)"},closeButton:{size:"3rem",gutter:"0.5rem",background:"rgba(255, 255, 255, 0.1)",hoverBackground:"rgba(255, 255, 255, 0.2)",color:"{surface.50}",hoverColor:"{surface.0}",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},closeButtonIcon:{size:"1.5rem"},colorScheme:{light:{thumbnailNavButton:{hoverBackground:"{surface.100}",color:"{surface.600}",hoverColor:"{surface.700}"},indicatorButton:{background:"{surface.200}",hoverBackground:"{surface.300}"}},dark:{thumbnailNavButton:{hoverBackground:"{surface.700}",color:"{surface.400}",hoverColor:"{surface.0}"},indicatorButton:{background:"{surface.700}",hoverBackground:"{surface.600}"}}}};var Yd={icon:{color:"{form.field.icon.color}"}};var Kd={root:{color:"{form.field.float.label.color}",focusColor:"{form.field.float.label.focus.color}",invalidColor:"{form.field.float.label.invalid.color}",transitionDuration:"0.2s",positionX:"{form.field.padding.x}",top:"0.5rem",fontSize:"0.75rem",fontWeight:"400"},input:{paddingTop:"1.5rem",paddingBottom:"0.5rem"}};var Zd={root:{transitionDuration:"{transition.duration}"},preview:{icon:{size:"1.5rem"},mask:{background:"{mask.background}",color:"{mask.color}"}},toolbar:{position:{left:"auto",right:"1rem",top:"1rem",bottom:"auto"},blur:"8px",background:"rgba(255,255,255,0.1)",borderColor:"rgba(255,255,255,0.2)",borderWidth:"1px",borderRadius:"30px",padding:".5rem",gap:"0.5rem"},action:{hoverBackground:"rgba(255,255,255,0.1)",color:"{surface.50}",hoverColor:"{surface.0}",size:"3rem",iconSize:"1.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Xd={handle:{size:"20px",hoverSize:"40px",background:"rgba(255,255,255,0.4)",hoverBackground:"rgba(255,255,255,0.6)",borderColor:"unset",hoverBorderColor:"unset",borderWidth:"0",borderRadius:"50%",transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"rgba(255,255,255,0.3)",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Qd={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",gap:"0.5rem"},text:{fontWeight:"500"},icon:{size:"1rem"},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"}}}};var Jd={root:{padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},transitionDuration:"{transition.duration}"},display:{hoverBackground:"{content.hover.background}",hoverColor:"{content.hover.color}"}};var ep={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}"},chip:{borderRadius:"{border.radius.sm}"},colorScheme:{light:{chip:{focusBackground:"{surface.200}",color:"{surface.800}"}},dark:{chip:{focusBackground:"{surface.700}",color:"{surface.0}"}}}};var tp={addon:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.icon.color}",borderRadius:"{form.field.border.radius}",padding:"0.75rem",minWidth:"3rem"},css:({dt:e})=>`
.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
    `};var op={root:{transitionDuration:"{transition.duration}"},button:{width:"3rem",borderRadius:"{form.field.border.radius}",verticalPadding:"{form.field.padding.y}"},colorScheme:{light:{button:{background:"transparent",hoverBackground:"{surface.100}",activeBackground:"{surface.200}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.500}",activeColor:"{surface.600}"}},dark:{button:{background:"transparent",hoverBackground:"{surface.800}",activeBackground:"{surface.700}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.border.color}",activeBorderColor:"{form.field.border.color}",color:"{surface.400}",hoverColor:"{surface.300}",activeColor:"{surface.200}"}}},css:({dt:e})=>`
.p-inputnumber-stacked .p-inputnumber-button-group {
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
}

.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {
    border-block-start-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
} 
    
.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {
    border-block-color: ${e("inputtext.filled.background")};
    border-inline-color: ${e("inputtext.filled.background")};
    background: ${e("inputtext.filled.background")} no-repeat;
} 

.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {
    border-block-end: 1px solid ${e("inputtext.border.color")}
}
`};var rp={root:{gap:"0.5rem"},input:{width:"3rem",sm:{width:"2.5rem"},lg:{width:"3.5rem"}}};var np={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-inputtext.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("inputtext.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("inputtext.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.border.color")}, ${e("inputtext.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-inputtext.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.focus.border.color")}, ${e("inputtext.focus.border.color")}), linear-gradient(to bottom, ${e("inputtext.hover.border.color")}, ${e("inputtext.hover.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}

.p-inputtext.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")}), linear-gradient(to bottom, ${e("inputtext.invalid.border.color")}, ${e("inputtext.invalid.border.color")});
}
`};var ip={root:{transitionDuration:"{transition.duration}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},value:{background:"{primary.color}"},range:{background:"{content.border.color}"},text:{color:"{text.muted.color}"}};var ap={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",borderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",shadow:"{form.field.shadow}",borderRadius:"{form.field.border.radius}",transitionDuration:"{form.field.transition.duration}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},colorScheme:{light:{option:{stripedBackground:"{surface.50}"}},dark:{option:{stripedBackground:"{surface.900}"}}},css:({dt:e})=>`
.p-listbox-option {
    transition: none
}
`};var sp={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",verticalOrientation:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},horizontalOrientation:{padding:"0.5rem 0.75rem",gap:"0.5rem"},transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},overlay:{padding:"0",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",color:"{content.color}",shadow:"{overlay.navigation.shadow}",gap:"0.5rem"},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background.}",color:"{navigation.submenu.label.color}"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-megamenu-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var lp={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenuLabel:{padding:"{navigation.submenu.label.padding}",fontWeight:"{navigation.submenu.label.font.weight}",background:"{navigation.submenu.label.background}",color:"{navigation.submenu.label.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-menu-overlay {
    border-color: transparent
}
`};var cp={root:{background:"{content.background}",borderColor:"{content.border.color}",borderRadius:"{content.border.radius}",color:"{content.color}",gap:"0.5rem",padding:"0.5rem 0.75rem",transitionDuration:"{transition.duration}"},baseItem:{borderRadius:"{content.border.radius}",padding:"{navigation.item.padding}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}",background:"{content.background}",borderColor:"transparent",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",mobileIndent:"1rem",icon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"}},separator:{borderColor:"{content.border.color}"},mobileButton:{borderRadius:"50%",size:"2.5rem",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",hoverBackground:"{content.hover.background}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-menubar-button:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var up={root:{borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},content:{padding:"1rem 1.25rem",gap:"0.5rem",sm:{padding:"0.625rem 0.625rem"},lg:{padding:"0.825rem 0.825rem"}},text:{fontSize:"1rem",fontWeight:"500",sm:{fontSize:"0.875rem"},lg:{fontSize:"1.125rem"}},icon:{size:"1.25rem",sm:{size:"1rem"},lg:{size:"1.5rem"}},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem",sm:{size:"0.875rem"},lg:{size:"1.125rem"}},outlined:{root:{borderWidth:"1px"}},simple:{content:{padding:"0"}},colorScheme:{light:{info:{background:"color-mix(in srgb, {blue.50}, transparent 5%)",borderColor:"{blue.200}",color:"{blue.600}",shadow:"none",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}},outlined:{color:"{blue.600}",borderColor:"{blue.600}"},simple:{color:"{blue.600}"}},success:{background:"color-mix(in srgb, {green.50}, transparent 5%)",borderColor:"{green.200}",color:"{green.600}",shadow:"none",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}},outlined:{color:"{green.600}",borderColor:"{green.600}"},simple:{color:"{green.600}"}},warn:{background:"color-mix(in srgb,{yellow.50}, transparent 5%)",borderColor:"{yellow.200}",color:"{yellow.900}",shadow:"none",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}},outlined:{color:"{yellow.900}",borderColor:"{yellow.900}"},simple:{color:"{yellow.900}"}},error:{background:"color-mix(in srgb, {red.50}, transparent 5%)",borderColor:"{red.200}",color:"{red.600}",shadow:"none",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}},outlined:{color:"{red.600}",borderColor:"{red.600}"},simple:{color:"{red.600}"}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",shadow:"none",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}},outlined:{color:"{surface.600}",borderColor:"{surface.600}"},simple:{color:"{surface.600}"}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",shadow:"none",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}},outlined:{color:"{surface.950}",borderColor:"{surface.950}"},simple:{color:"{surface.950}"}}},dark:{info:{background:"color-mix(in srgb, {blue.500}, transparent 84%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{blue.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}},outlined:{color:"{blue.500}",borderColor:"{blue.500}"},simple:{color:"{blue.500}"}},success:{background:"color-mix(in srgb, {green.500}, transparent 84%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{green.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}},outlined:{color:"{green.500}",borderColor:"{green.500}"},simple:{color:"{green.500}"}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 84%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{yellow.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}},outlined:{color:"{yellow.500}",borderColor:"{yellow.500}"},simple:{color:"{yellow.500}"}},error:{background:"color-mix(in srgb, {red.500}, transparent 84%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{red.500}",shadow:"none",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}},outlined:{color:"{red.500}",borderColor:"{red.500}"},simple:{color:"{red.500}"}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",shadow:"none",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}},outlined:{color:"{surface.400}",borderColor:"{surface.400}"},simple:{color:"{surface.400}"}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",shadow:"none",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}},outlined:{color:"{surface.0}",borderColor:"{surface.0}"},simple:{color:"{surface.0}"}}}}};var dp={root:{borderRadius:"{content.border.radius}",gap:"1rem"},meters:{background:"{content.border.color}",size:"0.5rem"},label:{gap:"0.5rem"},labelMarker:{size:"0.5rem"},labelIcon:{size:"1rem"},labelList:{verticalGap:"0.5rem",horizontalGap:"1rem"}};var pp={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}",gap:"0.75rem"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-multiselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("multiselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-multiselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("multiselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("multiselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.border.color")}, ${e("multiselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-multiselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("multiselect.focus.border.color")}, ${e("multiselect.focus.border.color")}), linear-gradient(to bottom, ${e("multiselect.hover.border.color")}, ${e("multiselect.hover.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")}), linear-gradient(to bottom, ${e("multiselect.invalid.border.color")}, ${e("multiselect.invalid.border.color")});
}

.p-multiselect-option {
    transition: none;
}
`};var fp={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var hp={root:{gutter:"0.75rem",transitionDuration:"{transition.duration}"},node:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{content.border.color}",color:"{content.color}",selectedColor:"{highlight.color}",hoverColor:"{content.hover.color}",padding:"1rem 1.25rem",toggleablePadding:"1rem 1.25rem 1.5rem 1.25rem",borderRadius:"{content.border.radius}"},nodeToggleButton:{background:"{content.background}",hoverBackground:"{content.hover.background}",borderColor:"{content.border.color}",color:"{text.muted.color}",hoverColor:"{text.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},connector:{color:"{content.border.color}",borderRadius:"{content.border.radius}",height:"24px"}};var gp={root:{outline:{width:"2px",color:"{content.background}"}}};var mp={root:{padding:"0.5rem 1rem",gap:"0.25rem",borderRadius:"{content.border.radius}",background:"{content.background}",color:"{content.color}",transitionDuration:"{transition.duration}"},navButton:{background:"transparent",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}",width:"2.5rem",height:"2.5rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},currentPageReport:{color:"{text.muted.color}"},jumpToPageInput:{maxWidth:"2.5rem"}};var bp={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}"},header:{background:"transparent",color:"{text.color}",padding:"1.25rem",borderColor:"{content.border.color}",borderWidth:"0",borderRadius:"0"},toggleableHeader:{padding:"0.5rem 1.25rem"},title:{fontWeight:"600"},content:{padding:"0 1.25rem 1.25rem 1.25rem"},footer:{padding:"0 1.25rem 1.25rem 1.25rem"}};var vp={root:{gap:"0",transitionDuration:"{transition.duration}"},panel:{background:"{content.background}",borderColor:"{content.border.color}",borderWidth:"0",color:"{content.color}",padding:"0",borderRadius:"0",first:{borderWidth:"0",topBorderRadius:"{content.border.radius}"},last:{borderWidth:"0",bottomBorderRadius:"{content.border.radius}"}},item:{focusBackground:"{navigation.item.focus.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",gap:"0.5rem",padding:"{navigation.item.padding}",borderRadius:"{content.border.radius}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}"}},submenu:{indent:"1rem"},submenuIcon:{color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}"},css:({dt:e})=>`
.p-panelmenu-panel {
    box-shadow: 0 0 0 1px ${e("panelmenu.panel.border.color")}
    transition: margin ${e("panelmenu.transition.duration")};
}

.p-panelmenu-panel:has(.p-panelmenu-header-active) {
    margin: 1rem 0;
}

.p-panelmenu-panel:first-child {
    border-start-start-radius: ${e("content.border.radius")};
    border-start-end-radius: ${e("content.border.radius")};
    margin-top: 0;
}

.p-panelmenu-panel:last-child {
    border-end-start-radius: ${e("content.border.radius")};
    border-end-end-radius: ${e("content.border.radius")};
    margin-bottom: 0;
}

.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var yp={meter:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:".75rem"},icon:{color:"{form.field.icon.color}"},overlay:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",borderRadius:"{overlay.popover.border.radius}",color:"{overlay.popover.color}",padding:"{overlay.popover.padding}",shadow:"{overlay.popover.shadow}"},content:{gap:"0.5rem"},colorScheme:{light:{strength:{weakBackground:"{red.500}",mediumBackground:"{amber.500}",strongBackground:"{green.500}"}},dark:{strength:{weakBackground:"{red.400}",mediumBackground:"{amber.400}",strongBackground:"{green.400}"}}}};var Cp={root:{gap:"1.125rem"},controls:{gap:"0.5rem"}};var wp={root:{background:"{overlay.popover.background}",borderColor:"{overlay.popover.border.color}",color:"{overlay.popover.color}",borderRadius:"{overlay.popover.border.radius}",shadow:"{overlay.popover.shadow}",gutter:"10px",arrowOffset:"1.25rem"},content:{padding:"{overlay.popover.padding}"}};var _p={root:{background:"{content.border.color}",borderRadius:"{content.border.radius}",height:"1rem"},value:{background:"{primary.color}"},label:{color:"{primary.contrast.color}",fontSize:"0.75rem",fontWeight:"600"}};var Dp={colorScheme:{light:{root:{colorOne:"{red.500}",colorTwo:"{blue.500}",colorThree:"{green.500}",colorFour:"{yellow.500}"}},dark:{root:{colorOne:"{red.400}",colorTwo:"{blue.400}",colorThree:"{green.400}",colorFour:"{yellow.400}"}}}};var Sp={root:{width:"20px",height:"20px",background:"{form.field.background}",checkedBackground:"{primary.contrast.color}",checkedHoverBackground:"{primary.contrast.color}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",checkedBorderColor:"{primary.color}",checkedHoverBorderColor:"{primary.color}",checkedFocusBorderColor:"{primary.color}",checkedDisabledBorderColor:"{form.field.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",shadow:"{form.field.shadow}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{width:"16px",height:"16px"},lg:{width:"24px",height:"24px"}},icon:{size:"10px",checkedColor:"{primary.color}",checkedHoverColor:"{primary.color}",disabledColor:"{form.field.disabled.color}",sm:{size:"8px"},lg:{size:"12px"}},css:({dt:e})=>`
.p-radiobutton {
    border-radius: 50%;
    transition: box-shadow ${e("radiobutton.transition.duration")};
}

.p-radiobutton-box {
    border-width: 2px;
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 92%);
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("radiobutton.checked.border.color")}, transparent 84%);
}
`};var kp={root:{gap:"0.5rem",transitionDuration:"{transition.duration}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},icon:{size:"1.125rem",color:"{text.muted.color}",hoverColor:"{primary.color}",activeColor:"{primary.color}"},css:({dt:e})=>`
.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {
    background: color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%)
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.color")}, transparent 96%);
}

.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 92%);
}

.p-rating-option.p-focus-visible {
    background: color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
    box-shadow: 0 0 1px 8px color-mix(in srgb, ${e("rating.icon.active.color")}, transparent 84%);
}
`};var xp={colorScheme:{light:{root:{background:"rgba(0,0,0,0.1)"}},dark:{root:{background:"rgba(255,255,255,0.3)"}}}};var Ep={root:{transitionDuration:"{transition.duration}"},bar:{size:"9px",borderRadius:"{border.radius.sm}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},colorScheme:{light:{bar:{background:"{surface.200}"}},dark:{bar:{background:"{surface.700}"}}}};var Ap={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},list:{padding:"{list.padding}",gap:"{list.gap}",header:{padding:"{list.header.padding}"}},option:{focusBackground:"{list.option.focus.background}",selectedBackground:"{list.option.selected.background}",selectedFocusBackground:"{list.option.selected.focus.background}",color:"{list.option.color}",focusColor:"{list.option.focus.color}",selectedColor:"{list.option.selected.color}",selectedFocusColor:"{list.option.selected.focus.color}",padding:"{list.option.padding}",borderRadius:"{list.option.border.radius}"},optionGroup:{background:"{list.option.group.background}",color:"{list.option.group.color}",fontWeight:"{list.option.group.font.weight}",padding:"{list.option.group.padding}"},clearIcon:{color:"{form.field.icon.color}"},checkmark:{color:"{list.option.color}",gutterStart:"-0.375rem",gutterEnd:"0.375rem"},emptyMessage:{padding:"{list.option.padding}"},css:({dt:e})=>`
.p-select.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("select.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-select.p-variant-filled:not(.p-disabled):hover {
    background: ${e("select.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("select.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.border.color")}, ${e("select.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("select.focus.border.color")}, ${e("select.focus.border.color")}), linear-gradient(to bottom, ${e("select.hover.border.color")}, ${e("select.hover.border.color")});
}

.p-select.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")}), linear-gradient(to bottom, ${e("select.invalid.border.color")}, ${e("select.invalid.border.color")});
}

.p-select-option {
    transition: none;
}
`};var Tp={root:{borderRadius:"{form.field.border.radius}"},colorScheme:{light:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}},dark:{root:{invalidBorderColor:"{form.field.invalid.border.color}"}}}};var Rp={root:{borderRadius:"{content.border.radius}"},colorScheme:{light:{root:{background:"{surface.200}",animationBackground:"rgba(255,255,255,0.4)"}},dark:{root:{background:"rgba(255, 255, 255, 0.06)",animationBackground:"rgba(255, 255, 255, 0.04)"}}}};var Ip={root:{transitionDuration:"{transition.duration}"},track:{background:"{content.border.color}",borderRadius:"{border.radius.xs}",size:"2px"},range:{background:"{primary.color}"},handle:{width:"18px",height:"18px",borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",content:{borderRadius:"50%",background:"{primary.color}",hoverBackground:"{primary.color}",width:"18px",height:"18px",shadow:"0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)"},focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},css:({dt:e})=>`
.p-slider-handle {
    transition: box-shadow ${e("slider.transition.duration")}
}

.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 92%);
}

.p-slider-handle:focus-visible,
.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("slider.handle.background")}, transparent 84%);
}
`};var Mp={root:{gap:"0.5rem",transitionDuration:"{transition.duration}"}};var Fp={root:{borderRadius:"{form.field.border.radius}",roundedBorderRadius:"2rem",raisedShadow:"0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"}};var Op={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",transitionDuration:"{transition.duration}"},gutter:{background:"{content.border.color}"},handle:{size:"24px",background:"transparent",borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}}};var Bp={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}",activeBackground:"{primary.color}",margin:"0 0 0 1.625rem",size:"2px"},step:{padding:"0.5rem",gap:"1rem"},stepHeader:{padding:"0.75rem 1rem",borderRadius:"{content.border.radius}",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},gap:"0.5rem"},stepTitle:{color:"{text.muted.color}",activeColor:"{text.color}",fontWeight:"500"},stepNumber:{activeBackground:"{primary.color}",activeBorderColor:"{primary.color}",activeColor:"{primary.contrast.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"none"},steppanels:{padding:"0.875rem 0.5rem 1.125rem 0.5rem"},steppanel:{background:"{content.background}",color:"{content.color}",padding:"0",indent:"1rem"},colorScheme:{light:{stepNumber:{background:"{surface.400}",borderColor:"{surface.400}",color:"{surface.0}"}},dark:{stepNumber:{background:"{surface.200}",borderColor:"{surface.200}",color:"{surface.900}"}}},css:({dt:e})=>`
.p-step-header:focus-visible {
    background: ${e("navigation.item.active.background")}
}
`};var Lp={root:{transitionDuration:"{transition.duration}"},separator:{background:"{content.border.color}"},itemLink:{borderRadius:"{content.border.radius}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},itemLabel:{color:"{text.muted.color}",activeColor:"{primary.color}",fontWeight:"500"},itemNumber:{background:"{content.background}",activeBackground:"{content.background}",borderColor:"{content.border.color}",activeBorderColor:"{content.border.color}",color:"{text.muted.color}",activeColor:"{primary.color}",size:"2rem",fontSize:"1.143rem",fontWeight:"500",borderRadius:"50%",shadow:"0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"}};var $p={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},item:{background:"transparent",hoverBackground:"transparent",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.125rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},itemIcon:{color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},activeBar:{height:"1px",bottom:"-1px",background:"{primary.color}"}};var Np={root:{transitionDuration:"{transition.duration}"},tablist:{borderWidth:"0 0 1px 0",background:"{content.background}",borderColor:"{content.border.color}"},tab:{background:"transparent",hoverBackground:"{content.hover.background}",activeBackground:"transparent",borderWidth:"0 0 1px 0",borderColor:"{content.border.color}",hoverBorderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.color}",hoverColor:"{text.color}",activeColor:"{primary.color}",padding:"1rem 1.25rem",fontWeight:"600",margin:"0 0 -1px 0",gap:"0.5rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},tabpanel:{background:"{content.background}",color:"{content.color}",padding:"1.25rem 1.25rem 1.25rem 1.25rem",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",width:"3rem",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"}},activeBar:{height:"2px",bottom:"-1px",background:"{primary.color}"},css:({dt:e})=>`


.p-tabs-scrollable .p-tab {
    flex-grow: 0
}

.p-tab-active {
    --p-ripple-background: color-mix(in srgb, ${e("primary.color")}, transparent 90%)
}

.p-tab:not(.p-disabled):focus-visible {
    background: ${e("navigation.item.active.background")};
}

.p-tablist-nav-button:focus-visible {
    background: ${e("navigation.item.active.background")};
}
`};var Pp={root:{transitionDuration:"{transition.duration}"},tabList:{background:"{content.background}",borderColor:"{content.border.color}"},tab:{borderColor:"{content.border.color}",activeBorderColor:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",activeColor:"{primary.color}"},tabPanel:{background:"{content.background}",color:"{content.color}"},navButton:{background:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}"},colorScheme:{light:{navButton:{shadow:"0px 0px 10px 50px rgba(255, 255, 255, 0.6)"}},dark:{navButton:{shadow:"0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"}}}};var Vp={root:{fontSize:"0.875rem",fontWeight:"700",padding:"0.25rem 0.5rem",gap:"0.25rem",borderRadius:"{content.border.radius}",roundedBorderRadius:"{border.radius.xl}"},icon:{size:"0.75rem"},colorScheme:{light:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.100}",color:"{surface.600}"},success:{background:"{green.500}",color:"{surface.0}"},info:{background:"{sky.500}",color:"{surface.0}"},warn:{background:"{orange.500}",color:"{surface.0}"},danger:{background:"{red.500}",color:"{surface.0}"},contrast:{background:"{surface.950}",color:"{surface.0}"}},dark:{primary:{background:"{primary.color}",color:"{primary.contrast.color}"},secondary:{background:"{surface.800}",color:"{surface.300}"},success:{background:"{green.400}",color:"{green.950}"},info:{background:"{sky.400}",color:"{sky.950}"},warn:{background:"{orange.400}",color:"{orange.950}"},danger:{background:"{red.400}",color:"{red.950}"},contrast:{background:"{surface.0}",color:"{surface.950}"}}}};var Up={root:{background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",height:"18rem",padding:"{form.field.padding.y} {form.field.padding.x}",borderRadius:"{form.field.border.radius}"},prompt:{gap:"0.25rem"},commandResponse:{margin:"2px 0"}};var zp={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},css:({dt:e})=>`
.p-textarea.p-variant-filled {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid transparent;
    background: ${e("textarea.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-textarea.p-variant-filled:enabled:hover {
    background: ${e("textarea.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:focus {
    outline: 0 none;
    background: ${e("textarea.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.border.color")}, ${e("textarea.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-textarea.p-variant-filled:enabled:hover:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.focus.border.color")}, ${e("textarea.focus.border.color")}), linear-gradient(to bottom, ${e("textarea.hover.border.color")}, ${e("textarea.hover.border.color")});
}

.p-textarea.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}

.p-textarea.p-variant-filled.p-invalid:enabled:focus {
    background-image: linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")}), linear-gradient(to bottom, ${e("textarea.invalid.border.color")}, ${e("textarea.invalid.border.color")});
}
`};var jp={root:{background:"{content.background}",borderColor:"{content.border.color}",color:"{content.color}",borderRadius:"{content.border.radius}",shadow:"{overlay.navigation.shadow}",transitionDuration:"{transition.duration}"},list:{padding:"{navigation.list.padding}",gap:"{navigation.list.gap}"},item:{focusBackground:"{navigation.item.focus.background}",activeBackground:"{navigation.item.active.background}",color:"{navigation.item.color}",focusColor:"{navigation.item.focus.color}",activeColor:"{navigation.item.active.color}",padding:"{navigation.item.padding}",borderRadius:"{navigation.item.border.radius}",gap:"{navigation.item.gap}",icon:{color:"{navigation.item.icon.color}",focusColor:"{navigation.item.icon.focus.color}",activeColor:"{navigation.item.icon.active.color}"}},submenu:{mobileIndent:"1rem"},submenuIcon:{size:"{navigation.submenu.icon.size}",color:"{navigation.submenu.icon.color}",focusColor:"{navigation.submenu.icon.focus.color}",activeColor:"{navigation.submenu.icon.active.color}"},separator:{borderColor:"{content.border.color}"},css:({dt:e})=>`
.p-tieredmenu-overlay {
    border-color: transparent
}
`};var Hp={event:{minHeight:"5rem"},horizontal:{eventContent:{padding:"1rem 0"}},vertical:{eventContent:{padding:"0 1rem"}},eventMarker:{size:"1.5rem",borderRadius:"50%",borderWidth:"2px",background:"{primary.color}",content:{borderRadius:"50%",size:"0",background:"{primary.color}",insetShadow:"none"}},eventConnector:{color:"{content.border.color}",size:"2px"},colorScheme:{light:{eventMarker:{borderColor:"{surface.0}"}},dark:{eventMarker:{borderColor:"{surface.900}"}}}};var Wp={root:{width:"25rem",borderRadius:"{content.border.radius}",borderWidth:"0",transitionDuration:"{transition.duration}"},icon:{size:"1.25rem"},content:{padding:"{overlay.popover.padding}",gap:"0.5rem"},text:{gap:"0.5rem"},summary:{fontWeight:"500",fontSize:"1rem"},detail:{fontWeight:"500",fontSize:"0.875rem"},closeButton:{width:"2rem",height:"2rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",offset:"{focus.ring.offset}"}},closeIcon:{size:"1rem"},colorScheme:{light:{root:{blur:"0"},info:{background:"{blue.50}",borderColor:"{blue.200}",color:"{blue.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{blue.100}",focusRing:{color:"{blue.600}",shadow:"none"}}},success:{background:"{green.50}",borderColor:"{green.200}",color:"{green.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{green.100}",focusRing:{color:"{green.600}",shadow:"none"}}},warn:{background:"{yellow.50}",borderColor:"{yellow.200}",color:"{yellow.900}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{yellow.100}",focusRing:{color:"{yellow.600}",shadow:"none"}}},error:{background:"{red.50}",borderColor:"{red.200}",color:"{red.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{red.100}",focusRing:{color:"{red.600}",shadow:"none"}}},secondary:{background:"{surface.100}",borderColor:"{surface.200}",color:"{surface.600}",detailColor:"{surface.700}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.200}",focusRing:{color:"{surface.600}",shadow:"none"}}},contrast:{background:"{surface.900}",borderColor:"{surface.950}",color:"{surface.50}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.800}",focusRing:{color:"{surface.50}",shadow:"none"}}}},dark:{root:{blur:"10px"},info:{background:"color-mix(in srgb, {blue.500}, transparent 36%)",borderColor:"color-mix(in srgb, {blue.700}, transparent 64%)",color:"{surface.0}",detailColor:"{blue.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{blue.500}",shadow:"none"}}},success:{background:"color-mix(in srgb, {green.500}, transparent 36%)",borderColor:"color-mix(in srgb, {green.700}, transparent 64%)",color:"{surface.0}",detailColor:"{green.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{green.500}",shadow:"none"}}},warn:{background:"color-mix(in srgb, {yellow.500}, transparent 36%)",borderColor:"color-mix(in srgb, {yellow.700}, transparent 64%)",color:"{surface.0}",detailColor:"{yellow.50}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{yellow.500}",shadow:"none"}}},error:{background:"color-mix(in srgb, {red.500}, transparent 36%)",borderColor:"color-mix(in srgb, {red.700}, transparent 64%)",color:"{surface.0}",detailColor:"{red.100}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"rgba(255, 255, 255, 0.05)",focusRing:{color:"{red.500}",shadow:"none"}}},secondary:{background:"{surface.800}",borderColor:"{surface.700}",color:"{surface.300}",detailColor:"{surface.0}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.700}",focusRing:{color:"{surface.300}",shadow:"none"}}},contrast:{background:"{surface.0}",borderColor:"{surface.100}",color:"{surface.950}",detailColor:"{surface.950}",shadow:"0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12)",closeButton:{hoverBackground:"{surface.100}",focusRing:{color:"{surface.950}",shadow:"none"}}}}}};var Gp={root:{padding:"0.75rem 1rem",borderRadius:"{form.field.border.radius}",gap:"0.5rem",fontWeight:"500",background:"{form.field.background}",borderColor:"{form.field.border.color}",color:"{form.field.color}",hoverColor:"{form.field.color}",checkedColor:"{form.field.color}",checkedBorderColor:"{form.field.border.color}",disabledBackground:"{form.field.disabled.background}",disabledBorderColor:"{form.field.disabled.background}",disabledColor:"{form.field.disabled.color}",invalidBorderColor:"{form.field.invalid.border.color}",focusRing:{width:"0",style:"none",offset:"0",color:"unset",shadow:"none"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",padding:"0.625rem 0.75rem"},lg:{fontSize:"{form.field.lg.font.size}",padding:"0.875rem 1.25rem"}},icon:{color:"{text.muted.color}",hoverColor:"{text.muted.color}",checkedColor:"{text.muted.color}",disabledColor:"{form.field.disabled.color}"},content:{checkedBackground:"transparent",checkedShadow:"none",padding:"0",borderRadius:"0",sm:{padding:"0"},lg:{padding:"0"}},colorScheme:{light:{root:{hoverBackground:"{surface.100}",checkedBackground:"{surface.200}"}},dark:{root:{hoverBackground:"{surface.800}",checkedBackground:"{surface.700}"}}},css:({dt:e})=>`
.p-togglebutton:focus-visible {
    background: ${e("togglebutton.hover.background")}
}
`};var qp={root:{width:"2.75rem",height:"1rem",borderRadius:"30px",gap:"0px",shadow:"none",focusRing:{width:"0",style:"none",color:"unset",offset:"0",shadow:"none"},borderWidth:"1px",borderColor:"transparent",hoverBorderColor:"transparent",checkedBorderColor:"transparent",checkedHoverBorderColor:"transparent",invalidBorderColor:"{form.field.invalid.border.color}",transitionDuration:"{form.field.transition.duration}",slideDuration:"0.2s"},handle:{borderRadius:"50%",size:"1.5rem"},colorScheme:{light:{root:{background:"{surface.300}",disabledBackground:"{surface.400}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}"},handle:{background:"{surface.0}",disabledBackground:"{surface.200}",hoverBackground:"{surface.0}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}",color:"{text.muted.color}",hoverColor:"{text.color}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}},dark:{root:{background:"{surface.700}",disabledBackground:"{surface.600}",hoverBackground:"{surface.700}",checkedBackground:"{primary.color}",checkedHoverBackground:"{primary.color}"},handle:{background:"{surface.400}",disabledBackground:"{surface.500}",hoverBackground:"{surface.300}",checkedBackground:"{primary.200}",checkedHoverBackground:"{primary.200}",color:"{surface.800}",hoverColor:"{surface.900}",checkedColor:"{primary.contrast.color}",checkedHoverColor:"{primary.contrast.color}"}}},css:({dt:e})=>`
.p-toggleswitch-handle {
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 96%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("text.color")}, transparent 88%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 92%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible).p-toggleswitch-checked .p-toggleswitch-handle {
    box-shadow: 0 0 1px 10px color-mix(in srgb, ${e("toggleswitch.handle.checked.background")}, transparent 84%), 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
`};var Yp={root:{color:"{content.color}",borderRadius:"{content.border.radius}",gap:"0.5rem",padding:"1rem"},colorScheme:{light:{root:{background:"{surface.100}",borderColor:"{surface.100}"}},dark:{root:{background:"{surface.800}",borderColor:"{surface.800}"}}}};var Kp={root:{background:"{surface.600}",color:"{surface.0}",maxWidth:"12.5rem",gutter:"0.25rem",shadow:"{overlay.popover.shadow}",padding:"0.5rem 0.75rem",borderRadius:"{overlay.popover.border.radius}"}};var Zp={root:{background:"{content.background}",color:"{content.color}",padding:"1rem",gap:"2px",indent:"2rem",transitionDuration:"{transition.duration}"},node:{padding:"0.5rem 0.75rem",borderRadius:"{border.radius.xs}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{text.color}",hoverColor:"{text.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"},gap:"0.5rem"},nodeIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedColor:"{highlight.color}"},nodeToggleButton:{borderRadius:"50%",size:"2rem",hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",selectedHoverColor:"{primary.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},loadingIcon:{size:"2rem"},filter:{margin:"0 0 0.75rem 0"},css:({dt:e})=>`
.p-tree-node-content {
    transition: none
}
`};var Xp={root:{background:"{form.field.background}",disabledBackground:"{form.field.disabled.background}",filledBackground:"{form.field.filled.background}",filledHoverBackground:"{form.field.filled.hover.background}",filledFocusBackground:"{form.field.filled.focus.background}",borderColor:"{form.field.border.color}",hoverBorderColor:"{form.field.hover.border.color}",focusBorderColor:"{form.field.focus.border.color}",invalidBorderColor:"{form.field.invalid.border.color}",color:"{form.field.color}",disabledColor:"{form.field.disabled.color}",placeholderColor:"{form.field.placeholder.color}",invalidPlaceholderColor:"{form.field.invalid.placeholder.color}",shadow:"{form.field.shadow}",paddingX:"{form.field.padding.x}",paddingY:"{form.field.padding.y}",borderRadius:"{form.field.border.radius}",focusRing:{width:"{form.field.focus.ring.width}",style:"{form.field.focus.ring.style}",color:"{form.field.focus.ring.color}",offset:"{form.field.focus.ring.offset}",shadow:"{form.field.focus.ring.shadow}"},transitionDuration:"{form.field.transition.duration}",sm:{fontSize:"{form.field.sm.font.size}",paddingX:"{form.field.sm.padding.x}",paddingY:"{form.field.sm.padding.y}"},lg:{fontSize:"{form.field.lg.font.size}",paddingX:"{form.field.lg.padding.x}",paddingY:"{form.field.lg.padding.y}"}},dropdown:{width:"2.5rem",color:"{form.field.icon.color}"},overlay:{background:"{overlay.select.background}",borderColor:"{overlay.select.border.color}",borderRadius:"{overlay.select.border.radius}",color:"{overlay.select.color}",shadow:"{overlay.select.shadow}"},tree:{padding:"{list.padding}"},emptyMessage:{padding:"{list.option.padding}"},chip:{borderRadius:"{border.radius.sm}"},clearIcon:{color:"{form.field.icon.color}"},css:({dt:e})=>`
.p-treeselect.p-variant-filled {
    border-end-start-radius: 0
    border-end-end-radius: 0;
    border: 1px solid transparent;
    background: ${e("treeselect.filled.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
}

.p-treeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("treeselect.filled.hover.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
    background-size: 0 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus {
    outline: 0 none;
    background: ${e("treeselect.filled.focus.background")} no-repeat;
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.border.color")}, ${e("treeselect.border.color")});
    background-size: 100% 2px, 100% 1px;
    background-position: 50% 100%, 50% 100%;
    background-origin: border-box;
    border-color: transparent;
}

.p-treeselect.p-variant-filled:not(.p-disabled).p-focus:hover {
    background-image: linear-gradient(to bottom, ${e("treeselect.focus.border.color")}, ${e("treeselect.focus.border.color")}), linear-gradient(to bottom, ${e("treeselect.hover.border.color")}, ${e("treeselect.hover.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}

.p-treeselect.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {
    background-image: linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")}), linear-gradient(to bottom, ${e("treeselect.invalid.border.color")}, ${e("treeselect.invalid.border.color")});
}
`};var Qp={root:{transitionDuration:"{transition.duration}"},header:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},headerCell:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",borderColor:"{treetable.border.color}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",gap:"0.5rem",padding:"0.75rem 1rem",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},columnTitle:{fontWeight:"600"},row:{background:"{content.background}",hoverBackground:"{content.hover.background}",selectedBackground:"{highlight.background}",color:"{content.color}",hoverColor:"{content.hover.color}",selectedColor:"{highlight.color}",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"-1px",shadow:"{focus.ring.shadow}"}},bodyCell:{borderColor:"{treetable.border.color}",padding:"0.75rem 1rem",gap:"0.5rem"},footerCell:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",padding:"0.75rem 1rem"},columnFooter:{fontWeight:"600"},footer:{background:"{content.background}",borderColor:"{treetable.border.color}",color:"{content.color}",borderWidth:"0 0 1px 0",padding:"0.75rem 1rem"},columnResizer:{width:"0.5rem"},resizeIndicator:{width:"1px",color:"{primary.color}"},sortIcon:{color:"{text.muted.color}",hoverColor:"{text.hover.muted.color}",size:"0.875rem"},loadingIcon:{size:"2rem"},nodeToggleButton:{hoverBackground:"{content.hover.background}",selectedHoverBackground:"{content.background}",color:"{text.muted.color}",hoverColor:"{text.color}",selectedHoverColor:"{primary.color}",size:"1.75rem",borderRadius:"50%",focusRing:{width:"{focus.ring.width}",style:"{focus.ring.style}",color:"{focus.ring.color}",offset:"{focus.ring.offset}",shadow:"{focus.ring.shadow}"}},paginatorTop:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},paginatorBottom:{borderColor:"{content.border.color}",borderWidth:"0 0 1px 0"},colorScheme:{light:{root:{borderColor:"{content.border.color}"},bodyCell:{selectedBorderColor:"{primary.100}"}},dark:{root:{borderColor:"{surface.800}"},bodyCell:{selectedBorderColor:"{primary.900}"}}},css:({dt:e})=>`
.p-treetable-header-cell,
.p-treetable-tbody > tr {
    transition: none
}
`};var Jp={loader:{mask:{background:"{content.background}",color:"{text.muted.color}"},icon:{size:"2rem"}}};var ef=T(f({},Dd),{components:{accordion:yd,autocomplete:Cd,avatar:wd,badge:_d,blockui:Sd,breadcrumb:kd,button:xd,datepicker:Nd,card:Ed,carousel:Ad,cascadeselect:Td,checkbox:Rd,chip:Id,colorpicker:Md,confirmdialog:Fd,confirmpopup:Od,contextmenu:Bd,dataview:$d,datatable:Ld,dialog:Pd,divider:Vd,dock:Ud,drawer:zd,editor:jd,fieldset:Hd,fileupload:Wd,iftalabel:Kd,floatlabel:Gd,galleria:qd,iconfield:Yd,image:Zd,imagecompare:Xd,inlinemessage:Qd,inplace:Jd,inputchips:ep,inputgroup:tp,inputnumber:op,inputotp:rp,inputtext:np,knob:ip,listbox:ap,megamenu:sp,menu:lp,menubar:cp,message:up,metergroup:dp,multiselect:pp,orderlist:fp,organizationchart:hp,overlaybadge:gp,popover:wp,paginator:mp,password:yp,panel:bp,panelmenu:vp,picklist:Cp,progressbar:_p,progressspinner:Dp,radiobutton:Sp,rating:kp,scrollpanel:Ep,select:Ap,selectbutton:Tp,skeleton:Rp,slider:Ip,speeddial:Mp,splitter:Op,splitbutton:Fp,stepper:Bp,steps:Lp,tabmenu:$p,tabs:Np,tabview:Pp,textarea:zp,tieredmenu:jp,tag:Vp,terminal:Up,timeline:Hp,togglebutton:Gp,toggleswitch:qp,tree:Zp,treeselect:Xp,treetable:Qp,toast:Wp,toolbar:Yp,virtualscroller:Jp,tooltip:Kp,ripple:xp},css:({dt:e})=>`

    `});var Cb=["icon"],wb=["content"],of=e=>({$implicit:e}),_b=(e,r)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":r});function Db(e,r){e&1&&Ie(0)}function Sb(e,r){if(e&1&&fe(0,"span",0),e&2){let t=_(3);Ce(t.checked?t.onIcon:t.offIcon),b("ngClass",Mo(4,_b,t.iconPos==="left",t.iconPos==="right")),O("data-pc-section","icon")}}function kb(e,r){if(e&1&&B(0,Sb,1,7,"span",2),e&2){let t=_(2);vt(t.onIcon||t.offIcon?0:-1)}}function xb(e,r){e&1&&Ie(0)}function Eb(e,r){if(e&1&&B(0,xb,1,0,"ng-container",1),e&2){let t=_(2);b("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",ve(2,of,t.checked))}}function Ab(e,r){if(e&1&&(B(0,kb,1,1)(1,Eb,1,4,"ng-container"),v(2,"span",0),ne(3),y()),e&2){let t=_();vt(t.iconTemplate?1:0),C(2),b("ngClass",t.cx("label")),O("data-pc-section","label"),C(),Ut(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var Tb=({dt:e})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
    padding: ${e("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${e("togglebutton.content.border.radius")};
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled:not(.p-togglebutton-checked) {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${e("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${e("togglebutton.content.lg.padding")};
}

/* For PrimeNG (iconPos) */
.p-togglebutton-icon-right {
    order: 1;
}

.p-togglebutton.ng-invalid.ng-dirty {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Rb={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},tf=(()=>{class e extends ce{name="togglebutton";theme=Tb;classes=Rb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Ib={provide:kt,useExisting:Be(()=>ji),multi:!0},ji=(()=>{class e extends de{get hostClass(){return this.styleClass||""}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new z;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=d(tf);onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(o,n,i){if(o&1&&(se(i,Cb,4),se(i,wb,4),se(i,St,4)),o&2){let a;G(a=q())&&(n.iconTemplate=a.first),G(a=q())&&(n.contentTemplate=a.first),G(a=q())&&(n.templates=a)}},hostVars:23,hostBindings:function(o,n){o&1&&re("keydown",function(a){return n.onKeyDown(a)})("click",function(a){return n.toggle(a)}),o&2&&(pl("tabindex",n.tabindex),O("disabled",n.disabled)("aria-labelledby",n.ariaLabelledBy)("aria-pressed",n.checked)("data-p-checked",n.active)("data-p-disabled",n.disabled)("type","button"),Ce(n.hostClass),at("p-togglebutton",!0)("p-togglebutton-checked",n.checked)("p-disabled",n.disabled)("p-togglebutton-sm",n.size==="small")("p-inputfield-sm",n.size==="small")("p-togglebutton-lg",n.size==="large")("p-inputfield-lg",n.size==="large"))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",D],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",$e],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",D],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[K([Ib,tf]),cl([Ii]),N],decls:3,vars:6,consts:[[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(o,n){o&1&&(v(0,"span",0),B(1,Db,1,0,"ng-container",1)(2,Ab,4,4),y()),o&2&&(b("ngClass",n.cx("content")),C(),b("ngTemplateOutlet",n.contentTemplate||n._contentTemplate)("ngTemplateOutletContext",ve(4,of,n.checked)),C(),vt(n.contentTemplate?-1:2))},dependencies:[he,Pe,dt,X],encapsulation:2,changeDetection:0})}return e})(),OA=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[ji,X,X]})}return e})();var Mb=["item"],Fb=(e,r)=>({$implicit:e,index:r});function Ob(e,r){return this.getOptionLabel(r)}function Bb(e,r){e&1&&Ie(0)}function Lb(e,r){if(e&1&&B(0,Bb,1,0,"ng-container",3),e&2){let t=_(2),o=t.$implicit,n=t.$index,i=_();b("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",Mo(2,Fb,o,n))}}function $b(e,r){e&1&&B(0,Lb,1,5,"ng-template",null,0,Fo)}function Nb(e,r){if(e&1){let t=ke();v(0,"p-toggleButton",2),re("onChange",function(n){let i=V(t),a=i.$implicit,s=i.$index,l=_();return U(l.onOptionSelect(n,a,s))}),B(1,$b,2,0),y()}if(e&2){let t=r.$implicit,o=_();b("autofocus",o.autofocus)("styleClass",o.styleClass)("ngModel",o.isSelected(t))("onLabel",o.getOptionLabel(t))("offLabel",o.getOptionLabel(t))("disabled",o.disabled||o.isOptionDisabled(t))("allowEmpty",o.getAllowEmpty())("size",o.size),C(),vt(o.itemTemplate||o._itemTemplate?1:-1)}}var Pb=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Vb={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},rf=(()=>{class e extends ce{name="selectbutton";theme=Pb;classes=Vb;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Ub={provide:kt,useExisting:Be(()=>Hi),multi:!0},Hi=(()=>{class e extends de{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(t){this._unselectable=t,this.allowEmpty=!t}tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new z;onChange=new z;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=d(rf);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(t){return this.optionLabel?Xt(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Xt(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Xt(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,o,n){if(this.disabled||this.isOptionDisabled(o))return;let i=this.isSelected(o);if(i&&this.unselectable)return;let a=this.getOptionValue(o),s;if(this.multiple)i?s=this.value.filter(l=>!Qt(l,a,this.equalityKey)):s=this.value?[...this.value,a]:[a];else{if(i&&!this.allowEmpty)return;s=i?null:a}this.focusedIndex=n,this.value=s,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:o,index:n})}changeTabIndexes(t,o){let n,i;for(let a=0;a<=this.el.nativeElement.children.length-1;a++)this.el.nativeElement.children[a].getAttribute("tabindex")==="0"&&(n={elem:this.el.nativeElement.children[a],index:a});o==="prev"?n.index===0?i=this.el.nativeElement.children.length-1:i=n.index-1:n.index===this.el.nativeElement.children.length-1?i=0:i=n.index+1,this.focusedIndex=i,this.el.nativeElement.children[i].focus()}onFocus(t,o){this.focusedIndex=o}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(o=>!Qt(o,this.getOptionValue(t),this.dataKey))}isSelected(t){let o=!1,n=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let i of this.value)if(Qt(i,n,this.dataKey)){o=!0;break}}}else o=Qt(this.getOptionValue(t),this.value,this.equalityKey);return o}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(o,n,i){if(o&1&&(se(i,Mb,4),se(i,St,4)),o&2){let a;G(a=q())&&(n.itemTemplate=a.first),G(a=q())&&(n.templates=a)}},hostVars:10,hostBindings:function(o,n){o&2&&(O("role","group")("aria-labelledby",n.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),st(n.style),at("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",D],tabindex:[2,"tabindex","tabindex",$e],multiple:[2,"multiple","multiple",D],allowEmpty:[2,"allowEmpty","allowEmpty",D],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",D],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",D]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[K([Ub,rf]),N],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){o&1&&co(0,Nb,2,9,"p-toggleButton",1,Ob,!0),o&2&&uo(n.options)},dependencies:[ji,zi,Vi,tn,he,dt,X],encapsulation:2,changeDetection:0})}return e})(),nf=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[Hi,X,X]})}return e})();var Wi=class e{_config={primary:"indigo",surface:null,darkTheme:!1,menuMode:"static",menuTheme:"light",topbarTheme:"indigo",menuProfilePosition:"end"};_state={staticMenuDesktopInactive:!1,overlayMenuActive:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1,rightMenuActive:!1,topbarMenuActive:!1,sidebarActive:!1,anchored:!1,activeMenuItem:null,overlaySubmenuActive:!1,menuProfileActive:!1};layoutConfig=Se(this._config);layoutState=Se(this._state);configUpdate=new oe;overlayOpen=new oe;menuSource=new oe;resetSource=new oe;menuSource$=this.menuSource.asObservable();resetSource$=this.resetSource.asObservable();configUpdate$=this.configUpdate.asObservable();overlayOpen$=this.overlayOpen.asObservable();isSidebarActive=ue(()=>this.layoutState().overlayMenuActive||this.layoutState().staticMenuMobileActive);isDarkTheme=ue(()=>this.layoutConfig().darkTheme);isOverlay=ue(()=>this.layoutConfig().menuMode==="overlay");isSlim=ue(()=>this.layoutConfig().menuMode==="slim");isSlimPlus=ue(()=>this.layoutConfig().menuMode==="slim-plus");isHorizontal=ue(()=>this.layoutConfig().menuMode==="horizontal");transitionComplete=Se(!1);isSidebarStateChanged=ue(()=>{let r=this.layoutConfig();return r.menuMode==="horizontal"||r.menuMode==="slim"||r.menuMode==="slim-plus"});initialized=!1;constructor(){Rt(()=>{this.layoutConfig()&&this.onConfigUpdate()}),Rt(()=>{let r=this.layoutConfig();if(!this.initialized||!r){this.initialized=!0;return}this.handleDarkModeTransition(r)}),Rt(()=>{this.isSidebarStateChanged()&&this.reset()})}handleDarkModeTransition(r){document.startViewTransition?this.startViewTransition(r):(this.toggleDarkMode(r),this.onTransitionEnd())}startViewTransition(r){document.startViewTransition(()=>{this.toggleDarkMode(r)}).ready.then(()=>{this.onTransitionEnd()}).catch(()=>{})}toggleDarkMode(r){(r||this.layoutConfig()).darkTheme?document.documentElement.classList.add("app-dark"):document.documentElement.classList.remove("app-dark")}onTransitionEnd(){this.transitionComplete.set(!0),setTimeout(()=>{this.transitionComplete.set(!1)})}onMenuToggle(){this.isOverlay()&&(this.layoutState.update(r=>T(f({},r),{overlayMenuActive:!this.layoutState().overlayMenuActive})),this.layoutState().overlayMenuActive&&this.overlayOpen.next(null)),this.isDesktop()?this.layoutState.update(r=>T(f({},r),{staticMenuDesktopInactive:!this.layoutState().staticMenuDesktopInactive})):(this.layoutState.update(r=>T(f({},r),{staticMenuMobileActive:!this.layoutState().staticMenuMobileActive})),this.layoutState().staticMenuMobileActive&&this.overlayOpen.next(null))}onMenuProfileToggle(){this.layoutState.update(r=>T(f({},r),{menuProfileActive:!r.menuProfileActive}))}openRightMenu(){this.layoutState.update(r=>T(f({},r),{rightMenuActive:!0}))}isDesktop(){return window.innerWidth>991}isMobile(){return!this.isDesktop()}onConfigUpdate(){this._config=f({},this.layoutConfig()),this.configUpdate.next(this.layoutConfig())}onMenuStateChange(r){this.menuSource.next(r)}reset(){this.resetSource.next(!0)}onOverlaySubmenuOpen(){this.overlayOpen.next(null)}hideConfigSidebar(){this.layoutState.update(r=>T(f({},r),{configSidebarVisible:!1}))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})};var af=class e{static isArray(r,t=!0){return Array.isArray(r)&&(t||r.length!==0)}static isObject(r,t=!0){return typeof r=="object"&&!Array.isArray(r)&&r!=null&&(t||Object.keys(r).length!==0)}static equals(r,t,o){return o?this.resolveFieldData(r,o)===this.resolveFieldData(t,o):this.equalsByValue(r,t)}static equalsByValue(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){var o=Array.isArray(r),n=Array.isArray(t),i,a,s;if(o&&n){if(a=r.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!this.equalsByValue(r[i],t[i]))return!1;return!0}if(o!=n)return!1;var l=this.isDate(r),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return r.getTime()==t.getTime();var u=r instanceof RegExp,p=t instanceof RegExp;if(u!=p)return!1;if(u&&p)return r.toString()==t.toString();var h=Object.keys(r);if(a=h.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,h[i]))return!1;for(i=a;i--!==0;)if(s=h[i],!this.equalsByValue(r[s],t[s]))return!1;return!0}return r!==r&&t!==t}static resolveFieldData(r,t){if(r&&t){if(this.isFunction(t))return t(r);if(t.indexOf(".")==-1)return r[t];{let o=t.split("."),n=r;for(let i=0,a=o.length;i<a;++i){if(n==null)return null;n=n[o[i]]}return n}}else return null}static isFunction(r){return!!(r&&r.constructor&&r.call&&r.apply)}static reorderArray(r,t,o){let n;r&&t!==o&&(o>=r.length&&(o%=r.length,t%=r.length),r.splice(o,0,r.splice(t,1)[0]))}static insertIntoOrderedArray(r,t,o,n){if(o.length>0){let i=!1;for(let a=0;a<o.length;a++)if(this.findIndexInList(o[a],n)>t){o.splice(a,0,r),i=!0;break}i||o.push(r)}else o.push(r)}static findIndexInList(r,t){let o=-1;if(t){for(let n=0;n<t.length;n++)if(t[n]==r){o=n;break}}return o}static contains(r,t){if(r!=null&&t&&t.length){for(let o of t)if(this.equals(r,o))return!0}return!1}static removeAccents(r){return r&&(r=r.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),r}static isDate(r){return Object.prototype.toString.call(r)==="[object Date]"}static isEmpty(r){return r==null||r===""||Array.isArray(r)&&r.length===0||!this.isDate(r)&&typeof r=="object"&&Object.keys(r).length===0}static isNotEmpty(r){return!this.isEmpty(r)}static compare(r,t,o,n=1){let i=-1,a=this.isEmpty(r),s=this.isEmpty(t);return a&&s?i=0:a?i=n:s?i=-n:typeof r=="string"&&typeof t=="string"?i=r.localeCompare(t,o,{numeric:!0}):i=r<t?-1:r>t?1:0,i}static sort(r,t,o=1,n,i=1){let a=e.compare(r,t,n,o),s=o;return(e.isEmpty(r)||e.isEmpty(t))&&(s=i===1?o:i),s*a}static merge(r,t){if(!(r==null&&t==null)){{if((r==null||typeof r=="object")&&(t==null||typeof t=="object"))return f(f({},r||{}),t||{});if((r==null||typeof r=="string")&&(t==null||typeof t=="string"))return[r||"",t||""].join(" ")}return t||r}}static isPrintableCharacter(r=""){return this.isNotEmpty(r)&&r.length===1&&r.match(/\S| /)}static getItemValue(r,...t){return this.isFunction(r)?r(...t):r}static findLastIndex(r,t){let o=-1;if(this.isNotEmpty(r))try{o=r.findLastIndex(t)}catch{o=r.lastIndexOf([...r].reverse().find(t))}return o}static findLast(r,t){let o;if(this.isNotEmpty(r))try{o=r.findLast(t)}catch{o=[...r].reverse().find(t)}return o}static deepEquals(r,t){if(r===t)return!0;if(r&&t&&typeof r=="object"&&typeof t=="object"){var o=Array.isArray(r),n=Array.isArray(t),i,a,s;if(o&&n){if(a=r.length,a!=t.length)return!1;for(i=a;i--!==0;)if(!this.deepEquals(r[i],t[i]))return!1;return!0}if(o!=n)return!1;var l=r instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return r.getTime()==t.getTime();var u=r instanceof RegExp,p=t instanceof RegExp;if(u!=p)return!1;if(u&&p)return r.toString()==t.toString();var h=Object.keys(r);if(a=h.length,a!==Object.keys(t).length)return!1;for(i=a;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,h[i]))return!1;for(i=a;i--!==0;)if(s=h[i],!this.deepEquals(r[s],t[s]))return!1;return!0}return r!==r&&t!==t}static minifyCSS(r){return r&&r.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(r){return this.isString(r)?r.replace(/(-|_)/g,"").toLowerCase():r}static isString(r,t=!0){return typeof r=="string"&&(t||r!=="")}},sf=0;function yT(e="pn_id_"){return sf++,`${e}${sf}`}function jb(){let e=[],r=(i,a)=>{let s=e.length>0?e[e.length-1]:{key:i,value:a},l=s.value+(s.key===i?0:a)+2;return e.push({key:i,value:l}),l},t=i=>{e=e.filter(a=>a.value!==i)},o=()=>e.length>0?e[e.length-1].value:0,n=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:n,set:(i,a,s)=>{a&&(a.style.zIndex=String(r(i,s)))},clear:i=>{i&&(t(n(i)),i.style.zIndex="")},getCurrent:()=>o(),generateZIndex:r,revertZIndex:t}}var on=jb();var Hb=["header"],Wb=["footer"],Gb=["content"],qb=["closeicon"],Yb=["headless"],Kb=["maskRef"],Zb=["container"],Xb=["closeButton"],Qb=["*"],Jb=(e,r,t,o,n,i)=>({"p-drawer":!0,"p-drawer-active":e,"p-drawer-left":r,"p-drawer-right":t,"p-drawer-top":o,"p-drawer-bottom":n,"p-drawer-full":i}),ev=(e,r)=>({transform:e,transition:r}),tv=e=>({value:"visible",params:e});function ov(e,r){e&1&&Ie(0)}function rv(e,r){if(e&1&&B(0,ov,1,0,"ng-container",4),e&2){let t=_(2);b("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)}}function nv(e,r){e&1&&Ie(0)}function iv(e,r){if(e&1&&(v(0,"div"),ne(1),y()),e&2){let t=_(3);Ce(t.cx("title")),C(),Ut(t.header)}}function av(e,r){e&1&&fe(0,"TimesIcon"),e&2&&O("data-pc-section","closeicon")}function sv(e,r){}function lv(e,r){e&1&&B(0,sv,0,0,"ng-template")}function cv(e,r){if(e&1&&B(0,av,1,1,"TimesIcon",8)(1,lv,1,0,null,4),e&2){let t=_(4);b("ngIf",!t.closeIconTemplate&&!t._closeIconTemplate),C(),b("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function uv(e,r){if(e&1){let t=ke();v(0,"p-button",9),re("onClick",function(n){V(t);let i=_(3);return U(i.close(n))})("keydown.enter",function(n){V(t);let i=_(3);return U(i.close(n))}),B(1,cv,2,2,"ng-template",null,1,Fo),y()}if(e&2){let t=_(3);b("ngClass",t.cx("closeButton"))("buttonProps",t.closeButtonProps)("ariaLabel",t.ariaCloseLabel),O("data-pc-section","closebutton")("data-pc-group-section","iconcontainer")}}function dv(e,r){e&1&&Ie(0)}function pv(e,r){e&1&&Ie(0)}function fv(e,r){if(e&1&&(Nt(0),v(1,"div",5),B(2,pv,1,0,"ng-container",4),y(),Pt()),e&2){let t=_(3);C(),b("ngClass",t.cx("footer")),O("data-pc-section","footer"),C(),b("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}function hv(e,r){if(e&1&&(v(0,"div",5),B(1,nv,1,0,"ng-container",4)(2,iv,2,3,"div",6)(3,uv,3,5,"p-button",7),y(),v(4,"div",5),Tt(5),B(6,dv,1,0,"ng-container",4),y(),B(7,fv,3,3,"ng-container",8)),e&2){let t=_(2);b("ngClass",t.cx("header")),O("data-pc-section","header"),C(),b("ngTemplateOutlet",t.headerTemplate||t._headerTemplate),C(),b("ngIf",t.header),C(),b("ngIf",t.showCloseIcon&&t.closable),C(),b("ngClass",t.cx("content")),O("data-pc-section","content"),C(2),b("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),C(),b("ngIf",t.footerTemplate||t._footerTemplate)}}function gv(e,r){if(e&1){let t=ke();v(0,"div",3,0),re("@panelState.start",function(n){V(t);let i=_();return U(i.onAnimationStart(n))})("@panelState.done",function(n){V(t);let i=_();return U(i.onAnimationEnd(n))})("keydown",function(n){V(t);let i=_();return U(i.onKeyDown(n))}),B(2,rv,1,1,"ng-container")(3,hv,8,9),y()}if(e&2){let t=_();st(t.style),Ce(t.styleClass),b("ngClass",ml(9,Jb,t.visible,t.position==="left"&&!t.fullScreen,t.position==="right"&&!t.fullScreen,t.position==="top"&&!t.fullScreen,t.position==="bottom"&&!t.fullScreen,t.fullScreen||t.position==="full"))("@panelState",ve(19,tv,Mo(16,ev,t.transformOptions,t.transitionOptions))),O("data-pc-name","sidebar")("data-pc-section","root"),C(2),vt(t.headlessTemplate||t._headlessTemplate?2:3)}}var mv=({dt:e})=>`
.p-drawer {
    display: flex;
    flex-direction: column;
    pointer-events: auto;
    transform: translate3d(0px, 0px, 0px);
    position: fixed;
    transition: transform 0.3s;
    background: ${e("drawer.background")};
    color: ${e("drawer.color")};
    border: 1px solid ${e("drawer.border.color")};
    box-shadow: ${e("drawer.shadow")};
}

.p-drawer-content {
    overflow-y: auto;
    flex-grow: 1;
    padding: ${e("drawer.content.padding")};
}

.p-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    padding: ${e("drawer.header.padding")};
}

.p-drawer-footer {
    padding: ${e("drawer.header.padding")};
}

.p-drawer-title {
    font-weight: ${e("drawer.title.font.weight")};
    font-size: ${e("drawer.title.font.size")};
}

.p-drawer-full .p-drawer {
    transition: none;
    transform: none;
    width: 100vw !important;
    height: 100vh !important;
    max-height: 100%;
    top: 0px !important;
    left: 0px !important;
    border-width: 1px;
}

.p-drawer-left .p-drawer {
    align-self: start;
    width: 20rem;
    height: 100%;
    border-right-width: 1px;
}

.p-drawer-right .p-drawer {
    align-self: end;
    width: 20rem;
    height: 100%;
    border-left-width: 1px;
}

.p-drawer-top .p-drawer {
    height: 10rem;
    width: 100%;
    border-bottom-width: 1px;
}

.p-drawer-bottom .p-drawer {
    height: 10rem;
    width: 100%;
    border-top-width: 1px;
}

.p-drawer-left .p-drawer-content,
.p-drawer-right .p-drawer-content,
.p-drawer-top .p-drawer-content,
.p-drawer-bottom .p-drawer-content {
    width: 100%;
    height: 100%;
}

.p-drawer-open {
    display: flex;
}

.p-drawer-top {
    justify-content: flex-start;
}

.p-drawer-bottom {
    justify-content: flex-end;
}

.p-drawer {
    position: fixed;
    transition: transform 0.3s;
    display: flex;
    flex-direction: column;
}

.p-drawer-content {
    position: relative;
    overflow-y: auto;
    flex-grow: 1;
}

.p-drawer-header {
    display: flex;
    align-items: center;
}

.p-drawer-footer {
    margin-top: auto;
}

.p-drawer-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

.p-drawer-mask {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.2s;
}

.p-overlay-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask:dir(rtl) {
    flex-direction: row-reverse;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation 150ms forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation 150ms forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background-color: transparent;
    }
    to {
        background-color: rgba(0, 0, 0, 0.4);
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background-color: rgba(0, 0, 0, 0.4);
    }
    to {
        background-color: transparent;
    }
}
`,bv={mask:({instance:e})=>({position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",flexDirection:"column",alignItems:e.position==="top"?"flex-start":e.position==="bottom"?"flex-end":"center"})},vv={mask:({instance:e})=>({"p-drawer-mask":!0,"p-overlay-mask p-overlay-mask-enter":e.modal,"p-drawer-open":e.containerVisible,"p-drawer-full":e.fullScreen,[`p-drawer-${e.position}`]:!!e.position}),root:({instance:e})=>({"p-drawer p-component":!0,"p-drawer-full":e.fullScreen}),header:"p-drawer-header",title:"p-drawer-title",pcCloseButton:"p-drawer-close-button",content:"p-drawer-content",footer:"p-drawer-footer"},lf=(()=>{class e extends ce{name="drawer";theme=mv;classes=vv;inlineStyles=bv;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var yv=kn([Dn({transform:"{{transform}}",opacity:0}),_n("{{transition}}")]),Cv=kn([_n("{{transition}}",Dn({transform:"{{transform}}",opacity:0}))]),Rs=(()=>{class e extends de{appendTo="body";blockScroll=!1;style;styleClass;ariaCloseLabel;autoZIndex=!0;baseZIndex=0;modal=!0;closeButtonProps={severity:"secondary",text:!0,rounded:!0};dismissible=!0;showCloseIcon=!0;closeOnEscape=!0;transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)";get visible(){return this._visible}set visible(t){this._visible=t}get position(){return this._position}set position(t){if(this._position=t,t==="full"){this.transformOptions="none";return}switch(t){case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break}}get fullScreen(){return this._fullScreen}set fullScreen(t){this._fullScreen=t,t&&(this.transformOptions="none")}header;maskStyle;closable=!0;onShow=new z;onHide=new z;visibleChange=new z;maskRef;containerViewChild;closeButtonViewChild;initialized;_visible;_position="left";_fullScreen=!1;container;transformOptions="translate3d(-100%, 0px, 0px)";mask;maskClickListener;documentEscapeListener;animationEndListener;_componentStyle=d(lf);ngAfterViewInit(){super.ngAfterViewInit(),this.initialized=!0}headerTemplate;footerTemplate;contentTemplate;closeIconTemplate;headlessTemplate;_headerTemplate;_footerTemplate;_contentTemplate;_closeIconTemplate;_headlessTemplate;templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onKeyDown(t){t.code==="Escape"&&this.hide(!1)}show(){this.container.setAttribute(this.attrSelector,""),this.autoZIndex&&on.set("modal",this.container,this.baseZIndex||this.config.zIndex.modal),this.modal&&this.enableModality(),this.onShow.emit({}),this.visibleChange.emit(!0)}hide(t=!0){t&&this.onHide.emit({}),this.modal&&this.disableModality()}close(t){this.hide(),this.visibleChange.emit(!1),t.preventDefault()}enableModality(){let t=this.document.querySelectorAll(".p-drawer-active"),o=t.length,n=o==1?String(parseInt(this.container.style.zIndex)-1):String(parseInt(t[o-1].style.zIndex)-1);this.mask||(this.mask=this.renderer.createElement("div"),this.renderer.setStyle(this.mask,"zIndex",n),ki(this.mask,"style",this.maskStyle),ft(this.mask,"p-overlay-mask p-drawer-mask p-overlay-mask-enter"),this.dismissible&&(this.maskClickListener=this.renderer.listen(this.mask,"click",i=>{this.dismissible&&this.close(i)})),this.renderer.appendChild(this.document.body,this.mask),this.blockScroll&&gu())}disableModality(){this.mask&&(ft(this.mask,"p-overlay-mask-leave"),this.animationEndListener=this.renderer.listen(this.mask,"animationend",this.destroyModal.bind(this)))}destroyModal(){this.unbindMaskClickListener(),this.mask&&this.renderer.removeChild(this.document.body,this.mask),this.blockScroll&&mu(),this.unbindAnimationEndListener(),this.mask=null}onAnimationStart(t){switch(t.toState){case"visible":this.container=t.element,this.appendContainer(),this.show(),this.closeOnEscape&&this.bindDocumentEscapeListener();break}}onAnimationEnd(t){switch(t.toState){case"void":this.hide(!1),on.clear(this.container),this.unbindGlobalListeners();break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.container):Cu(this.appendTo,this.container))}bindDocumentEscapeListener(){let t=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentEscapeListener=this.renderer.listen(t,"keydown",o=>{o.which==27&&parseInt(this.container.style.zIndex)===on.get(this.container)&&this.close(o)})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}unbindGlobalListeners(){this.unbindMaskClickListener(),this.unbindDocumentEscapeListener()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.initialized=!1,this.visible&&this.modal&&this.destroyModal(),this.appendTo&&this.container&&this.renderer.appendChild(this.el.nativeElement,this.container),this.container&&this.autoZIndex&&on.clear(this.container),this.container=null,this.unbindGlobalListeners(),this.unbindAnimationEndListener()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-drawer"]],contentQueries:function(o,n,i){if(o&1&&(se(i,Hb,4),se(i,Wb,4),se(i,Gb,4),se(i,qb,4),se(i,Yb,4),se(i,St,4)),o&2){let a;G(a=q())&&(n.headerTemplate=a.first),G(a=q())&&(n.footerTemplate=a.first),G(a=q())&&(n.contentTemplate=a.first),G(a=q())&&(n.closeIconTemplate=a.first),G(a=q())&&(n.headlessTemplate=a.first),G(a=q())&&(n.templates=a)}},viewQuery:function(o,n){if(o&1&&(Vt(Kb,5),Vt(Zb,5),Vt(Xb,5)),o&2){let i;G(i=q())&&(n.maskRef=i.first),G(i=q())&&(n.containerViewChild=i.first),G(i=q())&&(n.closeButtonViewChild=i.first)}},inputs:{appendTo:"appendTo",blockScroll:[2,"blockScroll","blockScroll",D],style:"style",styleClass:"styleClass",ariaCloseLabel:"ariaCloseLabel",autoZIndex:[2,"autoZIndex","autoZIndex",D],baseZIndex:[2,"baseZIndex","baseZIndex",$e],modal:[2,"modal","modal",D],closeButtonProps:"closeButtonProps",dismissible:[2,"dismissible","dismissible",D],showCloseIcon:[2,"showCloseIcon","showCloseIcon",D],closeOnEscape:[2,"closeOnEscape","closeOnEscape",D],transitionOptions:"transitionOptions",visible:"visible",position:"position",fullScreen:"fullScreen",header:"header",maskStyle:"maskStyle",closable:[2,"closable","closable",D]},outputs:{onShow:"onShow",onHide:"onHide",visibleChange:"visibleChange"},features:[K([lf]),N],ngContentSelectors:Qb,decls:1,vars:1,consts:[["container",""],["icon",""],["role","complementary",3,"ngClass","style","class","keydown",4,"ngIf"],["role","complementary",3,"keydown","ngClass"],[4,"ngTemplateOutlet"],[3,"ngClass"],[3,"class",4,"ngIf"],[3,"ngClass","buttonProps","ariaLabel","onClick","keydown.enter",4,"ngIf"],[4,"ngIf"],[3,"onClick","keydown.enter","ngClass","buttonProps","ariaLabel"]],template:function(o,n){o&1&&(At(),B(0,gv,4,21,"div",2)),o&2&&b("ngIf",n.visible)},dependencies:[he,Pe,po,dt,ws,qu,X],encapsulation:2,data:{animation:[pa("panelState",[Sn("void => visible",[xn(yv)]),Sn("visible => void",[xn(Cv)])])]},changeDetection:0})}return e})(),cf=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[Rs,X,X]})}return e})();var _v=["handle"],Dv=["input"],Sv=e=>({checked:e});function kv(e,r){e&1&&Ie(0)}function xv(e,r){if(e&1&&B(0,kv,1,0,"ng-container",4),e&2){let t=_();b("ngTemplateOutlet",t.handleTemplate||t._handleTemplate)("ngTemplateOutletContext",ve(2,Sv,t.checked()))}}var Ev=({dt:e})=>`
.p-toggleswitch {
    display: inline-block;
    width: ${e("toggleswitch.width")};
    height: ${e("toggleswitch.height")};
}

.p-toggleswitch-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: ${e("toggleswitch.border.radius")};
}

.p-toggleswitch-slider {
    display: inline-block;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-width: ${e("toggleswitch.border.width")};
    border-style: solid;
    border-color: ${e("toggleswitch.border.color")};
    background: ${e("toggleswitch.background")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, border-color ${e("toggleswitch.transition.duration")}, outline-color ${e("toggleswitch.transition.duration")}, box-shadow ${e("toggleswitch.transition.duration")};
    border-radius: ${e("toggleswitch.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("toggleswitch.shadow")};
}

.p-toggleswitch-handle {
    position: absolute;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${e("toggleswitch.handle.background")};
    color: ${e("toggleswitch.handle.color")};
    width: ${e("toggleswitch.handle.size")};
    height: ${e("toggleswitch.handle.size")};
    inset-inline-start: ${e("toggleswitch.gap")};
    margin-block-start: calc(-1 * calc(${e("toggleswitch.handle.size")} / 2));
    border-radius: ${e("toggleswitch.handle.border.radius")};
    transition: background ${e("toggleswitch.transition.duration")}, color ${e("toggleswitch.transition.duration")}, inset-inline-start ${e("toggleswitch.slide.duration")}, box-shadow ${e("toggleswitch.slide.duration")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.background")};
    border-color: ${e("toggleswitch.checked.border.color")};
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.background")};
    color: ${e("toggleswitch.handle.checked.color")};
    inset-inline-start: calc(${e("toggleswitch.width")} - calc(${e("toggleswitch.handle.size")} + ${e("toggleswitch.gap")}));
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
    background: ${e("toggleswitch.hover.background")};
    border-color: ${e("toggleswitch.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.hover.background")};
    color: ${e("toggleswitch.handle.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
    background: ${e("toggleswitch.checked.hover.background")};
    border-color: ${e("toggleswitch.checked.hover.border.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.checked.hover.background")};
    color: ${e("toggleswitch.handle.checked.hover.color")};
}

.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
    box-shadow: ${e("toggleswitch.focus.ring.shadow")};
    outline: ${e("toggleswitch.focus.ring.width")} ${e("toggleswitch.focus.ring.style")} ${e("toggleswitch.focus.ring.color")};
    outline-offset: ${e("toggleswitch.focus.ring.offset")};
}

.p-toggleswitch.p-invalid > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}

.p-toggleswitch.p-disabled {
    opacity: 1;
}

.p-toggleswitch.p-disabled .p-toggleswitch-slider {
    background: ${e("toggleswitch.disabled.background")};
}

.p-toggleswitch.p-disabled .p-toggleswitch-handle {
    background: ${e("toggleswitch.handle.disabled.background")};
}

/* For PrimeNG */

p-toggleSwitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggle-switch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider,
p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch > .p-toggleswitch-slider {
    border-color: ${e("toggleswitch.invalid.border.color")};
}`,Av={root:{position:"relative"}},Tv={root:({instance:e})=>({"p-toggleswitch p-component":!0,"p-toggleswitch-checked":e.checked(),"p-disabled":e.disabled,"p-invalid":e.invalid}),input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},uf=(()=>{class e extends ce{name="toggleswitch";theme=Ev;classes=Tv;inlineStyles=Av;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Rv={provide:kt,useExisting:Be(()=>df),multi:!0},df=(()=>{class e extends de{style;styleClass;tabindex;inputId;name;disabled;readonly;trueValue=!0;falseValue=!1;ariaLabel;ariaLabelledBy;autofocus;onChange=new z;input;handleTemplate;_handleTemplate;modelValue=!1;focused=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=d(uf);templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"handle":this._handleTemplate=t.template;break;default:this._handleTemplate=t.template;break}})}onClick(t){!this.disabled&&!this.readonly&&(this.modelValue=this.checked()?this.falseValue:this.trueValue,this.onModelChange(this.modelValue),this.onChange.emit({originalEvent:t,checked:this.modelValue}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}writeValue(t){this.modelValue=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.modelValue===this.trueValue}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(o,n,i){if(o&1&&(se(i,_v,4),se(i,St,4)),o&2){let a;G(a=q())&&(n.handleTemplate=a.first),G(a=q())&&(n.templates=a)}},viewQuery:function(o,n){if(o&1&&Vt(Dv,5),o&2){let i;G(i=q())&&(n.input=i.first)}},inputs:{style:"style",styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",$e],inputId:"inputId",name:"name",disabled:[2,"disabled","disabled",D],readonly:[2,"readonly","readonly",D],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",D]},outputs:{onChange:"onChange"},features:[K([Rv,uf]),N],decls:6,vars:23,consts:[["input",""],[3,"click","ngClass","ngStyle"],["type","checkbox","role","switch",3,"focus","blur","ngClass","checked","disabled","pAutoFocus"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(o,n){if(o&1){let i=ke();v(0,"div",1),re("click",function(s){return V(i),U(n.onClick(s))}),v(1,"input",2,0),re("focus",function(){return V(i),U(n.onFocus())})("blur",function(){return V(i),U(n.onBlur())}),y(),v(3,"span",3)(4,"div",3),B(5,xv,1,4,"ng-container"),y()()()}o&2&&(st(n.sx("root")),Ce(n.styleClass),b("ngClass",n.cx("root"))("ngStyle",n.style),O("data-pc-name","toggleswitch")("data-pc-section","root"),C(),b("ngClass",n.cx("input"))("checked",n.checked())("disabled",n.disabled)("pAutoFocus",n.autofocus),O("id",n.inputId)("aria-checked",n.checked())("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("name",n.name)("tabindex",n.tabindex)("data-pc-section","hiddenInput"),C(2),b("ngClass",n.cx("slider")),O("data-pc-section","slider"),C(),b("ngClass",n.cx("handle")),C(),vt(n.handleTemplate||n._handleTemplate?5:-1))},dependencies:[he,Pe,dt,Ft,or,X],encapsulation:2,changeDetection:0})}return e})(),pf=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[df,X,X]})}return e})();var Iv=["input"],Mv=(e,r,t,o,n)=>({"p-radiobutton p-component":!0,"p-radiobutton-checked":e,"p-disabled":r,"p-variant-filled":t,"p-radiobutton-sm p-inputfield-sm":o,"p-radiobutton-lg p-inputfield-lg":n}),Fv=({dt:e})=>`
.p-radiobutton {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
}

.p-radiobutton-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: 50%;
}

.p-radiobutton-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${e("radiobutton.border.color")};
    background: ${e("radiobutton.background")};
    width: ${e("radiobutton.width")};
    height: ${e("radiobutton.height")};
    transition: background ${e("radiobutton.transition.duration")}, color ${e("radiobutton.transition.duration")}, border-color ${e("radiobutton.transition.duration")}, box-shadow ${e("radiobutton.transition.duration")}, outline-color ${e("radiobutton.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("radiobutton.shadow")};
}

.p-radiobutton-icon {
    transition-duration: ${e("radiobutton.transition.duration")};
    background: transparent;
    font-size: ${e("radiobutton.icon.size")};
    width: ${e("radiobutton.icon.size")};
    height: ${e("radiobutton.icon.size")};
    border-radius: 50%;
    backface-visibility: hidden;
    transform: translateZ(0) scale(0.1);
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.hover.border.color")};
}

.p-radiobutton-checked .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.border.color")};
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.color")};
    transform: translateZ(0) scale(1, 1);
    visibility: visible;
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.hover.border.color")};
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.checked.hover.color")};
}

.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.focus.border.color")};
    box-shadow: ${e("radiobutton.focus.ring.shadow")};
    outline: ${e("radiobutton.focus.ring.width")} ${e("radiobutton.focus.ring.style")} ${e("radiobutton.focus.ring.color")};
    outline-offset: ${e("radiobutton.focus.ring.offset")};
}

.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
    border-color: ${e("radiobutton.checked.focus.border.color")};
}

p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
    border-color: ${e("radiobutton.invalid.border.color")};
}

.p-radiobutton.p-variant-filled .p-radiobutton-box {
    background: ${e("radiobutton.filled.background")};
}

.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.background")};
}

.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
    background: ${e("radiobutton.checked.hover.background")};
}

.p-radiobutton.p-disabled {
    opacity: 1;
}

.p-radiobutton.p-disabled .p-radiobutton-box {
    background: ${e("radiobutton.disabled.background")};
    border-color: ${e("radiobutton.checked.disabled.border.color")};
}

.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
    background: ${e("radiobutton.icon.disabled.color")};
}

.p-radiobutton-sm,
.p-radiobutton-sm .p-radiobutton-box {
    width: ${e("radiobutton.sm.width")};
    height: ${e("radiobutton.sm.height")};
}

.p-radiobutton-sm .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.sm.size")};
    width: ${e("radiobutton.icon.sm.size")};
    height: ${e("radiobutton.icon.sm.size")};
}

.p-radiobutton-lg,
.p-radiobutton-lg .p-radiobutton-box {
    width: ${e("radiobutton.lg.width")};
    height: ${e("radiobutton.lg.height")};
}

.p-radiobutton-lg .p-radiobutton-icon {
    font-size: ${e("radiobutton.icon.lg.size")};
    width: ${e("radiobutton.icon.lg.size")};
    height: ${e("radiobutton.icon.lg.size")};
}
`,Ov={root:({instance:e,props:r})=>["p-radiobutton p-component",{"p-radiobutton-checked":e.checked,"p-disabled":r.disabled,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},ff=(()=>{class e extends ce{name="radiobutton";theme=Fv;classes=Ov;static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275prov=m({token:e,factory:e.\u0275fac})}return e})();var Bv={provide:kt,useExisting:Be(()=>Gi),multi:!0},Lv=(()=>{class e{accessors=[];add(t,o){this.accessors.push([t,o])}remove(t){this.accessors=this.accessors.filter(o=>o[1]!==t)}select(t){this.accessors.forEach(o=>{this.isSameGroup(o,t)&&o[1]!==t&&o[1].writeValue(t.value)})}isSameGroup(t,o){return t[0].control?t[0].control.root===o.control.control.root&&t[1].name===o.name:!1}static \u0275fac=function(o){return new(o||e)};static \u0275prov=m({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Gi=(()=>{class e extends de{value;formControlName;name;disabled;variant;size;tabindex;inputId;ariaLabelledBy;ariaLabel;style;styleClass;autofocus;binary;onClick=new z;onFocus=new z;onBlur=new z;inputViewChild;onModelChange=()=>{};onModelTouched=()=>{};checked;focused;control;_componentStyle=d(ff);injector=d(it);registry=d(Lv);ngOnInit(){super.ngOnInit(),this.control=this.injector.get(So),this.checkName(),this.registry.add(this.control,this)}onChange(t){this.disabled||this.select(t)}select(t){this.disabled||(this.checked=!0,this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:t,value:this.value}))}writeValue(t){this.binary?this.checked=!!t:this.checked=t==this.value,this.inputViewChild&&this.inputViewChild.nativeElement&&(this.inputViewChild.nativeElement.checked=this.checked),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onModelTouched(),this.onBlur.emit(t)}focus(){this.inputViewChild.nativeElement.focus()}ngOnDestroy(){this.registry.remove(this),super.ngOnDestroy()}checkName(){this.name&&this.formControlName&&this.name!==this.formControlName&&this.throwNameError(),!this.name&&this.formControlName&&(this.name=this.formControlName)}throwNameError(){throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `)}static \u0275fac=(()=>{let t;return function(n){return(t||(t=R(e)))(n||e)}})();static \u0275cmp=J({type:e,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(o,n){if(o&1&&Vt(Iv,5),o&2){let i;G(i=q())&&(n.inputViewChild=i.first)}},inputs:{value:"value",formControlName:"formControlName",name:"name",disabled:[2,"disabled","disabled",D],variant:"variant",size:"size",tabindex:[2,"tabindex","tabindex",$e],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",style:"style",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",D],binary:[2,"binary","binary",D]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[K([Bv,ff]),N],decls:5,vars:24,consts:[["input",""],[3,"ngStyle","ngClass"],["type","radio",1,"p-radiobutton-input",3,"focus","blur","change","checked","disabled","value","pAutoFocus"],[1,"p-radiobutton-box"],[1,"p-radiobutton-icon"]],template:function(o,n){if(o&1){let i=ke();v(0,"div",1)(1,"input",2,0),re("focus",function(s){return V(i),U(n.onInputFocus(s))})("blur",function(s){return V(i),U(n.onInputBlur(s))})("change",function(s){return V(i),U(n.onChange(s))}),y(),v(3,"div",3),fe(4,"div",4),y()()}o&2&&(Ce(n.styleClass),b("ngStyle",n.style)("ngClass",gl(18,Mv,n.checked,n.disabled,n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled",n.size==="small",n.size==="large")),O("data-pc-name","radiobutton")("data-pc-section","root"),C(),b("checked",n.checked)("disabled",n.disabled)("value",n.value)("pAutoFocus",n.autofocus),O("id",n.inputId)("name",n.name)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("tabindex",n.tabindex)("aria-checked",n.checked),C(2),O("data-pc-section","input"),C(),O("data-pc-section","icon"))},dependencies:[he,Pe,Ft,or,X],encapsulation:2,changeDetection:0})}return e})(),hf=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=W({type:e});static \u0275inj=H({imports:[Gi,X,X]})}return e})();var qi=e=>({"background-color":e}),bf=e=>({"outline-primary":e}),vf=e=>({"text-white":e}),gf=(e,r)=>r.name;function Nv(e,r){if(e&1){let t=ke();v(0,"button",10),re("click",function(){V(t);let n=_();return U(n.toggleConfigSidebar())}),fe(1,"i",11),y()}}function Pv(e,r){if(e&1){let t=ke();v(0,"button",12),re("click",function(n){let i=V(t).$implicit,a=_();return U(a.updateColors(n,"primary",i))}),y()}if(e&2){let t=r.$implicit,o=_();st(ve(4,qi,(t==null?null:t.name)==="noir"?"var(--text-color)":t==null||t.palette==null?null:t.palette[500])),b("title",t.name)("ngClass",ve(6,bf,t.name===o.selectedPrimaryColor()))}}function Vv(e,r){if(e&1){let t=ke();v(0,"button",12),re("click",function(n){let i=V(t).$implicit,a=_();return U(a.updateColors(n,"surface",i))}),y()}if(e&2){let t=r.$implicit,o=_();st(ve(4,qi,t==null||t.palette==null?null:t.palette[500])),b("title",t.name)("ngClass",ve(6,bf,o.selectedSurface()?o.selectedSurface()===t.name:o.isDarkTheme()?t.name==="zinc":t.name==="slate"))}}function Uv(e,r){e&1&&(v(0,"p"),ne(1,"Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode."),y())}function zv(e,r){if(e&1&&fe(0,"i",38),e&2){let t=_(4);b("ngClass",ve(1,vf,t.menuTheme!=="light"))}}function jv(e,r){if(e&1){let t=ke();v(0,"button",36),re("click",function(){let n=V(t).$implicit,i=_(3);return U(i.changeMenuTheme(n.name))}),B(1,zv,1,3,"i",37),y()}if(e&2){let t=r.$implicit,o=_(3);b("ngStyle",ve(2,qi,t.color)),C(),b("ngIf",o.menuTheme===t.name)}}function Hv(e,r){if(e&1&&(v(0,"div",5),co(1,jv,2,4,"button",35,ua),y()),e&2){let t=_(2);C(),uo(t.menuThemes)}}function Wv(e,r){if(e&1&&fe(0,"i",38),e&2){let t=_(3);b("ngClass",ve(1,vf,t.topbarTheme!=="light"))}}function Gv(e,r){if(e&1){let t=ke();v(0,"button",36),re("click",function(){let n=V(t).$implicit,i=_(2);return U(i.changeTopbarTheme(n.name))}),B(1,Wv,1,3,"i",37),y()}if(e&2){let t=r.$implicit,o=_(2);b("ngStyle",ve(2,qi,t.color)),C(),b("ngIf",o.topbarTheme===t.name)}}function qv(e,r){if(e&1){let t=ke();Nt(0),v(1,"div",7)(2,"span",4),ne(3,"Menu Type"),y(),v(4,"div",13)(5,"div",14)(6,"div",15)(7,"p-radio-button",16),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(8,"label",17),ne(9,"Static"),y()(),v(10,"div",15)(11,"p-radio-button",18),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(12,"label",19),ne(13,"Overlay"),y()()(),v(14,"div",14)(15,"div",15)(16,"p-radio-button",20),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(17,"label",21),ne(18,"Slim"),y()(),v(19,"div",15)(20,"p-radio-button",22),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(21,"label",23),ne(22,"Slim+"),y()()(),v(23,"div",14)(24,"div",15)(25,"p-radio-button",24),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(26,"label",25),ne(27,"Reveal"),y()(),v(28,"div",15)(29,"p-radio-button",26),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(30,"label",27),ne(31,"Drawer"),y()()(),v(32,"div",14)(33,"div",15)(34,"p-radio-button",28),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuMode,n)||(i.menuMode=n),U(n)}),y(),v(35,"label",29),ne(36,"Horizontal"),y()()()()(),v(37,"div",7)(38,"span",4),ne(39,"Menu Profile"),y(),v(40,"div",13)(41,"div",14)(42,"div",15)(43,"p-radio-button",30),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuProfilePosition,n)||(i.menuProfilePosition=n),U(n)}),y(),v(44,"label",31),ne(45,"Start"),y()(),v(46,"div",15)(47,"p-radio-button",32),et("ngModelChange",function(n){V(t);let i=_();return Je(i.menuProfilePosition,n)||(i.menuProfilePosition=n),U(n)}),y(),v(48,"label",33),ne(49,"End"),y()()()()(),v(50,"div",7)(51,"span",4),ne(52,"Menu Themes"),y(),B(53,Uv,2,0,"p",34)(54,Hv,3,0,"ng-template",null,0,Fo),y(),v(56,"div",7)(57,"span",4),ne(58,"Topbar Themes"),y(),v(59,"div",5),co(60,Gv,2,4,"button",35,ua),y()(),Pt()}if(e&2){let t=hl(55),o=_();C(7),Qe("ngModel",o.menuMode),C(4),Qe("ngModel",o.menuMode),C(5),Qe("ngModel",o.menuMode),C(4),Qe("ngModel",o.menuMode),C(5),Qe("ngModel",o.menuMode),C(4),Qe("ngModel",o.menuMode),C(5),Qe("ngModel",o.menuMode),C(9),Qe("ngModel",o.menuProfilePosition),C(4),Qe("ngModel",o.menuProfilePosition),C(6),b("ngIf",o.isDarkTheme())("ngIfElse",t),C(7),uo(o.topbarThemes)}}var mf=class e{simple=!1;router=d(je);config=d(tr);layoutService=d(Wi);primeng=d(tr);themeOptions=[{name:"Light",value:!1},{name:"Dark",value:!0}];menuThemes=[{name:"light",color:"#FDFEFF"},{name:"dark",color:"#434B54"},{name:"indigo",color:"#1A237E"},{name:"bluegrey",color:"#37474F"},{name:"brown",color:"#4E342E"},{name:"cyan",color:"#006064"},{name:"green",color:"#2E7D32"},{name:"deeppurple",color:"#4527A0"},{name:"deeporange",color:"#BF360C"},{name:"pink",color:"#880E4F"},{name:"purple",color:"#6A1B9A"},{name:"teal",color:"#00695C"}];topbarThemes=[{name:"lightblue",color:"#2E88FF"},{name:"dark",color:"#363636"},{name:"white",color:"#FDFEFF"},{name:"blue",color:"#1565C0"},{name:"deeppurple",color:"#4527A0"},{name:"purple",color:"#6A1B9A"},{name:"pink",color:"#AD1457"},{name:"cyan",color:"#0097A7"},{name:"teal",color:"#00796B"},{name:"green",color:"#43A047"},{name:"lightgreen",color:"#689F38"},{name:"lime",color:"#AFB42B"},{name:"yellow",color:"#FBC02D"},{name:"amber",color:"#FFA000"},{name:"orange",color:"#FB8C00"},{name:"deeporange",color:"#D84315"},{name:"brown",color:"#5D4037"},{name:"grey",color:"#616161"},{name:"bluegrey",color:"#546E7A"},{name:"indigo",color:"#3F51B5"}];surfaces=[{name:"slate",palette:{0:"#ffffff",50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a",950:"#020617"}},{name:"gray",palette:{0:"#ffffff",50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827",950:"#030712"}},{name:"zinc",palette:{0:"#ffffff",50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b",950:"#09090b"}},{name:"neutral",palette:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0a0a0a"}},{name:"stone",palette:{0:"#ffffff",50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917",950:"#0c0a09"}},{name:"soho",palette:{0:"#ffffff",50:"#ececec",100:"#dedfdf",200:"#c4c4c6",300:"#adaeb0",400:"#97979b",500:"#7f8084",600:"#6a6b70",700:"#55565b",800:"#3f4046",900:"#2c2c34",950:"#16161d"}},{name:"viva",palette:{0:"#ffffff",50:"#f3f3f3",100:"#e7e7e8",200:"#cfd0d0",300:"#b7b8b9",400:"#9fa1a1",500:"#87898a",600:"#6e7173",700:"#565a5b",800:"#3e4244",900:"#262b2c",950:"#0e1315"}},{name:"ocean",palette:{0:"#ffffff",50:"#fbfcfc",100:"#F7F9F8",200:"#EFF3F2",300:"#DADEDD",400:"#B1B7B6",500:"#828787",600:"#5F7274",700:"#415B61",800:"#29444E",900:"#183240",950:"#0c1920"}}];selectedPrimaryColor=ue(()=>this.layoutService.layoutConfig().primary);get menuMode(){return this.layoutService.layoutConfig().menuMode}set menuMode(r){this.layoutService.layoutConfig.update(t=>T(f({},t),{menuMode:r}))}get menuTheme(){return this.layoutService.layoutConfig().menuTheme}set menuTheme(r){this.layoutService.layoutConfig.update(t=>T(f({},t),{menuTheme:r}))}get topbarTheme(){return this.layoutService.layoutConfig().topbarTheme}set topbarTheme(r){this.layoutService.layoutConfig.update(t=>T(f({},t),{topbarTheme:r}))}get menuProfilePosition(){return this.layoutService.layoutConfig().menuProfilePosition}set menuProfilePosition(r){this.layoutService.layoutConfig.update(t=>T(f({},t),{menuProfilePosition:r}))}get darkTheme(){return this.layoutService.layoutConfig().darkTheme}set darkTheme(r){this.layoutService.layoutConfig.update(t=>T(f({},t),{menuTheme:r?"dark":"light",darkTheme:r}))}get visible(){return this.layoutService.layoutState().configSidebarVisible}set visible(r){this.layoutService.layoutState.update(t=>T(f({},t),{configSidebarVisible:r}))}isDarkTheme=ue(()=>this.layoutService.layoutConfig().darkTheme);selectedSurface=ue(()=>this.layoutService.layoutConfig().surface);primaryColors=ue(()=>{let r=ef.primitive,t=["emerald","green","lime","orange","amber","yellow","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose"],o=[{name:"noir",palette:{}}];return t.forEach(n=>{o.push({name:n,palette:r?.[n]})}),o});onLayoutThemeChange(r){this.layoutService.layoutConfig.update(t=>T(f({},t),{layoutTheme:r}))}getPresetExt(){let r=this.primaryColors().find(t=>t.name===this.selectedPrimaryColor())||{};return r.name==="noir"?{semantic:{primary:{50:"{surface.50}",100:"{surface.100}",200:"{surface.200}",300:"{surface.300}",400:"{surface.400}",500:"{surface.500}",600:"{surface.600}",700:"{surface.700}",800:"{surface.800}",900:"{surface.900}",950:"{surface.950}"},colorScheme:{light:{primary:{color:"{primary.950}",contrastColor:"#ffffff",hoverColor:"{primary.800}",activeColor:"{primary.700}"},highlight:{background:"{primary.950}",focusBackground:"{primary.700}",color:"#ffffff",focusColor:"#ffffff"}},dark:{primary:{color:"{primary.50}",contrastColor:"{primary.950}",hoverColor:"{primary.200}",activeColor:"{primary.300}"},highlight:{background:"{primary.50}",focusBackground:"{primary.300}",color:"{primary.950}",focusColor:"{primary.950}"}}}}}:{semantic:{primary:r.palette,colorScheme:{light:{primary:{color:"{primary.500}",contrastColor:"#ffffff",hoverColor:"{primary.600}",activeColor:"{primary.700}"},highlight:{background:"{primary.50}",focusBackground:"{primary.100}",color:"{primary.700}",focusColor:"{primary.800}"}},dark:{primary:{color:"{primary.400}",contrastColor:"{surface.900}",hoverColor:"{primary.300}",activeColor:"{primary.200}"},highlight:{background:"color-mix(in srgb, {primary.400}, transparent 84%)",focusBackground:"color-mix(in srgb, {primary.400}, transparent 76%)",color:"rgba(255,255,255,.87)",focusColor:"rgba(255,255,255,.87)"}}}}}}updateColors(r,t,o){t==="primary"?this.layoutService.layoutConfig.update(n=>T(f({},n),{primary:o.name})):t==="surface"&&this.layoutService.layoutConfig.update(n=>T(f({},n),{surface:o.name})),this.applyTheme(t,o),r.stopPropagation()}applyTheme(r,t){r==="primary"?Nu(this.getPresetExt()):r==="surface"&&Pu(t.palette)}changeMenuTheme(r){this.menuTheme=r}changeTopbarTheme(r){this.topbarTheme=r}toggleConfigSidebar(){this.layoutService.layoutState.update(r=>T(f({},r),{configSidebarVisible:!r.configSidebarVisible}))}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=J({type:e,selectors:[["app-configurator"]],inputs:{simple:[2,"simple","simple",D]},decls:20,vars:7,consts:[["menu_theme_selector",""],["class","layout-config-button config-link","type","button",3,"click",4,"ngIf"],["position","right","styleClass","layout-config-sidebar w-80","header","Settings",3,"visibleChange","onHide","visible","transitionOptions"],[1,"flex","flex-col","gap-4"],[1,"text-lg","font-semibold"],[1,"pt-2","flex","gap-2","flex-wrap"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1",3,"title","ngClass","style"],[1,"flex","flex-col","gap-2"],["optionLabel","name","optionValue","value",3,"ngModelChange","ngModel","options","allowEmpty"],[4,"ngIf"],["type","button",1,"layout-config-button","config-link",3,"click"],[1,"pi","pi-cog"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1",3,"click","title","ngClass"],[1,"flex","flex-wrap","flex-col","gap-3"],[1,"flex"],[1,"flex","items-center","gap-2","w-1/2"],["name","menuMode","value","static",3,"ngModelChange","ngModel"],["for","static"],["name","menuMode","value","overlay",3,"ngModelChange","ngModel"],["for","overlay"],["name","menuMode","value","slim",3,"ngModelChange","ngModel"],["for","slim"],["name","menuMode","value","slim-plus","inputId","slim-plus",3,"ngModelChange","ngModel"],["for","slim-plus"],["name","menuMode","value","reveal",3,"ngModelChange","ngModel"],["for","reveal"],["name","menuMode","value","drawer","inputId","drawer",3,"ngModelChange","ngModel"],["for","drawer"],["name","menuMode","value","horizontal",3,"ngModelChange","ngModel"],["for","horizontal"],["name","menuProfilePosition","value","start",3,"ngModelChange","ngModel"],["for","start"],["name","menuProfilePosition","value","end",3,"ngModelChange","ngModel"],["for","end"],[4,"ngIf","ngIfElse"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1","shadow",3,"ngStyle"],["type","button",1,"cursor-pointer","w-6","h-6","rounded-full","flex","flex-shrink-0","items-center","justify-center","p-0","outline-none","outline-offset-1","shadow",3,"click","ngStyle"],["class","pi pi-check text-lg",3,"ngClass",4,"ngIf"],[1,"pi","pi-check","text-lg",3,"ngClass"]],template:function(t,o){t&1&&(B(0,Nv,2,0,"button",1),v(1,"p-drawer",2),et("visibleChange",function(i){return Je(o.visible,i)||(o.visible=i),i}),re("onHide",function(){return o.layoutService.hideConfigSidebar()}),v(2,"div",3)(3,"div")(4,"span",4),ne(5,"Primary"),y(),v(6,"div",5),co(7,Pv,1,8,"button",6,gf),y()(),v(9,"div")(10,"span",4),ne(11,"Surface"),y(),v(12,"div",5),co(13,Vv,1,8,"button",6,gf),y()(),v(15,"div",7)(16,"span",4),ne(17,"Color Scheme"),y(),v(18,"p-selectbutton",8),et("ngModelChange",function(i){return Je(o.darkTheme,i)||(o.darkTheme=i),i}),y()(),B(19,qv,62,11,"ng-container",9),y()()),t&2&&(b("ngIf",o.simple),C(),Qe("visible",o.visible),b("transitionOptions",".3s cubic-bezier(0, 0, 0.2, 1)"),C(6),uo(o.primaryColors()),C(6),uo(o.surfaces),C(5),Qe("ngModel",o.darkTheme),b("options",o.themeOptions)("allowEmpty",!1),C(),b("ngIf",!o.simple))},dependencies:[he,Pe,po,Ft,zi,Vi,tn,nf,Hi,cf,Rs,pf,hf,Gi],encapsulation:2})};export{Y as a,Pe as b,zl as c,po as d,Ft as e,dt as f,eh as g,oh as h,rh as i,he as j,wr as k,Ra as l,Ch as m,ho as n,uc as o,Yh as p,Kh as q,Xh as r,ze as s,Dt as t,es as u,je as v,Di as w,Em as x,Tm as y,Rm as z,su as A,Im as B,Mm as C,hu as D,ft as E,gu as F,_o as G,mu as H,vu as I,Pm as J,Vm as K,A_ as L,T_ as M,yu as N,R_ as O,Cu as P,I_ as Q,M_ as R,Um as S,Zo as T,F_ as U,wu as V,O_ as W,ps as X,B_ as Y,L_ as Z,Du as _,fs as $,$_ as aa,N_ as ba,P_ as ca,hs as da,V_ as ea,U_ as fa,z_ as ga,j_ as ha,H_ as ia,W_ as ja,ki as ka,Ae as la,qm as ma,Tu as na,te as oa,Xt as pa,Qt as qa,K_ as ra,Z_ as sa,X_ as ta,nt as ua,Q_ as va,J_ as wa,Kr as xa,Km as ya,g1 as za,we as Aa,m1 as Ba,b1 as Ca,v1 as Da,y1 as Ea,C1 as Fa,w1 as Ga,St as Ha,X as Ia,_1 as Ja,k1 as Ka,M1 as La,ce as Ma,oD as Na,ef as Oa,Wi as Pa,de as Qa,ys as Ra,ju as Sa,or as Ta,FD as Ua,Cs as Va,Wu as Wa,Mi as Xa,Gu as Ya,qu as Za,Ii as _a,SD as $a,TS as ab,ws as bb,RS as cb,kt as db,ad as eb,So as fb,Vi as gb,YS as hb,fb as ib,tn as jb,ZS as kb,vb as lb,zi as mb,af as nb,yT as ob,on as pb,OA as qb,nf as rb,Rs as sb,cf as tb,hf as ub,mf as vb};
