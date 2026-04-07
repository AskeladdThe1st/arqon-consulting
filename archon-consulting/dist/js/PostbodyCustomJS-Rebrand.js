var ww = $(window).width();
var platformStatus;
var browser = 'others';
msieversion();

		// init
		ww = $(window).width();
		var controller = new ScrollMagic.Controller();
        
        var wipeAnimation = new TimelineMax()
			.call(addClassActive,[".section-container-1 .panel-1 .text-center"], this, 0.001)
			.call(addClassActive,[".section-container-1 .panel-1 .cta-scroll"], this, 0.001)
            .call(addClassActive,[".section-container-1 .panel-1 .cta-more"], this, 0.001)
			.fromTo(".section-container-1 .panel-1 .img-1", 1, {width: "60%"}, { width:"3000%", ease: Linear.easeOut}, "0.1")
			.call(removeClassActive,[".section-container-1 .panel-1 .text-center"], this, 0.1)
			.call(removeClassActive,[".section-container-1 .panel-1 .cta-scroll"], this, 0.1)
            .call(removeClassActive,[".section-container-1 .panel-1 .cta-more"], this, 0.1)
			.call(playVideo,[".marquee-vid.vid-1"], this, 0.1)
			.fromTo(".section-container-1 .panel-1", 0.01, {opacity: "1"}, { opacity:"0", ease: Linear.easeNone}, "0.6")
			.fromTo(".section-container-1 .panel-2 .vid-1", 0.1, {width:"50%"}, { width:"100%", ease: Power1.easeOut}, "0.1")
			.call(removeClassActive,[".section-container-1 .panel-2"], this, 0.59)
			.call(addClassActive,[".section-container-1 .panel-2"], this, 0.6)
			.call(toggleClassActive,[".section-container-1 .panel-2 .title-1"], this, 0.6)
			.call(toggleClassActive,[".section-container-1 .panel-2 .cta-more"], this, 0.6);
			
		var sm1 = new ScrollMagic.Scene({
				triggerElement: ".section-container-1",
				triggerHook: "onLeave",
				offset: "-1px",
				duration: "150%",
			})
			.setPin(".section-container-1")
			.setTween(wipeAnimation)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
			
		
		var sm2 = new ScrollMagic.Scene({
				triggerElement: ".section-container-1b",
				triggerHook: 0.5,
			})
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-1b .labels");
					addClassActive(".section-container-1b .box-container");
				}else{
					removeClassActive(".section-container-1b .labels");
					removeClassActive(".section-container-1b .box-container");
				}
			});
			
		var sm3 = new ScrollMagic.Scene({
				triggerElement: ".section-container-1b",
				triggerHook: 0.7,
			})
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-1b .text-center");
				}else{
					removeClassActive(".section-container-1b .text-center");
				}
			});
		
		var sm4 = new ScrollMagic.Scene({
				triggerElement: ".section-container-2",
				triggerHook: "onCenter",
			})
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-2 .text-center");
					addClassActive(".section-container-2 .cta-more");
				}else{
					removeClassActive(".section-container-2 .text-center");
					removeClassActive(".section-container-2 .cta-more");
				}
			});
			
		var wipeAnimation3 = new TimelineMax()
            .call(removeClassActive,[".section-container-3 .panel-1 .title-1"], this, 0.01)
            .call(addClassActive,[".section-container-3 .panel-1 .title-1"], this, 0.02)
			.fromTo(".section-container-3 .panel-1 .vid-1", 0.5, {height: "80%"}, { height: "100%", ease: Linear.easeNone}, 0.01)
            .fromTo(".section-container-3 .panel-1 .curtain-border", 0.45, {width: "980px"}, { width: "100%", ease: Linear.easeNone}, 0.02)
			.call(removeClassActive,[".section-container-3 .panel-2"], this, 0.5)
			.call(addClassActive,[".section-container-3 .panel-2"], this, 0.55)
			.call(removeClassActive,[".section-container-3 .panel-2 .core-values"], this, 0.5)
			.call(addClassActive,[".section-container-3 .panel-2 .core-values"], this, 0.55)
			.call(removeClassActive,[".section-container-3 .panel-2 .core-values-cta"], this, 0.5)
			.call(addClassActive,[".section-container-3 .panel-2 .core-values-cta"], this, 0.55)
			.fromTo(".section-container-3 .panel-2", 0.5, {top: "0%"}, { top: "0%", ease: Linear.easeNone})
			.call(removeClassActive,[".section-container-3 .panel-2 .new-row"], this, 1)
			.call(addClassActive,[".section-container-3 .panel-2 .new-row"], this, 1.01)
			.call(removeClassActive,[".section-container-3 .panel-2 .ethics"], this, 1)
			.call(addClassActive,[".section-container-3 .panel-2 .ethics"], this, 1.01)
			.call(removeClassActive,[".section-container-3 .panel-2 .ethics-cta"], this, 1)
			.call(addClassActive,[".section-container-3 .panel-2 .ethics-cta"], this, 1.01);
			
        var sm5 = 	new ScrollMagic.Scene({
				triggerElement: ".section-container-3",
				triggerHook: "onLeave",
				duration: "200%",
			})
			.setPin(".section-container-3")
			.setTween(wipeAnimation3)
			.addTo(controller);
			
		// new ScrollMagic.Scene({
		// 		triggerElement: ".section-container-3b .panel-1",
		// 		triggerHook: "onCenter",
		// 	})
		// 	.addTo(controller3b)
		// 	.on("enter leave", function (e) {
		// 		if( e.type == "enter"){
		// 			addClassActive(".section-container-3b .panel-1 .core-values");
		// 			addClassActive(".section-container-3b .panel-1 .cta-more");
		// 		}else{
		// 			removeClassActive(".section-container-3b .panel-1 .core-values");
		// 			removeClassActive(".section-container-3b .panel-1 .cta-more");
		// 		}
		// 	});
		
		// new ScrollMagic.Scene({
		// 		triggerElement: ".section-container-3b .panel-2",
		// 		triggerHook: "onCenter",
		// 	})
		// 	.addTo(controller3c)
		// 	.on("enter leave", function (e) {
		// 		if( e.type == "enter"){
		// 			addClassActive(".section-container-3b .panel-2 .ethics");
		// 			addClassActive(".section-container-3b .panel-2 .cta-more");
		// 		}else{
		// 			removeClassActive(".section-container-3b .panel-2 .ethics");
		// 			removeClassActive(".section-container-3b .panel-2 .cta-more");
		// 		}
		// 	});
			
	    var sm6 = new ScrollMagic.Scene({
				triggerElement: ".section-container-4",
				triggerHook: 0.5,
			})
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-4 .text-center");
					addClassTrigger(".section-container-4 .vid-container");
					addClassActive(".section-container-4 .card-content");
				}else{
					removeClassActive(".section-container-4 .text-center");
					removeClassTrigger(".section-container-4 .vid-container");
					removeClassActive(".section-container-4 .card-content");
				}
			});
			
		var wipeAnimation5 = new TimelineMax()
			.call(removeClassActive,[".section-container-5 .panel-1 .culture-text"], this, 0.01)
			.call(addClassActive,[".section-container-5 .panel-1 .culture-text"], this, 0.02)
			.fromTo(".section-container-5 .panel-1 .vid-1", 0.5, {height: "80%"}, { height: "100%", ease: Linear.easeNone})
			.fromTo(".section-container-5 .panel-1 .curtain-border", 0.45, {width: "980px"}, { width: "100%", ease: Linear.easeNone}, "0.01")
			.call(removeClassActive,[".section-container-5 .panel-2"], this, 0.5)
			.call(addClassActive,[".section-container-5 .panel-2"], this, 0.51)
			.call(removeClassActive,[".section-container-5 .panel-2 .culture-text"], this, 0.5)
			.call(addClassActive,[".section-container-5 .panel-2 .culture-text"], this, 0.51)
			.fromTo(".section-container-5 .panel-2", 0.5, {top: "0%"}, { top: "0%", ease: Linear.easeNone});
			
        var sm7 = new ScrollMagic.Scene({
				triggerElement: ".section-container-5",
				triggerHook: "onLeave",
				duration: "100%",
			})
			.setPin(".section-container-5")
			.setTween(wipeAnimation5)
			.addTo(controller);
			
		var wipeAnimation6 = new TimelineMax()
			.call(removeClassActive,[".section-container-6 .panel-1 .culture-text"], this, 0.01)
			.call(addClassActive,[".section-container-6 .panel-1 .culture-text"], this, 0.02)
			.fromTo(".section-container-6 .panel-1 .vid-1", 0.5, {height: "80%"}, { height: "100%", ease: Linear.easeNone})
			.fromTo(".section-container-6 .panel-1 .curtain-border", 0.45, {width: "980px"}, { width: "100%", ease: Linear.easeNone}, "0.01")
			.call(removeClassActive,[".section-container-6 .panel-2"], this, 0.5)
			.call(addClassActive,[".section-container-6 .panel-2"], this, 0.51)
			.call(removeClassTrigger,[".section-container-6 .img-container"], this, 0.5)
			.call(addClassTrigger,[".section-container-6 .img-container"], this, 0.51)
			.call(removeClassActive,[".section-container-6 .panel-2 .text-content"], this, 0.5)
			.call(addClassActive,[".section-container-6 .panel-2 .text-content"], this, 0.51)
			.fromTo(".section-container-6 .panel-2", 0.5, {top: "0%"}, { top: "0%", ease: Linear.easeNone});
			
        var sm8 = new ScrollMagic.Scene({
				triggerElement: ".section-container-6",
				triggerHook: "onLeave",
				duration: "100%",
			})
			.setPin(".section-container-6")
			.setTween(wipeAnimation6)
			.addTo(controller);
			
		
        var sm9 = new ScrollMagic.Scene({
				triggerElement: ".section-container-6b",
				triggerHook: 0.6,
			})
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-6b .awards-header");
					addClassActive(".section-container-6b .awards-box");
					addClassActive(".section-container-6b .cta-more");
				}else{
					removeClassActive(".section-container-6b .awards-header");
					removeClassActive(".section-container-6b .awards-box");
					removeClassActive(".section-container-6b .cta-more");
				}
			});
		
		// new ScrollMagic.Scene({
		// 		triggerElement: ".section-container-7",
		// 		triggerHook: "onCenter",
		// 	})
		// 	.addTo(controller7)
		// 	.on("enter leave", function (e) {
		// 		if( e.type == "enter"){
		// 			addClassActive(".section-container-7 .labels");
		// 			addClassActive(".section-container-7 .box-container");
		// 		}else{
		// 			removeClassActive(".section-container-7 .labels");
		// 			removeClassActive(".section-container-7 .box-container");
		// 		}
		// 	});
		
		var sm10 = new ScrollMagic.Scene({
				triggerElement: ".section-container-7b",
				triggerHook: 0.6,
			})
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-7b .text-center");
					addClassActive(".section-container-7b .cta-more");
				}else{
					removeClassActive(".section-container-7b .text-center");
					removeClassActive(".section-container-7b .cta-more");
				}
			});		
			
		var wipeAnimation8 = new TimelineMax()
			.fromTo(".section-container-8 .panel-1 .img-1", 2, {width: "70%"}, { width:"3000%", ease: Linear.easeIn})
			.fromTo(".section-container-8 .panel-2 .img-3", 0.2, {width: "50%"}, { width:"120%", ease: Linear.easeIn},"0.01")
			.call(playVideo,["video.img-3"], this, 0.001)
			.call(removeClassActive,[".section-container-8 .panel-1 .title-1"], this, 0.001)
			.call(addClassActive,[".section-container-8 .panel-1 .title-1"], this, 0.002)
			.call(removeClassActive,[".section-container-8 .panel-1 .title-2"], this, 0.001)
			.call(addClassActive,[".section-container-8 .panel-1 .title-2"], this, 0.002)
			.call(removeClassActive,[".section-container-8 .panel-1 .cta-more"], this, 0.001)
			.call(addClassActive,[".section-container-8 .panel-1 .cta-more"], this, 0.003)
			.call(addClassActive,[".section-container-8 .panel-1 .title-1"], this, 0.09)
			.call(addClassActive,[".section-container-8 .panel-1 .title-2"], this, 0.09)
			.call(addClassActive,[".section-container-8 .panel-1 .cta-more "], this, 0.09)
			.call(removeClassActive,[".section-container-8 .panel-1 .title-1"], this, 0.1)
			.call(removeClassActive,[".section-container-8 .panel-1 .title-2"], this, 0.1)
			.call(removeClassActive,[".section-container-8 .panel-1 .cta-more"], this, 0.1)
			.fromTo(".section-container-8 .panel-1", 0.001, {opacity: "1"}, { opacity:"0", ease: Linear.easeNone}, "1")
			.call(removeClassActive,[".section-container-8 .panel-2 .title-1"], this, 1.01)
			.call(removeClassActive,[".section-container-8 .panel-2"], this, 1.01)
			.call(addClassActive,[".section-container-8 .panel-2"], this, 1.02)
			.call(addClassActive,[".section-container-8 .panel-2 .title-1"], this, 1.02)
			.call(removeClassActive,[".section-container-8 .panel-2 .cta-more"], this, 1.01)
			.call(addClassActive,[".section-container-8 .panel-2 .cta-more"], this, 1.02);
		
        var sm11 = new ScrollMagic.Scene({
				triggerElement: ".section-container-8",
				triggerHook: "onLeave",
				duration: "250%",
			})
			.setPin(".section-container-8")
			.setTween(wipeAnimation8)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					//pauseVideo(".impact-vid");
				}
			});
		
        var sm12 = new ScrollMagic.Scene({
				triggerElement: ".section-container-8",
				triggerHook: 0.5,
			})
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller)
			.on("enter leave", function (e) {
				if( e.type == "enter"){
					addClassActive(".section-container-8 .panel-1 .animate_title");
					addClassActive(".section-container-8 .panel-1 .cta-more ");
				}else{
					removeClassActive(".section-container-8 .panel-1 .animate_title");
					removeClassActive(".section-container-8 .panel-1 .cta-more ");
				}
			});

