'use strict';

exports.__esModule = true;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _background = require('./background');

var _background2 = _interopRequireDefault(_background);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _mask = require('./mask');

var _mask2 = _interopRequireDefault(_mask);

var _networks = require('./networks');

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNetworkKey(props) {
  return props.network || (0, _networks.keyFor)(props.url);
}

function SocialIcon(props) {
  var url = props.url,
      network = props.network,
      color = props.color,
      className = props.className,
      label = props.label,
      rest = (0, _objectWithoutProperties3.default)(props, ['url', 'network', 'color', 'className', 'label']);

  var networkKey = getNetworkKey({ url: url, network: network });

  return _react2.default.createElement(
    'a',
    (0, _extends3.default)({}, rest, {
      href: url,
      target: '_blank',
      rel: 'noopener',
      className: (0, _classnames2.default)('social-icon', className),
      style: (0, _extends3.default)({}, _styles.socialIcon, props.style),
      'aria-label': label || networkKey }),
    _react2.default.createElement(
      'div',
      { className: 'social-container', style: _styles.socialContainer },
      _react2.default.createElement(
        'svg',
        { className: 'social-svg', style: _styles.socialSvg, viewBox: '0 0 64 64' },
        _react2.default.createElement(_background2.default, null),
        _react2.default.createElement(_icon2.default, { networkKey: networkKey }),
        _react2.default.createElement(_mask2.default, { networkKey: networkKey, color: color })
      )
    )
  );
}

exports.default = SocialIcon;