$(".bgs").slick({
    slidesToShow:1,
    slidesToScroll:1,


})

$(".myh1").textillate({
    in: {effect:'rollIn'}
});

$(document).ready(function(){
    $(".whobg1").ripples({
        dropRadius:6,
        perturbance:0.01,
        
    });
})

$(document).ready(function($){
    $(".counter").counterUp({
     delay: 10,
     time: 1000
    });
   });