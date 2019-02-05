jQuery(function($) {
	
    
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
			$('#return-to-top').fadeIn(200);    // Fade in the arrow
		} else {
			$('#return-to-top').fadeOut(200);   // Else fade out the arrow
		}
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
		$('body,html').animate({
			scrollTop : 0                       // Scroll to top of body
		}, 1000);
	});
	
	
	
	//js for before-after-slider
    $('.days-need-slider').slick({        
		arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 2,
		responsive: [
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
		]		
    });
	
	
	
	
	
	
	
	
	
	

	
	
});

