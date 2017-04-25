addLoadEvent(displayAbbreviations);

function displayAbbreviations() {
	if(!document.getElementsByTagName||!document.createElement||!document.createTextNode) 
		return false;  //兼容性检查
	//取得所有缩略词
	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs=new Array();
	//遍历所有的缩略词
	for (var i = 0; i < abbreviations.length; i++) {
		var current_abbr=abbreviations[i];
		if(current_abbr.childNodes.length<1) continue; //如果当前元素没有子节点，立即开始写一次循环
        var definition=current_abbr.getAttribute("title");
        var key=current_abbr.lastChild.nodeValue;
        defs[key]=definition;
	}
	//创建定义列表
	var dlist=document.createElement("dl");
	for (key in defs){
		var definition=defs[key];
		//创建定义标题
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		//创建定义描述
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		//把它们添加到定义列表
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if(dlist.childNodes.length<1) return false;
	//创建标题
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	//把标题添加到页面主体
	document.body.appendChild(header);
	//把定义列表添加到页面主体
	document.body.appendChild(dlist);
}
