function changeDisplay(){
	$("#construct").hide();
	$("#edit").show();
}

	$(".edit_title").focus(function(){
	$(".edit_title").css("background-color","#fef1e8");
	}).blur(function(){
	$(".edit_title").css("background-color","#fff");
})
