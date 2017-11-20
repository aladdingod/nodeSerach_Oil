
##**Node的第一个应用**
####node+express+showapi(今日油价查询)
###应用简介
这是一个查询工具应用，主要目的是实时查询今日油价，提供了全国省市输入查询。获取今日油价包括（p0、89、90、92、93、95、97）。采用了Node.js构建web端并通过易源提供的免费接口获取数据信息。
###项目主框架:Express 简介
Express 是一个非常流行的node.js的web框架。基于connect(node中间件框架)。提供了很多便于处理http请求等web开发相关的扩展。
Express的特性
1.基于Connect构建
2.健壮的路由
3.提供丰富的HTTP处理方法
4.支持众多视图模板引擎(14+)
5.内容协商
6.专注于提供高性能
7.环境基于配置
8.快速构建可执行的应用程序
9.高测试覆盖率
###前端工具
jquery、layer
###项目组织结构
![这里写图片描述](http://img.blog.csdn.net/20171117173043479?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

###NPM - Node.js 模块依赖管理工具
npm是管理node.js模块依赖的工具，依赖于开源技术的优势就是你有非常多的优秀库可以帮助你快速构建一个系统，但就像一把双刃剑，由于开源导致版本的升级不可控。这时，一个集中性的模块依赖管理工具的优势就十分明显。它负责帮你管理开源项目的版本，你只需要添加对某个开源模块的依赖即可
npm 在window环境下升级：
![这里写图片描述](http://img.blog.csdn.net/20171120085640692?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
使用npm安装模块：
![这里写图片描述](http://img.blog.csdn.net/20171120085735101?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
**全局安装和本地安装**
*本地安装*
1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。 
 2. 可以通过 require() 来引入本地安装的包。
 *全局安装*
 1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
 2. 可以直接在命令行里使用。
 

##项目细节
###express的安装与使用
![这里写图片描述](http://img.blog.csdn.net/20171120090539138?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
**通过命令行创建express应用**
![这里写图片描述](http://img.blog.csdn.net/20171120090827897?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
*express应用便创建完成，可以通过cd 进入目录下，npm start 启动项目*
*localhost:3000访问本地应用路径。*
###ejs

功能简介：embered.jsjavascript 模板引擎（可以跟express集成，作为服务端模板引擎）
主页地址：https://github.com/visionmedia/ejs

**使用ejs将jade文件修改为html后缀**
![这里写图片描述](http://img.blog.csdn.net/20171120093008462?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
**express路由配置**
![这里写图片描述](http://img.blog.csdn.net/20171120093151977?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
##易源接口
[https://www.showapi.com/](https://www.showapi.com/)
1.账户申请注册。
2.应用接口申请。
3.node 应用安装。
![这里写图片描述](http://img.blog.csdn.net/20171120091451938?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
**请求实例：（nodeServer.js）**

```
'use strict';
/*
要单独运行该测试请使用npm安装mocha模块,
然后在包目录下在运行命令: mocha example_test.js
 */
var assert = require('assert');
var showapiSdk = require('showapi-sdk');
//设置你测试用的appId和secret,img
var appId='刚才申请的appid';
var secret='刚才申请secret';
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
//node模块化处理
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
}
	
```
在express框架中的调用

```
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route("/search").get(function(req,res){    // 到达此路径则渲染register文件，并传出title值供 register.html使用
    res.render("search",{title:'油价查询',message:""});
}).post(function(req,res){
	//console.log(req.body);
	var _send = function(data){
		//res.send不能做为参数直接传递，指针指向问题？？
		res.send(data);
	};
	if(req.body){
		//global.nodeServer.getDataInfo(req.body.test,console.log);
		global.nodeServer.getDataInfo(req.body.cityName,_send);
		//res.send([{"name":"test"}]);
	}
	
});

module.exports = router;

```
**前端请求**

```
/* umd模式
 * 
 * window.mySearch为全局变量公开接口
 *
 */
(function (window, factory) {
    if (typeof exports === 'object') {
     
        module.exports = factory();//node
    } else if (typeof define === 'function' && define.amd) {
     
        define(factory);//amd
    } else {
     
        window.mySearch = factory();
    }
})(this, function () {
   var search = function(cityName){
    	 $.ajax({ 
            url: '/search',
            type: 'post',
            data: {
            	cityName:cityName
            },
            success: function(data,status){ 
            	if(data.length>0){
	            	//当前城市
	            	$(".searchCity").text(data[0].prov);
	            	//当前日期
	            	$(".timeNow").text(data[0].ct);
	                $(".skill-bar-percent").each(function(){
	                	var oilName = $(this).attr("itemOil");
	                	for(var itemName in data[0]){
	                		if(oilName == itemName){
	                			var singlePirce = data[0][itemName];
	                			$(this).prev(".skillbar-bar").find("p").text(data[0][itemName]);
	                			var pret = parseInt(singlePirce*10) +"%";
	                			$(this).parent(".skillbar").attr('data-percent',pret);
	                		}
	                	}
	                });
	                $('.skillbar').each(function(){
	                	//滚动条滚动
						$(this).find('.skillbar-bar').animate({
							width:$(this).attr('data-percent')
						},4000,'swing');
						//数字叠加
						var numOil = $(this).find(".wh_num").text();
						var that = $(this);
						var time = 3;
						var timeSet = setInterval(function(){
							console.log(time);
							if(time<numOil){
								time = time + 0.01;
								that.find(".wh_num").text(time.toFixed(2));
								if(time >= numOil){
									clearInterval(timeSet)
								}
							}
						},10);
					});
				}else{
					layer.msg("没有查询到您输入的城市哦");
				}
            },
            error: function(data,err){ 
                
            }
        }); 
   }
   return {
   	search:search
   }
});
```
###展示效果
![这里写图片描述](http://img.blog.csdn.net/20171120092426315?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWxhZGRpbmdvZA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


---------

[1]: http://math.stackexchange.com/
[2]: https://github.com/jmcmanus/pagedown-extra "Pagedown Extra"
[3]: http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference
[4]: http://bramp.github.io/js-sequence-diagrams/
[5]: http://adrai.github.io/flowchart.js/
[6]: https://github.com/benweet/stackedit

