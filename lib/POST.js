'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSTForm = exports.POSTJSON = undefined;

var _Global = require('./Global');

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Happy Hacking
 * Created by leiyouwho on 2/5/2016.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');
var POSTJSON = exports.POSTJSON = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path, params) {
    var RequestURL, body, response, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            RequestURL = _Global2.default.RootURL + path;
            body = JSON.stringify(params);
            _context.prev = 2;
            _context.next = 5;
            return fetch(RequestURL, {
              method: 'POST',
              headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
              },
              body: body
            });

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            result = _context.sent;

            console.log('POSTJSON: ' + RequestURL + ' => result: ' + result + ' ');
            return _context.abrupt('return', result);

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](2);

            console.warn('POSTJSON => err: ' + _context.t0);
            return _context.abrupt('return', {
              errMsg: _context.t0.message
            });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[2, 13]]);
  }));

  return function POSTJSON(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();

var POSTForm = exports.POSTForm = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(path, params) {
    var RequestURL, formData, key, body, response, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            RequestURL = _Global2.default.RootURL + path;
            formData = new FormData();

            for (key in params) {
              formData.append(key, params[key]);
            }
            body = formData;
            _context2.prev = 4;
            _context2.next = 7;
            return fetch(RequestURL, {
              method: 'POST',
              headers: {
                Accept: '*/*',
                'Content-Type': 'application/json'
              },
              body: body
            });

          case 7:
            response = _context2.sent;
            _context2.next = 10;
            return response.json();

          case 10:
            result = _context2.sent;

            console.log('POSTForm: ' + RequestURL + ' => result: ' + result + ' ');
            return _context2.abrupt('return', result);

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2['catch'](4);

            console.warn('POSTForm => err: ' + _context2.t0);
            return _context2.abrupt('return', {
              errMsg: _context2.t0.message
            });

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[4, 15]]);
  }));

  return function POSTForm(_x3, _x4) {
    return ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=POST.js.map