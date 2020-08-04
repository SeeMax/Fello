<?php

  /**
  * Hero Block Template.
  * @param   array $block The block settings and attributes.
  * @param   string $content The block inner HTML (empty).
  * @param   bool $is_preview True during AJAX preview.
  * @param   (int|string) $post_id The post ID this block is saved to.
  */

  // Create id attribute allowing for custom "anchor" value.
  $id = 'strain-section-' . $block['id'];
  if( !empty($block['anchor']) ) {$id = $block['anchor'];}
  // Create class attribute allowing for custom "className" and "align" values.
  $className = 'strain-section';
  if( !empty($block['className']) ) {$className .= ' ' . $block['className'];}
  if( !empty($block['align']) ) {$className .= ' align' . $block['align'];}
  // Load values and assing defaults.
  // $image = get_field('background_image');
  // $headline = get_field('headline') ?: strtoupper(get_the_title());
  // $subHeadline = get_field('sub_headline');
  // $body = get_field('body');
?>

<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <?php $featured_posts = get_field('strains_group'); if( $featured_posts ):?>  
    <?php foreach( $featured_posts as $featured_post ):?>
      <?php $title = get_the_title( $featured_post->ID );?>
      <?php $titleStrip = str_replace(' ', '', $title);?>
      <?php $titleClean = preg_replace('/&#[0-9]+;/', '', $titleStrip);?>
      <div class="single-strain-section">
        <?php if( have_rows('details_area',$featured_post->ID) ): ?>
          <?php while( have_rows('details_area',$featured_post->ID) ): the_row();?>
            <?php $detailsBackground = get_sub_field('background',$featured_post->ID);?>
            <div class="strain-back strain-details-back" style="background:<?php echo $detailsBackground;?>"></div>
          <?php endwhile; ?>
        <?php endif; ?>

          <?php if( have_rows('scale_area',$featured_post->ID) ): ?>
            <?php while( have_rows('scale_area',$featured_post->ID) ): the_row();?>
              <?php $scaleBackground = get_sub_field('background',$featured_post->ID);?>
              <div class="strain-back strain-scale-back" style="background:<?php echo $scaleBackground;?>"></div>
              <?php endwhile; ?>
          <?php endif; ?>

        <div id ="<?php echo $titleClean;?>" class="content">
          <?php if( have_rows('details_area',$featured_post->ID) ): ?>
            <?php while( have_rows('details_area',$featured_post->ID) ): the_row();?>
              <?php       
                $background = get_sub_field('background',$featured_post->ID);
                $desc = get_sub_field('description',$featured_post->ID);
                $notes = get_sub_field('notes',$featured_post->ID);
                $image = get_sub_field('image',$featured_post->ID);
              ?>
              <div class="strain-details c-width-87">
                <h2><?php echo $title;?></h2>
                <div class="strain-notes">
                  <h4>
                    <span class="bold-h4"><?php echo $desc;?></span>
                    <br><br>
                    <?php echo $notes;?>
                  </h4>
                </div>
                <img src="<?php echo $image['url'];?>" alt="<?php echo $image['alt'];?>">
              </div>
            <?php endwhile; ?>
          <?php endif; ?>
          <?php if( have_rows('scale_area',$featured_post->ID) ): ?>
            <?php while( have_rows('scale_area',$featured_post->ID) ): the_row();?>
              <?php 
                $background = get_sub_field('background',$featured_post->ID);
                $scale = get_sub_field('scale',$featured_post->ID);
              ?>
              <div class="strain-scale c-width-13">
                <div class="scale-chart">
                  <h4 class="scale-label">sativa</h4>
                  <div class="scale-marker" style="top:calc(((10 - <?php echo $scale;?>)*11.111111%) - 8px);"></div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab">
                    <div class="scale-vert"></div>
                    <div class="scale-horz"></div>
                  </div>
                  <div class="scale-tab scale-tab-bottom">
                    <div class="scale-horz"></div>
                  </div>
                  <h4 class="scale-label scale-label-bottom">indica</h4>
                </div>
              </div>
            <?php endwhile; ?>
          <?php endif; ?>
        
        </div>
      </div>
    <?php endforeach; ?>
  <?php endif; ?>
</section>


      
	    
        

				
          