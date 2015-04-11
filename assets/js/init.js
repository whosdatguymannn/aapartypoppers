$( document ).ready(function() {

  $('.flexslider').flexslider({ pauseOnAction: false, });
  aaGalleryCarousel();	
  

});


function aaGalleryCarousel() {
	var pos;
	
	$('.gallery-img-wrap, .gallery-unit > a').click(function (e) {
		e.preventDefault();
		pos = $(e.currentTarget).attr('gallery');	
		$('#ImageCarouselWrap').show();
		showCarousel();
		$('html, body').animate({
		    scrollTop: $('#ImageCarouselWrap').offset().top
		}, 500);
	});
	
	$('.close-button').click(function (e) {	
		$('#ImageCarouselWrap').slideUp(1000);
	});
	
	function showCarousel() {
		hideCarousel();
		$('#Carousel > li[gallery=' +pos + ']').fadeIn(500);	
	}
	
	function hideCarousel() {
		$('#Carousel > li').fadeOut(500);	
	}
	
}

/*
function aaGalleryCarousel() {
	var pos,
	    numOfChildren = $('#Carousel').children().length;
	
	$('.gallery-cell-content').click(function (event) {
		event.preventDefault();
		pos = $(event.currentTarget).attr('startPos');
		$('#Gallery').fadeOut(500, showCarousel); 		
	});
	
	$('.carousel-prev-img').click(function (event) {
		event.preventDefault();
		prevImg ();
	});
	
	$('.carousel-next-img').click(function (event) {
		event.preventDefault();
		nextImg ();
	});
	
	$('#Carousel img').swipe({
		swipe:function(event, direction, distance, duration, fingerCount) {
			switch(direction) {
				case 'left':
					nextImg();
					break;
				case 'right':
				  prevImg();
				  break;	
			}
		}	
	});
	
	function showCarousel () {
		$('#GalleryCarousel').fadeIn(100, changeImg);
	}
	
	function changeImg () {
		$('#Carousel > li').fadeOut(500);
		$('#Carousel > li[pos=' +pos + ']').fadeIn(500);	
	}
	
	function prevImg () {
		if (pos == 0) {
			pos = numOfChildren - 1;
		} else {
			pos--;	
		}
		changeImg ();
	}
	
	function nextImg () {
		if (pos == numOfChildren - 1) {
			pos = 0;
		} else {
			pos++;	
		}
		changeImg ();
	}
	
}
****/


