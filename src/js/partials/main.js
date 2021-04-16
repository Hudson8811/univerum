function animations(scroll){
    if($('.section[data-section-id="1"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-0')
    }

    if($('.section[data-section-id="1"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').removeClass('dark')
    }

    if($('.section[data-section-id="1"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index0')
    }
    
    if($('.section[data-section-id="2"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-1')
    }

    if($('.section[data-section-id="2"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').addClass('dark')
    }
    
    if($('.section[data-section-id="3"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').removeClass('dark')
    } 
    

    if($('.section[data-section-id="2"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }
    
    if($('.section[data-section-id="3"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-2')
    }

    if($('.section[data-section-id="3"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="4"]').offset().top - $(window).height() / 2 <= scroll){
            $('body').addClass('fp-viewing-3')
    }

    if($('.section[data-section-id="5"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-4')
    }

    if($('.section[data-section-id="6"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-5')
    }

    if($('.section[data-section-id="7"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-6')
    }

    if($('.section[data-section-id="8"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-7')
    }

    if($('.section[data-section-id="9"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-8')
    }

    if($('.section[data-section-id="10"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-9')
    }

    if($('.section[data-section-id="4"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="5"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="6"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }

    if($('.section[data-section-id="6"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').addClass('dark')
    } 

    if($('.section[data-section-id="7"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="7"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').removeClass('dark')
    }

    if($('.section[data-section-id="8"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="9"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }

    if($('.section[data-section-id="10"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="9"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').addClass('dark').removeClass('hide')
    } 
    
    
    if($('.section[data-section-id="10"]').offset().top < scroll + $('#to-top-btn').position().top){
        $('#to-top-btn').addClass('hide')
    } 

   
}
const settings = {
    infinite:false,
    arrows:false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
}
function fixPos(){
    let leftCoordination = $('.container').css('margin-left')
    let headerWidth = $('.header').css('width')
    $('#logo-btn').css({left: `${leftCoordination}`})
    $('#to-top-btn').css({left: `${leftCoordination}`})
    $('.forms__desc').css({left: `${leftCoordination}`})
    $('.header').css({right: `calc(${leftCoordination} - ${headerWidth})`})

    if($(window).width() < 768){
        if(!$('.confident__slider').hasClass('slick-initialized')){
            $('.confident__slider').slick(settings)
        }
        
    } else{

        if($('.confident__slider').hasClass('slick-initialized')){
            $('.confident__slider').slick('unslick')
        }
       
    }
}

$(window).resize(function(){
    fixPos()
})

$(document).ready(function(){

    if($('body').hasClass('fp-viewing-0')){
        $('body').addClass('animate-0')
    }


    fixPos()
    // animations($(window).scrollTop())

    // $(document).scroll(function(){
    //     let scroll = $(window).scrollTop()
    //     animations(scroll)
    // })

    // $('.stages__slider').slick({
    //     infinite: false,
    //     arrows: true,
    //     dots: false,
    //     speed:300,
    //     vertical: true,
    //     verticalSwiping: true,
    //     slidesToShow: 8,
    //     responsive: [
    //         {
    //           breakpoint: 1024,
    //           settings: {
    //             slidesToShow: 5,
    //             slidesToScroll: 3,
    //           }
    //         },
    //     ]
    // });
    // var	wheel = 0;
	// var	newDate = new Date();
	// var	oldDate = new Date();
	// $('.stages').on('mousewheel', function(event) {
	// 	newDate = new Date();
	// 	var scrollAllowed = true;

	// 	if( wheel < 10 && (newDate.getTime()-oldDate.getTime()) < 100 ) {
	// 		wheel++;
	// 	}
	// 	else {
	// 		if( (newDate.getTime()-oldDate.getTime()) > 100 ) {
	// 			wheel = 0;
	// 		}
	// 		else {
	// 			scrollAllowed = false;
	// 		}
	// 	}
	// 	oldDate = new Date();
	// 	if( scrollAllowed ) {
	// 		if (event.deltaY > 0) {
	// 			$('.stages .slick-prev').trigger('click');
	// 		} else {
	// 			$('.stages .slick-next').trigger('click');
	// 		}
	// 	}
	// });

    

    $('.allstages__heading').click(function(){
        const $this = $(this)
        if(!$this.hasClass('active')){
            $('.allstages__heading').removeClass('active')
            $('.allstages__content').slideUp()
            $this.addClass('active');
            $this.siblings('.allstages__content').slideDown()
        } else{
            $this.removeClass('active');
            $this.siblings('.allstages__content').slideUp()
        }
    })

    $('#to-top-btn').click(function(e){
        e.preventDefault()
        fullpage_api.moveSectionDown()
    })

    if($('input[type="checkbox"]').prop('checked')){
        $('.forms__submit-btn').attr('disabled', false);
    }else{
        $('.forms__submit-btn').attr('disabled', true);
    }

    $(document).on('change', 'input[type="checkbox"]', function(){
        console.log('up')
        if($('input[type="checkbox"]').prop('checked')){
        $('.forms__submit-btn').attr('disabled', false);
        }else{
        $('.forms__submit-btn').attr('disabled', true);
        }
    });


    $('.forms__input[type="text"], .forms__textarea, .forms__input[type="email"]').focus(function(){
        console.log('focus')
        $(this).parent('.forms__label').addClass('active')
    })

    $('.forms__input[type="text"], .forms__textarea, .forms__input[type="email"]').blur(function(){
        console.log('blur', $(this).val())
        if(!$(this).val()){
            $(this).parent('.forms__label').removeClass('active').addClass('error')
        }
    })
    $('.message-btn').click(function(e){
        e.preventDefault()
        fullpage_api.moveTo(10)
    })
    
    $('.confident__item svg').click(function(){
        $('.confident__slider').slick('next')
    })

    $(document).on('change','.forms__label-file input[type="file"]', function(){
        var file = $(this)[0].files[0]
            if (file){
            $(this).parent('.forms__label-file').addClass('active');
              $('.forms__file-name').text(file.name);
            } else{
                $(this).parent('.forms__label-file').addClass('error');
            }
    });
})
// function fullpage_toggle(toggle, direction) {
//     $.fn.fullpage.setAllowScrolling(toggle, direction);
//     $.fn.fullpage.setKeyboardScrolling(toggle, direction);
// }

$('#fullpage').fullpage({
    licenseKey: '930B3D8E-64114A48-BE58EB40-E2698A87',
    scrollingSpeed: 600,
    scrollHorizontally: false,
    controlArrows: false,
    loopHorizontal: false,
    //scrollOverflow: false,
    bigSectionsDestination: top,
    normalScrollElements: '',
    //normalScrollElements: '.contacts',
    autoScrolling: false,
    // keyboardScrolling: true,
    // responsiveWidth: 1260,
    
    // parallax: false,
    // parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
	// 	parallaxOptions: {
	// 		type: 'cover',
	// 		percentage: 62,
	// 		property: 'translate'
	// 	},
    afterResponsive: function(isResponsive){
        //console.log(isResponsive);
    },
    onLeave: function( origin, destination, direction){

        // if(destination.index == 0 || destination.index == 1 || destination.index == 2 || destination.index == 4 || destination.index == 5){
        //     fullpage_toggle(true);
        // }

        // if(destination.index == 3){
        //     fullpage_toggle(false);
        // }

        if(destination.index == 0){
            $('#logo-btn svg').removeClass().addClass('index0')
            $('#to-top-btn').removeClass('dark')
            $('body').addClass('animate-0')
        }

        if(destination.index == 1){
            $('#to-top-btn').addClass('dark')
            $('#logo-btn svg').removeClass().addClass('index1')
            $('body').addClass('animate-1')
        }

        if(destination.index == 2){
            $('#to-top-btn').removeClass('dark')
            $('#logo-btn svg').removeClass().addClass('index2')
            $('body').addClass('animate-2')
        }

        if(destination.index == 3){
            $('#to-top-btn').removeClass('dark')
            $('#logo-btn svg').removeClass().addClass('index2')
            $('header').removeClass('hide')
            $('body').addClass('animate-3')
        }

        if(destination.index == 4){
            $('#to-top-btn').removeClass('dark')
            $('#logo-btn svg').removeClass().addClass('index2')
            $('body').addClass('animate-4')

            if($(window).width() < 768){
                $('header').addClass('hide')
            }
        }

        if(destination.index == 5){
            $('#logo-btn svg').removeClass().addClass('index1')
            $('#to-top-btn').addClass('dark')
            $('header').removeClass('hide')
            $('body').addClass('animate-5')
        }
        if(destination.index == 6){
            $('#logo-btn svg').removeClass().addClass('index2')
            $('#to-top-btn').removeClass('dark')
            $('header').removeClass('hide')
            $('body').addClass('animate-6')
        }

        if(destination.index == 7){
            $('#logo-btn svg').removeClass().addClass('index2')
            $('#to-top-btn').removeClass('dark')
            $('header').addClass('hide')
            $('body').addClass('animate-7')
        }

        if(destination.index == 8){
            $('#logo-btn svg').removeClass().addClass('index1')
            $('#to-top-btn').addClass('dark').removeClass('hide')
            $('header').removeClass('hide')
            $('body').addClass('animate-8')
        }

        if(destination.index == 9){
            $('#logo-btn svg').removeClass().addClass('index2')
            $('#to-top-btn').addClass('dark').addClass('hide')
            $('header').addClass('hide')
            $('body').addClass('animate-9')
        }
    }
});



// $('.stages__slider').on('afterChange', function(event, slick, currentSlide) {
//     console.log(currentSlide)

//     if($(window).width() <1024){
//         if(currentSlide == 0){
//             fullpage_toggle(true,'up');
//         }
    
//         if(currentSlide == 6){
//             fullpage_toggle(true,'down');
//         }

//     } else{
//         if(currentSlide == 0){
//             fullpage_toggle(true,'up');
//         }
    
//         if(currentSlide == 2){
//             fullpage_toggle(true,'down');
//         }
//     }
    
// });

$("#form1").submit(function(){
    $.ajax({ 
        type: "POST", 
        url: "assets/php/form1.php",
        data: $("#form1").serialize(),
        success: function(html) { 
        }
    });
    $('#form1').trigger("reset");
    return false;
});


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
// We execute the same script as before
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});