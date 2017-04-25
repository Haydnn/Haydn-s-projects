
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

//编写inserAfter函数，即把一个节点插入到另一个节点之后
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefor(newElement,targetElement.nextSibling);
	}
}

//用dom方法创建占位符图片和文字
function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placehoder=document.createElement("img");
	placehoder.setAttribute("id","placehoder");
	placehoder.setAttribute("alt","my image galler");
	var description=document.createElement("p");
	placehoder.setAttribute("id","description");
    var desctext=document.createTextNode("Choose a picture");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placehoder,gallery);
    insertAfter(description,placehoder);
}

//检查浏览器是否理解使用的DOM方法，调用次函数，就会把onclick时间绑定到
//id="imagegallery"的元素内的各个a链接元素上
function prepareGallery() {
         if(!document.getElementsByTagName) return false;
         if(!document.getElementById) return false;
         if(!document.getElementById("imagegallery")) return false;
         var gallery=document.getElementById("imagegallery");
         var link=gallery.getElementsByTagName("a");
         for (var i = 0; i < link.length; i++) {
         	link[i].onclick=function(){  //不能假设函数正常返回，如果showPic,则返回true
         		return !showPic(this)  //this代表link[i]
         	}
         }
}

//改变占位符图片的src属性，将其替换成参数图片
function showPic(whichpic) 
{
	if(!document.getElementById("placehoder")) return false;
     var source=whichpic.getAttribute("href");
     var placehoder=document.getElementById("placehoder");
     if(placehoder.nodeName!="IMG") return false; //检查placehoder是否存在
     placehoder.setAttribute("src",source);
     if(document.getElementById("description")){
     	if(whichpic.getAttribute("title")){   //检查title属性是否存在，不存在则设为空字符串
     		var text=whichpic.getAttribute("title");//改变文本节点的值，替换成图片title
     	}else{
     		var text=" ";
     	}
     var description=document.getElementById("description");
     if(description.firstChild.nodeType==3){  //检查第一个子元素是一个文本节点
     	description.firstChild.nodeValue=text;
     }
 }
    return true;
}

addLoadEvent(prepareGallery);  //网页加载完毕后，立刻执行函数
addLoadEvent(preparePlaceholder);  //网页加载完毕后，立刻执行函数
