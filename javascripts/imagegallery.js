
window.onload = function(){
	//两个函数顺序颠倒，就会图片切换失败
	    prepareGalllery();
		showPic();
		
		
}
	
	//替换掉占位用的图片


// 准备函数
		/* 
	 1.对象检测，方法、属性、节点
	 2.对链接遍历
	 3.单击链接时的处理
	 - 1.替换图片
	 - 2.取消单击链接时的默认行为
	*/

function prepareGalllery(){
	/*
	if(!getElementById) return false;
	if(!getElementsByTagName) return false;
	if(!document.getElementById("imagegallery")) return false;
	*/
	//找到需要的那些链接
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");

	//链接遍历
	for(var i=0; i<links.length; i++)

		//单击处理
		links[i].onclick = function(){

		//替换图片
		return showPic(this);	
		
	   }	
    }

function showPic(whichpic){

    //对象检查
    //占位图片不存在，说明以下的js会无效，则执行原来的默认行为
	//if(!document.getElementById("placeholder")) return true;

    //查找，要什么，在哪里，怎么得到
    //1.获取图片存储路径
    //它存储在链接的href属性里
    var source = whichpic.getAttribute("href");

    //2.替换图片
    //找到被替换的图片
    //修改它的src属性
    //与placeholder.src = source;等价，不过最好用setAttribute("","");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
   
	/*最后的语句，执行到这里，说明此函数各项检查都满足，并未执行成功了
	所以图片替换成功，取消链接的默认跳转行为*/
	return false;

   //文本切换效果
   //替换图片下方，段落p的描述文字，使其显示为对文本的描述
   //对文本的描述，放在链接的title属性里

   //var text = whicpic.getAttribute("title");
   //var description = document.getElementById("description");
   //description.firstChild.nodeValue = text;
   
  //alert(description.childNodes[0].nodeValue);

    }

    //单击每个链接时，替换掉占位用的图片，并阻止链接被单击时的默认行为
 /*
	//单击，onclick事件
	//每个链接，遍历
	//替换，调用函数
	//阻止链接被单击时的默认行为 return false,假装链接未被单击
 */



	// 算出文档中所有的节点的个数
	/*
	function countBodyChildren(){
		var body_element = document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);
        alert(body_element.nodeType);
	   }
	*/


	
/* 弹出新窗口
function popUp(winurl){
	window.open(winurl,"popup","height=480,width=320");
}
*/

/*把函数，绑定到加载事件处理函数上
function addLoadEvent(func){
	//获取现有的加载时间函数的值
	var oldload = window.onnload;

	//如果事件上没绑定函数，则直接把函数添加到加载时间上
	if(typeof oldload != "function"){
		window.onload = func;
	}
	// 如果加载事件上，已经绑定函数，把新函数，追加在后面
	else {
		//创建一个匿名函数，来容纳多个函数
		window.onload = function(){
		oldload();
		func();
		}
	}
}

addLoadEvent(prepareGalllery);
addLoadEvent(showPic);*/