if(browser == 'others'){
	if(ww > 1024){
		// Desktop screens
		// define movement of panels
		sm1.enabled(true);
		sm2.enabled(true);
		sm3.enabled(true);
		sm4.enabled(true);
		sm5.enabled(true);
        sm6.enabled(true);
		sm7.enabled(true);
		sm8.enabled(true);
		sm9.enabled(true);
		sm10.enabled(true);
        sm11.enabled(true);
		sm12.enabled(true);

		$(".icon-bar-marquee .social-icon").addClass("isActive");
		platformStatus = "desktop";
	}else{
		//Ipad and Mobile
        sm1.enabled(false);
		sm2.enabled(false);
		sm3.enabled(false);
		sm4.enabled(false);
		sm5.enabled(false);
        sm6.enabled(false);
		sm7.enabled(false);
		sm8.enabled(false);
		sm9.enabled(false);
		sm10.enabled(false);
        sm11.enabled(false);
		sm12.enabled(false);
		addClassActive(".section-container-1 .animate_title");
		addClassActive(".section-container-1 .cta-more");
		addClassActive(".section-container-1b .labels");
		addClassActive(".section-container-1b .box-container");
		addClassActive(".section-container-1b .text-center");
		addClassActive(".section-container-2 .text-center");
		addClassActive(".section-container-2 .cta-more");
		addClassActive(".section-container-3 .animate_title");
		addClassActive(".section-container-3 .cta-more");
		addClassActive(".section-container-3 .panel-2");
		addClassActive(".section-container-3 .panel-2 .core-values");
		addClassActive(".section-container-3 .panel-2 .cta-more");
		addClassActive(".section-container-3 .panel-2 .ethics");
		addClassActive(".section-container-3 .panel-2 .cta-more");
		addClassActive(".section-container-4 .text-center");
		addClassTrigger(".section-container-4 .vid-container");
		addClassActive(".section-container-4 .card-content");
		addClassTrigger(".section-container-4 .mobile-placeholder");
		addClassActive(".section-container-5 .panel-1 .culture-text");
		addClassActive(".section-container-5 .panel-1 .cta-more");
		addClassActive(".section-container-5 .panel-2");
		addClassActive(".section-container-5 .panel-2 .culture-text");
		addClassActive(".section-container-5 .panel-2 .cta-more");
		addClassActive(".section-container-6 .panel-1 .culture-text");
		addClassActive(".section-container-6 .panel-1 .cta-more");
		addClassActive(".section-container-6 .panel-2");
		addClassActive(".section-container-6 .panel-2 .text-content");
		addClassTrigger(".section-container-6 .panel-2 .mobile-placeholder");
		addClassTrigger(".section-container-6 .panel-2 .img-container");
		addClassActive(".section-container-6b .awards-header");
		addClassActive(".section-container-6b .awards-box");
		addClassActive(".section-container-6b .cta-more");
		addClassActive(".section-container-7 .labels");
		addClassActive(".section-container-7 .box-container");
		addClassActive(".section-container-7b .text-center");
		addClassActive(".section-container-7b .cta-more");
		addClassActive(".section-container-8 .panel-1 .title-1");
		addClassActive(".section-container-8 .panel-1 .title-2");
		addClassActive(".section-container-8 .panel-1 .cta-more");
		addClassActive(".section-container-8 .panel-2 .title-1");
		addClassActive(".section-container-8 .panel-2 .cta-more");
		playVideo("video.vid-1");
		playVideo("video.img-3");
			
		platformStatus = "mobile";
	}
}
	
	//On click events
	$(".small-circle").on("click",function(){
		$(".small-circle.isactive").removeClass("main-circle");
		$(".small-circle.isactive").removeClass("sub-circle-1");
		$(".small-circle.isactive").removeClass("sub-circle-2");
		$(".small-circle.isactive").removeClass("sub-circle-3");
		$(".small-circle.isactive").removeClass("sub-circle-4");
		$(".small-circle.isactive").removeClass("sub-circle-5");
		$(".small-circle.isactive").removeClass("sub-circle-6");
		
		if($(this).hasClass("small-circle-1")){
			$(this).addClass("main-circle");
			$(".small-circle.isactive").addClass("sub-circle-1");
			$(this).removeClass("sub-circle-1");
		}else if($(this).hasClass("small-circle-2")){
			$(this).addClass("main-circle");
			$(".small-circle.isactive").addClass("sub-circle-2");
			$(this).removeClass("sub-circle-2");
		}else if($(this).hasClass("small-circle-3")){
			$(this).addClass("main-circle");
			$(".small-circle.isactive").addClass("sub-circle-3");
			$(this).removeClass("sub-circle-3");
		}else if($(this).hasClass("small-circle-4")){
			$(this).addClass("main-circle");
			$(".small-circle.isactive").addClass("sub-circle-4");
			$(this).removeClass("sub-circle-4");
		}else if($(this).hasClass("small-circle-5")){
			$(this).addClass("main-circle");
			$(".small-circle.isactive").addClass("sub-circle-5");
			$(this).removeClass("sub-circle-5");
		}else if($(this).hasClass("small-circle-6")){
			$(this).addClass("main-circle");
			$(".small-circle.isactive").addClass("sub-circle-6");
			$(this).removeClass("sub-circle-6");
		}
	});
	
	$(".img-container").on("click", function(){
		var kani = $(this);
		$(this).addClass("isactive");
		$(".follow-cta-btn").removeClass("isactive");
		setTimeout(function(){ 
			kani.removeClass("isactive");
			$(".follow-cta-btn").addClass("isactive");
		}, 500);
	});
	
	if(ww > 768){
		$('.section-container-1 .cta-scroll.position-1').on('click',function(){
			$([document.documentElement, document.body]).animate({ scrollTop: 750 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-0').on('click',function(){
			$([document.documentElement, document.body]).animate({ scrollTop: 0 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-1').on('click',function(){
			//var anchor = $('#block-section-2').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: 0 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-2').on('click',function(){
			var anchor = $('#block-section-3').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top+20 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-3').on('click',function(){
			var anchor = $('#block-section-5').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top+20 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-4').on('click',function(){
			var anchor = $('#block-section-6').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top+40 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-5').on('click',function(){
			var anchor = $('.section-container-6b').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top-150 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-6').on('click',function(){
			var anchor = $('#block-section-7').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top-100 }, 1500);
			return false;
		});
		
		$('.nav-bar-menu-7').on('click',function(){
			var anchor = $('#block-section-8').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top+15 }, 1500);
			return false;
		});
		
		$( ".social-icon" ).keypress(function( event ) {
		  if ( event.which == 13 ) {
			$(this).find('.social-icon-trigger').trigger('click');
		  }
		});
		
		$( ".nav-bar-menu" ).keypress(function( event ) {
		  if ( event.which == 13 ) {
			$(this).trigger('click');
		  }
		});
		
		$( ".btn-download" ).keypress(function( event ) {
		  if ( event.which == 13 ) {
			$(this).trigger('click');
		  }
		});
		
		$( ".cta-more" ).keypress(function( event ) {
		  if ( event.which == 13 ) {
			$(this).trigger('click');
		  }
		});
		
		$( ".cta-scroll" ).keypress(function( event ) {
		  if ( event.which == 13 ) {
			$(this).trigger('click');
		  }
		});
	}else{
		$('.section-container-1 .cta-scroll.position-1').on('click',function(){
			var anchor = $('.section-container-1 .panel-2').offset();
			$([document.documentElement, document.body]).animate({ scrollTop: anchor.top-50  }, 1500);
			return false;
		});
	}
	
	$(".vid-container").on("click", function(){
		var kani = $(this);
		$(this).addClass("isactive");
		$(".follow-cta-btn").removeClass("isactive");
		setTimeout(function(){ 
			kani.removeClass("isactive");
			$(".follow-cta-btn").addClass("isactive");
		}, 500);
	});
	
	$(".read-it-btn").on("click", function(){
		$(this).addClass("active");
		$(".see-it-btn").removeClass("active");
		$(".mobile-view-options").addClass("isactive");
		$(".read-it-container").addClass("isactive");
		$(".section-container").addClass("inactive");
		$(".scrollmagic-pin-spacer").addClass("inactive");
	});
	
	$(".see-it-btn").on("click", function(){
		$(this).addClass("active");
		$(".read-it-btn").removeClass("active");
		$(".mobile-view-options").removeClass("isactive");
		$(".read-it-container").removeClass("isactive");
		$(".section-container").removeClass("inactive");
		$(".scrollmagic-pin-spacer").removeClass("inactive");
		
		// setTimeout(function(){
			// $([document.documentElement, document.body]).animate({ scrollTop: $('.section-container-3').offset().top }, 10);
		// }, 10);
		// setTimeout(function(){
			// $([document.documentElement, document.body]).animate({ scrollTop: 0 }, 10);
		// }, 20);
	});
	
	// Mouse Cursor Movement
		
	$(window).on('mousemove', function(e) {
		if ($('.section-container-3 .panel-1:hover').length != 0){
		  var xPos = e.pageX;
		  var yPos = e.pageY;
			if ($('.section-container-3 .panel-1 .img-container:hover').length != 0){
				$('.follow-cta-btn').addClass("isactive");
			}else{
				$('.follow-cta-btn').removeClass("isactive");
			}
		  var ySc3 = $(".section-container-3 .panel-1").offset().top;
		  var xSc3 = $(".section-container-3 .panel-1").offset().left;
		  //console.log(xPos, yPos);
		  $('.follow-cta-btn').css({
			'top': yPos-ySc3,
			'left': xPos-xSc3
		  });
		}
		
		if ($('.section-container-4:hover').length != 0){
		  var xPos = e.pageX;
		  var yPos = e.pageY;
			if ($('.section-container-4 .culture-card-holder .vid-container:hover').length != 0){
				$('.section-container-4 .follow-cta-btn').addClass("isactive");
			}else{
				$('.section-container-4 .follow-cta-btn').removeClass("isactive");
			}
		  var ySc3 = $(".section-container-4 .culture-card-holder").offset().top;
		  var xSc3 = $(".section-container-4 .culture-card-holder").offset().left;
		  //console.log(xPos, yPos);
		  $('.section-container-4 .follow-cta-btn').css({
			'top': yPos-ySc3,
			'left': xPos-xSc3
		  });
		}

	  if ($('.section-container-6 :hover').length != 0){
		  var xPos = e.pageX;
		  var yPos = e.pageY;
			if ($('.section-container-6 .panel-2 .img-container:hover').length != 0){
				$('.section-container-6 .follow-cta-btn').addClass("isactive");
			}else{
				$('.section-container-6 .follow-cta-btn').removeClass("isactive");
			}
		  var ySc3 = $(".section-container-6 .panel-2").offset().top;
		  var xSc3 = $(".section-container-6 .panel-2").offset().left;
		  //console.log(xPos, yPos);
		  $('.section-container-6 .follow-cta-btn').css({
			'top': yPos-ySc3,
			'left': xPos-xSc3
		  });
	  }
	  
		if($('.cards:hover').length != 0){
			var xPos = e.pageX;
			var yPos = e.pageY;
			var ySc3 = 0;
			var xSc3 = 0;
			
			if($('.img-container-1:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(1)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(1)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-1').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-2:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(2)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(2)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-2').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-3:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(3)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(3)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-3').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-4:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(4)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(4)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-4').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-5:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(5)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(5)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-5').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-6:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(6)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(6)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-6').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-7:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(7)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(7)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-7').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-8:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(8)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(8)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-8').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-9:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(9)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(9)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-9').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-10:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(10)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(10)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-10').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-11:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(11)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(11)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-11').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}
			
			if($('.img-container-12:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(12)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(12)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-12').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}

			if($('.img-container-13:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(13)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(13)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-13').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}

			if($('.img-container-14:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(14)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(14)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-14').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}

			if($('.img-container-15:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(15)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(15)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-15').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}

			if($('.img-container-16:hover').length != 0){
				ySc3 = $(".cards .img-container:nth-child(16)").offset().top;
				xSc3 = $(".cards .img-container:nth-child(16)").offset().left;
				// console.log(xPos, yPos);
				$('.cards .cards-cta-btn-16').css({
				'top': yPos-ySc3-10,
				'left': xPos-xSc3-10
				});
			}

		}
	});
	
	$(".section-container-7b .img-container").on("mouseover", function(){
		
		var cse = $(this).attr("data-case");
		var subtitle = $(this).attr("data-sub-title");
		var subtitlelink = $(this).attr("data-sub-title-link");
		var desc = $(this).attr("data-description");
		$(".section-container-7b .text-content .categoryTitle").html(cse);
		$(".section-container-7b .text-content .SubsectionTitleTrigger").attr("aria-label", subtitle);
		$(".section-container-7b .text-content .SubsectionTitleTrigger").attr("data-analytics-link-name", subtitle);
		$(".section-container-7b .text-content .SubsectionTitleTrigger").attr("href", subtitlelink);
		$(".section-container-7b .text-content .SubsectionTitle").html(subtitle);
		$(".section-container-7b .text-content .Subsectiondescription").html(desc);
	});
	
	var lastScrollTop = 0;
	$(window).on('scroll', function(){
		var s = $(window).scrollTop(),
			d = $(document).height(),
			c = $(window).height();
			scrollPercent = (s / (d-c)) * 100;
			var position = scrollPercent;
			
		if(ww <= 1199){
			console.log(position);
			$(".progress-nav-bar-roller").css('width', position + "%");
		}
			
		var bs1 = $("#block-section-1").height();
		var bs2 = $("#value-360-wrapper").height() + $("#block-section-3").height();
		//var bs3 = $("#block-section-5").height();
		var bs4 = $("#block-section-4").height() + $("#block-section-6").height();
		var bs5 = $("#block-section-awards").height();
		var bs6 = $("#block-section-7").height();
		var bs7 = $("#block-section-8").height();
		
		
		if($('#block-section-1')?.offset()?.top < s){
			var p1 = (s / bs1) * 100;
			if(p1 > 100){
				p1 = 0;
			}
			$(".nav-bar-menu.nav-bar-menu-1 .bar").css('width', p1 + "%");
			$(".nav-bar-menu.nav-bar-menu-2 .bar").css('width', "0%");
			//$(".nav-bar-menu.nav-bar-menu-3 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-4 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-5 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-6 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-7 .bar").css('width', "0%");
		}
		
		if($('#value-360-wrapper')?.offset()?.top < s){
			var p2 = ((s-bs1) / bs2) * 100;
			if(p2 > 100){
				p2 = 0;
			}
			$(".nav-bar-menu.nav-bar-menu-2 .bar").css('width', p2 + "%");
			//$(".nav-bar-menu.nav-bar-menu-3 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-4 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-5 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-6 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-7 .bar").css('width', "0%");
		}
		
		if($('#block-section-4')?.offset()?.top< s){
			var p4 = ((s-bs1-bs2) / bs4) * 100;
			if(p4 > 100){
				p4 = 0;
			}
			$(".nav-bar-menu.nav-bar-menu-4 .bar").css('width', p4 + "%");
			$(".nav-bar-menu.nav-bar-menu-5 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-6 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-7 .bar").css('width', "0%");
		}
		
		if($('#block-section-awards')?.offset()?.top < s){
			//console.log($('.section-container-6b').offset().top);
			var p5 = ((s-bs1-bs2-bs4) / bs5) * 100;
			if(p5 > 100){
				p5 = 0;
			}
			$(".nav-bar-menu.nav-bar-menu-5 .bar").css('width', p5 + "%");
			$(".nav-bar-menu.nav-bar-menu-6 .bar").css('width', "0%");
			$(".nav-bar-menu.nav-bar-menu-7 .bar").css('width', "0%");
		}
		
		if($('#block-section-7')?.offset()?.top < s){
			var p6 = ((s-bs1-bs2-bs4-bs5) / bs6) * 100;
			if(p6 > 100){
				p6 = 0;
			}
			$(".nav-bar-menu.nav-bar-menu-6 .bar").css('width', p6 + "%");
			$(".nav-bar-menu.nav-bar-menu-7 .bar").css('width', "0%");
		}
		
		if($('#block-section-8')?.offset()?.top < s){
			var p7 = ((s-bs1-bs2-bs4-bs5-bs6) / bs7) * 100;
			$(".nav-bar-menu.nav-bar-menu-7 .bar").css('width', (p7+10) + "%");
		}
		
		if(position >= 1){
			$(".nav-bar-menu-0").addClass("rotatesvg");
			//$(".icon-bar-marquee .social-icon").addClass("isActive");
		}else{
			$(".nav-bar-menu-0").removeClass("rotatesvg");
			//$(".icon-bar-marquee .social-icon").removeClass("isActive");
		}
			
	});
	
	//Swipe triggers
	if(ww <= 1024){
		$(".carousel").onSwipe(function(results){
			if(results.right == true){
				//console.log("Right")
				$(".slide-left").trigger("click");
			}
			if(results.left == true){
				//console.log("Left")
				$(".slide-right").trigger("click");
			}
		});
	}
	
	//init
	addClassActive(".section-container-1 .panel-1 .text-center");
	addClassActive(".section-container-1 .panel-1 .cta-scroll");
	if(ww > 1024){
		addClassActive(".progress-nav-bar");
	}


