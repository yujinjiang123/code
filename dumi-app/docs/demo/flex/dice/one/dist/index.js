"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
require("./index.less");
var App = function () {
    var _a = react_1.useState('stretch'), value = _a[0], setValue = _a[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Radio.Group, { value: value, onChange: function (e) {
                setValue(e.target.value);
            }, style: { marginBottom: 16 } },
            react_1["default"].createElement(antd_1.Radio, { value: 'stretch' }, "\u5DE6\u4E0A\u89D2"),
            react_1["default"].createElement(antd_1.Radio, { value: 'center-1' }, "\u5C45\u4E2D\u5BF9\u9F50"),
            react_1["default"].createElement(antd_1.Radio, { value: 'right-1' }, "\u53F3\u4E0A\u89D2"),
            react_1["default"].createElement(antd_1.Radio, { value: 'left-2' }, "\u5782\u76F4\u5C45\u4E2D-\u5DE6"),
            react_1["default"].createElement(antd_1.Radio, { value: 'center-2' }, "\u5782\u76F4\u5C45\u4E2D"),
            react_1["default"].createElement(antd_1.Radio, { value: 'right-2' }, "\u5782\u76F4\u5C45\u4E2D-\u53F3"),
            react_1["default"].createElement(antd_1.Radio, { value: 'left-3' }, "\u5E95\u90E8-\u5DE6"),
            react_1["default"].createElement(antd_1.Radio, { value: 'center-3' }, "\u5E95\u90E8\u5C45\u4E2D"),
            react_1["default"].createElement(antd_1.Radio, { value: 'right-3' }, "\u5E95\u90E8-\u53F3")),
        react_1["default"].createElement("div", { className: "container " + value },
            react_1["default"].createElement("div", { className: "dot" }))));
};
exports["default"] = (function () { return react_1["default"].createElement(App, null); });
