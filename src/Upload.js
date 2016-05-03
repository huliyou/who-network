/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

require('es6-promise').polyfill();
require('isomorphic-fetch');
import Global from './Global';

export const UploadFile = async (path: string, file) => {
  const RequestURL: string = Global.RootURL + path;
  const formData = new FormData();
  formData.append(file.name, file.file);
  const body = data;
  try {
    const response = await fetch(RequestURL, {
      method: 'POST',
      headers: {
        Accept: '*/*',
      },
      body,
    });
    const result = await response.json();
    console.log(`UploadFile: ${RequestURL} => result: ${result} `);
    return result;
  } catch (err) {
    console.warn(`UploadFile => err: ${err}`);
    return {
      errMsg: err.message,
    };
  }
};