$(window).on("resize", function(){
	ww = $(window).width();
	
	if(ww <= 1024 && platformStatus == "desktop"){
		location.reload();
	}
	
	if(ww > 1024 && platformStatus == "mobile"){
		location.reload();
	}
});

function toggleDisplay(_target){
	if($(_target).css('display') == 'none'){
		$(_target).css('display','block');
	}else{
		$(_target).css('display','none');
	}
}

function toggleClassActive(_target){
	if($(_target).hasClass("isactive")){
		$(_target).removeClass("isactive");
	}else{
		$(_target).addClass("isactive");
	}
}

function toggleClassInActive(_target){
	if($(_target).hasClass("inactive")){
		$(_target).removeClass("inactive");
	}else{
		$(_target).addClass("inactive");
	}
}

function toggleClassDisplay(_target){
	if($(_target).hasClass("displayText")){
		$(_target).removeClass("displayText");
		$(".small-circle").removeClass("main-circle");
		$(".small-circle").removeClass("sub-circle-1");
		$(".small-circle").removeClass("sub-circle-2");
		$(".small-circle").removeClass("sub-circle-3");
		$(".small-circle").removeClass("sub-circle-4");
		$(".small-circle").removeClass("sub-circle-5");
		$(".small-circle").removeClass("sub-circle-6");
	}else{
		$(_target).addClass("displayText");
	}
}

