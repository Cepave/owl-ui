(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("delegate-to"), require("react-dom"), require("lodash.flatten"), require("react-addons-text-content"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "delegate-to", "react-dom", "lodash.flatten", "react-addons-text-content"], factory);
	else if(typeof exports === 'object')
		exports["OWLUI"] = factory(require("react"), require("classnames"), require("delegate-to"), require("react-dom"), require("lodash.flatten"), require("react-addons-text-content"));
	else
		root["OWLUI"] = factory(root["React"], root["classnames"], root["delegate-to"], root["ReactDOM"], root["lodash.flatten"], root["react-addons-text-content"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_29__) {
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
/******/ 	__webpack_require__.p = "//localhost:3001/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var OWLUI = function () {
	  function OWLUI() {
	    _classCallCheck(this, OWLUI);

	    this.Button = __webpack_require__(1);
	    this.Tab = __webpack_require__(7);
	    this.Select = __webpack_require__(15);
	    this.Tip = __webpack_require__(21);
	    this.Table = __webpack_require__(24);

	    this.config = {
	      debug: false
	    };
	  }

	  _createClass(OWLUI, [{
	    key: 'set',
	    value: function set(key, val) {
	      if (typeof key === 'string') {
	        this.config[key] = val;
	      } else {
	        this.config = _extends({}, this.config, key);
	      }

	      return this;
	    }
	  }]);

	  return OWLUI;
	}();

	module.exports = new OWLUI();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(3);

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var color = _props.color;
	      var size = _props.size;

	      var props = _objectWithoutProperties(_props, ['children', 'className', 'color', 'size']);

	      return _react2.default.createElement(
	        'button',
	        _extends({
	          className: style.btn + ' ' + className,
	          'data-color': '' + color,
	          'data-size': '' + size
	        }, props),
	        children
	      );
	    }
	  }]);

	  return Button;
	}(_react.Component);

	Button.propTypes = {
	  className: _react.PropTypes.string,
	  color: _react.PropTypes.string,
	  size: _react.PropTypes.string,
	  children: _react.PropTypes.node
	};
	Button.defaultProps = {
	  className: '',
	  color: 'primary',
	  size: 'default'
	};


	module.exports = Button;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"_3HT_XgJWH0W","btn-primary":"_3CvtnVrfYGT","btn-blue":"_1hJQhhPn7m0","btn-red":"_1wI94vy-2nB","btn-green":"_2YGIwpLGPav","btn-yellow":"_1ApbIluGoyj","btn-white":"_384K2tNzuS5","btn-outline":"MPrUBdmN7yb","btn-disabled":"_1j9inFoTYDE"};

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tab = __webpack_require__(8);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_tab2.default.Head = __webpack_require__(13);
	_tab2.default.Content = __webpack_require__(14);

	module.exports = _tab2.default;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _tab = __webpack_require__(9);

	var _tab2 = _interopRequireDefault(_tab);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _delegateTo = __webpack_require__(12);

	var _delegateTo2 = _interopRequireDefault(_delegateTo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tab = function (_React$Component) {
	  _inherits(Tab, _React$Component);

	  function Tab() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Tab);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tab)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _this.clickTab = function (e) {
	      e.stopPropagation();
	      var delegateTarget = e.delegateTarget;
	      var selected = _this.state.selected;
	      var hasHash = _this.props.hasHash;

	      var name = delegateTarget.getAttribute('name');

	      if (selected === name) {
	        return;
	      }

	      _this.setState({
	        selected: name
	      });

	      if (hasHash) {
	        window.history.pushState(null, '', '#' + name);
	      }
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tab, [{
	    key: 'findSelected',
	    value: function findSelected() {
	      var children = this.props.children;


	      var findChild = children.find(function (c) {
	        return c.props.isSelected;
	      });
	      return findChild && findChild.props.name || children[0].props.name;
	    }
	  }, {
	    key: 'setChildren',
	    value: function setChildren() {
	      var children = this.props.children;
	      var selected = this.state.selected;


	      return children.reduce(function (pv, c) {
	        var name = c.props.name;
	        var displayName = c.type.displayName;


	        pv[displayName].push((0, _react.cloneElement)(c, _extends({}, c.props, {
	          key: name,
	          isSelected: selected === name
	        })));

	        return pv;
	      }, { 'TabHead': [], 'TabContent': [] });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.state.selected = this.findSelected();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;

	      var props = _objectWithoutProperties(_props, ['className']);

	      var _setChildren = this.setChildren();

	      var TabHead = _setChildren.TabHead;
	      var TabContent = _setChildren.TabContent;


	      return _react2.default.createElement(
	        'div',
	        _extends({ className: (0, _classnames2.default)(_tab2.default.tab, className) }, props),
	        _jsx('div', {
	          'data-role': 'tab-head',
	          onClick: (0, _delegateTo2.default)('[data-role="tab-head-head"]', this.clickTab)
	        }, void 0, TabHead),
	        _jsx('div', {
	          'data-role': 'tab-content'
	        }, void 0, TabContent)
	      );
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var hasHash = this.props.hasHash;

	      if (hasHash) {
	        var hash = window.location.hash.slice(1);
	        if (hash) {
	          this.setState({
	            selected: hash
	          });
	        }
	      }
	    }
	  }]);

	  return Tab;
	}(_react2.default.Component);

	Tab.propTypes = {
	  hasHash: _react.PropTypes.bool
	};
	Tab.defaultProps = {
	  hasHash: false
	};


	module.exports = Tab;

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"tab":"_3E-4Tpyih6Q"};

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	TabHead.propTypes = {
	  name: _react.PropTypes.string.isRequired
	};
	TabHead.defaultProps = {
	  isSelected: false,
	  name: ''
	};
	TabHead.displayName = 'TabHead';

	function TabHead(_ref) {
	  var isSelected = _ref.isSelected;

	  var props = _objectWithoutProperties(_ref, ['isSelected']);

	  var selected = isSelected ? 1 : 0;
	  return _react2.default.createElement('div', _extends({}, props, { 'data-selected': selected, 'data-role': 'tab-head-head' }));
	}

	module.exports = TabHead;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	TabContent.propTypes = {
	  name: _react.PropTypes.string.isRequired
	};
	TabContent.defaultProps = {
	  isSelected: false,
	  name: ''
	};
	TabContent.displayName = 'TabContent';

	function TabContent(_ref) {
	  var isSelected = _ref.isSelected;

	  var props = _objectWithoutProperties(_ref, ['isSelected']);

	  var selected = isSelected ? 1 : 0;
	  return _react2.default.createElement('div', _extends({}, props, { 'data-selected': selected }));
	}
	module.exports = TabContent;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Select = __webpack_require__(16);
	Select.Opt = __webpack_require__(20);

	module.exports = Select;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _select = __webpack_require__(18);

	var _select2 = _interopRequireDefault(_select);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Select);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Select)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isOpen: false,
	      title: ''
	    }, _this.onBlur = function (e) {
	      _this.setState({
	        isOpen: false
	      });
	    }, _this.onChange = function (e, child) {
	      e.stopPropagation();
	      var _child$props = child.props;
	      var value = _child$props.value;
	      var children = _child$props.children;


	      if (value !== _this.value) {
	        _this.value = value;
	        _this.props.onChange(e, { value: value });
	      }

	      _this.setState({
	        isOpen: false,
	        title: children
	      });
	    }, _this.toggleMenu = function (e) {
	      e.stopPropagation();
	      if (_this.props.isDisabled) {
	        return;
	      }

	      _this.setState({
	        isOpen: !_this.state.isOpen
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Select, [{
	    key: 'findSelected',
	    value: function findSelected() {
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var children = _ref.children;

	      return (children.find(function (c) {
	        return c.props.isSelected;
	      }) || children[0]).props;
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var _this2 = this;

	      var children = this.props.children;


	      return children.map(function (c) {
	        var _c$props = c.props;
	        var value = _c$props.value;

	        var props = _objectWithoutProperties(_c$props, ['value']);

	        return (0, _react.cloneElement)(c, _extends({
	          key: value,
	          onClick: function onClick(e) {
	            return _this2.onChange.call(_this2, e, c);
	          }
	        }, props));
	      });
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var newProps = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      var _findSelected = this.findSelected(newProps);

	      var children = _findSelected.children;
	      var value = _findSelected.value;


	      this.state.title = children;
	      this.value = value;
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(newProps, newState) {
	      var props = this.props;
	      var state = this.state;


	      return props.isDisabled !== newProps.isDisabled || props.children !== newProps.children || state.isOpen !== newState.isOpen || state.title !== newState.title;
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(newProps, newState) {
	      var props = this.props;
	      var state = this.state;

	      if (props.children !== newProps.children) {
	        this.componentWillMount(newProps);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _selectCSS;

	      var _state = this.state;
	      var isOpen = _state.isOpen;
	      var title = _state.title;
	      var _props = this.props;
	      var isDisabled = _props.isDisabled;
	      var className = _props.className;

	      var props = _objectWithoutProperties(_props, ['isDisabled', 'className']);

	      var selectCSS = (_selectCSS = {}, _defineProperty(_selectCSS, _select2.default.selectOpen, isOpen), _defineProperty(_selectCSS, _select2.default.disabled, isDisabled), _selectCSS);

	      return _react2.default.createElement(
	        'div',
	        _extends({
	          className: (0, _classnames2.default)(_select2.default.select, className, selectCSS),
	          onBlur: this.onBlur,
	          tabIndex: '-1'
	        }, props),
	        _jsx('div', {
	          className: _select2.default.title,
	          onClick: this.toggleMenu
	        }, void 0, _jsx('div', {
	          className: _select2.default.titleText
	        }, void 0, title), _jsx('div', {
	          className: _select2.default.titleRight
	        }, void 0, _jsx('div', {
	          className: _select2.default.arrow
	        }))),
	        _jsx('div', {
	          className: _select2.default.optionBox
	        }, void 0, this.renderOptions())
	      );
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      var select = (0, _reactDom.findDOMNode)(this);
	      var isOpen = this.state.isOpen;


	      if (isOpen) {
	        select.focus();
	      }
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

	Select.propTypes = {
	  onChange: _react.PropTypes.func,
	  isDisabled: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool])
	};
	Select.defaultProps = {
	  isDisabled: false,
	  onChange: function onChange() {}
	};


	module.exports = Select;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"select":"fZkoDCJ13mr","disabled":"_3xov1CYwM0m","selectOpen":"_3QYjPkKe1mp","arrow":"BQBNZIpNklG","optionBox":"_1dsRhRa5ocQ","options":"_1lEmzcBlGDH","titleText":"_1vsmnNVqUCR","title":"_1pVRAcXpEkz","titleRight":"_1T7MA-GQrrw"};

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _select = __webpack_require__(18);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	Opt.propTypes = {};
	Opt.defaultProps = {};

	function Opt(_ref) {
	  var className = _ref.className;

	  var props = _objectWithoutProperties(_ref, ['className']);

	  return _react2.default.createElement('div', _extends({}, props, { className: (0, _classnames2.default)(className, _select2.default.options) }));
	}

	module.exports = Opt;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var s = __webpack_require__(22);

	Tip.propTypes = {
	  text: _react.PropTypes.string.isRequired,
	  pos: _react.PropTypes.string
	};

	Tip.defaultProps = {
	  text: '',
	  pos: 'top'
	};

	function Tip(_ref) {
	  var text = _ref.text;
	  var pos = _ref.pos;

	  var props = _objectWithoutProperties(_ref, ['text', 'pos']);

	  return _react2.default.createElement('div', _extends({}, props, { 'data-pos': pos, 'data-text': text, className: s.tip }));
	}

	module.exports = Tip;

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"tip":"cFX55UwxlIV"};

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _table = __webpack_require__(25);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_table2.default.Head = __webpack_require__(30);
	//Table.Row = require('./row')
	//Table.Col = require('./col')

	module.exports = _table2.default;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(17);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _table = __webpack_require__(26);

	var _table2 = _interopRequireDefault(_table);

	var _lodash = __webpack_require__(28);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactAddonsTextContent = __webpack_require__(29);

	var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Table = function (_React$Component) {
	  _inherits(Table, _React$Component);

	  function Table() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Table);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Table)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.isSorting = false, _this.state = {
	      theadHeight: 0,
	      isSorting: false,
	      ths: [],
	      trs: []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Table, [{
	    key: 'handleSort',
	    value: function handleSort(e, _ref) {
	      var idx = _ref.idx;

	      var props = _objectWithoutProperties(_ref, ['idx']);

	      var _state = this.state;
	      var ths = _state.ths;
	      var trs = _state.trs;

	      var defaultSort = ths[idx].children.props.sort;

	      this.isSorting = true;
	      this.setState({
	        ths: ths.map(function (th, i) {
	          var children = th.children;

	          var sort = children.props.sort;
	          var isSortable = sort === true || /^(1|0)$/.test(sort);

	          var newSort = i === idx ? sort === '1' ? '0' : '1' : isSortable;

	          th.children = (0, _react.cloneElement)(children, _extends({}, children.props, {
	            sort: newSort
	          }));

	          return th;
	        }),

	        trs: /^(1|0)$/.test(defaultSort) ? trs.reverse() : this.sort(idx)
	      });
	    }
	  }, {
	    key: 'sort',
	    value: function sort(idx) {
	      var _state2 = this.state;
	      var trs = _state2.trs;
	      var ths = _state2.ths;

	      var sort = ths[idx].children.props.sort;

	      return trs.sort(function (a, b) {
	        a = a.tds[idx];
	        b = b.tds[idx];
	        var isNumber = !isNaN(b) && !isNaN(a);

	        if (sort === '1') {
	          if (isNumber) {
	            return b - a;
	          } else {
	            return b.localeCompare(a);
	          }
	        } else {
	          if (isNumber) {
	            return a - b;
	          } else {
	            return a.localeCompare(b);
	          }
	        }
	      });
	    }
	  }, {
	    key: 'getRows',
	    value: function getRows() {
	      var _this2 = this;

	      var children = (0, _lodash2.default)(this.props.children);
	      var startSortIdx = void 0;

	      var data = children.reduce(function (data, c, idx) {
	        if (c.type === 'tr') {
	          data.trs.push({
	            children: c,
	            tds: c.props.children.map(function (cc) {
	              return (0, _reactAddonsTextContent2.default)(cc);
	            })
	          });
	        } else {
	          (function () {
	            // TableHead
	            var sort = c.props.sort;

	            var hasSort = /^(1|0)$/.test(sort);
	            var isSortable = sort === true || hasSort;

	            var props = _extends({}, c.props, {
	              idx: idx,
	              onClick: isSortable ? function (e) {
	                return _this2.handleSort.call(_this2, e, props);
	              } : undefined
	            });
	            data.ths.push({
	              idx: idx,
	              children: (0, _react.cloneElement)(c, props)
	            });

	            if (hasSort) {
	              startSortIdx = idx;
	            }
	          })();
	        }

	        return data;
	      }, { ths: [], trs: [] });

	      this.state = _extends({}, this.state, data);

	      if (startSortIdx !== undefined) {
	        this.sort(startSortIdx);
	      }

	      return data;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;

	      var props = _objectWithoutProperties(_props, ['className']);

	      if (!this.isSorting) {
	        this.getRows();
	      }

	      var _state3 = this.state;
	      var trs = _state3.trs;
	      var ths = _state3.ths;

	      return _jsx('table', {
	        className: (0, _classnames2.default)(_table2.default.table, className)
	      }, void 0, _react2.default.createElement(
	        'thead',
	        { ref: 'thead' },
	        _jsx('tr', {}, void 0, ths.map(function (th) {
	          return th.children;
	        }))
	      ), _react2.default.createElement(
	        'tbody',
	        { ref: 'tbody' },
	        trs.map(function (tr) {
	          return tr.children;
	        })
	      ));
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.isSorting = false;
	    }
	  }]);

	  return Table;
	}(_react2.default.Component);

	Table.propTypes = {
	  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	};
	Table.defaultProps = {
	  height: 'auto'
	};


	module.exports = Table;

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"tableBox":"_3adlk9vGHjm","table":"_3h2fLEI1ZcU","thead":"_245PJdnTNs4","tbody":"_4r8HKg7nPG5","thHide":"_1f6KiLJ2UwR","sortable":"_3x8M3YiBwjY"};

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _table = __webpack_require__(26);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	TableHead.propTypes = {
	  sort: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.bool])
	};

	TableHead.defaultProps = {
	  sort: '-1'
	};

	TableHead.displayName = 'TableHead';

	function TableHead(_ref) {
	  var className = _ref.className;
	  var children = _ref.children;
	  var sort = _ref.sort;

	  var props = _objectWithoutProperties(_ref, ['className', 'children', 'sort']);

	  var css = _defineProperty({}, _table2.default.sortable, sort === true || /^(1|0)$/.test(sort));

	  return _react2.default.createElement(
	    'th',
	    _extends({ className: (0, _classnames2.default)(className, css) }, props, { 'data-sort': sort }),
	    children
	  );
	}

	module.exports = TableHead;

/***/ }
/******/ ])
});
;