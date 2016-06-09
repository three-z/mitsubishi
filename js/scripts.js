$(document).ready(function() {

	$('.form select').styler();

	$('.service-select-tabs a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('li').addClass('active').siblings().removeClass('active');
		$($(this).attr('href')).addClass('active').siblings().removeClass('active');
	});

	$('.service-select-list a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('li').toggleClass('active');
	});
});