//用函数实现getElementByClassName（不适用多个类名）
function getElementsByClassName(node,classname) {
	//node 表示DOM树中的搜索起点，classname就是搜索类名
        if (node.getElementsByClassName) {
        	return node.getElementsByClassName(classname);
        }else{
        	var results=new Array();
        	var elems=node.getElementsByTagName("*");
        	for (var i = 0; i <elems.length; i++) {
        		if (elems[i].className.indexOf(classname)！=-1) {
        			results[results.length]=elems[i];
        		}
        	}
        	return results;
        }

}

//getAttribute通过元素节点调用获取各个属性
var paras=document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
	var title_text=paras[i].getAttribute("title");
    if(title_text) {
        alert(title_text);
    }
}

//setAttribute改变元素节点的属性值
var paras=document.getElementsByTagName("p");
for (var i = 0; i < paras.length; i++) {
	var title_text=paras[i].getAttribute("title");
	if(title_text){
		paras[i].setAttribute("title","brand new title text")
		alert(paras[i].getAttribute("title"));
	}
}

