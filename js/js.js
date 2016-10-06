$(function() {
	$('ul.menu li:first').addClass('active');
	$('div.container div:first').addClass('active');
	$('ul.menu').on('click', 'li:not(.active)', function() {
		$(this).addClass('active')
		.siblings().removeClass('active')
		.closest('div.container').find('div.text').removeClass('active')
		.eq($(this).index()).addClass('active');
	});
})