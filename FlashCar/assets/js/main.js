
$(document).ready( function(){
	

	function scrollTopFixed(htOp) {
		var windowTop = $(window).scrollTop();
		var adDcl = "fixedMenu";
		var mTadd = $(".main_content");
		var htOpHT = htOp.outerHeight();
		var htOpH = htOpHT + 150;
		if (windowTop > htOpH) {
			if (!(htOp.hasClass(adDcl))) {
				htOp.stop();
				htOp.addClass(adDcl).css({
					'top': (-1 * htOpH) + 'px',
				}).animate({
					'top': '0px'
				}, 250, 'easeOutQuad', function () {});
			}
		}
		else {
			if (htOp.hasClass(adDcl)) {
				htOp.stop();
				htOp.animate({
					'top': (-1 * htOpH) + 'px'
				}, 250, 'easeOutQuad', function () {
					htOp.removeClass(adDcl).removeAttr('style');
				});
			}
		}
	}
	
	$(window).scroll(function () {
		var htOp = $('.header_menu');
		scrollTopFixed(htOp);
	});
		


    //js for scroll to section content
    $('.go_to_top a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 2000);
        }
    }); 

    
  // Js for app-slider
  $('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
	responsive: [
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 1,
		}
	},
	{
		breakpoint: 640,
		settings: {
			arrows: false,
			slidesToShow: 1,
		}
	}
	]
  });



   
	//js for latest_news_slider
	$('.latest_news_slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
                slidesToShow: 1,
			}
		},
		{
			breakpoint: 640,
			settings: {
                arrows: false,
                slidesToShow: 1,
			}
		}
		]
	});
   


	//js for latest_news_slider
	$('.thumbnail_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		centerMode: true,
		centerPadding: '0px',
		dots: false,
		asNavFor: '.user_details_slider',
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
                
			}
		},
		{
			breakpoint: 640,
			settings: {
                arrows: false,
                slidesToShow: 3,
			}
		}
		]
	});
   
	//js for latest_news_slider
	$('.user_details_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		asNavFor: '.thumbnail_slider',
		responsive: [
		{
			breakpoint: 991,
			settings: {
                
			}
		},
		{
			breakpoint: 640,
			settings: {
                arrows: false,
			}
		}
		]
	});
    
  

});