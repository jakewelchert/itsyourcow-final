$(document).ready(function(){
    $(".navbutton a").click(function(){
        $(".overlay").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".navbutton a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});