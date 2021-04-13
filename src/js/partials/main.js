function animations(scroll){
    if($('.section[data-section-id="1"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-0')
    }

    if($('.section[data-section-id="1"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index0')
    }
    
    if($('.section[data-section-id="2"]').offset().top - $(window).height() / 2 <= scroll){
        $('body').addClass('fp-viewing-1')
    }

    if($('.section[data-section-id="2"]').offset().top < scroll + $(window).height()){
        $('#to-top-btn').addClass('dark')
    } else{
        $('#to-top-btn').removeClass('dark')
    }
    
    if($('.section[data-section-id="3"]').offset().top < scroll + $(window).height()){
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

    if($('.section[data-section-id="4"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="5"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }

    if($('.section[data-section-id="6"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index1')
    }

    if($('.section[data-section-id="7"]').offset().top <= scroll){
        $('#logo-btn svg').removeClass().addClass('index2')
    }
}

$(document).ready(function(){
    let leftCoordination = $('.container').css('margin-left')
    let headerWidth = $('.header').css('width')
    $('#logo-btn').css({left: `${leftCoordination}`})
    $('#to-top-btn').css({left: `${leftCoordination}`})
    $('.header').css({right: `calc(${leftCoordination} - ${headerWidth})`})

    animations($(window).scrollTop())

    $(document).scroll(function(){
        let scroll = $(window).scrollTop()
        animations(scroll)
    })

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
	var	scrollPos = 0;
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

    $('.stages__slider').on('afterChange', function(event, slick, currentSlide){
        if(currentSlide == 0){
         
        }

        if(currentSlide == 2){
          
        }
    });
})