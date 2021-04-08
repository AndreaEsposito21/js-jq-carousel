// Replichiamo lo Slider fatto insieme questa mattina, al click sulla sulle frecce rendiamo visibile l'immagine successiva o precedente (in base alla freccia sulla quale ho cliccato).
// Lo slider non deve mai rompersi, ma se l'immagine visibile è l'ultima e clicco sulla freccia a destra lo slider mostra la prima.
// Se l'immagine visibile è la prima e clicco sulla freccia a sinistra, lo slider mostra l'ultima.

var frecciaDestra = $('.arrow.right');

frecciaDestra.click(function() {
    var elementoAttivo = $('.slider .active');
    elementoAttivo.removeClass('active');

    if ( elementoAttivo.hasClass('last') ) {
        $('.slider .first').addClass('active');
    } else {
        var imgSuccessiva = elementoAttivo.next();
        imgSuccessiva.addClass('active');
    }
});

var frecciaSinistra = $('.arrow.left');

frecciaSinistra.click(function() {
    var elementoAttivo = $('.slider .active');
    elementoAttivo.removeClass('active');

    if ( elementoAttivo.hasClass('first') ) {
        $('.slider .first').addClass('active');
    } else {
        var imgPrecedente = elementoAttivo.prev();
        imgPrecedente.addClass('active');
    }
});