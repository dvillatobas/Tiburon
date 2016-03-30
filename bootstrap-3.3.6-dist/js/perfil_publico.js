$(document).ready(function(){
    
    $('#following').toggle();
    $('#do-unfollow').toggle();
    $('#cruz-roja').toggle();
    
    $('#tick-verde').click(function(){
        $('#tick-verde').toggle();
        $('#follow').toggle();
        
        $('#following').toggle();
        $('#cruz-roja').toggle();
    });
    $('#cruz-roja').click(function(){
        $('#following').toggle();
        $('#cruz-roja').toggle();
        
        $('#follow').toggle();
        $('#tick-verde').toggle();
    });
    $('#cruz-roja').hover(function(){
        $('#following').toggle();
        $('#do-unfollow').toggle();
    });
    
});