$(document).ready(function() {

    $('.icone-voltar').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.icone-voltar').fadeIn();
        } else {
            $('.icone-voltar').fadeOut();
        }
    });

    $('.icone-voltar').click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 3000);
    });

});