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

// tab-bar (show tabs)
$('.tab-header ul > li').hover(function() {
	var index = $('.tab-header ul > li').index(this);
	$('.tab-body .tab-item').each(function(i) {
		if(index == i) {
			$('.tab-header ul > li').eq(i).addClass('tab-active');
			$('.tab-body .tab-item').eq(i).css('display', 'block');
		} else {
			$('.tab-header ul > li').eq(i).removeClass('tab-active');
			$('.tab-body .tab-item').eq(i).css('display', 'none');
		}
	});
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

$('.slide-left').click(function() {
	var offset = $('.gallery-slides ul').css('left');
    if(offset == '0px') {
		var offset = $('.gallery-slides ul').css('left', '-259px');
    } else if (offset == '-259px') {
		var offset = $('.gallery-slides ul').css('left', '-518px');
	}
});
$('.slide-right').click(function() {
    var offset = $('.gallery-slides ul').css('left');
    if(offset == '-518px') {
		var offset = $('.gallery-slides ul').css('left', '-259px');
    } else if (offset == '-259px') {
		var offset = $('.gallery-slides ul').css('left', '0px');
	}
});