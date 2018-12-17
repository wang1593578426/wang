
function baidu(a){
			console.log(a)
			var str=""
			a.s.forEach(function(item,index){
				str+=`<li>${item}</li>`
			})
			leiting.innerHTML=str
		}
		var tex=document.getElementById("tex")
		tex.onkeydown=function(){
			var s=document.createElement("script")
			var h=document.getElementsByTagName("head")[0]
			s.src=` https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${tex.value}&json=1&p=3&sid=1438_21123_20928&req=2&csor=3&pwd=ss&cb=baidu`
			h.appendChild(s)
			h.removeChild(s)
		}

var box2=document.getElementById("box2")
var imgs=document.getElementsByClassName("js_imgs")
var lis=document.querySelectorAll("#ul_lunbo li")
var timerr=null
hlunbo()
lunbo()

	var i=0;
	function hlunbo(){
	setInterval(function(){
		i++;
		if(i===4){i=0}
		fn(box2,-36*i)
	},3000)
function fn(a,c){
	clearInterval(a.timer)
	a.timer=setInterval(function(){
		
		a.style.top=a.offsetTop-5+"px";
		if(a.offsetTop<=c){
			a.style.top=c+"px"
		}

	},30)
}
}

var w=0

			function lunbo(){
			timerr=setInterval(function(){
			w++
			if(w===8){w=0}
			gb()
			for(var k=0;k<imgs.length;k++){
				imgs[k].style.opacity=0
			}
				imgs[w].style.opacity=1;
},3000)}

function gb(){
	for(var m=0;m<lis.length;m++){
		lis[m].style.background=""
		
	}
	lis[w].style.background="#a7936e"
	
}

for(var c=0;c<lis.length;c++){
	lis[c].onmouseover=function(){
		clearInterval(timerr)
		var c1=this.getAttribute("index")
		w=c1
		for(var k=0;k<imgs.length;k++){
			imgs[k].style.opacity=0;
			lis[k].style.background=""
		}
		imgs[w].style.opacity=1
		this.style.background="#a7936e"
		
		lunbo()
	}
}
var new1=document.getElementById("new1")
$.ajax({
	type:'get',
	url:'1.php',
	success:function(a){
		var data=JSON.parse(a)
		var str=""
		data.forEach(function(item,index){
			str+=`<li><span>${item.color}</span><img src="${item.pic}" alt="" class="pu"><h1>${item.hot}</h1><h2>${item.yang}</h2><b>${item.price}</b><s>${item.oprice}</s><strong>${item.chang}</strong></li>`
		})
		new1.innerHTML=str
	}
})
// new2(data)
// function new2(data){
// 	var str=""
// 	data.forEach(function(item,index){
// 		str+=`<li><span>${item.color}</span><img src="${item.pic}" alt="" class="pu"><h1>${item.hot}</h1><h2>${item.yang}</h2><b>${item.price}</b><s>${item.oprice}</s><strong>${item.chang}</strong></li>`
// 	})
// 	new1.innerHTML=str
// }
var zuo=document.getElementById("zuo")
var you=document.getElementById("you")

you.onclick=function(){
	clearInterval(zuo.timer)
	clearInterval(you.timer)
	zuo.timer=setInterval(function(){
	new1.style.left=new1.offsetLeft-70+"px"
	if(new1.offsetLeft<-1080){
		new1.style.left=-1080+"px"
	}
	
	},30)
}
zuo.onclick=function(){
	clearInterval(you.timer)
	clearInterval(zuo.timer)
	you.timer=setInterval(function(){
	new1.style.left=new1.offsetLeft+70+"px"
	if(new1.offsetLeft>=0){
		new1.style.left=0+"px"
	}
	
	},30)
}
window.onscroll=function(){
	if(document.documentElement.scrollTop>=250){
		renqi1.style.display="block"
	}else{
		renqi1.style.display="none"
	}
}



