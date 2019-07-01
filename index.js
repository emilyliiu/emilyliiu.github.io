$(document).ready(function() {

	$.fn.animateRotate = function(angle, duration, easing, complete) {
	  var args = $.speed(duration, easing, complete);
	  var step = args.step;
	  return this.each(function(i, e) {
		args.complete = $.proxy(args.complete, e);
		args.step = function(now) {
		  $.style(e, 'transform', 'rotate(' + now + 'deg)');
		  if (step) return step.apply(e, arguments);
		};

		$({deg: 0}).animate({deg: angle}, args);
	  });
	};
	
	$("#about").css("background-color", "#fff");
	$("#about").css("height", "100vh");
	$("#about").css("width", "100%");
	$("#about").fadeIn();
	$(".about-content").fadeIn();
	
	$(".about-animate").on("click", function() {
		$(".about-content").fadeOut();
		$("#about").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(90);
		});
		
		setTimeout(function() {
			$("#about").fadeOut();		 
		}, 1500);
		
		setTimeout(function() {
			$("#more-about").animateRotate(0, 0);
			$("#more-about").css("height", "25px");
			$("#more-about").css("width", "375px");
			$("#more-about").fadeIn();
			$("#more-about").animate({
				backgroundColor: "#4e3c7c"
			}, function() {
				$(this).animate({
					height: "100vh"
				}, function() {
					$(this).animate({
						width: "100%"
					}, function() {
						$(".more-content").fadeIn(300);
					});
				});
			});
		}, 800);
	});
		
	$(".more-animate").on("click", function() {
		$(".more-content").fadeOut();
		$("#more-about").animate({
			width: "25px",
			height: "375px"
		}, function() {
			$(this).animateRotate(-90);
		});
		
		setTimeout(function() {
			$("#more-about").fadeOut();			
		}, 1500);
		
		setTimeout(function() {
		$("#about").animateRotate(0, 0);
		$("#about").css("height", "25px");
		$("#about").css("width", "375px");
			$("#about").fadeIn();
			$("#about").animate({
				height: "100vh"
			}, function() {
				$(this).animate({
					width: "100%"
				}, function() {
					$(".about-content").fadeIn(300);
				});
			});
		}, 1400);
	});
	
});
