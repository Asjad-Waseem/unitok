(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


	var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	    var hamburgers = document.querySelectorAll(".hamburger");
	    if (hamburgers.length > 0) {
	      forEach(hamburgers, function(hamburger) {
	        hamburger.addEventListener("click", function() {
	          this.classList.toggle("is-active");
	        }, false);
	      });
	    }

		jQuery(".browse").click(function(){
			jQuery(".browse-drop").toggle();
		});		
		
		
		

		(function () {
			  const second = 1000,
			        minute = second * 60,
			        hour = minute * 60,
			        day = hour * 24;

			  let birthday = "may 1, 2021 00:00:00",
			      countDown = new Date(birthday).getTime(),
			      x = setInterval(function() {    

			        let now = new Date().getTime(),
			            distance = countDown - now;

			        // document.getElementById("days").innerText = Math.floor(distance / (day)),
			        //   document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			        //   document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			        //   document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

			        //do something later when date is reached
			        // if (distance < 0) {
			        //   let headline = document.getElementById("headline"),
			        //       countdown = document.getElementById("countdown"),
			        //       content = document.getElementById("content");

			        //   headline.innerText = "It's my birthday!";
			        //   countdown.style.display = "none";
			        //   content.style.display = "block";

			        //   clearInterval(x);
			        // }
			        //seconds
			      }, 0)
			  }());
					
		
			jQuery(window).scroll(function(){
				var otd = jQuery(window).scrollTop();


				if (otd > 50) {
					jQuery(".mno").addClass("fixed");
				} else {
					jQuery(".mno").removeClass("fixed");
				}
			});
		
		
	});
})(jQuery);