var bott=document.getElementById("bott")
var zbian=document.getElementById("zbian")
var ybian=document.getElementById("ybian")
$.ajax({
		type:'get',
		url:'2.php',
		success:function(a){
			var data2=JSON.parse(a)
			var str2=""
			data2.forEach(function(item,index){
			if(index===0){
			str2+=`<li style="height: 500px;width:390px;padding-top: 30px"><img src="${item.img}" alt="" style="margin-bottom: 68px"><b>${item.hot}</b><h1>${item.yang}</h1><span>${item.price}<s>${item.oprice}</s></span></li>`
			}else{
			str2+=`<li><img src="${item.img}" alt=""><b style="margin-left: 86px">${item.hot}</b><h1 style="font-size: 12px;line-height: 12px;margin-bottom: 12px">${item.yang}</h1><span style="line-height: 10px">${item.price}<s>${item.oprice}</s></span></li>`
		}
	bott.innerHTML=str2
	
})

}
	})
zbian.onclick=function(){
	$.ajax({
		type:'get',
		url:'2.php',
		success:function(a){
			var data2=JSON.parse(a)
			var str2=""
			data2.forEach(function(item,index){
			if(index===0){
			str2+=`<li style="height: 500px;width:390px;padding-top: 30px"><img src="${item.img}" alt="" style="margin-bottom: 68px"><b>${item.hot}</b><h1>${item.yang}</h1><span>${item.price}<s>${item.oprice}</s></span></li>`
			}else{
			str2+=`<li><img src="${item.img}" alt=""><b style="margin-left: 86px">${item.hot}</b><h1 style="font-size: 12px;line-height: 12px;margin-bottom: 12px">${item.yang}</h1><span style="line-height: 10px">${item.price}<s>${item.oprice}</s></span></li>`
		}
	bott.innerHTML=str2
	
})

}
	})
}
ybian.onclick=function(){
	
	$.ajax({
		type:'get',
		url:'3.php',
		success:function(a){
			var data3=JSON.parse(a)
			var str3=""
			data3.forEach(function(item,index){
			if(index===0){
			str3+=`<li style="height: 500px;width:390px;padding-top: 30px"><img src="${item.img}" alt="" style="margin-bottom: 68px"><b>${item.hot}</b><h1>${item.yang}</h1><span>${item.price}<s>${item.oprice}</s></span></li>`
				}else{
			str3+=`<li><img src="${item.img}" alt=""><b style="margin-left: 86px">${item.hot}</b><h1 style="font-size: 12px;line-height: 12px;margin-bottom: 12px">${item.yang}</h1><span style="line-height: 10px">${item.price}<s>${item.oprice}</s></span></li>`
	}
	bott.innerHTML=str3
	
})
		}
	})
}
/*function tuijian(){
	var str2=""
data2.forEach(function(item,index){
	if(index===0){
		str2+=`<li style="height: 500px;width:390px;padding-top: 30px"><img src="${item.img}" alt="" style="margin-bottom: 68px"><b>${item.hot}</b><h1>${item.yang}</h1><span>${item.price}<s>${item.oprice}</s></span></li>`
	}else{
		str2+=`<li><img src="${item.img}" alt=""><b style="margin-left: 86px">${item.hot}</b><h1 style="font-size: 12px;line-height: 12px;margin-bottom: 12px">${item.yang}</h1><span style="line-height: 10px">${item.price}<s>${item.oprice}</s></span></li>`
	}
	bott.innerHTML=str2
	
})
}*/
/*function youtuijian(){
	var str3=""
data3.forEach(function(item,index){
	if(index===0){
		str3+=`<li style="height: 500px;width:390px;padding-top: 30px"><img src="${item.img}" alt="" style="margin-bottom: 68px"><b>${item.hot}</b><h1>${item.yang}</h1><span>${item.price}<s>${item.oprice}</s></span></li>`
	}else{
		str3+=`<li><img src="${item.img}" alt=""><b style="margin-left: 86px">${item.hot}</b><h1 style="font-size: 12px;line-height: 12px;margin-bottom: 12px">${item.yang}</h1><span style="line-height: 10px">${item.price}<s>${item.oprice}</s></span></li>`
	}
	bott.innerHTML=str3
	
})
}
*/
var xtop_img=document.getElementsByClassName("xtop_img")
var xtop1=document.getElementById("xtop")
xtop()
var w1=-1
function xtop(){

	setInterval(function(){
		w1++;
		
		if(w1===3){w1=0}
		for(var i=0;i<xtop_img.length;i++){
			xtop_img[i].style.opacity=0
		}
		xtop_img[w1].style.opacity=1
	},3000)
}
/*var data4=[{img1:"images/xlunbo1.jpg",img2:"images/xlunbo2.jpg",img3:"images/xlunbo3.jpg"},
{img:"images/xianshi1.png",name:"草本石墨烯暖宫腰带",dis:"石墨烯暖宫，草本甘香惬意",num:"还剩373件",price:"￥159.2",oprice:"￥199"},
{img:"images/xianshi2.png",name:"草本石墨烯暖宫腰带",dis:"石墨烯暖宫，草本甘香惬意",num:"还剩373件",price:"￥159.2",oprice:"￥199"},
{img:"images/xianshi3.png",name:"草本石墨烯暖宫腰带",dis:"石墨烯暖宫，草本甘香惬意",num:"还剩373件",price:"￥159.2",oprice:"￥199"},
{img:"images/xianshi4.png",name:"草本石墨烯暖宫腰带",dis:"石墨烯暖宫，草本甘香惬意",num:"还剩373件",price:"￥159.2",oprice:"￥199"}]*/
$.ajax({
	type:'get',
	url:'4.php',
	success:function(a){
		var data4=JSON.parse(a)
		var str4=""
	data4.forEach(function(item,index){
	if(index===0){
		str4+=`<li style="width: 224px;height: 377px;background: red"><img src="${item.img1}" alt="" class="xtop_img">
			<img src="${item.img2}" alt="" class="xtop_img"><img src="${item.img3}" alt="" class="xtop_img"></li>`
	}else{
		str4+=`<li><img src="${item.img}" alt="" class="i3"><h1>${item.name}</h1><h2>${item.dis}</h2><div class="p1"><div class="p2"></div></div><b>${item.num}</b><h3><span>限时价</span><strong>${item.price}</strong><s>${item.oprice}</s></h3><div class="bot">立即抢购</div></li>`
	}
	xtop1.innerHTML=str4
})
	}
})
/*var str4=""
data4.forEach(function(item,index){
	if(index===0){
		str4+=`<li style="width: 224px;height: 377px;background: red"><img src="${item.img1}" alt="" class="xtop_img">
			<img src="${item.img2}" alt="" class="xtop_img"><img src="${item.img3}" alt="" class="xtop_img"></li>`
	}else{
		str4+=`<li><img src="${item.img}" alt="" class="i3"><h1>${item.name}</h1><h2>${item.dis}</h2><div class="p1"><div class="p2"></div></div><b>${item.num}</b><h3><span>限时价</span><strong>${item.price}</strong><s>${item.oprice}</s></h3><div class="bot">立即抢购</div></li>`
	}
	xtop1.innerHTML=str4
})*/

