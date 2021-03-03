$(document).ready(function(){
	$(window).scroll(function(){
		$windowScroll = $(window).scrollTop();
		$outterHeightNav = $('.bg-nav').outerHeight();

		if ($windowScroll > $outterHeightNav) {
			$('.bg-nav').addClass('bg-nav-color');
			// $('.top').css({'position' : 'fixed'}).css({'right' : '50px'});
		}
		else{
			$('.bg-nav').removeClass('bg-nav-color');
			// $('.top').css({'position' : 'absolute'});
			// $('.top').css({'position' : 'absolute'}).css({'right' : '-50px'});
		}
	});
});