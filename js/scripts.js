$(document).ready(function() {

	$('.form select').on('change', function() {
		if ($(this).val() == '0') {
			$(this).removeClass('no-placeholder');
		}
		else {
			$(this).addClass('no-placeholder');
		}
	});

	$('.service-select-tabs a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('li').addClass('active').siblings().removeClass('active');
		$($(this).attr('href')).addClass('active').siblings().removeClass('active');
		$('.service-price').show();
	});

	$('.service-select-list a').on('click', function(e) {
		e.preventDefault();

		$(this).closest('li').toggleClass('active');
	});


});