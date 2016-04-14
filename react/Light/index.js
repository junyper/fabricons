(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["FabriconsLight"] = factory(require("react"));
	else
		root["FabriconsLight"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _BaseIcon = __webpack_require__(3);

	var _BaseIcon2 = _interopRequireDefault(_BaseIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLightAdd = function (_Component) {
	  _inherits(IconLightAdd, _Component);

	  function IconLightAdd() {
	    _classCallCheck(this, IconLightAdd);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconLightAdd).apply(this, arguments));
	  }

	  _createClass(IconLightAdd, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _BaseIcon2.default,
	        _extends({}, this.props, {
	          name: 'IconLightAdd',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1056 864V192.005c0-53.02-42.98-96.005-96-96.005-53.016 0-96 42.983-96 96.005V864H192.005C138.985 864 96 906.98 96 960c0 53.016 42.983 96 96.005 96H864v671.995c0 53.02 42.98 96.005 96 96.005 53.016 0 96-42.983 96-96.005V1056h671.995c53.02 0 96.005-42.98 96.005-96 0-53.016-42.983-96-96.005-96H1056z', 'fill-rule': 'evenodd' })
	      );
	    }
	  }]);

	  return IconLightAdd;
	}(_react.Component);

	exports.default = IconLightAdd;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _shortid = __webpack_require__(4);

	var _shortid2 = _interopRequireDefault(_shortid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseIcon = function (_Component) {
	  _inherits(BaseIcon, _Component);

	  function BaseIcon(props) {
	    _classCallCheck(this, BaseIcon);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseIcon).call(this));

	    _this.titleId = props.name + '__' + _shortid2.default.generate();
	    _this.descId = props.name + '__' + _shortid2.default.generate();
	    return _this;
	  }

	  _createClass(BaseIcon, [{
	    key: 'renderTitle',
	    value: function renderTitle() {
	      var title = this.props.title;

	      return title ? _react2.default.createElement(
	        'title',
	        { id: this.titleId },
	        title
	      ) : null;
	    }
	  }, {
	    key: 'renderDesc',
	    value: function renderDesc() {
	      var desc = this.props.desc;

	      return desc ? _react2.default.createElement(
	        'desc',
	        { id: this.descId },
	        desc
	      ) : null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var viewBox = _props.viewBox;

	      return _react2.default.createElement(
	        'svg',
	        {
	          width: width,
	          height: height,
	          viewBox: viewBox,
	          'aria-labelledby': this.labelledBy,
	          role: this.role },
	        this.renderTitle(),
	        this.renderDesc(),
	        _react2.default.createElement(
	          'g',
	          { role: 'presentation' },
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'role',
	    get: function get() {
	      if (this.props.title) {
	        return 'img';
	      } else {
	        return 'presentation';
	      }
	    }
	  }, {
	    key: 'labelledBy',
	    get: function get() {
	      var ids = [];

	      if (this.props.title) {
	        ids.push(this.titleId);
	      }

	      if (this.props.desc) {
	        ids.push(this.descId);
	      }

	      return ids.length > 0 ? ids.join(' ') : null;
	    }
	  }]);

	  return BaseIcon;
	}(_react.Component);

	BaseIcon.propTypes = {
	  name: _react.PropTypes.string.isRequired,
	  children: _react.PropTypes.node.isRequired,
	  viewBox: _react.PropTypes.string.isRequired,
	  title: _react.PropTypes.string,
	  desc: _react.PropTypes.string,
	  width: _react.PropTypes.string,
	  height: _react.PropTypes.string
	};
	BaseIcon.defaultProps = {
	  width: '2rem',
	  height: '2rem'
	};
	exports.default = BaseIcon;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var alphabet = __webpack_require__(6);
	var encode = __webpack_require__(8);
	var decode = __webpack_require__(10);
	var isValid = __webpack_require__(11);

	// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
	// This number should be updated every year or so to keep the generated id short.
	// To regenerate `new Date() - 0` and bump the version. Always bump the version!
	var REDUCE_TIME = 1459707606518;

	// don't change unless we change the algos or REDUCE_TIME
	// must be an integer and less than 16
	var version = 6;

	// if you are using cluster or multiple servers use this to make each instance
	// has a unique value for worker
	// Note: I don't know if this is automatically set when using third
	// party cluster solutions such as pm2.
	var clusterWorkerId = __webpack_require__(12) || 0;

	// Counter is used when shortid is called multiple times in one second.
	var counter;

	// Remember the last time shortid was called in case counter is needed.
	var previousSeconds;

	/**
	 * Generate unique id
	 * Returns string id
	 */
	function generate() {

	    var str = '';

	    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

	    if (seconds === previousSeconds) {
	        counter++;
	    } else {
	        counter = 0;
	        previousSeconds = seconds;
	    }

	    str = str + encode(alphabet.lookup, version);
	    str = str + encode(alphabet.lookup, clusterWorkerId);
	    if (counter > 0) {
	        str = str + encode(alphabet.lookup, counter);
	    }
	    str = str + encode(alphabet.lookup, seconds);

	    return str;
	}


	/**
	 * Set the seed.
	 * Highly recommended if you don't want people to try to figure out your id schema.
	 * exposed as shortid.seed(int)
	 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
	 */
	function seed(seedValue) {
	    alphabet.seed(seedValue);
	    return module.exports;
	}

	/**
	 * Set the cluster worker or machine id
	 * exposed as shortid.worker(int)
	 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
	 * returns shortid module so it can be chained.
	 */
	function worker(workerId) {
	    clusterWorkerId = workerId;
	    return module.exports;
	}

	/**
	 *
	 * sets new characters to use in the alphabet
	 * returns the shuffled alphabet
	 */
	function characters(newCharacters) {
	    if (newCharacters !== undefined) {
	        alphabet.characters(newCharacters);
	    }

	    return alphabet.shuffled();
	}


	// Export all other functions as properties of the generate function
	module.exports = generate;
	module.exports.generate = generate;
	module.exports.seed = seed;
	module.exports.worker = worker;
	module.exports.characters = characters;
	module.exports.decode = decode;
	module.exports.isValid = isValid;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomFromSeed = __webpack_require__(7);

	var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var alphabet;
	var previousSeed;

	var shuffled;

	function reset() {
	    shuffled = false;
	}

	function setCharacters(_alphabet_) {
	    if (!_alphabet_) {
	        if (alphabet !== ORIGINAL) {
	            alphabet = ORIGINAL;
	            reset();
	        }
	        return;
	    }

	    if (_alphabet_ === alphabet) {
	        return;
	    }

	    if (_alphabet_.length !== ORIGINAL.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
	    }

	    var unique = _alphabet_.split('').filter(function(item, ind, arr){
	       return ind !== arr.lastIndexOf(item);
	    });

	    if (unique.length) {
	        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
	    }

	    alphabet = _alphabet_;
	    reset();
	}

	function characters(_alphabet_) {
	    setCharacters(_alphabet_);
	    return alphabet;
	}

	function setSeed(seed) {
	    randomFromSeed.seed(seed);
	    if (previousSeed !== seed) {
	        reset();
	        previousSeed = seed;
	    }
	}

	function shuffle() {
	    if (!alphabet) {
	        setCharacters(ORIGINAL);
	    }

	    var sourceArray = alphabet.split('');
	    var targetArray = [];
	    var r = randomFromSeed.nextValue();
	    var characterIndex;

	    while (sourceArray.length > 0) {
	        r = randomFromSeed.nextValue();
	        characterIndex = Math.floor(r * sourceArray.length);
	        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
	    }
	    return targetArray.join('');
	}

	function getShuffled() {
	    if (shuffled) {
	        return shuffled;
	    }
	    shuffled = shuffle();
	    return shuffled;
	}

	/**
	 * lookup shuffled letter
	 * @param index
	 * @returns {string}
	 */
	function lookup(index) {
	    var alphabetShuffled = getShuffled();
	    return alphabetShuffled[index];
	}

	module.exports = {
	    characters: characters,
	    seed: setSeed,
	    lookup: lookup,
	    shuffled: getShuffled
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	// Found this seed-based random generator somewhere
	// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

	var seed = 1;

	/**
	 * return a random number based on a seed
	 * @param seed
	 * @returns {number}
	 */
	function getNextValue() {
	    seed = (seed * 9301 + 49297) % 233280;
	    return seed/(233280.0);
	}

	function setSeed(_seed_) {
	    seed = _seed_;
	}

	module.exports = {
	    nextValue: getNextValue,
	    seed: setSeed
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var randomByte = __webpack_require__(9);

	function encode(lookup, number) {
	    var loopCounter = 0;
	    var done;

	    var str = '';

	    while (!done) {
	        str = str + lookup( ( (number >> (4 * loopCounter)) & 0x0f ) | randomByte() );
	        done = number < (Math.pow(16, loopCounter + 1 ) );
	        loopCounter++;
	    }
	    return str;
	}

	module.exports = encode;


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

	function randomByte() {
	    if (!crypto || !crypto.getRandomValues) {
	        return Math.floor(Math.random() * 256) & 0x30;
	    }
	    var dest = new Uint8Array(1);
	    crypto.getRandomValues(dest);
	    return dest[0] & 0x30;
	}

	module.exports = randomByte;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(6);

	/**
	 * Decode the id to get the version and worker
	 * Mainly for debugging and testing.
	 * @param id - the shortid-generated id.
	 */
	function decode(id) {
	    var characters = alphabet.shuffled();
	    return {
	        version: characters.indexOf(id.substr(0, 1)) & 0x0f,
	        worker: characters.indexOf(id.substr(1, 1)) & 0x0f
	    };
	}

	module.exports = decode;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var alphabet = __webpack_require__(6);

	function isShortId(id) {
	    if (!id || typeof id !== 'string' || id.length < 6 ) {
	        return false;
	    }

	    var characters = alphabet.characters();
	    var len = id.length;
	    for(var i = 0; i < len;i++) {
	        if (characters.indexOf(id[i]) === -1) {
	            return false;
	        }
	    }
	    return true;
	}

	module.exports = isShortId;


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = 0;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _BaseIcon = __webpack_require__(3);

	var _BaseIcon2 = _interopRequireDefault(_BaseIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLightBack = function (_Component) {
	  _inherits(IconLightBack, _Component);

	  function IconLightBack() {
	    _classCallCheck(this, IconLightBack);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconLightBack).apply(this, arguments));
	  }

	  _createClass(IconLightBack, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _BaseIcon2.default,
	        _extends({}, this.props, {
	          name: 'IconLightBack',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M228.899 1035.722L764.175 1571c37.49 37.49 98.277 37.488 135.765 0 37.49-37.49 37.493-98.271 0-135.765L520.764 1056.06h1111.243c53.016 0 95.993-42.984 95.993-96 0-53.02-42.988-96-95.993-96H519.764L898.94 484.884c37.49-37.491 37.488-98.277 0-135.765-37.49-37.49-98.271-37.493-135.765 0L220.36 891.934a96.61 96.61 0 0 0-2.222 2.28 95.61 95.61 0 0 0-18.6 28.491C194.684 934.187 192 946.81 192 960.06c0 12.921 2.553 25.246 7.182 36.498 4.686 11.417 11.665 22.113 20.936 31.384a96.975 96.975 0 0 0 8.78 7.781z', 'fill-rule': 'evenodd' })
	      );
	    }
	  }]);

	  return IconLightBack;
	}(_react.Component);

	exports.default = IconLightBack;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _BaseIcon = __webpack_require__(3);

	var _BaseIcon2 = _interopRequireDefault(_BaseIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLightCheck = function (_Component) {
	  _inherits(IconLightCheck, _Component);

	  function IconLightCheck() {
	    _classCallCheck(this, IconLightCheck);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconLightCheck).apply(this, arguments));
	  }

	  _createClass(IconLightCheck, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _BaseIcon2.default,
	        _extends({}, this.props, {
	          name: 'IconLightCheck',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement(
	          'g',
	          { 'fill-rule': 'evenodd' },
	          _react2.default.createElement('path', { d: 'M1640.95 346.964c37.487-37.487 98.27-37.482 135.758.006 37.49 37.49 37.496 98.269.006 135.758L687.05 1572.392c-37.487 37.487-98.27 37.482-135.758-.006-37.49-37.49-37.496-98.27-.006-135.759L1640.95 346.964z' }),
	          _react2.default.createElement('path', { d: 'M143.287 1029.971c37.49-37.49 98.268-37.497 135.769.004l407.286 407.286c37.492 37.492 37.491 98.28.003 135.768-37.49 37.49-98.267 37.497-135.768-.004L143.291 1165.74c-37.492-37.492-37.492-98.28-.004-135.768z' })
	        )
	      );
	    }
	  }]);

	  return IconLightCheck;
	}(_react.Component);

	exports.default = IconLightCheck;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _BaseIcon = __webpack_require__(3);

	var _BaseIcon2 = _interopRequireDefault(_BaseIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLightClose = function (_Component) {
	  _inherits(IconLightClose, _Component);

	  function IconLightClose() {
	    _classCallCheck(this, IconLightClose);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconLightClose).apply(this, arguments));
	  }

	  _createClass(IconLightClose, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _BaseIcon2.default,
	        _extends({}, this.props, {
	          name: 'IconLightClose',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M960 824.235L484.828 349.064c-37.492-37.492-98.278-37.495-135.768-.004-37.488 37.488-37.489 98.276.004 135.768L824.235 960l-475.171 475.172c-37.492 37.492-37.495 98.278-.004 135.768 37.488 37.488 98.276 37.489 135.768-.004L960 1095.765l475.172 475.171c37.492 37.492 98.278 37.495 135.768.004 37.488-37.488 37.489-98.276-.004-135.768L1095.765 960l475.171-475.172c37.492-37.492 37.495-98.278.004-135.768-37.488-37.488-98.276-37.489-135.768.004L960 824.235z', 'fill-rule': 'evenodd' })
	      );
	    }
	  }]);

	  return IconLightClose;
	}(_react.Component);

	exports.default = IconLightClose;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _BaseIcon = __webpack_require__(3);

	var _BaseIcon2 = _interopRequireDefault(_BaseIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconLightTwitter = function (_Component) {
	  _inherits(IconLightTwitter, _Component);

	  function IconLightTwitter() {
	    _classCallCheck(this, IconLightTwitter);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(IconLightTwitter).apply(this, arguments));
	  }

	  _createClass(IconLightTwitter, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        _BaseIcon2.default,
	        _extends({}, this.props, {
	          name: 'IconLightTwitter',
	          viewBox: '0 0 1920 1920' }),
	        _react2.default.createElement('path', { d: 'M1835 375.663c-64.385 30.777-133.583 51.505-206.208 60.848 74.156-47.815 131.03-123.58 157.864-213.871-69.343 44.282-146.198 76.472-228.01 93.824-65.48-75.138-158.813-122.089-262.063-122.089-198.26 0-359.041 173.044-359.041 386.6 0 30.307 3.208 59.828 9.26 88.093-298.375-16.095-562.917-170.06-740.031-403.952-30.917 57.08-48.636 123.502-48.636 194.32 0 134.102 63.365 252.422 159.688 321.75-58.844-2.042-114.188-19.393-162.604-48.365v4.868c0 187.333 123.74 343.575 288.02 379.063-30.114 8.794-61.833 13.583-94.572 13.583-23.115 0-45.646-2.434-67.521-6.909 45.719 153.573 178.281 265.376 335.416 268.438-122.864 103.716-277.666 165.506-445.885 165.506-28.948 0-57.531-1.805-85.677-5.417 158.885 109.683 347.594 173.672 550.375 173.672 660.406 0 1021.49-589.087 1021.49-1099.975 0-16.723-.365-33.447-1.021-50.013 70.146-54.489 131.031-122.56 179.156-200.131v.157', 'fill-rule': 'evenodd' })
	      );
	    }
	  }]);

	  return IconLightTwitter;
	}(_react.Component);

	exports.default = IconLightTwitter;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IconLightTwitter = exports.IconLightClose = exports.IconLightCheck = exports.IconLightBack = exports.IconLightAdd = undefined;

	var _IconLightAdd2 = __webpack_require__(1);

	var _IconLightAdd3 = _interopRequireDefault(_IconLightAdd2);

	var _IconLightBack2 = __webpack_require__(13);

	var _IconLightBack3 = _interopRequireDefault(_IconLightBack2);

	var _IconLightCheck2 = __webpack_require__(14);

	var _IconLightCheck3 = _interopRequireDefault(_IconLightCheck2);

	var _IconLightClose2 = __webpack_require__(15);

	var _IconLightClose3 = _interopRequireDefault(_IconLightClose2);

	var _IconLightTwitter2 = __webpack_require__(16);

	var _IconLightTwitter3 = _interopRequireDefault(_IconLightTwitter2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.IconLightAdd = _IconLightAdd3.default;
	exports.IconLightBack = _IconLightBack3.default;
	exports.IconLightCheck = _IconLightCheck3.default;
	exports.IconLightClose = _IconLightClose3.default;
	exports.IconLightTwitter = _IconLightTwitter3.default;

/***/ }
/******/ ])
});
;