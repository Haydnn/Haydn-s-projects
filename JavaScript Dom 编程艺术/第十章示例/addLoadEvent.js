//打算在页面加载完毕时执行的函数名称
function addLoadEvent(func){
	var oldonload=window.onload;  //把window.onload事件处理函数存入变量
	if(typeof window.onload!='function'){
       window.onload=func;    //如果处理函数上没有绑定任何函数，则把新函数添加给它
	}else{
          window.onload=function(){
          	oldonload();   //如果有了，则把新函数添加到指令末位
          	func();
          }
	}

}