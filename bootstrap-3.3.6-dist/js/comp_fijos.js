$(document).ready(function(){
    $('header').load('componentes/header.html');
 //   $('aside').load('componentes/aside.html');
    $('#contenido').load('componentes/contenido.html');
    $('footer').load('componentes/footer.html');
    
    
    
});

$('#toggle-busq').click(function(){
    $('#filtros').toggleClass();
    if($('#toggle-busq-span1').hasClass('glyphicon-chevron-down')){
        console.log('holaaa');
        $('#toggle-busq-span1').removeClass('glyphicon-chevron-down');
        $('#toggle-busq-span2').removeClass('glyphicon-chevron-down');
        $('#toggle-busq-span1').addClass('glyphicon-chevron-up');
        $('#toggle-busq-span2').addClass('glyphicon-chevron-up');
    }else{
        $('#toggle-busq-span1').removeClass('glyphicon-chevron-up');
        $('#toggle-busq-span2').removeClass('glyphicon-chevron-up');
        $('#toggle-busq-span1').addClass('glyphicon-chevron-down');
        $('#toggle-busq-span2').addClass('glyphicon-chevron-down');
    }
});