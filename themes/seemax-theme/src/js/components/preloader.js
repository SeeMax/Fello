let preLoaderOn = () => {
	// console.log('not-preloader');
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
}

window.onload = (e) => {
	preLoaderOn();
}