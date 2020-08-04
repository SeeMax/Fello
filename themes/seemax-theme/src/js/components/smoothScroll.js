// Import The Menu Close Function to use on mobile
import { menuClose } from './mobileMenu.js';

let smoothScrolling = (theLink) => {

  gsap.registerPlugin(ScrollToPlugin);
  event.preventDefault();

  let target = $(theLink).attr("href");
  let headerHeight = $('.header').outerHeight(); 
  let subNavHeight = $('.strain-subnav').outerHeight();
  let spacerHeight = headerHeight + subNavHeight;
  
  if ($('body').hasClass('page-strains')) {
    console.log("well...console");
    gsap.to(window, {duration:0.5, ease: "circ.out", scrollTo:{y:target, offsetY:spacerHeight}});
  } else {
    gsap.to(window, {duration:0.5, ease: "circ.out", scrollTo:{y:target, offsetY:headerHeight}});
  }
  return false;
}

jQuery( document ).ready(function($) {
  $('a[href^="#"]').bind('click', function() {
  
    smoothScrolling($(this));
    // IF IT"S MOBILE / IPAD OR SMALLER
    if (screen.width <= 1025){
      menuClose();
      smoothScrolling($(this));
    }
  });
});