var xtop_img1=document.getElementsByClassName("xtop_img1")
xtop2()
var w2=-1
function xtop2(){

	setInterval(function(){
		w2++;
		
		if(w2===3){w2=0}
		for(var i=0;i<xtop_img1.length;i++){
			xtop_img1[i].style.opacity=0
		}
		xtop_img1[w2].style.opacity=1
	},3000)
}

/*var data5=[{img:"images/fuli1.png",dis:"升级版双宫茧蚕丝被字母被",price:"￥1290",oprice:"￥1399"},
{img:"images/fuli2.png",dis:"网易制造眼部按摩减压仪",price:"￥359",oprice:"￥699"},
{img:"images/fuli3.png",dis:"全新皓齿变速式电动牙刷",price:"￥208",oprice:"￥219"},
{img:"images/fuli4.png",dis:"便携手持挂烫机啊",price:"￥101",oprice:"￥125"}]*/
var ftop11=document.getElementById("ftop11")
$.ajax({
	type:'get',
	url:'5.php',
	success:function(a){
		var data5=JSON.parse(a)
		var str5=""
		data5.forEach(function(item,index){
	str5+=`<li><img src="${item.img}" alt="" class="i3"><p>${item.dis}</p><h1>限时价<b>${item.price}</b></h1><s>${item.oprice}</s><div>立即抢购</div></li>`
})
ftop11.innerHTML=str5
	}
})
/*var str5=""
data5.forEach(function(item,index){
	str5+=`<li><img src="${item.img}" alt="" class="i3"><p>${item.dis}</p><h1>限时价<b>${item.price}</b></h1><s>${item.oprice}</s><div>立即抢购</div></li>`
})
ftop11.innerHTML=str5*/
var bjujia=document.getElementById("bjujia")
/*var data6=[
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin1.jpg",img1:"images/fin11.png",img2:"images/fin12.png",img3:"images/fin13.png",img4:"images/fin14.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin2.jpg",img1:"images/fin21.png",img2:"images/fin22.png",img3:"images/fin23.png",img4:"images/fin24.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin3.jpg",img1:"images/fin31.png",img2:"images/fin32.png",img3:"images/fin33.png",img4:"images/fin34.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin4.jpg",img1:"images/fin41.png",img2:"images/fin92.png",img3:"images/fin43.png",img4:"images/fin44.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin9.jpg",img1:"images/fin51.png",img2:"images/fin52.png",img3:"images/fin53.png",img4:"images/fin54.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin6.jpg",img1:"images/fin61.png",img2:"images/fin62.png",img3:"images/fin63.png",img4:"images/fin64.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin7.jpg",img1:"images/fin71.png",img2:"images/fin72.png",img3:"images/fin73.png",img4:"images/fin74.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin8.jpg",img1:"images/fin81.png",img2:"images/fin82.png",img3:"images/fin83.png",img4:"images/fin84.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin9.jpg",img1:"images/fin91.png",img2:"images/fin92.png",img3:"images/fin94.jpg",img4:"images/fin94.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"},
{til:"居家",you1:"家饰",you2:"布艺软装",you3:"收纳",you4:"灯具",you5:"家具",you6:"被枕",you7:"居家件套",bimg:"images/fin10.jpg",img1:"images/fin101.png",img2:"images/fin102.png",img3:"images/fin103.png",img4:"images/fin104.png",yang1:"林因系列实木床",price1:"$1999",yang2:"带盖棉麻涤内衣收纳盒",price2:"$45",yang3:"抽拉式标签收纳篮",price3:"$11",yang4:"折叠多功能衣架",price4:"$25"}]*/
$.ajax({
	type:'get',
	url:'6.php',
	success:function(a){
		var data6=JSON.parse(a)
		var str6=""
data6.forEach(function(item,index){
	str6+=`<li><div>${item.til}<span>查看更多></span><span>${item.you1}</span><span>/</span><span>${item.you2}</span><span>/</span><span>${item.you3}</span><span>/</span><span>${item.you4}</span><span>/</span><span>${item.you5}</span><span>/</span><span>${item.you6}</span><span>/</span><span>${item.you7}</span></div><img src="${item.bimg}" alt="" class="i3">
		<b><img src="${item.img1}" alt="" class="i5"></b><b><img src="${item.img2}" alt="" class="i5"></b><b><img src="${item.img3}" alt="" class="i5"></b><b class="bf"><img src="${item.img4}" alt="" class="i5"></b><h1><i>特价</i><strong>${item.yang1}</strong><em>${item.price1}</em></h1>
		<h1><i>特价</i><strong>${item.yang2}</strong><em>${item.price2}</em></h1><h1><i>特价</i><strong>${item.yang3}</strong><em>${item.price3}</em></h1><h1 class="bf"><i>特价</i><strong>${item.yang4}</strong><em>${item.price4}</em></h1>
		</li>`
})
bjujia.innerHTML=str6
	}
})
/*var str6=""
data6.forEach(function(item,index){
	str6+=`<li><div>${item.til}<span>查看更多></span><span>${item.you1}</span><span>/</span><span>${item.you2}</span><span>/</span><span>${item.you3}</span><span>/</span><span>${item.you4}</span><span>/</span><span>${item.you5}</span><span>/</span><span>${item.you6}</span><span>/</span><span>${item.you7}</span></div><img src="${item.bimg}" alt="" class="i3">
		<b><img src="${item.img1}" alt="" class="i5"></b><b><img src="${item.img2}" alt="" class="i5"></b><b><img src="${item.img3}" alt="" class="i5"></b><b class="bf"><img src="${item.img4}" alt="" class="i5"></b><h1><i>特价</i><strong>${item.yang1}</strong><em>${item.price1}</em></h1>
		<h1><i>特价</i><strong>${item.yang2}</strong><em>${item.price2}</em></h1><h1><i>特价</i><strong>${item.yang3}</strong><em>${item.price3}</em></h1><h1 class="bf"><i>特价</i><strong>${item.yang4}</strong><em>${item.price4}</em></h1>
		</li>`
})
bjujia.innerHTML=str6*/



