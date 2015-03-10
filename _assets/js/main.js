$(document).ready(function(){
	
	$(window).scroll(function() {
		
		var vpPos     		= $(window).scrollTop(),
    		menuPos 		= $('.wrapper').offset().top,
    		menuDist    = (menuPos - vpPos),
		
			sec1Pos		= $('#graphs__1').offset().top,
			sec1Dist	= (sec1Pos - vpPos),
			sec2Pos		= $('#graphs__2').offset().top,
			sec2Dist	= (sec2Pos - vpPos),
			sec2Dif		= (vpPos - (sec2Pos - sec1Pos)),
			sec3Pos		= $('#graphs__3').offset().top,
			sec3Dist	= (sec3Pos - vpPos),
			sec4Pos		= $('#graphs__4').offset().top,
			sec4Dist	= (sec4Pos - vpPos);		

		// Sticky header
		
		if (menuDist <= 50) {
		   $(".mainNav").addClass("onTop");
		   $(".kedis").removeClass("hidden");
		} else if (menuDist > 50){
			$(".mainNav").removeClass("onTop");
			$(".mainNav__link").removeClass("active")
			$(".kedis").addClass("hidden");
		};
		
		// Active state
		
		if (sec1Dist <=50 && sec2Dist >50) {
			$(".mainNav__link").removeClass("active");
			$(".mainNav__link--1").addClass("active");
		} else if (sec2Dist <=50 && sec3Dist >50) {
			$(".mainNav__link").removeClass("active");
			$(".mainNav__link--2").addClass("active");
		} else if (sec3Dist <=50 && sec4Dist >50) {
			$(".mainNav__link").removeClass("active");
			$(".mainNav__link--3").addClass("active");
		} else if (sec4Dist <=50) {
			$(".mainNav__link").removeClass("active");
			$(".mainNav__link--4").addClass("active");
		}
	});
	
	
	
	// Click to scrolls
	// comes from http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links
	// thank you man !
	
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top - 50
			}, 750);
			return false;
		  }
		}
	  });
	});
	
});