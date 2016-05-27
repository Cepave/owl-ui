(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-addons-pure-render-mixin"), require("react-dom"), require("react-tag"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-addons-pure-render-mixin", "react-dom", "react-tag"], factory);
	else if(typeof exports === 'object')
		exports["OWLUI"] = factory(require("react"), require("react-addons-pure-render-mixin"), require("react-dom"), require("react-tag"));
	else
		root["OWLUI"] = factory(root["React"], root["react-addons-pure-render-mixin"], root["ReactDOM"], root["react-tag"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_19__) {
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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  Button: __webpack_require__(2),
	  Tab: __webpack_require__(9),
	  Select: __webpack_require__(15),
	  Tip: __webpack_require__(20)
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsPureRenderMixin = __webpack_require__(4);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(5);

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button(props) {
	    _classCallCheck(this, Button);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

	    _this.shouldComponentUpdate = _reactAddonsPureRenderMixin2.default.shouldComponentUpdate.bind(_this);
	    return _this;
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;

	      var props = _objectWithoutProperties(_props, ['children', 'className']);

	      return _react2.default.createElement(
	        'button',
	        _extends({ className: style.btn + ' ' + className }, props),
	        children
	      );
	    }
	  }]);

	  return Button;
	}(_react.Component);

	Button.propTypes = {
	  className: _react.PropTypes.string,
	  children: _react.PropTypes.node
	};
	Button.defaultProps = {
	  className: ''
	};


	module.exports = Button;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"btn":"_3HT_XgJWH0W","btn-primary":"_3CvtnVrfYGT","btn-blue":"_1hJQhhPn7m0","btn-red":"_1wI94vy-2nB","btn-green":"_2YGIwpLGPav","btn-yellow":"_1ApbIluGoyj","btn-white":"_384K2tNzuS5","btn-outline":"MPrUBdmN7yb","btn-disabled":"_1j9inFoTYDE"};

/***/ },
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tab = __webpack_require__(10);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_tab2.default.Head = __webpack_require__(13);
	_tab2.default.Content = __webpack_require__(14);

	module.exports = _tab2.default;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _tab = __webpack_require__(11);

	var _tab2 = _interopRequireDefault(_tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

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

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tab)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Tab, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.state.selected = this.findSelected();
	    }
	  }, {
	    key: 'findSelected',
	    value: function findSelected() {
	      var children = this.props.children;


	      var findChild = children.find(function (c) {
	        return c.props.isSelected;
	      });
	      return findChild && findChild.props.name || children[0].props.name;
	    }
	  }, {
	    key: 'clickTab',
	    value: function clickTab(e, _ref) {
	      var name = _ref.name;

	      e.stopPropagation();
	      var selected = this.state.selected;

	      if (selected === name) {
	        return;
	      }

	      this.setState({
	        selected: name
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref2, _ref3) {
	      var selected = _ref3.selected;

	      _objectDestructuringEmpty(_ref2);

	      var state = this.state;

	      return selected !== state.selected;
	    }
	  }, {
	    key: 'setChildren',
	    value: function setChildren() {
	      var _this2 = this;

	      var children = this.props.children;
	      var selected = this.state.selected;


	      return children.reduce(function (pv, c) {
	        var name = c.props.name;
	        var displayName = c.type.displayName;


	        pv[displayName].push((0, _react.cloneElement)(c, _extends({}, c.props, {
	          key: name,
	          onClick: displayName === 'TabHead' ? function (e) {
	            return _this2.clickTab.call(_this2, e, c.props);
	          } : undefined,
	          isSelected: selected === name
	        })));

	        return pv;
	      }, { 'TabHead': [], 'TabContent': [] });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _setChildren = this.setChildren();

	      var TabHead = _setChildren.TabHead;
	      var TabContent = _setChildren.TabContent;

	      return _react2.default.createElement(
	        'div',
	        { className: _tab2.default.tab },
	        _react2.default.createElement(
	          'div',
	          { 'data-role': 'tab-head' },
	          TabHead
	        ),
	        _react2.default.createElement(
	          'div',
	          { 'data-role': 'tab-content' },
	          TabContent
	        )
	      );
	    }
	  }]);

	  return Tab;
	}(_react2.default.Component);

	Tab.propTypes = {};
	Tab.defaultProps = {};


	module.exports = Tab;

