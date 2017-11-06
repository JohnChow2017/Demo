window.onload = function(){
	mv.app.toTip();
	mv.app.toBanner();
	
};
var mv = {};  //命名空间

mv.tools = {};

mv.ui = {};

mv.ui.toTextChange=function(obj,str){
	obj.onfocus=function(){
		if(this.value == str){
			this.value= '';
		}
	}
	obj.onblur=function(){
		if(this.value == ''){
			this.value= str;
		}
	}
}

mv.ui.fadeInt=function(obj){ //淡入
	var value=0;
	clearInterval(obj.timer);
	obj.timer =setInterval(function(){
		var iSpeed=5;
		if(value == 100){
			clearInterval(obj.timer);
		}
		else{
			value+=iSpeed;
			obj.style.opacity=value/100;
			obj.style.filter='alpha(opacity='+value+')';
		}
	}, 30)
}

mv.ui.fadeOut=function(obj){ //淡出
	
	var value = 100;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var iSpeed = -5;
		if(value == 0){
			clearInterval(obj.timer);
		}
		else{
			value += iSpeed;
			obj.style.opacity = value/100;
			obj.style.filter = 'alpha(opacity='+value+')';
		}
	},30);
}

mv.app={};

mv.app.toTip=function(){
	var oText1=document.getElementById('text1');
	var oText2=document.getElementById('text2');

	mv.ui.toTextChange(oText1, 'Search website');
	mv.ui.toTextChange(oText2, 'Search website');
}

mv.app.toBanner=function(){
	var oAd=document.getElementById('ad');
	var aLi=oAd.getElementsByTagName('li');

	var iNow=0;

	var timer=setInterval(auto,3000);

	function auto(){
		if(iNow == aLi.length-1){
			iNow=0;
		}
		else{
			iNow++;
		}
		for(var i=0; i<aLi.length; i++){
			mv.ui.fadeOut(aLi[i]);
		}
		mv.ui.fadeInt(aLi[iNow]);
	}
}
