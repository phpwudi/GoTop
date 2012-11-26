/**
 * GoTop plugin for jQuery
 * v1.0
 * Copyright (c) 2008 phpwudi 
 * Blog:http://www.cnblogs.com/wendywu/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

 (function($){
$.fn.goTop = function(options){
	var defaults = {
		showPixels:'',			//滚动条滚动高度单位px(可选)，若不设置默认以当前浏览器窗口高度
		showDelay:500,			//延迟渐变显示	
		scrollSpeed:0,			//滚动条上升速度
		showAfter:'div:goTop',	//DOM元素（返回顶部小元素）
		debug:false,			//是否开启调试状态
		callback:function(){ return true; }
	}
	var options = $.extend(defaults,options);
	var isExists = $(options.showAfter).length==0?false:true;
	if(isExists===true){
		var node = $(options.showAfter); node.hide().css('cursor','pointer');
		options.showPixels = parseInt(options.showPixels)==''?$(window).height():options.showPixels;
		node.bind('click',function(){
			 $('html, body').animate({ 
			 	scrollTop: 0 
			 }, options.scrollSpeed==0?0:options.scrollSpeed)
		})
		$(window).scroll(function(){
			if( $(window).scrollTop() >= options.showPixels )
				(options.showDelay==0 || options.showDelay==false)?node.show():node.fadeIn(options.showDelay);
			else
				(options.showDelay==0 || options.showDelay==false)?node.hide():node.fadeOut(options.showDelay);
			options.callback.apply(this,['true']);
		})
	}else if(options.debug===true){
		alert('Dom Node Not Exists!');
		options.callback.apply(this,['false']);
	}
}
})(jQuery);