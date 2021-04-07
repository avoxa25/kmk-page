const reviews = $(`#reviews`);
const cases = $(`#cases`); 

reviews.owlCarousel({
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


cases.owlCarousel({
    margin: 10,
    loop: false,
    items: 1
});