function addClassActive(_target){
	$(_target).addClass("isactive");
}

function removeClassActive(_target){
	$(_target).removeClass("isactive");
}

function addClassTrigger(_target){
	$(_target).addClass("trigger");
}

function removeClassTrigger(_target){
	$(_target).removeClass("trigger");
}

function playVideo(_target){
	$(_target)?.get(0)?.play();
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
		browser = 'ie';
		$("#redesign-main").addClass("IE");
		addClassActive(".section-container-1 .animate_title");
		addClassActive(".section-container-1 .cta-more");
		addClassActive(".section-container-1b .labels");
		addClassActive(".section-container-1b .box-container");
		addClassActive(".section-container-1b .text-center");
		addClassActive(".section-container-2 .text-center");
		addClassActive(".section-container-2 .cta-more");
		addClassActive(".section-container-3 .animate_title");
		addClassActive(".section-container-3 .cta-more");
		addClassActive(".section-container-3 .panel-2");
		addClassActive(".section-container-3 .panel-2 .core-values");
		addClassActive(".section-container-3 .panel-2 .cta-more");
		addClassActive(".section-container-3 .panel-2 .ethics");
		addClassActive(".section-container-3 .panel-2 .cta-more");
		addClassActive(".section-container-4 .text-center");
		addClassTrigger(".section-container-4 .vid-container");
		addClassActive(".section-container-4 .card-content");
		addClassTrigger(".section-container-4 .mobile-placeholder");
		addClassActive(".section-container-5 .panel-1 .culture-text");
		addClassActive(".section-container-5 .panel-1 .cta-more");
		addClassActive(".section-container-5 .panel-2");
		addClassActive(".section-container-5 .panel-2 .culture-text");
		addClassActive(".section-container-5 .panel-2 .cta-more");
		addClassActive(".section-container-6 .panel-1 .culture-text");
		addClassActive(".section-container-6 .panel-1 .cta-more");
		addClassActive(".section-container-6 .panel-2");
		addClassActive(".section-container-6 .panel-2 .text-content");
		addClassTrigger(".section-container-6 .panel-2 .mobile-placeholder");
		addClassTrigger(".section-container-6 .panel-2 .img-container");
		addClassActive(".section-container-6b .awards-header");
		addClassActive(".section-container-6b .awards-box");
		addClassActive(".section-container-6b .cta-more");
		addClassActive(".section-container-7 .labels");
		addClassActive(".section-container-7 .box-container");
		addClassActive(".section-container-7b .text-center");
		addClassActive(".section-container-7b .cta-more");
		//addClassActive(".section-container-8 .panel-1 .title-1");
		//addClassActive(".section-container-8 .panel-1 .title-2");
		//addClassActive(".section-container-8 .panel-1 .cta-more");
		addClassActive(".section-container-8 .panel-2 .title-1");
		addClassActive(".section-container-8 .panel-2 .cta-more");
		addClassActive(".progress-nav-bar");
		
		//alter carousel
		IEcarousel();
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
		browser = 'others';
    }

    return false;
}

