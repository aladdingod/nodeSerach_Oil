'use strict';
/*
要单独运行该测试请使用npm安装mocha模块,
然后在包目录下在运行命令: mocha example_test.js
 */
var assert = require('assert');
var showapiSdk = require('showapi-sdk');
//设置你测试用的appId和secret,img
var appId='49792';
var secret='46416517bb16492987df29b9039a4921';
var img='null';

//开启debug
//showapiSdk.debug(true);

if(!(appId&&secret&&img)){
  console.error('请先设置appId等测试参数,详见样例代码内注释!')
  return;
}

//全局默认设置
showapiSdk.setting({
  url:'http://route.showapi.com/138-46',//你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
  appId:appId,//你的应用id
  secret:secret,//你的密钥
  timeout:5000,//http超时设置
  options:{//默认请求参数,极少用到
    testParam:'test'
  }
})


module.exports = { 
    getDataInfo: function(prov,callBack){ 
        var request=showapiSdk.request('http://route.showapi.com/138-46',appId,secret);
		request.appendText('prov',prov);
		var dataTest = {};
		request.post(function(data){
		  assert(data.showapi_res_code==0,"接口返回系统错误:"+data.showapi_res_error);
		  dataTest = data.showapi_res_body.list;
		  //callBack(JSON.stringify(dataTest));
		  callBack(dataTest);
		});
		return dataTest;
    }
};




		