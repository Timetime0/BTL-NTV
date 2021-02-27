// $(window).scroll(function() {

//     if ($(this).scrollTop() > 50){  
//         $('image__top').addClass("view");
//     }
//     // else{
//     //     $('#content').removeClass("content_fixed");
//     // }
// });

// function getEle(ele){
//     return document.getElementById(ele);
// }


// window.onscroll = function(){
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         document.getElementById("image-bottom").className="view-bottom";
        
//       } else {
//         document.getElementById("image-bottom").className = "";
//       }
// }

// function isElementInViewport(elem) {
//     var $elem = $(elem);

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('.image-bottom .view-bottom');

//     // If the animation has already been started
//     if ($elem.hasClass('.view-bottom')) return;

//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('.view-bottom');
//     }
// }

// // Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// });

// 