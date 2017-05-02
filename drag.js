function fnDrag(id){
	var oDiv=document.getElementById(id);
	var disX=0;
	var disY=0;
	
	oDiv.onmousedown=function(ev){
		var ev=ev||event;
		disX=ev.clientX-oDiv.offsetLeft;
		disY=ev.clientY-oDiv.offsetTop;
		
		document.onmousemove=function(ev){
			var ev=ev||event;
			oDiv.style.left=ev.clientX-disX+"px";
			oDiv.style.top=ev.clientY-disY+"px";
			
			if(oDiv.offsetLeft<0){
				oDiv.style.left=0+"px";
			}else if(oDiv.offsetLeft>=ev.clientX-oDiv.offsetWidth){
				oDiv.style.left=ev.clientX-oDiv.offsetWidth+"px";
			}else{
				oDiv.style.left=ev.clientX-disX+"px";
			}
			
			if(oDiv.offsetTop<0){
				oDiv.style.top=0+"px";
			}else if(oDiv.offsetTop>=ev.clientY-oDiv.offsetHeight){
				oDiv.style.top=ev.clientY-oDiv.offsetHeight+"px";
			}else{
				oDiv.style.top=ev.clientY-disY+"px";
			}
		 
		}
		
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}
	};
	return false;
}
