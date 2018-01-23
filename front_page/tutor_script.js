$(document).ready(function(){
	
	//home button animates back to top of page
	$('.home_button').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#home').position().top
		},500);
			
	});

	//clicking login animates to login part of page 
	$('.tutoree_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#tutoree').position().top
		},500);
			
	});
});

	

