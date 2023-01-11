$(document).ready(function(){
    $(".tab_content").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
});
        