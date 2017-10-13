
$(document).ready(function(){

    console.log('Mailchimp script');

    $('footer .container .row').append('<div class="col-sm-4 custom_footer custom_footer5"><h4>Suscribite al news letter</h4><ul><li>Suscribite a nuestro newsletter para enterarte de las novedades</li></ul><div id="newsletter-form"></div></div>');

    $('#newsletter-form').load('https://alanchavez09.github.io/meguiars/js/mailchimp.html');
});

