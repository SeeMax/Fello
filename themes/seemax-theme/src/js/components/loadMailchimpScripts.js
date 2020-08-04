// Make a variable for the Mailchimp Scripts
let mailchimpScripts = () => {
  let thisOneScript = '<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array();window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";fnames[1]="FNAME";ftypes[1]="text";fnames[2]="LNAME";ftypes[2]="text";}(jQuery));var $mcj = jQuery.noConflict(true);</script>'
  $('body').append(thisOneScript);
}

// If the mailchimp for is PerformanceObserverEntryList, load the scripts
$( document ).ready(function() {
  if($('#mc_embed_signup').length) {
    mailchimpScripts();
  }
});