
$(document).ready( function(){
	
	
	//js for sticky header
	$(function(){
		$(window).scroll(function(){
			var winTop = $(window).scrollTop();
			if(winTop >= 20){
			$(".WPERP_header").addClass("sticky_nav");
			}else{
			$(".WPERP_header").removeClass("sticky_nav");
			}//if-else
		});//win func.
	});//ready func.
		


	//js for scroll to top
	$('.callToAction').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 2000);
		return false;
	});

	
	//js for client testimonial more item show
	if($('.reviewsClients_wraper').length){
		$(".testimonial_item").slice(0, 3).show();
		if ($(".testimonial_item:hidden").length != 0) {
			$("#loadMore").show();
		}		
		$("#loadMore").on('click', function (e) {
			e.preventDefault();
			$(".testimonial_item:hidden").slice(0, 3).slideDown();
			if ($(".testimonial_item:hidden").length == 0) {
				$("#loadMore").fadeOut('slow');
			}
		});
	};



    
  

});
