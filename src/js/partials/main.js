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

function fixPos(){
    let leftCoordination = $('.container').css('margin-left')
    let headerWidth = $('.header').css('width')
    $('#logo-btn').css({left: `${leftCoordination}`})
    $('#to-top-btn').css({left: `${leftCoordination}`})
    $('.forms__desc').css({left: `${leftCoordination}`})
    $('.header').css({right: `calc(${leftCoordination} - ${headerWidth})`})
}

$(window).resize(function(){
    fixPos()
})

$(document).ready(function(){
    fixPos()
    // animations($(window).scrollTop())

    // $(document).scroll(function(){
    //     let scroll = $(window).scrollTop()
    //     animations(scroll)
    // })

    $('.stages__slider').slick({
        infinite: false,
        arrows: true,
        dots: false,
        speed:300,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 8,
    });
    var	wheel = 0;
	var	newDate = new Date();
	var	oldDate = new Date();
	$('.stages').on('mousewheel', function(event) {
		newDate = new Date();
		var scrollAllowed = true;

		if( wheel < 10 && (newDate.getTime()-oldDate.getTime()) < 100 ) {
			wheel++;
		}
		else {
			if( (newDate.getTime()-oldDate.getTime()) > 100 ) {
				wheel = 0;
			}
			else {
				scrollAllowed = false;
			}
		}
		oldDate = new Date();
		if( scrollAllowed ) {
			if (event.deltaY > 0) {
				$('.stages .slick-prev').trigger('click');
			} else {
				$('.stages .slick-next').trigger('click');
			}
		}
	});

    

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

    if($('.forms__capcha-label input[type="checkbox]').attr('checked', false)){
        $('.forms__submit-btn').addClass('disabled')
    }

    $('.forms__input, .forms__textarea').focus(function(){
        console.log('focus')
        $(this).parent('.forms__label').addClass('active')
    })

    $('.forms__input, .forms__textarea').blur(function(){
        console.log('blur', $(this).val())
        if(!$(this).val()){
            $(this).parent('.forms__label').removeClass('active') 
        }
    })
})
function fullpage_toggle(toggle, direction) {
    $.fn.fullpage.setAllowScrolling(toggle, direction);
    $.fn.fullpage.setKeyboardScrolling(toggle, direction);
}

$('#fullpage').fullpage({
    licenseKey: '930B3D8E-64114A48-BE58EB40-E2698A87',
    scrollingSpeed: 600,
    scrollHorizontally: false,
    controlArrows: false,
    loopHorizontal: false,
    //scrollOverflow: false,
    bigSectionsDestination: top,
    normalScrollElements: '.section[data-section-id="3"]',
    //normalScrollElements: '.contacts',
    autoScrolling: false,
    keyboardScrolling: true,
    // responsiveWidth: 1260,
    
    parallax: true,
    parallaxKey: 'YWx2YXJvdHJpZ28uY29tXzlNZGNHRnlZV3hzWVhnPTFyRQ==',
		parallaxOptions: {
			type: 'reveal',
			percentage: 62,
			property: 'translate'
		},
    afterResponsive: function(isResponsive){
        //console.log(isResponsive);
    },
    onLeave: function( origin, destination, direction){

        if(destination.index == 0 || destination.index == 1 || destination.index == 2 || destination.index == 4 || destination.index == 5){
            fullpage_toggle(true);
        }

        if(destination.index == 3){
            fullpage_toggle(false);
        }

        if(destination.index == 0){
            $('#logo-btn svg').removeClass().addClass('index0')
            $('#to-top-btn').removeClass('dark')
        }

        if(destination.index == 1){
            $('#to-top-btn').addClass('dark')
            $('#logo-btn svg').removeClass().addClass('index1')
        }

        if(destination.index == 2){
            $('#to-top-btn').removeClass('dark')
            $('#logo-btn svg').removeClass().addClass('index2')
        }

        if(destination.index == 3){
            $('#to-top-btn').removeClass('dark')
            $('#logo-btn svg').removeClass().addClass('index2')
        }

        if(destination.index == 4){
            $('#to-top-btn').removeClass('dark')
            $('#logo-btn svg').removeClass().addClass('index2')
        }

        if(destination.index == 5){
            $('#logo-btn svg').removeClass().addClass('index1')
            $('#to-top-btn').addClass('dark')
        }
        if(destination.index == 6){
            $('#logo-btn svg').removeClass().addClass('index2')
            $('#to-top-btn').removeClass('dark')
        }

        if(destination.index == 7){
            $('#logo-btn svg').removeClass().addClass('index2')
            $('#to-top-btn').removeClass('dark')
        }

        if(destination.index == 8){
            $('#logo-btn svg').removeClass().addClass('index1')
            $('#to-top-btn').addClass('dark').removeClass('hide')
        }

        if(destination.index == 9){
            $('#logo-btn svg').removeClass().addClass('index2')
            $('#to-top-btn').addClass('dark').addClass('hide')
        }
    }
});



$('.stages__slider').on('afterChange', function(event, slick, currentSlide) {
    console.log(currentSlide)
    if(currentSlide == 0){
        fullpage_toggle(true,'up');
    }

    if(currentSlide == 2){
        fullpage_toggle(true,'down');
    }
});

$("#form1").submit(function(){
		
		
		
    $.ajax({ 
        type: "POST", 
        url: "assets/form1.php",
        data: $("#form1").serialize(),
        success: function(html) { 
        }
    });
    $('#form1').trigger("reset");
    return false;
});