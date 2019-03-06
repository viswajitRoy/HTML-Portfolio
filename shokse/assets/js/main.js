jQuery.noConflict();

var shokesScriptObj = {};

jQuery(function($){
	
	//js for slick company-research
	$('.trusted-logo').slick({
		slidesToShow: 6,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		responsive: [
		{
		  breakpoint: 991,
		  settings: {
			  slidesToShow: 4,
			  slidesToScroll: 3,
			  autoplay: true,
			  autoplaySpeed: 2000,
			  arrows: false,
			  dots: true
		  }
		},
		{
		  breakpoint: 640,
		  settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  autoplay: true,
			  autoplaySpeed: 2500,
			  arrows: false,
			  dots: true,
		  }
		}
		]
	});
	
	
	//Click menu scroll to section 
	$('.scrollToContent').click(function(){
		var scrollToContent = $(this).data('scrollto');
		if (scrollToContent !== 'undefined' && scrollToContent != '' && $(scrollToContent).length) {
			$('html, body').animate({
				'scrollTop' : $(scrollToContent).offset().top
			}, 1000);
		}
		return false;
	});
	
	
	
	shokesScriptObj.horizontalContentScroll($);
	
});


var myScroll;

jQuery(window).load(function(e) {
    shokesScriptObj.horizontalContentScroll(jQuery);
});


shokesScriptObj.horizontalContentScroll = function($) {
	if ($(window).width() > 767) {
		if ($('.horizontal-content-wrap').length) {
			var _hMaxheight = 0, _hTotalWidth = 0;
			$('.horizontal-content-wrap').children().each(function(index, element) {
				_hTotalWidth += ($(this).width() + 15);
				_hMaxheight = $(this).height() > _hMaxheight ? $(this).height() : _hMaxheight;
			});	
			
			$('.horizontal-content-wrap-scroll').css({'min-height' : (_hMaxheight) + 'px'});
			$('.horizontal-content-wrap').css({'min-height' : (_hMaxheight) + 'px', 'width' : _hTotalWidth + 'px'});
			$('.horizontal-content-wrap').children().css({'min-height' : _hMaxheight + 'px', 'width' : $('.horizontal-content-wrap-noscroll').width() + 'px'});
			
			myScroll = new IScroll('.horizontal-content-wrap-scroll', { scrollX: true, scrollY: false, mouseWheel: true });
			
		}
	}
};



/*shokesScriptObj.horizontalContentScroll = function($) {
	if ($('.horizontal-content-wrap').length) {
		var _hMaxheight = 0, _hTotalWidth = 0;
		$('.horizontal-content-wrap').children().each(function(index, element) {
            _hTotalWidth += ($(this).width() + 15);
			_hMaxheight = $(this).height() > _hMaxheight ? $(this).height() : _hMaxheight;
        });	
		
		//$('.horizontal-content-wrap-noscroll').css({'height' : _hMaxheight + 'px'});
		//$('.horizontal-content-wrap-scroll').css({'height' : (_hMaxheight + 15) + 'px'});
		//$('.horizontal-content-wrap').css({'height' : (_hMaxheight + 15) + 'px', 'width' : _hTotalWidth + 'px'});
		//$('.horizontal-content-wrap').children().css({'height' : _hMaxheight + 'px', 'width' : $('.horizontal-content-wrap-noscroll').width() + 'px'});
		
		//$('.horizontal-content-wrap-noscroll').css({'height' : _hMaxheight + 'px'});
		$('.horizontal-content-wrap-scroll').css({'height' : (_hMaxheight) + 'px'});
		$('.horizontal-content-wrap').css({'height' : (_hMaxheight) + 'px', 'width' : _hTotalWidth + 'px'});
		$('.horizontal-content-wrap').children().css({'height' : _hMaxheight + 'px', 'width' : $('.horizontal-content-wrap-noscroll').width() + 'px'});
		
		myScroll = new IScroll('.horizontal-content-wrap-scroll', { scrollX: true, scrollY: false, mouseWheel: true });
		
	}
};*/