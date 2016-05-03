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
export const convertObjectToParams = (params: {}): string => {
  return Object.keys(params).map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
}).join('&');
};


