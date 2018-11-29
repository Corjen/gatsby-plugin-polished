"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

// Add Babel plugin
try {
  require.resolve("babel-plugin-polished");
} catch (e) {
  throw new Error("'babel-plugin-polished' is not installed which is needed by plugin 'gatsby-plugin-polished'");
}

exports.onCreateBabelConfig = function (_ref, pluginOptions) {
  var stage = _ref.stage,
      actions = _ref.actions;
  var ssr = stage === "build-html" || stage === "build-javascript";
  console.log('ADDING POLISHED');
  actions.setBabelPlugin({
    name: "babel-plugin-polished",
    stage: stage,
    options: (0, _extends2.default)({}, pluginOptions, {
      ssr: ssr
    })
  });
};