/*! For license information please see component---src-pages-index-js-d47329a32e2ab74b95d6.js.LICENSE.txt */
"use strict";(self.webpackChunkcarta=self.webpackChunkcarta||[]).push([[293],{3863:function(t,e,r){r.r(e),r.d(e,{Head:function(){return E},default:function(){return C}});var n=r(7387),a=r(6540),o=r(2454),i=r(7528),l=r(7107),s=r(5556),c=r.n(s);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){y(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function y(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}function d(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t){return e=t,(e-=0)==e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var h=["style"];var g=!1;try{g=!0}catch(P){}function O(t){return t&&"object"===p(t)&&t.prefix&&t.iconName&&t.icon?t:l.qg.icon?l.qg.icon(t):null===t?null:t&&"object"===p(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function k(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?y({},t,e):{}}var w={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},x=a.forwardRef((function(t,e){var r=u(u({},w),t),n=r.icon,a=r.mask,o=r.symbol,i=r.className,s=r.title,c=r.titleId,f=r.maskId,p=O(n),b=k("classes",[].concat(d(function(t){var e,r=t.beat,n=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,l=t.flash,s=t.spin,c=t.spinPulse,f=t.spinReverse,u=t.pulse,p=t.fixedWidth,b=t.inverse,d=t.border,m=t.listItem,v=t.flip,h=t.size,g=t.rotation,O=t.pull,k=(y(e={"fa-beat":r,"fa-fade":n,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":u,"fa-fw":p,"fa-inverse":b,"fa-border":d,"fa-li":m,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(h),null!=h),y(e,"fa-rotate-".concat(g),null!=g&&0!==g),y(e,"fa-pull-".concat(O),null!=O),y(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map((function(t){return k[t]?t:null})).filter((function(t){return t}))}(r)),d((i||"").split(" ")))),m=k("transform","string"==typeof r.transform?l.qg.transform(r.transform):r.transform),v=k("mask",O(a)),h=(0,l.Kk)(p,u(u(u(u({},b),m),v),{},{symbol:o,title:s,titleId:c,maskId:f}));if(!h)return function(){var t;!g&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",p),null;var x=h.abstract,j={ref:e};return Object.keys(r).forEach((function(t){w.hasOwnProperty(t)||(j[t]=r[t])})),S(x[0],j)}));x.displayName="FontAwesomeIcon",x.propTypes={beat:c().bool,border:c().bool,beatFade:c().bool,bounce:c().bool,className:c().string,fade:c().bool,flash:c().bool,mask:c().oneOfType([c().object,c().array,c().string]),maskId:c().string,fixedWidth:c().bool,inverse:c().bool,flip:c().oneOf([!0,!1,"horizontal","vertical","both"]),icon:c().oneOfType([c().object,c().array,c().string]),listItem:c().bool,pull:c().oneOf(["right","left"]),pulse:c().bool,rotation:c().oneOf([0,90,180,270]),shake:c().bool,size:c().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:c().bool,spinPulse:c().bool,spinReverse:c().bool,symbol:c().oneOfType([c().bool,c().string]),title:c().string,titleId:c().string,transform:c().oneOfType([c().string,c().object]),swapOpacity:c().bool};var S=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map((function(r){return t(e,r)})),o=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=n.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),a=v(e.slice(0,n)),o=e.slice(n+1).trim();return a.startsWith("webkit")?t[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=o:t[a]=o,t}),{});break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[v(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,s=b(n,h);return o.attrs.style=u(u({},o.attrs.style),l),e.apply(void 0,[r.tag,u(u({},o.attrs),s)].concat(d(a)))}.bind(null,a.createElement);const j={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]};var I=r(6188);let A=function(t){function e(e){var r;return(r=t.call(this,e)||this).onClick=()=>{var t=!r.state.isSaved;window.localStorage.setItem(r.key,JSON.stringify(t)),r.setState({isSaved:t})},r.onKeyDown=t=>{13===t.keyCode&&r.onClick()},r.key=e.data.castellano+"|"+e.data.titulo_esp+"|isSaved",r.state={data:e.data,isSaved:!1},r}(0,n.A)(e,t);var r=e.prototype;return r.componentDidMount=function(){this.setState({isSaved:JSON.parse(window.localStorage.getItem(this.key))})},r.render=function(){return a.createElement("div",null,a.createElement("div",{style:{fontFamily:"Helvetica",outline:"none"},onClick:this.onClick,onKeyDown:this.onKeyDown,role:"button",tabIndex:-1},a.createElement(x,{icon:this.state.isSaved?I.yy:j,color:this.state.isSaved?"auto":"gray",style:{marginBottom:"1px"},size:"sm"})," ",a.createElement("strong",null,this.state.data.castellano,this.state.data.catalan?" /":"")," ",this.state.data.catalan,a.createElement("span",null," ",this.state.data.precio.toFixed(2).replace(".",",").replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")," €")),this.state.data.especificacion&&a.createElement("div",{style:{fontFamily:"Helvetica",fontStyle:"oblique",fontSize:"0.9em"}},this.state.data.especificacion))},e}(a.Component);const E=()=>a.createElement(i.A,{title:"Carta"});var C=t=>{let{data:e}=t;return a.createElement(o.A,null,e.allCartaXlsxHoja1.group.map((t=>{let{fieldValue:e,edges:r}=t;return a.createElement("div",{key:e},a.createElement("h3",{style:{marginTop:"1.45rem",marginBottom:"0.45rem",fontFamily:"Didot",fontWeight:"bold"}},r[0].node.titulo_esp," / ",r[0].node.titulo_cat),a.createElement("hr",{style:{borderTop:"1px solid black"}}),r.map((t=>{let{node:e}=t;return a.createElement(A,{data:e,key:e.id})})))})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-d47329a32e2ab74b95d6.js.map