GoTop
=====

The webpage return to top 网页返回顶部代码

How to use? 如何使用

  1、引入jQuery类库  http://code.jquery.com/jquery-1.7.2.min.js<br />
  2、引入gotop.js 返回顶部插件<br />
  3、页面书写相应元素, 是其位于你想要的位置(如: 右下角)<br />
  4、启用插件<br />
      $(document).goTop({<br />
      		showAfter:'#goTop',	  //(必选) 需执行返回顶部的元素<br />
      		debug:true,			      //(可选)开启调试状态<br />
      		showPixels:50,		    //(可选)滚动条滚动高度 单位 px<br />
      		scrollSpeed:1000,	    //(可选)返回顶部速度<br />
      		callback:function(e){ //(可选)回调执行函数<br />
      			//alert(e);<br />
      		}<br />
	    });<br />
