// This is the Main.js file. It should be the final file in the build chain

$("#scrolldown").click(function() {
    $('html, body').animate({
        scrollTop: $("main").offset().top
    }, 500, "swing");
});