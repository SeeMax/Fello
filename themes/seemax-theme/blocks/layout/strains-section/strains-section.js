(function($){
  /**
   * initializeBlock
   *
   * Adds custom JavaScript to the block HTML.
   *
   * @date    15/4/19
   * @since   1.0.0
   *
   * @param   object $block The block jQuery element.
   * @param   object attributes The block attributes (only available when editing).
   * @return  void
   */
  var initializeBlock = function( $block ) {
      // $block.find('h1').css( "color", "blue" );
      // $( ".strain-section").addClass( "seemax-hero" );

      let sizeBack = () => {
        let scaleX = $('.strain-scale').offset().left;
        let detailsBack = $('.strain-details-back');
        let scaleBack = $('.strain-scale-back');
        let scaleX2 = $(window).width() - scaleX;
        $(detailsBack).css('width', scaleX);
        $(scaleBack).css('width', scaleX2);
        // console.log(scaleX2);
      }
      
      
      $(window).on('load', function(){
        sizeBack();
      });
      
      $(window).on('resize', function(){
        sizeBack();
      });
  };

  // Initialize each block on page load (front end).
  $(document).ready(function(){
    // Make sure it's not the wp-backend
    if (!$('body').hasClass("wp-admin")) {

      $('.strain-section').each(function(){
          initializeBlock( $(this) );
      });

      // heroImageSliderContainer

      $('.heroImageSliderContainer').slick({
        autoplay:true,
        autoplaySpeed:5000,
        infinite: true,
        speed: 800,
        pauseOnFocus:false,
        centerMode: true,
        fade: true,
        cssEase: 'linear',
        arrows:false,
        // prevArrow: $('.slick-prev-arrow'),
        // nextArrow: $('.slick-next-arrow'),
      });

    }
  });

  // Initialize dynamic block preview (editor).
  if( window.acf ) {
      window.acf.addAction( 'render_block_preview/type=strain-section', initializeBlock );
  }

})(jQuery);
