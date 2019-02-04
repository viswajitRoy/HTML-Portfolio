jQuery(function($) {
	
	/*--JS for Slide menu--*/
	$('.slidemenu').removeClass('hide');
	$('.navbar-toggle').unbind('click').on('click', function() {
		if (!$('.slidemenu').hasClass('slidemenu-show')) $('.slidemenu').addClass('slidemenu-show').removeClass('slidemenu-hide');
	});
	
	$('.side-btn-close').unbind('click').on('click', function() {
		if ($('.slidemenu').hasClass('slidemenu-show')) $('.slidemenu').removeClass('slidemenu-show').addClass('slidemenu-hide');
	});
	
	
	
	/*--JS for class add or remove--*/
	$('.investmentAreas-text ul li').click(function() {
		$(this).toggleClass("backgroundStyle");
	});
	
	
});
