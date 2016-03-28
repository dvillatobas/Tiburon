$(document).ready(function(){
    $('.logged').toggle();
    $('#login').click(function(event){
        event.preventDefault();
        $('.logged').toggle();
        $('.unlogged').toggle();
        
    });
    $('#logout').click(function(event){
        event.preventDefault();
        $('.logged').toggle();
        $('.unlogged').toggle();
    });
    
    var url = $(document).get()[0].URL;
    
    var pag = url.split('/')[4];
    if(pag === 'mensajeria.html' || pag === 'mis_productos.html' || pag === 'adminCarsParts.html'){
        $('.logged').toggle();
        $('.unlogged').toggle();
    }
});