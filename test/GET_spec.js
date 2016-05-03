/**
 * Happy Hacking
 * Created by leiyouwho on 3/5/2016.
 */

import HTTPRequest from '../src/index';

var GetRequest = new HTTPRequest('http://localhost:3000').GET;
// var GetRequest2 = new HTTPRequest().GET;
var GetRequest2 = new HTTPRequest().POSTJSON;

GetRequest('/ssss/', {hello: 'hello'});
GetRequest2('/ffff/', {hello: 'hello'});
