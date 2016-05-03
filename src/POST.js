/**
 * Happy Hacking
 * Created by leiyouwho on 2/5/2016.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');
import Global from './Global';

export const POSTJSON = async (path: string, params: Object ) => {
  const RequestURL: string = Global.RootURL + path;
  const body: string = JSON.stringify(params);
  try {
    const response = await fetch(RequestURL, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body,
    });
    const result = await response.json();
    console.log(`POSTJSON: ${RequestURL} => result: ${result} `);
    return result;
  } catch (err) {
    console.warn(`POSTJSON => err: ${err}`);
    return {
      errMsg: err.message,
    };
  }
};

export const POSTForm = async (path: string, params: Object ) => {
  const RequestURL: string = Global.RootURL + path;
  const formData = new FormData();
  for (let key in params) {
    formData.append(key, params[key]);
  }
  const body = formData;
  try {
    const response = await fetch(RequestURL, {
      method: 'POST',
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
      },
      body,
    });
    const result = await response.json();
    console.log(`POSTForm: ${RequestURL} => result: ${result} `);
    return result;
  } catch (err) {
    console.warn(`POSTForm => err: ${err}`);
    return {
      errMsg: err.message,
    };
  }
};