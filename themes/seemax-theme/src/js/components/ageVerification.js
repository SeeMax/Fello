$(document).ready(function($){

	if (sessionStorage.getItem('advertOnce') !== 'true') {
    gsap.set($('body'),{height:'100vh', overflow:'hidden'});
		gsap.set($('.age-gate'),{autoAlpha:1});
	} else {
		gsap.set($('.age-gate'),{autoAlpha:0});
	}
		
	$('.ageYes').on('click',function(){
    gsap.to($('.age-gate'),{duration:0.3, opacity:0, onComplete: function(){gsap.set($('.age-gate'),{autoAlpha:0});}});
    gsap.set($('body'),{height:'auto', overflow:'visible'});

	sessionStorage.setItem('advertOnce','true');
	});
				
});
