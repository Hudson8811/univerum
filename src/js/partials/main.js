$('#fullpage').fullpage({
    licenseKey: '930B3D8E-64114A48-BE58EB40-E2698A87',
    scrollingSpeed: 600,
    scrollHorizontally: false,
    controlArrows: false,
    loopHorizontal: false,
    //scrollOverflow: false,
    bigSectionsDestination: top,
    //normalScrollElements: '.process__right',
    //normalScrollElements: '.contacts',
    keyboardScrolling: true,
    responsiveWidth: 1260,
    afterResponsive: function(isResponsive){
        //console.log(isResponsive);
    },
    onLeave: function( origin, destination, direction){
        // $('.js-top-menu li').removeClass('active');
        // $('.js-top-menu a[data-index="'+destination.index+'"]').parent().addClass('active');
        // if ($(window).width() > 1260){
        //     if(destination.index == 0 || destination.index == 1 || destination.index == 2 || destination.index == 4 || destination.index == 5){
        //         fullpage_toggle(true);
        //     }

        //     if(destination.index == 3){
        //         fullpage_toggle(false);
        //         if ($('.process__dot.active').is(':first-child')){
        //             fullpage_toggle(true,'up');
        //         }
        //         if ($('.process__dot.active').is(':last-child')){
        //             fullpage_toggle(true,'down');
        //         }
        //     }
        // } else {
        //     fullpage_toggle(true);
        // }


        // if(destination.index == 1 && origin.index == 0 ){
        //     $('.to-top').addClass('active');
        // }
        // if(destination.index == 0 && origin.index == 1 ){
        //     $('.to-top').removeClass('active');
        // }

        if(destination.index == 1){
            setTimeout(() => {
                $('#to-top-btn').addClass('dark')
            }, 300);
        } else{
            setTimeout(() => {
                $('#to-top-btn').removeClass('dark')
            }, 300);
        }

        if(destination.index == 0){
            setTimeout(() => {
                $('#logo-btn svg').removeClass().addClass('index0')
            }, 300);
        } else if(destination.index == 1){
            setTimeout(() => {
                $('#logo-btn svg').removeClass().addClass('index1')
            }, 300);
        } else if(destination.index == 2){
            setTimeout(() => {
                $('#logo-btn svg').removeClass().addClass('index2')
            }, 300);
        }
    }
});

$(document).ready(function(){
    let leftCoordination = $('.container').css('margin-left')
    let headerWidth = $('.header').css('width')
    $('#logo-btn').css({left: `${leftCoordination}`})
    $('#to-top-btn').css({left: `${leftCoordination}`})
    $('.header').css({right: `calc(${leftCoordination} - ${headerWidth})`})

    $('#to-top-btn').on('click', function (e) {
		e.preventDefault();
		$.fn.fullpage.moveSectionDown()
	});
})