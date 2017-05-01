(function($){$.fn.ttLightBox=function(lbs){lbs=jQuery.extend({lbMask:true,lbFixed:true,lbWidth:'200',lbHeight:'200',lbType:'frame',lbKeyClose:'',lbMaskColor:'',lbBgColor:'',lbBdColor:'',lbOpen:false,lbSrc:'',lbHtml:''},lbs);
function ttLightBoxInit(){
	$(window).resize(function(){ttPlaceDM();ttPlaceLB();}).scroll(function(){if(lbs.lbFixed){ttPlaceLB();}});
	$('body').append('<div id="tt_dm" style="display:none;'+(lbs.lbMaskColor?'background-color:'+lbs.lbMaskColor+';':'')+'"></div><div id="tt_lb" style="display:none;"><div class="close"></div><br class="clear-both" /><div class="dlbox" style="'+(lbs.lbBgColor?'background-color:'+lbs.lbBgColor+';':'')+(lbs.lbBdColor?'border-color:'+lbs.lbBdColor+';':'')+'"></div></div>');
	$("#tt_lb .close").click(function(){ttCloseLB();});
	lbs.lbSrc=this; ttLoadLB(); ttKeyPress(); return false;
}
function ttLoadLB(){
	if(lbs.lbType=="frame"){lbs.lbHtml="<iframe src=\""+lbs.lbSrc+"\" width=\"100%\" height=\"100%\" frameborder=\"0\" scrolling=\"auto\"></iframe>";}
	else if(lbs.lbType=="flash") {lbs.lbHtml="<object width=\""+lbs.lbWidth+"\" height=\""+lbs.lbHeight+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\"><param name=\"movie\" value=\""+lbs.lbSrc+"\" /><param name=\"quality\" value=\"high\" /><param name=\"wmode\" value=\"transparent\" /><embed width=\""+lbs.lbWidth+"\" height=\""+lbs.lbHeight+"\" src=\""+lbs.lbSrc+"\" quality=\"high\" wmode=\"transparent\" pluginspage=\"http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash\" type=\"application\/x-shockwave-flash\"></embed></object>";}
	else if(lbs.lbType=="image"){lbs.lbHtml="<img src=\""+lbs.lbSrc+"\" />";}
	else {return;}
	$('#tt_lb .dlbox').html(lbs.lbHtml).css({width:lbs.lbWidth+"px",height:lbs.lbHeight+"px"});
	lbs.lbOpen=true; ttPlaceDM(); ttPlaceLB(); $('#tt_lb').show();
}
function ttKeyPress(){$(document).keydown(function(objEvent){ttKeyCheck(objEvent);});}
function ttKeyCheck(keyEvent){if(keyEvent==null){keycode=event.keyCode;}else{keycode=keyEvent.keyCode;}key=String.fromCharCode(keycode).toLowerCase();if((key==lbs.lbKeyClose)||(keycode==27)){ttCloseLB();}}
function ttPlaceDM(){if(lbs.lbOpen&&lbs.lbMask) {$('#tt_dm').css({top:0,left:0,width:$(window).width(),height:$(document).height()});$('#tt_dm').show();}}
function ttPlaceLB(){if(lbs.lbOpen) {var ttv_top=($(window).height()-parseInt(lbs.lbHeight))>=102?($(window).height()-parseInt(lbs.lbHeight)-102):0;$('#tt_lb').css({top:((ttv_top/2)+$(window).scrollTop())+"px",left:($(window).width()-parseInt(lbs.lbWidth)-30)/2+"px"});}}
function ttCloseLB(){$('#tt_lb').hide(); $('#tt_dm').hide(); lbs.lbOpen=false; $('#tt_lb').remove(); $('#tt_dm').remove();}
return this.unbind('click').click(ttLightBoxInit);};})(jQuery);
function ttLightBoxClose() {$("#tt_lb .close").click();}
