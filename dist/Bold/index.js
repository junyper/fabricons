!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FabriconsBold=t(require("react")):e.FabriconsBold=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(17)},function(e,t,r){"use strict";function n(){p=!1}function o(e){if(!e)return void(f!==h&&(f=h,n()));if(e!==f){if(e.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+t.join(", "));f=e,n()}}function u(e){return o(e),f}function i(e){d.seed(e),s!==e&&(n(),s=e)}function c(){f||o(h);for(var e,t=f.split(""),r=[],n=d.nextValue();t.length>0;)n=d.nextValue(),e=Math.floor(n*t.length),r.push(t.splice(e,1)[0]);return r.join("")}function a(){return p?p:p=c()}function l(e){var t=a();return t[e]}var f,s,p,d=r(10),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:u,seed:i,lookup:l,shuffled:a}},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),l=n(a),f=r(4),s=n(f),p=function(e){function t(e){o(this,t);var r=u(this,Object.getPrototypeOf(t).call(this));return r.titleId=e.name+"__"+s["default"].generate(),r.descId=e.name+"__"+s["default"].generate(),r}return i(t,e),c(t,[{key:"renderTitle",value:function(){var e=this.props.title;return e?l["default"].createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(){var e=this.props.desc;return e?l["default"].createElement("desc",{id:this.descId},e):null}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.width,n=e.height,o=e.viewBox;return l["default"].createElement("svg",{width:r,height:n,viewBox:o,"aria-hidden":t?null:"true","aria-labelledby":this.labelledBy,role:this.role},this.renderTitle(),this.renderDesc(),l["default"].createElement("g",{role:"presentation"},this.props.children))}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[];return this.props.title&&e.push(this.titleId),this.props.desc&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t}(a.Component);p.propTypes={name:a.PropTypes.string.isRequired,children:a.PropTypes.node.isRequired,viewBox:a.PropTypes.string.isRequired,title:a.PropTypes.string,desc:a.PropTypes.string,width:a.PropTypes.string,height:a.PropTypes.string},p.defaultProps={width:"2rem",height:"2rem"},t["default"]=p},function(e,t,r){"use strict";e.exports=r(7)},function(e,t,r){"use strict";function n(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=r(1);e.exports=n},function(e,t,r){"use strict";function n(e,t){for(var r,n=0,u="";!r;)u+=e(t>>4*n&15|o()),r=t<Math.pow(16,n+1),n++;return u}var o=r(9);e.exports=n},function(e,t,r){"use strict";function n(){var e="",t=Math.floor(.001*(Date.now()-d));return t===a?c++:(c=0,a=t),e+=f(l.lookup,h),e+=f(l.lookup,y),c>0&&(e+=f(l.lookup,c)),e+=f(l.lookup,t)}function o(t){return l.seed(t),e.exports}function u(t){return y=t,e.exports}function i(e){return void 0!==e&&l.characters(e),l.shuffled()}var c,a,l=r(1),f=r(6),s=r(5),p=r(8),d=1459707606518,h=6,y=r(11)||0;e.exports=n,e.exports.generate=n,e.exports.seed=o,e.exports.worker=u,e.exports.characters=i,e.exports.decode=s,e.exports.isValid=p},function(e,t,r){"use strict";function n(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),r=e.length,n=0;r>n;n++)if(-1===t.indexOf(e[n]))return!1;return!0}var o=r(1);e.exports=n},function(e,t){"use strict";function r(){if(!n||!n.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return n.getRandomValues(e),48&e[0]}var n="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=r},function(e,t){"use strict";function r(){return o=(9301*o+49297)%233280,o/233280}function n(e){o=e}var o=1;e.exports={nextValue:r,seed:n}},function(e,t){"use strict";e.exports=0},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),f=n(l),s=r(3),p=n(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldAdd",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M1080 840V240c0-66.271-53.726-120-120-120-66.27 0-120 53.726-120 120v600H240c-66.271 0-120 53.726-120 120 0 66.27 53.726 120 120 120h600v600c0 66.271 53.726 120 120 120 66.27 0 120-53.726 120-120v-600h600c66.271 0 120-53.726 120-120 0-66.27-53.726-120-120-120h-600z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),f=n(l),s=r(3),p=n(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldBack",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M859.963 535.854c46.863-46.863 46.866-122.846.003-169.71-46.86-46.86-122.844-46.86-169.71.005L181.15 875.257c-46.861 46.86-46.868 122.847-.005 169.71l84.855 84.855 424.26 424.26c46.867 46.867 122.845 46.865 169.707.002 46.86-46.86 46.862-122.844-.003-169.71l-304.26-304.26h1099.066c66.278 0 120.007-53.73 120.007-120 0-66.274-53.72-120-120.007-120H555.702l304.26-304.26z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),f=n(l),s=r(3),p=n(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldCheck",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M578.262 1595.938c46.86 46.86 122.842 46.863 169.705 0L1851.054 492.853c46.869-46.869 46.863-122.843 0-169.706-46.86-46.86-122.843-46.863-169.706 0L663.114 1341.38 238.855 917.12c-46.86-46.86-122.847-46.867-169.71-.004-46.86 46.86-46.861 122.845.004 169.71l509.108 509.108.005.004z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),f=n(l),s=r(3),p=n(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldClose",viewBox:"0 0 1920 1920"}),f["default"].createElement("g",{"fill-rule":"evenodd"},f["default"].createElement("path",{d:"M1638.829 1469.123c46.86 46.86 46.854 122.84-.006 169.7-46.863 46.862-122.85 46.856-169.7.006L281.171 450.877c-46.86-46.86-46.854-122.84.006-169.7 46.863-46.862 122.85-46.856 169.7-.006l1187.952 1187.952z"}),f["default"].createElement("path",{d:"M1469.123 281.171c46.86-46.86 122.84-46.854 169.7.006 46.862 46.863 46.856 122.85.006 169.7L450.877 1638.829c-46.86 46.86-122.84 46.854-169.7-.006-46.862-46.863-46.856-122.85-.006-169.7L1469.123 281.171z"})))}}]),t}(l.Component);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(2),f=n(l),s=r(3),p=n(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldTwitter",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M1835 375.663c-64.385 30.777-133.583 51.505-206.208 60.848 74.156-47.815 131.03-123.58 157.864-213.871-69.343 44.282-146.198 76.472-228.01 93.824-65.48-75.138-158.813-122.089-262.063-122.089-198.26 0-359.041 173.044-359.041 386.6 0 30.307 3.208 59.828 9.26 88.093-298.375-16.095-562.917-170.06-740.031-403.952-30.917 57.08-48.636 123.502-48.636 194.32 0 134.102 63.365 252.422 159.688 321.75-58.844-2.042-114.188-19.393-162.604-48.365v4.868c0 187.333 123.74 343.575 288.02 379.063-30.114 8.794-61.833 13.583-94.572 13.583-23.115 0-45.646-2.434-67.521-6.909 45.719 153.573 178.281 265.376 335.416 268.438-122.864 103.716-277.666 165.506-445.885 165.506-28.948 0-57.531-1.805-85.677-5.417 158.885 109.683 347.594 173.672 550.375 173.672 660.406 0 1021.49-589.087 1021.49-1099.975 0-16.723-.365-33.447-1.021-50.013 70.146-54.489 131.031-122.56 179.156-200.131v.157","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.IconBoldTwitter=t.IconBoldClose=t.IconBoldCheck=t.IconBoldBack=t.IconBoldAdd=void 0;var o=r(12),u=n(o),i=r(13),c=n(i),a=r(14),l=n(a),f=r(15),s=n(f),p=r(16),d=n(p);t.IconBoldAdd=u["default"],t.IconBoldBack=c["default"],t.IconBoldCheck=l["default"],t.IconBoldClose=s["default"],t.IconBoldTwitter=d["default"]}])});