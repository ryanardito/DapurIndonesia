$(document).ready(function(){
	$icon = $('#search');
	$close = $('#close');
	$search = $('.bg-search');

	$icon.click(function(){
		$search.addClass("bg-search-show");
	});

	$close.click(function(){
		$search.removeClass("bg-search-show");
	});
});