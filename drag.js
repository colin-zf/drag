function fnDrag(id){
	var oDiv=document.getElementById(id);
	
	var disX=0;
	var disY=0;
	
	oDiv.onmousedown=function(ev){
		var ev=ev||event;
		disX=ev.pageX-oDiv.offsetLeft;
		disY=ev.pageY-oDiv.offsetTop;
		
		document.onmousemove=function(ev){
			var ev=ev||event;
			oDiv.style.left=ev.pageX-disX+"px";
			oDiv.style.top=ev.pageY-disY+"px";

		}
	};
}
