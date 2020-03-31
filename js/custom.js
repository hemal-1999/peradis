/*
===============================================
                    Menu
===============================================
*/

$(document).ready(function(){
    $(".fa-times").hide();
    $(".fa-bars").click(function(){
        $("ul.menu").show();
        $(this).hide();
        $(".fa-times").show();
    })
    $(".fa-times").click(function(){
        $(this).hide();
        $("ul.menu").hide();
        $(".fa-bars").show();
    })
});

/*
===============================================
                    Owl Carousel
===============================================
*/

/* service carousel */
$('.service-carousel').owlCarousel({
    loop:true,
    margin:50,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})



/* gellary carousel */
$('.gallary-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
/* Review carousel */
$('.review-caruosel').owlCarousel({
    /*loop:true,*/
    items:1,
})








/*
===============================================
                    Counter Up
===============================================
*/

$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 4000
    });
});

/*
===============================================
            Teacher Profile Carousel
===============================================
*/

/* service carousel */
$('.teacher-profile-carousel').owlCarousel({
    loop:true,
    margin:50,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
