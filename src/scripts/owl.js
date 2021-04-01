const reviews = $("#reviews");

reviews.owlCarousel({ loop: !0,
    nav: !1,
    center: !0,
    margin: 20,
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
    loop: true,
    items: 1
});