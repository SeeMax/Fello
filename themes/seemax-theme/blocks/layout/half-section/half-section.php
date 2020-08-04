<?php

/**
 * Testimonial Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'half-and-half-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'half-and-half';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <?php $scrollLink = get_field('scroll_link');?>
  <?php if( have_rows('left_side') ): ?>
    <?php while( have_rows('left_side') ): the_row();?>
      <?php 
        $headline = get_sub_field('headline');
        $subHeadline = get_sub_field('sub_headline');
        $body = get_sub_field('body_copy');
        $image = get_sub_field('image');
        $backColor = get_sub_field('background_color');
      ?>
      <div id="<?php echo $scrollLink;?>" style="background:<?php echo $backColor;?>" class="half-and-half-side left-half-side c-width-50">      
        <?php if( get_sub_field('text_or_image') == 'text' ):?>
          <div class="content text-content">
            <?php if($headline):?>
              <h3><?php echo $headline; ?></h3>
            <?php endif;?>
            <?php if($subHeadline):?>
              <h4><?php echo $subHeadline; ?></h4>
            <?php endif;?>
            <?php if($body):?>
              <p><?php echo $body; ?></p>
            <?php endif;?>
            <?php if( have_rows('cta') ): ?>
              <?php while( have_rows('cta') ): the_row();?> 
                <?php $ctaText = get_sub_field('cta_text');
                $ctaDest = get_sub_field('cta_destination');
              ?>
                <?php if($ctaText):?>
                  <div class="seemax-button">
                    <span><?php echo $ctaText; ?></span>
                    <a href="<?php echo $ctaDest; ?>" class="c-block-fill"></a>
                  </div>            
                <?php endif;?>
              <?php endwhile; ?>
            <?php endif; ?>                   
          </div>
        <?php endif;?>
        <?php if( get_sub_field('text_or_image') == 'image' ):?>
          <div class="content image-content" role="img" style="background-image:url('<?php echo esc_url( $image['url'] ); ?>" aria-label="<?php echo esc_attr( $image['alt'] ); ?>')">
          </div>
        <?php endif;?>
      </div>
    <?php endwhile; ?>
  <?php endif; ?>

  <?php if( have_rows('right_side') ): ?>
    <?php while( have_rows('right_side') ): the_row();?>
      <?php 
        $headline = get_sub_field('headline');
        $subHeadline = get_sub_field('sub_headline');
        $body = get_sub_field('body_copy');
        $image = get_sub_field('image');
        $backColor = get_sub_field('background_color');
      ?>
      <div 
        style="background:<?php echo $backColor;?>"
        class="half-and-half-side right-half-side c-width-50 
        <?php if( get_sub_field('text_or_image') == 'text' ):?>half-and-half-text<?php endif;?>
        <?php if( get_sub_field('text_or_image') == 'image' ):?>half-and-half-image<?php endif;?>" 
      >      
        <?php if( get_sub_field('text_or_image') == 'text' ):?>
          <div class="content text-content">
            <?php if($headline):?>
              <h3><?php echo $headline; ?></h3>
            <?php endif;?>
            <?php if($subHeadline):?>
              <h4><?php echo $subHeadline; ?></h4>
            <?php endif;?>
            <?php if($body):?>
              <p><?php echo $body; ?></p>
            <?php endif;?>
            <?php if( have_rows('cta') ): ?>
              <?php while( have_rows('cta') ): the_row();?> 
                <?php $ctaText = get_sub_field('cta_text');
                $ctaDest = get_sub_field('cta_destination');
              ?>
                <?php if($ctaText):?>
                  <div class="seemax-button">
                    <span><?php echo $ctaText; ?></span>
                    <a href="<?php echo $ctaDest; ?>" class="c-block-fill"></a>
                  </div>            
                <?php endif;?>
              <?php endwhile; ?>
            <?php endif; ?>                   
          </div>
        <?php endif;?>
        <?php if( get_sub_field('text_or_image') == 'image' ):?>
          <div class="content image-content" role="img" style="background-image:url('<?php echo esc_url( $image['url'] ); ?>" aria-label="<?php echo esc_attr( $image['alt'] ); ?>')">
          </div>
        <?php endif;?>
      </div>
    <?php endwhile; ?>
  <?php endif; ?>
  
</section>
