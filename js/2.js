var top_l=document.getElementById("top_l")
var top_r=document.getElementById("top_r")
var bl1=document.getElementById("bl1")
var bl2=document.getElementById("bl2")
top_l.onclick=function(){
	this.style.color="#333";
	top_r.style.color="#999";
	bl1.style.display="block";
	bl2.style.display="none"
}
top_r.onclick=function(){
	this.style.color="#333";
	top_l.style.color="#999";
	bl1.style.display="none";
	bl2.style.display="block"
}