/***/ },
/* 11 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"tab":"_3E-4Tpyih6Q"};

/***/ },
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

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
	  return _react2.default.createElement('div', _extends({}, props, { 'data-selected': selected }));
	}

	module.exports = TabHead;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(16);

	var _select = __webpack_require__(17);

	var _select2 = _interopRequireDefault(_select);

	var _reactTag = __webpack_require__(19);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

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
	    }, _this.onChange = function (e, option) {
	      e.stopPropagation();
	      var label = option.label;
	      var value = option.value;


	      if (value !== _this._value) {
	        _this._value = value;
	        _this.props.onChange(e, { value: value });
	      }

	      _this.setState({
	        isOpen: false,
	        title: label
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
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _this2 = this;

	      var options = this.props.options;


	      this._options = options.reduce(function (pv, cv) {
	        var label = cv.label;
	        var value = cv.value;
	        var selected = cv.selected;

	        pv[value] = {
	          label: label, value: value
	        };
	        if (selected) {
	          _this2._value = value;
	        }
	        return pv;
	      }, {});

	      if (this._value === undefined) {
	        this._value = options[0].value;
	      }
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions() {
	      var _this3 = this;

	      var options = this.props.options;

	      return options.map(function (option, idx) {
	        var label = option.label;
	        var value = option.value;

	        return _react2.default.createElement(
	          'div',
	          {
	            key: value,
	            onClick: function onClick(e) {
	              return _this3.onChange.call(_this3, e, option);
	            },
	            className: _select2.default.options },
	          label
	        );
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(_ref, _ref2) {
	      _objectDestructuringEmpty(_ref2);

	      _objectDestructuringEmpty(_ref);

	      return true;
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
	  }, {
	    key: 'render',
	    value: function render() {
	      var _css;

	      var _state = this.state;
	      var isOpen = _state.isOpen;
	      var title = _state.title;
	      var _props = this.props;
	      var options = _props.options;
	      var isDisabled = _props.isDisabled;

	      var props = _objectWithoutProperties(_props, ['options', 'isDisabled']);

	      var _options = this._options;
	      var _value = this._value;


	      var css = (_css = {}, _defineProperty(_css, _select2.default.selectOpen, isOpen), _defineProperty(_css, _select2.default.disabled, isDisabled), _css);

	      var _title = title || _options[_value].label;

	      return _react2.default.createElement(
	        _reactTag.Div,
	        _extends({}, props, {
	          className: '' + _select2.default.select,
	          css: css,
	          onBlur: this.onBlur,
	          tabIndex: '-1'
	        }),
	        _react2.default.createElement(
	          'div',
	          { className: _select2.default.title, onClick: this.toggleMenu },
	          _react2.default.createElement(
	            'div',
	            null,
	            ' ',
	            _title
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _select2.default.titleRight },
	            _react2.default.createElement('div', { className: _select2.default.arrow })
	          )
	        ),
	        _react2.default.createElement(
	          _reactTag.Div,
	          { className: _select2.default.optionBox, show: isOpen },
	          this.renderOptions()
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

	Select.propTypes = {
	  options: _react.PropTypes.array.isRequired,
	  onChange: _react.PropTypes.func,
	  isDisabled: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool])
	};
	Select.defaultProps = {
	  options: [],
	  isDisabled: false,
	  onChange: function onChange() {}
	};


	module.exports = Select;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"select":"fZkoDCJ13mr","optionBox":"_1dsRhRa5ocQ","disabled":"_3xov1CYwM0m","selectOpen":"_3QYjPkKe1mp","arrow":"BQBNZIpNklG","options":"_1lEmzcBlGDH","title":"_1pVRAcXpEkz","titleRight":"_1T7MA-GQrrw"};

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var s = __webpack_require__(21);

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
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"tip":"cFX55UwxlIV"};

/***/ }
/******/ ])
});
;