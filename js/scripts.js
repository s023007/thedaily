(function($){
  "use strict";
  // on ready function
	jQuery(document).ready(function($) {
   		var $this = $(window);
		

/* ================================
===   Trending Post Slider   ====
=================================== */
        $("#trend-post").owlCarousel({
            pagination : false
        });



/* ================================
===         Main Slider        ====
=================================== */

        $("#slider").owlCarousel({
            singleItem:true
        });



/* ========================================
===   Top Bar SliderUp and SlideDown   ====
=========================================== */

        $('.showSingle').on("click", function () {
        var itemid = '#div' + $(this).attr('id'); //id of the element to show/hide.

            //Show the element if nothing is shown.
            if ($('.abcd').length === 0) {
                $(itemid).slideDown();
                $(itemid).addClass('abcd');

                //Hide the element if it is shown.
            } else if (itemid == "#" + $('.abcd').attr('id')) {
                $('.abcd').slideUp();
                $(itemid).removeClass('abcd');

                //Otherwise, switch out the current element for the next one sequentially.
            } else {
                $('.abcd').slideUp(function () {
                    $(this).removeClass('abcd');
                    if ($(".targetDiv:animated").length === 0) {
                        $(itemid).slideDown();
                        $(itemid).addClass('abcd');
                    }
                });
            }
        });




/* ========================================
===   Top Bar icon active   ====
=========================================== */

        $(".search").on("click", function(){
            $(".search i").addClass('active');
            $(".login-user i").removeClass('active');
            $(".login-mail i").removeClass('active');
        });

        $(".login-user").on("click", function(){
            $(".login-user i").addClass('active');
            $(".search i").removeClass('active');
            $(".login-mail i").removeClass('active');
        });
        $(".login-mail").on("click", function(){
            $(".login-mail i").addClass('active');
            $(".search i").removeClass('active');
            $(".login-user i").removeClass('active');
        });




/* ========================================
===   Left Side Drop Down Menu Toggle   ====
=========================================== */

        $(".home").on("click", function(){$(".home .drop-menu").slideToggle();});
        $(".short-code").on("click", function(){$(".short-code .drop-menu").slideToggle();});
        $(".sm-post").on("click", function(){$(".sm-post .drop-menu").slideToggle();});


/* ========================================
===   Left Side Heading click icon Rotate   ====
=========================================== */

        $('.accordion-toggle').on('click', function(event){
            event.preventDefault();
            // create accordion variables
            var accordion = $(this);
            var accordionContent = accordion.next('.accordion-content');
            var accordionToggleIcon = $(this).children('.toggle-icon');

            // toggle accordion link open class
            accordion.toggleClass("open");
            // toggle accordion content
            accordionContent.slideToggle(500);

            // change plus/minus icon
            if (accordion.hasClass("open")) {
                accordionToggleIcon.html("<i class='fa fa-bars rotate'></i>");
            } else {
                accordionToggleIcon.html("<i class='fa fa-bars'></i>");
            }
        });




/* ========================================
===       load more post scroll        ====
=========================================== */

       $('.scroll').jscroll({
            autoTrigger: false,
            autoTriggerUntil: 3,
        });




/* ================================
===         Single Post Slider        ====
=================================== */

    $("#single-post-slider").owlCarousel({
        singleItem:true,
        pagination : false,
        navigation : true,
        rewindNav : true,
        slideSpeed : 800,
        paginationSpeed : 1600,
        rewindSpeed : 400,
        navigationText: [
          "<i class='fa fa-arrow-left'></i>",
          "<i class='fa fa-arrow-right'></i>"
          ]
    });

/* ================================
===         Tooltip      ====
=================================== */

$('[data-toggle="tooltip"]').tooltip();


	});
})(); 