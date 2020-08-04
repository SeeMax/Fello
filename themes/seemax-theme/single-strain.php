<?php get_header(); ?>
	<main class="single-strain-page">
    <?php while (have_posts()) : the_post(); ?>
      <?php if( have_rows('details_area') ): ?>
        <?php while( have_rows('details_area') ): the_row();?>
          <?php $detailsBackground = get_sub_field('background');?>
        <?php endwhile; ?>
      <?php endif; ?>

      <?php if( have_rows('scale_area') ): ?>
        <?php while( have_rows('scale_area') ): the_row();?>
          <?php $scaleBackground = get_sub_field('background');?>
          <?php endwhile; ?>
      <?php endif; ?>
	    <section class="single-strain-section">
      <div class="strain-back strain-details-back" style="background:<?php echo $detailsBackground;?>"></div>
      <div class="strain-back strain-scale-back" style="background:<?php echo $scaleBackground;?>"></div>

				<div class="content">
          <?php if( have_rows('details_area') ): ?>
            <?php while( have_rows('details_area') ): the_row();?>
              <?php 
                $background = get_sub_field('background');
                $desc = get_sub_field('description');
                $notes = get_sub_field('notes');
                $image = get_sub_field('image');
              ?>
              <div 
                class="strain-details c-width-87"                
                
              >
                <h2><?php the_title();?></h2>
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
          <?php if( have_rows('scale_area') ): ?>
            <?php while( have_rows('scale_area') ): the_row();?>
              <?php 
                $background = get_sub_field('background');
                $scale = get_sub_field('scale');
              ?>
              <div 
                class="strain-scale c-width-13"                
                
              > 
                
                <div class="scale-chart">
                  <h4 class="scale-label">sativa</h4>
                  <div class="scale-marker" style="top:calc( ((<?php echo $scale;?> - 1)*11.111111%) - 8px);"></div>
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
	    </section>
		<?php endwhile; ?>
	</main>
<?php get_footer(); ?>