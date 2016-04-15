!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Fabricons=t(require("react")):e.Fabricons=t(e.React)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(21)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),l=r(a),f=n(4),s=r(f),p=function(e){function t(e){o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this));return n.titleId=e.name+"__"+s["default"].generate(),n.descId=e.name+"__"+s["default"].generate(),n}return i(t,e),c(t,[{key:"renderTitle",value:function(){var e=this.props.title;return e?l["default"].createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(){var e=this.props.desc;return e?l["default"].createElement("desc",{id:this.descId},e):null}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.width,r=e.height,o=e.viewBox;return l["default"].createElement("svg",{width:n,height:r,viewBox:o,"aria-hidden":t?null:"true","aria-labelledby":this.labelledBy,role:this.role},this.renderTitle(),this.renderDesc(),l["default"].createElement("g",{role:"presentation"},this.props.children))}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[];return this.props.title&&e.push(this.titleId),this.props.desc&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t}(a.Component);p.propTypes={name:a.PropTypes.string.isRequired,children:a.PropTypes.node.isRequired,viewBox:a.PropTypes.string.isRequired,title:a.PropTypes.string,desc:a.PropTypes.string,width:a.PropTypes.string,height:a.PropTypes.string},p.defaultProps={width:"2rem",height:"2rem"},t["default"]=p},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(){p=!1}function o(e){if(!e)return void(f!==h&&(f=h,r()));if(e!==f){if(e.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,n){return t!==n.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+t.join(", "));f=e,r()}}function u(e){return o(e),f}function i(e){d.seed(e),s!==e&&(r(),s=e)}function c(){f||o(h);for(var e,t=f.split(""),n=[],r=d.nextValue();t.length>0;)r=d.nextValue(),e=Math.floor(r*t.length),n.push(t.splice(e,1)[0]);return n.join("")}function a(){return p?p:p=c()}function l(e){var t=a();return t[e]}var f,s,p,d=n(10),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:u,seed:i,lookup:l,shuffled:a}},function(e,t,n){"use strict";e.exports=n(7)},function(e,t,n){"use strict";function r(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=n(3);e.exports=r},function(e,t,n){"use strict";function r(e,t){for(var n,r=0,u="";!n;)u+=e(t>>4*r&15|o()),n=t<Math.pow(16,r+1),r++;return u}var o=n(9);e.exports=r},function(e,t,n){"use strict";function r(){var e="",t=Math.floor(.001*(Date.now()-d));return t===a?c++:(c=0,a=t),e+=f(l.lookup,h),e+=f(l.lookup,y),c>0&&(e+=f(l.lookup,c)),e+=f(l.lookup,t)}function o(t){return l.seed(t),e.exports}function u(t){return y=t,e.exports}function i(e){return void 0!==e&&l.characters(e),l.shuffled()}var c,a,l=n(3),f=n(6),s=n(5),p=n(8),d=1459707606518,h=6,y=n(11)||0;e.exports=r,e.exports.generate=r,e.exports.seed=o,e.exports.worker=u,e.exports.characters=i,e.exports.decode=s,e.exports.isValid=p},function(e,t,n){"use strict";function r(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),n=e.length,r=0;n>r;r++)if(-1===t.indexOf(e[r]))return!1;return!0}var o=n(3);e.exports=r},function(e,t){"use strict";function n(){if(!r||!r.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return r.getRandomValues(e),48&e[0]}var r="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=n},function(e,t){"use strict";function n(){return o=(9301*o+49297)%233280,o/233280}function r(e){o=e}var o=1;e.exports={nextValue:n,seed:r}},function(e,t){"use strict";e.exports=0},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldAdd",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M1080 840V240c0-66.271-53.726-120-120-120-66.27 0-120 53.726-120 120v600H240c-66.271 0-120 53.726-120 120 0 66.27 53.726 120 120 120h600v600c0 66.271 53.726 120 120 120 66.27 0 120-53.726 120-120v-600h600c66.271 0 120-53.726 120-120 0-66.27-53.726-120-120-120h-600z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldBack",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M859.963 535.854c46.863-46.863 46.866-122.846.003-169.71-46.86-46.86-122.844-46.86-169.71.005L181.15 875.257c-46.861 46.86-46.868 122.847-.005 169.71l84.855 84.855 424.26 424.26c46.867 46.867 122.845 46.865 169.707.002 46.86-46.86 46.862-122.844-.003-169.71l-304.26-304.26h1099.066c66.278 0 120.007-53.73 120.007-120 0-66.274-53.72-120-120.007-120H555.702l304.26-304.26z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldCheck",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M578.262 1595.938c46.86 46.86 122.842 46.863 169.705 0L1851.054 492.853c46.869-46.869 46.863-122.843 0-169.706-46.86-46.86-122.843-46.863-169.706 0L663.114 1341.38 238.855 917.12c-46.86-46.86-122.847-46.867-169.71-.004-46.86 46.86-46.861 122.845.004 169.71l509.108 509.108.005.004z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconBoldClose",viewBox:"0 0 1920 1920"}),f["default"].createElement("g",{"fill-rule":"evenodd"},f["default"].createElement("path",{d:"M1638.829 1469.123c46.86 46.86 46.854 122.84-.006 169.7-46.863 46.862-122.85 46.856-169.7.006L281.171 450.877c-46.86-46.86-46.854-122.84.006-169.7 46.863-46.862 122.85-46.856 169.7-.006l1187.952 1187.952z"}),f["default"].createElement("path",{d:"M1469.123 281.171c46.86-46.86 122.84-46.854 169.7.006 46.862 46.863 46.856 122.85.006 169.7L450.877 1638.829c-46.86 46.86-122.84 46.854-169.7-.006-46.862-46.863-46.856-122.85-.006-169.7L1469.123 281.171z"})))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconLightAdd",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M1056 864V192.005c0-53.02-42.98-96.005-96-96.005-53.016 0-96 42.983-96 96.005V864H192.005C138.985 864 96 906.98 96 960c0 53.016 42.983 96 96.005 96H864v671.995c0 53.02 42.98 96.005 96 96.005 53.016 0 96-42.983 96-96.005V1056h671.995c53.02 0 96.005-42.98 96.005-96 0-53.016-42.983-96-96.005-96H1056z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconLightBack",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M228.899 1035.722L764.175 1571c37.49 37.49 98.277 37.488 135.765 0 37.49-37.49 37.493-98.271 0-135.765L520.764 1056.06h1111.243c53.016 0 95.993-42.984 95.993-96 0-53.02-42.988-96-95.993-96H519.764L898.94 484.884c37.49-37.491 37.488-98.277 0-135.765-37.49-37.49-98.271-37.493-135.765 0L220.36 891.934a96.61 96.61 0 0 0-2.222 2.28 95.61 95.61 0 0 0-18.6 28.491C194.684 934.187 192 946.81 192 960.06c0 12.921 2.553 25.246 7.182 36.498 4.686 11.417 11.665 22.113 20.936 31.384a96.975 96.975 0 0 0 8.78 7.781z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconLightCheck",viewBox:"0 0 1920 1920"}),f["default"].createElement("g",{"fill-rule":"evenodd"},f["default"].createElement("path",{d:"M1640.95 346.964c37.487-37.487 98.27-37.482 135.758.006 37.49 37.49 37.496 98.269.006 135.758L687.05 1572.392c-37.487 37.487-98.27 37.482-135.758-.006-37.49-37.49-37.496-98.27-.006-135.759L1640.95 346.964z"}),f["default"].createElement("path",{d:"M143.287 1029.971c37.49-37.49 98.268-37.497 135.769.004l407.286 407.286c37.492 37.492 37.491 98.28.003 135.768-37.49 37.49-98.267 37.497-135.768-.004L143.291 1165.74c-37.492-37.492-37.492-98.28-.004-135.768z"})))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconLightClose",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M960 824.235L484.828 349.064c-37.492-37.492-98.278-37.495-135.768-.004-37.488 37.488-37.489 98.276.004 135.768L824.235 960l-475.171 475.172c-37.492 37.492-37.495 98.278-.004 135.768 37.488 37.488 98.276 37.489 135.768-.004L960 1095.765l475.172 475.171c37.492 37.492 98.278 37.495 135.768.004 37.488-37.488 37.489-98.276-.004-135.768L1095.765 960l475.171-475.172c37.492-37.492 37.495-98.278.004-135.768-37.488-37.488-98.276-37.489-135.768.004L960 824.235z","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(2),f=r(l),s=n(1),p=r(s),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return f["default"].createElement(p["default"],c({},this.props,{name:"IconLightTwitter",viewBox:"0 0 1920 1920"}),f["default"].createElement("path",{d:"M1835 375.663c-64.385 30.777-133.583 51.505-206.208 60.848 74.156-47.815 131.03-123.58 157.864-213.871-69.343 44.282-146.198 76.472-228.01 93.824-65.48-75.138-158.813-122.089-262.063-122.089-198.26 0-359.041 173.044-359.041 386.6 0 30.307 3.208 59.828 9.26 88.093-298.375-16.095-562.917-170.06-740.031-403.952-30.917 57.08-48.636 123.502-48.636 194.32 0 134.102 63.365 252.422 159.688 321.75-58.844-2.042-114.188-19.393-162.604-48.365v4.868c0 187.333 123.74 343.575 288.02 379.063-30.114 8.794-61.833 13.583-94.572 13.583-23.115 0-45.646-2.434-67.521-6.909 45.719 153.573 178.281 265.376 335.416 268.438-122.864 103.716-277.666 165.506-445.885 165.506-28.948 0-57.531-1.805-85.677-5.417 158.885 109.683 347.594 173.672 550.375 173.672 660.406 0 1021.49-589.087 1021.49-1099.975 0-16.723-.365-33.447-1.021-50.013 70.146-54.489 131.031-122.56 179.156-200.131v.157","fill-rule":"evenodd"}))}}]),t}(l.Component);t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.IconLightTwitter=t.IconLightClose=t.IconLightCheck=t.IconLightBack=t.IconLightAdd=t.IconBase=t.IconBoldClose=t.IconBoldCheck=t.IconBoldBack=t.IconBoldAdd=void 0;var o=n(12),u=r(o),i=n(13),c=r(i),a=n(14),l=r(a),f=n(15),s=r(f),p=n(1),d=r(p),h=n(16),y=r(h),b=n(17),v=r(b),w=n(18),O=r(w),g=n(19),m=r(g),j=n(20),_=r(j);t.IconBoldAdd=u["default"],t.IconBoldBack=c["default"],t.IconBoldCheck=l["default"],t.IconBoldClose=s["default"],t.IconBase=d["default"],t.IconLightAdd=y["default"],t.IconLightBack=v["default"],t.IconLightCheck=O["default"],t.IconLightClose=m["default"],t.IconLightTwitter=_["default"]}])});