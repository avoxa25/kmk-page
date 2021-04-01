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

reviews.on("mousewheel", ".owl-stage", function (e)
{ 
    0 < e.deltaY ? owl.trigger("next.owl") : owl.trigger("prev.owl"), e.preventDefault()
});

const cases = $("#cases"); 

cases.owlCarousel({
    margin: 10,
    loop: true,
    items: 1
});