$(function() {
	$(window).scroll(function() {
		$('.section__title, .contacts-form').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+760) {
				$(this).addClass("animate__fadeInLeftBig");
			}
		});
	});
	$(window).scroll(function() {
		$('.feature-item, .contacts-phone, .contact-mail, .contacts-social, .swiper-container').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+760) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
});
var mySwiper = new Swiper('.swiper-container', {
	pagination: {
		el: '.project-pagination',
		bulletClass: 'project-bullet',
		bulletActiveClass: 'project-bullet-active',
		clickable: true
	},
});
$(document).ready(function(){
	$('.hero__button').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
		}, 700);
		e.preventDefault();
		return false;
	});
});