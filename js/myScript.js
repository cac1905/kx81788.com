 
// 获取时间
setInterval(showTime, 1000); 
function timer(obj,txt){
    obj.text(txt);
} 
function showTime(){ 
    var today = new Date();
    var weekday=new Array(7)

    var y=today.getFullYear()+"/";
    var month=today.getMonth()+1;
	if(month<10)
		month='0'+month;
	month=month+"/";
	
    var td=today.getDate();
	if(td<10)
		td='0'+td;
    var d=weekday[today.getDay()];
	
    var h=today.getHours();
	if(h<10)
		h='0'+h;
	h=h+":";
	
    var m=today.getMinutes(); 
	if(m<10)
		m='0'+m;
	
    timer($("#td"),td); 
    timer($("#MH"),month); 
    timer($("#Y"),y);

    timer($("#D"),d);
    timer($("#H"),h);
    timer($("#M"),m);
} 

/**  导航条定位 **/
window.onload = function(){
    menuFixed('nav','500');
}
function menuFixed(id){
    var obj = document.getElementById(id);
    var _getHeight = obj.offsetTop;
    
    window.onscroll = function(){
        changePos(id,_getHeight);
    }
}
function changePos(id,height){
    var obj = document.getElementById(id);
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop < height){
        obj.style.position = 'relative';
    }else{
        obj.style.position = 'fixed';
    }
}

