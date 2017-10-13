
$(document).ready(function(){

    console.log('Custom script loaded');

    $('footer .container .row').append('<div class="col-sm-3 custom_footer custom_footer5"><h4>Suscribite al news letter</h4><ul><li><div id="newsletter-form"></div></li></ul></div>');

    $('#newsletter-form').load('https://alanchavez09.github.io/meguiars/js/mailchimp.html');
});

