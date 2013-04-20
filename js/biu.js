/*
 *   Require jquery.js v1.9.1
 */

// show hidden items
$('.show-more').bind('click', function() {
	if($('.more-items').css('display') == 'block') {
		$('.more-items').css('display', 'none');
	} else {
		$('.more-items').css('display', 'block');
	}
});

// textarea form event
$('.form-area textarea').focus(function() {
	$(this).css('height', '50px');
});

$('.form-area textarea').focusout(function() {
	$(this).css('height', '16px');
});