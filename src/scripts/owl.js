const reviews = $("#reviews");

reviews.owlCarousel({ loop: !0,
    nav: !1,
    center: false,
    margin: 20,
    loop: false,
    responsive:{ 
        0: { 
            items: 1 
        }, 
        600: 
        { 
            items: 3 }
         }});

const cases = $("#cases"); 

cases.owlCarousel({
    margin: 10,
    loop: false,
    items: 1
});