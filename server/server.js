"use strict";

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _initializeSocketIo = require("./modules/initializeSocketIo");

var _initializeSocketIo2 = _interopRequireDefault(_initializeSocketIo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = require('react-hot-loader').enterModule;

  enterModule && enterModule(module);
})();

var app = (0, _express2.default)();
var server = _http2.default.createServer(app);

(0, _initializeSocketIo2.default)(server);
app.use(_express2.default.static(_path2.default.join(__dirname, "public")));
server.listen(3000);
;

(function () {
  var reactHotLoader = require('react-hot-loader').default;

  var leaveModule = require('react-hot-loader').leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(app, "app", "src/server/server.js");
  reactHotLoader.register(server, "server", "src/server/server.js");
  leaveModule(module);
})();

;

//# sourceMappingURL=server.js.map