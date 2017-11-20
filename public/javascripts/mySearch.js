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