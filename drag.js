function fnDrag(id){
	var oDiv=document.getElementById(id);
	
	var disX=0;
	var disY=0;
	
	oDiv.onmousedown=function(ev){
		var ev=ev||event;
		disX=ev.clientX-oDiv.offsetLeft;
		disY=ev.clientY-oDiv.offsetTop;
		var aa=0;
	};
}
