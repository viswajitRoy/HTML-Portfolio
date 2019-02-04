(function() {
	"use strict";


	$(document).ready(function () {
		
		$(".sideMenu a").click(function(){
			$(".sideMenuWrap").toggleClass("open");
		});
		
		
		
		//js for scroll to section content
		$('a[href^="#"]').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top
				},1500);
			}
		});
		
		
		
			
		//js for avencerSlider
		$('.avencerSlider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			dots: false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					
				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false
				}
			}
			]
		});
			
		//js for teamSlider
		$('.teamSlider').slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 3000,
			arrows: true,
			dots: false,
			responsive: [
			{
				breakpoint: 991,
				settings: {
					
				}
			},
			{
				breakpoint: 640,
				settings: {
					arrows: false
				}
			}
			]
		});
		
		
	});




})(window);