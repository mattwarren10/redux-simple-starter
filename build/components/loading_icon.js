'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingIcon = function (_React$Component) {
	_inherits(LoadingIcon, _React$Component);

	function LoadingIcon() {
		_classCallCheck(this, LoadingIcon);

		return _possibleConstructorReturn(this, (LoadingIcon.__proto__ || Object.getPrototypeOf(LoadingIcon)).apply(this, arguments));
	}

	_createClass(LoadingIcon, [{
		key: 'render',
		value: function render() {
			var background = {
				position: 'fixed',
				background: '#fff',
				width: '100%',
				height: '100vh',
				top: '0',
				bottom: '0',
				left: '0',
				right: '0',
				zIndex: '999999'
			};

			var loadingContainer = {
				position: 'relative'
			};

			var loadingIcon = {
				width: '155px',
				height: '155px',
				position: 'absolute',
				left: '50%',
				top: '50%',
				marginLeft: '-77.5px',
				marginTop: '-77.5'
			};

			var LogoIcon = {
				position: 'absolute',
				width: '150px',
				height: '150px',
				left: '25%',
				top: '23%'
			};

			return _react2.default.createElement(
				'div',
				{ id: 'icon-background', style: background },
				_react2.default.createElement(
					'div',
					{ style: loadingIcon },
					_react2.default.createElement(
						'div',
						{ style: loadingContainer },
						_react2.default.createElement('div', { 'data-loader': 'logo-circle' })
					)
				)
			);
		}
	}]);

	return LoadingIcon;
}(_react2.default.Component);

exports.default = LoadingIcon;