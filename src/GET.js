/**
 * Happy Hacking
 * Created by leiyouwho on 2/5/2016.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');

import Global from './Global';
import { convertObjectToParams } from './util';
export const GET = async (path: string, params: Object ) => {
  const RequestURL = `${Global.RootURL}${path}?${convertObjectToParams(params)}`;
  try {
    const response = await fetch(RequestURL, {
      method: 'GET',
      headers: {
      },
      mode: 'cors',
    });
    const result = await response.json();
    console.log(`GET: ${RequestURL} => result: ${result} `);
    return result;
  } catch (err) {
    console.warn(`GET => err: ${err}`);
    return {
      errMsg: err.message,
    };
  }
};