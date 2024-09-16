$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        autoPlay: true,
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<div class='owl-prev'>‹</div>", "<div class='owl-next'>›</div>"],
        autoplayTimeout: 4000
    });
});
