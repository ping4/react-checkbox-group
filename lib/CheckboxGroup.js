"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CheckboxGroup = function (props) {
    var children = props.children, name = props.name, checkedValues = props.value, onChange = props.onChange;
    var onCheckboxChange = function (checkboxValue, event) {
        if (event.target.checked) {
            onChange(checkedValues.concat(checkboxValue));
        }
        else {
            onChange(checkedValues.filter(function (v) { return v !== checkboxValue; }));
        }
    };
    var Checkbox = function (checkboxProps) {
        var cbValue = checkboxProps.value, disabled = checkboxProps.disabled, rest = __rest(checkboxProps, ["value", "disabled"]);
        var checked = checkedValues ? checkedValues.indexOf(cbValue) >= 0 : false;
        return (React.createElement("input", __assign({}, rest, { type: "checkbox", name: name, disabled: disabled, checked: checked, onChange: onCheckboxChange.bind(null, cbValue), value: cbValue })));
    };
    return children(Checkbox);
};
exports.default = CheckboxGroup;
