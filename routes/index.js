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
