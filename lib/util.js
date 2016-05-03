'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Happy Hacking
 * Created by leiyouwho on 2/5/2016.
 */

/**
 * 将Object转为url params string
 * @param params
 * @returns {string}
 * @private
 */
var convertObjectToParams = exports.convertObjectToParams = function convertObjectToParams(params) {
  return Object.keys(params).map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');
};
//# sourceMappingURL=util.js.map