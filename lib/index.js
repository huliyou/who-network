'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Happy Hacking
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by leiyouwho on 1/5/2016.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _GET2 = require('./GET');

var _POST = require('./POST');

var _Global = require('./Global');

var _Global2 = _interopRequireDefault(_Global);

var _strman = require('strman');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HTTPRequest = function () {
  function HTTPRequest(RootURL) {
    _classCallCheck(this, HTTPRequest);

    if ((0, _strman.isString)(RootURL) && RootURL !== '') {
      _Global2.default.RootURL = RootURL;
    } else if (RootURL === undefined) {
      if (!((0, _strman.isString)(_Global2.default.RootURL) && RootURL !== '')) {
        console.log('请设置RootURL');
      }
    } else {
      console.log('请输入正确格式的RootURL');
    }
  }

  _createClass(HTTPRequest, [{
    key: 'GET',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path, params) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _GET2.GET)(path, params);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function GET(_x, _x2) {
        return ref.apply(this, arguments);
      }

      return GET;
    }()
  }, {
    key: 'POSTJSON',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(path, params) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _POST.POSTJSON)(path, params);

              case 2:
                return _context2.abrupt('return', _context2.sent);

              case 3:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function POSTJSON(_x3, _x4) {
        return ref.apply(this, arguments);
      }

      return POSTJSON;
    }()
  }, {
    key: 'POSTFORM',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(path, params) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt('return');

              case 1:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function POSTFORM(_x5, _x6) {
        return ref.apply(this, arguments);
      }

      return POSTFORM;
    }()
  }, {
    key: 'UploadFile',
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(path, files) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return');

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function UploadFile(_x7, _x8) {
        return ref.apply(this, arguments);
      }

      return UploadFile;
    }()
  }]);

  return HTTPRequest;
}();

exports.default = HTTPRequest;
//# sourceMappingURL=index.js.map