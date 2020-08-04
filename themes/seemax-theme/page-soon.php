<?php /* Template Name: Soon */ get_header(temp); ?>
<main class="home-page">
	<?php while (have_posts()) : the_post(); ?>
		<section class="main-section" style="background:black; height:100vh;">
			<div class="content">
						<div class="header-logo">
			
						<img src="<?php echo get_template_directory_uri(); ?>/dist/images/logo.svg" alt="<?php echo esc_attr( $image['alt'] ); ?>">

					</div>
				<h1 style="color:white;margin-top:40px;">Coming Soon</h1>
			</div>
		</section>
	<?php endwhile; ?>
</main>
<?php get_footer(temp); ?>
