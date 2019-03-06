
$(document).ready(function() {
    
    
    //js for hero slider
	$('.hero_slider_item').slick({
		arrows: true,
		dots: false,
		autoplay: true,
  		autoplaySpeed: 3500,
	});


	//js for top menu fixed
	$(window).scroll(function(){
		var winTop = $(window).scrollTop();
		if(winTop >= 160){
			$(".header_topMenu").addClass("animated fadeInDown fixed_menu");
			$("body").css("margin-top", "100px");
		}else{
			$(".header_topMenu").removeClass("animated fadeInDown fixed_menu");
			$("body").css("margin-top", "0");
		}
	});//win func.


    //js for featured products slider
	$('.featuredPrd_all').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: true,
        dots: false,
        
		responsive: [
		{
			breakpoint: 991,
			settings: {
                slidesToShow: 4,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 580,
			settings: {
                slidesToShow: 2,
			}
		}
		]
	});


    //js for Real Stories slider
	$('.realStories_slider').slick({
		arrows: true,
		dots: false,
		autoplay: false,
  		autoplaySpeed: 3500,
	});


	//js for price range bar
	$(function() {
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 100000,
		  values: [ 0, 58896 ],
		  slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	});



	//js for hover dropdown menu
	$('.categories_dropdown li.dropdown').hover(function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(250);
		}, 
		function() {
			$(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(250);
	});



	
	
    
	
	
    
    
    
  
});







