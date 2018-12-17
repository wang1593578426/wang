var tupian1=document.getElementsByClassName("tupian1")
var i11=document.getElementsByClassName("i11")
var shuai=document.getElementsByClassName("shuai")
for(let i=0;i<tupian1.length;i++){
	tupian1[i].onmouseover=function(){
		for(var m=0;m<i11.length;m++){
			i11[m].style.opacity="0"
			shuai[m].style.opacity="0"
		}
		i11[i].style.opacity="1"
		shuai[i].style.opacity="1"
		
		for(var k=0;k<tupian1.length;k++){
			tupian1[k].style.border="2px solid #e8e8e8"
		}
		this.style.border="2px solid #b4a078"

	}
}

var jian=document.getElementById("jian")
var jia=document.getElementById("jia")
var he=document.getElementById("he")
jia.onclick=function(){
	var m=he.innerHTML;
	he.innerHTML=parseInt(m)+parseInt(1)
	if(he.innerHTML>=10){
		he.innerHTML=10
	}

}
jian.onclick=function(){
	var n=he.innerHTML;
	he.innerHTML=parseInt(n)-parseInt(1)
	if(he.innerHTML<=0){
		he.innerHTML=0
	}
}
var bbox=document.getElementById("bbox")
var tutu=document.getElementById("tutu")


tutu.onmousemove=function(ev){
	bbox.style.display="block"
	bbox2.style.display="block"
	var x=ev.offsetX;
	var y=ev.offsetY;
	bbox.style.left=x-50+"px"
	bbox.style.top=y-50+"px"

	bbox3.style.left=(50-x)*4.3+"px"
	bbox3.style.top=(50-y)*4.3+"px"

	tutu.onmouseout=function(){
		bbox.style.display="none"
		bbox2.style.display="none"
	}
}
/*box11.onmousemove=function(ev){
		box22.style.display='block'
		var x=ev.offsetX;
		var y=ev.offsetY;
		if(x<115){
			ltb.style.left=0
			box23.style.left=0

		}else if(x>225){
			ltb.style.left='120px'
			
		}else{
			ltb.style.left=x-115+'px'
			box23.style.left=2.25*(-x+115)+'px'
		}
		if(y<115){
			ltb.style.top=0
			box23.style.top=0
		}else if(y>225){
			ltb.style.top='120px'
			
		}else{
			ltb.style.top=y-115+'px'
			box23.style.top=2.25*(-y+115)+'px'
		}
		
	}
	box11.onmouseout=function(ev){
		box22.style.display='none'
	}
*/