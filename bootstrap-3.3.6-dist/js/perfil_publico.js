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
        $('#follow').toggle();
        $('#tick-verde').toggle();
        
        $('#following').toggle();
        $('#cruz-roja').toggle();
        
        
    });
 /*   $('#cruz-roja').hover(function(){
        $('#do-unfollow').toggle();
        $('#following').toggle();
        
    });
    */
});