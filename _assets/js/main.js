$(document).ready(function(){
	
	
	
	$(window).scroll(function() {
		
		var navPos = $(".mainNav").offset().top,
			pagePos = $(window).scrollTop();
		console.log("scroll");

		if (pagePos >= navPos) {
		   $(".mainNav").addClass("onTop");
			console.log("add");
		} else if (pagePos < navPos) {
			$(".mainNav").removeClass("onTop");
			console.log("rmv");
		}
	});
	
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