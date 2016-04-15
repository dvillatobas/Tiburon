$(document).ready(function(){
    $('#toggle-busq').click(function(){
        $('#filtros').toggleClass();
    });
    
    $("input[name='usr-prod']").change(function(){
        $('#form-precio').toggle();
        $('#form-tipo-prod').toggle();
        $('#filtro-productos').toggle();
    });
    $('#buscar-nav').click(function(event){
        window.open('busqueda.html');
    });
});

