$(document).ready(function() {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function() {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function() {
        $("#mycarousel").carousel('cycle');
    });
});
$("#login-link").click(function() {
    $("#loginModal").modal('show');
});
$("#reserve-link").click(function() {
    $("#reserveModal").modal('show');
});
