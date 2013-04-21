/*
 *   Require jquery.js v1.9.1
 */

// show span in layout.html
$('#showContainer').mouseover(function() {
  	$(this).css("background-color", "#66cdaa");
});
$('#showContainer').mouseout(function() {
  	$(this).css("background-color", "#eee");
});
$("#showContainer [class*='span']").mouseover(function () {
	$(this).css("background-color", "#66cdaa");
});
$("#showContainer [class*='span']").mouseout(function () {
	$(this).css("background-color", "#eee");
});

// show hidden items (nav and dropdown button)
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