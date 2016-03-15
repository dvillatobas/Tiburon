$(document).ready(function(){
    $('button').click(function(event){
        $('button').removeClass('active');
        $(this).addClass('active')
    });
    
    $('#toggle-contactos').click(function(){
        $('#toggle-lista-contactos').toggleClass();
    });
    
    var chat= document.getElementById("div-chat");
    chat.scrollTop = chat.scrollHeight;
});
