'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	var url = 'http://mattwarren.us/';
	var link = '\xA9 Matt Warren';
	var disclosure = ' | This is not a product of Youtube';

	return _react2.default.createElement(
		'footer',
		null,
		_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'p',
				{ className: 'text-center' },
				_react2.default.createElement(
					'a',
					{ href: url },
					link
				),
				disclosure
			)
		)
	);
};

exports.default = Footer;