
$( document ).ready(function() {
    
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
    
    
	    
	//js for weAerFluentSlider
	$('.weAerFluentSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: false,
		//infinite: false,
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
    
    
    
	    
	//js for workItemSlider
	$('.workItemSlider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
        infinite: false,
        onmousewheel: true,
		responsive: [
		{
			breakpoint: 991,
			settings: {
                slidesToShow: 2,
			}
		},
		{
			breakpoint: 640,
			settings: {
				arrows: false,
                slidesToShow: 1
			}
		}
		]
	});
        
    
	    
	//js for teamItemSlider
	$('.teamItemSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
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
    
    
    
	
    //js for work image full view
    $("[data-fancybox]").fancybox({
        buttons : [
        'slideShow',
        'fullScreen',
        //'thumbs',
        //'share',
        //'download',
       // 'zoom',
        'close'
    ],
        idleTime : 1,
        protect : false,
        dblclickContent : false,
        scrolling: 'yes',
        centerOnScroll: true,
        
    }); 
    
	
        
    
    //js for window scroll class add
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('body').addClass('fluentFixed');
        }
        else {
            $('body').removeClass('fluentFixed');
        }
    });
    
    $(".mainMenu li").click(function(){
        $(".mainMenu li").removeClass('active');
        $(this).addClass('active');
    });
    
    
    
  
});

