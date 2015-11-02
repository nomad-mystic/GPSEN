/*
	Programmer = Keith Murphy
	File = scripts.js
	date Created = 7-9-2015
	Last Mod =  8-5-2015
*/

jQuery(document).ready(function($) {
	///////////////////////////////////Widget Areas 
	//// This is for the wiget sidebar movement
	var $sidebar   = $("#sidebar"), 
        $window    = $(window),
        offset     = $sidebar.offset(),
        topPadding = 15,
        endScrollMargin = $sidebar.offset().top  + 800;
    
    if($window.width() >= 1100) {
    	$window.scroll(function() {
	        if ($window.scrollTop() > offset.top) {
	            $sidebar.stop().animate({
	                marginTop: $window.scrollTop() - offset.top + topPadding
	            });

	        } else {
	            $sidebar.stop().animate({
	                marginTop: 0
	            });
	        } // end if 
	        /// my if stament that makes the #sidebar animate to stopped offset().top
	        if($window.scrollTop() >= endScrollMargin) {
	        	$sidebar.stop().animate({
	                marginBottom: 0
	            });
	        } // end if 
	        // This stops the animation from moving when the sidebar links are 'clicked' 
	        if($sidebar.hasClass('contactSidebarClicked')) {
    			$sidebar.stop().animate();
    		} // end if 
    		 // This stops the animation from moving when the sidebar links are 'clicked' 
	        if($sidebar.hasClass('getInvolvedClicked')) {
    			$sidebar.stop().animate();
    		} // end if 
    		 // This stops the animation from moving when the sidebar links are 'clicked' 
	        if($sidebar.hasClass('newsletterClicked')) {
    			$sidebar.stop().animate();
    		} // end if 
    	}); // end $window.scroll function
	} else {
		$sidebar.animate({
			marginTop: 0
		});
	}
	// This check to see if any one resized there window if they are under 980px then stop animation 
	var resizeTimer;
	$(window).on('resize', function(e) {
		//console.log($window.width());
		
		clearTimeout(resizeTimer);
  		resizeTimer = setTimeout(function() {
		
			if($window.width() < 1099) {
				$sidebar.stop().animate({
		                marginTop: 0
		            });
		        } 
			// THis will run larger screen animation same stament as above 
			if($window.width() >= 1100) {
		    	$window.scroll(function() {
			        if ($window.scrollTop() > offset.top) {
			            $sidebar.stop().animate({
			                marginTop: $window.scrollTop() - offset.top + topPadding
			            });

			        } else {
			            $sidebar.stop().animate({
			                marginTop: 0
			            });
			        }
				    /// my if stament that makes the #sidebar animate to stopped offset().top
				    if($window.scrollTop() >= endScrollMargin) {
				        	$sidebar.stop().animate({
				                marginBottom: 0
				            });
				        } // End if
				    // This stops the animation from moving when the sidebar links are 'clicked' 
			        if($sidebar.hasClass('contactSidebarClicked')) {
		    			$sidebar.stop().animate();
		    		} // end if 
		    		 // This stops the animation from moving when the sidebar links are 'clicked' 
			        if($sidebar.hasClass('getInvolvedClicked')) {
		    			$sidebar.stop().animate();
		    		} // end if 
		    		 // This stops the animation from moving when the sidebar links are 'clicked' 
			        if($sidebar.hasClass('newsletterClicked')) {
		    			$sidebar.stop().animate();
		    		} // end if 
			    }); // end $window.scroll function 
			} else {
				$sidebar.stop().animate({
					marginTop: 0
				});
			} // end else 
		}, 10); // end resizeTimer
	}); // End resize
    // This is for the wideget area for the forms and other get involved links 
	// This shows and hide the links area 
	$('.getInvolvedContent').css('display', 'none');
	$('#getInvolvedWidget h3').on('click', function() {
		
		if ($('.getInvolvedWidgetChild:first').is(':hidden')) {
			$('.getInvolvedContent').slideDown('slow');
    		$(this).find('span.floatRight').removeClass('fa-arrow-right').addClass('fa-arrow-down');
    		
    		$sidebar.addClass('getInvolvedClicked');
  		} else {
    		$('.getInvolvedContent').slideUp('slow');
    		$(this).find('span.floatRight').removeClass('fa-arrow-down').addClass('fa-arrow-right');
    		$sidebar.removeClass('getInvolvedClicked');
  		}
	});
	/// This is going to show the sign up for newsletter green button 
	$('.newsletterContent').css('display', 'none');
	$('#newletterWidget h3').on('click', function() {

		if ($('.newsletterContent').is(':hidden')) {
			$(this).find('span.floatRight').removeClass('fa-arrow-right').addClass('fa-arrow-down');
			$('.newsletterContent').slideDown('slow');
    		$sidebar.addClass('newsletterClicked');
  		
  		} else {
  			$(this).find('span.floatRight').removeClass('fa-arrow-down').addClass('fa-arrow-right');
    		$('.newsletterContent').slideUp('slow');
    		$sidebar.removeClass('newsletterClicked');
  		}
	});
	// This is for the footer navagation area and shows and hides the links 
	$('.menu-main-container').css('display', 'none');
	$('#footerNavigation').on('click', function() {
		
		if ($('.menu-main-container ul:first').is(':hidden')) {
    		$('.menu-main-container').slideDown('slow');
  		} else {
    		$('.menu-main-container').slideUp('slow');
  		}
	});
	/// This is for the Sidebar Contact Area 
	$('#contactSidebar .whiteCard').css('display', 'none');
	$('#contactSidebar h3').on('click', function() {
		
		if ($('#contactSidebar .whiteCard img:first').is(':hidden')) {
			$(this).find('span.floatRight').removeClass('fa-arrow-right').addClass('fa-arrow-down');
    		$('#contactSidebar .whiteCard').slideDown('slow');
    		$sidebar.addClass('contactSidebarClicked');
  		} else {
  			$(this).find('span.floatRight').removeClass('fa-arrow-down').addClass('fa-arrow-right');
    		$('#contactSidebar .whiteCard').slideUp('slow');
    		$sidebar.removeClass('contactSidebarClicked');
  		}
	});
	// This is for the RCE UNU picture should only show on homePage 
	var siteHerf = window.location.href;
	console.log(siteHerf);
	if(siteHerf === 'http://gpsen.org/') {
		$('#RCELogoSidebar').addClass('displayBlock');
	} else {
		$('#RCELogoSidebar').addClass('displayNone');
	}
	
	//////////////////////////////////////////FAQ Page 
	// THis is the main FAQ animation 
	// $( '#FAQAccordion' ).accordion({
 //      collapsible: true,
 //      heightStyle: "content",
 //      active: false
 //    });
    // THis is goping to animate the fa-plus and fa-minus
    var $FAQAccordionH3 = $('#FAQAccordion h3');
  	$('.accordionGreyHeaders').on('click', function() {

  		if($FAQAccordionH3.hasClass('clicked')) {
  			$(this).removeClass('clicked');
  			$(this).find('span.floatRight').removeClass('fa-minus').addClass('fa-plus');
  		} else {
  			$(this).find('span.floatRight').removeClass('fa-plus').addClass('fa-minus');
  			$(this).addClass('clicked');
  		}
	}); // end 
	// This is for th FAQ page links section which shows and hides the link in each SectionUL
	$('.FAQSectionOneUL, .FAQSectionTwoUL, .FAQSectionThreeUL, .FAQSectionFiveUL').css(
		'display', 'none' 
	);
	$('.FAQSectionOneLinks').on('click', function() {

		if ($('.FAQSectionOneUL').is(':hidden')) {
			$('.FAQSectionOneUL').slideDown('slow');
		} else {
			$('.FAQSectionOneUL').slideUp('slow');
		}
	});
	$('.FAQSectionTwoLinks').on('click', function() {

		if ($('.FAQSectionTwoUL').is(':hidden')) {
			$('.FAQSectionTwoUL').slideDown('slow');
		} else {
			$('.FAQSectionTwoUL').slideUp('slow');
		}
	});
	$('.FAQSectionThreeLinks').on('click', function() {

		if ($('.FAQSectionThreeUL').is(':hidden')) {
			$('.FAQSectionThreeUL').slideDown('slow');
		} else {
			$('.FAQSectionThreeUL').slideUp('slow');
		}
	});
	$('.FAQSectionFiveLinks').on('click', function() {

		if ($('.FAQSectionFiveUL').is(':hidden')) {
			$('.FAQSectionFiveUL').slideDown('slow');
		} else {
			$('.FAQSectionFiveUL').slideUp('slow');
		}
	});
	//////////////////This is for the newsPage 
	$('#newsAccordion').accordion({
      collapsible: true,
      heightStyle: "content"
    });
    //////////////////////////////////////Blog Post
    //////This is going to add a click event to the greenHeaders of the blog post pages 

    //////////////////////////////////////#governancePage
    $('#governanceAccordion').accordion({
    	collapsible: true,
      	heightStyle: "content",
      	active: false

    }); // end governanceAccordion
    $('#governanceAccordion h3').on('click', function(e) {
    	this.animate({
    		//boxShadow: '0px -1px 3px 0px rgba(0,0,0,.50)'
    	});
	}); // end click
	// This is going to be the class that add accordion to live memberPartnerRegistrationPage 
	$('.accordion').accordion({
    	collapsible: true,
      	heightStyle: "content",
      	active: false
	});
}); //end ready

