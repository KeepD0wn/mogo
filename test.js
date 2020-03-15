$(function(){

	var header = $("#header");
	var introH = $("#intro").innerHeight();
	var scrollOffset = $(window).scrollTop();

	checkScroll(scrollOffset);

	$(window).on("scroll",function(){
		scrollOffset= $(this).scrollTop();
		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset){		
		//console.log(scrollOffset);

		if (scrollOffset > introH/2) {
			header.addClass("fixed");
		}
		else{
			header.removeClass("fixed");
		}
	}

	$("#nav_toggle").on("click",function(event){
		event.preventDefault(); //убираем стандартное поведение кнопки

		$("#nav").toggleClass("active");


	});

});
