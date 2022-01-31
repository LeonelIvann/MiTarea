$( document ).ready(function() {
    $("#cargando").animate({
        opacity: 0.1
        }, 4700, function() {
        });
    $(".fa-spinner").animate({
        opacity: 0.1
        }, 4700, function() {
        });
    $("#continuar").fadeIn(6800);
    console.log("Cargando DOM");
});

$("#continuar").click(function(event) {
    $("#cover").animate({
        opacity: 0,
        zIndex: -1
    }, 800, function() {
        $("#cargando").animate({
            opacity: 0,
            }, 0, function() {
            });
        $("#continuar").animate({
            opacity: 0,
            }, 0, function() {
            });
    });
    console.log("DOM Listo");
});
