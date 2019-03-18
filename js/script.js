$(document).ready(function() {
			initMap(".map");
		});

$(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
						$('html,body').animate({scrollTop:$(this.hash).offset().top},1500);
				});
			});

$(window).scroll(function(e) {
				if ($(this).scrollTop() > 400){  
    				$('nav').addClass("sticky");
    				$('#menu-primary').css({'opacity': 0});
  				}
  				else{
    				$('nav').removeClass("sticky");
    				$('#menu-primary').css({'opacity': 1});
  				}
			});

$(document).ready(function() {
			$("#load").click(function(event) {
				event.preventDefault();
					$("#load-services").slideToggle(1000);
			});
			$("#show").click(function(event) {
				event.preventDefault();
					$("#load-blog").slideToggle(1000);
			});
			$("#read").click(function(event) {
				event.preventDefault();
					$(".read-more").fadeIn(750);
			});
		});

$(window).scroll(function(e) {
				if ($(this).scrollTop() > 500){  
    				$('.totop').addClass("show");
  				}
  				else{
    				$('.totop').removeClass("show");
  				}
			});
