$(document).ready(function () {

	$.fn.animateRotate = function (angle, duration, ease, complete) {
		var args = $.speed(duration, ease, complete);
		var step = args.step;
		return this.each(function (i, e) {
			args.complete = $.proxy(args.complete, e);
			args.step = function (now) {
				$.style(e, 'transform', 'rotate(' + now + 'deg)');
				if (step) return step.apply(e, arguments);
			};

			$({
				deg: 0
			}).animate({
				deg: angle
			}, args);
		});
	};

	$("#about").css("background-color", "#fff");
	$("#about").css("height", "100%");
	$("#about").css("width", "100%");
	$("#about").fadeIn();
	$(".about-content").fadeIn();

	$(".about-animate").on("click", function () {
		$(".about-content").fadeOut();

		setTimeout(function () {
			$("#about").fadeOut();
		}, 1000);

		setTimeout(function () {
			$("#more-about").animateRotate(0, 0);
			$("#more-about").fadeIn();
			$("#more-about").animate({
				backgroundColor: "#e4e4e4"
			}, function () {
				$(this).animate({
					height: "100%"
				}, function () {
					$(this).animate({
						width: "100%"
					}, function () {
						$(".more-content").fadeIn(500);
					});
				});
			});
		}, 1000);
	});

	$(".more-animate").on("click", function () {
		$(".more-content").fadeOut();
		$("#more-about").animate({
			width: "25px",
			height: "375px"
		}, function () {
			$(this).animateRotate(-90);
		});

		setTimeout(function () {
			$("#more-about").fadeOut();
		}, 1000);

		setTimeout(function () {
			$("#about").animateRotate(0, 0);
			$("#about").css("height", "25px");
			$("#about").css("width", "375px");
			$("#about").fadeIn();
			$("#about").animate({
				height: "100vh"
			}, function () {
				$(this).animate({
					width: "100%"
				}, function () {
					$(".about-content").fadeIn(1000);
				});
			});
		}, 1000);
	});

});