function IEcarousel(){
	var data = '';
	var cnt = 0;
	$(".carousel .cards .img-container").each(function(){
		var dd = $(this).attr('data-description');
		var dst = $(this).attr('data-sub-title');
		var ds = $(this).attr('data-case');
		var di = $(this).html();
		
		if(cnt == 0){
			data = '<div class="item active" data-description="'+dd+'" data-sub-title="'+dst+'" data-case="'+ds+'">'+
				  di+
				'</div>'+data;
		}else{
			data = '<div class="item" data-description="'+dd+'" data-sub-title="'+dst+'" data-case="'+ds+'">'+
				  di+
			'</div>'+data;
		}
		
		cnt++;
	});
	
	var carousel = '<div id="myCarousel" class="carousel slide" data-ride="">'+
	
		'<div class="carousel-inner">'+
			data+
		'</div>'+

		'<a class="left carousel-control" href="#myCarousel" data-slide="prev">'+
			'<span class="glyphicon glyphicon-chevron-left"></span>'+
			'<span class="sr-only">Previous</span>'+
		'</a>'+

		'<a class="right carousel-control" href="#myCarousel" data-slide="next">'+
			'<span class="glyphicon glyphicon-chevron-right"></span>'+
			'<span class="sr-only">Next</span>'+
		'</a>'+
	'</div>';
	
	$(".section-container-8 .text-content").addClass("ie");
	$(".carousel").prepend(carousel);
	$(".carousel .zoom").addClass("disable");
	
	$('.slide-right').on('click',function(){
		$('.right.carousel-control').trigger("click");
	});
	
	$('.slide-left').on('click',function(){
		$('.left.carousel-control').trigger("click");
	});
	
	return true;
}

