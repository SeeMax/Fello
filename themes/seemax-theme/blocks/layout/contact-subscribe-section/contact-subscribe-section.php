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
$id = 'contact-subscribe-' . $block['id'];
if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'contact-subscribe';
if( !empty($block['className']) ) {
    $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
    $className .= ' align' . $block['align'];
}?>
<section id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  <div id="hello" class="content">
    <?php 
      $con_headline = get_field('contact_headline') ?: 'say hellō';
      $con_body = get_field('contact_body_copy') ?: 'Got a question? An idea? <br>A joke worth sharing? <br>Drop us a line. We’d love to hear from you';
      $con_email = get_field('contact_email') ?:'hello@fellocannabis.com';
    ?>
    <div class="contact-side left-side c-width-50">        
      <?php if($con_headline):?>
        <h3><?php echo $con_headline; ?></h3>
      <?php endif;?>
      <p>
        <?php if($con_body):?><?php echo $con_body; ?><?php endif;?>
        <br>
        <?php if($con_email):?>
          <a href='mailto:<?php echo $con_email; ?>'><?php echo $con_email; ?></a><?php endif;?>
      </p>              
    </div>
  
    <?php 
      $sub_headline = get_field('subscribe_headline') ?: 'for sporadic <br>cannabis updates:';
      // $sub_mailchimp = get_field('subscribe_mailchimp') ?: '';
    ?>
    <div class="contact-side right-side c-width-50">      
      <?php if($sub_headline):?>
        <h3><?php echo $sub_headline; ?></h3>
      <?php endif;?>
      
        <div class="mailchimp-wrapper" id="mc_embed_signup">
          <form action="https://fellocannabis.us17.list-manage.com/subscribe/post?u=96b50f36a45d3096142964d23&amp;id=530f26ca70" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate mc-form-form" target="_blank" novalidate>            
              <div class="mc-field-group">
                <input type="email" value="" placeholder="your email address..." name="EMAIL" class="required email" id="mce-EMAIL">
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response" style="display:none"></div>
                <div class="response" id="mce-success-response" style="display:none"></div>
              </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_96b50f36a45d3096142964d23_530f26ca70" tabindex="-1" value=""></div>
              <input type="submit" value="sign me up" name="sign me up" id="mc-embedded-subscribe" class="seemax-button">
            
          </form>
          
        </div>
      
    </div>
  </div>
</section>

