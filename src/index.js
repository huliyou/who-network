/**
 * Happy Hacking
 * Created by leiyouwho on 1/5/2016.
 */

import { GET } from './GET';
import { POSTJSON } from './POST';
import Global from './Global'
import { isString } from 'strman';

export default class HTTPRequest {
  constructor(RootURL: string) {
    if (isString(RootURL) && RootURL!=='') {
      Global.RootURL = RootURL;
    } else if(RootURL === undefined) {
      if (!(isString(Global.RootURL) && RootURL!== '')) {
        console.log('请设置RootURL');
      }
    } else {
      console.log('请输入正确格式的RootURL');
    }
  }
  async GET(path, params) {
    return await GET(path, params);
  }
  async POSTJSON(path, params) {
    return await POSTJSON(path, params);
  }
  async POSTFORM(path, params) {
    return;
  }
  async UploadFile(path, files) {
    return;
  }
}

