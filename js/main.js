$(document).ready(function (params) {
    $(".owl-carousel").owlCarousel({
        margin: 1500,
        center: true,
        loop: true,
        nav:true,
        autoWidth:true,
        autoplay:true,
        autoplaySpeed: 1500,
        navText:[
            '<img src="img/Arrow left.png" alt="Arrow left">',
            '<img src="img/Arrow right.png" alt="Arrow right">'
        ]
    });
});