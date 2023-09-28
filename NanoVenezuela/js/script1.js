/* 

$(function() {

$('body').hide().fadeIn(3000);

}); 

*/


/*

$(window).scroll(function () 
{
    $('#programming').each(function () 
    {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) 
        {
            
            $(this).addClass("animate__animated animate__backInLeft");
            $(this).css({visibility: "visible"});

        } 
        else 
        {
        $(this).css({visibility: "hidden"});
        $(this).removeClass("animate__animated animate__backInLeft");
        }
    });
}); 

*/

