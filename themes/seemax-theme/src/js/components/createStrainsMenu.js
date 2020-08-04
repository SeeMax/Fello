let buildStrainNav = () => {
  var hero = $('.page-strains .hero-section');
  var subNav = '<div class="strain-subnav"><div class="content"></div></div>'
  $(hero).after(subNav);
}


let buildStrainLinks = () => {

  $('.single-strain-section').each(function() {
    let thisID = $(this).find('.content').attr('id');
    let cleanID = thisID.replace(/[^a-zA-Z ]/g, "")
    let thisName = $(this).find('h2').html();
    let thisLink = "<a href='#"+cleanID+"'>"+thisName+"</a>";
    $('.strain-subnav .content').append(thisLink);
  })
}

let pinStrainLinks = () => {

  let headerHeight = $('.header').outerHeight(); 
  let subNavHeight = $('.strain-subnav').outerHeight();
  let spacerHeight = headerHeight + subNavHeight;
  let st = ScrollTrigger.create({
    trigger: ".strain-section",
    pin: ".strain-subnav",
    start: "-="+spacerHeight+"",
    pinSpacing: false,
  });
}

if ($('body').hasClass('page-strains')) {
  // alert("here");
  buildStrainNav();
  buildStrainLinks();
  pinStrainLinks();
}