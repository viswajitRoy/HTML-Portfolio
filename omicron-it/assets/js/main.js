

$( document ).ready(function() {
    
    
    //js for header-menu-icon
    $(".header-menu-icon").click(function(){
		$(".header-menu").toggleClass("openMenu");
		$("body").toggleClass("openMbMenu");
	});
    

    //js for header-menu-icon
    $(".mb-menu-open .main-menu li a").click(function(){
		$(".header-menu").removeClass("openMenu");
		$("body").removeClass("openMbMenu");
	});
    

    
    
    //js for scroll to section content
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 90
            }, 2000);
        }
    });
    
    
	    
	//js for header-banner-slider
	$('.header-banner').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		infinite: false,
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
    
    
    
	    
	//js for feedback-slider
	$('.feedback-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		infinite: false,
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
    
    
    
    
    
	//js for our-client-slider
	$('.our-client-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
                slidesToShow: 3,
			}
		},
		{
			breakpoint: 767,
			settings: {
				arrows: false,
                slidesToShow: 1,
			}
		}
		]
	}); 
    
    
    
    
    
    // hide #go-top first
    $("#go-top").hide();
    // fade in #go-topp
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#go-top').fadeIn();
            }
            else {
                $('#go-top').fadeOut();
            }
        });
        // scroll body to 0px on click
    });

    
    
    
/*  // for cloned menu  
   jQuery(document).ready(function ($) {


    //Create a clone of the Main menu and sticky.
    $('.header-menu-navigation').addClass('original').clone().insertAfter('.header-menu-navigation').addClass('cloned').css('position', 'fixed').css('top', '0').css('left', '0').css('margin-top', '0').css('z-index', '1000').removeClass('original').hide();

    scrollIntervalID = setInterval(stickIt, 10);

    function stickIt() {

        var orgElementPos = $('.original').offset();
        orgElementTop = orgElementPos.top;

        if ($(window).scrollTop() >= (orgElementTop)) {
            // Cloned element should always have same left position and width as original element.     
            orgElement = $('.original');
            coordsOrgElement = orgElement.offset();
            leftOrgElement = coordsOrgElement.left;
            widthOrgElement = orgElement.css('width');
            $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
            $('.original').css('visibility', 'hidden');
        } else {
            // not scrolled past the menu; only show the original menu.
            $('.cloned').hide();
            $('.original').css('visibility', 'visible');
        }
    }


});*/

    

    //js for sticky menu
    $(window).scroll(function() {    
        
        
        
        var topCount = $(window).scrollTop();
        
        console.log(topCount);

        if (topCount >= 90) {
            $(".haeder-top").addClass("omc-sticky");
            
        } else {
            $(".haeder-top").removeClass("omc-sticky");
        }
        
    });
    
    
    
    
    
    
  
});

