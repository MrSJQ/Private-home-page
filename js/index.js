$(document).ready(function(){
	toggletip();
})
function toggletip(){
	$(".box-second-one").hover(function(){
		$(this).find(".firsttip").show(500);
		$(this).find(".secondtip").show(1000);
	},function(){
		$(this).find(".firsttip").hide(500);
		$(this).find(".secondtip").hide(1000);
	})
	$(".box-second-three").hover(function(){
		$(this).find(".firsttip").show(500);
		$(this).find(".secondtip").show(1000);
	},function(){
		$(this).find(".firsttip").hide(500);
		$(this).find(".secondtip").hide(1000);
	})
}
