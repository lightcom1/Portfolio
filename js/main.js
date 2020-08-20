$(function() {
	$(window).scroll(function() {
		$('.section__title, .contacts-form').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+780) {
				$(this).addClass("animate__fadeInLeftBig");
			}
		});
	});
	$(window).scroll(function() {
		$('.feature-item, .contacts-phone, .contact-mail, .contacts-social').each(function() {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+780) {
				$(this).addClass("animate__fadeInUp");
			}
		});
	});
});