'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET = undefined;

var _Global = require('./Global');

var _Global2 = _interopRequireDefault(_Global);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Happy Hacking
 * Created by leiyouwho on 2/5/2016.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');

var GET = exports.GET = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path, params) {
    var RequestURL, response, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            RequestURL = '' + _Global2.default.RootURL + path + '?' + (0, _util.convertObjectToParams)(params);
            _context.prev = 1;
            _context.next = 4;
            return fetch(RequestURL, {
              method: 'GET',
              headers: {},
              mode: 'cors'
            });

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
            result = _context.sent;

            console.log('GET: ' + RequestURL + ' => result: ' + result + ' ');
            return _context.abrupt('return', result);

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](1);

            console.warn('GET => err: ' + _context.t0);
            return _context.abrupt('return', {
              errMsg: _context.t0.message
            });

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[1, 12]]);
  }));

  return function GET(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=GET.js.map