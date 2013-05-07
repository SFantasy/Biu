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
$(".showlayout [class*='span'], #showRow [class*='span']").mouseover(function () {
	$(this).css("background-color", "#66cdaa");
});
$(".showlayout [class*='span'], #showRow [class*='span']").mouseout(function () {
	$(this).css("background-color", "#eee");
});

// show hidden items (nav and dropdown button)
$('.show-more').bind('click', function() {
	if($(this).next().css('display') == 'block') {
		$(this).next().css('display', 'none');
	} else {
		$(this).next().css('display', 'block');
	}
});

// textarea form event
$('.form-area textarea').focus(function() {
	$(this).css('height', '50px');
});

$('.form-area textarea').focusout(function() {
	$(this).css('height', '16px');
});

// gallery plugin 
$('.img-change li').hover(function() {
	var index = $('.img-change li').index(this);
	$('.img-show li').each(function(i) {
		if(index == i) {
			$('.img-show li').eq(i).css('z-index', 9);
		} else {
			$('.img-show li').eq(i).css('z-index', 1);
		}
	});
});