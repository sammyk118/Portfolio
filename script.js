$(document).foundation();


$(document).ready( ()=> {
    $("#test").on("click", function (event) {
        console.log("eyo");
        $('html, body').animate({
            scrolltop: $("#testTarget").offset().top
        }, 800, function () {
            console.log("it worked!");
        });
        })
    
})