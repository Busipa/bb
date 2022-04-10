
       const nextIcon = '<img src="./img/icon/arrow_right.svg" alt="right">';
       const prevIcon = '<img src="./img/icon/arrow_left.svg" alt="left" >';
        $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 250,
    nav:true,
    navText: [
    prevIcon,
    nextIcon
    ],
    touchDrag:true,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        

        781:{
            items:2,
            dots:true,
            margin: 30,
        },

        840:{
            items:3,
            margin: 250,
        },

        930:{
            margin: 150,
            items:3,
        },

        1129: {
            items:3,
            margin: 230,
        },

        1200:{
            items:3
        }
    }
})
