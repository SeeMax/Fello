<footer class="footer" role="contentinfo">
	<div class="pre-footer"></div>
	<div class="content">
		<div class="footer-column">
			<ul class="footer-tile logo-tile">
				<li>
					<a href="/"><img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo-stacked.svg" alt="<?php echo esc_attr( $image['alt'] ); ?>>"></a>
				</li>
			</ul>
		</div>
		<div class="footer-column">
			<div class="footer-column-half c-width-32">
				
				<ul class="footer-tile footer-nav-tile c-width-50">
					<li class="footer-tile-header">
						company
					</li>
					<?php $mainFootMenu = wp_nav_menu( array('theme_location' => 'footer-menu'));?>
				</ul>
				
				<ul class="footer-tile legal-tile c-width-50">
					<li class="footer-tile-header">
						legal
					</li>
					<li>
					<?php $legalMenu = wp_nav_menu( array('theme_location' => 'legal-menu'));?>
					</li>
				</ul>
				
			</div>

			
			<ul class="footer-tile contact-tile c-width-50">
				<li class="footer-tile-header">
					contact
				</li>
				
				<?php if(get_field('phone_number', 'option')):?>
					<li>
						<a href="tel:<?php the_field('phone_number', 'option');?>">
							<?php the_field('phone_number', 'option');?>
						</a>
					</li>
				<?php endif;?>
				
				<li>
					<a href="mailto:<?php the_field('contact_email', 'option');?>">
						<?php the_field('contact_email', 'option');?>
					</a>
				</li>
			</ul>
			
		</div>	
		<div class="footer-column">
			
			<ul class="footer-tile social-tile c-width-25">
				<li class="social-li">
					<a class="" href="<?php the_field('instagram', 'option');?>" target="_blank">
						<i class="fab fa-instagram"></i>
					</a>
				</li>
			</ul>

			<div class="copyright">
				&copy; <?php echo get_bloginfo();?> <?php echo date("Y"); ?> All Rights Reserved
			</div>

		</div>
		
		<!-- <ul class="footer-tile subscribe-tile c-width-25">
			<li class="footer-tile-header">
				Subscribe
			</li>
			<li>
				News Letter -->
				<!-- Begin Mailchimp Signup Form -->
				<!-- <form action="URL FROM MAILCHIMP" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="mailchimp-signup-form validate" target="_blank" novalidate>
					<div class="mc-field-group">
						<input type="email" placeholder="Email Address" name="EMAIL" class="required email" id="mce-EMAIL">
					</div>
					<div id="mce-responses" class="clear">
						<div class="response" id="mce-error-response" style="display:none"></div>
						<div class="response" id="mce-success-response" style="display:none"></div>
					</div>     -->
				<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				<!-- <div style="position: absolute; left: -5000px;" aria-hidden="true">
						<input type="text" name="ID FROM MAILCHIMP" tabindex="-1" value="">
					</div>
					<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="seemax-button">
				</form>
			</li> -->
			<!--End mc_embed_signup-->
		<!-- </ul> -->
		
	</div>
</footer>
<?php wp_footer(); ?>
</div><!-- WRAPPER -->
</body>

</html>