$(window).on("load", function(){
	
        var stitle = $('.linkedin.social-icon-trigger').attr('data-title');
        var summary = $('.linkedin.social-icon-trigger').attr('data-summary');
        $('.icon-bar-section .social-icon').addClass('isActive');
        var dataURL = window.location.href;
        
        //set email data
        $('.share-icons-container-marquee .icon-bar-marquee a.mail').attr('href', 'mailto:?subject='+encodeURI(stitle)+'&body='+encodeURI(summary)+' '+ dataURL);
        $('.mobile-social-media .mail').attr('href', 'mailto:?subject='+encodeURI(stitle)+'&body='+encodeURI(summary)+' '+ dataURL);
        $('.btn-envelope a.mail.social-icon-trigger').attr('href', 'mailto:?subject='+encodeURI(stitle)+'&body='+encodeURI(summary)+' '+ dataURL);
        
        //set socialmedia data
        $('.social-icon-trigger.twitter').attr("data-url",dataURL);
        $('.social-icon-trigger.linkedin').attr("data-url",dataURL);
        $('.social-icon-trigger.facebook').attr("data-url",dataURL);
        $('.social-icon-trigger').on("click", function(e) {
            var hashtag = $(this).attr('data-hashtags');
            var socialLink = $(this).attr('data-link');
            var socialUrl = $(this).attr('data-url');
            var socialTitle = $(this).attr('data-title');
            var socialSummary = $(this).attr('data-summary');

            //Social Sharing for Event9, Event13
            try {
                omni.LinkAnalysis.isSocialShareLink(this, e, e.target.dataset.network) && _satellite.track("DCR_SocialShare_Executed");
                console.log(e);
            } catch (t) {}

            switch (socialLink) {
                case 'instagram':
                    var socialInstagram = 'https://www.instagram.com/accenture/?hl=en';
                    window.open(socialInstagram, 'newwindow', 'width=400,height=350');
                    break;
                case 'twitter':
                    e.preventDefault();
                    var socialTwitter = 'https://twitter.com/intent/tweet?hashtags='+encodeURI(hashtag)+'&url=' + encodeURI(socialUrl) + '&text=' + encodeURI(socialTitle) + '%0A' + encodeURI(socialSummary) + '';
                    window.open(socialTwitter, 'newwindow', 'width=400,height=350');
                    //$('.ion-social-twitter.social-likes__widget.social-likes__widget_twitter').trigger("click");
                    break;
                case 'facebook':
                    e.preventDefault();
                    var socialFacebook = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURI(socialUrl) + '&linkcomponentname=&originalTitle=Opens%20Facebook%20share%20window.&rel=d7429409-d6da-46cd-91dd-8702781ae3c4&name=asset&linktype=share%20intent&analyticsContentType=share%20intent&analyticsLinkName=facebook&url=' + encodeURI(socialUrl) + '&network=facebook&bs.tooltip=';
                    window.open(socialFacebook, 'newwindow', 'width=400,height=350');
                    break;
                case 'linkedin':
                    e.preventDefault();
                    var socialLinkedIn = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURI(socialUrl) + '&title=' + encodeURI(socialTitle) + '&summary=' + encodeURI(socialSummary) + '&source=' + encodeURI(socialTitle) + '';
                    window.open(socialLinkedIn, 'newwindow', 'width=400,height=350');
                    break;
                case 'mail':
                    e.preventDefault();
                    window.location.assign('mailto:?subject='+encodeURI(socialTitle)+'&body='+encodeURI(socialSummary)+'%0A'+dataURL);
                    break;
                default:
                    return !0
            }
        });
        
        $('.btn-twitter').on("click", function(){
            $('.social-icon-trigger.twitter').trigger("click");
        });
        
        $('.btn-linkedin').on("click", function(){
            $('.social-icon-trigger.linkedin').trigger("click");
        });
        
        $('.btn-facebook').on("click", function(){
            $('.social-icon-trigger.facebook').trigger("click");
        });
        
        $('.btn-envelope').on("click", function(){
            $('div.mail.social-icon-trigger.main').trigger("click");
        });
});