$(document).ready(function(){
	
	// Sticky header
	
	$(window).scroll(function() {
		
		var scrollTop     = $(window).scrollTop(),
    		elementOffset = $('.wrapper').offset().top,
    		distance      = (elementOffset - scrollTop);

		if (distance <= 50) {
		   $(".mainNav").addClass("onTop");
		   $(".kedis").removeClass("hidden");
		} else if (distance > 50){
			$(".mainNav").removeClass("onTop");
			$(".kedis").addClass("hidden");
		}
	});
	
	// Click to scrolls
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 750);
			return false;
		  }
		}
	  });
	});
	
});