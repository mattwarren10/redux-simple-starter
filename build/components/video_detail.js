"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require("react-intl");

var _loading_icon = require("./loading_icon");

var _loading_icon2 = _interopRequireDefault(_loading_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoDetail = function VideoDetail(_ref) {
  var video = _ref.video;

  if (!video) {
    return _react2.default.createElement(
      "div",
      { id: "loading-icon" },
      _react2.default.createElement(_loading_icon2.default, null)
    );
  }

  var videoId = video.id.videoId;
  var url = "https://www.youtube.com/embed/" + videoId;

  return _react2.default.createElement(
    "div",
    { className: "video-detail col-md-8" },
    _react2.default.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      _react2.default.createElement("iframe", { className: "embed-responsive-item", src: url })
    ),
    _react2.default.createElement(
      "div",
      { className: "details" },
      _react2.default.createElement(
        "div",
        { className: "title" },
        video.snippet.title
      ),
      _react2.default.createElement(
        "div",
        { className: "description" },
        video.snippet.description
      ),
      _react2.default.createElement(
        "div",
        { className: "published-at" },
        _react2.default.createElement(_reactIntl.FormattedDate, {
          value: new Date(video.snippet.publishedAt),
          day: "numeric",
          month: "long",
          year: "numeric" })
      )
    )
  );
};

exports.default = VideoDetail;