var foot_bot=document.getElementById("foot_bot")
var data7=/*[
{imgs:"images/foot1.jpg",name:"梁****猪",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"建宁莲子&nbsp;228g",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot2.jpg",name:"x****e",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot3.jpg",name:"安****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot4.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot5.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot6.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot5.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot4.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot3.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"},
{imgs:"images/foot2.jpg",name:"梁****",time:"2018-08-31&nbsp;&nbsp;10:36",pro:"蒸汽肩颈敷贴",price:"￥49",ping:"发热持久,对颈肩疲劳颈椎病缓解作用明显，还不会像膏药那样刺激皮肤，真心好用，推荐大家购买"}]*/


$.ajax({
	type:'get',
	url:'7.php',
	success:function(a){
		var data7=JSON.parse(a)
		var str7=""
		data7.forEach(function(item,index){
	str7+=`<li><img src="${item.imgs}" alt=""><div><h1>${item.name}<span>${item.time}</span></h1><h2>${item.pro}<span>${item.price}</span></h2><h3>${item.ping}</h3></div></li>`
})
foot_bot.innerHTML=str7
	}
})
/*var str7=""
data7.forEach(function(item,index){
	str7+=`<li><img src="${item.imgs}" alt=""><div><h1>${item.name}<span>${item.time}</span></h1><h2>${item.pro}<span>${item.price}</span></h2><h3>${item.ping}</h3></div></li>`
})
foot_bot.innerHTML=str7*/

