$(document).ready(function(){
    $('.feedback-carousel').slick({
        infinite: true,
        arrows: true,
        prevArrow:'<button type="button" class="slick-prev"><span class="iconify" data-icon="akar-icons:arrow-left"></span></button>',
        nextArrow:'<button type="button" class="slick-next"><span class="iconify" data-icon="akar-icons:arrow-right"></span></button>',
    });


    var width = $(window).width();
    $(window).resize(function() {
        if( width <1400){
            $('.hr-vertical-xl').addClass('hr-vertical');
        // }else{
        //     $('.hr-vertical-xl').removeClass('hr-vertical');
        }
    });
});