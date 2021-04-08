// Replichiamo lo Slider fatto insieme questa mattina, al click sulla sulle frecce rendiamo visibile l'immagine successiva o precedente (in base alla freccia sulla quale ho cliccato).
// Lo slider non deve mai rompersi, ma se l'immagine visibile è l'ultima e clicco sulla freccia a destra lo slider mostra la prima.
// Se l'immagine visibile è la prima e clicco sulla freccia a sinistra, lo slider mostra l'ultima.
// Vi ho messo allegato a questo messaggio il file zip cone le immagini e lo screenshot.

var frecciaDestra = $('.arrow.right');

frecciaDestra.click(function() {
    var elementoAttivo = $('.slider.active');
    
})