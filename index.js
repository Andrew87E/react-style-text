!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define("react-style-text",["React"],e):"object"==typeof exports?exports["react-style-text"]=e(require("react")):t["react-style-text"]=e(t.React)}(global,(t=>(()=>{var e={774:t=>{t.exports=function(t,e,r,n){var o=r?r.call(n,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var a=Object.keys(t),s=Object.keys(e);if(a.length!==s.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(e),c=0;c<a.length;c++){var f=a[c];if(!i(f))return!1;var l=t[f],u=e[f];if(!1===(o=r?r.call(n,l,u,f):void 0)||void 0===o&&l!==u)return!1}return!0}},408:(t,e,r)=>{"use strict";r.r(e),r.d(e,{ServerStyleSheet:()=>or,StyleSheetConsumer:()=>Ce,StyleSheetContext:()=>_e,StyleSheetManager:()=>Ee,ThemeConsumer:()=>Be,ThemeContext:()=>ze,ThemeProvider:()=>Le,__PRIVATE__:()=>ar,createGlobalStyle:()=>tr,css:()=>Ve,default:()=>Ke,isStyledComponent:()=>Ut,keyframes:()=>er,styled:()=>Ke,useTheme:()=>Ge,version:()=>ut,withTheme:()=>rr});var n=function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};function o(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var a=r(639),s=r.n(a),i=r(774),c=r.n(i),f="-ms-",l="-moz-",u="-webkit-",p="comm",m="rule",d="decl",h="@import",y="@keyframes",g="@layer",v=Math.abs,b=String.fromCharCode,S=Object.assign;function x(t){return t.trim()}function w(t,e){return(t=e.exec(t))?t[0]:t}function k(t,e,r){return t.replace(e,r)}function O(t,e){return t.indexOf(e)}function P(t,e){return 0|t.charCodeAt(e)}function I(t,e,r){return t.slice(e,r)}function _(t){return t.length}function C(t){return t.length}function j(t,e){return e.push(t),t}function T(t,e){return t.filter((function(t){return!w(t,e)}))}var E=1,$=1,A=0,R=0,X=0,Y="";function N(t,e,r,n,o,a,s,i){return{value:t,root:e,parent:r,type:n,props:o,children:a,line:E,column:$,length:s,return:"",siblings:i}}function D(t,e){return S(N("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function F(t){for(;t.root;)t=D(t.root,{children:[t]});j(t,t.siblings)}function M(){return X=R>0?P(Y,--R):0,$--,10===X&&($=1,E--),X}function z(){return X=R<A?P(Y,R++):0,$++,10===X&&($=1,E++),X}function B(){return P(Y,R)}function G(){return R}function L(t,e){return I(Y,t,e)}function W(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z(t){return x(L(R-1,V(91===t?t+2:40===t?t+1:t)))}function q(t){for(;(X=B())&&X<33;)z();return W(t)>2||W(X)>3?"":" "}function H(t,e){for(;--e&&z()&&!(X<48||X>102||X>57&&X<65||X>70&&X<97););return L(t,G()+(e<6&&32==B()&&32==z()))}function V(t){for(;z();)switch(X){case t:return R;case 34:case 39:34!==t&&39!==t&&V(X);break;case 40:41===t&&V(t);break;case 92:z()}return R}function U(t,e){for(;z()&&t+X!==57&&(t+X!==84||47!==B()););return"/*"+L(e,R-1)+"*"+b(47===t?t:z())}function J(t){for(;!W(B());)z();return L(t,R)}function K(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function Q(t,e,r,n){switch(t.type){case g:if(t.children.length)break;case h:case d:return t.return=t.return||t.value;case p:return"";case y:return t.return=t.value+"{"+K(t.children,n)+"}";case m:if(!_(t.value=t.props.join(",")))return""}return _(r=K(t.children,n))?t.return=t.value+"{"+r+"}":""}function tt(t,e,r){switch(function(t,e){return 45^P(t,0)?(((e<<2^P(t,0))<<2^P(t,1))<<2^P(t,2))<<2^P(t,3):0}(t,e)){case 5103:return u+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return u+t+t;case 4789:return l+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return u+t+l+t+f+t+t;case 5936:switch(P(t,e+11)){case 114:return u+t+f+k(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return u+t+f+k(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return u+t+f+k(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return u+t+f+t+t;case 6165:return u+t+f+"flex-"+t+t;case 5187:return u+t+k(t,/(\w+).+(:[^]+)/,u+"box-$1$2"+f+"flex-$1$2")+t;case 5443:return u+t+f+"flex-item-"+k(t,/flex-|-self/g,"")+(w(t,/flex-|baseline/)?"":f+"grid-row-"+k(t,/flex-|-self/g,""))+t;case 4675:return u+t+f+"flex-line-pack"+k(t,/align-content|flex-|-self/g,"")+t;case 5548:return u+t+f+k(t,"shrink","negative")+t;case 5292:return u+t+f+k(t,"basis","preferred-size")+t;case 6060:return u+"box-"+k(t,"-grow","")+u+t+f+k(t,"grow","positive")+t;case 4554:return u+k(t,/([^-])(transform)/g,"$1"+u+"$2")+t;case 6187:return k(k(k(t,/(zoom-|grab)/,u+"$1"),/(image-set)/,u+"$1"),t,"")+t;case 5495:case 3959:return k(t,/(image-set\([^]*)/,u+"$1$`$1");case 4968:return k(k(t,/(.+:)(flex-)?(.*)/,u+"box-pack:$3"+f+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+u+t+t;case 4200:if(!w(t,/flex-|baseline/))return f+"grid-column-align"+I(t,e)+t;break;case 2592:case 3360:return f+k(t,"template-","")+t;case 4384:case 3616:return r&&r.some((function(t,r){return e=r,w(t.props,/grid-\w+-end/)}))?~O(t+(r=r[e].value),"span")?t:f+k(t,"-start","")+t+f+"grid-row-span:"+(~O(r,"span")?w(r,/\d+/):+w(r,/\d+/)-+w(t,/\d+/))+";":f+k(t,"-start","")+t;case 4896:case 4128:return r&&r.some((function(t){return w(t.props,/grid-\w+-start/)}))?t:f+k(k(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return k(t,/(.+)-inline(.+)/,u+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(t)-1-e>6)switch(P(t,e+1)){case 109:if(45!==P(t,e+4))break;case 102:return k(t,/(.+:)(.+)-([^]+)/,"$1"+u+"$2-$3$1"+l+(108==P(t,e+3)?"$3":"$2-$3"))+t;case 115:return~O(t,"stretch")?tt(k(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return k(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(e,r,n,o,a,s,i){return f+r+":"+n+i+(o?f+r+"-span:"+(a?s:+s-+n)+i:"")+t}));case 4949:if(121===P(t,e+6))return k(t,":",":"+u)+t;break;case 6444:switch(P(t,45===P(t,14)?18:11)){case 120:return k(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+u+(45===P(t,14)?"inline-":"")+"box$3$1"+u+"$2$3$1"+f+"$2box$3")+t;case 100:return k(t,":",":"+f)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return k(t,"scroll-","scroll-snap-")+t}return t}function et(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case d:return void(t.return=tt(t.value,t.length,r));case y:return K([D(t,{value:k(t.value,"@","@"+u)})],n);case m:if(t.length)return function(t,e){return t.map(e).join("")}(r=t.props,(function(e){switch(w(e,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(D(t,{props:[k(e,/:(read-\w+)/,":"+l+"$1")]})),F(D(t,{props:[e]})),S(t,{props:T(r,n)});break;case"::placeholder":F(D(t,{props:[k(e,/:(plac\w+)/,":"+u+"input-$1")]})),F(D(t,{props:[k(e,/:(plac\w+)/,":"+l+"$1")]})),F(D(t,{props:[k(e,/:(plac\w+)/,f+"input-$1")]})),F(D(t,{props:[e]})),S(t,{props:T(r,n)})}return""}))}}function rt(t){return function(t){return Y="",t}(nt("",null,null,null,[""],t=function(t){return E=$=1,A=_(Y=t),R=0,[]}(t),0,[0],t))}function nt(t,e,r,n,o,a,s,i,c){for(var f=0,l=0,u=s,p=0,m=0,d=0,h=1,y=1,g=1,v=0,S="",x=o,w=a,I=n,C=S;y;)switch(d=v,v=z()){case 40:if(108!=d&&58==P(C,u-1)){-1!=O(C+=k(Z(v),"&","&\f"),"&\f")&&(g=-1);break}case 34:case 39:case 91:C+=Z(v);break;case 9:case 10:case 13:case 32:C+=q(d);break;case 92:C+=H(G()-1,7);continue;case 47:switch(B()){case 42:case 47:j(at(U(z(),G()),e,r,c),c);break;default:C+="/"}break;case 123*h:i[f++]=_(C)*g;case 125*h:case 59:case 0:switch(v){case 0:case 125:y=0;case 59+l:-1==g&&(C=k(C,/\f/g,"")),m>0&&_(C)-u&&j(m>32?st(C+";",n,r,u-1,c):st(k(C," ","")+";",n,r,u-2,c),c);break;case 59:C+=";";default:if(j(I=ot(C,e,r,f,l,o,i,S,x=[],w=[],u,a),a),123===v)if(0===l)nt(C,e,I,I,x,a,u,i,w);else switch(99===p&&110===P(C,3)?100:p){case 100:case 108:case 109:case 115:nt(t,I,I,n&&j(ot(t,I,I,0,0,o,i,S,o,x=[],u,w),w),o,w,u,i,n?x:w);break;default:nt(C,I,I,I,[""],w,0,i,w)}}f=l=m=0,h=g=1,S=C="",u=s;break;case 58:u=1+_(C),m=d;default:if(h<1)if(123==v)--h;else if(125==v&&0==h++&&125==M())continue;switch(C+=b(v),v*h){case 38:g=l>0?1:(C+="\f",-1);break;case 44:i[f++]=(_(C)-1)*g,g=1;break;case 64:45===B()&&(C+=Z(z())),p=B(),l=u=_(S=C+=J(G())),v++;break;case 45:45===d&&2==_(C)&&(h=0)}}return a}function ot(t,e,r,n,o,a,s,i,c,f,l,u){for(var p=o-1,d=0===o?a:[""],h=C(d),y=0,g=0,b=0;y<n;++y)for(var S=0,w=I(t,p+1,p=v(g=s[y])),O=t;S<h;++S)(O=x(g>0?d[S]+" "+w:k(w,/&\f/g,d[S])))&&(c[b++]=O);return N(t,e,r,0===o?m:i,c,f,l,u)}function at(t,e,r,n){return N(t,e,r,p,b(X),I(t,2,-2),0,n)}function st(t,e,r,n,o){return N(t,e,r,d,I(t,0,n),I(t,n+1,-1),n,o)}var it={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ft="active",lt="data-styled-version",ut="6.1.2",pt="/*!sc*/\n",mt="undefined"!=typeof window&&"HTMLElement"in window,dt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),ht={},yt=(new Set,Object.freeze([])),gt=Object.freeze({});function vt(t,e,r){return void 0===r&&(r=gt),t.theme!==r.theme&&t.theme||e||r.theme}var bt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),St=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,xt=/(^-|-$)/g;function wt(t){return t.replace(St,"-").replace(xt,"")}var kt=/(a)(d)/gi,Ot=52,Pt=function(t){return String.fromCharCode(t+(t>25?39:97))};function It(t){var e,r="";for(e=Math.abs(t);e>Ot;e=e/Ot|0)r=Pt(e%Ot)+r;return(Pt(e%Ot)+r).replace(kt,"$1-$2")}var _t,Ct=5381,jt=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},Tt=function(t){return jt(Ct,t)};function Et(t){return It(Tt(t)>>>0)}function $t(t){return t.displayName||t.name||"Component"}function At(t){return"string"==typeof t&&!0}var Rt="function"==typeof Symbol&&Symbol.for,Xt=Rt?Symbol.for("react.memo"):60115,Yt=Rt?Symbol.for("react.forward_ref"):60112,Nt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Dt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ft={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Mt=((_t={})[Yt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_t[Xt]=Ft,_t);function zt(t){return("type"in(e=t)&&e.type.$$typeof)===Xt?Ft:"$$typeof"in t?Mt[t.$$typeof]:Nt;var e}var Bt=Object.defineProperty,Gt=Object.getOwnPropertyNames,Lt=Object.getOwnPropertySymbols,Wt=Object.getOwnPropertyDescriptor,Zt=Object.getPrototypeOf,qt=Object.prototype;function Ht(t,e,r){if("string"!=typeof e){if(qt){var n=Zt(e);n&&n!==qt&&Ht(t,n,r)}var o=Gt(e);Lt&&(o=o.concat(Lt(e)));for(var a=zt(t),s=zt(e),i=0;i<o.length;++i){var c=o[i];if(!(c in Dt||r&&r[c]||s&&c in s||a&&c in a)){var f=Wt(e,c);try{Bt(t,c,f)}catch(t){}}}}return t}function Vt(t){return"function"==typeof t}function Ut(t){return"object"==typeof t&&"styledComponentId"in t}function Jt(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Kt(t,e){if(0===t.length)return"";for(var r=t[0],n=1;n<t.length;n++)r+=e?e+t[n]:t[n];return r}function Qt(t){return null!==t&&"object"==typeof t&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function te(t,e,r){if(void 0===r&&(r=!1),!r&&!Qt(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=te(t[n],e[n]);else if(Qt(e))for(var n in e)t[n]=te(t[n],e[n]);return t}function ee(t,e){Object.defineProperty(t,"toString",{value:e})}function re(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ne=function(){function t(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return t.prototype.indexOfGroup=function(t){for(var e=0,r=0;r<t;r++)e+=this.groupSizes[r];return e},t.prototype.insertRules=function(t,e){if(t>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;t>=o;)if((o<<=1)<0)throw re(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),i=(a=0,e.length);a<i;a++)this.tag.insertRule(s,e[a])&&(this.groupSizes[t]++,s++)},t.prototype.clearGroup=function(t){if(t<this.length){var e=this.groupSizes[t],r=this.indexOfGroup(t),n=r+e;this.groupSizes[t]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(t){var e="";if(t>=this.length||0===this.groupSizes[t])return e;for(var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r,a=n;a<o;a++)e+="".concat(this.tag.getRule(a)).concat(pt);return e},t}(),oe=new Map,ae=new Map,se=1,ie=function(t){if(oe.has(t))return oe.get(t);for(;ae.has(se);)se++;var e=se++;return oe.set(t,e),ae.set(e,t),e},ce=function(t,e){se=e+1,oe.set(t,e),ae.set(e,t)},fe="style[".concat(ct,"][").concat(lt,'="').concat(ut,'"]'),le=new RegExp("^".concat(ct,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ue=function(t,e,r){for(var n,o=r.split(","),a=0,s=o.length;a<s;a++)(n=o[a])&&t.registerName(e,n)},pe=function(t,e){for(var r,n=(null!==(r=e.textContent)&&void 0!==r?r:"").split(pt),o=[],a=0,s=n.length;a<s;a++){var i=n[a].trim();if(i){var c=i.match(le);if(c){var f=0|parseInt(c[1],10),l=c[2];0!==f&&(ce(l,f),ue(t,l,c[3]),t.getTag().insertRules(f,o)),o.length=0}else o.push(i)}}};function me(){return r.nc}var de=function(t){var e=document.head,r=t||e,n=document.createElement("style"),o=function(t){var e=Array.from(t.querySelectorAll("style[".concat(ct,"]")));return e[e.length-1]}(r),a=void 0!==o?o.nextSibling:null;n.setAttribute(ct,ft),n.setAttribute(lt,ut);var s=me();return s&&n.setAttribute("nonce",s),r.insertBefore(n,a),n},he=function(){function t(t){this.element=de(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var e=document.styleSheets,r=0,n=e.length;r<n;r++){var o=e[r];if(o.ownerNode===t)return o}throw re(17)}(this.element),this.length=0}return t.prototype.insertRule=function(t,e){try{return this.sheet.insertRule(e,t),this.length++,!0}catch(t){return!1}},t.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},t.prototype.getRule=function(t){var e=this.sheet.cssRules[t];return e&&e.cssText?e.cssText:""},t}(),ye=function(){function t(t){this.element=de(t),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(t,e){if(t<=this.length&&t>=0){var r=document.createTextNode(e);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},t.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},t}(),ge=function(){function t(t){this.rules=[],this.length=0}return t.prototype.insertRule=function(t,e){return t<=this.length&&(this.rules.splice(t,0,e),this.length++,!0)},t.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},t.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},t}(),ve=mt,be={isServer:!mt,useCSSOMInjection:!dt},Se=function(){function t(t,e,r){void 0===t&&(t=gt),void 0===e&&(e={});var o=this;this.options=n(n({},be),t),this.gs=e,this.names=new Map(r),this.server=!!t.isServer,!this.server&&mt&&ve&&(ve=!1,function(t){for(var e=document.querySelectorAll(fe),r=0,n=e.length;r<n;r++){var o=e[r];o&&o.getAttribute(ct)!==ft&&(pe(t,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),ee(this,(function(){return function(t){for(var e=t.getTag(),r=e.length,n="",o=function(r){var o=function(t){return ae.get(t)}(r);if(void 0===o)return"continue";var a=t.names.get(o),s=e.getGroup(r);if(void 0===a||0===s.length)return"continue";var i="".concat(ct,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==a&&a.forEach((function(t){t.length>0&&(c+="".concat(t,","))})),n+="".concat(s).concat(i,'{content:"').concat(c,'"}').concat(pt)},a=0;a<r;a++)o(a);return n}(o)}))}return t.registerId=function(t){return ie(t)},t.prototype.reconstructWithOptions=function(e,r){return void 0===r&&(r=!0),new t(n(n({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(t=function(t){var e=t.useCSSOMInjection,r=t.target;return t.isServer?new ge(r):e?new he(r):new ye(r)}(this.options),new ne(t)));var t},t.prototype.hasNameForId=function(t,e){return this.names.has(t)&&this.names.get(t).has(e)},t.prototype.registerName=function(t,e){if(ie(t),this.names.has(t))this.names.get(t).add(e);else{var r=new Set;r.add(e),this.names.set(t,r)}},t.prototype.insertRules=function(t,e,r){this.registerName(t,e),this.getTag().insertRules(ie(t),r)},t.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},t.prototype.clearRules=function(t){this.getTag().clearGroup(ie(t)),this.clearNames(t)},t.prototype.clearTag=function(){this.tag=void 0},t}(),xe=/&/g,we=/^\s*\/\/.*$/gm;function ke(t,e){return t.map((function(t){return"rule"===t.type&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map((function(t){return"".concat(e," ").concat(t)}))),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=ke(t.children,e)),t}))}function Oe(t){var e,r,n,o=void 0===t?gt:t,a=o.options,s=void 0===a?gt:a,i=o.plugins,c=void 0===i?yt:i,f=function(t,n,o){return o===r||o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(e):t},l=c.slice();l.push((function(t){t.type===m&&t.value.includes("&")&&(t.props[0]=t.props[0].replace(xe,r).replace(n,f))})),s.prefix&&l.push(et),l.push(Q);var u=function(t,o,a,i){void 0===o&&(o=""),void 0===a&&(a=""),void 0===i&&(i="&"),e=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=t.replace(we,""),f=rt(a||o?"".concat(a," ").concat(o," { ").concat(c," }"):c);s.namespace&&(f=ke(f,s.namespace));var u,p,m,d=[];return K(f,(u=l.concat((m=function(t){return d.push(t)},function(t){t.root||(t=t.return)&&m(t)})),p=C(u),function(t,e,r,n){for(var o="",a=0;a<p;a++)o+=u[a](t,e,r,n)||"";return o})),d};return u.hash=c.length?c.reduce((function(t,e){return e.name||re(15),jt(t,e.name)}),Ct).toString():"",u}var Pe=new Se,Ie=Oe(),_e=s().createContext({shouldForwardProp:void 0,styleSheet:Pe,stylis:Ie}),Ce=_e.Consumer,je=s().createContext(void 0);function Te(){return(0,a.useContext)(_e)}function Ee(t){var e=(0,a.useState)(t.stylisPlugins),r=e[0],n=e[1],o=Te().styleSheet,i=(0,a.useMemo)((function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,o]),f=(0,a.useMemo)((function(){return Oe({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,a.useEffect)((function(){c()(r,t.stylisPlugins)||n(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,a.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:i,stylis:f}}),[t.shouldForwardProp,i,f]);return s().createElement(_e.Provider,{value:l},s().createElement(je.Provider,{value:f},t.children))}var $e=function(){function t(t,e){var r=this;this.inject=function(t,e){void 0===e&&(e=Ie);var n=r.name+e.hash;t.hasNameForId(r.id,n)||t.insertRules(r.id,n,e(r.rules,n,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=e,ee(this,(function(){throw re(12,String(r.name))}))}return t.prototype.getName=function(t){return void 0===t&&(t=Ie),this.name+t.hash},t}(),Ae=function(t){return t>="A"&&t<="Z"};function Re(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(1===r&&"-"===n&&"-"===t[0])return t;Ae(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var Xe=function(t){return null==t||!1===t||""===t},Ye=function(t){var e,r,n=[];for(var a in t){var s=t[a];t.hasOwnProperty(a)&&!Xe(s)&&(Array.isArray(s)&&s.isCss||Vt(s)?n.push("".concat(Re(a),":"),s,";"):Qt(s)?n.push.apply(n,o(o(["".concat(a," {")],Ye(s),!1),["}"],!1)):n.push("".concat(Re(a),": ").concat((e=a,null==(r=s)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||e in it||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Ne(t,e,r,n){return Xe(t)?[]:Ut(t)?[".".concat(t.styledComponentId)]:Vt(t)?!Vt(o=t)||o.prototype&&o.prototype.isReactComponent||!e?[t]:Ne(t(e),e,r,n):t instanceof $e?r?(t.inject(r,n),[t.getName(n)]):[t]:Qt(t)?Ye(t):Array.isArray(t)?Array.prototype.concat.apply(yt,t.map((function(t){return Ne(t,e,r,n)}))):[t.toString()];var o}function De(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Vt(r)&&!Ut(r))return!1}return!0}var Fe=Tt(ut),Me=function(){function t(t,e,r){this.rules=t,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&De(t),this.componentId=e,this.baseHash=jt(Fe,e),this.baseStyle=r,Se.registerId(e)}return t.prototype.generateAndInjectStyles=function(t,e,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,e,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&e.hasNameForId(this.componentId,this.staticRulesId))n=Jt(n,this.staticRulesId);else{var o=Kt(Ne(this.rules,t,e,r)),a=It(jt(this.baseHash,o)>>>0);if(!e.hasNameForId(this.componentId,a)){var s=r(o,".".concat(a),void 0,this.componentId);e.insertRules(this.componentId,a,s)}n=Jt(n,a),this.staticRulesId=a}else{for(var i=jt(this.baseHash,r.hash),c="",f=0;f<this.rules.length;f++){var l=this.rules[f];if("string"==typeof l)c+=l;else if(l){var u=Kt(Ne(l,t,e,r));i=jt(i,u+f),c+=u}}if(c){var p=It(i>>>0);e.hasNameForId(this.componentId,p)||e.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=Jt(n,p)}}return n},t}(),ze=s().createContext(void 0),Be=ze.Consumer;function Ge(){var t=(0,a.useContext)(ze);if(!t)throw re(18);return t}function Le(t){var e=s().useContext(ze),r=(0,a.useMemo)((function(){return function(t,e){if(!t)throw re(14);if(Vt(t))return t(e);if(Array.isArray(t)||"object"!=typeof t)throw re(8);return e?n(n({},e),t):t}(t.theme,e)}),[t.theme,e]);return t.children?s().createElement(ze.Provider,{value:r},t.children):null}var We={};function Ze(t,e,r){var o=Ut(t),i=t,c=!At(t),f=e.attrs,l=void 0===f?yt:f,u=e.componentId,p=void 0===u?function(t,e){var r="string"!=typeof t?"sc":wt(t);We[r]=(We[r]||0)+1;var n="".concat(r,"-").concat(Et(ut+r+We[r]));return e?"".concat(e,"-").concat(n):n}(e.displayName,e.parentComponentId):u,m=e.displayName,d=void 0===m?function(t){return At(t)?"styled.".concat(t):"Styled(".concat($t(t),")")}(t):m,h=e.displayName&&e.componentId?"".concat(wt(e.displayName),"-").concat(e.componentId):e.componentId||p,y=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=e.shouldForwardProp;if(o&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var b=e.shouldForwardProp;g=function(t,e){return v(t,e)&&b(t,e)}}else g=v}var S=new Me(r,h,o?i.componentStyle:void 0);function x(t,e){return function(t,e,r){var o=t.attrs,i=t.componentStyle,c=t.defaultProps,f=t.foldedComponentIds,l=t.styledComponentId,u=t.target,p=s().useContext(ze),m=Te(),d=t.shouldForwardProp||m.shouldForwardProp,h=function(t,e,r){for(var o,a=n(n({},e),{className:void 0,theme:r}),s=0;s<t.length;s+=1){var i=Vt(o=t[s])?o(a):o;for(var c in i)a[c]="className"===c?Jt(a[c],i[c]):"style"===c?n(n({},a[c]),i[c]):i[c]}return e.className&&(a.className=Jt(a.className,e.className)),a}(o,e,vt(e,p,c)||gt),y=h.as||u,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v||("forwardedAs"===v?g.as=h.forwardedAs:d&&!d(v,y)||(g[v]=h[v]));var b=function(t,e){var r=Te();return t.generateAndInjectStyles(e,r.styleSheet,r.stylis)}(i,h),S=Jt(f,l);return b&&(S+=" "+b),h.className&&(S+=" "+h.className),g[At(y)&&!bt.has(y)?"class":"className"]=S,g.ref=r,(0,a.createElement)(y,g)}(w,t,e)}x.displayName=d;var w=s().forwardRef(x);return w.attrs=y,w.componentStyle=S,w.displayName=d,w.shouldForwardProp=g,w.foldedComponentIds=o?Jt(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=h,w.target=o?i.target:t,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];for(var n=0,o=e;n<o.length;n++)te(t,o[n],!0);return t}({},i.defaultProps,t):t}}),ee(w,(function(){return".".concat(w.styledComponentId)})),c&&Ht(w,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function qe(t,e){for(var r=[t[0]],n=0,o=e.length;n<o;n+=1)r.push(e[n],t[n+1]);return r}new Set;var He=function(t){return Object.assign(t,{isCss:!0})};function Ve(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Vt(t)||Qt(t))return He(Ne(qe(yt,o([t],e,!0))));var n=t;return 0===e.length&&1===n.length&&"string"==typeof n[0]?Ne(n):He(Ne(qe(n,e)))}function Ue(t,e,r){if(void 0===r&&(r=gt),!e)throw re(1,e);var a=function(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return t(e,r,Ve.apply(void 0,o([n],a,!1)))};return a.attrs=function(o){return Ue(t,e,n(n({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return Ue(t,e,n(n({},r),o))},a}var Je=function(t){return Ue(Ze,t)},Ke=Je;bt.forEach((function(t){Ke[t]=Je(t)}));var Qe=function(){function t(t,e){this.rules=t,this.componentId=e,this.isStatic=De(t),Se.registerId(this.componentId+1)}return t.prototype.createStyles=function(t,e,r,n){var o=n(Kt(Ne(this.rules,e,r,n)),""),a=this.componentId+t;r.insertRules(a,a,o)},t.prototype.removeStyles=function(t,e){e.clearRules(this.componentId+t)},t.prototype.renderStyles=function(t,e,r,n){t>2&&Se.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,e,r,n)},t}();function tr(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var a=Ve.apply(void 0,o([t],e,!1)),i="sc-global-".concat(Et(JSON.stringify(a))),c=new Qe(a,i),f=function(t){var e=Te(),r=s().useContext(ze),o=s().useRef(e.styleSheet.allocateGSInstance(i)).current;return e.styleSheet.server&&function(t,e,r,o,a){if(c.isStatic)c.renderStyles(t,ht,r,a);else{var s=n(n({},e),{theme:vt(e,o,f.defaultProps)});c.renderStyles(t,s,r,a)}}(o,t,e.styleSheet,r,e.stylis),null};return s().memo(f)}function er(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=Kt(Ve.apply(void 0,o([t],e,!1))),a=Et(n);return new $e(a,n)}function rr(t){var e=s().forwardRef((function(e,r){var o=vt(e,s().useContext(ze),t.defaultProps);return s().createElement(t,n({},e,{theme:o,ref:r}))}));return e.displayName="WithTheme(".concat($t(t),")"),Ht(e,t)}var nr=/^\s*<\/[a-z]/i,or=function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString(),r=me(),n=Kt([r&&'nonce="'.concat(r,'"'),"".concat(ct,'="true"'),"".concat(lt,'="').concat(ut,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw re(2);return t._emitSheetCSS()},this.getStyleElement=function(){var e;if(t.sealed)throw re(2);var r=((e={})[ct]="",e[lt]=ut,e.dangerouslySetInnerHTML={__html:t.instance.toString()},e),o=me();return o&&(r.nonce=o),[s().createElement("style",n({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Se({isServer:!0}),this.sealed=!1}return t.prototype.collectStyles=function(t){if(this.sealed)throw re(2);return s().createElement(Ee,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(t){if(mt)throw re(3);if(this.sealed)throw re(2);this.seal();var e=r(781).Transform,n=t,o=this.instance,a=this._emitSheetCSS,s=new e({transform:function(t,e,r){var n=t.toString(),s=a();if(o.clearTag(),nr.test(n)){var i=n.indexOf(">")+1,c=n.slice(0,i),f=n.slice(i);this.push(c+s+f)}else this.push(s+n);r()}});return n.on("error",(function(t){s.emit("error",t)})),n.pipe(s)},t}(),ar={StyleSheet:Se,mainSheet:Pe};"__sc-".concat(ct,"__")},467:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e},s=this&&this.__rest||function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Typewriter=e.StyledText=void 0;const c=i(r(639)),f=a(r(408)),l=i(r(775)),u=f.default.div`
  margin: 0;
  padding: 0;
  animation-name: ${({animationname:t})=>t?lt[t]:lt.spin};
  animation-duration: ${({duration:t})=>t||"1s"};
  animation-timing-function: ${({timing:t})=>t||"ease"};
  animation-delay: ${({delay:t})=>t||"0s"};
  animation-iteration-count: ${({iteration:t})=>t||"infinite"};
  animation-direction: ${({direction:t})=>t||"alternate"};
  animation-fill-mode: ${({fillmode:t})=>t||"forwards"};
  byletter: ${({byletter:t})=>t?"true":"false"};
`;e.StyledText=t=>{var{children:e,animationProps:r}=t,n=s(t,["children","animationProps"]);return c.default.createElement(u,Object.assign({},n,r),e)},e.Typewriter=t=>c.default.createElement(l.default,{statictext:t.statictext,datatext:t.datatext,cursorcolor:t.cursorcolor});const p=f.keyframes`
from { filter: blur(0px); }
to { filter: blur(6px); }
`,m=f.keyframes`
10% { transform: scaleY(0.9) translateY(5%); }
45% { transform: scaleY(1.2) translateY(-100%); }
65% { transform: scaleY(0.95) translateY(0); }
75% { transform: scaleY(1.05) translateY(-25%); }
85% { transform: scaleY(1) translateY(0); }
100% { transform: scaleY(1) translateY(0%); }
`,d=f.keyframes`
to {
  text-shadow:
  0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0, 0, 0, .1),
  0 0 5px rgba(0, 0, 0, .1),
  0 1px 3px rgba(0, 0, 0, .3),
  0 3px 5px rgba(0, 0, 0, .2),
  0 5px 10px rgba(0, 0, 0, .25)
}
`,h=f.keyframes`
  0%, 40%, 80% { opacity: 1; }
  20%, 60%, 100% { opacity: 0; }
`,y=f.keyframes`
  0% { transform: translate(2%, -10%) rotate(-1deg); }
  100% { transform: translate(-2%, 5%) rotate(3deg); }
`,g=f.keyframes`
  0% { color: inherit; text-shadow: none; }
  2%, 59%, 64%, 79% { color: #fff; }
  3%, 59%, 63%, 78% { text-shadow: 0px 0px 60px, 0 0 22px, 0 0 1em inherit, 0 0 0.5em inherit, 0 0 .1em inherit, 0 10px 3px #000; }
  60% { color: inherit; text-shadow: none; }
  75% { color: inherit; text-shadow: none; }
`,v=f.keyframes`
  0% { transform: scaleX(1); }
  20% { transform: scaleX(0.9); }
  50% { transform: scaleX(1.25); }
  85% { transform: scaleX(0.8); }
  100% { transform: scaleX(1); }
`,b=f.keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`,S=f.keyframes`
  0%   { text-shadow: 1px 1px 0px #333; }
	50%   { text-shadow: 3px 3px 2px #333; }
	100%  { text-shadow: 9px 10px 6px #999; }
`,x=f.keyframes`
  from { transform: rotateY(0deg); }
  to { transform: rotateY(-360deg); }
`,w=f.keyframes`
  0% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
  20% {
    transform: rotateZ(15deg);
    transform-origin: center top;
  }
  40% {
    transform: rotateZ(-15deg);
    transform-origin: center top;
  }
  60% {
    transform: rotateZ(7deg);
    transform-origin: center top;
  }
  80% {
    transform: rotateZ(-7deg);
    transform-origin: center top;
  }
  100% {
    transform: rotateZ(0deg);
    transform-origin: center top;
  }
`,k=f.keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`,O=f.keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to { opacity: 1 }
`,P=f.keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to { opacity: 1 }
`,I=f.keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to { opacity: 1 }
`,_=f.keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to { opacity: 1 }
`,C=f.keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`,j=f.keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateX(-100%);
  }
`,T=f.keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`,E=f.keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`,$=f.keyframes`
  from { opacity: 1; }
  to {
    opacity: 0;
    transform: translateY(100%);
  }
`,A=f.keyframes`
  0% { transform-origin: left; }
  30% {
    transform: rotate(110deg);
    transform-origin: left;
  }
  50% {
    transform: rotate(75deg);
    transform-origin: left;
  }
  65% {
    transform: rotate(100deg);
    transform-origin: left;
  }
  78% {
    transform: rotate(80deg);
    transform-origin: left;
  }
  88% {
    transform: rotate(95deg);
    transform-origin: left;
  }
  95% {
    transform: rotate(86deg);
    transform-origin: left;
  }
  100% {
    transform: rotate(90deg);
    transform-origin: left;
  }
`,R=f.keyframes`
  0% { transform-origin: right; }
  30% {
    transform: rotate(-110deg);
    transform-origin: right;
  }
  50% {
    transform: rotate(-75deg);
    transform-origin: right;
  }
  65% {
    transform: rotate(-100deg);
    transform-origin: right;
  }
  78% {
    transform: rotate(-80deg);
    transform-origin: right;
  }
  88% {
    transform: rotate(-95deg);
    transform-origin: right;
  }
  95% {
    transform: rotate(-86deg);
    transform-origin: right;
  }
  100% {
    transform: rotate(-90deg);
    transform-origin: right;
  }
`,X=f.keyframes`
  0% { transform: scale(1, 1); }
  15% { transform: scale(0.95, 0.95); }
  30% { transform: scale(0.9, 0.9); }
  55% { transform: scale(0.75, 0.75); }
  70% { transform: scale(1.3, 1.3); }
  85% { transform: scale(0.95, 0.95); }
  100% { transform: scale(1, 1); }
`,Y=f.keyframes`
  0% { transform: scaleX(1); }
  15% { transform: scaleX(0.95); }
  30% { transform: scaleX(0.9); }
  55% { transform: scaleX(0.75); }
  70% { transform: scaleX(1.3); }
  85% { transform: scaleX(0.95); }
  100% { transform: scaleX(1); }
`,N=f.keyframes`
  0% { transform: scaleY(1); }
  15% { transform: scaleY(0.95); }
  30% { transform: scaleY(0.9); }
  55% { transform: scaleY(0.75); }
  70% { transform: scaleY(1.3); }
  85% { transform: scaleY(0.95); }
  100% { transform: scaleY(1); }
`,D=f.keyframes`
  0% { transform: translate(2px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`,F=f.keyframes`
  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateX(6px) }
  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateX(2px) }
  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateX(-4px) }
`,M=f.keyframes`
  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateY(6px) }
  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateY(2px) }
  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateY(-4px) }
`,z=f.keyframes`
  0% {
    transform: perspective(1000px) rotateX(360deg);
    transform-origin: center;
  }
  100% {
    transform: perspective(1000px) rotateX(0deg);
    transform-origin: center;
  }
`,B=f.keyframes`
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  35% {
    transform: rotateX(120deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(360deg);
    opacity: 1;
  }
`,G=f.keyframes`
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  35% {
    transform: rotateX(-40deg);
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  100% {
    transform: rotateX(180deg);
    opacity: 0;
  }
`,L=f.keyframes` // tbm
  0% {
    transform:rotateX(0deg);
  }
  5% {
    transform: rotateX(1turn);
  }
  10% {
    transform: rotateX(2turn);
  }
  20% {
    transform: rotateX(3turn);
  }
  40% {
    transform: rotateX(4turn);
  }
  70%, 100% {
    transform: rotateX(5turn);
  }
`,W=f.keyframes`
  from {
    transform: rotateX(-90deg);
    transform-origin: center top;
    opacity: 1;
  }
  to {
    transform: rotateX(90deg);
    transform-origin: center top;
    opacity: 0;
  }
`,Z=f.keyframes`
  from {
    opacity: 1;
    transform-origin: 0%, 0%;
    transform: rotateX(0deg) translateY(0px);
  }
  to {
    opacity: 0;
    transform-origin: 0%, 0%;
    transform: rotateX(-90deg) translateY(50px);
  }
`,q=f.keyframes`
  from {
    opacity: 0;
    transform-origin: 0%, 0%;
    transform: rotateX(90deg);
  }
  to {
    opacity: 1;
    transform-origin: 0%, 0%;
    transform: rotateX(0deg) ;
  }
`,H=f.keyframes`
  from {
    transform: rotateX(-90deg);
    transform-origin: 50% 0;
    opacity: 0;
  }
  to {
    transform: rotateX(0deg);
    transform-origin: 50% 0;
    opacity: 1;
  }
`,V=f.keyframes`
  0% {
    transform: rotateY(-95deg)  translateX(-200px) ;
    transform-origin: left;
  }
  100% {
    transform: rotateY(0deg);
    transform-origin: left;
  }
`,U=f.keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  60% {
    opacity: 1;
    transform: translateX(20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,J=f.keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  60% {
    opacity: 1;
    transform: translateX(-20%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`,K=f.keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  60% {
    opacity: 0;
    transform: translateX(-120%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,Q=f.keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  60% {
    opacity: 0;
    transform: translateX(120%);
  }
  100% {
    opacity: 0;
    transform: translateX(100%);
  }
`,tt=f.keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  60% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,et=f.keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  60% {
    opacity: 1;
    transform: translateY(20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,rt=f.keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 0;
    transform: translateY(-120%);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`,nt=f.keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  60% {
    opacity: 0;
    transform: translateY(120%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`,ot=f.keyframes`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1, 0.4, 1); }
  60% { transform: scale3d(0.4, 0.4, 1); }
  100% {
    opacity: 0;
    transform: scale3d(0.2, 0.2, 0.2);
  }
`,at=f.keyframes`
  0% {
    opacity: 0;
    transform: scale3d(0, 0, 0); }
  30% {
    opacity: 1;
    transform: scale3d(0.4, 0.4, 1);
  }
  60% { transform: scale3d(0.4, 1, 1); }
  100% { transform: scale3d(1, 1, 1); }
`,st=f.keyframes`
  from { transform: scale(2); }
  to { transform: scale(1); }
`,it=f.keyframes`
  from { transform: scale(1); }
  to { transform: scale(2); }
`,ct=f.keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  to {
    transform: rotate(360deg);
    transform-origin: center center;
  }
`,ft=f.keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: center center;
  }
  to {
    transform: rotate(-360deg);
    transform-origin: center center;
  }
`,lt={blur:p,bounce:m,effect3D:d,flash:h,float:y,glowing:g,jelly:v,pulse:b,shadow:S,spin:x,swing:w,fadeIn:k,fadeInFromLeft:O,fadeInFromRight:P,fadeInFromTop:I,fadeInFromBottom:_,fadeOut:C,fadeOutToLeft:j,fadeOutToRight:T,fadeOutToTop:E,fadeOutToBottom:$,flip:z,flipIn:B,flipOut:G,flipSlowDown:L,flipFromTop:q,flipToTop:W,flipFromBottom:H,flipToBottom:Z,flipFromLeftToCenter:V,fold:ot,unfold:at,hangOnLeft:A,hangOnRight:R,rotateSlowDown:f.keyframes`
  0% { transform:rotateZ(0deg);  }
  5% { transform: rotateZ(1turn); }
  10% { transform: rotateZ(2turn); }
  20% { transform: rotateZ(3turn); }
  40% { transform: rotateZ(4turn); }
  65%, 100% { transform: rotateZ(5turn); }
`,rotateCW:ct,rotateACW:ft,shakeMix:D,shakeHorizontal:F,shakeVertical:M,squeezeMix:X,squeezeHorizontal:Y,squeezeVertical:N,slideInFromLeft:U,slideInFromRight:J,slideOutToLeft:K,slideOutToRight:Q,slideInFromTop:tt,slideInFromBottom:et,slideOutToTop:rt,slideOutToBottom:nt,zoomIn:st,zoomOut:it,popIn:f.keyframes`
  0% {
    transform: scale3d(0, 0, 0);
    opacity: 0;
  }
  30% {
    transform: scale3d(1.1, 1.1, 1.1);
    opacity: 1;
  }
  60% { transform: scale3d(1, 1, 1); }
  80% { transform: scale3d(1.03, 1.03, 1.03); }
  100% { transform: scale3d(1, 1, 1); }
`,popOut:f.keyframes`
  0% { transform: scale3d(1, 1, 1); }
  60% {
    transform: scale3d(1.1, 1.1, 1.1);
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`}},775:function(t,e,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(t,e,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(e,r);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,o)}:function(t,e,r,n){void 0===n&&(n=r),t[n]=e[r]}),o=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)"default"!==r&&Object.prototype.hasOwnProperty.call(t,r)&&n(e,t,r);return o(e,t),e};Object.defineProperty(e,"__esModule",{value:!0});const s=a(r(639)),i=a(r(408));e.default=({statictext:t="",datatext:e,cursorcolor:r})=>{const[n,o]=(0,s.useState)(""),[a,i]=(0,s.useState)(!1),[c,l]=(0,s.useState)(0),[u,p]=(0,s.useState)(150);(0,s.useEffect)((()=>{const t=setTimeout((()=>{m()}),u);return()=>clearTimeout(t)}),[n,a]);const m=()=>{const t=c%e.length,r=e[t];o(a?r.substring(0,n.length-1):r.substring(0,n.length+1)),p(a?30:150),a||n!==r?a&&""===n&&(i(!1),l(c+1)):setTimeout((()=>i(!0)),500)};return s.default.createElement("div",null,t," ",s.default.createElement("span",null,n),s.default.createElement(f,{cursorcolor:r}))};const c=i.keyframes`
  50% {
    border-color: transparent;
  }
`,f=i.default.span`
  margin-left: 2px;
  border-left: 3px solid ${t=>t.cursorcolor};
  animation: ${c} 0.7s steps(1) infinite;
`},781:t=>{"use strict";t.exports=require("stream")},639:e=>{"use strict";e.exports=t}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";var t=o;Object.defineProperty(t,"__esModule",{value:!0}),t.Typewriter=t.StyledText=void 0;var e=n(467);Object.defineProperty(t,"StyledText",{enumerable:!0,get:function(){return e.StyledText}});var r=n(467);Object.defineProperty(t,"Typewriter",{enumerable:!0,get:function(){return r.Typewriter}})})(),o})()));