var zuo_foot=document.getElementById("zuo_foot")
var you_foot=document.getElementById("you_foot")
var flag=true;
var flag=true;
var im=0
zuo_foot.onclick=function(){
	if(flag){
		im--
		flag=false
		clearInterval(zuo_foot.timer)
		clearInterval(you_foot.timer)
	
	zuo_foot.timer=setInterval(function(){
	foot_bot.style.left=foot_bot.offsetLeft+30+"px"
	if(foot_bot.offsetLeft>=-365*im){
		foot_bot.style.left=-365*im+"px";
		flag=true
	}
	},30)
	if(foot_bot.offsetLeft>=0){
		foot_bot.style.left=0+"px";
		im=0
	}
}
}

you_foot.onclick=function(){
	if(flag){
		im++
		flag=false
		clearInterval(you_foot.timer)
		clearInterval(zuo_foot.timer)
		console.log(foot_bot.offsetLeft)
	
	you_foot.timer=setInterval(function(){
	foot_bot.style.left=foot_bot.offsetLeft-30+"px";
	if(foot_bot.offsetLeft<=-365*im){
		foot_bot.style.left=-365*im+"px";
		flag=true
	}
	},30)
	if(foot_bot.offsetLeft<=-2555){
		foot_bot.style.left=-2555+"px";
		im=7
	}
	}
}
