'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadFile = undefined;

var _Global = require('./Global');

var _Global2 = _interopRequireDefault(_Global);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');
var UploadFile = exports.UploadFile = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path, file) {
    var RequestURL, formData, body, response, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            RequestURL = _Global2.default.RootURL + path;
            formData = new FormData();

            formData.append(file.name, file.file);
            body = data;
            _context.prev = 4;
            _context.next = 7;
            return fetch(RequestURL, {
              method: 'POST',
              headers: {
                Accept: '*/*'
              },
              body: body
            });

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            result = _context.sent;

            console.log('UploadFile: ' + RequestURL + ' => result: ' + result + ' ');
            return _context.abrupt('return', result);

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](4);

            console.warn('UploadFile => err: ' + _context.t0);
            return _context.abrupt('return', {
              errMsg: _context.t0.message
            });

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[4, 15]]);
  }));

  return function UploadFile(_x, _x2) {
    return ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=Upload.js.map