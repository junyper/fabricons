!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FabriconsBold=t(require("react")):e.FabriconsBold=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(16)},function(e,t,r){"use strict";function n(){p=!1}function o(e){if(!e)return void(l!==h&&(l=h,n()));if(e!==l){if(e.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+t.join(", "));l=e,n()}}function i(e){return o(e),l}function u(e){d.seed(e),f!==e&&(n(),f=e)}function s(){l||o(h);for(var e,t=l.split(""),r=[],n=d.nextValue();t.length>0;)n=d.nextValue(),e=Math.floor(n*t.length),r.push(t.splice(e,1)[0]);return r.join("")}function a(){return p?p:p=s()}function c(e){var t=a();return t[e]}var l,f,p,d=r(10),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:i,seed:u,lookup:c,shuffled:a}},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),c=n(a),l=r(4),f=n(l),p=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this));return r.titleId=e.name+"__"+f["default"].generate(),r.descId=e.name+"__"+f["default"].generate(),r}return u(t,e),s(t,[{key:"renderTitle",value:function(){var e=this.props.title;return e?c["default"].createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(){var e=this.props.desc;return e?c["default"].createElement("desc",{id:this.descId},e):null}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.width,n=e.height,o=e.viewBox,i={fill:"currentColor"};return c["default"].createElement("svg",{style:i,width:r,height:n,viewBox:o,"aria-hidden":t?null:"true","aria-labelledby":this.labelledBy,role:this.role},this.renderTitle(),this.renderDesc(),c["default"].createElement("g",{role:"presentation"},this.props.children))}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[];return this.props.title&&e.push(this.titleId),this.props.desc&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t}(a.Component);p.propTypes={name:a.PropTypes.string.isRequired,children:a.PropTypes.node.isRequired,viewBox:a.PropTypes.string.isRequired,title:a.PropTypes.string,desc:a.PropTypes.string,width:a.PropTypes.string,height:a.PropTypes.string},p.defaultProps={width:"1em",height:"1em"},t["default"]=p},function(e,t,r){"use strict";e.exports=r(7)},function(e,t,r){"use strict";function n(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=r(1);e.exports=n},function(e,t,r){"use strict";function n(e,t){for(var r,n=0,i="";!r;)i+=e(t>>4*n&15|o()),r=t<Math.pow(16,n+1),n++;return i}var o=r(9);e.exports=n},function(e,t,r){"use strict";function n(){var e="",t=Math.floor(.001*(Date.now()-d));return t===a?s++:(s=0,a=t),e+=l(c.lookup,h),e+=l(c.lookup,y),s>0&&(e+=l(c.lookup,s)),e+=l(c.lookup,t)}function o(t){return c.seed(t),e.exports}function i(t){return y=t,e.exports}function u(e){return void 0!==e&&c.characters(e),c.shuffled()}var s,a,c=r(1),l=r(6),f=r(5),p=r(8),d=1459707606518,h=6,y=r(11)||0;e.exports=n,e.exports.generate=n,e.exports.seed=o,e.exports.worker=i,e.exports.characters=u,e.exports.decode=f,e.exports.isValid=p},function(e,t,r){"use strict";function n(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),r=e.length,n=0;r>n;n++)if(-1===t.indexOf(e[n]))return!1;return!0}var o=r(1);e.exports=n},function(e,t){"use strict";function r(){if(!n||!n.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return n.getRandomValues(e),48&e[0]}var n="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=r},function(e,t){"use strict";function r(){return o=(9301*o+49297)%233280,o/233280}function n(e){o=e}var o=1;e.exports={nextValue:r,seed:n}},function(e,t){"use strict";e.exports=0},,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),l=n(c),f=r(3),p=n(f),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return l["default"].createElement(p["default"],s({},this.props,{name:"IconBoldTwitter",viewBox:"0 0 1920 1920"}),l["default"].createElement("path",{d:"M1835 375.663c-64.385 30.777-133.583 51.505-206.208 60.848 74.156-47.815 131.03-123.58 157.864-213.871-69.343 44.282-146.198 76.472-228.01 93.824-65.48-75.138-158.813-122.089-262.063-122.089-198.26 0-359.041 173.044-359.041 386.6 0 30.307 3.208 59.828 9.26 88.093-298.375-16.095-562.917-170.06-740.031-403.952-30.917 57.08-48.636 123.502-48.636 194.32 0 134.102 63.365 252.422 159.688 321.75-58.844-2.042-114.188-19.393-162.604-48.365v4.868c0 187.333 123.74 343.575 288.02 379.063-30.114 8.794-61.833 13.583-94.572 13.583-23.115 0-45.646-2.434-67.521-6.909 45.719 153.573 178.281 265.376 335.416 268.438-122.864 103.716-277.666 165.506-445.885 165.506-28.948 0-57.531-1.805-85.677-5.417 158.885 109.683 347.594 173.672 550.375 173.672 660.406 0 1021.49-589.087 1021.49-1099.975 0-16.723-.365-33.447-1.021-50.013 70.146-54.489 131.031-122.56 179.156-200.131v.157","fill-rule":"evenodd"}))}}]),t}(c.Component);t["default"]=d}])});