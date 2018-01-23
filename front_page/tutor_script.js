$(document).ready(function(){
	
	//home button
	$('.home_button').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#home').position().top
		},500);
			
	});

	$('.tutoree_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#tutoree').position().top
		},500);
			
	});

	$('.tutor_nav').click(function()
	{
		$('html,body').animate(
		{
			scrollTop: $('#tutor').position().top
		},500);
			
	});


	

});

	

